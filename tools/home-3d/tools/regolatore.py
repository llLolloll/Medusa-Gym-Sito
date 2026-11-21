"""Prova il regolatore: python3 tools/regolatore.py <m|d> [w h]  -> scorre davvero la pagina e dice se la scena si alleggerisce / si spegne e se la pagina salta"""
import asyncio,sys,json
from playwright.async_api import async_playwright
async def main():
    n=sys.argv[1]
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'])
        w,h,m=(390,780,True) if n=='m' else (1200,680,False)
        if len(sys.argv)>3: w,h=int(sys.argv[2]),int(sys.argv[3])
        c=await b.new_context(viewport={'width':w,'height':h},is_mobile=m,has_touch=m,device_scale_factor=1); pg=await c.new_page()
        errs=[]; pg.on('pageerror',lambda e: errs.append((str(e)+' | '+(e.stack or '')[:400]))); pg.on('console',lambda x: errs.append(x.text[:200]) if x.type=='error' else None)
        await pg.add_init_script("Object.defineProperty(navigator,'hardwareConcurrency',{get:()=>8})")
        await pg.goto('http://127.0.0.1:8802/index.html'); await pg.wait_for_timeout(2000)
        await pg.evaluate('window.scrollBy(0,120)')
        await pg.wait_for_function('window.__fxBuilt',timeout=180000)
        await pg.evaluate("""()=>{window.__fr=[];let l=performance.now();(function f(n){window.__fr.push(n-l);l=n;requestAnimationFrame(f)})(l)}""")
        log=[]; off=None
        for i in range(90):
            st=await pg.evaluate("""()=>{const on=document.documentElement.classList.contains('fx-on');let sec='';for(const el of document.querySelectorAll('section,footer')){if(el.classList.contains('fx-win'))continue;const r=el.getBoundingClientRect();if(r.bottom>80){sec=(el.id||el.className.split(' ')[0])+'@'+Math.round(r.top);break}}const tops={};for(const el of document.querySelectorAll('section[id],footer')){const r=el.getBoundingClientRect();if(r.bottom>-200&&r.top<innerHeight+200)tops[el.id||'footer']=Math.round(r.top)}return {on,tops,gov:window.__fxGov||0,sec,y:Math.round(scrollY),wins:document.querySelectorAll('.fx-win').length,cv:!!document.querySelector('canvas.fx-world')}}""")
            if not log or (st['gov'],st['on'])!=(log[-1]['gov'],log[-1]['on']): print('  t=%2d'%i, {k:v for k,v in st.items() if k!='tops'})
            if log and log[-1]['on'] and not st['on']: off=(log[-1],st)
            log.append(st)
            await pg.evaluate('window.scrollBy(0,%d)'%(60 if i%2 else 45)); await pg.wait_for_timeout(350)
        fr=await pg.evaluate('window.__fr.slice(5)'); fr.sort()
        print(n,'%dx%d'%(w,h),'| fotogrammi',len(fr),'mediano %.0f ms'%fr[len(fr)//2],'| regolatore finale:',log[-1]['gov'],'| scena accesa:',log[-1]['on'],'| memoria sessione:',await pg.evaluate("sessionStorage.getItem('fxoff')"))
        if off: print('  allo spegnimento: prima',off[0]['tops'],'y',off[0]['y'],'-> dopo',off[1]['tops'],'y',off[1]['y'])
        print('  errori:',errs[:5])
        if log[-1]['gov']==2:
            await pg.reload(); await pg.wait_for_timeout(1500); await pg.evaluate('window.scrollBy(0,200)'); await pg.wait_for_timeout(5000)
            print('  dopo ricarica nella stessa visita: scena accesa =',await pg.evaluate("document.documentElement.classList.contains('fx-on')"))
        await b.close()
asyncio.run(main())
