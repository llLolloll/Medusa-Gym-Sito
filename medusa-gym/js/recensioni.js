/* Medusa Gym - recensioni filtrabili "persone come me" nella home (#reviews).
   Le recensioni sono quelle vere di Google già pubblicate nelle pagine del sito, con etichette messe a mano
   SOLO in base a quello che dice il testo. Per aggiungerne una: copiarla da Google e aggiungerla all'elenco R.
   Con "Tutte" resta il nastro che scorre; con un filtro compare la griglia delle recensioni giuste. */
(function () {
  'use strict';
  var mount = document.querySelector('[data-mg-rev]'), wrap = document.querySelector('#reviews .marq-wrap');
  if (!mount || !wrap) return;
  var F = [
    ['zero', 'Parto da zero'], ['fight', 'Kickboxing e pugilato'], ['fitness', 'Functional e calisthenics'],
    ['forma', 'Voglio rimettermi in forma'], ['genitori', 'Per mio figlio'], ['casa', 'Cerco un bel gruppo']
  ];
  var R = [
    ['MINE', 5, 'Non avevo mai fatto sport in vita mia e avevo paura di entrare in una palestra di combattimento. La prima sera Lucio mi ha messo con chi iniziava come me, guardia e primi colpi, nessuno mi ha buttato sul ring. Dopo tre mesi vengo tre volte a settimana e mi manca quando salto', 'zero fight'],
    ['Antonella Murro', 5, 'Ero convinta che la kickboxing fosse roba da uomini e da gente già allenata. Qui ci sono tante ragazze, anche campionesse, e il primo giorno mi sono sentita accolta, non osservata. Lo sparring è facoltativo: ci sono salita solo quando me la sono sentita.', 'zero fight casa'],
    ['Giulia Di Clemente', 5, 'Ho iniziato il functional a febbraio per rimettermi in forma dopo la gravidanza. Due volte a settimana con Donatella, e i jeans di prima sono tornati a starmi. Ma la cosa più bella è che ci vado volentieri.', 'fitness forma'],
    ['Alessandro Di Clemente', 5, 'Mio figlio di 11 anni era timido e passava i pomeriggi sul telefono. Con Marika ha imparato disciplina e rispetto, si allenano senza contatto e sempre con le protezioni. Adesso il martedì e il giovedì è lui che mi dice di sbrigarmi.', 'genitori'],
    ['mela lao', 5, 'Era da tempo che volevo provare il pugilato ma non mi ero mai deciso. Se avessi conosciuto prima questa palestra, probabilmente avrei iniziato anni fa: mi sto trovando davvero benissimo!', 'zero fight'],
    ['elis galeno', 5, 'Mi sono affidata alla mia prima impressione su Donatella, istruttrice di Ginnastica funzionale e lo rifarei ... Ci vado sempre volentieri, senza sbuffare... e premetto che ho iniziato proprio per ritornare a stare bene con me stessa e con la bilancia.', 'zero fitness forma'],
    ['Carlo Di Donna', 5, 'Da quasi 1 anno frequento il corso di kickboxing. Orari molto vari (ora di pranzo, pomeriggio e sera) che ti permettono di non saltare una lezione. Maestri molto preparati che ti seguono passo dopo passo e fin dall\'inizio si ricordano il tuo nome.', 'fight casa'],
    ['Patrizia Vitagliano', 5, 'Da settembre mi sono iscritta in questa palestra per il corso di funzionale. Le lezioni sono effettuate da professionisti veri, con la capacità di attenzionare ogni singolo nel gruppo. Con il corso di funzionale, che c\'è sia all\'ora di pranzo che la sera, io frequentando 2 volte a settimana ho perso già 4 kg e mi sento più asciutta e bella.', 'fitness forma'],
    ['Marta Abbruzzese', 5, 'Seguo il corso di funzionale con Donatella che oltre ad essere una grandissima professionista è anche una bellissima persona che ti motiva e ti aiuta in tutto quello che facciamo a lezione. Ho notato dei grandissimi progressi e miglioramenti nel mio fisico.', 'fitness forma'],
    ['Antonella La Padula', 5, 'Mi sono innamorata del Calisthenics (menzione d\'onore alla straordinaria istruttrice Yvonne!) ... Allenarsi qui è davvero un piacere: tra coach davvero competenti e disponibili, un team supportivo e uno staff che ti fa sentire a casa, la fatica viene largamente ripagata!', 'fitness casa'],
    ['Antonella La Padula', 5, 'Quando mi sono trasferita a Roma un anno fa, cercavo una palestra in zona dove poter continuare a praticare pugilato e mi sono imbattuta nella Medusa Gym, dove ho avuto la possibilità di provare anche altre discipline.', 'fight'],
    ['Luca Pirino', 5, 'Frequento kickboxing nella palestra Medusa Gym da anni e mi sono sempre trovato davvero bene. È una palestra dove ti senti subito a casa, con persone simpatiche, un ambiente familiare e uno staff preparato e sempre disponibile.', 'fight casa'],
    ['Samantha Taschetti', 5, 'Ambiente super familiare, istruttori preparatissimi e una squadra di atleti davvero forti che riescono sempre a farti sentire parte del gruppo. Ci si allena sul serio, ma sempre con il sorriso. La consiglierei davvero a tutti, dai grandi ai più piccoli.', 'casa'],
    ['Lucia Buono', 5, 'Bellissimo ambiente, ottimi istruttori, Donatella magica! Nonostante l\'ambiente amicale si lavora tanto, come deve essere ovviamente.', 'fitness casa'],
    ['Marta Abbruzzese', 5, 'Ho conosciuto la Medusa Gym tramite mia sorella due anni fa, mi sono trovata benissimo sin da subito. Un posto accogliente che ti fa sentire a casa.', 'casa'],
    ['Tiziano Cosentino', 5, '5 stelle e un ringraziamento per il loro impegno e accoglienza. Ho trovato la dimensione adatta alle mie esigenze, un gruppo attivo e in continuo aggiornamento, maestri di livello e ambiente familiare.', 'casa'],
    ['Gianmarco Galati', 5, 'Professionalità e amore per lo sport. Una famiglia.', 'casa'],
    ['Alessia Trapani', 5, 'Frequento questa palestra da due mesi e non potrei essere più felice della scelta! Il corso di funzionale è diventato il mio appuntamento fisso della settimana, merito soprattutto dell\'insegnante, Donatella: sempre carica di energia, attenta alle esigenze di ognuno e capace di spronarci senza mai farci sentire fuori posto. Torno a casa stanca ma felice!', 'fitness casa'],
    ['Silvia Polidori', 5, 'Bella palestra, ambiente accogliente e familiare, ti fanno sentire a casa! Io ho provato la lezione di funzionale e mi è piaciuta molto.', 'fitness casa'],
    ['Massimo Conte', 5, 'Frequento questa palestra da qualche mese ed ho trovato un ambiente familiare e dei maestri davvero preparati che ti seguono e correggono anche se siamo tanti durante il corso. Consiglio vivamente questa palestra!', 'casa'],
    ['Davide Andreozzi', 5, 'Una palestra specializzata sulla boxe e la kickboxing, ma ha anche la sala pesi e altre lezioni. Gli istruttori sono tutti persone valide e professionali. Ci sono sia ragazzi che ragazze che combattono a livello professionale e anche campioni d\'Italia.', 'fight'],
    ['Enrica Zazzera', 5, 'Il personale è preparatissimo e ama il proprio mestiere tanto da trasmettere la positività: un luogo piacevole dove potersi allenare e allo stesso tempo staccare dalla routine. Anche le persone che la frequentano sono tranquille e dopo poco ti senti a casa tua.', 'casa']
  ];
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var ini = function (n) { return n.split(/\s+/).map(function (p) { return p.charAt(0).toUpperCase(); }).slice(0, 2).join(''); };
  function card(r) {
    var st = ''; for (var i = 0; i < 5; i++) st += '<span class="rstar" aria-hidden="true"' + (i >= r[1] ? ' style="opacity:.25"' : '') + '>&#9733;</span>';
    return '<figure class="rcard spot"><div class="rstars" role="img" aria-label="' + r[1] + ' stelle su 5">' + st + '</div><blockquote class="rtext">' + esc(r[2]) +
      '</blockquote><figcaption class="rauthor"><div class="ravatar" aria-hidden="true">' + ini(r[0]) + '</div><div><div class="rname">' + esc(r[0]) +
      '</div><div class="rgoogle"><span class="rgdot"></span><span class="rgtxt">Recensione Google</span></div></div></figcaption></figure>';
  }
  var css = '.rvf{display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem;margin:.6rem auto 0;max-width:900px}' +
    '.rvf-l{margin:1.6rem 0 0;text-align:center;font:700 .66rem var(--fb,"Archivo",sans-serif);letter-spacing:.16em;text-transform:uppercase;color:var(--mut,#9a9a9a);margin-bottom:.2rem}' +
    '.rvf button{min-height:44px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.04);color:var(--txt,#f2f2f2);font:600 .9rem var(--fb,"Archivo",sans-serif);padding:.55rem 1rem;border-radius:999px;cursor:pointer;transition:background .2s,color .2s,border-color .2s}' +
    '.rvf button:hover{border-color:rgba(57,255,20,.5)}.rvf button[aria-pressed="true"]{background:var(--g,#39FF14);color:#041004;border-color:var(--g,#39FF14);box-shadow:0 0 18px rgba(57,255,20,.4)}' +
    '.rvf button small{opacity:.65;margin-left:.3rem;font-weight:700}.rvf button:focus-visible{outline:2px solid var(--g,#39FF14);outline-offset:3px}' +
    '.rvf-s{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}' +
    '@media(max-width:700px){.rvf{flex-wrap:nowrap;justify-content:flex-start;overflow-x:auto;scrollbar-width:none;margin-left:-1.5rem;margin-right:-1.5rem;padding:0 1.5rem 4px}.rvf::-webkit-scrollbar{display:none}.rvf button{flex:0 0 auto}}' +
    '.rvg{display:none;max-width:1180px;margin:0 auto;padding:0 1.5rem;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}.rvg.on{display:grid}' +
    '.rvg .rcard{width:auto!important;min-width:0;margin:0!important;animation:rvIn .35s ease both}@keyframes rvIn{from{opacity:0;transform:translateY(10px)}}' +
    '.rvg-n{grid-column:1/-1;text-align:center;color:var(--mut,#9a9a9a);font-size:.88rem;margin-top:.4rem}.rvg-n a{color:var(--g,#39FF14)}' +
    '@media(prefers-reduced-motion:reduce){.rvg .rcard{animation:none}}';
  var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
  var n = {}; F.forEach(function (f) { n[f[0]] = R.filter(function (r) { return (' ' + r[3] + ' ').indexOf(' ' + f[0] + ' ') > -1; }).length; });
  mount.innerHTML = '<p class="rvf-l" id="rvf-l">Filtra per quello che cerchi</p><div class="rvf" role="group" aria-labelledby="rvf-l">' +
    '<button type="button" aria-pressed="true" data-f="">Tutte</button>' +
    F.map(function (f) { return '<button type="button" aria-pressed="false" data-f="' + f[0] + '" aria-label="' + f[1] + ', ' + n[f[0]] + ' recension' + (n[f[0]] === 1 ? 'e' : 'i') + '">' + f[1] + '<small aria-hidden="true">' + n[f[0]] + '</small></button>'; }).join('') + '</div>';
  var grid = document.createElement('div'); grid.className = 'rvg';
  var stat = document.createElement('p'); stat.className = 'rvf-s'; stat.setAttribute('role', 'status');
  mount.appendChild(stat);
  wrap.parentNode.insertBefore(grid, wrap.nextSibling);
  mount.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-f]'); if (!b) return;
    var f = b.dataset.f;
    [].slice.call(mount.querySelectorAll('button')).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    if (!f) { grid.classList.remove('on'); grid.innerHTML = ''; wrap.style.display = ''; stat.textContent = ''; return; }
    var L = R.filter(function (r) { return (' ' + r[3] + ' ').indexOf(' ' + f + ' ') > -1; });
    grid.innerHTML = L.map(card).join('') + '<p class="rvg-n">Recensioni vere da Google. <a href="https://maps.app.goo.gl/vgp136BAqStgtGny5" target="_blank" rel="noopener">Leggile tutte su Google</a></p>';
    grid.classList.add('on'); wrap.style.display = 'none';
    stat.textContent = L.length + (L.length === 1 ? ' recensione' : ' recensioni');
    try { if (window.mgTrack) window.mgTrack('recensioni_filtro', { filtro: f }); } catch (x) {}
  });
})();
