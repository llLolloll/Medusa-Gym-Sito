/* Medusa Gym - Simulatore abbonamento FAMILY.
   Si monta su ogni elemento con l'attributo data-mg-family. Serve js/palinsesto.js caricato prima.
   Chiede quanti siete, chi e' ognuno e cosa vorrebbe fare; mostra il piano e le lezioni in contemporanea.
   Il prezzo non compare mai: chiude su WhatsApp con la richiesta di consulenza gratuita gia' scritta.
   Nessun dato salvato sul sito (i nomi restano solo nel messaggio WhatsApp che la persona decide di inviare). */
(function () {
  'use strict';
  var P = window.MG_PALINSESTO;
  var roots = document.querySelectorAll('[data-mg-family]');
  if (!P || !roots.length) return;
  var S = P.lezioni.map(function (x) {
    var c = x.c === 'Functional Training' ? 'Functional' : x.c === 'Ginnastica Posturale' ? 'Posturale' : x.c === 'Kickboxing Kids' ? 'Kick Kids' : x.c;
    return { c: c, d: x.d, a: x.a, b: x.b };
  });
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ROLES = { adulto: ['🧑', 'Adulto'], over: ['🌿', 'Over 55'], ragazzo: ['🧑‍🎓', 'Ragazzo 15-17'], bimbo: ['🧒', 'Bambino 9-14'] };
  var EXTRA = ['Posturale', 'Agonisti Kickboxing'];
  var COURSES = {
    adulto: ['Kickboxing', 'Pugilato', 'Autodifesa PATH', 'Functional', 'Calisthenics', 'Sala Pesi', 'Posturale', 'Agonisti Kickboxing'],
    over: ['Active Senior', 'Functional', 'Sala Pesi', 'Pugilato', 'Kickboxing', 'Posturale'],
    ragazzo: ['Kickboxing', 'Pugilato', 'Autodifesa PATH', 'Functional', 'Calisthenics', 'Sala Pesi', 'Agonisti Kickboxing'],
    bimbo: ['Kick Kids']
  };
  function track(n, p) { try { if (window.mgTrack) window.mgTrack(n, p); } catch (e) {} try { if (typeof fbq === 'function' && n === 'family_plan') fbq('trackCustom', 'FamilyPiano', p || {}); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var cv, cx, PT = [], raf = 0;
  function sparks(x, y, n) {
    if (RM) return;
    if (!cv) {
      cv = document.createElement('canvas'); cv.className = 'mgx-fx'; cv.setAttribute('aria-hidden', 'true'); document.body.appendChild(cv); cx = cv.getContext('2d');
      var fit = function () { var d = Math.min(2, devicePixelRatio || 1); cv.width = innerWidth * d; cv.height = innerHeight * d; cx.setTransform(d, 0, 0, d, 0, 0); };
      fit(); addEventListener('resize', fit);
    }
    for (var i = 0; i < n; i++) { var a = Math.random() * 6.28, v = 2 + Math.random() * 6; PT.push({ x: x, y: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 3, l: 1, s: 2 + Math.random() * 3, w: Math.random() < .75 }); }
    if (!raf) loop();
  }
  function loop() {
    cx.clearRect(0, 0, innerWidth, innerHeight);
    PT = PT.filter(function (p) { return p.l > 0; });
    PT.forEach(function (p) { p.x += p.vx; p.y += p.vy; p.vy += .18; p.vx *= .98; p.l -= .018; cx.fillStyle = p.w ? 'rgba(57,255,20,' + p.l + ')' : 'rgba(255,255,255,' + p.l + ')'; cx.beginPath(); cx.arc(p.x, p.y, p.s * p.l + .3, 0, 7); cx.fill(); });
    raf = PT.length ? requestAnimationFrame(loop) : 0;
    if (!raf) cx.clearRect(0, 0, innerWidth, innerHeight);
  }

  [].forEach.call(roots, function (root) {
    root.classList.add('mgx');
    var box = document.createElement('div'); box.className = 'mgx-box'; root.appendChild(box);
    box.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a[href*="wa.me"]')) { try { if (typeof fbq === 'function') fbq('track', 'Contact'); } catch (x) {} } });
    var N = 0, cur = 0, M = [], started = false, noScroll = true;

    function show(html, cls) {
      box.innerHTML = '<div class="mgx-scene ' + (cls || '') + '">' + html + '</div>';
      if (noScroll) { noScroll = false; return; }
      var r = box.getBoundingClientRect();
      if (r.top < 60 || r.top > innerHeight * .6) box.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
    }
    function go(fn) { var sc = box.querySelector('.mgx-scene'); if (!sc || RM) return fn(); sc.classList.add('out'); setTimeout(fn, 240); }
    function ripple(b, e) {
      if (RM) return; var r = b.getBoundingClientRect(), d = Math.max(r.width, r.height), s = document.createElement('span');
      s.className = 'mgx-rip'; s.style.cssText = 'width:' + d + 'px;height:' + d + 'px;left:' + ((e.clientX || r.left + r.width / 2) - r.left - d / 2) + 'px;top:' + ((e.clientY || r.top + r.height / 2) - r.top - d / 2) + 'px';
      b.appendChild(s); setTimeout(function () { s.remove(); }, 600); if (navigator.vibrate) try { navigator.vibrate(12); } catch (x) {}
    }
    function prog() { var tot = N ? N + 1 : 5, at = N ? cur + 1 : 0, h = ''; for (var k = 0; k < tot; k++) h += '<i class="' + (k <= at ? 'on' : '') + '"></i>'; return '<div class="mgx-prog">' + h + '</div>'; }

    function stepCount() {
      show(prog() + '<div class="mgx-step">Primo passo</div><div class="mgx-h">Quanti siete?</div><div class="mgx-hint">Persone che vivono nella stessa casa</div>' +
        '<div class="mgx-big">' + [2, 3, 4].map(function (n, k) { return '<button type="button" class="mgx-opt" data-n="' + n + '" style="animation-delay:' + k * 60 + 'ms"><b>' + n + '</b>persone</button>'; }).join('') + '</div>');
      [].forEach.call(box.querySelectorAll('.mgx-big .mgx-opt'), function (b) {
        b.addEventListener('click', function (e) {
          if (!started) { started = true; track('family_start'); }
          ripple(b, e); b.classList.add('on'); N = +b.getAttribute('data-n');
          var old = M; M = []; for (var k = 0; k < N; k++) M.push(old[k] || { name: '', role: k === 0 ? 'adulto' : '', c: [] });
          cur = 0; setTimeout(function () { go(stepMember); }, 300);
        });
      });
    }
    function stepMember(dir) {
      var m = M[cur];
      var roleChips = Object.keys(ROLES).map(function (k) { return '<button type="button" class="mgx-chip ' + (m.role === k ? 'on' : '') + '" data-r="' + k + '" aria-pressed="' + (m.role === k) + '">' + ROLES[k][0] + ' ' + ROLES[k][1] + '</button>'; }).join('');
      var cc = m.role ? COURSES[m.role].map(function (c) { var on = m.c.indexOf(c) > -1; return '<button type="button" class="mgx-chip ' + (on ? 'on' : '') + '" data-c="' + c + '" aria-pressed="' + on + '">' + c + (EXTRA.indexOf(c) > -1 ? '<em>EXTRA</em>' : '') + '</button>'; }).join('') : '';
      show(prog() + '<div class="mgx-step">Persona ' + (cur + 1) + ' di ' + N + '</div>' +
        '<div class="mgx-who"><div class="mgx-av" aria-hidden="true">' + (m.role ? ROLES[m.role][0] : '?') + '</div><div class="mgx-h">' + (cur === 0 ? 'Partiamo da te' : 'Chi è?') + '</div></div>' +
        '<input class="mgx-inp" maxlength="30" autocomplete="off" aria-label="Nome (facoltativo)" placeholder="' + (cur === 0 ? 'Il tuo nome (facoltativo)' : 'Come si chiama? (facoltativo)') + '" value="' + esc(m.name) + '">' +
        '<div class="mgx-lab">Chi è</div><div class="mgx-chips" data-roles>' + roleChips + '</div>' +
        (m.role ? '<div class="mgx-lab">Cosa vorrebbe fare</div><div class="mgx-chips" data-cs>' + cc + '</div>' + (m.role === 'bimbo' ? '<p class="mgx-note">Kick Kids: dai 9 ai 14 anni, senza contatto, con la Maestra Marika.</p>' : '') : '') +
        '<div class="mgx-err" aria-live="polite"></div>' +
        '<div class="mgx-nav"><button type="button" class="mgx-back">&#8592; Indietro</button><button type="button" class="mgx-btn" data-next>' + (cur === N - 1 ? 'Crea il piano' : 'Avanti') + '</button></div>',
        dir === 'back' ? 'back' : dir === 'stay' ? 'stay' : '');
      box.querySelector('.mgx-inp').addEventListener('input', function (e) { m.name = e.target.value.trim(); });
      [].forEach.call(box.querySelectorAll('[data-roles] .mgx-chip'), function (b) {
        b.addEventListener('click', function () {
          m.role = b.getAttribute('data-r');
          m.c = m.role === 'bimbo' ? ['Kick Kids'] : m.c.filter(function (c) { return COURSES[m.role].indexOf(c) > -1; });
          var y = scrollY; stepMember('stay'); scrollTo(0, y);
        });
      });
      [].forEach.call(box.querySelectorAll('[data-cs] .mgx-chip'), function (b) {
        b.addEventListener('click', function (e) {
          ripple(b, e); var c = b.getAttribute('data-c');
          m.c = m.c.indexOf(c) > -1 ? m.c.filter(function (x) { return x !== c; }) : m.c.concat(c);
          b.classList.toggle('on'); b.setAttribute('aria-pressed', b.classList.contains('on'));
        });
      });
      box.querySelector('.mgx-back').addEventListener('click', function () { go(function () { if (cur === 0) stepCount(); else { cur--; stepMember('back'); } }); });
      box.querySelector('[data-next]').addEventListener('click', function () {
        var err = box.querySelector('.mgx-err');
        if (!m.role) { err.textContent = 'Scegli chi è per continuare'; return; }
        if (!m.c.length) { err.textContent = 'Scegli almeno un\'attività (anche solo una)'; return; }
        if (cur < N - 1) go(function () { cur++; stepMember(); }); else go(loading);
      });
    }
    function loading() {
      var L = ['Leggo chi siete', 'Incrocio i vostri orari', 'Preparo il piano famiglia'];
      show('<div class="mgx-load"><div class="mgx-ring"></div><div class="mgx-h">Un attimo...</div><div class="mgx-lines">' + L.map(function (x) { return '<div>' + x + '</div>'; }).join('') + '</div></div>');
      var ds = box.querySelectorAll('.mgx-lines div'), st = RM ? 0 : 450;
      [].forEach.call(ds, function (d, n) { setTimeout(function () { d.classList.add('on'); }, 300 + n * st); });
      setTimeout(function () { go(plan); }, 300 + ds.length * st + 250);
    }
    function label(m, k) { return m.name ? esc(m.name) : (k === 0 ? 'Tu' : ROLES[m.role][1].split(' ')[0] + ' ' + (k + 1)); }
    function overlaps() {
      var out = [], seen = {};
      for (var x = 0; x < M.length; x++) for (var y = x + 1; y < M.length; y++) {
        var A = S.filter(function (s) { return M[x].c.indexOf(s.c) > -1; }), B = S.filter(function (s) { return M[y].c.indexOf(s.c) > -1; });
        A.forEach(function (a) { B.forEach(function (b) {
          if (a.d === b.d && P.toMin(a.a) < P.toMin(b.b) && P.toMin(b.a) < P.toMin(a.b) && !(a.c === b.c && a.a === b.a) && !seen[x + '-' + y]) { seen[x + '-' + y] = 1; out.push({ x: x, y: y, a: a, b: b }); }
        }); });
      }
      return out.slice(0, 3);
    }
    function plan() {
      var T = {
        2: ['DOPPIO COLPO', 'Doppio colpo!', 'Con quello che spendereste per due abbonamenti normali, con il FAMILY vi allenate tutti e due come con l\'OPEN. Tutti i corsi, per entrambi.'],
        3: ['COMBO DA TRE', 'Combo da tre!', 'Il prezzo del FAMILY resta lo stesso, ma adesso lo dividete in tre. Ognuno di voi si allena come con l\'OPEN: una convenienza difficile da battere.'],
        4: ['SQUADRA AL COMPLETO', 'Squadra al completo!', 'La famiglia Medusa si allarga: stesso prezzo, diviso in quattro. Il massimo della convenienza, e ognuno di voi ha tutto quello che include l\'OPEN.']
      }[N];
      var ov = overlaps();
      var ex = []; M.forEach(function (m) { m.c.forEach(function (c) { if (EXTRA.indexOf(c) > -1 && ex.indexOf(c) < 0) ex.push(c); }); });
      var who = M.map(function (m) { var r = m.role === 'bimbo' ? 'un bambino' : m.role === 'ragazzo' ? 'un ragazzo' : m.role === 'over' ? 'un over 55' : 'un adulto'; return '- ' + (m.name ? m.name + ' (' + r + ')' : r) + ': ' + m.c.join(', '); });
      var msg = 'Ciao Medusa! Ho fatto il simulatore FAMILY sul sito. Siamo in ' + N + ':\n' + who.join('\n') + '\nVorremmo la consulenza gratuita per attivare il FAMILY.';
      show('<div class="mgx-tier"><div class="x">' + T[0] + ' &middot; ' + N + ' PERSONE</div><div class="mgx-h">' + T[1] + '</div><p>' + T[2] + '</p></div>' +
        '<div class="mgx-res">' + M.map(function (m, k) {
          return '<div class="mgx-rc ' + (k === 0 ? 'top' : '') + '" style="animation-delay:' + k * 120 + 'ms"><div class="mgx-mem"><div class="mgx-av" aria-hidden="true">' + ROLES[m.role][0] + '</div><div>' +
            '<div class="mgx-rn">' + label(m, k) + '</div><div class="mgx-why">' + ROLES[m.role][1] + '</div><div class="mgx-les">' +
            m.c.map(function (c) { var x = EXTRA.indexOf(c) > -1; return '<span class="' + (x ? 'x' : '') + '">' + c + (x ? ' &middot; extra' : '') + '</span>'; }).join('') + '</div></div></div></div>';
        }).join('') + '</div>' +
        (ov.length ? '<div class="mgx-sync"><h3>Vi allenate insieme</h3>' + ov.map(function (o, k) {
          var t = P.toMin(o.a.a) > P.toMin(o.b.a) ? o.a.a : o.b.a;
          return '<div class="mgx-sl" style="animation-delay:' + (300 + k * 120) + 'ms"><div class="t">' + o.a.d + ' ' + P.ora(t) + '</div><div>Mentre <b>' + label(M[o.x], o.x) + '</b> fa ' + o.a.c + ', <b>' + label(M[o.y], o.y) + '</b> fa ' + o.b.c + '.</div></div>';
        }).join('') + '</div>' : '') +
        '<div class="mgx-open"><span class="mgx-badge">GRATIS</span><h3>Attivalo con una consulenza</h3><p>Il prezzo del vostro FAMILY ve lo diciamo in palestra, durante una consulenza gratuita, insieme al percorso giusto per ognuno di voi.</p></div>' +
        (ex.length ? '<p class="mgx-note">' + ex.join(' e ') + (ex.length > 1 ? ' sono percorsi' : ' è un percorso') + ' a parte: si possono aggiungere al FAMILY, ne parliamo in consulenza.</p>' : '') +
        '<a class="mgx-btn full" target="_blank" rel="noopener" href="https://wa.me/' + P.wa + '?text=' + encodeURIComponent(msg) + '">Richiedi la consulenza gratuita</a>' +
        '<p class="mgx-small">Si apre WhatsApp con il messaggio già pronto</p><button type="button" class="mgx-ghost" data-again>Ricomincia</button>');
      track('family_plan', { persone: N, insieme: ov.length ? 'si' : 'no' });
      box.querySelector('[data-again]').addEventListener('click', function () { go(function () { N = 0; M = []; cur = 0; stepCount(); }); });
      setTimeout(function () { var r = box.querySelector('.mgx-tier').getBoundingClientRect(); sparks(r.left + r.width / 2, r.top + 40, 40 * N); }, 500);
    }
    stepCount();
  });
})();
