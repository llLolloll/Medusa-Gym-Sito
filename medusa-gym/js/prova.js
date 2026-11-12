/* Medusa Gym - modulo "prova gratuita" della home, a tocchi.
   Passo 1 corso, passo 2 giorni/fascia/lezione vera (da js/palinsesto.js), passo 3 nome, telefono, email facoltativa.
   Invia a Formspree (campi: corso, giorno, fascia, nome, cognome, telefono, email facoltativa, messaggio, consensi, origine).
   Bozza in localStorage "mgDraft" con solo corso e orario (mai nome, telefono o email), proposta con "Riprendi". */
(function () {
  'use strict';
  var frm = document.getElementById('cfrm');
  if (!frm) return;
  var P = window.MG_PALINSESTO;
  var WA = '393920708111';
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  function track(n, p) { try { if (window.mgTrack) window.mgTrack(n, p); } catch (e) {} }
  function tick(f, d, v) { try { if (window.mgTick) window.mgTick(f, d, v); } catch (e) {} }

  /* corso del modulo -> nome nel palinsesto, istruttore */
  var CORSI = [
    { v: 'Kickboxing', k: 'Kickboxing', p: 'Kickboxing' },
    { v: 'Pugilato', k: 'Pugilato', p: 'Pugilato' },
    { v: 'Functional Training', k: 'Functional', p: 'Functional Training' },
    { v: 'Calisthenics', k: 'Calisthenics', p: 'Calisthenics' },
    { v: 'Sala Pesi', k: 'Sala Pesi', p: '' },
    { v: 'Ginnastica Posturale', k: 'Posturale', p: 'Ginnastica Posturale' },
    { v: 'Autodifesa PATH', k: 'Autodifesa', p: 'Autodifesa PATH' },
    { v: 'Kickboxing Kids (9-14)', k: 'Kids 9-14', p: 'Kickboxing Kids' },
    { v: 'Active Senior (over 55)', k: 'Over 55', p: 'Active Senior' },
    { v: 'Non so ancora, aiutatemi!', k: 'Non so ancora', p: '' }
  ];
  function chi(c, d) { return P && P.chi ? P.chi(c, d) : ''; }
  var SHEET = !!frm.closest('.pvs-body');
  var GG = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
  var GL = { Lun: 'Lunedì', Mar: 'Martedì', Mer: 'Mercoledì', Gio: 'Giovedì', Ven: 'Venerdì', Sab: 'Sabato' };
  var FASCE = ['Mattina', 'Pranzo', 'Pomeriggio', 'Sera'];
  var ora = function (t) { return t.replace('.', ':'); };
  function fasciaDi(t) { var p = t.split('.'), m = (+p[0]) * 60 + (+p[1]); return m < 720 ? 'Mattina' : m < 900 ? 'Pranzo' : m < 1080 ? 'Pomeriggio' : 'Sera'; }
  function corsoObj(v) { for (var i = 0; i < CORSI.length; i++) if (CORSI[i].v === v) return CORSI[i]; return null; }

  var F = { corso: '', giorni: [], fascia: '', lez: '' }; /* lez = "Lun|20.30" */
  var cur = 1;

  /* ---------- bozza ---------- */
  var KEY = 'mgDraft';
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify({ t: Date.now(), corso: F.corso, giorni: F.giorni, fascia: F.fascia, lez: F.lez }));
    } catch (e) {}
  }
  function loadDraft() {
    try {
      var d = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!d || !d.t || Date.now() - d.t > 7 * 864e5) return null;
      if (!d.corso) return null;
      return d;
    } catch (e) { return null; }
  }
  function clearDraft() { try { localStorage.removeItem(KEY); } catch (e) {} }

  /* ---------- lezioni vere ---------- */
  function lezioni() {
    var o = corsoObj(F.corso);
    if (!o || !o.p || !P) return [];
    return P.lezioni.filter(function (x) {
      return x.c === o.p && (!F.giorni.length || F.giorni.indexOf(x.d) > -1) && (!F.fascia || fasciaDi(x.a) === F.fascia);
    }).sort(function (a, b) { return GG.indexOf(a.d) - GG.indexOf(b.d) || P.toMin(a.a) - P.toMin(b.a); });
  }
  function lezScelta() {
    if (!F.lez || !P) return null;
    var o = corsoObj(F.corso), p = F.lez.split('|');
    for (var i = 0; i < P.lezioni.length; i++) { var x = P.lezioni[i]; if (o && x.c === o.p && x.d === p[0] && x.a === p[1]) return x; }
    return null;
  }
  function quando() {
    var x = lezScelta();
    if (x) { var w = chi(x.c, x.d); return GL[x.d] + ' ' + ora(x.a) + (w ? ' con ' + w : '') + (x.g ? ' (' + x.g + ')' : ''); }
    var g = F.giorni.map(function (d) { return GL[d]; }).join(', ');
    var s = [g, F.fascia ? F.fascia.toLowerCase() : ''].filter(Boolean).join(', ');
    return s || 'Da concordare';
  }

  /* ---------- disegno ---------- */
  function chip(attrs, txt, on) {
    return '<button type="button" class="pv-chip' + (on ? ' on' : '') + '" aria-pressed="' + (on ? 'true' : 'false') + '" ' + attrs + '>' + txt + '</button>';
  }
  function drawCorsi() {
    $('pvCorsi').innerHTML = CORSI.map(function (c) { return chip('data-c="' + esc(c.v) + '"', esc(c.k), F.corso === c.v); }).join('');
  }
  function drawStep2() {
    var o = corsoObj(F.corso);
    $('pvCorsoLbl').textContent = o ? o.k : '';
    $('pvGiorni').innerHTML = GG.map(function (d) { return chip('data-d="' + d + '"', d, F.giorni.indexOf(d) > -1); }).join('');
    $('pvFasce').innerHTML = FASCE.map(function (f) { return chip('data-f="' + f + '"', f, F.fascia === f); }).join('');
    var wrap = $('pvLezWrap'), box = $('pvLez');
    if (!o || !o.p) {
      wrap.hidden = false;
      $('pvLLab').textContent = o && o.v === 'Sala Pesi' ? 'Sala pesi' : 'Ti aiutiamo noi';
      box.innerHTML = '<p class="pv-note">' + (o && o.v === 'Sala Pesi'
        ? 'La sala pesi è aperta Lun-Ven 08-22 e Sab 09-17: scegli quando preferisci, ti prepariamo la scheda alla prima visita.'
        : 'Dicci solo quando ti torna comodo: al telefono capiamo insieme il corso giusto.') + '</p>';
      return;
    }
    $('pvLLab').textContent = 'Scegli la tua lezione';
    var L = lezioni();
    var h = L.slice(0, 8).map(function (x) {
      var id = x.d + '|' + x.a, w = chi(x.c, x.d), on = F.lez === id;
      return '<button type="button" class="pv-le' + (on ? ' on' : '') + '" aria-pressed="' + on + '" data-l="' + id + '"><b>' + x.d + ' ' + ora(x.a) + '</b><span>' + esc(x.c) + (x.g ? ' &middot; ' + esc(x.g) : '') + '<small>' + [w ? 'con ' + esc(w) : '', x.g === 'Avanzato' ? 'per chi ha gi&agrave; esperienza' : x.g === 'Base' ? 'adatto anche se parti da zero' : ''].filter(Boolean).join(' &middot; ') + '</small></span></button>';
    }).join('');
    if (L.length > 8) h += '<p class="pv-note">Altri ' + (L.length - 8) + ' orari: scegli un giorno o una fascia per vederli.</p>';
    if (!L.length) h = '<p class="pv-note">Nessuna lezione in questa combinazione: prova un altro giorno o una fascia diversa.</p>';
    h += '<button type="button" class="pv-le pv-le-free' + (F.lez === 'libero' ? ' on' : '') + '" aria-pressed="' + (F.lez === 'libero') + '" data-l="libero"><b aria-hidden="true">?</b><span>Decidiamo al telefono<small>Ti proponiamo noi l\'orario migliore</small></span></button>';
    box.innerHTML = h;
  }
  function drawRecap() {
    var o = corsoObj(F.corso);
    $('pvRecap').innerHTML = '<b>' + esc(o ? o.k : '') + '</b> &middot; ' + esc(quando()) + ' <button type="button" class="pv-edit" data-go="2">Modifica</button>';
  }
  function syncHidden() {
    $('f-corso').value = F.corso;
    $('f-giorno').value = F.corso ? quando() : '';
    [].slice.call(frm.querySelectorAll('input[name="fascia"]')).forEach(function (r) { r.remove(); });
    var lx = lezScelta(), fv = lx ? fasciaDi(lx.a) : F.fascia;
    if (fv) { var h = document.createElement('input'); h.type = 'hidden'; h.name = 'fascia'; h.value = fv; frm.appendChild(h); }
  }
  function prog() {
    [].slice.call(document.querySelectorAll('.pv-prog i')).forEach(function (i, k) { i.classList.toggle('on', k < cur); });
  }
  function show(n, focus) {
    cur = n;
    [].slice.call(frm.querySelectorAll('.step')).forEach(function (s) { s.classList.toggle('act', +s.dataset.stepc === n); });
    if (n === 2) drawStep2();
    if (n === 3) drawRecap();
    prog();
    if (focus) {
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        var t = frm.querySelector('.step.act .step-title');
        if (t) { t.setAttribute('tabindex', '-1'); try { t.focus({ preventScroll: true }); } catch (e) { t.focus(); } }
      }); });
      if (SHEET) { frm.closest('.pvs-body').scrollTop = 0; return; }
      var sec = $('prova'), r = sec && sec.getBoundingClientRect();
      if (r && (r.top < -40 || r.top > innerHeight * .5)) { var w = frm.getBoundingClientRect().top + scrollY - 110; scrollTo({ top: w, behavior: 'smooth' }); }
    }
  }
  var sent = {};
  function stepSent(n) {
    if (n < 2 || sent[n]) return; sent[n] = true;
    try { document.dispatchEvent(new CustomEvent('mg:formstep', { detail: { step: String(n) } })); } catch (e) {}
  }
  function goStep(n) {
    if (n > cur) {
      if (cur === 1 && !F.corso) return;
      stepSent(n);
    }
    tick(1100, .05, .04);
    syncHidden();
    show(n, true);
  }

  /* ---------- clic ---------- */
  frm.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b || !frm.contains(b)) return;
    if (b.dataset.c != null) {
      if (F.corso !== b.dataset.c) { F.corso = b.dataset.c; F.lez = ''; }
      drawCorsi(); syncHidden(); save(); tick(900, .05, .04);
      setTimeout(function () { goStep(2); }, 200);
      return;
    }
    if (b.dataset.d) {
      var d = b.dataset.d, i = F.giorni.indexOf(d);
      if (i > -1) F.giorni.splice(i, 1); else F.giorni.push(d);
      F.lez = ''; drawStep2(); syncHidden(); save(); focusBack('[data-d="' + d + '"]');
      return;
    }
    if (b.dataset.f) {
      F.fascia = F.fascia === b.dataset.f ? '' : b.dataset.f;
      F.lez = ''; drawStep2(); syncHidden(); save(); focusBack('[data-f="' + b.dataset.f + '"]');
      return;
    }
    if (b.dataset.l) {
      F.lez = F.lez === b.dataset.l ? '' : b.dataset.l;
      drawStep2(); syncHidden(); save(); tick(900, .05, .04);
      if (F.lez) setTimeout(function () { goStep(3); }, 260); else focusBack('[data-l="' + b.dataset.l + '"]');
      return;
    }
    if (b.dataset.go) { goStep(+b.dataset.go); }
  });
  function focusBack(sel) { var el = frm.querySelector(sel); if (el) el.focus(); }
  /* frecce nei gruppi a scelta singola */
  frm.addEventListener('keydown', function (e) {
    if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].indexOf(e.key) < 0) return;
    var b = e.target.closest('.pv-chip,.pv-le'); if (!b) return;
    var all = [].slice.call(b.parentNode.querySelectorAll('.pv-chip,.pv-le')), i = all.indexOf(b);
    var n = all[(i + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1) + all.length) % all.length];
    if (n) { e.preventDefault(); n.focus(); }
  });
  ['f-nome', 'f-cognome', 'f-telefono', 'f-email', 'f-messaggio'].forEach(function (id) {
    $(id).addEventListener('input', function () { if ($(id).getAttribute('aria-invalid')) fieldMsg($(id), fieldError($(id))); });
  });
  /* il select nascosto lo usano gli agenti AI (webmcp.js) */
  $('f-corso').addEventListener('change', function () {
    var v = $('f-corso').value; if (!corsoObj(v) || v === F.corso) return;
    F.corso = v; F.lez = ''; drawCorsi(); save(); show(2, false);
  });

  /* ---------- errori nei campi ---------- */
  function fieldMsg(i, txt) {
    var g = i.closest('.fg'); if (!g) return; var m = g.querySelector('.fmsg');
    if (!txt) { if (m) m.remove(); i.removeAttribute('aria-invalid'); i.removeAttribute('aria-describedby'); return; }
    if (!m) { m = document.createElement('span'); m.className = 'fmsg'; m.id = i.id + '-msg'; g.appendChild(m); }
    m.textContent = txt; i.setAttribute('aria-invalid', 'true'); i.setAttribute('aria-describedby', m.id);
  }
  function fieldError(i) {
    var v = (i.value || '').trim();
    if (i.id === 'f-nome') return v.length < 2 ? 'Scrivi il tuo nome, così sappiamo chi aspettare.' : '';
    if (i.id === 'f-cognome') return v.length < 2 ? 'Scrivi il tuo cognome: ci serve per registrarti.' : '';
    if (i.id === 'f-telefono') { var n = v.replace(/\D/g, ''); return n.length < 8 || n.length > 15 ? 'Scrivi un numero di telefono valido.' : ''; }
    if (i.id === 'f-email') return v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? 'Controlla l\'email: manca qualcosa. Puoi anche lasciarla vuota.' : '';
    return '';
  }
  var ferr = $('ferr');
  function formErr(html) { if (!ferr) return; if (!html) { ferr.hidden = true; ferr.innerHTML = ''; return; } ferr.innerHTML = html; ferr.hidden = false; }
  var WA_FALL = 'https://wa.me/' + WA + '?text=' + encodeURIComponent('Ciao Medusa Gym! Vorrei prenotare una prova gratuita.');

  /* ---------- invio ---------- */
  var sending = false;
  frm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (sending) return;
    if (!F.corso) { show(1, true); return; }
    var bad = null;
    ['f-nome', 'f-cognome', 'f-telefono', 'f-email'].forEach(function (id) { var er = fieldError($(id)); fieldMsg($(id), er); if (er && !bad) bad = $(id); });
    if (bad) { bad.focus(); tick(300, .1, .06); return; }
    var pv = frm.querySelector('[name="consenso_privacy"]');
    if (pv && !pv.checked) {
      var w = pv.closest('.cons'); w.classList.add('err');
      formErr('Per inviare la richiesta spunta la casella dell\'informativa privacy.');
      pv.setAttribute('aria-invalid', 'true'); pv.setAttribute('aria-describedby', 'ferr');
      w.scrollIntoView({ block: 'center', behavior: 'smooth' }); try { pv.focus({ preventScroll: true }); } catch (e) {} tick(300, .1, .06);
      pv.addEventListener('change', function () { w.classList.remove('err'); pv.removeAttribute('aria-invalid'); pv.removeAttribute('aria-describedby'); formErr(''); }, { once: true });
      return;
    }
    formErr('');
    syncHidden();
    var b = frm.querySelector('.btn-submit'); var lbl = b.innerHTML;
    b.textContent = 'Invio...'; b.disabled = true; sending = true;
    var fd = new FormData(frm);
    var mk = frm.querySelector('[name="consenso_marketing"]');
    fd.set('consenso_privacy', 'Sì, ' + new Date().toLocaleString('it-IT'));
    fd.set('consenso_marketing', mk && mk.checked ? 'Sì' : 'No');
    if (!String(fd.get('email') || '').trim()) fd.delete('email');
    if (!String(fd.get('messaggio') || '').trim()) fd.delete('messaggio');
    fd.set('origine', (SHEET ? 'pagina ' : 'home ') + location.pathname + location.search);
    function fail(msg) { sending = false; b.innerHTML = lbl; b.disabled = false; formErr(msg + ' Riprova tra un attimo oppure <a href="' + WA_FALL + '" target="_blank" rel="noopener">scrivici su WhatsApp</a>.'); }
    fetch(frm.action, { method: 'POST', body: fd, headers: { Accept: 'application/json' } }).then(function (r) {
      if (!r.ok) { fail('La richiesta non &egrave; partita.'); return; }
      success();
    }).catch(function () { fail('Sembra che manchi la connessione.'); });
  });

  function icsLink(x) {
    /* prossima data utile di quella lezione */
    var dow = { Dom: 0, Lun: 1, Mar: 2, Mer: 3, Gio: 4, Ven: 5, Sab: 6 }[x.d];
    var now = new Date(), t = new Date(now);
    var p = x.a.split('.'), q = x.b.split('.');
    t.setHours(+p[0], +p[1], 0, 0);
    var add = (dow - t.getDay() + 7) % 7;
    t.setDate(t.getDate() + add);
    while (t - now < 24 * 36e5) t.setDate(t.getDate() + 7);
    var e = new Date(t); e.setHours(+q[0], +q[1], 0, 0);
    var f = function (d) { return d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) + 'T' + ('0' + d.getHours()).slice(-2) + ('0' + d.getMinutes()).slice(-2) + '00'; };
    var ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Medusa Gym//Prova//IT', 'BEGIN:VEVENT', 'UID:prova-' + Date.now() + '@medusagym.it',
      'DTSTAMP:' + new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, ''), 'DTSTART:' + f(t), 'DTEND:' + f(e),
      'SUMMARY:Prova gratuita ' + x.c + ' - Medusa Gym (da confermare)', 'LOCATION:Medusa Gym\\, Via Quinto Sertorio 24\\, 00174 Roma',
      'DESCRIPTION:Da confermare su WhatsApp. Porta scarpe pulite\\, acqua e asciugamano.', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    return { href: 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics), data: t };
  }
  function success() {
    var o = corsoObj(F.corso), x = lezScelta(), nome = ($('f-nome').value.trim() + ' ' + $('f-cognome').value.trim()).trim();
    clearDraft();
    $('fcont').style.display = 'none';
    var dr = $('pvDraft'); if (dr) dr.hidden = true;
    var pg = document.querySelector('.pv-prog'); if (pg) pg.style.display = 'none';
    var rows = [['Corso', o ? o.k : F.corso], ['Quando', quando()], ['Dove', 'Via Quinto Sertorio 24']];
    $('pvSum').innerHTML = rows.map(function (r) { return '<div><span>' + r[0] + '</span><b>' + esc(r[1]) + '</b></div>'; }).join('');
    var c = x ? icsLink(x) : null;
    var giorno = c ? GL[x.d].toLowerCase() + ' ' + c.data.getDate() + ' ' + ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'][c.data.getMonth()] : '';
    if (c) { var qd = $('pvSum').querySelectorAll('b')[1], wq = chi(x.c, x.d); if (qd) qd.textContent = giorno.charAt(0).toUpperCase() + giorno.slice(1) + ' ' + ora(x.a) + (wq ? ' con ' + wq : ''); }
    var msg = 'Ciao Medusa! Ho appena chiesto la prova gratuita di ' + (o ? o.k : 'un corso') + (x ? ' per ' + giorno + ' alle ' + ora(x.a) : '') + '. Sono ' + nome + '.';
    var h = '<a class="pv-btn" href="https://wa.me/' + WA + '?text=' + encodeURIComponent(msg) + '" target="_blank" rel="noopener">Conferma subito su WhatsApp</a>';
    if (c) { h += '<a class="pv-ghost" id="pvIcs" href="' + c.href + '" download="prova-medusa-gym.ics">Aggiungi al calendario</a>'; }
    h += '<a class="pv-ghost" href="come-arrivare.html">Come arrivare (metro A, 5 minuti a piedi)</a>';
    $('pvActs').innerHTML = h;
    var s = $('fsuc'); s.style.display = 'block';
    try { s.focus({ preventScroll: true }); } catch (e) {}
    if (SHEET) frm.closest('.pvs-body').scrollTop = 0;
    else { var top = s.getBoundingClientRect().top + scrollY - 120; scrollTo({ top: top, behavior: 'smooth' }); }
    try { if (typeof fbq === 'function') fbq('track', 'Lead'); } catch (e) {}
    try { if (typeof gtag === 'function') gtag('event', 'generate_lead', { form_name: 'prova-gratuita', form_location: SHEET ? 'pagina' : 'home', course: F.corso || 'non_indicato', lezione: x ? 'scelta' : 'da_concordare' }); } catch (e) {}
    var ic = $('pvIcs'); if (ic) ic.addEventListener('click', function () { track('calendar_add', { corso: F.corso }); });
    tick(800, .2, .08); setTimeout(function () { tick(1200, .2, .08); }, 200);
  }

  /* usato da js/webmcp.js (agenti AI): imposta la fascia e mostra un passo, mai invio */
  window.mgProva = {
    fascia: function (f) { if (FASCE.indexOf(f) < 0) return false; F.fascia = f; F.lez = ''; syncHidden(); save(); if (cur === 2) drawStep2(); return true; },
    vai: function (n) { if (F.corso && n >= 1 && n <= 3) { syncHidden(); show(n, false); } },
    /* usato da js/prova-sheet.js: apre il modulo con corso (e lezione "Mar|19.00") già scelti */
    apri: function (corso, lez) {
      if ($('fsuc') && $('fsuc').style.display === 'block') return;
      var o = corsoObj(corso);
      if (!o) { show(1, false); return; }
      if (F.corso !== o.v) { F.corso = o.v; F.lez = ''; }
      if (lez) { var keep = F.lez; F.lez = lez; if (!lezScelta()) F.lez = keep; }
      drawCorsi(); syncHidden();
      var n = F.lez && F.lez !== 'libero' && lezScelta() ? 3 : 2; stepSent(2); if (n === 3) stepSent(3); show(n, false);
    }
  };

  /* ---------- avvio ---------- */
  drawCorsi();
  var fromUrl = '';
  try {
    var c = window.MG_PROVA_CORSO || (SHEET ? '' : new URLSearchParams(location.search).get('corso'));
    if (c) { c = c.toLowerCase(); CORSI.forEach(function (o) { if (!fromUrl && (o.v.toLowerCase() === c || o.v.toLowerCase().indexOf(c) === 0 || o.k.toLowerCase() === c)) fromUrl = o.v; }); }
  } catch (e) {}
  if (fromUrl) { F.corso = fromUrl; drawCorsi(); syncHidden(); show(2, false); stepSent(2); }
  var D = SHEET ? null : loadDraft();
  if (D && !fromUrl && $('pvDraft')) {
    var oc = corsoObj(D.corso);
    var box = $('pvDraft');
    box.innerHTML = '<span>Avevi iniziato la richiesta' + (oc ? ' per <b>' + esc(oc.k) + '</b>' : '') + '.</span><span class="pv-dbtn"><button type="button" id="pvRip">Riprendi</button><button type="button" id="pvNo" aria-label="Ricomincia da capo">&times;</button></span>';
    box.hidden = false;
    $('pvRip').addEventListener('click', function () {
      F.corso = oc ? D.corso : ''; F.giorni = (D.giorni || []).filter(function (g) { return GG.indexOf(g) > -1; });
      F.fascia = FASCE.indexOf(D.fascia) > -1 ? D.fascia : ''; F.lez = D.lez || '';
      box.hidden = true; drawCorsi(); syncHidden();
      var to = !F.corso ? 1 : F.lez ? 3 : 2; stepSent(to); show(to, true);
      track('form_resume', { corso: F.corso || 'nessuno' });
    });
    $('pvNo').addEventListener('click', function () { clearDraft(); box.hidden = true; });
  }
})();
