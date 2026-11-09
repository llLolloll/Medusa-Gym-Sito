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
      al: '2026-11-19T23:59:59+01:00',
      etichetta: 'Offerta del periodo',
      titolo: 'Una settimana da Medusa Gym, in omaggio',
      testo: 'Oltre alla prima lezione gratuita, puoi avere sette giorni per provare tutti i corsi, posturale, Active Senior e Kickboxing Kids compresi. Massimo 30 posti, nessun obbligo di proseguire: ti chiamiamo noi per attivarla.',
      cta: 'Ferma la tua settimana',
      href: '/settimana-omaggio.html',
      fine: 'fino al 19 novembre'
    },
    {
      /* Natale in Movimento: regole del copy nel doc di progetto (niente prezzi, mai "gratis" o "omaggio", mai "provi") */
      id: 'natale-in-movimento-2026',
      dal: '2026-11-20T00:00:00+01:00',
      al: '2026-12-24T23:59:59+01:00',
      etichetta: 'Natale in Movimento',
      titolo: 'Un mese su tutti i corsi, paghi solo l\'attivazione',
      testo: 'Kickboxing, pugilato, sala pesi con la tua scheda, posturale, functional, Active Senior: per un mese li fai tutti, niente vincoli. Puoi anche regalarlo. I posti sono trenta e il mese va attivato entro il 24 dicembre: lasci il numero e ti chiama Donatella.',
      cta: 'Blocca il tuo mese',
      href: '/natale-in-movimento.html',
      fine: 'fino al 24 dicembre'
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
    '#offerta{padding:1.4rem 1rem}' +
    '#offerta .of-c{position:relative;max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:1.6rem;padding:1.6rem 1.8rem;border:1px solid rgba(57,255,20,.45);border-radius:28px;background:linear-gradient(120deg,rgba(57,255,20,.12),rgba(14,14,14,.94) 55%);box-shadow:0 0 0 1px rgba(57,255,20,.08),0 18px 40px rgba(0,0,0,.45)}' +
    '#offerta .of-t{flex:1;min-width:0}' +
    '#offerta .of-k{display:flex;flex-wrap:wrap;align-items:center;gap:.6rem;margin:0 0 .5rem;font:600 .78rem/1.2 "Archivo",system-ui,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#39FF14}' +
    '#offerta .of-u{padding:.25rem .65rem;border-radius:999px;background:rgba(57,255,20,.14);color:#E9FFE2;letter-spacing:.06em;text-transform:none;font-size:.78rem}' +
    '#offerta .of-h{margin:0 0 .5rem;font-family:"Bebas Neue",Impact,sans-serif;font-weight:400;font-size:clamp(1.8rem,3.4vw,2.6rem);line-height:1;color:#fff;letter-spacing:.01em}' +
    '#offerta .of-t>p:last-child{margin:0;color:#DADADA;font:400 .95rem/1.6 "Archivo",system-ui,sans-serif;max-width:40rem}' +
    '#offerta .of-a{flex:none;display:inline-flex;align-items:center;gap:.5rem;min-height:52px;padding:0 1.6rem;border-radius:999px;background:#39FF14;color:#041004;font-family:"Bebas Neue",Impact,sans-serif;font-size:1.25rem;letter-spacing:.06em;text-decoration:none;transition:background .2s}' +
    '#offerta .of-a:hover{background:#fff}' +
    '#offerta .of-a:active{transform:scale(.97)}' +
    '#offerta .of-a:focus-visible{outline:2px solid #fff;outline-offset:3px}' +
    '@media(max-width:760px){#offerta .of-c{flex-direction:column;align-items:flex-start;gap:1.1rem;padding:1.4rem 1.3rem}#offerta .of-a{width:100%;justify-content:center}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var sec = document.createElement('section');
  sec.id = 'offerta';
  sec.setAttribute('aria-labelledby', 'of-h');
  sec.setAttribute('data-offerta', o.id);
  sec.innerHTML =
    '<div class="of-c"><div class="of-t">' +
    '<p class="of-k">' + o.etichetta + ' <span class="of-u">' + urg + '</span></p>' +
    '<p class="of-h" id="of-h">' + o.titolo + '</p>' +
    '<p>' + o.testo + '</p></div>' +
    '<a class="of-a" href="' + o.href + '" data-offerta="' + o.id + '" data-offerta-da="blocco">' + o.cta + ' &#8594;</a></div>';

  var dopo = document.getElementById('campioni-top') || document.querySelector('section.hero') || document.querySelector('main > section');
  if (dopo && dopo.parentNode) dopo.parentNode.insertBefore(sec, dopo.nextSibling);
})();
