/* MedusA Gym - assistente automatico (bot a regole)
   Nessuna API, nessun cookie, nessuna chiamata esterna: tutte le risposte sono scritte qui sotto
   e riprendono le informazioni pubblicate sul sito. Se cambia qualcosa (orari, formule, contatti),
   si modifica questo file. */
(function () {
  'use strict';
  if (window.__mgChat) return;
  window.__mgChat = true;

  var BASEURL = 'https://www.medusagym.it/';
  var WA = '393920708111';
  var TEL = '+39067477431';

  /* ---------- DATI ---------- */
  var DAYS = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
  var DAYS_LONG = { Lun: 'Lunedì', Mar: 'Martedì', Mer: 'Mercoledì', Gio: 'Giovedì', Ven: 'Venerdì', Sab: 'Sabato' };

  /* Orari: stessi del palinsesto del sito */
  var SCHED = {
    kick: {
      Lun: ['13.30-14.30', '18.00-19.00', 'Agonisti 19.00-20.30', '20.30-21.30'],
      Mar: ['Kids 9-14 17.30-19.00', '20.30-21.30'],
      Mer: ['13.30-14.30', '18.00-19.00', 'Agonisti 19.00-20.30', '20.30-21.30'],
      Gio: ['Kids 9-14 17.30-19.00', '20.30-21.30'],
      Ven: ['13.30-14.30', '18.00-19.00', 'Agonisti 19.00-20.30', '20.30-21.30'],
      Sab: []
    },
    pugi: {
      Lun: ['08.30-09.30'], Mar: ['14.00-15.00', '19.00-20.30'], Mer: ['08.30-09.30'],
      Gio: ['14.00-15.00', '19.00-20.30'], Ven: ['08.30-09.30'], Sab: ['14.00-16.00']
    },
    path: { Lun: [], Mar: ['20.30-22.00'], Mer: [], Gio: ['20.30-22.00'], Ven: [], Sab: [] },
    cali: {
      Lun: ['16.00-17.00'], Mar: ['Base 18.00-19.00', 'Avanzato 19.00-20.30'], Mer: [],
      Gio: ['Base 18.00-19.00', 'Avanzato 19.00-20.30'], Ven: ['16.00-17.00'], Sab: []
    },
    func: {
      Lun: ['19.15-20.15'], Mar: ['13.30-14.30', '19.15-20.45'], Mer: [],
      Gio: ['13.30-14.30', '19.15-20.45'], Ven: ['19.15-20.15'], Sab: []
    },
    seni: { Lun: [], Mar: ['09.30-10.30'], Mer: [], Gio: ['09.30-10.30'], Ven: [], Sab: [] },
    kara: { Lun: ['20.30-21.30'], Mar: [], Mer: ['20.30-21.30'], Gio: [], Ven: ['20.30-21.30'], Sab: [] },
    post: {
      Lun: ['10.30-11.30', '18.00-19.00'], Mar: ['10.30-11.30', '18.00-19.00'], Mer: [],
      Gio: ['10.30-11.30', '18.00-19.00'], Ven: ['10.30-11.30', '18.00-19.00'], Sab: []
    }
  };

  var COURSES = {
    kick: {
      label: 'Kickboxing', url: '/corsi/kickboxing.html',
      kw: ['kickboxing', 'kick boxing', 'kick', 'full contact', 'low kick', 'k 1', 'k1', 'thai'],
      info: 'Full contact, low kick, K-1 e kick light, dai 14 anni, per tutti i livelli. Lo sparring è facoltativo. Istruttori: Lucio Pedana e Lorenzo Di Michele. Per chi vuole fare agonismo c\'è il Team Last Round.'
    },
    pugi: {
      label: 'Pugilato', url: '/corsi/pugilato.html',
      kw: ['pugilato', 'boxe', 'boxing', 'pugile', 'guantoni'],
      info: 'Seguito dal tecnico FPI Andrea Durazzi, per tutti i livelli, amatoriale o agonistico. Il sabato 14.00-16.00 è dedicato a sparring e preparazione.'
    },
    path: {
      label: 'Autodifesa PATH', url: '/corsi/autodifesa-path.html',
      kw: ['autodifesa', 'difesa personale', 'path', 'krav'],
      info: 'Corso di difesa personale del Maestro Roberto Boi: consapevolezza, reazione e protezione. È per tutti.'
    },
    cali: {
      label: 'Calisthenics', url: '/corsi/calisthenics.html',
      kw: ['calisthenics', 'calistenia', 'corpo libero', 'sbarra', 'street workout'],
      info: 'Allenamento a corpo libero con Yvonne Rivellini. Gruppi base, avanzato e misto: il base è per chi parte da zero.'
    },
    func: {
      label: 'Functional Training', url: '/corsi/functional-training.html',
      kw: ['functional', 'funzionale', 'allenamento funzionale'],
      info: 'Con Donatella Vecchioni, gruppi da massimo 15 persone, per tutti i livelli.'
    },
    seni: {
      label: 'Active Senior', url: '/corsi/active-senior.html',
      kw: ['active senior', 'senior', 'over 55', 'anziani', 'terza eta', 'ginnastica dolce', 'pensionat'],
      info: 'Ginnastica dolce per chi ha più di 55 anni e vuole tornare a muoversi con sicurezza, con Donatella Vecchioni.'
    },
    post: {
      label: 'Ginnastica Posturale', url: '/corsi/ginnastica-posturale.html',
      kw: ['posturale', 'postura', 'mal di schiena', 'schiena', 'cervicale', 'ats'],
      info: 'Metodo Istituto ATS con Ermenegildo Pagliaroli: valutazione iniziale e piccoli gruppi. Non è compresa nell\'abbonamento OPEN, ma si può aggiungere.'
    },
    kara: {
      label: 'Karate Byakuren', url: '/#orari',
      kw: ['karate', 'byakuren'],
      info: 'Il karate Byakuren è presente in orario, ma non fa parte delle discipline principali della palestra. Per i dettagli scrivici su WhatsApp.'
    }
  };

  /* ---------- UTILITÀ ---------- */
  function norm(s) {
    return ' ' + String(s).toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function has(n, kw) { return n.indexOf(' ' + norm(kw).trim()) !== -1; }
  function hasAny(n, list) { for (var i = 0; i < list.length; i++) { if (has(n, list[i])) return true; } return false; }
  function a(href, label, ext) {
    return '<a href="' + href + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + label + '</a>';
  }
  function waLink(text) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text); }
  function btn(href, label, ext, kind) {
    return '<a class="mg-cta' + (kind ? ' mg-' + kind : '') + '" href="' + href + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + label + '</a>';
  }
  function waBtn(text, label) { return btn(waLink(text), label || 'Scrivici su WhatsApp', true, 'wa'); }
  function proveBtn() { return btn('/#prova', 'Prenota la prova gratuita', false); }

  /* ora e giorno a Roma */
  function romeNow() {
    var d = new Date();
    try {
      var p = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Rome', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(d);
      var o = {}; p.forEach(function (x) { o[x.type] = x.value; });
      var map = { Mon: 'Lun', Tue: 'Mar', Wed: 'Mer', Thu: 'Gio', Fri: 'Ven', Sat: 'Sab', Sun: 'Dom' };
      return { day: map[o.weekday], min: (parseInt(o.hour, 10) % 24) * 60 + parseInt(o.minute, 10) };
    } catch (e) {
      var g = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'][d.getDay()];
      return { day: g, min: d.getHours() * 60 + d.getMinutes() };
    }
  }
  function nextDay(day) {
    var order = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
    return order[(order.indexOf(day) + 1) % 7];
  }
  function openStatus() {
    var n = romeNow(), open, close;
    if (n.day === 'Dom') return 'Oggi è domenica e siamo chiusi. Riapriamo lunedì alle 08:00.';
    if (n.day === 'Sab') { open = 9 * 60; close = 17 * 60; } else { open = 8 * 60; close = 22 * 60; }
    if (n.min >= open && n.min < close) {
      return 'In questo momento siamo aperti, fino alle ' + (n.day === 'Sab' ? '17:00' : '22:00') + '.';
    }
    return 'In questo momento siamo chiusi.';
  }
  function courseDay(day) {
    if (day === 'Dom') return null;
    var out = [];
    Object.keys(SCHED).forEach(function (k) {
      var s = SCHED[k][day];
      if (s && s.length) out.push('<b>' + COURSES[k].label + '</b>: ' + s.join(', '));
    });
    return out;
  }
  function courseSched(k) {
    var rows = [];
    DAYS.forEach(function (d) {
      var s = SCHED[k][d];
      if (s && s.length) rows.push('<b>' + d + '</b> ' + s.join(', '));
    });
    return rows.join('<br>');
  }

  /* ---------- RISPOSTE ---------- */
  var CH = {
    main: ['Prenota la prova gratuita', 'Orari dei corsi', 'Abbonamenti e prezzi', 'Dove siamo', 'Corsi per bambini', 'Parla con lo staff'],
    courses: ['Kickboxing', 'Pugilato', 'Autodifesa', 'Calisthenics', 'Functional', 'Posturale']
  };

  function reply(html, chips) { return { html: html, chips: chips || CH.main }; }

  function courseAnswer(k, withSched) {
    var c = COURSES[k];
    var h = '<b>' + c.label + '</b><br>' + c.info;
    if (withSched !== false) h += '<br><br><b>Orari</b><br>' + courseSched(k);
    h += '<br><br>' + a(c.url, 'Scheda del corso') + '<br>' + proveBtn();
    return reply(h, ['Prenota la prova gratuita', 'Altri corsi', 'Abbonamenti e prezzi']);
  }

  var INTENTS = [
    {
      id: 'saluto', kw: ['ciao', 'buongiorno', 'buonasera', 'salve', 'hey', 'ehi'],
      w: 1, run: function () { return reply('Ciao! Sono l\'assistente automatico di MedusA Gym. Posso aiutarti con prova gratuita, orari, corsi, abbonamenti e come arrivare. Cosa ti serve?'); }
    },
    {
      id: 'grazie', kw: ['grazie', 'perfetto', 'ottimo', 'ok grazie', 'gentilissimo'],
      w: 1, run: function () { return reply('Di niente! Se vuoi provare, la prima lezione è gratuita e senza impegno.', ['Prenota la prova gratuita', 'Parla con lo staff']); }
    },
    {
      id: 'prova', kw: ['prova', 'provare', 'lezione di prova', 'prima lezione', 'prenot', 'iscrizione', 'iscrivermi', 'iscrivere', 'iniziare', 'cominciare', 'gratis', 'gratuita', 'gratuito'],
      w: 3, run: function () {
        return reply('La prima lezione è <b>gratuita e senza impegno</b>, vale per tutti i corsi e va prenotata, così ti aspettiamo con l\'istruttore giusto. Ti rispondiamo entro 24 ore.<br><br>Puoi prenotare in tre modi: il modulo sul sito, WhatsApp al 392 070 8111 oppure telefonando allo ' + a('tel:' + TEL, '06 747 7431') + '.<br>' + proveBtn() + waBtn('Ciao MedusA Gym! Vorrei prenotare una prova gratuita.', 'Prenota su WhatsApp'),
          ['Cosa devo portare', 'Servono certificati?', 'Abbonamenti e prezzi']);
      }
    },
    {
      id: 'orari_apertura', kw: ['orari di apertura', 'orario di apertura', 'siete aperti', 'aperti', 'chiusi', 'chiusura', 'apertura', 'aprite', 'chiudete', 'domenica', 'sabato', 'festivi', 'fino a che ora'],
      w: 3, run: function () {
        return reply('<b>Orari di apertura</b><br>Lunedì-venerdì 08:00-22:00<br>Sabato 09:00-17:00<br>Domenica chiuso<br><br>La sala pesi è accessibile in tutti gli orari di apertura. ' + openStatus(),
          ['Orari dei corsi', 'Prenota la prova gratuita', 'Dove siamo']);
      }
    },
    {
      id: 'oggi', kw: ['oggi', 'stasera', 'stamattina', 'adesso', 'ora che corsi', 'domani'],
      w: 3, run: function (n) {
        var now = romeNow(), day = now.day, label = 'Oggi';
        if (has(n, 'domani')) { day = nextDay(day); label = 'Domani'; }
        var list = courseDay(day);
        if (!list) return reply(label + ' è domenica e siamo chiusi. Riapriamo lunedì alle 08:00.', ['Orari dei corsi', 'Prenota la prova gratuita']);
        return reply('<b>' + label + ' (' + (DAYS_LONG[day] || day) + ')</b><br>' + list.join('<br>') + '<br><br>La sala pesi è sempre accessibile. ' + a('/#orari', 'Palinsesto completo'),
          ['Prenota la prova gratuita', 'Orari dei corsi']);
      }
    },
    {
      id: 'orari_corsi', kw: ['orari', 'orario', 'palinsesto', 'quando', 'che giorni', 'quali giorni', 'che ora', 'a che ora', 'turni', 'calendario'],
      w: 2, run: function () {
        return reply('Gli orari cambiano da corso a corso. Di quale vuoi sapere? Puoi anche chiedermi "cosa c\'è oggi?". Palinsesto completo: ' + a('/#orari', 'tabella degli orari') + '.',
          CH.courses.concat(['Cosa c\'è oggi?']));
      }
    },
    {
      id: 'abbonamenti', kw: ['abbonament', 'prezzo', 'prezzi', 'costo', 'costa', 'costano', 'quanto', 'tariff', 'quota', 'mensile', 'mese', 'retta', 'rate', 'rateale', 'rateizz', 'almapay', 'pagamento', 'pagare', 'formula', 'formule', 'one', 'open'],
      w: 3, run: function () {
        return reply('<b>Abbonamenti</b><br><b>ONE</b>: una disciplina a scelta, in tutti i suoi orari.<br><b>OPEN</b>: tutte le discipline e la sala pesi.<br><b>FAMILY</b>: prezzo unico per 2, 3 o 4 persone dello stesso nucleo familiare.<br>La ginnastica posturale è a parte e si può aggiungere.<br><br>I prezzi li vediamo in segreteria <b>dopo la prova gratuita</b>, perché dipendono da formula e durata. Si può pagare anche a rate (AlmaPay).<br>' + a('/abbonamenti.html', 'Come funzionano le formule') + '<br>' + proveBtn(),
          ['Abbonamento famiglia', 'Servono certificati?', 'Parla con lo staff']);
      }
    },
    {
      id: 'family', kw: ['family', 'famiglia', 'famiglie', 'figli', 'genitori', 'fratelli', 'marito', 'moglie', 'coppia', 'in due', 'tutta la famiglia'],
      w: 3, run: function () {
        return reply('<b>FAMILY</b>: un solo abbonamento, a prezzo unico, per 2, 3 o 4 persone dello stesso nucleo familiare. Più siete, più conviene. Ognuno si allena come con l\'OPEN (tutte le discipline e la sala pesi, Kickboxing Kids compreso). Restano a parte la posturale e gli allenamenti agonisti di kickboxing.<br>' + a('/palestra-famiglie.html', 'Palestra per famiglie') + '<br>' + proveBtn(),
          ['Corsi per bambini', 'Abbonamenti e prezzi', 'Parla con lo staff']);
      }
    },
    {
      id: 'dove', kw: ['dove', 'indirizzo', 'come arrivare', 'arrivare', 'raggiungere', 'metro', 'metropolitana', 'bus', 'autobus', 'parcheggio', 'parcheggiare', 'garage', 'cinecitta', 'cinecitta due', 'centro commerciale', 'mappa', 'sede', 'zona', 'vicino', 'quartiere', 'subaugusta', 'giulio agricola'],
      w: 3, run: function () {
        return reply('<b>MedusA Gym</b><br>Via Quinto Sertorio 24, 00174 Roma (Cinecittà).<br><br>A piedi: metro A Giulio Agricola 5 minuti (400 m), Subaugusta 6 minuti, centro commerciale Cinecittà Due circa 12 minuti. In zona passano i bus 451, 520, 548, 557 e 590. Si parcheggia in tutta la zona e ci sono garage vicini.<br>' + a('/come-arrivare.html', 'Indicazioni complete') + btn('https://www.google.com/maps/search/?api=1&query=MedusA+Gym+Via+Quinto+Sertorio+24+Roma', 'Apri su Google Maps', true),
          ['Orari di apertura', 'Prenota la prova gratuita']);
      }
    },
    {
      id: 'contatti', kw: ['contatti', 'contatto', 'telefono', 'telefonare', 'chiamare', 'numero', 'whatsapp', 'email', 'mail', 'segreteria', 'staff', 'parlare', 'persona', 'operatore', 'umano', 'responsabile'],
      w: 3, run: function () {
        return reply('<b>Contatti</b><br>Telefono: ' + a('tel:' + TEL, '06 747 7431') + '<br>WhatsApp: ' + a('https://wa.me/' + WA, '392 070 8111', true) + '<br>Email: ' + a('mailto:medusagym2023@gmail.com', 'medusagym2023@gmail.com') + '<br><br>Lo staff risponde entro 24 ore.<br>' + waBtn('Ciao MedusA Gym! Vorrei qualche informazione.'),
          ['Prenota la prova gratuita', 'Orari di apertura']);
      }
    },
    {
      id: 'principianti', kw: ['principiante', 'principianti', 'da zero', 'non ho mai', 'mai fatto', 'fuori allenamento', 'sedentari', 'non sono allenat', 'non sono in forma', 'timid', 'vergogn', 'livello base', 'neofita'],
      w: 3, run: function () {
        return reply('Assolutamente sì: ogni corso parte dal livello base e gli istruttori adattano la lezione al gruppo. Non importa la condizione fisica di partenza, importa la voglia di iniziare. Per le prime lezioni di kickboxing e pugilato guantoni e protezioni li mettiamo noi.<br>' + a('/palestra-principianti.html', 'Come funziona la prima volta') + '<br>' + proveBtn(),
          ['Cosa devo portare', 'Orari dei corsi', 'Abbonamenti e prezzi']);
      }
    },
    {
      id: 'bambini', kw: ['bambino', 'bambini', 'bambina', 'ragazzo', 'ragazzi', 'ragazza', 'figlio', 'figlia', 'kids', 'minorenn', 'eta', 'anni', 'adolescent', 'teenager', 'piccoli'],
      w: 3, run: function () {
        return reply('<b>Kickboxing Kids</b>, dai 9 ai 14 anni, <b>senza contatto</b>. La tiene la Maestra Marika Pagliaroli, campionessa PRO italiana e internazionale: disciplina, rispetto, coordinazione e divertimento, con cinture e gradi.<br><br><b>Orari</b>: martedì e giovedì 17.30-19.00.<br>Dai 14 anni si può entrare anche nei corsi degli adulti.<br>' + a('/corsi/kickboxing-ragazzi.html', 'Scheda del corso') + '<br>' + proveBtn(),
          ['Abbonamento famiglia', 'Cosa devo portare', 'Servono certificati?']);
      }
    },
    {
      id: 'donne', kw: ['donna', 'donne', 'femminile', 'ragazze', 'signora', 'signore', 'solo donne', 'mamma', 'mamme'],
      w: 3, run: function () {
        return reply('I corsi sono aperti a tutte e a tutti e ogni corso parte dal livello base. Ci sono spogliatoi separati uomo e donna. Kickboxing, pugilato, autodifesa PATH e fitness si possono provare gratis; il calisthenics è con Yvonne Rivellini e la Kickboxing Kids con Marika Pagliaroli.<br>' + a('/sport-combattimento-donne.html', 'Sport da combattimento per donne') + '<br>' + proveBtn(),
          ['Autodifesa', 'Calisthenics', 'Prenota la prova gratuita']);
      }
    },
    {
      id: 'dimagrire', kw: ['dimagrire', 'dimagrimento', 'perdere peso', 'perdere chili', 'peso', 'pancia', 'rimettermi in forma', 'rimettersi in forma', 'tornare in forma', 'tonificare', 'definizione', 'bruciare calorie'],
      w: 3, run: function () {
        return reply('Dipende da obiettivo, tempo a disposizione e punto di partenza: la cosa migliore è provare e farsi consigliare dagli istruttori. Con la sala pesi hai una scheda personalizzata gratuita, e kickboxing, functional training e calisthenics partono tutti dal livello base.<br>' + a('/palestra-dimagrire.html', 'Rimettersi in forma') + '<br>' + proveBtn(),
          ['Kickboxing', 'Functional', 'Prenota la prova gratuita']);
      }
    },
    {
      id: 'certificato', kw: ['certificato', 'certificati', 'visita medica', 'visite', 'medico', 'idoneita', 'tessera', 'documenti', 'asi', 'federkombat', 'cosa serve per iscriv', 'requisiti'],
      w: 3, run: function () {
        return reply('Per iscriverti servono: quota associativa e tessera ASI (base, per tutti gli iscritti), e un <b>certificato medico</b>. Non agonistico per allenarti, medico-sportivo agonistico per le gare. La tessera Federkombat serve solo per sparring e gare di kickboxing con il Team Last Round. Ti aiutiamo a capire cosa serve durante l\'iscrizione.<br>' + a('/abbonamenti.html', 'Cosa serve per iscriversi'),
          ['Prenota la prova gratuita', 'Abbonamenti e prezzi']);
      }
    },
    {
      id: 'portare', kw: ['portare', 'cosa porto', 'cosa devo portare', 'abbigliamento', 'attrezzatura', 'paradenti', 'asciugamano', 'lucchetto', 'scarpe', 'borraccia', 'comprare', 'cosa serve'],
      w: 3, run: function () {
        return reply('Alla prima lezione porta: abbigliamento sportivo, scarpe pulite adatte alla disciplina, un asciugamano personale (obbligatorio su attrezzi e tappetini), una borraccia e un lucchetto per l\'armadietto. Per kickboxing e pugilato <b>guantoni e protezioni li mettiamo noi</b> nelle prime lezioni.<br>' + a('/guide/prima-lezione-cosa-portare.html', 'Lista corso per corso'),
          ['Prenota la prova gratuita', 'Servono certificati?']);
      }
    },
    {
      id: 'servizi', kw: ['spogliatoio', 'spogliatoi', 'doccia', 'docce', 'armadietto', 'armadietti', 'servizi', 'bagno'],
      w: 3, run: function () {
        return reply('Sì: spogliatoi separati uomo e donna, con armadietti personali e docce. Porta lucchetto e asciugamano: gli armadietti vanno svuotati a fine giornata.', ['Cosa devo portare', 'Dove siamo', 'Prenota la prova gratuita']);
      }
    },
    {
      id: 'agonismo', kw: ['agonismo', 'agonista', 'agonistico', 'gare', 'gara', 'competizione', 'competere', 'campioni', 'campione', 'team last round', 'last round', 'sparring', 'combattere', 'match', 'incontri'],
      w: 3, run: function () {
        return reply('Il team agonistico è il <b>Team Last Round</b>, guidato dall\'head coach Lucio Pedana. Allenamenti agonisti di kickboxing il lunedì, mercoledì e venerdì 19.00-20.30. Dal team vengono campioni come Alessia Muroni (pluricampionessa mondiale WAKO PRO), Marika Pagliaroli e Giuseppe Rogandelli. Nel pugilato l\'agonismo è seguito dal tecnico FPI Andrea Durazzi. Lo sparring è comunque facoltativo.<br>' + a('/team-last-round.html', 'Team Last Round'),
          ['Kickboxing', 'Pugilato', 'Prenota la prova gratuita']);
      }
    },
    {
      id: 'istruttori', kw: ['istruttore', 'istruttori', 'istruttrice', 'insegnante', 'insegnanti', 'maestro', 'maestra', 'allenatore', 'allenatori', 'coach', 'trainer', 'staff tecnico', 'chi insegna', 'lucio', 'andrea', 'marika', 'yvonne', 'donatella', 'roberto', 'gildo', 'lorenzo'],
      w: 3, run: function () {
        return reply('Il team tecnico: Lucio Pedana (head coach kickboxing), Lorenzo Di Michele (kickboxing), Andrea Durazzi (pugilato, tecnico FPI), Maestro Roberto Boi (autodifesa PATH), Marika Pagliaroli (Kickboxing Kids), Donatella Vecchioni (functional e Active Senior), Yvonne Rivellini (calisthenics), Ermenegildo Pagliaroli (ginnastica posturale ATS).<br>' + a('/istruttori.html', 'Istruttori e staff'),
          ['Orari dei corsi', 'Prenota la prova gratuita']);
      }
    },
    {
      id: 'differenza', kw: ['differenza', 'differenze', 'meglio', 'scegliere', 'quale scelgo', 'quale corso', 'consigli', 'consiglio', 'consigliate'],
      w: 3, run: function () {
        return reply('<b>Pugilato</b>: solo pugni, con tanto lavoro su guardia, spostamenti e tecnica. <b>Kickboxing</b>: ai pugni si aggiungono i calci (e le ginocchiate nel K-1). Entrambe si iniziano da zero. Se non sai quale scegliere, prova: la prima lezione è gratuita e vale per tutti i corsi.<br>' + a('/guide/kickboxing-o-pugilato.html', 'Kickboxing o pugilato: come scegliere') + '<br>' + proveBtn(),
          ['Kickboxing', 'Pugilato', 'Orari dei corsi']);
      }
    },
    {
      id: 'corsi', kw: ['corsi', 'corso', 'discipline', 'disciplina', 'attivita', 'cosa fate', 'cosa offrite', 'cosa si fa', 'che sport', 'sport'],
      w: 2, run: function () {
        return reply('Le discipline sono: kickboxing, pugilato, autodifesa PATH, kickboxing kids (9-14 anni), functional training, calisthenics, ginnastica posturale, Active Senior (over 55) e sala pesi. Quale ti interessa?', CH.courses.concat(['Corsi per bambini']));
      }
    },
    {
      id: 'sala_pesi', kw: ['sala pesi', 'pesi', 'palestra pesi', 'bodybuilding', 'macchinari', 'scheda', 'personal trainer', 'personal', 'attrezzi', 'ghisa'],
      w: 3, run: function () {
        return reply('<b>Sala pesi</b>: è accessibile in tutti gli orari di apertura, anche quando sono in corso le lezioni. Con la sala pesi hai una scheda personalizzata gratuita; il personal trainer è disponibile su richiesta.<br>' + a('/corsi/sala-pesi.html', 'Scheda della sala pesi') + '<br>' + proveBtn(),
          ['Abbonamenti e prezzi', 'Orari di apertura']);
      }
    },
    {
      id: 'recensioni', kw: ['recensioni', 'recensione', 'opinioni', 'valutazioni', 'stelle', 'google', 'affidabile'],
      w: 2, run: function () {
        return reply('Su Google MedusA Gym ha <b>4,8 su 5</b> con oltre 100 recensioni. Puoi leggerle direttamente nella scheda Google della palestra.<br>' + a('/perche-medusa.html', 'Perché scegliere MedusA'),
          ['Prenota la prova gratuita', 'Dove siamo']);
      }
    }
  ];

  /* ---------- MOTORE ---------- */
  function answer(text, fromChip) {
    var n = norm(text);
    if (!n.trim()) return null;

    /* chip specifici */
    var chipMap = {
      'prenota la prova gratuita': 'prova', 'orari dei corsi': 'orari_corsi', 'abbonamenti e prezzi': 'abbonamenti',
      'dove siamo': 'dove', 'corsi per bambini': 'bambini', 'parla con lo staff': 'contatti', 'orari di apertura': 'orari_apertura',
      'abbonamento famiglia': 'family', 'cosa devo portare': 'portare', 'servono certificati': 'certificato'
    };
    var cm = chipMap[n.trim()];
    if (cm) return find(cm).run(n);
    if (n.trim() === 'altri corsi') return find('corsi').run(n);
    if (n.indexOf('cosa c e oggi') !== -1 || n.indexOf('cosa c e domani') !== -1) return find('oggi').run(n);

    /* corso citato? */
    var cKey = null, cScore = 0;
    Object.keys(COURSES).forEach(function (k) {
      COURSES[k].kw.forEach(function (w) {
        if (has(n, w) && w.length > cScore) { cKey = k; cScore = w.length; }
      });
    });
    var asksTime = hasAny(n, ['orari', 'orario', 'quando', 'che giorni', 'quali giorni', 'che ora', 'a che ora', 'turni', 'palinsesto']);
    var wantsKids = hasAny(n, ['kids', 'bambini', 'bambino', 'ragazzi', 'ragazzo', 'figlio', 'figlia']);
    if (cKey === 'kick' && wantsKids) return find('bambini').run(n);
    if (hasAny(n, COURSES.kick.kw) && hasAny(n, COURSES.pugi.kw)) return find('differenza').run(n);
    if (hasAny(n, ['differenza', 'differenze', 'meglio', 'vs'])) return find('differenza').run(n);
    if (hasAny(n, ['disdire', 'disdetta', 'recesso', 'rimborso', 'sospendere', 'sospensione', 'congelare', 'cancellare', 'annullare', 'disdico', 'sconto', 'sconti', 'promo', 'promozione', 'promozioni', 'offerta', 'offerte', 'saldi', 'convenzione', 'convenzioni', 'lavoro', 'lavorare', 'collaborare', 'fattura', 'fatturazione'])) return staffOnly();
    if (cKey && (asksTime || fromChip || cScore >= 4 || !hasAny(n, ['prezzo', 'costa', 'quanto']))) {
      if (cKey === 'kara') return reply('<b>Karate Byakuren</b><br>' + COURSES.kara.info + '<br><br><b>Orari</b><br>' + courseSched('kara'), ['Prenota la prova gratuita', 'Altri corsi']);
      return courseAnswer(cKey, true);
    }

    /* punteggio intenti */
    var best = null, bestScore = 0;
    INTENTS.forEach(function (it) {
      var s = 0;
      it.kw.forEach(function (k) { if (has(n, k)) s += it.w + (norm(k).trim().split(' ').length - 1); });
      if (s > bestScore) { best = it; bestScore = s; }
    });
    if (best && bestScore >= 1) return best.run(n);
    return null;
  }
  function find(id) { for (var i = 0; i < INTENTS.length; i++) { if (INTENTS[i].id === id) return INTENTS[i]; } }

  function staffOnly() {
    return reply('Su questo argomento non ho informazioni certe e preferisco non improvvisare: meglio sentire lo staff, che ti risponde entro 24 ore.<br>' + waBtn('Ciao MedusA Gym! Vorrei qualche informazione.', 'Scrivi allo staff su WhatsApp') + btn('tel:' + TEL, 'Chiama 06 747 7431', false), CH.main);
  }
  function fallback(text) {
    return reply('Non sono sicuro di aver capito, e preferisco non rispondere a caso. Per questa domanda è meglio sentire lo staff: ti rispondono entro 24 ore.<br>' + waBtn('Ciao MedusA Gym! ' + text.slice(0, 180), 'Scrivi allo staff su WhatsApp') + btn('tel:' + TEL, 'Chiama 06 747 7431', false), CH.main);
  }

  /* ---------- INTERFACCIA ---------- */
  var CSS = '' +
    '#mg-chat,#mg-chat *{box-sizing:border-box}' +
    '#mg-chat{--mg-g:#39FF14;--mg-bg:#0A0A0A;--mg-s1:#141414;--mg-s2:#1C1C1C;--mg-bd:rgba(255,255,255,.1);--mg-tx:#F2F2F2;--mg-mu:#9A9A9A;font-family:"Archivo",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--mg-tx);-webkit-font-smoothing:antialiased}' +
    '#mg-chat[hidden]{display:none!important}' +
    '#mg-launch{position:fixed;right:1.5rem;bottom:11rem;z-index:950;display:flex;align-items:center;gap:.6rem;height:54px;padding:0 1.15rem 0 1rem;border:1px solid rgba(57,255,20,.35);border-radius:999px;background:var(--mg-s1);color:var(--mg-tx);font:600 .9rem/1 "Archivo",system-ui,sans-serif;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.55),0 0 18px rgba(57,255,20,.18);transition:transform .2s,border-color .2s,background .2s;animation:mgFade .5s ease 3s both}@keyframes mgFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}' +
    '#mg-launch:hover{transform:translateY(-2px);border-color:var(--mg-g)}' +
    '#mg-launch:focus-visible,#mg-chat button:focus-visible,#mg-chat a:focus-visible,#mg-chat input:focus-visible{outline:2px solid var(--mg-g);outline-offset:2px}' +
    '#mg-launch svg{width:22px;height:22px;flex:none;color:var(--mg-g)}' +
    '#mg-chat.mg-solo #mg-launch{bottom:1.5rem}' +
    '#mg-panel{position:fixed;right:1.5rem;bottom:1.5rem;z-index:960;width:384px;max-width:calc(100vw - 2rem);height:min(640px,calc(100vh - 3rem));display:none;flex-direction:column;background:var(--mg-bg);border:1px solid var(--mg-bd);border-radius:28px;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,.7),0 0 0 1px rgba(57,255,20,.12)}' +
    '#mg-chat.mg-open #mg-panel{display:flex;animation:mgIn .25s ease-out}' +
    '#mg-chat.mg-open #mg-launch{display:none}' +
    '@keyframes mgIn{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:none}}' +
    '.mg-head{display:flex;align-items:center;gap:.75rem;padding:.95rem 1rem .95rem 1.2rem;background:var(--mg-s1);border-bottom:1px solid var(--mg-bd)}' +
    '.mg-dot{width:10px;height:10px;border-radius:50%;background:var(--mg-g);box-shadow:0 0 10px var(--mg-g);flex:none}' +
    '.mg-ttl{flex:1;min-width:0}.mg-ttl b{display:block;font:400 1.35rem/1 "Bebas Neue",Impact,sans-serif;letter-spacing:.06em}.mg-ttl span{display:block;margin-top:.2rem;font-size:.74rem;color:var(--mg-mu)}' +
    '.mg-x{width:38px;height:38px;border:0;border-radius:50%;background:var(--mg-s2);color:var(--mg-tx);font-size:1.3rem;line-height:1;cursor:pointer}.mg-x:hover{background:#2a2a2a}' +
    '.mg-msgs{flex:1;overflow-y:auto;padding:1rem 1rem .4rem;display:flex;flex-direction:column;gap:.65rem;scroll-behavior:smooth;overscroll-behavior:contain}' +
    '.mg-m{max-width:88%;padding:.7rem .9rem;border-radius:18px;font-size:.9rem;line-height:1.5;word-wrap:break-word;overflow-wrap:anywhere}' +
    '.mg-b{align-self:flex-start;background:var(--mg-s2);border-bottom-left-radius:6px}' +
    '.mg-u{align-self:flex-end;background:var(--mg-g);color:#000;font-weight:500;border-bottom-right-radius:6px}' +
    '.mg-m b{font-weight:700}.mg-b a:not(.mg-cta){color:var(--mg-g);text-decoration:underline;text-underline-offset:2px}' +
    '.mg-cta{display:block;margin-top:.55rem;padding:.65rem .9rem;border-radius:14px;background:var(--mg-g);color:#000!important;text-align:center;text-decoration:none!important;font-weight:700;font-size:.85rem}' +
    '.mg-cta:hover{background:#fff}.mg-cta.mg-wa{background:#25D366;color:#fff!important}.mg-cta.mg-wa:hover{background:#1eb855}' +
    '.mg-typing{display:flex;gap:4px;padding:.85rem .95rem}.mg-typing i{width:7px;height:7px;border-radius:50%;background:var(--mg-mu);animation:mgB 1s infinite}.mg-typing i:nth-child(2){animation-delay:.15s}.mg-typing i:nth-child(3){animation-delay:.3s}' +
    '@keyframes mgB{0%,60%,100%{opacity:.3;transform:none}30%{opacity:1;transform:translateY(-3px)}}' +
    '.mg-chips{display:flex;flex-wrap:wrap;gap:.4rem;padding:.4rem 1rem .7rem}' +
    '.mg-chip{border:1px solid rgba(57,255,20,.4);background:transparent;color:var(--mg-tx);border-radius:999px;padding:.45rem .8rem;font:500 .78rem/1.1 "Archivo",system-ui,sans-serif;cursor:pointer;transition:background .15s,color .15s}' +
    '.mg-chip:hover{background:var(--mg-g);color:#000}' +
    '.mg-form{display:flex;gap:.5rem;padding:.7rem .8rem;border-top:1px solid var(--mg-bd);background:var(--mg-s1)}' +
    '.mg-in{flex:1;min-width:0;height:44px;border:1px solid var(--mg-bd);border-radius:999px;background:var(--mg-bg);color:var(--mg-tx);padding:0 1rem;font:400 16px/1 "Archivo",system-ui,sans-serif}' +
    '.mg-in::placeholder{color:var(--mg-mu)}' +
    '.mg-send{width:44px;height:44px;border:0;border-radius:50%;background:var(--mg-g);color:#000;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:none}.mg-send svg{width:20px;height:20px}' +
    '.mg-note{padding:0 1rem .8rem;background:var(--mg-s1);font-size:.68rem;line-height:1.4;color:var(--mg-mu)}.mg-note a{color:var(--mg-mu);text-decoration:underline}' +
    '@media(max-width:900px){#mg-launch{right:1rem;bottom:calc(5.6rem + env(safe-area-inset-bottom))}#mg-chat.mg-solo #mg-launch{bottom:calc(1rem + env(safe-area-inset-bottom))}' +
    '#mg-panel{inset:0;right:0;bottom:0;width:100%;max-width:100%;height:100%;border-radius:0;border:0}.mg-m{font-size:.95rem}}' +
    '@media(prefers-reduced-motion:reduce){#mg-chat *{animation:none!important;transition:none!important;scroll-behavior:auto!important}}' +
    '@media print{#mg-chat{display:none!important}}';

  var ICON_CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>';
  var ICON_SEND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  var root, panel, msgs, chipsBox, input, launch, started = false;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function build() {
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    root = document.createElement('div');
    root.id = 'mg-chat';
    if (!document.querySelector('.sticky-cta')) root.className = 'mg-solo';
    root.innerHTML =
      '<button type="button" id="mg-launch" aria-haspopup="dialog" aria-expanded="false" aria-controls="mg-panel">' + ICON_CHAT + '<span>Hai domande?</span></button>' +
      '<div id="mg-panel" role="dialog" aria-label="Assistente MedusA Gym" aria-modal="false">' +
      '<div class="mg-head"><span class="mg-dot" aria-hidden="true"></span><div class="mg-ttl"><b>MedusA Gym</b><span>Assistente automatico</span></div><button type="button" class="mg-x" aria-label="Chiudi la chat">&times;</button></div>' +
      '<div class="mg-msgs" role="log" aria-live="polite"></div>' +
      '<div class="mg-chips"></div>' +
      '<form class="mg-form" autocomplete="off"><input class="mg-in" type="text" maxlength="200" placeholder="Scrivi qui la tua domanda" aria-label="Scrivi la tua domanda"><button class="mg-send" type="submit" aria-label="Invia">' + ICON_SEND + '</button></form>' +
      '<div class="mg-note">Risposte automatiche basate sulle informazioni del sito. Per conferme scrivici su ' + a('https://wa.me/' + WA, 'WhatsApp', true) + '. Questa chat non salva i tuoi dati.</div>' +
      '</div>';
    document.body.appendChild(root);

    panel = root.querySelector('#mg-panel');
    msgs = root.querySelector('.mg-msgs');
    chipsBox = root.querySelector('.mg-chips');
    input = root.querySelector('.mg-in');
    launch = root.querySelector('#mg-launch');

    launch.addEventListener('click', open);
    root.querySelector('.mg-x').addEventListener('click', close);
    root.querySelector('.mg-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var v = input.value.trim();
      if (!v) return;
      input.value = '';
      ask(v, false);
    });
    chipsBox.addEventListener('click', function (e) {
      var b = e.target.closest('.mg-chip');
      if (b) ask(b.textContent, true);
    });
    msgs.addEventListener('click', function (e) {
      var l = e.target.closest('a[href]');
      if (!l) return;
      var h = l.getAttribute('href');
      if (h.indexOf('/#') === 0 && location.pathname.replace(/index\.html$/, '') === '/') close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('mg-open')) { close(); launch.focus(); }
    });

    /* nasconde il bot se il sito è in inglese (il bot parla solo italiano) */
    function syncLang() { root.hidden = (document.documentElement.lang || 'it').toLowerCase().indexOf('en') === 0; }
    syncLang();
    new MutationObserver(syncLang).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  function open() {
    root.classList.add('mg-open');
    launch.setAttribute('aria-expanded', 'true');
    if (!started) {
      started = true;
      botSay(reply('Ciao! Sono l\'assistente automatico di MedusA Gym. Ti aiuto con prova gratuita, orari, corsi, abbonamenti e come arrivare. Cosa ti serve?'), true);
    }
    setTimeout(function () { input.focus(); }, 60);
  }
  function close() {
    root.classList.remove('mg-open');
    launch.setAttribute('aria-expanded', 'false');
  }
  function scroll() { msgs.scrollTop = msgs.scrollHeight; }
  function addMsg(cls, html) {
    var d = document.createElement('div');
    d.className = 'mg-m ' + cls;
    d.innerHTML = html;
    msgs.appendChild(d);
    scroll();
    return d;
  }
  function setChips(list) {
    chipsBox.innerHTML = '';
    (list || []).forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'mg-chip'; b.textContent = c;
      chipsBox.appendChild(b);
    });
  }
  function botSay(r, instant) {
    setChips([]);
    if (instant || reduce) { addMsg('mg-b', r.html); setChips(r.chips); return; }
    var t = addMsg('mg-b mg-typing', '<i></i><i></i><i></i>');
    setTimeout(function () {
      t.className = 'mg-m mg-b';
      t.innerHTML = r.html;
      setChips(r.chips);
      scroll();
    }, 380);
  }
  function ask(text, fromChip) {
    addMsg('mg-u', esc(text));
    var r = answer(text, fromChip) || fallback(text);
    botSay(r, false);
  }


  /* ---------- WebMCP: strumenti di sola lettura per agenti AI nel browser ----------
     Usa gli stessi dati del bot. Nessuno strumento invia moduli o prenota al posto dell'utente. */
  function webmcpRegister() {
    var mc = (navigator && navigator.modelContext) || (document && document.modelContext);
    if (!mc || typeof mc.registerTool !== 'function' || window.__mgWebMcp) return;
    window.__mgWebMcp = true;
    function txt(t) { return { content: [{ type: 'text', text: t }] }; }
    function plain(h) { return String(h).replace(/<br>/g, '\n').replace(/<[^>]+>/g, ''); }
    var tools = [
      {
        name: 'get_opening_hours',
        description: 'Orari di apertura di MedusA Gym (Roma, Cinecittà) e se la palestra è aperta in questo momento.',
        inputSchema: { type: 'object', properties: {} },
        execute: function () {
          return txt('Lunedì-venerdì 08:00-22:00, sabato 09:00-17:00, domenica chiuso. La sala pesi è accessibile in tutti gli orari di apertura. ' + openStatus());
        }
      },
      {
        name: 'get_course_schedule',
        description: 'Orari settimanali dei corsi di MedusA Gym. Senza parametri restituisce tutti i corsi; con "course" filtra per disciplina; con "day" filtra per giorno (Lun, Mar, Mer, Gio, Ven, Sab).',
        inputSchema: {
          type: 'object',
          properties: {
            course: { type: 'string', description: 'kickboxing, pugilato, autodifesa, calisthenics, functional, active senior, posturale, karate' },
            day: { type: 'string', enum: DAYS, description: 'Giorno della settimana' }
          }
        },
        execute: function (args) {
          args = args || {};
          var keys = Object.keys(SCHED), q = args.course ? norm(args.course) : '';
          if (q) {
            keys = keys.filter(function (k) {
              return COURSES[k].kw.some(function (w) { return has(q, w); }) || has(q, COURSES[k].label);
            });
          }
          if (!keys.length) return txt('Corso non trovato. Corsi disponibili: ' + Object.keys(COURSES).map(function (k) { return COURSES[k].label; }).join(', ') + '.');
          var out = keys.map(function (k) {
            var days = args.day ? [args.day] : DAYS, rows = [];
            days.forEach(function (d) {
              var sl = (SCHED[k][d] || []);
              if (sl.length) rows.push(d + ' ' + sl.join(', '));
            });
            return COURSES[k].label + ': ' + (rows.length ? rows.join(' | ') : 'nessuna lezione') + ' (' + BASEURL + COURSES[k].url.replace(/^\//, '') + ')';
          });
          return txt(out.join('\n'));
        }
      },
      {
        name: 'get_membership_info',
        description: 'Formule di abbonamento di MedusA Gym (ONE, OPEN, FAMILY), cosa serve per iscriversi e come si paga.',
        inputSchema: { type: 'object', properties: {} },
        execute: function () {
          return txt('ONE: una disciplina a scelta, in tutti i suoi orari. OPEN: tutte le discipline e la sala pesi. FAMILY: prezzo unico per 2, 3 o 4 persone dello stesso nucleo familiare. La ginnastica posturale è a parte. I prezzi si comunicano in segreteria dopo la prova gratuita; pagamento anche a rate (AlmaPay). Per iscriversi servono quota associativa e tessera ASI e un certificato medico. Dettagli: ' + BASEURL + 'abbonamenti.html');
        }
      },
      {
        name: 'get_location_and_contacts',
        description: 'Indirizzo, come arrivare, telefono, WhatsApp ed email di MedusA Gym.',
        inputSchema: { type: 'object', properties: {} },
        execute: function () {
          return txt('MedusA Gym - Fight n\' Fitness, Via Quinto Sertorio 24, 00174 Roma (Cinecittà). Metro A Giulio Agricola a circa 5 minuti a piedi, Subaugusta circa 6, centro commerciale Cinecittà Due circa 12. Telefono 06 747 7431, WhatsApp +39 392 070 8111, email medusagym2023@gmail.com. Indicazioni: ' + BASEURL + 'come-arrivare.html');
        }
      },
      {
        name: 'get_trial_lesson_booking_options',
        description: 'Come prenotare la lezione di prova gratuita (gratuita, senza impegno, valida per tutti i corsi). Restituisce i link; la prenotazione la conferma l\'utente.',
        inputSchema: { type: 'object', properties: {} },
        execute: function () {
          return txt('La prima lezione è gratuita e senza impegno e va prenotata; lo staff risponde entro 24 ore. Modulo: ' + BASEURL + '#prova - WhatsApp: ' + waLink('Ciao MedusA Gym! Vorrei prenotare una prova gratuita.') + ' - Telefono: 06 747 7431.');
        }
      }
    ];
    tools.forEach(function (t) {
      try { var r = mc.registerTool(t); if (r && r.catch) r.catch(function () {}); } catch (e) { /* API sperimentale */ }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
  webmcpRegister();
})();
