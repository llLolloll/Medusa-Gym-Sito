/* Medusa Gym - Quiz "Trova il tuo corso".
   Si monta su ogni elemento con l'attributo data-mg-quiz. Serve js/palinsesto.js caricato prima.
   5 domande (2 e 5 a scelta multipla), risultato con il mix di corsi, lezioni vere e spinta all'OPEN.
   Chiude sempre su WhatsApp con il messaggio gia' scritto: nessun dato salvato sul sito.
   Regole dei punteggi: ogni obiettivo da' gli stessi punti al suo corso principale; i pari merito escono tutti. */
(function () {
  'use strict';
  var P = window.MG_PALINSESTO;
  var roots = document.querySelectorAll('[data-mg-quiz]');
  if (!P || !roots.length) return;
  var S = P.lezioni, DAYS = P.giorni;
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

  var INFO = {
    'Kickboxing': 'Full contact, low kick, K-1 e kick light. Si parte da zero, lo sparring è facoltativo.',
    'Pugilato': 'Tecnica, colpi e fiato con un tecnico FPI. Ottimo anche per sfogarsi.',
    'Autodifesa PATH': 'Difesa personale per la vita di tutti i giorni con il Maestro Roberto Boi. Non serve esperienza.',
    'Functional Training': 'Kettlebell, bilanciere e corpo libero in gruppo con Donatella. Il modo più rapido per rimettersi in forma.',
    'Calisthenics': 'Trazioni, dip e skill a corpo libero con Yvonne, gruppi Base e Avanzato.',
    'Sala Pesi': 'Aperta tutto il giorno, con una scheda gratuita preparata sui tuoi obiettivi.',
    'Ginnastica Posturale': 'Schiena e collo, valutazione iniziale e piccoli gruppi con Gildo, metodo ATS.',
    'Active Senior': 'Ginnastica dolce per over 55 con Donatella, per restare in movimento.',
    'Kickboxing Kids': 'Dai 9 ai 14 anni, senza contatto, con la Maestra Marika. Disciplina, rispetto e tanto divertimento.'
  };
  var LINK = {
    'Kickboxing': '/corsi/kickboxing.html', 'Pugilato': '/corsi/pugilato.html', 'Autodifesa PATH': '/corsi/autodifesa-path.html',
    'Functional Training': '/corsi/functional-training.html', 'Calisthenics': '/corsi/calisthenics.html', 'Sala Pesi': '/corsi/sala-pesi.html',
    'Ginnastica Posturale': '/corsi/ginnastica-posturale.html', 'Active Senior': '/corsi/active-senior.html', 'Kickboxing Kids': '/corsi/kickboxing-ragazzi.html'
  };
  var Q = [
    { k: 'chi', t: 'Per chi è?', multi: false, o: [['me', '🙋', 'Per me'], ['kid', '🧒', 'Per mio figlio (9-14 anni)'], ['fam', '👨‍👩‍👧', 'Per la mia famiglia'], ['senior', '🌿', 'Per me, ho più di 55 anni']] },
    { k: 'obi', t: 'Cosa cerchi?', multi: true, o: [['sfogo', '🥊', 'Imparare a combattere e sfogarmi'], ['difesa', '🛡️', 'Sapermi difendere'], ['forma', '🔥', 'Rimettermi in forma'], ['forza', '💪', 'Forza e corpo libero'], ['schiena', '🧘', 'Stare meglio con schiena e collo'], ['movimento', '🚶', 'Restare in movimento']] },
    { k: 'exp', t: 'Quanta esperienza hai?', multi: false, o: [['zero', '🌱', 'Mai fatto niente'], ['poco', '⚡', 'Qualcosa l\'ho fatto'], ['gara', '🏆', 'Voglio gareggiare']] },
    { k: 'cont', t: 'Il contatto fisico?', multi: false, o: [['no', '🙅', 'Zero, grazie'], ['light', '🤝', 'Leggero va bene'], ['ring', '🔥', 'Mi piace il ring']] },
    { k: 'quando', t: 'Quando puoi allenarti?', multi: true, o: [['mattina', '🌅', 'Mattina'], ['pranzo', '🥗', 'Pausa pranzo'], ['pomeriggio', '☀️', 'Pomeriggio'], ['sera', '🌙', 'Sera']] }
  ];

  function track(n, p) { try { if (window.mgTrack) window.mgTrack(n, p); } catch (e) {} try { if (typeof fbq === 'function' && n === 'quiz_complete') fbq('trackCustom', 'QuizCompletato', p || {}); } catch (e) {} }
  function wa(m) { return 'https://wa.me/' + P.wa + '?text=' + encodeURIComponent(m); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* scintille (canvas condiviso) */
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
    var famUrl = root.getAttribute('data-family-url') || '/palestra-famiglie.html#simulatore';
    root.classList.add('mgx');
    var box = document.createElement('div'); box.className = 'mgx-box'; root.appendChild(box);
    box.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a[href*="wa.me"]')) { try { if (typeof fbq === 'function') fbq('track', 'Contact'); } catch (x) {} } });
    var i = 0, A = {}, started = false;

    function show(html, cls) {
      box.innerHTML = '<div class="mgx-scene ' + (cls || '') + '">' + html + '</div>';
      var r = box.getBoundingClientRect();
      if (r.top < 60 || r.top > innerHeight * .6) box.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
    }
    function go(fn) { var sc = box.querySelector('.mgx-scene'); if (!sc || RM) return fn(); sc.classList.add('out'); setTimeout(fn, 240); }
    function ripple(b, e) {
      if (RM) return; var r = b.getBoundingClientRect(), d = Math.max(r.width, r.height), s = document.createElement('span');
      s.className = 'mgx-rip'; s.style.cssText = 'width:' + d + 'px;height:' + d + 'px;left:' + ((e.clientX || r.left + r.width / 2) - r.left - d / 2) + 'px;top:' + ((e.clientY || r.top + r.height / 2) - r.top - d / 2) + 'px';
      b.appendChild(s); setTimeout(function () { s.remove(); }, 600); if (navigator.vibrate) try { navigator.vibrate(12); } catch (x) {}
    }
    function prog() { return '<div class="mgx-prog">' + Q.map(function (_, n) { return '<i class="' + (n <= i ? 'on' : '') + '"></i>'; }).join('') + '</div>'; }

    function ask(dir) {
      var q = Q[i], cur = A[q.k] || (q.multi ? [] : null);
      show(prog() + '<div class="mgx-step">Domanda ' + (i + 1) + ' di ' + Q.length + '</div><div class="mgx-h">' + q.t + '</div>' + (q.multi ? '<div class="mgx-hint">Puoi sceglierne più di una</div>' : '') +
        '<div class="mgx-opts">' + q.o.map(function (o, n) {
          var on = q.multi ? cur.indexOf(o[0]) > -1 : cur === o[0];
          return '<button type="button" class="mgx-opt ' + (on ? 'on' : '') + '" data-v="' + o[0] + '" aria-pressed="' + on + '" style="animation-delay:' + n * 40 + 'ms"><span class="ic" aria-hidden="true">' + o[1] + '</span>' + o[2] + '<span class="ck" aria-hidden="true"></span></button>';
        }).join('') + '</div>' +
        '<div class="mgx-nav"><button type="button" class="mgx-back" ' + (i === 0 ? 'style="visibility:hidden"' : '') + '>&#8592; Indietro</button>' + (q.multi ? '<button type="button" class="mgx-btn" data-next ' + (cur.length ? '' : 'disabled') + '>Avanti</button>' : '') + '</div>', dir === 'back' ? 'back' : '');
      [].forEach.call(box.querySelectorAll('.mgx-opt'), function (b) {
        b.addEventListener('click', function (e) {
          var v = b.getAttribute('data-v');
          if (!started) { started = true; track('quiz_start'); }
          ripple(b, e);
          if (q.multi) {
            var s = A[q.k] || []; A[q.k] = s.indexOf(v) > -1 ? s.filter(function (x) { return x !== v; }) : s.concat(v);
            b.classList.toggle('on'); b.setAttribute('aria-pressed', b.classList.contains('on'));
            box.querySelector('[data-next]').disabled = !A[q.k].length;
          } else {
            A[q.k] = v;
            [].forEach.call(box.querySelectorAll('.mgx-opt'), function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
            b.classList.add('on'); b.setAttribute('aria-pressed', 'true');
            setTimeout(next, 320);
          }
        });
      });
      box.querySelector('.mgx-back').addEventListener('click', function () {
        if (i === 0) return; go(function () { i--; ask('back'); });
      });
      var n = box.querySelector('[data-next]'); if (n) n.addEventListener('click', next);
    }
    function next() {
      track('quiz_step', { step: i + 1 });
      if (i === 0 && (A.chi === 'kid' || A.chi === 'fam')) return go(loading);
      if (i + 1 >= Q.length) return go(loading);
      go(function () { i++; ask(); });
    }
    function loading() {
      var L = A.chi === 'kid' ? ['Leggo le tue risposte', 'Cerco il corso giusto per tuo figlio', 'Controllo gli orari'] : A.chi === 'fam' ? ['Leggo le tue risposte', 'Penso alla vostra squadra', 'Preparo il piano famiglia'] : ['Leggo i tuoi obiettivi', 'Incrocio gli orari', 'Preparo il tuo mix'];
      show('<div class="mgx-load"><div class="mgx-ring"></div><div class="mgx-h">Un attimo...</div><div class="mgx-lines">' + L.map(function (x) { return '<div>' + x + '</div>'; }).join('') + '</div></div>');
      var ds = box.querySelectorAll('.mgx-lines div'), st = RM ? 0 : 450;
      [].forEach.call(ds, function (d, n) { setTimeout(function () { d.classList.add('on'); }, 300 + n * st); });
      setTimeout(function () { go(result); }, 300 + ds.length * st + 250);
    }

    function score() {
      var Pt = { 'Kickboxing': 0, 'Pugilato': 0, 'Autodifesa PATH': 0, 'Functional Training': 0, 'Calisthenics': 0, 'Sala Pesi': 0, 'Ginnastica Posturale': 0, 'Active Senior': 0 };
      var p = function (c, v) { Pt[c] += v; };
      (A.obi || []).forEach(function (o) {
        if (o === 'sfogo') { p('Kickboxing', 4); p('Pugilato', 4); }
        if (o === 'difesa') { p('Autodifesa PATH', 4); p('Kickboxing', 1); p('Pugilato', 1); }
        if (o === 'forma') { p('Functional Training', 4); p('Sala Pesi', 2); p('Kickboxing', 1); p('Pugilato', 1); p('Calisthenics', 1); }
        if (o === 'forza') { p('Calisthenics', 4); p('Sala Pesi', 2); }
        if (o === 'schiena') { p('Ginnastica Posturale', 4); }
        if (o === 'movimento') { if (A.chi === 'senior') p('Active Senior', 4); else { p('Functional Training', 2); p('Ginnastica Posturale', 2); } }
      });
      if (A.chi === 'senior') { p('Active Senior', 4); p('Ginnastica Posturale', 2); p('Kickboxing', -2); p('Pugilato', -2); p('Calisthenics', -1); }
      if (A.exp === 'gara') { p('Kickboxing', 3); p('Pugilato', 3); }
      if (A.cont === 'no') { p('Kickboxing', -6); p('Pugilato', -6); p('Autodifesa PATH', -2); }
      if (A.cont === 'ring') { p('Kickboxing', 2); p('Pugilato', 2); }
      var sl = A.quando || [];
      Object.keys(Pt).forEach(function (c) {
        if (c === 'Sala Pesi' || !sl.length) return;
        if (!S.some(function (x) { return x.c === c && sl.indexOf(x.s) > -1; })) Pt[c] -= 3;
      });
      var sorted = Object.keys(Pt).map(function (c) { return [c, Pt[c]]; }).filter(function (e) { return e[1] > 0; }).sort(function (a, b) { return b[1] - a[1]; });
      if (!sorted.length) return [];
      var th = sorted[Math.min(2, sorted.length - 1)][1];
      var out = sorted.filter(function (e) { return e[1] >= th; });
      var MAIN = { sfogo: ['Kickboxing', 'Pugilato'], difesa: ['Autodifesa PATH'], forma: ['Functional Training'], forza: ['Calisthenics'], schiena: ['Ginnastica Posturale'], movimento: A.chi === 'senior' ? ['Active Senior'] : [] };
      (A.obi || []).forEach(function (o) { (MAIN[o] || []).forEach(function (c) { var e = sorted.filter(function (x) { return x[0] === c; })[0]; if (e && out.indexOf(e) < 0) out.push(e); }); });
      return out.sort(function (a, b) { return b[1] - a[1]; });
    }
    function lessons(c) {
      if (c === 'Sala Pesi') return ['Lun-Ven 08-22', 'Sab 09-17'];
      var sl = A.quando || [];
      var L = S.filter(function (x) { return x.c === c && (!sl.length || sl.indexOf(x.s) > -1); });
      if (A.exp === 'gara' && c === 'Kickboxing') L = L.concat(S.filter(function (x) { return x.c === 'Agonisti Kickboxing' && (!sl.length || sl.indexOf(x.s) > -1); }));
      return L.sort(function (a, b) { return DAYS.indexOf(a.d) - DAYS.indexOf(b.d) || P.toMin(a.a) - P.toMin(b.a); }).slice(0, 4)
        .map(function (x) { return x.d + ' ' + P.ora(x.a) + (x.c === 'Agonisti Kickboxing' ? ' Agonisti' : '') + (x.g ? ' ' + x.g : ''); });
    }
    function slotTxt() {
      var s = A.quando || []; if (!s.length) return '';
      var t = s.map(function (x) { return x === 'pranzo' ? 'in pausa pranzo' : x === 'mattina' ? 'la mattina' : x === 'pomeriggio' ? 'il pomeriggio' : 'la sera'; });
      return t.length > 1 ? t.slice(0, -1).join(', ') + ' e ' + t[t.length - 1] : t[0];
    }
    function card(name, pct, top, delay, extra) {
      return '<div class="mgx-rc ' + (top ? 'top' : '') + '" style="animation-delay:' + delay + 'ms"><div class="mgx-rh"><div class="mgx-rn">' + name + '</div><div class="mgx-pct" data-n="' + pct + '">0%</div></div>' +
        '<div class="mgx-meter"><b data-w="' + pct + '"></b></div><div class="mgx-why">' + INFO[name] + (extra || '') + ' <a href="' + LINK[name] + '" style="color:var(--g,#39FF14)">Scopri il corso</a></div>' +
        '<div class="mgx-les">' + lessons(name).map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div></div>';
    }
    function result() {
      i = Q.length - 1;
      var again = '<button type="button" class="mgx-ghost" data-again>Rifai il quiz</button>';
      if (A.chi === 'kid') {
        show('<p class="mgx-step">Il risultato</p><div class="mgx-h">Kickboxing Kids</div><div class="mgx-res">' + card('Kickboxing Kids', 100, true, 0) + '</div>' +
          '<div class="mgx-open"><span class="mgx-badge">E TU?</span><h3>Allenatevi insieme</h3><p>Mentre tuo figlio fa Kick Kids, tu puoi allenarti nella stessa fascia oraria. Con l\'abbonamento FAMILY più siete, più conviene.</p></div>' +
          '<a class="mgx-btn full" target="_blank" rel="noopener" href="' + wa('Ciao Medusa! Ho fatto il quiz sul sito per mio figlio: vorrei prenotare una prova di Kickboxing Kids. Mi date informazioni?') + '">Prenota la prova su WhatsApp</a>' +
          '<a class="mgx-ghost" href="' + famUrl + '">Crea il piano della tua famiglia</a>' + again);
        track('quiz_complete', { risultato: 'Kickboxing Kids', per_chi: 'figlio' });
        return fin();
      }
      if (A.chi === 'fam') {
        show('<p class="mgx-step">Il risultato</p><div class="mgx-h">Siete una squadra</div><p class="mgx-sub">Per le famiglie c\'è l\'abbonamento FAMILY: un solo abbonamento per 2-4 persone della stessa casa, e ognuno si allena come con l\'OPEN, Kickboxing Kids compreso.</p>' +
          '<div class="mgx-open"><span class="mgx-badge">FAMILY</span><h3>Più siete, più conviene</h3><p>Raccontaci chi siete e cosa vorreste fare: ti mostriamo il piano della vostra famiglia.</p></div>' +
          '<a class="mgx-btn full" href="' + famUrl + '">Crea il piano della tua famiglia</a>' + again);
        track('quiz_complete', { risultato: 'Family', per_chi: 'famiglia' });
        return fin();
      }
      var R = score();
      if (!R.length) {
        show('<div class="mgx-h">Ti aiutiamo noi</div><p class="mgx-sub">Le tue risposte sono particolari: è il momento giusto per due chiacchiere con noi.</p><a class="mgx-btn full" target="_blank" rel="noopener" href="' + wa('Ciao Medusa! Ho fatto il quiz sul sito ma non so ancora quale corso scegliere, mi aiutate?') + '">Scrivici su WhatsApp</a>' + again);
        track('quiz_complete', { risultato: 'nessuno' });
        return fin();
      }
      var top = R[0][1], pct = function (s) { return Math.min(97, Math.round(58 + 39 * s / top)); };
      var names = R.map(function (r) { return r[0]; }), st = slotTxt(), multi = names.length > 1;
      var msg = 'Ciao Medusa! Ho fatto il quiz sul sito, il mio mix è ' + names.join(', ') + (st ? ', sono libero ' + st : '') + '. ' + (multi ? 'Vorrei la consulenza gratuita per l\'OPEN.' : 'Vorrei prenotare la prova gratuita.');
      show('<p class="mgx-step">Il risultato</p><div class="mgx-h">' + (multi ? 'Il tuo mix' : 'Il tuo corso') + '</div><div class="mgx-res">' +
        R.map(function (r, n) { return card(r[0], pct(r[1]), n === 0, n * 120); }).join('') + '</div>' +
        (multi ? '<div class="mgx-open"><span class="mgx-badge">CONSIGLIATO</span><h3>Con l\'OPEN li fai tutti</h3><p>Perché sceglierne uno? Con l\'abbonamento OPEN hai tutti i corsi e la sala pesi. Te lo spieghiamo nella consulenza gratuita.</p></div>' : '') +
        '<a class="mgx-btn full" target="_blank" rel="noopener" href="' + wa(msg) + '">' + (multi ? 'Prenota la consulenza gratuita' : 'Prenota la prova gratuita') + '</a><p class="mgx-small">Si apre WhatsApp con il messaggio già pronto</p>' + again);
      track('quiz_complete', { risultato: names.join(', ').slice(0, 95), corsi: names.length });
      fin();
    }
    function fin() {
      setTimeout(function () {
        [].forEach.call(box.querySelectorAll('.mgx-meter b'), function (b) { b.style.width = b.getAttribute('data-w') + '%'; });
        [].forEach.call(box.querySelectorAll('.mgx-pct[data-n]'), function (el) {
          var n = +el.getAttribute('data-n'), t0 = performance.now();
          if (RM) { el.textContent = n + '%'; return; }
          (function tk(t) { var k = Math.min(1, (t - t0) / 1000), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(n * e) + '%'; if (k < 1) requestAnimationFrame(tk); })(t0);
        });
      }, 120);
      var t = box.querySelector('.mgx-rc.top') || box.querySelector('.mgx-open');
      if (t) setTimeout(function () { var r = t.getBoundingClientRect(); sparks(r.left + r.width / 2, r.top + 30, 70); }, 600);
      var a = box.querySelector('[data-again]');
      if (a) a.addEventListener('click', function () { go(function () { A = {}; i = 0; ask(); }); });
    }
    /* parte senza scroll: la prima schermata non deve spostare la pagina */
    (function first() { var sv = box.scrollIntoView; box.scrollIntoView = function () {}; ask(); box.scrollIntoView = sv; })();
  });
})();
