/* Script principale della home (prima era inline in index.html). Caricato con defer dopo GSAP. */
/* ---------- LOADER ---------- */
/* GSAP (self-hosted in /js): se non carica, il sito usa il comportamento di prima */
const HAS_GSAP=!!(window.gsap&&window.ScrollTrigger);
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(HAS_GSAP){gsap.registerPlugin(ScrollTrigger);if(window.SplitText)gsap.registerPlugin(SplitText);document.documentElement.classList.add('gsap')}
/* Loader: esce appena i font sono pronti (min 0,7s per il logo), non più dopo load + 1,8s */
function hideLoader(){if(hideLoader.done)return;hideLoader.done=1;
 const L=document.getElementById('loader');if(L)L.classList.add('hide');document.body.classList.remove('loading');
 if(HAS_GSAP){initSplits();heroIntro()}else initHero();
 goHash()}
/* Arrivo da un'altra pagina con un'ancora (es. index.html#prova): la sezione compare subito
   e si scrolla al punto giusto DOPO che animazioni e sezioni fissate hanno preso le misure */
function goHash(){const h=location.hash;if(!h||h.length<2)return;let t;try{t=document.querySelector(h)}catch(e){return}if(!t)return;
 const show=()=>t.querySelectorAll('.fu').forEach(e=>{e.dataset.shown='1';e.classList.add('in');if(HAS_GSAP)gsap.set(e,{clearProps:'opacity,visibility,transform'});else{e.style.opacity='';e.style.transform=''}});
 const go=()=>{show();window.scrollTo({top:t.getBoundingClientRect().top+scrollY,behavior:'auto'})};
 go();requestAnimationFrame(go);setTimeout(go,350);addEventListener('load',()=>setTimeout(go,120),{once:true})}
if('scrollRestoration' in history&&location.hash)history.scrollRestoration='manual';
(function(){const t0=performance.now();
 const fonts=document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,400))]):Promise.resolve();
 let seen=false;try{seen=sessionStorage.getItem('mg-loader')==='1';sessionStorage.setItem('mg-loader','1')}catch(e){}
 fonts.then(()=>setTimeout(hideLoader,0));
 setTimeout(hideLoader,1200);
})();


/* ricalcola i punti di scroll quando una sezione sotto la piega viene disegnata */
/* un solo ricalcolo, a scroll fermo: durante lo scroll i ricalcoli facevano scattare la pagina */
if(HAS_GSAP&&'oncontentvisibilityautostatechange' in document.documentElement){let _cvT,_cvP=false;
 const _cvRun=()=>{clearTimeout(_cvT);_cvT=setTimeout(()=>{if(_cvP){_cvP=false;ScrollTrigger.refresh()}},400)};
 document.querySelectorAll('#orari,#famiglia,#gallery,#risultati,#in-breve,#faq,#prova,#contatti,footer').forEach(e=>e.addEventListener('contentvisibilityautostatechange',()=>{_cvP=true;_cvRun()}));
 addEventListener('scroll',()=>{if(_cvP)_cvRun()},{passive:true})}
/* ---------- AUDIO ---------- */
let actx=null,soundOn=false;
function tick(f=1200,d=.04,v=.05){if(!soundOn)return;if(!actx)actx=new(window.AudioContext||window.webkitAudioContext)();const o=actx.createOscillator(),g=actx.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(v,actx.currentTime);g.gain.exponentialRampToValueAtTime(.001,actx.currentTime+d);o.connect(g);g.connect(actx.destination);o.start();o.stop(actx.currentTime+d)}
const sBtn=document.getElementById('soundToggle');
const SND_ON='<svg class="" aria-hidden="true"><use href="#i-son"></use></svg>',SND_OFF='<svg class="" aria-hidden="true"><use href="#i-soff"></use></svg>';
sBtn.addEventListener('click',()=>{soundOn=!soundOn;sBtn.innerHTML=soundOn?SND_ON:SND_OFF;sBtn.classList.toggle('on',soundOn);if(soundOn){if(!actx)actx=new(window.AudioContext||window.webkitAudioContext)();tick(800,.05,.04)}});

/* ---------- SUONO AL PASSAGGIO (cursore neon rimosso, resta il click sonoro opzionale) ---------- */
const HOVERABLES='a,button,.cc,.tcard,.stat,.medusa-bg,.faq-q,.rcard,.gi,.champ,.chip,.spot';
if(matchMedia('(pointer:fine)').matches){
 document.addEventListener('mouseover',e=>{const t=e.target.closest&&e.target.closest(HOVERABLES);if(t&&!t.contains(e.relatedTarget))tick(1400,.03,.02)});
}

