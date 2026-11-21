"""Uso: python3 tools/shot.py <asset> [lift]
Fotografa assets/<asset>.js da 6 angolazioni + 2 primi piani e salva shots/<asset>_sheet.jpg (da aprire con Read)."""
import asyncio,sys,subprocess,os,socket,time
from playwright.async_api import async_playwright
from PIL import Image
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def server():
    s=socket.socket()
    if s.connect_ex(('127.0.0.1',8801))!=0:
        subprocess.Popen(['python3','-m','http.server','8801','--directory',ROOT],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL); time.sleep(1)
    s.close()
async def main():
    name=sys.argv[1]; lift=''; extra=''.join('&'+a for a in sys.argv[2:] if '=' in a); tag=''.join('_'+a.split('=')[1].split('/')[-1].split('.')[0] for a in sys.argv[2:] if a.startswith('model='))
    server()
    views=[(0.6,0.25,0),(2.2,0.2,0),(3.6,0.3,0),(5.2,0.15,0),(0.0,1.2,0),(1.2,-0.1,0),(0.8,0.3,0.55),(4.0,0.2,0.55)]
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'])
        pg=await b.new_page(viewport={'width':640,'height':520}); errs=[]
        pg.on('pageerror',lambda e:errs.append(str(e))); pg.on('console',lambda m:errs.append(m.text) if m.type=='error' else None)
        ims=[];info=None
        for i,(y,pi,zoom) in enumerate(views):
            u=f'http://127.0.0.1:8801/harness.html?asset={name}&yaw={y}&pitch={pi}'+extra
            await pg.goto(u)
            try: await pg.wait_for_function('window.__ready===true',timeout=60000)
            except Exception as e: print('ERRORE',errs[:5]); await b.close(); return
            if zoom:
                d=await pg.evaluate('1'); 
            info=await pg.evaluate('window.__info'); await pg.wait_for_timeout(150)
            f=f'{ROOT}/shots/_{name}_{i}.png'; await pg.screenshot(path=f)
            im=Image.open(f)
            if zoom: w,h=im.size; im=im.crop((int(w*.22),int(h*.2),int(w*.78),int(h*.8))).resize((w,h))
            ims.append(im)
        await b.close()
    w,h=ims[0].size; sh=Image.new('RGB',(w*4,h*2))
    for i,im in enumerate(ims): sh.paste(im,((i%4)*w,(i//4)*h))
    sh=sh.resize((1920,int(1920*sh.height/sh.width))); out=f'{ROOT}/shots/{name}{tag}_sheet.jpg'; sh.save(out,quality=85)
    print('ok',out,info,'errori:',errs[:3])
asyncio.run(main())
