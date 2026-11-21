"""Uso: python3 tools/journey.py [d|m|dm] [tappe separate da virgola]
Fotografa l'anteprima integrata a ogni tappa della camera. Salva shots/journey_<d|m>.jpg"""
import asyncio,sys,subprocess,socket,time
from playwright.async_api import async_playwright
from PIL import Image
def server():
    s=socket.socket()
    if s.connect_ex(('127.0.0.1',8802))!=0:
        subprocess.Popen(['python3','-m','http.server','8802','--directory','/home/claude/preview2'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL); time.sleep(1)
    s.close()
JS="""(i)=>{const K=%s;const k=K[i];let y=0;if(k[0]){const el=document.querySelector(k[0]);if(!el)return -1;const r=el.getBoundingClientRect();y=r.top+scrollY+r.height*k[1]-innerHeight/2}
window.scrollTo(0,Math.max(0,y));window.FX_U=i;return y}"""
KS=[[None,0],['#home',1],['.fx-win[data-fx="pugno"]',.5],['#trailer',.5],['.fx-win[data-fx="ring"]',.5],['#about',.5],['.fx-win[data-fx="fitness"]',.5],['#corsi',.5],['#reviews',.5],['#orari',.5],['#gallery',.5],['#faq',.5],['#faq',1],['.fx-win[data-fx="finale"]',.5],['#prova',.5],['#contatti',.5]]
import json
async def main():
    global KS
    which=sys.argv[1] if len(sys.argv)>1 else 'dm'
    keys=[float(x) for x in sys.argv[2].split(',')] if len(sys.argv)>2 and sys.argv[2][0].isdigit() else list(range(len(KS)))
    server()
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'])
        for n,w,h,m in [('d',1200,680,False),('m',390,780,True)]:
            if n not in which: continue
            c=await b.new_context(viewport={'width':w,'height':h},is_mobile=m,has_touch=m,device_scale_factor=1)
            pg=await c.new_page(); errs=[]
            pg.on('pageerror',lambda e:errs.append(str(e))); pg.on('console',lambda mm:errs.append(mm.text) if mm.type=='error' and 'ERR_' not in mm.text and '404' not in mm.text else None)
            await pg.goto('http://127.0.0.1:8802/index.html?fxforce'); 
            try: await pg.wait_for_function('window.__fx',timeout=90000)
            except Exception: print(n,'SCENA NON PARTITA',errs[:6]); continue
            import os
            if os.environ.get('NOPAGE'): await pg.add_style_tag(content='main>section>*,main>div:not(.fx-win)>*{visibility:hidden!important}main>section,main>div{background:transparent!important}')
            await pg.wait_for_function('window.__fxGlove',timeout=60000); await pg.wait_for_function('window.__fxBuilt',timeout=180000); await pg.wait_for_timeout(1500); ims=[]
            raw=await pg.evaluate('window.__fxKeys'); KS.clear()
            for i,(sel,at,kid) in enumerate(raw):
                if sel is None and i>0: KS.append([KS[-1][0],1])
                elif kid=='carica': KS.append(['#home',1])
                else: KS.append([sel,at])
            IDS=[r[2] for r in raw]
            if len(sys.argv)>2 and not sys.argv[2][0].isdigit(): keys=[IDS.index(x) for x in sys.argv[2].split(',')]
            elif len(sys.argv)<=2: keys=list(range(len(KS)))
            for k in keys:
                await pg.evaluate(JS%json.dumps(KS),int(k)); 
                if k!=int(k): await pg.evaluate(f'window.FX_U={k}')
                await pg.wait_for_function('window.__fxDone!=null',timeout=180000); await pg.wait_for_timeout(3200)
                f=f'/home/claude/fx/shots/_j_{n}_{k}.png'; await pg.screenshot(path=f,timeout=180000); ims.append(Image.open(f))
            print(n,await pg.evaluate('window.__fx'),'errori:',errs[:4])
            cols=(2 if len(ims)<=4 else 3) if n=='d' else min(len(ims),6) # BIG
            rows=(len(ims)+cols-1)//cols; W,H=ims[0].size
            sh=Image.new('RGB',(W*cols,H*rows))
            for i,im in enumerate(ims): sh.paste(im,((i%cols)*W,(i//cols)*H))
            tw=1950; sh=sh.resize((tw,int(tw*sh.height/sh.width))); sh.save(f'/home/claude/fx/shots/journey_{n}.jpg',quality=82)
        await b.close()
if __name__=="__main__": asyncio.run(main())
