#!/usr/bin/env python3
"""Genera tre guide nuove (novembre 2026) con lo stesso scheletro delle altre (tools/build_guides.py):
mal di schiena e posturale, calisthenics da zero, pugilato dopo i 40 anni.
Costruisce SOLO queste tre pagine: le guide esistenti non vengono toccate.
Uso: python3 tools/build_guides_nov.py  (poi build_md, build_okf, build_llms_full, build_feed)
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build_guides as B  # noqa: E402

B.TODAY = '2026-11-12'
B.GUIDES.clear()

OMS_LBP = ('<a href="https://www.who.int/news/item/07-12-2023-who-releases-guidelines-on-chronic-low-back-pain" '
           'target="_blank" rel="noopener">linee guida dell&rsquo;Organizzazione Mondiale della Sanit&agrave; sul mal di schiena cronico</a>')
OMS_PA = ('<a href="https://www.who.int/europe/news-room/fact-sheets/item/physical-activity" target="_blank" rel="noopener">'
          'Organizzazione Mondiale della Sanit&agrave;</a>')

B.GUIDES['mal-di-schiena-ginnastica-posturale'] = dict(
    title='Mal di schiena: la ginnastica posturale aiuta? | Medusa Gym',
    crumb='Mal di schiena e ginnastica posturale',
    desc='Mal di schiena: quando la ginnastica posturale e l&rsquo;esercizio aiutano, quando andare prima dal medico e come funziona il corso ATS a Roma Cinecittà.',
    tag='Benessere', card_tag='Benessere',
    card_title='Mal di schiena: la ginnastica posturale aiuta?',
    card_desc='Quando l&rsquo;esercizio aiuta, quando andare prima dal medico e come si inizia.',
    eyebrow='Guide &middot; Benessere',
    h1='Mal di <span class="o">schiena</span>', h1s='La ginnastica posturale aiuta?',
    lead='Mal di schiena: quando la ginnastica posturale e l&rsquo;esercizio aiutano, quando andare prima dal medico e come funziona il corso ATS a Roma Cinecittà.',
    img='images/medusa/posturale-elastico.webp', imgsize=(1200, 900),
    alt='Lezione di ginnastica posturale con elastico alla Medusa Gym',
    wa='Ciao Medusa Gym! Ho mal di schiena e vorrei prenotare una prova gratuita di ginnastica posturale.',
    tldr='Per il mal di schiena che dura da più di tre mesi senza una causa precisa, l&rsquo;Organizzazione Mondiale della Sanità indica i programmi di esercizio tra gli interventi raccomandati: muoversi, con gradualità, aiuta più che stare fermi. La ginnastica posturale è un modo guidato per farlo. Se il dolore è forte, nuovo o arriva con altri sintomi, prima si va dal medico. A Medusa Gym il posturale segue il metodo ATS, in piccoli gruppi e con una valutazione iniziale.',
    body='''
<h2>Muoversi o stare fermi?</h2>
<p>Quando la schiena fa male viene voglia di stare fermi. Ma se il dolore dura da tempo, il riposo prolungato di solito non aiuta: la schiena ha bisogno di muoversi, con gradualità. Nel 2023 l&rsquo;OMS ha pubblicato le prime linee guida sul mal di schiena cronico negli adulti e ha messo i <b>programmi di esercizio</b> tra gli interventi raccomandati, insieme all&rsquo;educazione e alla cura di sé.</p>

<h2>Quando andare prima dal medico</h2>
<p>La ginnastica posturale non sostituisce il medico. Prima di iniziare fatti visitare se:</p>
<ul>
<li>il dolore è arrivato dopo una caduta o un trauma;</li>
<li>è molto forte, peggiora di giorno in giorno o ti sveglia di notte;</li>
<li>arriva con febbre, perdita di peso senza motivo, formicolii o debolezza alle gambe;</li>
<li>hai difficoltà a urinare o a trattenere urina o feci, o senti intorpidimento nella zona genitale: in questo caso vai subito dal medico o al pronto soccorso;</li>
<li>hai avuto un tumore, hai una patologia della colonna o sei in terapia.</li>
</ul>
<p>Se il medico ti dice che puoi muoverti, la ginnastica posturale è un buon modo per farlo con qualcuno che ti segue.</p>

<h2>Cosa fa la ginnastica posturale per la schiena</h2>
<ul>
<li><b>Mobilità</b>: ridà movimento a schiena, anche e spalle, che con la rigidità tendono a bloccarsi.</li>
<li><b>Forza del core</b>: addome, glutei e muscoli della schiena sostengono la colonna.</li>
<li><b>Respiro e controllo</b>: il respiro guida il movimento e aiuta a sciogliere le tensioni.</li>
<li><b>Abitudini</b>: impari come stare seduto, come sollevare un peso, come muoverti nella giornata.</li>
</ul>
<p>Per saperne di più leggi <a href="ginnastica-posturale-a-cosa-serve.html">a cosa serve la ginnastica posturale</a>.</p>

<h2>Cosa aspettarsi, e in quanto tempo</h2>
<p>Non esiste una lezione che toglie il dolore. Funziona la costanza: due lezioni a settimana per qualche mese, più quello che porti nella vita di tutti i giorni. Molti sentono la differenza prima nei movimenti (piegarsi, girarsi, alzarsi dal letto) e poi nel dolore. I tempi cambiano da persona a persona.</p>

<h2>Gli errori più comuni</h2>
<ol>
<li><b>Fermarsi del tutto</b> al primo fastidio, invece di muoversi con gradualità.</li>
<li><b>Esercizi presi a caso</b> da video online, senza nessuno che corregga.</li>
<li><b>Fare troppo, troppo presto</b>, poi fermarsi per settimane.</li>
<li><b>Ignorare la giornata</b>: otto ore seduti pesano più di un&rsquo;ora di lezione.</li>
</ol>

<h2>La ginnastica posturale a Medusa Gym</h2>
<p>Il corso segue il metodo Ginnastica Posturale&reg; Istituto ATS e lo tiene <a href="../istruttori.html">Ermenegildo Pagliaroli</a>, per tutti Gildo, istruttore certificato ATS. Si parte da una <b>valutazione iniziale</b> e si lavora in <b>piccoli gruppi</b>, così l&rsquo;istruttore segue la tua schiena e non solo il gruppo. Le lezioni:</p>
<ul>
<li>Lunedì, martedì, giovedì e venerdì alle 10.30 e alle 18.00.</li>
</ul>
<p>Il posturale è un corso a parte rispetto alle formule ONE e OPEN e si può aggiungere: trovi i dettagli in <a href="../abbonamenti.html">abbonamenti</a>. Se hai più di 55 anni guarda anche <a href="../corsi/active-senior.html">Active Senior</a>. Siamo in Via Quinto Sertorio 24, ad Appio Claudio, quadrante di Cinecittà, a 5 minuti a piedi dalla metro A Giulio Agricola. Tutto sul corso nella pagina <a href="../corsi/ginnastica-posturale.html">ginnastica posturale</a>.</p>
<p class="note">Questa guida è informativa e non sostituisce il parere del medico. Per iscriverti serve il <a href="certificato-medico-palestra.html">certificato medico non agonistico</a>.</p>

<h2>Il primo passo</h2>
<p>La prima lezione è gratuita e senza impegno: <a href="/#prova">prenotala</a> e partiamo dalla valutazione.</p>

<h2>Fonti</h2>
<p>Nelle %s (7 dicembre 2023) i programmi di esercizio compaiono tra gli interventi raccomandati per gli adulti, insieme all&rsquo;educazione, ad alcune terapie fisiche e psicologiche e ad alcuni farmaci. Per l&rsquo;OMS il mal di schiena è cronico quando dura più di 3 mesi e non dipende da un&rsquo;altra malattia. Pagina consultata il 12 novembre 2026.</p>''' % OMS_LBP,
    faq=[('La ginnastica posturale aiuta il mal di schiena?', 'Per il mal di schiena comune l&rsquo;esercizio guidato è tra gli interventi raccomandati dall&rsquo;OMS. La ginnastica posturale è un modo per farlo con un istruttore che ti segue. Non sostituisce il medico.'),
         ('Con il mal di schiena è meglio riposare?', 'Se il dolore dura da tempo, il riposo prolungato di solito non aiuta: meglio muoversi con gradualità. Se il dolore è forte, nuovo o arriva con altri sintomi, vai prima dal medico.'),
         ('Quando devo andare dal medico prima di iniziare?', 'Se il dolore è arrivato dopo un trauma, è molto forte o peggiora, ti sveglia di notte, arriva con febbre, perdita di peso, formicolii o debolezza alle gambe, o se hai una patologia della colonna.'),
         ('Quando ci sono le lezioni di posturale a Medusa Gym?', 'Lunedì, martedì, giovedì e venerdì alle 10.30 e alle 18.00, con Ermenegildo Pagliaroli, istruttore certificato ATS.'),
         ('Il posturale è compreso nell&rsquo;abbonamento OPEN?', 'No, il posturale è un corso a parte: si può fare da solo o aggiungere al tuo abbonamento. I dettagli sono nella pagina abbonamenti.'),
         ('Posso provare gratis?', 'Sì, la prima lezione è gratuita e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.')],
    related=['ginnastica-posturale-a-cosa-serve', 'ginnastica-dolce-over-60-roma', 'certificato-medico-palestra', 'prima-lezione-cosa-portare'],
)

B.GUIDES['calisthenics-da-zero'] = dict(
    title='Calisthenics da zero: come iniziare | Medusa Gym',
    crumb='Calisthenics da zero',
    desc='Calisthenics da zero: come iniziare senza saper fare una trazione, progressioni, quante volte allenarsi ed errori da evitare. Gruppo base a Roma Cinecittà.',
    tag='Fitness', card_tag='Fitness',
    card_title='Calisthenics da zero: come iniziare',
    card_desc='Non fai ancora una trazione? Progressioni, frequenza ed errori da evitare.',
    eyebrow='Guide &middot; Fitness',
    h1='Calisthenics <span class="o">da zero</span>', h1s='Come iniziare anche senza una trazione',
    lead='Calisthenics da zero: come iniziare se non fai ancora una trazione, le progressioni, quante volte allenarsi e gli errori da evitare. Gruppo base a Roma Cinecittà.',
    img='images/corsi/cali-1.webp', imgsize=(1080, 1620),
    alt='Allenamento di calisthenics alla sbarra alla Medusa Gym',
    wa='Ciao Medusa Gym! Vorrei iniziare calisthenics da zero e prenotare una prova gratuita.',
    tldr='Per iniziare calisthenics non serve saper fare una trazione: si parte da versioni più facili di ogni esercizio, le progressioni, e si sale un gradino alla volta. Bastano due o tre allenamenti a settimana. A Medusa Gym c&rsquo;è un gruppo base pensato per chi parte da zero, con Yvonne Rivellini.',
    body='''
<h2>Cos&rsquo;è il calisthenics</h2>
<p>È l&rsquo;allenamento a corpo libero: il tuo peso è l&rsquo;attrezzo. Si lavora alla sbarra, alle parallele e a terra con trazioni, dip, piegamenti, squat e tenute, fino agli elementi più spettacolari come verticale, bandiera e muscle-up. Allena forza, controllo e mobilità insieme.</p>

<h2>Se non fai ancora una trazione</h2>
<p>È il punto di partenza di quasi tutti. Ogni esercizio ha delle <b>progressioni</b>, cioè versioni più facili che preparano quella completa:</p>
<ul>
<li><b>Trazioni</b>: appeso alla sbarra, trazioni australiane (corpo inclinato), negative lente, trazioni con elastico.</li>
<li><b>Piegamenti</b>: al muro, su un rialzo, sulle ginocchia, poi completi.</li>
<li><b>Dip</b>: su una panca, poi alle parallele con aiuto, poi completi.</li>
</ul>
<p>Quando una versione diventa facile e pulita, si passa alla successiva.</p>

<h2>Quante volte a settimana</h2>
<p>All&rsquo;inizio bastano <b>due o tre allenamenti a settimana</b>, con un giorno di pausa in mezzo per far recuperare tendini e muscoli. L&rsquo;OMS consiglia agli adulti di allenare la forza dei principali gruppi muscolari almeno due giorni a settimana: il calisthenics è un modo per farlo.</p>

<h2>Gli errori da evitare</h2>
<ol>
<li><b>Saltare le progressioni</b> per arrivare subito all&rsquo;esercizio completo.</li>
<li><b>Dimenticare spalle e polsi</b>: la mobilità è la base per allenarsi a lungo senza fastidi.</li>
<li><b>Contare solo le ripetizioni</b>: prima conta il controllo, poi il numero.</li>
<li><b>Allenarsi ogni giorno al massimo</b>: senza recupero i progressi rallentano.</li>
</ol>

<h2>Cosa serve</h2>
<p>Abbigliamento comodo, scarpe da ginnastica, asciugamano e acqua. Sbarre, parallele ed elastici li trovi in palestra. Ti consigliamo di leggere anche <a href="prima-lezione-cosa-portare.html">cosa portare alla prima lezione</a>.</p>

<h2>Il calisthenics a Medusa Gym</h2>
<p>Lo insegna <a href="../yvonne-rivellini.html">Yvonne Rivellini</a>, che allena da più di sei anni. I gruppi sono tre:</p>
<ul>
<li><b>Base</b>: martedì e giovedì 18.00-19.00, fondamentali e progressioni. È quello per chi parte da zero.</li>
<li><b>Avanzato</b>: martedì e giovedì 19.00-20.30, forza e skill. Ci si passa su valutazione dell&rsquo;istruttrice.</li>
<li><b>Misto</b>: lunedì e venerdì 16.00-17.00, tutti i livelli insieme.</li>
</ul>
<p>Il calisthenics è compreso nella formula ONE (se lo scegli come disciplina) e nella OPEN: trovi le formule in <a href="../abbonamenti.html">abbonamenti</a>. Siamo in Via Quinto Sertorio 24, ad Appio Claudio, quadrante di Cinecittà. Tutti i dettagli nella pagina <a href="../corsi/calisthenics.html">calisthenics</a>.</p>
<p class="note">Se hai una patologia, un infortunio o segui una terapia, parlane con il tuo medico prima di iniziare. Per iscriverti serve il <a href="certificato-medico-palestra.html">certificato medico non agonistico</a>.</p>

<h2>Il primo passo</h2>
<p>La prima lezione è gratuita e senza impegno: <a href="/#prova">prenotala</a> nel gruppo base. Se vuoi metterti alla prova da casa, prova il gioco <a href="../tienilo.html">Tienilo</a>.</p>

<h2>Fonti</h2>
<p>L&rsquo;%s raccomanda agli adulti attività di rinforzo muscolare dei principali gruppi muscolari almeno 2 giorni a settimana. Scheda consultata il 12 novembre 2026, ultimo aggiornamento indicato dall&rsquo;OMS: 1 settembre 2021.</p>''' % OMS_PA,
    faq=[('Posso iniziare calisthenics se non faccio neanche una trazione?', 'Sì. Si parte dalle progressioni, cioè versioni più facili come trazioni australiane, negative ed elastici, e si sale un gradino alla volta.'),
         ('Quante volte a settimana devo allenarmi all&rsquo;inizio?', 'Due o tre volte a settimana, con un giorno di pausa in mezzo per recuperare.'),
         ('Quale gruppo devo scegliere a Medusa Gym?', 'Il gruppo base, martedì e giovedì 18.00-19.00. All&rsquo;avanzato si passa su valutazione dell&rsquo;istruttrice.'),
         ('Chi insegna calisthenics a Medusa Gym?', 'Yvonne Rivellini, istruttrice di calisthenics che allena da più di sei anni, formata in Spagna e Italia.'),
         ('Il calisthenics è compreso nell&rsquo;abbonamento?', 'Sì, nella formula ONE se lo scegli come disciplina e nella OPEN insieme alle altre attività.'),
         ('Posso provare gratis?', 'Sì, la prima lezione è gratuita e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.')],
    related=['come-iniziare-sala-pesi', 'functional-training-cos-e', 'prima-lezione-cosa-portare', 'come-scegliere-una-palestra'],
)

B.GUIDES['pugilato-dopo-i-40-anni'] = dict(
    title='Pugilato dopo i 40 anni: si può iniziare? | Medusa Gym',
    crumb='Pugilato dopo i 40 anni',
    desc='Pugilato dopo i 40 anni: si può iniziare da zero? Contatto, certificato medico, cosa aspettarsi e orari anche alle 8.30 e in pausa pranzo, a Roma Cinecittà.',
    tag='Fight', card_tag='Fight',
    card_title='Pugilato dopo i 40 anni: si può iniziare?',
    card_desc='Da zero, senza obbligo di contatto: certificato, cosa aspettarsi e orari comodi.',
    eyebrow='Guide &middot; Fight',
    h1='Pugilato <span class="o">dopo i 40</span>', h1s='Si può iniziare da zero?',
    lead='Pugilato dopo i 40 anni: si può iniziare da zero? Contatto, certificato medico, cosa aspettarsi e orari comodi (anche 8.30 e pausa pranzo) a Roma Cinecittà.',
    img='images/corsi/pugilato-1.webp', imgsize=(1080, 1620),
    alt='Lezione di pugilato alla Medusa Gym di Roma Cinecittà',
    wa='Ciao Medusa Gym! Ho più di 40 anni e vorrei provare il pugilato: posso prenotare una prova gratuita?',
    tldr='Sì, il pugilato si può iniziare anche dopo i 40 anni, e da zero. Da amatore ti alleni su guardia, colpi, sacco e preparazione fisica: lo sparring non è obbligatorio. Serve il certificato medico non agonistico; per le gare serve quello agonistico. A Medusa Gym il pugilato lo insegna Andrea Durazzi, Tecnico FPI, anche alle 8.30 e in pausa pranzo.',
    body='''
<h2>Si può iniziare dopo i 40?</h2>
<p>Sì. Si può iniziare a 40 anni e oltre, anche da zero: per la forma, per scaricare lo stress, per imparare qualcosa di nuovo. Da amatore non devi dimostrare niente a nessuno. Il lavoro si adatta al tuo livello e alla tua condizione fisica.</p>

<h2>Devo per forza prendere colpi?</h2>
<p>No. Una lezione amatoriale è fatta soprattutto di:</p>
<ul>
<li><b>Guardia e spostamenti</b>: posizione, gambe, distanza.</li>
<li><b>Colpi e combinazioni</b>: jab, diretto, gancio e montante, a vuoto e ai colpitori (i pad che tiene il tecnico).</li>
<li><b>Sacco</b>: per velocità, precisione e fiato.</li>
<li><b>Preparazione fisica</b>: core, forza e resistenza.</li>
</ul>
<p>Lo sparring si fa solo se e quando vuoi, con protezioni e sotto il controllo del tecnico.</p>

<h2>Cosa serve per iniziare</h2>
<p>Per allenarti da amatore basta il <a href="certificato-medico-palestra.html">certificato medico non agonistico</a>. Se un giorno vuoi fare gare con la Federazione Pugilistica Italiana, serve il certificato agonistico. Dopo i 40 anni è una buona idea parlare con il tuo medico prima di iniziare uno sport intenso, soprattutto se sei fermo da tempo, hai la pressione alta, problemi di cuore o fumi. Per le prime lezioni guantoni e attrezzatura te li diamo noi.</p>

<h2>Cosa aspettarsi</h2>
<ul>
<li><b>Fiato e resistenza</b>: i round a tempo allenano il cuore.</li>
<li><b>Forza e coordinazione</b>: gambe, busto e braccia lavorano insieme.</li>
<li><b>Testa</b>: concentrazione e sfogo, due cose che a fine giornata servono.</li>
</ul>
<p>Le prime settimane il ritmo si sente: si parte piano e si cresce. L&rsquo;OMS consiglia agli adulti, a qualunque età, attività aerobica regolare e rinforzo muscolare almeno due giorni a settimana: due lezioni di pugilato vanno in questa direzione.</p>

<h2>Gli errori da evitare</h2>
<ol>
<li><b>Voler recuperare tutto subito</b>: meglio due lezioni a settimana fatte bene che cinque e poi lo stop.</li>
<li><b>Saltare il riscaldamento</b>: dopo i 40 spalle, polsi e fianchi lo chiedono.</li>
<li><b>Colpire forte prima di colpire bene</b>: la tecnica protegge polsi e spalle.</li>
<li><b>Non dire nulla al tecnico</b> se hai un fastidio o un vecchio infortunio.</li>
</ol>

<h2>Il pugilato a Medusa Gym</h2>
<p>Lo insegna <a href="../andrea-durazzi.html">Andrea Durazzi</a>, ex pugile, Tecnico della Federazione Pugilistica Italiana e Personal Trainer AIF. Siamo in Via Quinto Sertorio 24, ad Appio Claudio, quadrante di Cinecittà, a 5 minuti a piedi dalla metro A Giulio Agricola. Le lezioni sono aperte a tutti i livelli e gli orari sono pensati anche per chi lavora:</p>
<ul>
<li>Lunedì, mercoledì e venerdì alle 8.30.</li>
<li>Martedì e giovedì alle 14.00 e alle 19.00.</li>
<li>Sabato 14.00-16.00, dedicato a sparring o preparazione specifica.</li>
</ul>
<p>Il pugilato è compreso nella formula ONE (se lo scegli come disciplina) e nella OPEN: trovi le formule in <a href="../abbonamenti.html">abbonamenti</a>. Indeciso tra pugni e calci? Leggi <a href="kickboxing-o-pugilato.html">kickboxing o pugilato</a>. Tutti i dettagli nella pagina <a href="../corsi/pugilato.html">pugilato</a>.</p>
<p class="note">Questa guida è informativa. Se hai una patologia, un infortunio o segui una terapia, parlane con il tuo medico prima di iniziare.</p>

<h2>Il primo passo</h2>
<p>La prima lezione è gratuita e senza impegno: <a href="/#prova">prenotala</a>, anche in un orario di mattina o in pausa pranzo.</p>

<h2>Fonti</h2>
<p>L&rsquo;%s raccomanda agli adulti attività fisica aerobica regolare e attività di rinforzo muscolare dei principali gruppi muscolari almeno 2 giorni a settimana. Scheda consultata il 12 novembre 2026, ultimo aggiornamento indicato dall&rsquo;OMS: 1 settembre 2021.</p>''' % OMS_PA,
    faq=[('Si può iniziare pugilato dopo i 40 anni?', 'Sì, anche da zero. Da amatore il lavoro si adatta al tuo livello e alla tua condizione fisica.'),
         ('Nel pugilato amatoriale devo fare sparring?', 'No. Lo sparring si fa solo se e quando vuoi, con protezioni e sotto il controllo del tecnico.'),
         ('Che certificato serve per il pugilato?', 'Per allenarti da amatore il certificato medico non agonistico. Per fare gare con la Federazione Pugilistica Italiana serve il certificato agonistico.'),
         ('Quando ci sono le lezioni di pugilato a Medusa Gym?', 'Lunedì, mercoledì e venerdì alle 8.30; martedì e giovedì alle 14.00 e alle 19.00; sabato 14.00-16.00.'),
         ('Chi insegna pugilato a Medusa Gym?', 'Andrea Durazzi, ex pugile, Tecnico della Federazione Pugilistica Italiana e Personal Trainer AIF.'),
         ('Posso provare gratis?', 'Sì, la prima lezione è gratuita e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.')],
    related=['kickboxing-o-pugilato', 'a-che-eta-iniziare-kickboxing', 'certificato-medico-palestra', 'prima-lezione-cosa-portare'],
)


def main():
    for slug, g in B.GUIDES.items():
        print('ok', B.build(slug, g))
        p = os.path.join(B.GD, slug + '.html')
        h = open(p, encoding='utf-8').read()
        h = h.replace('"dateModified": "2026-11-08"', '"dateModified": "%s"' % B.MODIFIED)
        h = re.sub(r'datetime="[0-9-]+">[^<]*</time>', 'datetime="%s">%s</time>' % (B.MODIFIED, B.TODAY_IT), h)
        open(p, 'w', encoding='utf-8').write(h)
    B.update_index()


if __name__ == '__main__':
    main()