/* ---------- EASTER EGG MEDUSA ---------- */
const medusa=document.getElementById('medusaBg');
medusa.addEventListener('mouseenter',()=>{
 medusa.classList.add('glitch','eyes-red');tick(600,.15,.06);
 setTimeout(()=>tick(400,.12,.05),100);
 setTimeout(()=>medusa.classList.remove('glitch'),400);
 setTimeout(()=>medusa.classList.remove('eyes-red'),900);
});

/* ---------- PARTICELLE ---------- */
const pc=document.getElementById('particles');
for(let i=0;i<28;i++){const p=document.createElement('div');p.className='part';p.style.left=Math.random()*100+'%';p.style.bottom='-10px';p.style.animationDuration=(8+Math.random()*8)+'s';p.style.animationDelay=Math.random()*8+'s';pc.appendChild(p)}

/* ---------- SCROLL (fallback senza GSAP) ---------- */
if(!HAS_GSAP){addEventListener('scroll',()=>{const y=scrollY;
 document.getElementById('nb').classList.toggle('on',y>80);
 document.getElementById('sticky').classList.toggle('show',y>500);
 document.getElementById('soundToggle').classList.toggle('show',y>500);
 document.querySelectorAll('.ab-img img').forEach(im=>{const r=im.closest('section').getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)im.style.transform='scale(1.06) translateY('+(r.top/innerHeight*-12)+'px)'});
},{passive:true});}

/* ---------- HERO ---------- */
function initHero(){
 setTimeout(()=>medusa.classList.add('show'),100);
 setTimeout(()=>{['hol','ht','hcta','hsub','htag','hpro','hchi','hloc','hwa','hrev'].forEach((id,i)=>{setTimeout(()=>{const e=document.getElementById(id);if(e){e.style.opacity='1';e.style.transform='translateY(0)'}},i*80)});
 setTimeout(()=>{document.getElementById('hdiv').style.width='80px'},520)},280);
}

/* ---------- FADE-UP + CONTATORI (fallback senza GSAP) ---------- */
if(!HAS_GSAP){
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.fu').forEach(e=>io.observe(e));

const sio=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,t=+el.dataset.t,sfx=el.dataset.sfx||'',t0=performance.now();
 (function r(n){const p=Math.min((n-t0)/2000,1),v=1-Math.pow(1-p,3);el.textContent=Math.round(v*t)+sfx;p<1?requestAnimationFrame(r):el.textContent=t+sfx})(t0);sio.unobserve(el)})},{threshold:.6});
document.querySelectorAll('.sn[data-t]').forEach(e=>{if(e.getBoundingClientRect().top<innerHeight)return;e.textContent='0'+(e.dataset.sfx||'');sio.observe(e)});

}

/* ---------- SLIDER CORSI ---------- */
let off=0,panST=null;
const trk=document.getElementById('ctrk'),N=trk.children.length,ct=trk.parentElement;
function sc(d){tick(1000,.04,.04);const w=319;
 if(panST){window.scrollTo({top:Math.min(panST.end,Math.max(panST.start,scrollY+d*w)),behavior:RM?'auto':'smooth'});return}
 if(ct.classList.contains('native')){ct.scrollBy({left:d*w,behavior:RM?'auto':'smooth'});return}
 const vis=Math.max(1,Math.floor((innerWidth-128)/w));off=Math.max(0,Math.min(off+d*w,Math.max(0,(N-vis)*w)));trk.style.transform='translateX(-'+off+'px)'}
if(!HAS_GSAP){let tx=0;
 trk.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});
 trk.addEventListener('touchend',e=>{const dx=tx-e.changedTouches[0].clientX;if(Math.abs(dx)>40)sc(dx>0?1:-1)},{passive:true});}

