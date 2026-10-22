#!/usr/bin/env python3
"""Genera le due guide fitness (sala pesi da zero, functional training) con lo stesso
scheletro delle altre guide (tools/build_guides.py) e un hero animato SVG come le altre.
Costruisce SOLO queste due pagine: le guide esistenti non vengono toccate.
Uso: python3 tools/build_guides_fitness.py  (poi build_md, build_okf, build_llms_full, build_feed)
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build_guides as B  # noqa: E402

B.TODAY = '2026-10-22'
B.TODAY_IT = '22 ottobre 2026'
B.GUIDES.clear()

B.GUIDES['come-iniziare-sala-pesi'] = dict(
    title='Come iniziare in sala pesi da zero: guida pratica | MedusA Gym',
    crumb='Come iniziare in sala pesi',
    desc='Come iniziare in sala pesi da principiante: la prima scheda, quante volte allenarsi, quanto peso usare, errori da evitare e cosa portare. A Roma Cinecittà.',
    tag='Fitness', card_tag='Fitness',
    card_title='Come iniziare in sala pesi da zero',
    card_desc='Prima scheda, quante volte a settimana, quanto peso usare ed errori da evitare.',
    eyebrow='Guide &middot; Fitness',
    h1='Sala pesi <span class="o">da zero</span>', h1s='Come iniziare senza sbagliare',
    lead='Come iniziare in sala pesi da principiante: la prima scheda, quante volte allenarsi, quanto peso usare, errori da evitare e cosa portare. A Roma Cinecittà.',
    img='images/corsi/pesi-1.webp', imgsize=(1080, 1620),
    alt='Sala pesi della MedusA Gym a Roma Cinecittà',
    wa='Ciao MedusA Gym! Vorrei iniziare in sala pesi e prenotare una prova gratuita.',
    tldr='Per iniziare in sala pesi non serve sapere già tutto: serve una scheda fatta sul tuo livello, due o tre allenamenti a settimana, pesi che ti permettono di muoverti bene e qualcuno che ti corregga i primi giorni. A MedusA Gym la scheda personalizzata è gratuita e la prima prova non costa nulla.',
    body='''
<h2>Prima di toccare un peso</h2>
<p>Parti dall&rsquo;obiettivo: più forza, rimetterti in forma, stare meglio con la schiena, prepararti per uno sport. L&rsquo;obiettivo decide esercizi, ripetizioni e recuperi. Per questo una scheda presa da internet o da un amico funziona poco: è fatta per qualcun altro. Da noi l&rsquo;istruttore prepara una <a href="../corsi/sala-pesi.html">scheda personalizzata gratuita</a> e te la spiega in sala.</p>

<h2>Com&rsquo;è fatta la prima scheda</h2>
<p>Di solito, per chi parte da zero, la prima scheda allena tutto il corpo in ogni seduta, con pochi esercizi di base:</p>
<ul>
<li><b>Gambe</b>: per esempio squat o leg press.</li>
<li><b>Spinta</b>: panca, piegamenti o chest press.</li>
<li><b>Tirata</b>: lat machine o rematore.</li>
<li><b>Core</b>: plank e esercizi per addome e schiena.</li>
</ul>
<p>Poche cose fatte bene valgono più di venti macchine provate in fretta. Con il tempo la scheda cambia: si aggiornano esercizi e carichi in base ai tuoi progressi.</p>

<h2>Quante volte a settimana</h2>
<p>Per iniziare, in genere bastano <b>due o tre allenamenti a settimana</b>, con almeno un giorno di pausa tra uno e l&rsquo;altro. La costanza conta più dell&rsquo;intensità: meglio tre mesi a ritmo regolare che due settimane al massimo e poi lo stop. La sala pesi di MedusA Gym è aperta dal lunedì al venerdì dalle 8 alle 22 e il sabato dalle 9 alle 17, quindi puoi incastrarla anche in <a href="../palestra-pausa-pranzo.html">pausa pranzo</a>.</p>

<h2>Quanto peso usare</h2>
<p>La regola pratica: scegli un peso che ti permette di fare tutte le ripetizioni con la tecnica pulita, finendo la serie con la sensazione di poterne fare ancora due o tre. Se la tecnica peggiora, il peso è troppo. Quando le serie diventano facili, si aumenta un poco alla volta. Nelle prime settimane l&rsquo;istruttore ti aiuta a trovare i carichi giusti.</p>

<h2>Gli errori da evitare</h2>
<ol>
<li><b>Copiare la scheda di qualcun altro</b>: obiettivi e livello sono diversi.</li>
<li><b>Caricare troppo presto</b>: prima il movimento, poi il peso.</li>
<li><b>Saltare il riscaldamento</b>: bastano 5-10 minuti di vogatore o mobilità.</li>
<li><b>Non chiedere</b>: se un attrezzo non ti è chiaro, chiedi all&rsquo;istruttore. È lì per questo.</li>
<li><b>Cambiare tutto ogni settimana</b>: dai alla scheda il tempo di funzionare.</li>
</ol>

<h2>Cosa portare</h2>
<p>Asciugamano, scarpe da ginnastica pulite, una bottiglia d&rsquo;acqua e un lucchetto per l&rsquo;armadietto. Gli spogliatoi sono separati uomo e donna, con docce: trovi i dettagli in <a href="prima-lezione-cosa-portare.html">cosa portare alla prima lezione</a>.</p>

<h2>Come funziona a MedusA Gym</h2>
<p>Siamo in Via Quinto Sertorio 24, ad Appio Claudio, quadrante di Cinecittà, a 5 minuti a piedi dalla metro A Giulio Agricola. In sala trovi macchine isotoniche, bilancieri, manubri, panche, squat rack, multistazione ai cavi e vogatore. La scheda è gratuita e si aggiorna nel tempo; se vuoi qualcuno accanto a ogni serie, chiedi le soluzioni di <a href="../personal-training.html">personal training</a>. Puoi scegliere la formula ONE con solo sala pesi oppure OPEN con anche tutti i corsi: le trovi nella pagina <a href="../abbonamenti.html">abbonamenti</a>.</p>
<p class="note">Questa guida è informativa. Se hai una patologia, un infortunio o segui una terapia, parlane con il tuo medico prima di iniziare. Per iscriverti serve il <a href="certificato-medico-palestra.html">certificato medico non agonistico</a>.</p>

<h2>Il primo passo</h2>
<p>La prima prova è gratuita e senza impegno. <a href="../index.html#prova">Prenotala</a>: ti aspettiamo con l&rsquo;istruttore e impostiamo insieme la prima scheda. Se preferisci allenarti in gruppo, leggi anche <a href="functional-training-cos-e.html">cos&rsquo;è il functional training</a>.</p>''',
    faq=[('Sono principiante: posso iniziare in sala pesi?', 'Sì. La scheda parte dal tuo livello e l&rsquo;istruttore ti spiega come usare ogni attrezzo.'),
         ('Quante volte a settimana devo allenarmi all&rsquo;inizio?', 'In genere due o tre volte a settimana, con almeno un giorno di pausa tra un allenamento e l&rsquo;altro.'),
         ('Quanto peso devo usare?', 'Un peso che ti permette di fare tutte le ripetizioni con tecnica pulita, finendo la serie con la sensazione di poterne fare ancora due o tre.'),
         ('La scheda a MedusA Gym si paga?', 'No, la scheda personalizzata è gratuita e si aggiorna nel tempo in base ai tuoi progressi.'),
         ('Quali sono gli orari della sala pesi?', 'Dal lunedì al venerdì dalle 8 alle 22 e il sabato dalle 9 alle 17.'),
         ('Posso provare gratis?', 'Sì, la prima prova è gratuita e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.')],
    related=['functional-training-cos-e', 'prima-lezione-cosa-portare', 'come-scegliere-una-palestra', 'certificato-medico-palestra'],
)

B.GUIDES['functional-training-cos-e'] = dict(
    title="Functional training: cos'è, benefici e per chi è | MedusA Gym",
    crumb="Functional training: cos'è",
    desc="Functional training: cos'è, come si svolge una lezione, benefici, differenze con la sala pesi e per chi è adatto. Orari e prova gratuita a Roma Cinecittà.",
    tag='Fitness', card_tag='Fitness',
    card_title="Functional training: cos'è e per chi è",
    card_desc='Come si svolge una lezione, benefici, differenze con la sala pesi e per chi è adatto.',
    eyebrow='Guide &middot; Fitness',
    h1='Functional <span class="o">training</span>', h1s="Cos&rsquo;è, come funziona e per chi è",
    lead="Functional training: cos&rsquo;è, come si svolge una lezione, benefici, differenze con la sala pesi e per chi è adatto. Orari e prova gratuita a Roma Cinecittà.",
    img='images/corsi/pesi-3.webp', imgsize=(1080, 1620),
    alt='Allenamento di functional training alla MedusA Gym',
    wa='Ciao MedusA Gym! Vorrei prenotare una prova gratuita di functional training.',
    tldr="Il functional training è un allenamento a corpo intero che usa movimenti naturali (spingere, tirare, sollevare, piegarsi, saltare) con kettlebell, bilanciere, corpo libero e piccoli attrezzi. Si fa in gruppo e a tempo, e ogni esercizio ha una versione più facile o più difficile. A MedusA Gym lo guida Donatella Vecchioni, in gruppi da massimo 15 persone.",
    body='''
<h2>Cos&rsquo;è il functional training</h2>
<p>È un modo di allenarsi che parte dai movimenti che fai ogni giorno: alzarti da terra, sollevare una borsa, salire le scale, girarti, spingere una porta. Invece di isolare un muscolo alla volta, ogni esercizio coinvolge più articolazioni e più muscoli insieme. Si usano kettlebell, bilanciere, manubri, step, battle rope, fitball e il corpo libero.</p>

<h2>Com&rsquo;è fatta una lezione</h2>
<ul>
<li><b>Riscaldamento</b>: mobilità e attivazione, per preparare il corpo.</li>
<li><b>Parte centrale</b>: esercizi a tempo o in circuito, alternando forza e fiato.</li>
<li><b>Core e chiusura</b>: addome, schiena, controllo e un po&rsquo; di defaticamento.</li>
</ul>
<p>Ogni esercizio ha una versione più facile e una più difficile: il livello lo scegli tu. Il gruppo dà la carica, l&rsquo;istruttrice ti corregge.</p>

<h2>A cosa serve</h2>
<ul>
<li><b>Forza utile</b>: quella che usi nella vita di tutti i giorni.</li>
<li><b>Fiato e resistenza</b>: grazie al lavoro a tempo e al ritmo alto.</li>
<li><b>Coordinazione e controllo</b>: equilibrio, core e postura in movimento.</li>
<li><b>Costanza</b>: lezioni sempre diverse annoiano meno, e un gruppo che ti aspetta aiuta a non saltare.</li>
</ul>
<p>Se l&rsquo;obiettivo è rimetterti in forma, è un buon alleato; i risultati dipendono anche da costanza, alimentazione e abitudini. Ne parliamo in <a href="../palestra-dimagrire.html">palestra per dimagrire</a>.</p>

<h2>Functional o sala pesi?</h2>
<p>Non è una gara: sono due strade diverse e si possono combinare.</p>
<ul>
<li><b>Functional</b>: lezione di gruppo guidata, orari fissi, ritmo alto, non devi pensare a cosa fare.</li>
<li><b>Sala pesi</b>: scheda personale, ti alleni quando vuoi, carichi progressivi su esercizi specifici. Se parti da zero leggi <a href="come-iniziare-sala-pesi.html">come iniziare in sala pesi</a>.</li>
</ul>
<p>Con la formula OPEN li hai entrambi, insieme a tutte le altre discipline: trovi le formule in <a href="../abbonamenti.html">abbonamenti</a>.</p>

<h2>Per chi è</h2>
<p>Per chi riparte da zero, per chi vuole rimettersi in forma con allenamenti vari, per chi fa sport da combattimento e vuole più fiato e più forza, e per chi ha poco tempo. Se hai più di 55 anni e cerchi qualcosa di più dolce, guarda il corso <a href="ginnastica-dolce-over-60-roma.html">Active Senior</a>, sempre con Donatella.</p>

<h2>Il functional a MedusA Gym</h2>
<p>Le lezioni sono guidate da <a href="../donatella-vecchioni.html">Donatella Vecchioni</a>, in gruppi da <b>massimo 15 persone</b>, per tutti i livelli. Gli orari:</p>
<ul>
<li>Lunedì e venerdì: 19.15-20.15</li>
<li>Martedì e giovedì: 13.30-14.30 e 19.15-20.45</li>
</ul>
<p>Siamo in Via Quinto Sertorio 24, ad Appio Claudio, quadrante di Cinecittà, comodi da Tuscolano, Quadraro e Don Bosco. Porta scarpe da ginnastica, asciugamano e acqua: l&rsquo;attrezzatura è tutta in sala. Tutti i dettagli sono nella pagina <a href="../corsi/functional-training.html">functional training</a>.</p>
<p class="note">Se hai una patologia, un infortunio o segui una terapia, parlane con il tuo medico prima di iniziare. Per iscriverti serve il <a href="certificato-medico-palestra.html">certificato medico non agonistico</a>.</p>

<h2>Provalo gratis</h2>
<p>La prima lezione è gratuita e senza impegno: <a href="../index.html#prova">prenotala</a> e vieni a provare con il gruppo.</p>''',
    faq=[("Cos&rsquo;è il functional training?", 'È un allenamento a corpo intero basato su movimenti naturali, con kettlebell, bilanciere, corpo libero e piccoli attrezzi, svolto in gruppo e a tempo.'),
         ('Sono fuori forma: posso farlo?', 'Sì. Ogni esercizio ha una versione più facile o più difficile e il livello lo scegli tu.'),
         ('Che differenza c&rsquo;è con la sala pesi?', 'Il functional è una lezione di gruppo guidata a orari fissi; in sala pesi segui una scheda personale quando vuoi. Con la formula OPEN li hai entrambi.'),
         ('Quando ci sono le lezioni a MedusA Gym?', 'Lunedì e venerdì 19.15-20.15, martedì e giovedì 13.30-14.30 e 19.15-20.45, con Donatella Vecchioni.'),
         ('Quante persone ci sono in una lezione?', 'Al massimo 15, così l&rsquo;istruttrice può seguire e correggere tutti.'),
         ('Posso provare gratis?', 'Sì, la prima lezione è gratuita e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.')],
    related=['come-iniziare-sala-pesi', 'kickboxing-fa-dimagrire', 'ginnastica-dolce-over-60-roma', 'come-scegliere-una-palestra'],
)

# ------------------------------------------------------------------ HERO ANIMATI
BASE_CSS = ('.hero-ph.hero-art{border:0;box-shadow:none;background:none;border-radius:0;overflow:visible}'
            '.hero-ph.hero-art::after,.hero-ph.hero-art .hero-tag{display:none}'
            '.art{position:absolute;inset:0}.art svg{width:100%;height:100%;display:block}')
TXT = 'font-family="Bebas Neue,Impact,sans-serif"'


def hero(cls, label, css, svg):
    return ('<figure class="hero-ph hero-art">\n'
            f'      <div class="art {cls}" role="img" aria-label="{label}"><style>{BASE_CSS}{css}'
            '@media (prefers-reduced-motion:reduce){.art *{animation:none!important}}</style>'
            f'<svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">{svg}</svg></div>\n'
            '      <figcaption class="hero-tag"><span>Le guide<br>di MedusA</span><em>Via Quinto Sertorio 24<br>Roma Cinecitt&agrave;</em></figcaption>\n'
            '    </figure>')


def hero_pesi():
    css = ('.a-sp .bar{animation:splift 3.2s ease-in-out infinite}'
           '@keyframes splift{0%,12%{transform:translateY(0)}45%,60%{transform:translateY(-170px)}92%,100%{transform:translateY(0)}}'
           '.a-sp .pg{transform-box:fill-box;transform-origin:left center;animation:spg 9s ease-out infinite}'
           '@keyframes spg{0%,6%{transform:scaleX(0)}22%,88%{transform:scaleX(1)}100%{transform:scaleX(0)}}')
    s = []
    s.append('<ellipse cx="400" cy="640" rx="290" ry="14" fill="rgba(57,255,20,.07)"/>')
    # rack
    for x in (210, 590):
        s.append(f'<rect x="{x-11}" y="200" width="22" height="440" rx="8" fill="#1d1d1d" stroke="rgba(255,255,255,.18)" stroke-width="2"/>')
        for y in range(240, 620, 46):
            s.append(f'<circle cx="{x}" cy="{y}" r="3.5" fill="rgba(255,255,255,.25)"/>')
        s.append(f'<rect x="{x-26}" y="484" width="52" height="12" rx="4" fill="#2a2a2a" stroke="#8CFF7B" stroke-width="2"/>')
    s.append('<line x1="170" y1="640" x2="630" y2="640" stroke="rgba(255,255,255,.16)" stroke-width="4" stroke-linecap="round"/>')
    # bilanciere
    b = ['<g class="bar">',
         '<line x1="110" y1="470" x2="690" y2="470" stroke="#d8d8d8" stroke-width="10" stroke-linecap="round"/>']
    for x, h, c in ((150, 150, '#8CFF7B'), (178, 120, '#39FF14'), (650, 150, '#8CFF7B'), (622, 120, '#39FF14')):
        b.append(f'<rect x="{x-11}" y="{470-h/2}" width="22" height="{h}" rx="6" fill="#121212" stroke="{c}" stroke-width="5"/>')
    b.append('</g>')
    s.append(''.join(b))
    # progressi settimane
    s.append(f'<text x="400" y="712" text-anchor="middle" {TXT} font-size="40" letter-spacing="3" fill="rgba(242,242,242,.8)">SETTIMANA DOPO SETTIMANA</text>')
    for i, w in enumerate((120, 190, 260, 330)):
        y = 738 + i * 32
        s.append(f'<text x="190" y="{y+16}" text-anchor="end" {TXT} font-size="24" fill="rgba(242,242,242,.55)">S{i+1}</text>')
        s.append(f'<rect x="205" y="{y}" width="400" height="18" rx="9" fill="rgba(255,255,255,.08)"/>')
        s.append(f'<rect class="pg" x="205" y="{y}" width="{w}" height="18" rx="9" fill="#8CFF7B" style="animation-delay:{i*0.6:.1f}s"/>')
    s.append(f'<text x="400" y="160" text-anchor="middle" {TXT} font-size="64" letter-spacing="5" fill="#8CFF7B">DA ZERO</text>')
    return hero('a-sp', 'Animazione di un bilanciere che sale e scende nel rack e di barre di progresso che crescono settimana dopo settimana', css, ''.join(s))


def hero_functional():
    css = ('.a-ft .kb{transform-origin:400px 200px;animation:ftsw 2.4s ease-in-out infinite}'
           '@keyframes ftsw{0%,100%{transform:rotate(-38deg)}50%{transform:rotate(38deg)}}'
           '.a-ft .ring{stroke-dasharray:516;animation:ftring 6s linear infinite}'
           '@keyframes ftring{0%{stroke-dashoffset:516}100%{stroke-dashoffset:0}}'
           '.a-ft .st{animation:ftst 6s step-end infinite;opacity:.25}'
           '@keyframes ftst{0%{opacity:.25}10%,30%{opacity:1}40%,100%{opacity:.25}}')
    s = []
    s.append(f'<text x="400" y="150" text-anchor="middle" {TXT} font-size="64" letter-spacing="5" fill="#8CFF7B">FUNCTIONAL</text>')
    # perno e kettlebell che oscilla
    s.append('<circle cx="400" cy="200" r="10" fill="#8CFF7B"/>')
    s.append('<g class="kb"><line x1="400" y1="200" x2="400" y2="355" stroke="rgba(255,255,255,.35)" stroke-width="6" stroke-linecap="round"/>'
             '<path d="M372,372 Q372,342 400,342 Q428,342 428,372" fill="none" stroke="#d8d8d8" stroke-width="14" stroke-linecap="round"/>'
             '<circle cx="400" cy="425" r="62" fill="#151515" stroke="#8CFF7B" stroke-width="8"/>'
             f'<text x="400" y="440" text-anchor="middle" {TXT} font-size="40" fill="rgba(242,242,242,.85)">16</text></g>')
    # timer a tempo
    s.append('<circle cx="400" cy="620" r="82" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="14"/>')
    s.append('<circle class="ring" cx="400" cy="620" r="82" fill="none" stroke="#ff7a3d" stroke-width="14" stroke-linecap="round" transform="rotate(-90 400 620)"/>')
    s.append(f'<text x="400" y="642" text-anchor="middle" {TXT} font-size="60" fill="#f2f2f2">30&quot;</text>')
    # stazioni del circuito
    for i, (x, lab) in enumerate(((190, 'KB'), (330, 'BAR'), (470, 'STEP'), (610, 'CORE'))):
        s.append(f'<g class="st" style="animation-delay:{i*1.5:.1f}s"><rect x="{x-44}" y="740" width="88" height="88" rx="18" fill="#181818" stroke="#8CFF7B" stroke-width="4"/>'
                 f'<text x="{x}" y="795" text-anchor="middle" {TXT} font-size="30" fill="#8CFF7B">{lab}</text></g>')
    s.append(f'<text x="400" y="878" text-anchor="middle" {TXT} font-size="40" letter-spacing="3" fill="rgba(242,242,242,.8)">MAX 15 PERSONE</text>')
    return hero('a-ft', 'Animazione di un kettlebell che oscilla, un timer a tempo e le stazioni di un circuito che si accendono una dopo l&rsquo;altra', css, ''.join(s))


HEROES = {'come-iniziare-sala-pesi': hero_pesi, 'functional-training-cos-e': hero_functional}


def main():
    for slug, g in B.GUIDES.items():
        B.build(slug, g)
        p = os.path.join(B.GD, slug + '.html')
        t = open(p, encoding='utf-8').read()
        t = re.sub(r'<figure class="hero-ph[^"]*">.*?</figure>', lambda m: HEROES[slug](), t, count=1, flags=re.S)
        open(p, 'w', encoding='utf-8').write(t)
        print('ok', slug)
    B.update_index()


if __name__ == '__main__':
    main()
