/* Medusa Gym - "Quanto sei lontano?"
   Si monta su ogni elemento con l'attributo data-mg-dist.
   Scegli il quartiere e vedi come arrivare: metro A (fermate e scesa), a piedi, bus, auto e parcheggio.
   I dati sono gli stessi della pagina come-arrivare.html: se cambiano li', aggiornali anche qui.
   Per i tempi esatti si apre Google Maps con partenza dal quartiere (nessun tempo inventato). */
(function () {
  'use strict';
  var roots = document.querySelectorAll('[data-mg-dist]');
  if (!roots.length) return;
  var WA = '393920708111';
  var DEST = 'Medusa Gym, Via Quinto Sertorio 24, 00174 Roma';
  var BUS = 'Linee 451, 520, 548, 557 e 590, con fermate a pochi minuti a piedi.';
  var AUTO = 'Si parcheggia in tutta la zona intorno alla palestra e ci sono numerosi garage nelle vicinanze.';
  var Q = [
    { n: 'Cinecittà', big: 'A piedi', sub: 'Sei nel quartiere', metro: 'Se vieni in metro A: Giulio Agricola è a circa 5 minuti a piedi, Subaugusta a circa 6.', piedi: true },
    { n: 'Don Bosco', big: 'A piedi', sub: 'Sei a due passi', metro: 'In metro A scendi a Giulio Agricola, a circa 5 minuti a piedi dalla palestra.', piedi: true },
    { n: 'Appio Claudio', big: '1 fermata', sub: 'Metro A da Lucio Sestio', metro: 'Da Lucio Sestio è una fermata fino a Giulio Agricola, poi circa 5 minuti a piedi.' },
    { n: 'Tuscolano', big: '1-2 fermate', sub: 'Metro A', metro: 'Da Lucio Sestio è una fermata fino a Giulio Agricola, da Numidio Quadrato sono due. Poi circa 5 minuti a piedi.' },
    { n: 'Quadraro', big: '3 fermate', sub: 'Metro A da Porta Furba-Quadraro', metro: 'Da Porta Furba-Quadraro sono 3 fermate fino a Giulio Agricola, poi circa 5 minuti a piedi.' },
    { n: 'Lamaro', big: 'Vicinissimo', sub: 'Confina con Cinecittà', metro: 'La fermata della metro A più vicina è Subaugusta, a circa 6 minuti a piedi dalla palestra.' },
    { n: 'Cinecittà Est', big: '1 fermata', sub: 'Metro A da Cinecittà', metro: 'Dalla fermata Cinecittà è una fermata fino a Subaugusta, poi circa 6 minuti a piedi.' },
    { n: 'Anagnina e Romanina', big: '2 fermate', sub: 'Metro A da Anagnina', metro: 'Dal capolinea Anagnina sono 2 fermate fino a Subaugusta (circa 6 minuti a piedi) o 3 fino a Giulio Agricola.', maps: 'Anagnina, Roma' },
    { n: 'Arco di Travertino e Appio Latino', big: '4 fermate', sub: 'Metro A', metro: 'Da Arco di Travertino sono 4 fermate fino a Giulio Agricola, poi circa 5 minuti a piedi.', maps: 'Arco di Travertino, Roma' }
  ];
  function track(n, p) { try { if (window.mgTrack) window.mgTrack(n, p); } catch (e) {} }
  function maps(q, mode) { return 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(q.maps || q.n + ', Roma') + '&destination=' + encodeURIComponent(DEST) + '&travelmode=' + mode; }

  [].forEach.call(roots, function (root) {
    root.classList.add('mgx');
    root.innerHTML = '<div class="mgx-dist"><div class="mgx-step">Da dove arrivi?</div><div class="mgx-chips" role="group" aria-label="Scegli il tuo quartiere">' +
      Q.map(function (q, i) { return '<button type="button" class="mgx-chip" data-i="' + i + '" aria-pressed="false">' + q.n + '</button>'; }).join('') +
      '</div><div class="mgx-dres" aria-live="polite"><p class="mgx-note">Tocca il tuo quartiere: ti diciamo come arrivare in metro, a piedi, in bus o in auto. <a href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(DEST) + '" target="_blank" rel="noopener" style="color:var(--g,#39FF14)">Oppure calcola il percorso da dove sei ora</a>.</p></div></div>';
    var res = root.querySelector('.mgx-dres');
    root.addEventListener('click', function (e) {
      var b = e.target.closest('.mgx-chip'); if (!b) return;
      [].forEach.call(root.querySelectorAll('.mgx-chip'), function (c) { c.classList.remove('on'); c.setAttribute('aria-pressed', 'false'); });
      b.classList.add('on'); b.setAttribute('aria-pressed', 'true');
      var q = Q[+b.getAttribute('data-i')];
      var msg = 'Ciao Medusa! Arrivo da ' + q.n + ' e vorrei prenotare una prova gratuita.';
      res.innerHTML = '<div class="mgx-rc top" style="margin-top:.9rem"><div class="mgx-step">Da ' + q.n + '</div><div class="mgx-dbig">' + q.big + '</div><div class="mgx-why">' + q.sub + '</div>' +
        '<ul class="mgx-dl">' +
        '<li><span aria-hidden="true">🚇</span><div><b>Metro A</b>' + q.metro + '</div></li>' +
        (q.piedi ? '<li><span aria-hidden="true">🚶</span><div><b>A piedi</b>Dal tuo quartiere arrivi a piedi in pochi minuti.</div></li>' : '') +
        '<li><span aria-hidden="true">🛵</span><div><b>Auto o scooter</b>' + AUTO + '</div></li>' +
        '<li><span aria-hidden="true">🚌</span><div><b>Bus</b>' + BUS + '</div></li>' +
        '</ul><div class="mgx-dbtn"><a class="mgx-ghost" href="' + maps(q, q.auto ? 'driving' : 'transit') + '" target="_blank" rel="noopener">Tempo esatto su Google Maps</a>' +
        '<a class="mgx-btn" href="https://wa.me/' + WA + '?text=' + encodeURIComponent(msg) + '" target="_blank" rel="noopener">Prenota la prova gratuita</a></div></div>';
      var wa = res.querySelector('a[href*="wa.me"]');
      wa.addEventListener('click', function () { try { if (typeof fbq === 'function') fbq('track', 'Contact'); } catch (x) {} });
      track('distanza_quartiere', { quartiere: q.n });
    });
  });
})();
