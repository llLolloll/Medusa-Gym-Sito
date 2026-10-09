#!/usr/bin/env python3
"""Genera sport-da-combattimento-roma.html con lo stesso generatore delle pagine pilastro (solo questa pagina)."""
import build_pillars as bp

bp.RELATED['sport-da-combattimento-roma.html'] = [
    ('corsi/kickboxing.html', 'Kickboxing'), ('corsi/pugilato.html', 'Pugilato'),
    ('team-last-round.html', 'Team Last Round'), ('guide/kickboxing-o-pugilato.html', 'Kickboxing o pugilato?')]


RINGS = (
 '<section class="blk" id="ring"><div class="wrap"><div class="rv"><p class="eyebrow">I 3 ring</p><h2>Tre ring, tre superfici</h2>'
 '<p class="sub">Uno con il telo bianco, uno con il tappeto nero e uno rialzato con il tappeto verde. Dentro 550 mq, accanto a sala sacchi e sala pesi.</p></div>'
 '<style>.rings{display:grid;grid-template-columns:repeat(2,1fr);gap:.8rem;margin-top:1.6rem}.rings figure{margin:0;border-radius:var(--r-xl);overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#0c0c0c}.rings img{width:100%;height:100%;aspect-ratio:3/4;object-fit:cover;display:block}.rings .wide{grid-column:1/-1}.rings .wide img{aspect-ratio:3/4}@media(max-width:899px){.rings figure:last-child{display:none}}@media(min-width:900px){.rings{grid-template-columns:repeat(4,1fr)}.rings .wide{grid-column:auto}}</style>'
 '<div class="rings rv">'
 '<figure class="wide"><img src="images/ring-tre-ring.webp" srcset="images/ring-tre-ring-s.webp 640w, images/ring-tre-ring.webp 1080w" sizes="(max-width:900px) 100vw, 25vw" alt="Vista di tre ring in fila alla MedusA Gym: in primo piano quello con tappeto nero, dietro quello con telo bianco e in fondo quello con tappeto verde" loading="lazy" width="1080" height="1440"></figure>'
 '<figure><img src="images/ring-verde.webp" srcset="images/ring-verde-s.webp 640w, images/ring-verde.webp 1080w" sizes="(max-width:900px) 50vw, 25vw" alt="Ring rialzato con tappeto verde e corde gialle, visto dall&rsquo;alto, con le cinture dei campioni appese alla parete" loading="lazy" width="1080" height="1440"></figure>'
 '<figure><img src="images/ring-bianco-angolo.webp" srcset="images/ring-bianco-angolo-s.webp 640w, images/ring-bianco-angolo.webp 1080w" sizes="(max-width:900px) 50vw, 25vw" alt="Angolo di un ring con telo bianco e corde nere, con paracolpi rosso e blu" loading="lazy" width="1080" height="1440"></figure>'
 '<figure><img src="images/ring-bianco-last-round.webp" srcset="images/ring-bianco-last-round-s.webp 640w, images/ring-bianco-last-round.webp 1080w" sizes="(max-width:900px) 50vw, 25vw" alt="Ring con telo bianco davanti al cartello Last Round, con il ring verde sulla destra" loading="lazy" width="1080" height="1440"></figure>'
 '</div></div></section>')

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
        RINGS,
    ],
    faq=[('Quale sport da combattimento posso fare a Roma a MedusA Gym?', 'Kickboxing, pugilato, autodifesa PATH e Kickboxing Kids per ragazzi dai 9 ai 14 anni, in Via Quinto Sertorio 24 a Roma Cinecitt&agrave;.'),
         ('Serve esperienza per iniziare?', 'No. Ogni corso parte dal livello base e l&rsquo;istruttore adatta la lezione a chi ha davanti.'),
         ('Meglio kickboxing o pugilato per cominciare?', 'La kickboxing usa pugni e calci, il pugilato solo i pugni, con un lavoro pi&ugrave; preciso su guardia e movimento. Se non sai scegliere, provi gratis una lezione e decidi dopo.'),
         ('Devo fare per forza lo sparring?', 'No. Lo sparring &egrave; facoltativo per chi comincia ed &egrave; obbligatorio solo per chi entra nel team agonistico.'),
         ('Quanti ring ci sono?', 'MedusA Gym ha 3 ring, dentro 550 mq con sala sacchi, sala pesi e sala corsi.'),
         ('Come provo una lezione?', 'La prima lezione &egrave; gratuita e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.')],
)
print('ok', bp.build('sport-da-combattimento-roma.html', P))
