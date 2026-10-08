/* WebMCP (bozza W3C Web ML CG): strumento per compilare (non inviare) il modulo prova gratuita.
   Nessuno strumento spunta i consensi o invia il modulo: lo fa sempre la persona. */
(function () {
  'use strict';
  var mc = navigator.modelContext;
  if (!mc || typeof mc.registerTool !== 'function') return;

  var CORSI = ['Sala Pesi', 'Kickboxing', 'Pugilato', 'Autodifesa PATH', 'Functional Training',
    'Calisthenics', 'Ginnastica Posturale', 'Kickboxing Kids (9-14)', 'Active Senior (over 55)',
    'Non so ancora, aiutatemi!'];
  var FASCE = ['Mattina', 'Pomeriggio', 'Sera'];

  function out(text) { return { content: [{ type: 'text', text: text }] }; }
  function clean(v, max) { return String(v == null ? '' : v).replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max); }
  function setVal(id, v) {
    var el = document.getElementById(id);
    if (!el || !v) return false;
    el.value = v;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  }

  /* Gli strumenti di sola lettura (orari, corsi, abbonamenti, contatti, prova) sono registrati in /js/chat.js. */
  try {
    var reg = mc.registerTool({
      name: 'prepara_richiesta_prova_gratuita',
      description: 'Compila il modulo "prova gratuita" della home con i dati forniti dall\'utente e lo mostra. NON accetta i consensi e NON invia: la persona deve controllare i dati, spuntare il consenso privacy e premere Invia. Usalo solo con dati che l\'utente ti ha dato in questa conversazione.',
      inputSchema: {
        type: 'object',
        properties: {
          corso: { type: 'string', enum: CORSI, description: 'Disciplina di interesse' },
          giorno: { type: 'string', maxLength: 80, description: 'Giorno preferito, testo libero' },
          fascia: { type: 'string', enum: FASCE, description: 'Fascia oraria preferita' },
          nome: { type: 'string', maxLength: 60 },
          cognome: { type: 'string', maxLength: 60 },
          email: { type: 'string', maxLength: 120 },
          telefono: { type: 'string', maxLength: 30 },
          messaggio: { type: 'string', maxLength: 500 }
        },
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: true },
      execute: function (a) {
        a = a || {};
        var form = document.getElementById('cfrm');
        if (!form) return out('Modulo non trovato in questa pagina.');
        var done = [];
        if (a.corso && CORSI.indexOf(a.corso) > -1 && setVal('f-corso', a.corso)) done.push('corso');
        ['giorno:80', 'nome:60', 'cognome:60', 'email:120', 'telefono:30', 'messaggio:500'].forEach(function (p) {
          var k = p.split(':')[0], n = +p.split(':')[1];
          if (setVal('f-' + k, clean(a[k], n))) done.push(k);
        });
        if (a.fascia && FASCE.indexOf(a.fascia) > -1) {
          var r = form.querySelector('input[name="fascia"][value="' + a.fascia + '"]');
          if (r) { r.checked = true; r.dispatchEvent(new Event('change', { bubbles: true })); done.push('fascia'); }
        }
        var sec = document.getElementById('prova');
        if (sec && sec.scrollIntoView) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return out('Campi compilati: ' + (done.join(', ') || 'nessuno') + '. Il modulo NON è stato inviato e i consensi NON sono stati accettati. Chiedi alla persona di controllare i dati, spuntare il consenso privacy e premere il pulsante di invio.');
      }
    });
    if (reg && reg.catch) reg.catch(function () {});
  } catch (e) { /* API non disponibile o cambiata: il sito funziona comunque */ }
})();
