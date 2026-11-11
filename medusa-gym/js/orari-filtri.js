/* Medusa Gym - Orario dei corsi interattivo (home).
   Parte dalla griglia completa scritta nell'HTML (leggibile da Google e dalle AI).
   Sopra aggiunge i filtri giorni / fascia oraria / tipo: quando si scelgono, la tabella si stringe.
   Ogni orario diventa un link a WhatsApp con il messaggio gia' scritto.
   Va caricato DOPO js/home.js (che crea le schede delle discipline su telefono). */
(function () {
  'use strict';
  var sec = document.getElementById('orari');
  var table = sec && sec.querySelector('table.orari');
  if (!table) return;
  var WA = '393920708111';
  var GIORNI = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
  var LUNGO = { Lun: 'lunedì', Mar: 'martedì', Mer: 'mercoledì', Gio: 'giovedì', Ven: 'venerdì', Sab: 'sabato' };
  var FASCE = ['Mattina', 'Pranzo', 'Pomeriggio', 'Sera'];
  var TIPI = ['Fight', 'Fitness', 'Benessere', 'Kids'];
  var CAT = { 'Kickboxing': 'Fight', 'Pugilato': 'Fight', 'Autodifesa PATH': 'Fight', 'Karate Byakuren': 'Fight',
    'Calisthenics': 'Fitness', 'Functional Training': 'Fitness', 'Active Senior': 'Benessere', 'Ginnastica Posturale': 'Benessere' };
  var F = { d: [], s: [], k: [] };

  function toMin(t) { var p = t.split('.'); return (+p[0]) * 60 + (+p[1]); }
  function fascia(m) { return m < 720 ? 'Mattina' : m < 900 ? 'Pranzo' : m < 1080 ? 'Pomeriggio' : 'Sera'; }
  function track(n, p) { try { if (window.mgTrack) window.mgTrack(n, p); } catch (e) {} }

  /* 1) ogni orario diventa un link WhatsApp, con giorno, fascia e tipo */
  var now = new Date(), oggi = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'][now.getDay()], nowM = now.getHours() * 60 + now.getMinutes();
  var slots = [];
  [].forEach.call(table.tBodies[0].rows, function (tr) {
    var corso = tr.cells[0].textContent.trim();
    [].forEach.call(tr.querySelectorAll('td[data-d]'), function (td) {
      var d = td.getAttribute('data-d');
      [].forEach.call(td.querySelectorAll('span.sl'), function (sp) {
        var lab = sp.querySelector('b') ? sp.querySelector('b').textContent.trim() : '';
        var txt = sp.textContent.replace(lab, '').trim();
        var m = txt.match(/(\d{2}\.\d{2})\s*-\s*(\d{2}\.\d{2})/);
        if (!m) return;
        var a0 = toMin(m[1]), b0 = toMin(m[2]);
        var kids = /kids/i.test(lab);
        var nome = kids ? 'Kickboxing Kids' : corso;
        var gruppo = kids ? '' : lab;
        var msg = 'Ciao Medusa! Vorrei provare ' + nome + (gruppo ? ' (' + gruppo + ')' : '') + ' di ' + LUNGO[d] + ' alle ' + m[1].replace('.', ':') + '. È possibile?';
        var a = document.createElement('a');
        a.className = sp.className;
        a.innerHTML = sp.innerHTML;
        a.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
        a.target = '_blank'; a.rel = 'noopener';
        a.setAttribute('aria-label', 'Prenota la prova di ' + nome + ' ' + LUNGO[d] + ' alle ' + m[1].replace('.', ':') + ' su WhatsApp');
        if (d === oggi && nowM >= a0 && nowM < b0) a.classList.add('live');
        a.addEventListener('click', function () { try { if (typeof fbq === 'function') fbq('track', 'Contact'); } catch (e) {} });
        sp.parentNode.replaceChild(a, sp);
        slots.push({ el: a, td: td, tr: tr, d: d, s: fascia(a0), k: kids ? 'Kids' : (CAT[corso] || 'Fitness') });
      });
    });
  });

  /* 2) pannello filtri */
  var box = document.createElement('div');
  box.className = 'ora-filtri mgx';
  function row(lab, key, vals) {
    return '<div class="of-row"><div class="of-lab">' + lab + '</div><div class="of-chips" role="group" aria-label="' + lab + '">' +
      vals.map(function (v) { return '<button type="button" class="of-chip" data-k="' + key + '" data-v="' + v + '" aria-pressed="false">' + v + '</button>'; }).join('') + '</div></div>';
  }
  box.innerHTML = row('Giorni', 'd', GIORNI) + row('Fascia', 's', FASCE) + row('Tipo', 'k', TIPI) +
    '<div class="of-bar"><div class="of-count" aria-live="polite"></div><div class="of-hint"><i></i>Tocca un orario per prenotare la prova su WhatsApp</div><button type="button" class="of-reset" hidden>Azzera filtri</button></div>';
  var anchor = sec.querySelector('.ora-tabs') || sec.querySelector('.ora-wrap');
  anchor.parentNode.insertBefore(box, anchor);
  var empty = document.createElement('div');
  empty.className = 'of-empty mgx';
  empty.innerHTML = 'Nessuna lezione con questi filtri. Allarga la fascia oraria oppure <a href="https://wa.me/' + WA + '?text=' + encodeURIComponent('Ciao Medusa! Non trovo un orario che faccia per me, mi aiutate a scegliere?') + '" target="_blank" rel="noopener">scrivici</a>: troviamo noi la soluzione.';
  empty.querySelector('a').addEventListener('click', function () { try { if (typeof fbq === 'function') fbq('track', 'Contact'); } catch (e) {} });
  var wrap = sec.querySelector('.ora-wrap');
  wrap.parentNode.insertBefore(empty, wrap.nextSibling);
  var count = box.querySelector('.of-count'), reset = box.querySelector('.of-reset');
  var heads = table.tHead ? [].slice.call(table.tHead.rows[0].cells) : [];

  function apply() {
    var on = F.d.length || F.s.length || F.k.length;
    sec.classList.toggle('ora-f', !!on);
    reset.hidden = !on;
    var vis = 0, giorniVivi = {}, righeVive = new Set(), tdVivi = new Set();
    slots.forEach(function (x) {
      var ok = (!F.d.length || F.d.indexOf(x.d) > -1) && (!F.s.length || F.s.indexOf(x.s) > -1) && (!F.k.length || F.k.indexOf(x.k) > -1);
      x.el.classList.toggle('x-h', !ok);
      if (ok) { vis++; giorniVivi[x.d] = 1; righeVive.add(x.tr); tdVivi.add(x.td); }
    });
    var giorniMostrati = GIORNI.filter(function (g) { return !on || (F.d.length ? F.d.indexOf(g) > -1 : giorniVivi[g]); });
    [].forEach.call(table.tBodies[0].rows, function (tr) {
      tr.classList.toggle('x-h', on && !righeVive.has(tr));
      [].forEach.call(tr.querySelectorAll('td[data-d]'), function (td) {
        var d = td.getAttribute('data-d');
        td.classList.toggle('x-h', on && giorniMostrati.indexOf(d) < 0);
        td.classList.toggle('x-e', on && !tdVivi.has(td));
      });
    });
    heads.forEach(function (th, i) { if (i) th.classList.toggle('x-h', on && giorniMostrati.indexOf(GIORNI[i - 1]) < 0); });
    count.innerHTML = on ? '<b>' + vis + '</b> ' + (vis === 1 ? 'lezione' : 'lezioni') + ' per te' : 'Tutta la settimana: <b>' + slots.length + '</b> lezioni';
    empty.classList.toggle('on', on && !vis);
    wrap.style.display = on && !vis ? 'none' : '';
    try { if (window.ScrollTrigger) { clearTimeout(apply.t); apply.t = setTimeout(function () { window.ScrollTrigger.refresh(); }, 150); } } catch (e) {}
  }
  box.addEventListener('click', function (e) {
    var b = e.target.closest('.of-chip');
    if (b) {
      var k = b.getAttribute('data-k'), v = b.getAttribute('data-v'), i = F[k].indexOf(v);
      if (i > -1) F[k].splice(i, 1); else F[k].push(v);
      b.setAttribute('aria-pressed', i > -1 ? 'false' : 'true');
      apply();
      track('orari_filtro', { filtro: { d: 'giorno', s: 'fascia', k: 'tipo' }[k], valore: v, attivo: i > -1 ? 'no' : 'si' });
      return;
    }
    if (e.target.closest('.of-reset')) {
      F = { d: [], s: [], k: [] };
      [].forEach.call(box.querySelectorAll('.of-chip'), function (c) { c.setAttribute('aria-pressed', 'false'); });
      apply();
    }
  });
  apply();
})();
