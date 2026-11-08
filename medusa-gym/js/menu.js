/* Menu delle pagine interne di Medusa Gym: bottone nell'header e pannello a tutto schermo.
   Si aggancia a <header> .hd-r; i link sono assoluti, quindi vale per ogni cartella. */
(function () {
  var hdr = document.querySelector('header .hd-r');
  if (!hdr || document.getElementById('mm-btn')) return;

  var LINKS = [
    ['/', 'Home'],
    ['/corsi/', 'Corsi'],
    ['/orari.html', 'Orari'],
    ['/abbonamenti.html', 'Abbonamenti'],
    ['/istruttori.html', 'Istruttori'],
    ['/team-last-round.html', 'Campioni e Team Last Round'],
    ['/galleria.html', 'Galleria'],
    ['/come-arrivare.html', 'Come arrivare'],
    ['/guide/', 'Guide'],
    ['/domande-frequenti.html', 'Domande frequenti']
  ];

  var css = '' +
    '#mm-btn{flex:none;width:44px;height:44px;display:inline-flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;border:1px solid rgba(255,255,255,.14);border-radius:999px;background:rgba(255,255,255,.04);cursor:pointer;padding:0;transition:border-color .2s,background .2s}' +
    '#mm-btn:hover{border-color:rgba(57,255,20,.6)}' +
    '#mm-btn:active{transform:scale(.96)}' +
    '#mm-btn i{display:block;width:18px;height:1.5px;border-radius:2px;background:#F2F2F2;transition:transform .2s ease-out,opacity .2s}' +
    '#mm-btn[aria-expanded="true"] i:nth-child(1){transform:translateY(6.5px) rotate(45deg)}' +
    '#mm-btn[aria-expanded="true"] i:nth-child(2){opacity:0}' +
    '#mm-btn[aria-expanded="true"] i:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}' +
    '#mm-btn:focus-visible,#mm-panel a:focus-visible{outline:2px solid #39FF14;outline-offset:3px}' +
    '#mm-panel{position:fixed;inset:0;z-index:25;display:flex;flex-direction:column;justify-content:center;gap:.2rem;padding:6.5rem 1.6rem 2rem;background:#080808;overflow-y:auto;opacity:0;visibility:hidden;transition:opacity .2s ease-out,visibility .2s}' +
    '#mm-panel.on{opacity:1;visibility:visible}' +
    '#mm-panel a{display:flex;align-items:center;min-height:48px;font-family:"Bebas Neue",Impact,sans-serif;font-size:clamp(1.7rem,6vw,2.4rem);letter-spacing:.04em;color:#F2F2F2;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);transition:color .15s}' +
    '#mm-panel a:hover,#mm-panel a[aria-current="page"]{color:#39FF14}' +
    '#mm-panel .mm-cta{margin-top:1.4rem;justify-content:center;border:0;border-radius:999px;background:#39FF14;color:#041004;font-size:1.4rem;min-height:52px}' +
    '#mm-panel .mm-cta:hover{background:#fff;color:#041004}' +
    '#mm-panel .mm-in{width:min(560px,100%);margin:0 auto}' +
    'body.mm-open{overflow:hidden}' +
    'body.mm-open header{z-index:30}' +
    'body.mm-open #mg-chat,body.mm-open #mbar,body.mm-open .mbar{visibility:hidden}' +
    '@media(prefers-reduced-motion:reduce){#mm-panel,#mm-btn i{transition:none}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var here = location.pathname.replace(/index\.html$/, '');
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'mm-btn';
  btn.setAttribute('aria-label', 'Apri il menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'mm-panel');
  btn.innerHTML = '<i></i><i></i><i></i>';
  hdr.appendChild(btn);

  var panel = document.createElement('nav');
  panel.id = 'mm-panel';
  panel.setAttribute('aria-label', 'Menu del sito');
  var html = '<div class="mm-in">';
  LINKS.forEach(function (l) {
    var cur = (here === l[0] || here === l[0].replace(/\.html$/, '')) ? ' aria-current="page"' : '';
    html += '<a href="' + l[0] + '"' + cur + '>' + l[1] + '</a>';
  });
  var prova = document.getElementById('prova') ? '#prova' : '/#prova';
  html += '<a class="mm-cta" href="' + prova + '">Prenota la prova gratuita</a></div>';
  panel.innerHTML = html;
  panel.inert = true;
  document.body.appendChild(panel);

  function setOpen(on) {
    panel.classList.toggle('on', on);
    panel.inert = !on;
    document.body.classList.toggle('mm-open', on);
    btn.setAttribute('aria-expanded', on ? 'true' : 'false');
    btn.setAttribute('aria-label', on ? 'Chiudi il menu' : 'Apri il menu');
    if (on) { var f = panel.querySelector('a'); if (f) f.focus({ preventScroll: true }); }
  }
  btn.addEventListener('click', function () { setOpen(!panel.classList.contains('on')); });
  panel.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('on')) { setOpen(false); btn.focus(); }
  });
})();