/* ---------- GALLERY LIGHTBOX ---------- */
(function(){
 const items=[...document.querySelectorAll('.gi')];
 const box=document.getElementById('lbox'),im=document.getElementById('lbImg'),cap=document.getElementById('lbCap');
 let idx=0,lastFocus=null;
 function show(i){idx=(i+items.length)%items.length;const g=items[idx].querySelector('img');im.src=g.src;im.alt=g.alt;cap.textContent=(items[idx].querySelector('.gcp')||{}).textContent||''}
 function open(i){lastFocus=document.activeElement;show(i);box.classList.add('open');document.body.style.overflow='hidden';document.getElementById('lbX').focus()}
 function close(){box.classList.remove('open');document.body.style.overflow='';if(lastFocus)lastFocus.focus()}
 items.forEach((el,i)=>{el.setAttribute('tabindex','0');el.setAttribute('role','button');el.setAttribute('aria-label','Ingrandisci foto');
  el.addEventListener('click',()=>open(i));
  el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(i)}})});
 document.getElementById('lbX').addEventListener('click',close);
 document.getElementById('lbP').addEventListener('click',()=>show(idx-1));
 document.getElementById('lbN').addEventListener('click',()=>show(idx+1));
 box.addEventListener('click',e=>{if(e.target===box)close()});
 document.addEventListener('keydown',e=>{if(!box.classList.contains('open'))return;
  if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(idx-1);if(e.key==='ArrowRight')show(idx+1)});
 let sx=0;box.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
 box.addEventListener('touchend',e=>{const dx=sx-e.changedTouches[0].clientX;if(Math.abs(dx)>50)show(idx+(dx>0?1:-1))},{passive:true});
})();
/* ---------- ORARI: su mobile una disciplina alla volta, con schede in alto ---------- */
const ORA=(function(){
 const tb=document.querySelector('.orari tbody'),wrap=document.querySelector('.ora-wrap');if(!tb||!wrap)return null;
 const rows=[...tb.rows];const name=r=>r.cells[0].textContent.trim();
 rows.forEach(r=>r.classList.remove('fu'));
 const bar=document.createElement('div');bar.className='ora-tabs';bar.setAttribute('role','tablist');bar.setAttribute('aria-label','Scegli la disciplina');
 const btns=rows.map((r,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.textContent=name(r);
  b.addEventListener('click',()=>{select(i,true);tick(1000,.04,.04)});bar.appendChild(b);return b});
 wrap.parentNode.insertBefore(bar,wrap);
 function select(i,anim){rows.forEach((r,k)=>r.classList.toggle('on',k===i));
  btns.forEach((b,k)=>b.setAttribute('aria-selected',k===i?'true':'false'));
  const b=btns[i];bar.scrollTo({left:Math.max(0,b.offsetLeft-bar.clientWidth/2+b.offsetWidth/2),behavior:anim&&!RM?'smooth':'auto'});
  if(anim&&HAS_GSAP&&!RM&&matchMedia('(max-width:900px)').matches)gsap.fromTo(rows[i],{opacity:0,y:12},{opacity:1,y:0,duration:.4,ease:'power2.out',clearProps:'opacity,transform'});}
 select(0,false);
 /* il giorno di oggi in evidenza */
 const oggi=['Dom','Lun','Mar','Mer','Gio','Ven','Sab'][new Date().getDay()];
 tb.querySelectorAll('td[data-d="'+oggi+'"]').forEach(td=>td.classList.add('today'));
 return{rows,bar,select,find:n=>rows.findIndex(r=>name(r)===n)};
})();
/* ---------- CORSI: su mobile la barra in basso non copre i bottoni delle schede ---------- */
(function(){const st=document.getElementById('sticky'),ct=document.getElementById('ctrk');if(!st||!ct||!('IntersectionObserver' in window))return;
 new IntersectionObserver(en=>en.forEach(x=>st.classList.toggle('hide-c',x.isIntersecting&&matchMedia('(max-width:900px)').matches)),{rootMargin:'0px 0px -60px 0px'}).observe(ct)})();
/* ---------- CORSI: la scheda porta all'orario di QUELLA disciplina ---------- */
const CORSO2ORA={'Kickboxing Kids':'Kickboxing'};
document.querySelectorAll('.cc').forEach(c=>{c.setAttribute('tabindex','0');c.setAttribute('role','link');
 const go=()=>{
  const n=(c.querySelector('.cn')||{}).textContent||'';const t=CORSO2ORA[n.trim()]||n.trim();
  const i=ORA?ORA.find(t):-1;const mob=matchMedia('(max-width:900px)').matches;let top;
  if(i>-1){ORA.select(i,false);const r=ORA.rows[i];
   top=mob?ORA.bar.getBoundingClientRect().top+scrollY-96:r.getBoundingClientRect().top+scrollY-innerHeight/2+r.offsetHeight/2;
   r.classList.remove('flash');void r.offsetWidth;r.classList.add('flash');setTimeout(()=>r.classList.remove('flash'),2200);}
  else top=document.getElementById('orari').getBoundingClientRect().top+scrollY;
  window.scrollTo({top,behavior:RM?'auto':'smooth'})};
 c.addEventListener('click',e=>{if(e.target.closest('a'))return;go()});c.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();go()}})});
/* ---------- RECENSIONI (marquee) ---------- */
/* Recensioni scritte nell'HTML (leggibili da Google e dalle AI): qui si duplicano solo per il loop del marquee */
(function(){const m=document.getElementById('marq');[...m.children].forEach(c=>{const k=c.cloneNode(true);k.setAttribute('aria-hidden','true');m.appendChild(k)})})();

