/* Blocco "Offerta del periodo" di Medusa Gym.
   Per cambiare offerta si modifica SOLO l'elenco OFFERTE qui sotto:
   - dal / al: date di inizio e fine (ora di Roma). Fuori da queste date il blocco non compare.
   - se due offerte si sovrappongono vince la prima dell'elenco.
   Il blocco si inserisce da solo: in home dopo la striscia dei campioni, nelle altre pagine subito dopo l'intestazione.
   Niente prezzi: la regola del sito resta valida anche qui. */
(function () {
  var OFFERTE = [
    {
      id: 'settimana-omaggio-nov-2026',
      dal: '2026-10-20T00:00:00+02:00',
      al: '2026-11-20T23:59:59+01:00',
      etichetta: 'Offerta del periodo',
      titolo: 'Una settimana da Medusa Gym, in omaggio',
      testo: 'Oltre alla prima lezione gratuita, puoi avere sette giorni per provare tutti i corsi, posturale, Active Senior e Kickboxing Kids compresi. Massimo 30 posti, nessun obbligo di proseguire: ti chiamiamo noi per attivarla.',
      cta: 'Ferma la tua settimana',
      href: '/settimana-omaggio.html',
      fine: 'fino al 20 novembre'
    }
    /* Esempio per la prossima offerta (copiare, compilare e togliere il commento):
    ,{
      id: 'nome-offerta',
      dal: '2026-12-01T00:00:00+01:00',
      al: '2026-12-31T23:59:59+01:00',
      etichetta: 'Offerta del periodo',
      titolo: '...',
      testo: '...',
      cta: '...',
      href: '/pagina-offerta.html',
      fine: 'fino al 31 dicembre'
    } */
  ];

  var now = Date.now();
  var o = null;
  for (var i = 0; i < OFFERTE.length; i++) {
    var a = Date.parse(OFFERTE[i].dal), b = Date.parse(OFFERTE[i].al);
    if (now >= a && now <= b) { o = OFFERTE[i]; break; }
  }
  if (o) window.MG_OFFERTA = o;
  if (!o || document.getElementById('offerta')) return;
  if (location.pathname.replace(/\/+$/, '') === o.href.replace(/\.html$/, '').replace(/\/+$/, '') ||
      location.pathname === o.href) return; /* non sulla pagina dell'offerta stessa */

  var giorni = Math.ceil((Date.parse(o.al) - now) / 86400000);
  var urg = giorni <= 1 ? 'Ultimo giorno' : (giorni <= 7 ? 'Ancora ' + giorni + ' giorni' : o.fine);

  var css = '' +
    '#offerta{padding:1.6rem 1rem}' +
    '#offerta .of-c{position:relative;max-width:1100px;margin:0 auto;border-radius:30px;overflow:hidden;background:#39FF14;color:#050505;box-shadow:0 0 0 1px rgba(57,255,20,.6),0 0 70px rgba(57,255,20,.28),0 24px 50px rgba(0,0,0,.5);isolation:isolate}' +
    /* trama a righe diagonali e lampo di luce che attraversa la card */
    '#offerta .of-c::before{content:"";position:absolute;inset:0;z-index:-1;background:repeating-linear-gradient(-45deg,rgba(0,0,0,.055) 0 2px,transparent 2px 16px),radial-gradient(ellipse 60% 90% at 0% 100%,rgba(255,255,255,.35),transparent 60%)}' +
    '#offerta .of-c::after{content:"";position:absolute;top:0;bottom:0;left:-40%;width:30%;z-index:-1;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-18deg);animation:ofSheen 6s ease-in-out infinite}' +
    '@keyframes ofSheen{0%,60%{left:-40%}100%{left:130%}}' +
    /* nastro nero in alto che scorre */
    '#offerta .of-r{display:flex;overflow:hidden;background:#050505;color:#39FF14;font:700 .74rem/1 "Archivo",system-ui,sans-serif;letter-spacing:.22em;text-transform:uppercase;padding:.6rem 0}' +
    '#offerta .of-r span{flex:none;white-space:nowrap;padding-right:2.2rem;animation:ofTick 22s linear infinite}' +
    '@keyframes ofTick{to{transform:translateX(-100%)}}' +
    '#offerta .of-b{display:flex;align-items:center;gap:1.8rem;padding:1.7rem 2rem 1.9rem}' +
    '#offerta .of-t{flex:1;min-width:0}' +
    '#offerta .of-k{display:inline-flex;align-items:center;gap:.5rem;margin:0 0 .7rem;padding:.45rem .85rem;border-radius:999px;background:#050505;color:#39FF14;font:700 .78rem/1 "Archivo",system-ui,sans-serif;letter-spacing:.1em;text-transform:uppercase}' +
    '#offerta .of-k i{width:8px;height:8px;border-radius:50%;background:#39FF14;box-shadow:0 0 0 0 rgba(57,255,20,.8);animation:ofPulse 1.6s ease-out infinite}' +
    '@keyframes ofPulse{70%{box-shadow:0 0 0 8px rgba(57,255,20,0)}100%{box-shadow:0 0 0 0 rgba(57,255,20,0)}}' +
    '#offerta .of-h{margin:0 0 .55rem;font-family:"Bebas Neue",Impact,sans-serif;font-weight:400;font-size:clamp(2.2rem,4.6vw,3.6rem);line-height:.92;color:#050505;letter-spacing:.005em;text-wrap:balance}' +
    '#offerta .of-t>p:last-child{margin:0;color:#0d2a06;font:500 .98rem/1.55 "Archivo",system-ui,sans-serif;max-width:40rem}' +
    /* lato CTA staccato come un biglietto */
    '#offerta .of-s{flex:none;align-self:stretch;display:flex;align-items:center;padding-left:1.8rem;border-left:2px dashed rgba(0,0,0,.35);position:relative}' +
    '#offerta .of-s::before,#offerta .of-s::after{content:"";position:absolute;left:-13px;width:24px;height:24px;border-radius:50%;background:#0a0a0a}' +
    '#offerta .of-s::before{top:calc(-1.7rem - 12px)}#offerta .of-s::after{bottom:calc(-1.9rem - 12px)}' +
    '#offerta .of-a{display:inline-flex;align-items:center;gap:.6rem;min-height:56px;padding:0 1.7rem;border-radius:999px;background:#050505;color:#39FF14;font-family:"Bebas Neue",Impact,sans-serif;font-size:1.35rem;letter-spacing:.06em;text-decoration:none;box-shadow:0 8px 22px rgba(0,0,0,.35);transition:background .2s,color .2s,transform .2s}' +
    '#offerta .of-a b{display:inline-block;font-weight:400;transition:transform .25s}' +
    '#offerta .of-a:hover{background:#fff;color:#050505}' +
    '#offerta .of-a:hover b{transform:translateX(4px)}' +
    '#offerta .of-a:active{transform:scale(.97)}' +
    '#offerta .of-a:focus-visible{outline:3px solid #050505;outline-offset:3px}' +
    '@media(max-width:760px){#offerta .of-b{flex-direction:column;align-items:stretch;gap:1.2rem;padding:1.4rem 1.3rem 1.5rem}#offerta .of-s{padding:1.2rem 0 0;border-left:0;border-top:2px dashed rgba(0,0,0,.35)}#offerta .of-s::before{top:-13px;left:calc(-1.3rem - 12px)}#offerta .of-s::after{top:-13px;bottom:auto;left:auto;right:calc(-1.3rem - 12px)}#offerta .of-k{border-radius:14px;font-size:.7rem;letter-spacing:.08em;line-height:1.3}#offerta .of-a{width:100%;justify-content:center}}' +
    '@media(prefers-reduced-motion:reduce){#offerta .of-c::after,#offerta .of-r span,#offerta .of-k i{animation:none}#offerta .of-c::after{display:none}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var pag = (location.pathname.replace(/^\/|\.html$/g, '') || 'home').replace(/\//g, '-');
  var link = o.href + (o.href.indexOf('?') < 0 ? '?' : '&') + 'utm_source=sito&utm_medium=blocco_offerta&utm_campaign=' + encodeURIComponent(o.id) + '&utm_content=' + encodeURIComponent(pag);
  var sec = document.createElement('section');
  sec.id = 'offerta';
  sec.setAttribute('aria-labelledby', 'of-h');
  sec.setAttribute('data-offerta', o.id);
  var giro = (o.etichetta + ' \u2726 ' + urg + ' \u2726 ' + o.titolo + ' \u2726 ').toUpperCase();
  sec.innerHTML =
    '<div class="of-c">' +
    '<div class="of-r" aria-hidden="true"><span>' + giro + giro + '</span><span>' + giro + giro + '</span></div>' +
    '<div class="of-b"><div class="of-t">' +
    '<p class="of-k"><i aria-hidden="true"></i>' + o.etichetta + ' &middot; ' + urg + '</p>' +
    '<p class="of-h" id="of-h">' + o.titolo + '</p>' +
    '<p>' + o.testo + '</p></div>' +
    '<div class="of-s"><a class="of-a" href="' + link + '">' + o.cta + ' <b aria-hidden="true">&#8594;</b></a></div></div></div>';

  var dopo = document.getElementById('campioni-top') || document.querySelector('section.hero') || document.querySelector('main > section');
  if (dopo && dopo.parentNode) dopo.parentNode.insertBefore(sec, dopo.nextSibling);
})();
