/* ESEMPIO <dialog> nativo (non ancora in uso sul sito) - Medusa Gym - riquadro "prima di andare" (popup di uscita) sulle pagine corso e sulle guide.
   Computer: quando il mouse esce dalla finestra verso l'alto. Telefono: risalita veloce verso l'inizio dopo aver letto un po'.
   In ogni caso compare da solo dopo 12 secondi sulla pagina.
   Regole: mai nei primi 4 secondi, al massimo una volta ogni 24 ore, mai per 3 giorni dopo "No grazie", mai a chi ha già
   aperto WhatsApp, chiamato o compilato un modulo nei 7 giorni prima, mai con il banner cookie, la chat o un altro riquadro aperti.
   Il contenuto segue l'offerta attiva di js/offerta.js (window.MG_OFFERTA, campo facoltativo "uscita");
   senza offerta attiva propone la prima lezione gratuita. Niente prezzi. */
(function () {
  'use strict';
  var WAIT = 4000, AUTO = 12000, NO_DAYS = 3;
  var t0 = Date.now();
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function track(n, p) { try { if (window.mgTrack) window.mgTrack(n, p); } catch (e) {} }
  function recent(k, ms) { var v = +ls(k) || 0; return v && Date.now() - v < ms; }
  /* visto nelle ultime 24 ore, "No grazie" negli ultimi 3 giorni, contatto aperto negli ultimi 7 */
  var FORZA = /[?&]uscita=1/.test(location.search) || !!window.MG_USCITA_DEMO; /* per le prove: lo apre subito ignorando le regole */
  if (!FORZA && (recent('mgExitT', 864e5) || recent('mgExitNo', NO_DAYS * 864e5) || recent('mgConv', 7 * 864e5))) return;

  /* chi ha già un contatto aperto non lo disturbiamo */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (a && /wa\.me|^tel:|#prova|settimana-omaggio|natale-in-movimento/.test(a.getAttribute('href') || '')) ls('mgConv', String(Date.now()));
  }, true);
  document.addEventListener('submit', function (e) { if (e.target && e.target.id !== 'mg-form' && !(e.target.classList && e.target.classList.contains('mg-form'))) ls('mgConv', String(Date.now())); }, true);

  var P = location.pathname;
  var CORSI = {
    'kickboxing': ['Kickboxing', 'Kickboxing'], 'pugilato': ['Pugilato', 'Pugilato'], 'functional-training': ['Functional', 'Functional Training'],
    'calisthenics': ['Calisthenics', 'Calisthenics'], 'sala-pesi': ['Sala Pesi', 'Sala Pesi'], 'ginnastica-posturale': ['Posturale', 'Ginnastica Posturale'],
    'autodifesa-path': ['Autodifesa', 'Autodifesa PATH'], 'kickboxing-ragazzi': ['Kickboxing Kids', 'Kickboxing Kids (9-14)'], 'active-senior': ['Active Senior', 'Active Senior (over 55)']
  };
  var m = P.match(/\/corsi\/([a-z-]+)\.html$/), c = m && CORSI[m[1]];
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (x) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[x]; }); };

  function content() {
    var o = window.MG_OFFERTA;
    if (o && P !== o.href) {
      var u = o.uscita || {};
      var tit = c && u.titolo ? u.titolo.replace('{corso}', '<b>' + esc(c[0]) + '</b>') : esc(u.titoloGenerale || o.titolo);
      return { id: o.id, badge: u.badge || 'Prima di andare', tit: tit, punti: u.punti || [], cta: u.cta || o.cta, href: o.href + (m && u.corsi && u.corsi[m[1]] ? (o.href.indexOf('?') < 0 ? '?' : '&') + 'corso=' + encodeURIComponent(u.corsi[m[1]]) : '') }; /* niente UTM sui link interni (regola dell'08/11): il clic si misura con exit_popup_click */
    }
    return { id: 'prova', badge: 'Prima di andare', tit: 'La prima lezione di <b>' + esc(c ? c[0] : 'prova') + '</b> la offriamo noi',
      punti: ['Lezione vera, con il gruppo e l\'istruttore', 'Nessun obbligo di iscrizione dopo', 'Scegli tu giorno e orario in tre tocchi'],
      cta: 'Prenota la prova gratuita', href: '/' + (c ? '?corso=' + encodeURIComponent(c[1]) : '') + '#prova' };
  }

  function busy() {
    if (document.querySelector('.mg-open,#mg-panel.on,.modal.open,.no-scroll')) return true;
    var ck = document.querySelector('.cky-consent-container,.cky-modal.cky-modal-open');
    if (ck && ck.offsetParent !== null && !ck.classList.contains('cky-hide')) return true;
    var a = document.activeElement;
    if (a && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) return true;
    return false;
  }

  /* Versione con <dialog> nativo: il browser gestisce livello sopra a tutto, pagina dietro bloccata,
     Esc, tasto/gesto "indietro" su Android e ritorno del focus. Safari: chiusura toccando fuori con il fallback sotto. */
  var root, shown = false, how = '', why = '';
  function build(k) {
    var css = '' +
      '#mgx-exit{position:fixed;inset:auto 0 0 0;margin:0 auto;width:100%;max-width:520px;max-height:90vh;overflow:auto;background:rgba(18,18,18,.97);border:1px solid rgba(57,255,20,.5);border-bottom:0;border-radius:26px 26px 0 0;padding:22px 20px calc(24px + env(safe-area-inset-bottom));box-shadow:0 -10px 50px rgba(0,0,0,.6),0 0 30px rgba(57,255,20,.15);color:#F2F2F2;font-family:"Archivo",system-ui,sans-serif;' +
        'transform:translateY(105%);transition:transform .45s cubic-bezier(.2,.9,.25,1),display .45s allow-discrete,overlay .45s allow-discrete}' +
      '#mgx-exit[open]{transform:none}@starting-style{#mgx-exit[open]{transform:translateY(105%)}}' +
      '#mgx-exit::backdrop{background:rgba(0,0,0,.7);opacity:0;transition:opacity .3s,display .3s allow-discrete,overlay .3s allow-discrete}' +
      '#mgx-exit[open]::backdrop{opacity:1}@starting-style{#mgx-exit[open]::backdrop{opacity:0}}' +
      'html:has(#mgx-exit[open]){overflow:hidden}' +
      '#mgx-exit .xg{width:44px;height:5px;border-radius:9px;background:rgba(255,255,255,.25);margin:-8px auto 14px}' +
      '#mgx-exit .xx{position:absolute;top:8px;right:8px;width:44px;height:44px;border:0;background:none;color:#9A9A9A;font-size:28px;line-height:1;cursor:pointer;border-radius:50%}' +
      '#mgx-exit .xb{display:inline-block;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;background:#39FF14;color:#041004;padding:4px 9px;border-radius:999px}' +
      '#mgx-exit h2{font-family:"Bebas Neue",Impact,sans-serif;font-weight:400;font-size:40px;line-height:.95;margin:10px 0 0;color:#F2F2F2;padding-right:30px}#mgx-exit h2 b{color:#39FF14;font-weight:400}' +
      '#mgx-exit ul{list-style:none;margin:12px 0 0;padding:0;display:grid;gap:6px;font-size:14px;color:#ddd}#mgx-exit li::before{content:"\\2713  ";color:#39FF14;font-weight:800}' +
      '#mgx-exit .xc{display:block;margin-top:16px;border-radius:999px;background:#39FF14;color:#041004;font:400 22px "Bebas Neue",Impact,sans-serif;letter-spacing:.06em;padding:14px;text-align:center;text-decoration:none;box-shadow:0 0 26px rgba(57,255,20,.45)}' +
      '#mgx-exit .xn{display:block;margin:10px auto 0;min-height:44px;background:none;border:0;color:#9A9A9A;font:600 13px "Archivo",system-ui,sans-serif;text-decoration:underline;cursor:pointer}' +
      '#mgx-exit button:focus-visible,#mgx-exit a:focus-visible{outline:2px solid #39FF14;outline-offset:3px}' +
      '@media(min-width:700px){#mgx-exit{inset:0;margin:auto;height:fit-content;border-radius:26px;border-bottom:1px solid rgba(57,255,20,.5);padding-bottom:24px;transform:scale(.96);opacity:0;transition:transform .35s,opacity .25s,display .35s allow-discrete,overlay .35s allow-discrete}' +
        '#mgx-exit[open]{transform:none;opacity:1}@starting-style{#mgx-exit[open]{transform:scale(.96);opacity:0}}' +
        '#mgx-exit::backdrop{background:rgba(0,0,0,.55);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}#mgx-exit .xg{display:none}}' +
      '@media(prefers-reduced-motion:reduce){#mgx-exit,#mgx-exit::backdrop{transition:none}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    root = document.createElement('dialog'); root.id = 'mgx-exit';
    root.setAttribute('closedby', 'any'); root.setAttribute('aria-labelledby', 'mgx-exit-t');
    root.innerHTML = '<div class="xg"></div>' +
      '<button type="button" class="xx" aria-label="Chiudi">&times;</button><span class="xb">' + esc(k.badge) + '</span>' +
      '<h2 id="mgx-exit-t">' + k.tit + '</h2>' + (k.punti.length ? '<ul>' + k.punti.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : '') +
      '<a class="xc" href="' + esc(k.href) + '" autofocus>' + esc(k.cta) + '</a><button type="button" class="xn">No grazie, sto solo guardando</button>';
    document.body.appendChild(root);
    root.querySelector('.xx').addEventListener('click', function () { close('x'); });
    root.querySelector('.xn').addEventListener('click', function () { ls('mgExitNo', String(Date.now())); close('no'); });
    root.querySelector('.xc').addEventListener('click', function () { track('exit_popup_click', { offerta: k.id, corso: c ? c[1] : 'nessuno', modo: how }); try { if (typeof fbq === 'function') fbq('trackCustom', 'UscitaClick', { offerta: k.id }); } catch (e) {} });
    /* Esc, tasto indietro di Android o tocco fuori (dove il browser lo gestisce da solo) */
    /* stessi nomi di uscita.js: esc, fuori (in più: indietro = tasto/gesto indietro di Android) */
    var tasto = false, fuoriP = false;
    root.addEventListener('keydown', function (e) { tasto = e.key === 'Escape'; });
    root.addEventListener('pointerdown', function (e) { var r = root.getBoundingClientRect(); fuoriP = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom; });
    root.addEventListener('cancel', function () { why = why || (tasto ? 'esc' : fuoriP ? 'fuori' : 'indietro'); tasto = fuoriP = false; });
    root.addEventListener('close', function () { track('exit_popup_close', { modo: why || 'fuori' }); why = ''; });
    /* Safari non ha ancora closedby: tocco fuori dal riquadro gestito qui (pressione e rilascio entrambi fuori) */
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      var fuori = false;
      var out = function (e) { var r = root.getBoundingClientRect(); return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom; };
      root.addEventListener('pointerdown', function (e) { fuori = e.target === root && out(e); });
      root.addEventListener('click', function (e) { if (fuori && e.target === root && out(e)) close('fuori'); fuori = false; });
    }
  }
  function open(mode) {
    if (shown || (!FORZA && (Date.now() - t0 < WAIT || recent('mgConv', 7 * 864e5) || busy()))) return;
    shown = true; how = mode; ls('mgExitT', String(Date.now()));
    var k = content();
    build(k);
    root.showModal();
    track('exit_popup_view', { offerta: k.id, corso: c ? c[1] : 'nessuno', modo: mode });
    off();
  }
  function close(w) { if (root && root.open) { why = w; root.close(); } }
  if (window.MG_USCITA_DEMO) { window.mgUscitaApri = function () { shown = false; if (root) { root.remove(); root = null; } open('prova'); }; }

  /* computer: il mouse esce dall'alto della finestra */
  function onOut(e) { if (!e.relatedTarget && e.clientY < 10) open('mouse'); }
  /* telefono: risalita veloce dopo aver letto almeno 600px */
  var maxY = 0, hist = [];
  function onScroll() {
    var y = scrollY, t = performance.now(), top = y;
    if (y > maxY) maxY = y;
    hist.push([t, y]);
    while (hist.length && t - hist[0][0] > 350) hist.shift();
    for (var i = 0; i < hist.length; i++) if (hist[i][1] > top) top = hist[i][1];
    if (maxY > 800 && top - y > 300 && y > 150) open('risalita');
  }
  if (window.MG_USCITA_DEMO) return;
  var fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  function off() { document.removeEventListener('mouseout', onOut); removeEventListener('scroll', onScroll); }
  if (fine) document.addEventListener('mouseout', onOut); else addEventListener('scroll', onScroll, { passive: true });
  /* per le prove: ?uscita=1 lo apre subito */
  if (FORZA) setTimeout(function () { open('prova'); }, 400);
  /* dopo 12 secondi compare comunque; se in quel momento la persona sta scrivendo o ha la chat aperta, riprova ogni 3 secondi */
  else (function auto() { setTimeout(function () { if (shown) return; open('tempo'); if (!shown) { AUTO = 3000; auto(); } }, AUTO); })();
})();
