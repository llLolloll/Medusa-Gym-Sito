/* MedusA Gym - tracciamento eventi GA4
   Invia eventi a GA4 solo se gtag esiste, cioe' solo dopo il consenso analitico (CookieYes).
   Nessun dato personale: mai testi scritti dall'utente, mai dati del form, solo etichette fisse.
   Eventi: whatsapp_click, phone_click, email_click, directions_click, social_click, cta_click,
           form_step, generate_lead (da index.html), chat_open, chat_chip, chat_message,
           lang_switch, faq_open, trailer_audio (da index.html). */
(function () {
  'use strict';

  function ev(name, params) {
    try {
      if (typeof gtag !== 'function') return;
      var p = { transport_type: 'beacon' };
      if (params) for (var k in params) p[k] = params[k];
      gtag('event', name, p);
    } catch (e) {}
  }
  window.mgTrack = ev; /* usabile dalle pagine: mgTrack('nome_evento', {parametro: 'valore'}) */

  /* in quale punto della pagina si trova l'elemento */
  function place(el) {
    try {
      if (el.closest('#sticky')) return 'barra_fissa';
      if (el.closest('#mg-chat')) return 'chat';
      if (el.closest('nav')) return 'menu';
      if (el.closest('footer')) return 'footer';
      var s = el.closest('section[id]');
      if (s) return s.id;
      if (el.id) return el.id;
    } catch (e) {}
    return 'pagina';
  }

  function social(h) {
    if (h.indexOf('instagram.com') > -1) return 'instagram';
    if (h.indexOf('facebook.com') > -1) return 'facebook';
    if (h.indexOf('tiktok.com') > -1) return 'tiktok';
    return '';
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    try {
      var a = t.closest('a[href]');
      if (a) {
        var h = a.getAttribute('href') || '';
        var where = place(a);
        if (h.indexOf('wa.me') > -1) ev('whatsapp_click', { link_location: where });
        else if (h.indexOf('tel:') === 0) ev('phone_click', { link_location: where });
        else if (h.indexOf('mailto:') === 0) ev('email_click', { link_location: where });
        else if (h.indexOf('google.com/maps/dir') > -1) ev('directions_click', { link_location: where });
        else {
          var n = social(h);
          if (n) ev('social_click', { network: n, link_location: where });
        }
        /* bottoni "Prova gratis": #prova, index.html#prova, index.html?corso=X#prova, settimana omaggio */
        if (/#prova$/.test(h) || h.indexOf('settimana-omaggio') > -1) {
          var m = h.match(/[?&]corso=([^&#]+)/);
          var p = { cta_location: where, cta_target: h.indexOf('settimana-omaggio') > -1 ? 'settimana_omaggio' : 'form_prova' };
          if (m) { try { p.course = decodeURIComponent(m[1]); } catch (x) { p.course = m[1]; } }
          ev('cta_click', p);
        }
      }
      /* percorso del form della prova gratuita (index.html) */
      var go = t.closest('[data-go]');
      if (go && go.closest('#cfrm')) ev('form_step', { step: go.getAttribute('data-go') });
      /* chat assistente */
      if (t.closest('#mg-launch')) ev('chat_open');
      var chip = t.closest('.mg-chip');
      if (chip) ev('chat_chip', { chip_label: (chip.textContent || '').slice(0, 40) });
      /* lingua */
      var lg = t.closest('.lang button');
      if (lg) ev('lang_switch', { language: lg.getAttribute('data-lang') });
    } catch (x) {}
  }, true);

  /* messaggio scritto nella chat: conta solo che e' stato inviato, mai il testo */
  document.addEventListener('submit', function (e) {
    try { if (e.target && e.target.classList && e.target.classList.contains('mg-form')) ev('chat_message'); } catch (x) {}
  }, true);

  /* domande frequenti aperte (l'evento "toggle" non risale: serve la fase di cattura) */
  document.addEventListener('toggle', function (e) {
    try {
      var d = e.target;
      if (d && d.tagName === 'DETAILS' && d.open && d.classList.contains('fq')) {
        var s = d.querySelector('summary');
        ev('faq_open', { question: s ? (s.textContent || '').trim().slice(0, 80) : '' });
      }
    } catch (x) {}
  }, true);
})();
