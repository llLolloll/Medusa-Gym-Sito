/* Medusa Gym - modulo della prova gratuita che sale dal basso sulle pagine corso e istruttore.
   Stesso modulo della home (stesso markup e stesso js/prova.js), con il corso già scelto.
   Intercetta i pulsanti "#prova" e "/?corso=...#prova" della pagina; senza JS i link funzionano come prima.
   window.mgProvaApri(corso, lezione) lo apre anche da altri script (es. "Prossima lezione con..."). */
(function () {
  'use strict';
  var HTML = /*@@HTML@@*/"";
  var CSS = /*@@CSS@@*/"";
  var P = location.pathname;
  var PAGINA = {
    '/corsi/kickboxing.html': 'Kickboxing', '/corsi/pugilato.html': 'Pugilato', '/corsi/functional-training.html': 'Functional Training',
    '/corsi/calisthenics.html': 'Calisthenics', '/corsi/sala-pesi.html': 'Sala Pesi', '/corsi/ginnastica-posturale.html': 'Ginnastica Posturale',
    '/corsi/autodifesa-path.html': 'Autodifesa PATH', '/corsi/kickboxing-ragazzi.html': 'Kickboxing Kids (9-14)', '/corsi/active-senior.html': 'Active Senior (over 55)',
    '/lucio-pedana.html': 'Kickboxing', '/andrea-durazzi.html': 'Pugilato', '/donatella-vecchioni.html': 'Functional Training',
    '/yvonne-rivellini.html': 'Calisthenics', '/marika-pagliaroli.html': 'Kickboxing Kids (9-14)'
  };
  var root, body, built = false, loaded = false, last = null, lockY = '';
  function load(src, cb) { var s = document.createElement('script'); s.src = src; s.onload = cb; s.onerror = cb; document.body.appendChild(s); }
  function build() {
    var st = document.createElement('style');
    st.textContent = '.pvs{--g:#39FF14;--red:#CC2200;--txt:#F2F2F2;--txt2:#C8C8C8;--mut:#9A9A9A;--mut2:#7A7A7A;--bd:rgba(255,255,255,.1);--fh:"Bebas Neue",Impact,sans-serif;--fb:"Archivo",system-ui,sans-serif;font-family:var(--fb);color:var(--txt)}' +
      '#pvs-wrap{position:fixed;inset:0;z-index:2147482000;pointer-events:none}' +
      '#pvs-wrap .pvs-v{position:absolute;inset:0;background:rgba(0,0,0,.7);opacity:0;transition:opacity .3s}' +
      '#pvs-wrap .pvs{position:absolute;left:0;right:0;bottom:0;max-width:640px;margin:0 auto;max-height:92vh;max-height:92dvh;display:flex;flex-direction:column;background:#111;border:1px solid rgba(57,255,20,.45);border-bottom:0;border-radius:26px 26px 0 0;box-shadow:0 -10px 50px rgba(0,0,0,.6),0 0 30px rgba(57,255,20,.12);transform:translateY(105%);transition:transform .45s cubic-bezier(.2,.9,.25,1)}' +
      '#pvs-wrap.on{pointer-events:auto}#pvs-wrap.on .pvs-v{opacity:1}#pvs-wrap.on .pvs{transform:none}' +
      '.pvs-h{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:14px 12px 6px 22px;flex-shrink:0}' +
      '.pvs-h p{font:700 .7rem var(--fb);letter-spacing:.16em;text-transform:uppercase;color:var(--g);margin:0}' +
      '.pvs-x{width:44px;height:44px;border:0;border-radius:50%;background:rgba(255,255,255,.07);color:var(--txt);font-size:26px;line-height:1;cursor:pointer}' +
      '.pvs-x:focus-visible{outline:2px solid var(--g);outline-offset:2px}' +
      '.pvs-body{overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:6px 22px calc(26px + env(safe-area-inset-bottom))}' +
      '.pvs .fsuc{display:none}.pvs *,.pvs *::before,.pvs *::after{box-sizing:border-box}.pvs p,.pvs ol,.pvs h3{margin:0}' +
      '@media(min-width:700px){#pvs-wrap .pvs{bottom:auto;top:50%;border-radius:26px;border-bottom:1px solid rgba(57,255,20,.45);transform:translateY(-44%) scale(.97);opacity:0;transition:transform .3s,opacity .25s}#pvs-wrap.on .pvs{transform:translateY(-50%);opacity:1}}' +
      '@media(prefers-reduced-motion:reduce){#pvs-wrap .pvs,#pvs-wrap .pvs-v{transition:none}}\n' + CSS;
    document.head.appendChild(st);
    root = document.createElement('div'); root.id = 'pvs-wrap';
    root.innerHTML = '<div class="pvs-v"></div><div class="pvs" role="dialog" aria-modal="true" aria-label="Prenota la prova gratuita"><div class="pvs-h"><p>Prova gratuita</p><button type="button" class="pvs-x" aria-label="Chiudi">&times;</button></div><div class="pvs-body">' + HTML + '</div></div>';
    document.body.appendChild(root);
    body = root.querySelector('.pvs-body');
    root.querySelector('.pvs-v').addEventListener('click', close);
    root.querySelector('.pvs-x').addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (!root.classList.contains('on')) return;
      if (e.key === 'Escape') { close(); return; }
      if (e.key !== 'Tab') return;
      var f = [].slice.call(root.querySelectorAll('a[href],button:not([disabled]),input:not([type=hidden]),textarea,summary')).filter(function (x) { return x.offsetParent !== null; });
      var i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    });
    built = true;
  }
  function open(corso, lez) {
    if (!built) build();
    last = document.activeElement;
    try { localStorage.setItem('mgConv', String(Date.now())); } catch (e) {} /* niente riquadro "prima di andare" sopra il modulo */
    lockY = document.documentElement.style.overflow; document.documentElement.style.overflow = 'hidden';
    root.style.display = '';
    requestAnimationFrame(function () { root.classList.add('on'); });
    var go = function () {
      if (window.mgProva && window.mgProva.apri) window.mgProva.apri(corso, lez);
      var t = root.querySelector('.step.act .step-title') || root.querySelector('.pvs-x');
      setTimeout(function () { try { t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true }); } catch (e) {} }, 60);
    };
    if (loaded) { go(); }
    else {
      window.MG_PROVA_CORSO = corso || ''; window.MG_PROVA_LEZ = lez || '';
      var then = function () { load('/js/prova.js?v=5', function () { loaded = true; go(); }); };
      if (window.MG_PALINSESTO) then(); else load('/js/palinsesto.js?v=2', then);
    }
    try { if (window.mgTrack) window.mgTrack('form_sheet_open', { corso: corso || 'nessuno', lezione: lez ? 'scelta' : 'no' }); } catch (e) {}
  }
  function close() {
    if (!root) return;
    root.classList.remove('on');
    document.documentElement.style.overflow = lockY || '';
    setTimeout(function () { if (!root.classList.contains('on')) root.style.display = 'none'; }, 450);
    try { if (last && last.focus && last !== document.body) last.focus({ preventScroll: true }); } catch (e) {}
  }
  window.mgProvaApri = open;
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    var h = a.getAttribute('href') || '', m;
    var corso = null;
    if (h === '#prova') corso = PAGINA[P] || '';
    else if ((m = h.match(/^(?:https:\/\/www\.medusagym\.it)?\/(?:index\.html)?\?corso=([^#&]+)#prova$/))) { try { corso = decodeURIComponent(m[1]); } catch (x) { corso = m[1]; } }
    else if (/^(?:\/|\/index\.html)#prova$/.test(h)) corso = PAGINA[P] || '';
    if (corso === null) return;
    e.preventDefault();
    open(corso, '');
  });
})();