/* ---------- FAQ ---------- */
document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>{q.parentElement.classList.toggle('open');tick(900,.04,.04)}));

/* ---------- FORM A STEP ---------- */
let cur=1;
/* messaggio sotto il campo sbagliato, in parole */
function fieldMsg(i,txt){const g=i.closest('.fg');if(!g)return;let m=g.querySelector('.fmsg');if(!txt){if(m)m.remove();i.removeAttribute('aria-invalid');return}
 if(!m){m=document.createElement('span');m.className='fmsg';m.id=i.id+'-msg';g.appendChild(m)}m.textContent=txt;i.setAttribute('aria-invalid','true');i.setAttribute('aria-describedby',m.id)}
function fieldError(i){const v=(i.value||'').trim();
 if(!v)return i.tagName==='SELECT'?'Scegli un\'opzione.':'Questo campo serve per ricontattarti.';
 if(i.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))return 'Controlla l\'email: manca qualcosa.';
 if(i.type==='tel'&&v.replace(/\D/g,'').length<8)return 'Scrivi un numero di telefono valido.';
 return ''}
function goStep(n){
 if(n>cur){const c=document.querySelector('.step.act');let bad=null;
  for(const i of c.querySelectorAll('input[required],select[required]')){const er=fieldError(i);fieldMsg(i,er);if(er&&!bad)bad=i}
  if(bad){bad.focus();bad.style.borderColor='var(--red)';tick(300,.1,.06);setTimeout(()=>bad.style.borderColor='',2000);return}
  document.dispatchEvent(new CustomEvent('mg:formstep',{detail:{step:String(n)}}))}
 tick(1100,.05,.04);
 document.querySelectorAll('.step').forEach(s=>s.classList.remove('act'));
 document.querySelector('.step[data-stepc="'+n+'"]').classList.add('act');
 document.querySelectorAll('.step-dot').forEach(d=>{const s=+d.dataset.step;d.classList.remove('act','done');if(s<n)d.classList.add('done');else if(s===n)d.classList.add('act')});
 document.querySelectorAll('.step-line').forEach(l=>l.classList.toggle('done',+l.dataset.line<n));
 cur=n;
}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>goStep(+b.dataset.go)));

const frm=document.getElementById('cfrm');
const ferr=document.getElementById('ferr');
function formErr(html){if(!ferr)return;if(!html){ferr.hidden=true;ferr.innerHTML='';return}ferr.innerHTML=html;ferr.hidden=false}
frm.querySelectorAll('input,select').forEach(i=>i.addEventListener('input',()=>{if(i.getAttribute('aria-invalid'))fieldMsg(i,fieldError(i))}));
(function(){try{const c=new URLSearchParams(location.search).get('corso');if(!c)return;const sel=document.getElementById('f-corso');
 const o=[...sel.options].find(o=>o.text.toLowerCase()===c.toLowerCase()||o.text.toLowerCase().startsWith(c.toLowerCase()));if(o)sel.value=o.value||o.text}catch(e){}})();
frm.addEventListener('submit',async e=>{
 e.preventDefault();
 const pv=frm.querySelector('[name="consenso_privacy"]');
 if(pv&&!pv.checked){const w=pv.closest('.cons');w.classList.add('err');formErr('Per inviare la richiesta spunta la casella dell\'informativa privacy.');w.scrollIntoView({block:'center',behavior:'smooth'});tick(300,.1,.06);pv.addEventListener('change',()=>{w.classList.remove('err');formErr('')},{once:true});return}
 formErr('');
 const b=frm.querySelector('.btn-submit');b.textContent='Invio...';b.disabled=true;
 const fd=new FormData(frm);
 const mk=frm.querySelector('[name="consenso_marketing"]');
 fd.set('consenso_privacy','S\u00ec, '+new Date().toLocaleString('it-IT'));
 fd.set('consenso_marketing',mk&&mk.checked?'S\u00ec':'No');
 try{
  const r=await fetch(frm.action,{method:'POST',body:fd,headers:{Accept:'application/json'}});
  if(r.ok){
   document.getElementById('fcont').style.display='none';
   document.getElementById('fsuc').style.display='block';
   if(typeof fbq==='function')fbq('track','Lead');try{if(typeof gtag==='function'){const fc=document.getElementById('f-corso');gtag('event','generate_lead',{form_name:'prova-gratuita',course:fc&&fc.value?fc.value:'non_indicato'})}}catch(e){}
   tick(800,.2,.08);setTimeout(()=>tick(1200,.2,.08),200);
  }else{b.innerHTML='Voglio provare gratis &#8594;';b.disabled=false;formErr('La richiesta non &egrave; partita. Riprova tra un attimo oppure <a href="https://wa.me/393920708111?text=Ciao%20Medusa%20Gym!%20Vorrei%20prenotare%20una%20prova%20gratuita." target="_blank" rel="noopener">scrivici su WhatsApp</a>.')}
 }catch{b.innerHTML='Voglio provare gratis &#8594;';b.disabled=false;formErr('Sembra che manchi la connessione. Riprova oppure <a href="https://wa.me/393920708111?text=Ciao%20Medusa%20Gym!%20Vorrei%20prenotare%20una%20prova%20gratuita." target="_blank" rel="noopener">scrivici su WhatsApp</a>.')}
});

