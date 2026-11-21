"""Misura cosa costa la scena DOPO il primo gesto: python3 tools/gesto.py <m|d> [rallentamento cpu]"""
import asyncio,sys,json
from playwright.async_api import async_playwright
sys.path.insert(0,'/home/claude/fx/tools')
from journey import server
async def main():
    n=sys.argv[1]; rate=float(sys.argv[2]) if len(sys.argv)>2 else (4 if n=='m' else 1); server()
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'])
        w,h,m=(390,780,True) if n=='m' else (1200,680,False)
        c=await b.new_context(viewport={'width':w,'height':h},is_mobile=m,has_touch=m,device_scale_factor=1); pg=await c.new_page()
        sizes={}
        import os
        if not os.environ.get('DEBOLE'): await pg.add_init_script("Object.defineProperty(navigator,'hardwareConcurrency',{get:()=>8})")   # la macchina di prova ha 2 processori: senza questo la scena (giustamente) non parte
        pg.on('response',lambda r: sizes.__setitem__(r.url.split('/')[-1].split('?')[0], int(r.headers.get('content-length','0'))) if ('fx3d' in r.url or '/models/' in r.url) else None)
        await pg.goto('http://127.0.0.1:8802/index.html'); await pg.wait_for_timeout(2500)
        before=dict(sizes)
        cdp=await c.new_cdp_session(pg); await cdp.send('Emulation.setCPUThrottlingRate',{'rate':rate})
        await pg.evaluate("""()=>{window.__lt=[];new PerformanceObserver(l=>{for(const e of l.getEntries())window.__lt.push(Math.round(e.duration))}).observe({entryTypes:['longtask']});window.__t0=performance.now();new MutationObserver(()=>{if(!window.__ton&&document.documentElement.classList.contains('fx-on'))window.__ton=performance.now()}).observe(document.documentElement,{attributes:true})}""")
        await pg.mouse.wheel(0,120) if not m else await pg.evaluate('window.scrollBy(0,120)')
        try: await pg.wait_for_function('window.__ton>0',timeout=120000)
        except Exception: print('scena non partita'); 
        await pg.wait_for_function('window.__fxBuilt',timeout=120000); await pg.evaluate('window.__tb=performance.now()'); await pg.wait_for_timeout(1500)
        r=await pg.evaluate('({lt:window.__lt,on:Math.round((window.__ton||0)-window.__t0)})'); print('  mondo completo dopo', await pg.evaluate('Math.round(window.__tb-window.__t0)'),'ms')
        lt=r['lt']; print(n,'cpu x%g'%rate,'| scaricato prima del gesto:',before,'| dopo il gesto: %d KB'%(sum(sizes.values())//1024),{k:v//1024 for k,v in sizes.items()})
        print('  scena visibile dopo %d ms dal gesto | blocchi lunghi: %d, il piu lungo %d ms, somma oltre i 50 ms: %d ms'%(r['on'],len(lt),max(lt or [0]),sum(max(0,x-50) for x in lt)), sorted(lt,reverse=True)[:8])
        await b.close()
asyncio.run(main())
