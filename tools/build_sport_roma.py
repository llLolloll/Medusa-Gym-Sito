#!/usr/bin/env python3
"""Genera sport-da-combattimento-roma.html con lo stesso generatore delle pagine pilastro (solo questa pagina)."""
import build_pillars as bp

bp.RELATED['sport-da-combattimento-roma.html'] = [
    ('corsi/kickboxing.html', 'Kickboxing'), ('corsi/pugilato.html', 'Pugilato'),
    ('team-last-round.html', 'Team Last Round'), ('guide/kickboxing-o-pugilato.html', 'Kickboxing o pugilato?')]

P = dict(
    title='Sport da Combattimento a Roma | Kickboxing, Pugilato, Autodifesa | MedusA Gym',
    desc='Sport da combattimento a Roma Cinecittà: kickboxing, pugilato, autodifesa PATH e Kickboxing Kids. 3 ring, tecnici federali, campioni WAKO PRO. Prima lezione gratuita.',
    og='Sport da combattimento a Roma | MedusA Gym', ogdesc='Kickboxing, pugilato e autodifesa a Roma Cinecittà, con 3 ring e istruttori federali. Prima lezione gratuita.',
    service='Corsi di sport da combattimento a Roma', crumb='Sport da combattimento a Roma',
    img='images/corsi/kick-sparring.webp', alt='Due allievi di kickboxing si allenano con casco e guantoni sul ring di MedusA Gym',
    stack=(('images/corsi/pugilato-1.webp', 'Allievo di pugilato con i guantoni alzati in guardia', 'Pugilato', '50% 40%'),
           ('images/corsi/kick-sparring.webp', 'Due allievi di kickboxing si allenano con casco e guantoni sul ring di MedusA Gym', 'Kickboxing', '50% 40%')),
    eyebrow='Roma Cinecitt&agrave;',
    h1='Sport da combattimento <span class="o">a Roma</span>', h1s='Kickboxing, pugilato e autodifesa, dal primo giorno',
    lead='Cerchi uno sport da combattimento a Roma e non sai da quale cominciare? A MedusA Gym, in Via Quinto Sertorio 24 a Cinecitt&agrave;, trovi kickboxing, pugilato, autodifesa PATH e un corso per ragazzi. Ci sono 3 ring, istruttori federali e un team agonistico con campioni WAKO PRO. Si parte dal livello base e la prima lezione &egrave; gratuita.',
    facts=['<b>3 ring</b> in 550 mq', 'Tecnici federali FPI', 'Kickboxing e pugilato', 'Prova gratuita'],
    tag='Si impara<br>sul ring', anchor='quale', anchor_label='Quale scegliere',
    wa='Ciao MedusA Gym! Vorrei provare uno sport da combattimento, mi aiutate a scegliere?',
    sections=[
        bp.section('quale', 'Quale scegliere', 'Quattro strade, scegli la tua',
                   'Ogni corso parte dal livello base. Non serve esperienza, serve la voglia di cominciare.',
                   bp.guides([('corsi/kickboxing.html', 'Kickboxing', 'Pugni e calci', 'Pi&ugrave; completo, con spazio per colpi di gamba. Lezioni al mattino, in pausa pranzo e la sera. Sparring facoltativo.'),
                              ('corsi/pugilato.html', 'Pugilato', 'Solo pugni, tecnica e fiato', 'Con un tecnico FPI. Per chi preferisce una disciplina pi&ugrave; essenziale e un lavoro preciso sulle braccia e sul movimento.'),
                              ('corsi/autodifesa-path.html', 'Autodifesa PATH', 'Sapersi difendere', 'Per imparare a gestire una situazione di pericolo, senza dover combattere.'),
                              ('corsi/kickboxing-ragazzi.html', 'Kickboxing Kids 9-14', 'Per i pi&ugrave; giovani', 'Senza contatto, con Marika Pagliaroli: disciplina, rispetto e coordinazione.')]) +
                   '<p class="note rv">Indeciso tra i primi due? Leggi <a href="guide/kickboxing-o-pugilato.html">kickboxing o pugilato: come scegliere</a>.</p>'),
        bp.section('come-si-inizia', 'Come si inizia', 'Dalla prima lezione, senza pressione',
                   None,
                   bp.steps([('Prima lezione gratuita', 'La prenoti su WhatsApp o dal modulo, cos&igrave; ti aspettiamo con l&rsquo;istruttore giusto.'),
                             ('Base tecnica', 'Posizione, guardia, colpi e spostamenti, con gruppi che si adattano al livello.'),
                             ('Sparring, se vuoi', 'Per chi comincia &egrave; facoltativo: ci arrivi quando sei pronto.'),
                             ('Gara, se ti viene voglia', 'Chi vuole gareggiare pu&ograve; entrare nel <a href="team-last-round.html">Team Last Round</a>, su valutazione del Maestro.')])),
        bp.section('dietro', 'Cosa c&rsquo;&egrave; dietro', 'I fatti, uno per uno',
                   'Quello che trovi davvero in palestra, senza giri di parole.',
                   bp.chk([('3 ring.', 'Dentro 550 mq, con sala sacchi, sala pesi e sala corsi: molte palestre ne hanno uno solo o nessuno.'),
                           ('Campioni in casa.', 'Alessia Muroni, Marika Pagliaroli e Giuseppe Rogandelli si allenano qui, insieme a un gruppo agonisti molto ampio che fa gare.'),
                           ('Istruttori federali.', 'Lucio Pedana, Maestro di kickboxing e dirigente FEDERKOMBAT, e <a href="andrea-durazzi.html">Andrea Durazzi</a>, Aspirante Tecnico FPI per il pugilato. <a href="istruttori.html">Tutti gli istruttori</a>.'),
                           ('Un team agonistico.', 'Il <a href="team-last-round.html">Team Last Round</a> ha formato negli anni numerosi atleti di altissimo livello.'),
                           ('Anche se non combatti.', 'Puoi allenarti per forma e sfogo, senza fare gare: nessun obbligo.')])),
    ],
    faq=[('Quale sport da combattimento posso fare a Roma a MedusA Gym?', 'Kickboxing, pugilato, autodifesa PATH e Kickboxing Kids per ragazzi dai 9 ai 14 anni, in Via Quinto Sertorio 24 a Roma Cinecitt&agrave;.'),
         ('Serve esperienza per iniziare?', 'No. Ogni corso parte dal livello base e l&rsquo;istruttore adatta la lezione a chi ha davanti.'),
         ('Meglio kickboxing o pugilato per cominciare?', 'La kickboxing usa pugni e calci, il pugilato solo i pugni, con un lavoro pi&ugrave; preciso su guardia e movimento. Se non sai scegliere, provi gratis una lezione e decidi dopo.'),
         ('Devo fare per forza lo sparring?', 'No. Lo sparring &egrave; facoltativo per chi comincia ed &egrave; obbligatorio solo per chi entra nel team agonistico.'),
         ('Quanti ring ci sono?', 'MedusA Gym ha 3 ring, dentro 550 mq con sala sacchi, sala pesi e sala corsi.'),
         ('Come provo una lezione?', 'La prima lezione &egrave; gratuita e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.')],
)
print('ok', bp.build('sport-da-combattimento-roma.html', P))