/* ---------- MODALE REGOLAMENTO ---------- */
function openModal(){document.getElementById('regModal').classList.add('open');document.body.classList.add('no-scroll');tick(900,.06,.04)}
function closeModal(){document.getElementById('regModal').classList.remove('open');document.body.classList.remove('no-scroll')}
function closeMnav(){document.getElementById('mnav').classList.remove('open')}
document.getElementById('regModal').addEventListener('click',e=>{if(e.target.id==='regModal')closeModal()});
addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeMnav()}});

/* ---------- TRACKING CTA ---------- */
document.querySelectorAll('a[href^="tel:"]').forEach(a=>a.addEventListener('click',()=>{if(typeof fbq==='function')fbq('track','Contact')}));
document.querySelectorAll('a[href*="wa.me"]').forEach(a=>a.addEventListener('click',()=>{if(typeof fbq==='function')fbq('track','Contact')}));

document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));

/* ═══════════ MOTION LAYER · GSAP 3.15 + ScrollTrigger + SplitText ═══════════
   Ogni animazione ha un motivo (taste-skill §5): gerarchia, racconto o feedback.
   Con prefers-reduced-motion tutto diventa statico. */
const SPLITS=[];let SPLIT_IO=null;
function killSplits(){if(SPLIT_IO){SPLIT_IO.disconnect();SPLIT_IO=null}SPLITS.forEach(o=>{o.anim.kill();o.split.revert()});SPLITS.length=0}
/* Titoli di sezione: le righe salgono da una maschera, una volta sola */
function initSplits(){
 if(!HAS_GSAP||!window.SplitText||RM||matchMedia('(max-width:900px)').matches)return; /* mobile: titoli subito visibili, meno lavoro all'avvio */
 /* Ogni titolo si "spezza" solo quando sta per entrare in vista: all'apertura non si misurano tutti insieme (meno blocco del thread) */
 const doSplit=h=>{
  const split=SplitText.create(h,{type:'lines',mask:'lines',linesClass:'hl-line'});
  const o={split};
  o.anim=gsap.from(split.lines,{yPercent:108,duration:1,ease:'expo.out',stagger:.09,
   scrollTrigger:{trigger:h,start:'top 86%',once:true},
   onComplete:()=>{split.revert();const i=SPLITS.indexOf(o);if(i>-1)SPLITS.splice(i,1)}});
  SPLITS.push(o);
 };
 const hs=document.querySelectorAll('.headline,.ab-h');
 if(!('IntersectionObserver' in window)){hs.forEach(doSplit);return}
 const io=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);doSplit(e.target)})},{rootMargin:'0px 0px 40% 0px'});
 SPLIT_IO=io;hs.forEach(h=>io.observe(h));
}
/* Hero: un solo momento orchestrato all'ingresso */
function heroIntro(){
 const $=id=>document.getElementById(id);
 const rest=['htag','hpro','hchi','hloc','hwa','hrev'].map($).filter(Boolean);const cta=$('hcta');
 if(RM){gsap.set([$('hol'),$('ht'),$('hsub'),cta,...rest].filter(Boolean),{autoAlpha:1,y:0});medusa.classList.add('show');return}
 const tl=gsap.timeline({defaults:{ease:'power3.out'}});
 /* il logo entra con la sua transizione CSS: i drop-shadow restano rasterizzati, niente costo per frame */
 medusa.classList.add('show');
 tl.fromTo($('hol'),{autoAlpha:0,y:16},{autoAlpha:1,y:0,duration:.45},.05);
 if(cta)tl.fromTo(cta,{autoAlpha:0,y:12},{autoAlpha:1,y:0,duration:.35},.3);
 let split=null;const ht=$('ht');
 if(window.SplitText){gsap.set(ht,{autoAlpha:1,y:0});
  split=SplitText.create(ht,{type:'chars',mask:'chars'});
  tl.from(split.chars,{yPercent:118,duration:.6,stagger:.025,ease:'expo.out'},.1);
 }else tl.fromTo(ht,{autoAlpha:0,y:16},{autoAlpha:1,y:0,duration:.7},.25);
 tl.fromTo($('hsub'),{autoAlpha:0,y:14},{autoAlpha:1,y:0,duration:.45},.4)
   .to('#hdiv',{scaleX:1,duration:.6,ease:'power2.inOut'},.45)
   .fromTo(rest,{autoAlpha:0,y:16},{autoAlpha:1,y:0,duration:.45,stagger:.06},.45)
   .eventCallback('onComplete',()=>{if(split)split.revert()});
}

