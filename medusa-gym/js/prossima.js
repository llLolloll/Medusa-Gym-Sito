/* Medusa Gym - "Prossima lezione con ..." sulle pagine istruttore.
   <div data-mg-prossima="Andrea"></div>: mostra la prossima lezione (o "in sala adesso") e tre lezioni prenotabili
   (almeno 24 ore dopo, come il modulo); il tocco apre il modulo della prova (js/prova-sheet.js) con quella lezione.
   Orari da js/palinsesto.js, istruttori da MG_PALINSESTO.chi. */
(function () {
  'use strict';
  var box = document.querySelector('[data-mg-prossima]');
  if (!box) return;
  function go() {
    var P = window.MG_PALINSESTO; if (!P || !P.chi) return;
    var nome = box.getAttribute('data-mg-prossima');
    var FORM = { 'Kickboxing': 'Kickboxing', 'Pugilato': 'Pugilato', 'Functional Training': 'Functional Training', 'Calisthenics': 'Calisthenics',
      'Active Senior': 'Active Senior (over 55)', 'Kickboxing Kids': 'Kickboxing Kids (9-14)', 'Ginnastica Posturale': 'Ginnastica Posturale', 'Autodifesa PATH': 'Autodifesa PATH' };
    var L = P.lezioni.filter(function (x) { return FORM[x.c] && P.chi(x.c, x.d) === nome; });
    if (!L.length) return;
    var DOW = { Lun: 1, Mar: 2, Mer: 3, Gio: 4, Ven: 5, Sab: 6 };
    var GL = { 0: 'domenica', 1: 'lunedì', 2: 'martedì', 3: 'mercoledì', 4: 'giovedì', 5: 'venerdì', 6: 'sabato' };
    var MESI = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];
    var now = new Date();
    function when(x, k) { /* k-esima occorrenza (0 = prossima) dell'inizio della lezione */
      var p = x.a.split('.'), t = new Date(now); t.setHours(+p[0], +p[1], 0, 0);
      t.setDate(t.getDate() + ((DOW[x.d] - t.getDay() + 7) % 7) + 7 * k);
      return t;
    }
    function fine(x, t) { var q = x.b.split('.'), e = new Date(t); e.setHours(+q[0], +q[1], 0, 0); return e; }
    var occ = [];
    L.forEach(function (x) { for (var k = -1; k < 3; k++) { var t = when(x, k); occ.push({ x: x, t: t, e: fine(x, t) }); } });
    occ.sort(function (a, b) { return a.t - b.t; });
    var live = occ.filter(function (o) { return o.t <= now && o.e > now; })[0];
    var next = occ.filter(function (o) { return o.t > now; })[0];
    var book = occ.filter(function (o) { return o.t - now >= 24 * 36e5 && o.x.g !== 'Avanzato'; }).slice(0, 3); /* l'avanzato si sceglie dopo la valutazione */
    var ora = function (t) { return ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2); };
    function giorno(t) {
      var d0 = new Date(now); d0.setHours(0, 0, 0, 0); var d1 = new Date(t); d1.setHours(0, 0, 0, 0);
      var diff = Math.round((d1 - d0) / 864e5);
      return diff === 0 ? 'Oggi' : diff === 1 ? 'Domani' : GL[t.getDay()].charAt(0).toUpperCase() + GL[t.getDay()].slice(1);
    }
    function tra(t) {
      var m = Math.round((t - now) / 6e4);
      if (m < 60) return 'tra ' + m + ' minut' + (m === 1 ? 'o' : 'i');
      if (m < 24 * 60) { var h = Math.round(m / 60); return 'tra ' + h + (h === 1 ? ' ora' : ' ore'); }
      return '';
    }
    var lab = function (c) { return c === 'Kickboxing Kids' ? 'Kickboxing Kids' : c; };
    var h = '<div class="mgp"><p class="mgp-ey">Prossima lezione con ' + nome + '</p>';
    if (live) h += '<p class="mgp-live"><i></i>In sala adesso: ' + lab(live.x.c) + (live.x.g ? ' (' + live.x.g + ')' : '') + ' fino alle ' + ora(live.e) + '</p>';
    if (next) h += '<p class="mgp-big">' + giorno(next.t) + ' alle ' + ora(next.t) + '</p><p class="mgp-sub">' + lab(next.x.c) + (next.x.g ? ' &middot; ' + next.x.g : '') + (tra(next.t) ? ' &middot; ' + tra(next.t) : '') + '</p>';
    h += '<p class="mgp-lab">Prenota la tua prova gratuita con ' + nome + '</p><div class="mgp-les">';
    book.forEach(function (o) {
      h += '<button type="button" data-c="' + FORM[o.x.c] + '" data-l="' + o.x.d + '|' + o.x.a + '"><b>' + o.x.d + ' ' + o.t.getDate() + ' ' + MESI[o.t.getMonth()] + '</b><span>' + ora(o.t) + '</span><small>' + lab(o.x.c) + (o.x.g ? ' ' + o.x.g : '') + '</small></button>';
    });
    h += '</div></div>';
    var st = document.createElement('style');
    st.textContent = '.mgp{margin:1.4rem 0 .4rem;padding:1.1rem 1.2rem 1.2rem;border:1px solid rgba(57,255,20,.45);border-radius:22px;background:rgba(57,255,20,.06)}' +
      '.mgp p{margin:0}.mgp-ey,.mgp-lab{font:700 .66rem "Archivo",system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#39FF14}' +
      '.mgp-lab{margin-top:1.1rem!important;color:rgba(242,242,242,.6)}' +
      '.mgp-live{display:flex;align-items:center;gap:.5rem;margin-top:.5rem!important;font-size:.88rem;color:#F2F2F2}.mgp-live i{width:9px;height:9px;border-radius:50%;background:#ff3b30;box-shadow:0 0 0 0 rgba(255,59,48,.7);animation:mgpP 1.6s infinite}' +
      '@keyframes mgpP{70%{box-shadow:0 0 0 8px rgba(255,59,48,0)}100%{box-shadow:0 0 0 0 rgba(255,59,48,0)}}' +
      '.mgp-big{font-family:"Bebas Neue",Impact,sans-serif;font-size:2.4rem;line-height:1;margin-top:.45rem!important;color:#F2F2F2}' +
      '.mgp-sub{font-size:.9rem;color:rgba(242,242,242,.7);margin-top:.2rem!important}' +
      '.mgp-les{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;margin-top:.55rem}' +
      '.mgp-les button{display:flex;flex-direction:column;align-items:flex-start;gap:.1rem;min-height:44px;text-align:left;padding:.65rem .75rem;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:rgba(255,255,255,.04);color:#F2F2F2;font:600 .8rem "Archivo",system-ui,sans-serif;cursor:pointer;transition:border-color .2s,background .2s}' +
      '.mgp-les button:hover{border-color:#39FF14;background:rgba(57,255,20,.1)}.mgp-les button:focus-visible{outline:2px solid #39FF14;outline-offset:2px}' +
      '.mgp-les b{font-weight:700}.mgp-les span{font-family:"Bebas Neue",Impact,sans-serif;font-size:1.5rem;line-height:1;color:#39FF14;font-weight:400}.mgp-les small{color:rgba(242,242,242,.6);font-size:.72rem}' +
      '@media(max-width:420px){.mgp-les{grid-template-columns:1fr}.mgp-les button{flex-direction:row;align-items:center;gap:.7rem}.mgp-les small{margin-left:auto}}' +
      '@media(prefers-reduced-motion:reduce){.mgp-live i{animation:none}}';
    document.head.appendChild(st);
    box.innerHTML = h;
    box.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-l]'); if (!b) return;
      try { if (window.mgTrack) window.mgTrack('prossima_lezione_click', { istruttore: nome, corso: b.dataset.c }); } catch (x) {}
      if (window.mgProvaApri) window.mgProvaApri(b.dataset.c, b.dataset.l);
      else location.href = '/?corso=' + encodeURIComponent(b.dataset.c) + '#prova';
    });
  }
  if (window.MG_PALINSESTO) go();
  else { var s = document.createElement('script'); s.src = '/js/palinsesto.js?v=2'; s.onload = go; document.body.appendChild(s); }
})();