if(HAS_GSAP){
 const nb=document.getElementById('nb'),sticky=document.getElementById('sticky');

 /* Stato UI legato allo scroll (sostituisce il listener 'scroll') */
 ScrollTrigger.create({start:80,end:'max',onToggle:s=>nb.classList.toggle('on',s.isActive)});
 ScrollTrigger.create({start:500,end:'max',onToggle:s=>{sticky.classList.toggle('show',s.isActive);sBtn.classList.toggle('show',s.isActive)}});

 if(!RM){
  /* Hero: uscendo, il contenuto si allontana e la sala resta sotto (profondità) */
  gsap.timeline({scrollTrigger:{trigger:'#home',start:'top top',end:'bottom top',scrub:true}})
   .to('.hc',{yPercent:-22,opacity:0,ease:'none'},0)
   .to('.hbgimg',{yPercent:6,scale:1.12,ease:'none'},0)
   .to('#particles',{opacity:0,ease:'none'},0);
 }

 /* Number ticker (pattern 21st.dev) */
 document.querySelectorAll('.sn[data-t]').forEach(el=>{const t=+el.dataset.t,sfx=el.dataset.sfx||'';
  if(RM)return;
  if(el.getBoundingClientRect().top<innerHeight)return;
  el.textContent='0'+sfx;
  const o={v:0};
  gsap.to(o,{v:t,duration:2.2,ease:'power3.out',onUpdate:()=>{el.textContent=Math.round(o.v)+sfx},
   scrollTrigger:{trigger:el,start:'top 88%',once:true}});
 });

 /* Corsi: su desktop la sezione si ferma e le discipline scorrono in orizzontale (taste-skill 5.B) */
 const corsi=document.getElementById('corsi');
 gsap.matchMedia().add({
  pan:'(min-width:901px) and (min-height:720px) and (prefers-reduced-motion:no-preference)',
  nat:'(max-width:900px), (max-height:719px), (prefers-reduced-motion:reduce)'
 },ctx=>{
  if(ctx.conditions.pan){
   corsi.classList.add('pan');ct.classList.remove('native');
   const dist=()=>{const l=trk.lastElementChild;return Math.max(0,l.offsetLeft+l.offsetWidth+64-ct.clientWidth)};
   const tw=gsap.to(trk,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:corsi,start:'top top',end:()=>'+='+dist(),
    pin:true,pinType:'transform',scrub:1,anticipatePin:1,invalidateOnRefresh:true}});
   panST=tw.scrollTrigger;
   return()=>{corsi.classList.remove('pan');panST=null}
  }
  ct.classList.add('native');gsap.set(trk,{clearProps:'transform'});
  return()=>ct.classList.remove('native')
 });

 /* Gallery: le foto si aprono come una tendina e si "assestano" */
 if(RM){document.querySelectorAll('.fu').forEach(e=>e.classList.add('in'))}
 else{
  /* Ingresso a gruppi: IntersectionObserver invece di un ScrollTrigger per elemento (centinaia di misure di layout all'apertura = meno blocco del thread) */
  const batchIn=(sel,bottomPct,fn)=>{
   const els=[...document.querySelectorAll(sel)];if(!els.length)return;
   let q=[],t=0;const flush=()=>{t=0;const g=q;q=[];if(g.length)fn(g)};
   const io=new IntersectionObserver(es=>{es.forEach(e=>{
    if(e.isIntersecting||(e.rootBounds&&e.boundingClientRect.top<e.rootBounds.bottom)){io.unobserve(e.target);q.push(e.target)}});
    if(q.length&&!t)t=setTimeout(flush,60)},{rootMargin:'0px 0px -'+bottomPct+'% 0px'});
   els.forEach(e=>io.observe(e));
  };
  /* Gallery */
  batchIn('.gi',10,els=>{
   els.forEach(e=>e.classList.add('in'));
   gsap.fromTo(els,{clipPath:'inset(100% 0% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.1,ease:'expo.inOut',stagger:.09,clearProps:'clipPath'});
   gsap.fromTo(els.map(e=>e.querySelector('.gim')),{scale:1.3},{scale:1,duration:1.5,ease:'expo.out',stagger:.09,clearProps:'transform'});
  });
  /* Tutto il resto */
  batchIn('.fu:not(.gi)',12,els=>{
   els=els.filter(e=>!e.dataset.shown);if(!els.length)return;
   els.forEach(e=>e.classList.add('in'));
   gsap.fromTo(els,{autoAlpha:0,y:28},{autoAlpha:1,y:0,duration:.8,ease:'power3.out',stagger:.08,overwrite:true,clearProps:'opacity,visibility,transform'});
  });
 }

 /* Menu: evidenzia la sezione in cui ti trovi */
 document.querySelectorAll('.nlinks a[href^="#"]:not(.ncta)').forEach(a=>{const sec=document.querySelector(a.getAttribute('href'));if(!sec)return;
  ScrollTrigger.create({trigger:sec,start:'top 45%',end:'bottom 45%',onToggle:s=>a.classList.toggle('cur',s.isActive)})});

 /* Recensioni: un solo marquee, accelera con la velocità dello scroll, si ferma sotto il mouse */
 if(!RM){
  const loop=gsap.to('#marq',{xPercent:-50,ease:'none',duration:60,repeat:-1,paused:true});
  const p={ts:1};let base=1;const apply=()=>loop.timeScale(p.ts);
  const settle=()=>gsap.to(p,{ts:base,duration:1.4,ease:'power2.out',overwrite:true,onUpdate:apply});
  ScrollTrigger.create({trigger:'#reviews',start:'top bottom',end:'bottom top',
   onToggle:s=>s.isActive?loop.play():loop.pause(),
   onUpdate:s=>{if(!base)return;const v=Math.min(5,1+Math.abs(s.getVelocity())/500);if(v>p.ts+.2)gsap.to(p,{ts:v,duration:.2,overwrite:true,onUpdate:apply,onComplete:settle})}});
  const mw=document.querySelector('.marq-wrap');
  mw.addEventListener('mouseenter',()=>{base=0;settle()});mw.addEventListener('mouseleave',()=>{base=1;settle()});
 }

 /* CTA hero magnetica (pattern 21st.dev) */
 if(!RM&&matchMedia('(pointer:fine)').matches){const b=document.getElementById('hcta');
  const mx=gsap.quickTo(b,'x',{duration:.5,ease:'power3'}),my=gsap.quickTo(b,'y',{duration:.5,ease:'power3'});
  b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();mx((e.clientX-r.left-r.width/2)*.25);my((e.clientY-r.top-r.height/2)*.35)});
  b.addEventListener('mouseleave',()=>{mx(0);my(0)});
 }

 /* Link interni: scroll morbido compatibile con il pin */
 document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||a.classList.contains('skip'))return;
  const id=a.getAttribute('href');if(id.length<2)return;const t=document.querySelector(id);if(!t)return;
  e.preventDefault();
  /* le sezioni sotto la piega non ancora disegnate (content-visibility) hanno un'altezza stimata:
     le disegno tutte una volta, ricalcolo i punti di scroll e solo dopo misuro la destinazione */
  if(!document.documentElement.classList.contains('cv-all')){document.documentElement.classList.add('cv-all');document.body.offsetHeight;ScrollTrigger.refresh()}
  window.scrollTo({top:t.getBoundingClientRect().top+scrollY,behavior:RM?'auto':'smooth'});history.replaceState(null,'',id);
  setTimeout(()=>{const d=t.getBoundingClientRect().top;if(Math.abs(d)>40)window.scrollTo({top:d+scrollY,behavior:'auto'})},RM?50:1400)});

 /* un solo ricalcolo dei punti di scroll, dopo il caricamento e a browser libero (prima erano tre, nel momento peggiore) */
 addEventListener('load',()=>{const r=()=>ScrollTrigger.refresh();'requestIdleCallback' in window?requestIdleCallback(r,{timeout:2500}):setTimeout(r,1500)});
}


/* ═══════════ V2: card sovrapposte, trailer, tipografia gigante ═══════════ */
/* Card sovrapposte: passando sopra (o toccando) una card, viene davanti */
const FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
const SLOTS=[{x:0,y:0,r:-2,s:1,d:0},{x:32,y:-4,r:7,s:.9,d:.35},{x:-32,y:-2,r:-9,s:.86,d:.5}];
document.querySelectorAll('[data-deck]').forEach(deck=>{
 const cards=[...deck.querySelectorAll('.dcard')];let order=cards.map((_,i)=>i);
 function layout(anim){order.forEach((ci,slot)=>{const s=SLOTS[slot]||SLOTS[SLOTS.length-1],c=cards[ci];
  c.style.zIndex=String(cards.length-slot);c.classList.toggle('front',slot===0);
  c.querySelector('.ddim').style.opacity=s.d;
  const v={xPercent:s.x,yPercent:s.y,rotation:s.r,scale:s.s};
  if(HAS_GSAP){anim&&!RM?gsap.to(c,{...v,duration:.75,ease:'expo.out',overwrite:'auto'}):gsap.set(c,v)}
  else c.style.transform='translate('+s.x+'%,'+s.y+'%) rotate('+s.r+'deg) scale('+s.s+')';})}
 let lock=false;const hold=()=>{lock=true;clearTimeout(deck._t);deck._t=setTimeout(()=>{lock=false},RM?50:800)};
 function bring(ci){if(order[0]===ci)return;order=[ci,...order.filter(x=>x!==ci)];layout(true);hold();tick(1200,.04,.03)}
 function cycle(){order=[...order.slice(1),order[0]];layout(true);hold();tick(1200,.04,.03)}
 cards.forEach((c,ci)=>{
  if(FINE)c.addEventListener('mouseenter',()=>{if(!lock)bring(ci)});
  c.addEventListener('click',()=>{order[0]===ci?cycle():bring(ci)});
  c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();order[0]===ci?cycle():bring(ci)}});
 });
 layout(false);
});

/* Trailer: parte quando è in vista, si ferma quando esci; audio su richiesta */
(function(){
 const v=document.getElementById('trVid');if(!v)return;
 const bP=document.getElementById('trPlay'),bS=document.getElementById('trSnd');let userPaused=false,tracked=false;
 const sync=()=>{bP.classList.toggle('paused',v.paused);bP.setAttribute('aria-label',v.paused?'Riproduci il video':'Metti in pausa il video')};
 v.addEventListener('play',sync);v.addEventListener('pause',sync);
 new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){if(!userPaused&&!RM){v.preload='auto';v.play().catch(()=>{})}}
  else if(!v.paused)v.pause();
 }),{threshold:.35}).observe(v);
 if(RM)sync();
 bP.addEventListener('click',()=>{if(v.paused){userPaused=false;v.play().catch(()=>{})}else{userPaused=true;v.pause()}});
 bS.addEventListener('click',()=>{v.muted=!v.muted;bS.classList.toggle('on',!v.muted);
  bS.innerHTML='<svg aria-hidden="true"><use href="#i-'+(v.muted?'soff':'son')+'"></use></svg>';
  bS.setAttribute('aria-label',v.muted?"Attiva l'audio del video":"Disattiva l'audio del video");
  if(!v.muted){userPaused=false;v.play().catch(()=>{});if(!tracked&&typeof fbq==='function'){fbq('trackCustom','TrailerAudio');tracked=true}if(typeof gtag==='function'&&!window._trAud){window._trAud=1;gtag('event','trailer_audio')}}});
})();

if(HAS_GSAP&&!RM){
 /* Trailer: la card verticale si apre mentre arrivi */
 gsap.fromTo('#trCard',{scale:.74,rotation:-4,yPercent:6},{scale:1,rotation:0,yPercent:0,ease:'none',
  scrollTrigger:{trigger:'#trailer',start:'top 85%',end:'center 55%',scrub:.6}});
 /* Tipografia gigante: le due righe scorrono in direzioni opposte, il claim si accende */
 gsap.fromTo('.kin-r1 .kin-track',{xPercent:-34},{xPercent:-6,ease:'none',scrollTrigger:{trigger:'#claim',start:'top bottom',end:'bottom top',scrub:.6}});
 gsap.fromTo('.kin-r2 .kin-track',{xPercent:-4},{xPercent:-32,ease:'none',scrollTrigger:{trigger:'#claim',start:'top bottom',end:'bottom top',scrub:.6}});
 gsap.fromTo('.kin-mid',{opacity:.15,scale:.92},{opacity:1,scale:1,ease:'none',scrollTrigger:{trigger:'.kin-mid',start:'top 90%',end:'center 55%',scrub:.6}});
}

/* Mappa: si accende quando entra in vista */
(function(){const m=document.getElementById('mappa');if(!m)return;
 if(RM||!('IntersectionObserver' in window)){m.classList.add('live');return}
 new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){m.classList.add('live');o.disconnect()}}),{threshold:.55}).observe(m)})();

/* Spotlight: il bordo segue il puntatore */
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.spot');if(!c)return;const r=c.getBoundingClientRect();
 c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true});
