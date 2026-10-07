#!/usr/bin/env python3
"""Genera le guide nuove in guide/ partendo dallo scheletro di guide/prima-lezione-cosa-portare.html.
Uso: python3 tools/build_guides.py   (poi tools/build_md.py)
Aggiorna anche guide/index.html (card + ItemList) in modo idempotente.
"""
import html as H
import json
import os
import re

SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'medusa-gym 2')
GD = os.path.join(SITE, 'guide')
BASE = 'https://www.medusagym.it/'
SKEL = open(os.path.join(GD, 'prima-lezione-cosa-portare.html'), encoding='utf-8').read()
TODAY = '2026-10-07'
TODAY_IT = '7 ottobre 2026'


def plain(t):
    return H.unescape(re.sub(r'<[^>]+>', '', t))


def esc(t):
    return H.escape(t, quote=True)


# Guide esistenti (card per "Altre guide")
EXIST = {
    'kickboxing-o-pugilato': ('Fight', 'Kickboxing o pugilato: quale scegliere?', 'Differenze tra kickboxing e pugilato: colpi, specialità, per chi sono e come scegliere.'),
    'a-che-eta-iniziare-kickboxing': ('Kickboxing', 'A che età si può iniziare kickboxing?', 'Dai 9 anni con il corso Kids senza contatto, dai 14 con gli adulti. E dopo i 40, i 50, i 60?'),
    'prima-lezione-cosa-portare': ('Principianti', 'Prima lezione in palestra: cosa portare', "La lista per ogni corso, dal certificato medico al lucchetto dell'armadietto."),
    'ginnastica-posturale-a-cosa-serve': None,
}

GUIDES = {}

# ---------------------------------------------------------------- COME SCEGLIERE
GUIDES['come-scegliere-una-palestra'] = dict(
    title='Come scegliere una palestra a Roma: 8 domande da fare | MedusA Gym',
    crumb='Come scegliere una palestra',
    desc='Come scegliere la palestra giusta a Roma: obiettivo, posizione, orari, istruttori, prova gratuita, contratto e spogliatoi. Le domande da fare prima di iscriverti.',
    tag='Principianti', card_tag='Principianti',
    card_title='Come scegliere una palestra: 8 domande da fare',
    card_desc='Obiettivo, posizione, orari, istruttori, prova e contratto: cosa chiedere prima di iscriverti.',
    eyebrow='Guide &middot; Principianti',
    h1='Come <span class="o">scegliere</span> una palestra', h1s='Otto domande da fare prima di iscriverti',
    lead='Come scegliere la palestra giusta a Roma: obiettivo, posizione, orari, istruttori, prova gratuita, contratto e spogliatoi. Le domande da fare prima di iscriverti.',
    img='images/corsi/pesi-3.webp', imgsize=(1080, 1620),
    alt='Allieva al pulley basso nella sala pesi della MedusA Gym durante un allenamento seguito',
    wa='Ciao MedusA Gym! Sto scegliendo una palestra e vorrei prenotare una prova gratuita.',
    tldr='La palestra giusta è quella in cui torni davvero. Prima di iscriverti verifica otto cose: l&rsquo;obiettivo, quanto è comoda, gli orari, chi ti segue, se puoi provare, cosa dice il contratto, come sono gli spogliatoi e che ambiente trovi. Se puoi, prova prima di pagare.',
    body='''
<h2>1. Che obiettivo hai?</h2>
<p>Dimagrire, mettere forza, imparare uno sport da combattimento, sistemare la postura o semplicemente muoverti di più: non tutte le palestre sono adatte a tutto. Chiedi quali corsi o attrezzature servono al tuo obiettivo e chi ti aiuta a impostarlo. Se parti da zero, leggi anche <a href="../palestra-principianti.html">come funziona la prima volta in palestra</a>.</p>

<h2>2. Quanto è comoda?</h2>
<p>Una palestra comoda è una palestra in cui vai davvero. Guarda quanto ci metti da casa o dal lavoro, se c&rsquo;è una fermata della metro vicina e dove si parcheggia. Da noi, per esempio, la metro A <a href="../palestra-vicino-metro-a.html">Giulio Agricola è a circa 5 minuti a piedi</a>.</p>

<h2>3. Gli orari sono compatibili con i tuoi?</h2>
<p>Controlla gli orari di apertura e quelli dei corsi, non solo quelli della sala. Chiedi se c&rsquo;è posto negli orari in cui vuoi andare tu. MedusA Gym è aperta dal lunedì al venerdì dalle 8 alle 22 e il sabato dalle 9 alle 17; per chi ha poco tempo c&rsquo;è anche <a href="../palestra-pausa-pranzo.html">la palestra in pausa pranzo</a>.</p>

<h2>4. Chi ti segue?</h2>
<p>Chiedi chi sono gli istruttori, che qualifiche hanno e se ti seguono nei primi allenamenti. Una scheda fatta con te vale più di una scheda scaricata. Da noi la scheda in sala pesi è personalizzata e gratuita, e puoi conoscere lo staff nella pagina <a href="../istruttori.html">istruttori</a>.</p>

<h2>5. Puoi provare prima di pagare?</h2>
<p>È la domanda più utile. Una lezione di prova ti fa capire l&rsquo;ambiente, il livello del gruppo e come ti trovi. A MedusA Gym la prima lezione è gratuita e senza impegno, e va prenotata così ti aspettiamo con l&rsquo;istruttore giusto.</p>

<h2>6. Cosa dice il contratto?</h2>
<p>Prima di firmare chiedi, e se possibile fatti scrivere: quanto dura l&rsquo;abbonamento, se si rinnova da solo, come si disdice, quali costi si aggiungono (quota associativa, tessera, certificato medico) e se si può pagare a rate. Da noi esistono tre formule, <a href="../abbonamenti.html">ONE, OPEN e FAMILY</a>: i prezzi si vedono in segreteria dopo la prova, e si può pagare anche a rate.</p>

<h2>7. Come sono spogliatoi e pulizia?</h2>
<p>Guarda con i tuoi occhi spogliatoi, docce e attrezzi. Chiedi se ci sono armadietti e cosa devi portare. Da noi <a href="../palestra-spogliatoi-docce.html">spogliatoi separati uomo e donna, con docce e armadietti</a>: porta lucchetto e asciugamano.</p>

<h2>8. Che ambiente trovi?</h2>
<p>Una palestra enorme non è per forza la migliore per te. Ascolta come si parlano le persone, guarda se ti salutano, leggi le recensioni recenti. MedusA Gym ha 4,8 su 5 su Google con oltre 100 recensioni, ma il consiglio resta lo stesso: vieni, guarda, poi scegli.</p>

<h2>Prima di decidere</h2>
<p>Se vuoi conoscerci, <a href="../index.html#prova">prenota la prova gratuita</a>. Se hai dubbi sui documenti, leggi la guida sul <a href="certificato-medico-palestra.html">certificato medico per la palestra</a>.</p>''',
    faq=[('Come scelgo la palestra giusta?', 'Parti dal tuo obiettivo, poi controlla posizione, orari, chi ti segue, se puoi provare prima di pagare, cosa prevede il contratto, come sono gli spogliatoi e che ambiente trovi.'),
         ('Conviene provare prima di iscriversi?', 'Sì. A MedusA Gym la prima lezione è gratuita e senza impegno e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.'),
         ('Cosa devo chiedere prima di firmare un abbonamento?', 'Quanto dura, se si rinnova da solo, come si disdice, quali costi si aggiungono e se si può pagare a rate. Meglio avere tutto per iscritto.'),
         ('Quanto costa una palestra a MedusA Gym?', 'Dipende dalla formula (ONE, OPEN o FAMILY) e dalla durata. I prezzi si vedono in segreteria dopo la prova gratuita; si può pagare anche a rate.')],
    related=['prima-lezione-cosa-portare', 'certificato-medico-palestra', 'ginnastica-dolce-over-60-roma', 'kickboxing-o-pugilato'],
)

# ---------------------------------------------------------------- OVER 60
GUIDES['ginnastica-dolce-over-60-roma'] = dict(
    title='Ginnastica dolce over 60 a Roma: come funziona | MedusA Gym',
    crumb='Ginnastica dolce over 60',
    desc='Ginnastica dolce per over 60 a Roma Cinecittà: come funziona il corso Active Senior, orari, a chi è adatto, cosa portare e come provare gratis.',
    tag='Over 55', card_tag='Over 55',
    card_title='Ginnastica dolce over 60 a Roma',
    card_desc="Come funziona Active Senior: orari, a chi è adatto, cosa portare e come provare gratis.",
    eyebrow='Guide &middot; Over 55',
    h1='Ginnastica dolce <span class="o">over 60</span>', h1s='Come funziona il corso Active Senior a Roma Cinecittà',
    lead='Ginnastica dolce per over 60 a Roma Cinecittà: come funziona il corso Active Senior, orari, a chi è adatto, cosa portare e come provare gratis.',
    img='images/corso-active-senior.jpg', imgsize=(900, 1200),
    alt='Corso Active Senior di ginnastica dolce per over 55 alla MedusA Gym',
    wa='Ciao MedusA Gym! Vorrei prenotare una prova gratuita di Active Senior.',
    tldr='Active Senior è la ginnastica dolce di MedusA Gym per chi ha più di 55 anni, quindi anche per gli over 60. Si fa il martedì e il giovedì dalle 9.30 alle 10.30 con Donatella Vecchioni, senza esperienza richiesta e con la prima lezione gratuita.',
    body='''
<h2>Cos&rsquo;è Active Senior</h2>
<p>È una ginnastica dolce pensata per chi ha superato i 55 anni: movimento, equilibrio e forza per stare bene ogni giorno. La lezione dura un&rsquo;ora, con ritmi adatti a te e un&rsquo;istruttrice che ti segue. Il corso è aperto a chi ha più di 55 anni, quindi va bene anche se ne hai 60, 65 o più. Tutti i dettagli sono nella pagina <a href="../corsi/active-senior.html">Active Senior</a>.</p>

<h2>Cosa si lavora</h2>
<ul>
<li><b>Mobilità</b>: articolazioni più libere per chinarti, girarti, allungarti.</li>
<li><b>Equilibrio</b>: più stabilità e sicurezza nei movimenti di tutti i giorni.</li>
<li><b>Forza leggera</b>: muscoli attivi per le scale, la spesa, i nipoti.</li>
<li><b>Compagnia</b>: un gruppo che ti aspetta due mattine a settimana.</li>
</ul>

<h2>Quando e con chi</h2>
<p>Il corso si svolge il <b>martedì e il giovedì dalle 9.30 alle 10.30</b>, con Donatella Vecchioni, che guida anche le lezioni di functional training. La palestra è in Via Quinto Sertorio 24, a Roma Cinecittà: se arrivi in metro, Giulio Agricola è a circa 5 minuti a piedi, come spieghiamo in <a href="../palestra-quadraro-appio-claudio.html">come arrivare da Quadraro, Appio Claudio e dintorni</a>.</p>

<h2>A chi è adatto</h2>
<p>A chi non fa sport da anni e vuole ripartire con calma, a chi vuole restare attivo e a chi cerca un ambiente accogliente. Non serve nessuna esperienza. Il corso non è faticoso: l&rsquo;istruttrice adatta gli esercizi a chi ha davanti. Se hai una patologia o segui una terapia, parlane con il tuo medico prima di iniziare.</p>

<h2>Il certificato medico</h2>
<p>Per iscriverti serve il certificato medico non agonistico. Come funziona, chi lo rilascia e quanto dura lo spieghiamo nella guida sul <a href="certificato-medico-palestra.html">certificato medico per la palestra</a>.</p>

<h2>Come provare</h2>
<p>La prima lezione è gratuita e senza impegno, valida anche per Active Senior, e va prenotata. Vieni con abiti comodi e una bottiglia d&rsquo;acqua: al resto pensiamo noi. Se ti piace, scegli la formula: ONE con solo Active Senior oppure <a href="../abbonamenti.html">OPEN</a> con tutte le discipline e la sala pesi. Se invece cerchi un lavoro più mirato sulla schiena, guarda la <a href="../corsi/ginnastica-posturale.html">ginnastica posturale</a>.</p>''',
    faq=[('Active Senior va bene anche se ho più di 60 anni?', 'Sì. Il corso è pensato per chi ha superato i 55 anni, quindi è adatto anche a chi ne ha 60, 65 o più.'),
         ('Devo avere esperienza?', 'No. È una ginnastica dolce con ritmi adatti a chi riparte, e l&rsquo;istruttrice adatta gli esercizi a chi ha davanti.'),
         ('Quando si svolge il corso?', 'Il martedì e il giovedì dalle 9.30 alle 10.30, con Donatella Vecchioni.'),
         ('Serve il certificato medico?', 'Sì, per iscriversi serve il certificato medico non agonistico. Se hai una patologia o segui una terapia, parlane con il tuo medico prima di iniziare.'),
         ('Posso provare gratis?', 'Sì, la prima lezione è gratuita e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.')],
    related=['certificato-medico-palestra', 'ginnastica-posturale-a-cosa-serve', 'come-scegliere-una-palestra', 'prima-lezione-cosa-portare'],
)

# ---------------------------------------------------------------- CERTIFICATO
GUIDES['certificato-medico-palestra'] = dict(
    title='Certificato medico per la palestra: serve? Guida | MedusA Gym',
    crumb='Certificato medico per la palestra',
    desc='Certificato medico per la palestra: quando serve, differenza tra non agonistico e agonistico, chi lo rilascia, quanto dura e cosa chiediamo a MedusA Gym.',
    tag='Documenti', card_tag='Documenti',
    card_title='Certificato medico per la palestra: serve?',
    card_desc='Non agonistico e agonistico, chi lo rilascia, quanto dura e cosa chiediamo da noi.',
    eyebrow='Guide &middot; Documenti',
    h1='Certificato medico <span class="o">per la palestra</span>', h1s='Quando serve, quale e come ottenerlo',
    lead='Certificato medico per la palestra: quando serve, differenza tra non agonistico e agonistico, chi lo rilascia, quanto dura e cosa chiediamo a MedusA Gym.',
    img='images/corsi/pesi-1.webp', imgsize=(1080, 1620),
    alt='Atleta si allena al pulley nella sala pesi della MedusA Gym',
    wa='Ciao MedusA Gym! Ho una domanda sul certificato medico per iscrivermi.',
    tldr='A MedusA Gym per iscriverti serve il certificato medico non agonistico; per le gare quello medico-sportivo agonistico. In generale, per la sola attività ludico-motoria in palestra la legge non lo impone, ma palestre e associazioni possono richiederlo. Chiedi sempre cosa chiede la struttura.',
    body='''
<h2>Serve per forza?</h2>
<p>Dipende da dove ti iscrivi. Secondo le fonti che abbiamo consultato (tra cui <a href="https://www.altroconsumo.it/salute/dal-medico/news/certificato-medico" target="_blank" rel="noopener">Altroconsumo</a>), per frequentare una palestra a livello ludico-motorio la legge non impone il certificato, ma le palestre e le associazioni sportive possono richiederlo, per esempio per ragioni assicurative o di tesseramento. Per questo la regola da seguire è quella della struttura in cui ti iscrivi.</p>

<h2>Non agonistico e agonistico</h2>
<h3>Certificato non agonistico</h3>
<p>È il certificato per chi si allena senza gareggiare. Di solito lo rilascia il medico di famiglia o un medico dello sport, dopo una visita con anamnesi, misurazione della pressione ed elettrocardiogramma a riposo. Ha validità di un anno dalla data di rilascio.</p>
<h3>Certificato medico-sportivo agonistico</h3>
<p>Serve a chi partecipa a gare. Lo rilascia solo un medico specialista in medicina dello sport, con esami più completi, per esempio l&rsquo;elettrocardiogramma sotto sforzo.</p>
<p>Quanto costa? Il prezzo varia molto da medico a medico e da regione a regione: Altroconsumo indica una media intorno ai 40 euro per il non agonistico, a cui può aggiungersi il costo dell&rsquo;elettrocardiogramma.</p>

<h2>Cosa chiediamo a MedusA Gym</h2>
<ul>
<li>Per iscriverti serve il <b>certificato medico non agonistico</b>. Tutti gli iscritti hanno la tessera base ASI, come spieghiamo nella pagina <a href="../abbonamenti.html">abbonamenti</a>.</li>
<li>Per le <b>gare</b> serve il certificato medico-sportivo agonistico. Per sparring e gare di kickboxing serve anche la tessera Federkombat, con il <a href="../team-last-round.html">Team Last Round</a>.</li>
<li>Per la <b>prova gratuita</b> parlane con noi quando prenoti: ti diciamo cosa portare.</li>
</ul>
<p>Se hai una patologia o segui una terapia, parlane con il tuo medico prima di iniziare. Vale anche per il corso <a href="../corsi/active-senior.html">Active Senior</a> e per la <a href="../corsi/ginnastica-posturale.html">ginnastica posturale</a>.</p>

<h2>Come ottenerlo in pratica</h2>
<ol>
<li>Prenota la visita dal medico di famiglia o da un medico dello sport.</li>
<li>Porta con te eventuali esami già fatti e l&rsquo;elenco di farmaci e problemi di salute.</li>
<li>Consegnaci il certificato quando ti iscrivi: ti aiutiamo noi a capire quale ti serve.</li>
</ol>
<p class="note">Questa guida è informativa e non sostituisce il parere del medico. Le regole possono cambiare: per la normativa aggiornata chiedi al tuo medico o a un centro di medicina dello sport.</p>

<h2>Prima di iscriverti</h2>
<p>Se stai ancora scegliendo, leggi <a href="come-scegliere-una-palestra.html">come scegliere una palestra</a> e la lista di <a href="prima-lezione-cosa-portare.html">cosa portare alla prima lezione</a>.</p>''',
    faq=[('Serve il certificato medico per iscriversi a MedusA Gym?', 'Sì, per iscriverti serve il certificato medico non agonistico. Per le gare serve quello medico-sportivo agonistico.'),
         ('Chi può rilasciare il certificato non agonistico?', 'Di solito il medico di famiglia o un medico dello sport. Il certificato agonistico lo rilascia solo un medico specialista in medicina dello sport.'),
         ('Quanto dura il certificato non agonistico?', 'Un anno dalla data di rilascio, secondo quanto riporta Altroconsumo.'),
         ('Serve il certificato per la prova gratuita?', 'Parlane con noi quando prenoti: ti diciamo cosa portare.'),
         ('La legge obbliga ad avere il certificato per andare in palestra?', 'Per la sola attività ludico-motoria in palestra le fonti consultate dicono di no, ma palestre e associazioni possono chiederlo. Per questo vale la regola della struttura a cui ti iscrivi.')],
    related=['come-scegliere-una-palestra', 'prima-lezione-cosa-portare', 'ginnastica-dolce-over-60-roma', 'ginnastica-posturale-a-cosa-serve'],
)


def card(slug):
    if slug in GUIDES:
        g = GUIDES[slug]
        return (g['card_tag'], g['card_title'], g['card_desc'])
    return EXIST_CARDS[slug]


def load_existing_cards():
    idx = open(os.path.join(GD, 'index.html'), encoding='utf-8').read()
    out = {}
    for m in re.finditer(r'<a class="guide" href="([a-z0-9-]+)\.html"><small>(.*?)</small><h3>(.*?)</h3><p>(.*?)</p></a>', idx, flags=re.S):
        out[m.group(1)] = (m.group(2), m.group(3), m.group(4))
    return out


EXIST_CARDS = load_existing_cards()


def build(slug, g):
    url = BASE + 'guide/' + slug + '.html'
    imgurl = BASE + g['img']
    t = SKEL
    ttl = esc(plain(g['title']))
    dsc = esc(plain(g['desc']))
    t = re.sub(r'<title>.*?</title>', lambda m: '<title>%s</title>' % ttl, t, count=1, flags=re.S)
    t = re.sub(r'(<meta name="description" content=")[^"]*', lambda m: m.group(1) + dsc, t, count=1)
    t = re.sub(r'(<link rel="canonical" href=")[^"]*', lambda m: m.group(1) + url, t, count=1)
    t = re.sub(r'(<meta property="og:title" content=")[^"]*', lambda m: m.group(1) + ttl, t, count=1)
    t = re.sub(r'(<meta property="og:description" content=")[^"]*', lambda m: m.group(1) + dsc, t, count=1)
    t = re.sub(r'(<meta property="og:url" content=")[^"]*', lambda m: m.group(1) + url, t, count=1)
    t = re.sub(r'(<meta property="og:image" content=")[^"]*', lambda m: m.group(1) + imgurl, t, count=1)
    # JSON-LD
    m = re.search(r'(<script type="application/ld\+json">\s*)(.*?)(</script>)', t, flags=re.S)
    j = json.loads(m.group(2))
    for n in j['@graph']:
        ty = n['@type']
        if ty == 'WebPage':
            n.update({'@id': url + '#webpage', 'url': url, 'name': plain(g['title']), 'description': plain(g['desc']),
                      'primaryImageOfPage': imgurl, 'breadcrumb': {'@id': url + '#breadcrumb'}})
        elif ty == 'BreadcrumbList':
            n['@id'] = url + '#breadcrumb'
            n['itemListElement'][2].update({'name': plain(g['crumb']), 'item': url})
        elif ty == 'FAQPage':
            n['@id'] = url + '#faq'
            n['mainEntity'] = [{'@type': 'Question', 'name': plain(q), 'acceptedAnswer': {'@type': 'Answer', 'text': plain(a)}} for q, a in g['faq']]
        elif ty == 'Article':
            n.update({'@id': url + '#articolo', 'headline': plain(g['crumb']), 'description': plain(g['desc']), 'image': imgurl,
                      'datePublished': TODAY, 'dateModified': TODAY, 'mainEntityOfPage': {'@id': url + '#webpage'}})
            if 'about' in n and isinstance(n['about'], dict) and '@id' not in n['about']:
                n['about']['name'] = plain(g['crumb'])
    # restore wp links that referenced old url inside nodes
    js = json.dumps(j, ensure_ascii=False, indent=1)
    t = t[:m.start()] + m.group(1) + js + '\n' + m.group(3) + t[m.end():]
    # hero
    hero_old = re.search(r'<nav class="crumbs".*?</figure>', t, flags=re.S)
    w, h = g['imgsize']
    hero = ('<nav class="crumbs" aria-label="Percorso"><a href="../index.html">MedusA Gym</a> / <a href="../guide/">Guide</a> / %s</nav>\n'
            '      <p class="eyebrow">%s</p>\n'
            '      <h1>%s<small>%s</small></h1>\n'
            '      <p class="lead">%s</p>\n'
            '      <div class="cta-row">\n'
            '        <a class="btn btn-g" href="#prova">Prenota la prova gratuita &#8594;</a>\n'
            '        <a class="btn btn-o" href="#guida">Leggi la guida</a>\n'
            '      </div>\n'
            '      \n'
            '    </div>\n'
            '    <figure class="hero-ph">\n'
            '      <img src="../%s" alt="%s" fetchpriority="high" width="%d" height="%d">\n'
            '      <figcaption class="hero-tag"><span>Le guide<br>di MedusA</span><em>Via Quinto Sertorio 24<br>Roma Cinecitt&agrave;</em></figcaption>\n'
            '    </figure>') % (g['crumb'].replace('&', '&amp;'), g['eyebrow'], g['h1'], g['h1s'], g['lead'], g['img'], esc(g['alt']), w, h)
    t = t[:hero_old.start()] + hero + t[hero_old.end():]
    # article
    art = re.search(r'<article class="prose rv">.*?</article>', t, flags=re.S)
    article = ('<article class="prose rv">\n      <p class="tldr"><b>In breve.</b> %s</p>\n%s\n'
               '      <p class="meta">A cura dello staff di MedusA Gym, Roma Cinecitt&agrave;. Aggiornato il %s.</p>\n    </article>') % (g['tldr'], g['body'], TODAY_IT)
    t = t[:art.start()] + article + t[art.end():]
    # altre guide
    rel = ''.join('<a class="guide" href="%s.html"><small>%s</small><h3>%s</h3><p>%s</p></a>' % ((s,) + card(s)) for s in g['related'])
    t = re.sub(r'(<div class="guides rv">).*?(</div>\s*</div>\s*</section>\s*<section class="blk" id="faq">)', lambda m: m.group(1) + rel + m.group(2), t, count=1, flags=re.S)
    # faq
    fq = ''.join('<details class="fq"><summary><h3>%s</h3></summary><div class="fq-a"><p>%s</p></div></details>' % (q, a) for q, a in g['faq'])
    t = re.sub(r'(<div class="rv" style="margin-top:1\.6rem">\s*).*?(\s*<p class="note" style="margin-top:1\.4rem">)', lambda m: m.group(1) + fq + m.group(2), t, count=1, flags=re.S)
    # whatsapp text
    t = re.sub(r'https://wa\.me/393920708111\?text=[^"]*', lambda m: 'https://wa.me/393920708111?text=' + __import__('urllib.parse', fromlist=['quote']).quote(g['wa'], safe=''), t, count=1)
    open(os.path.join(GD, slug + '.html'), 'w', encoding='utf-8').write(t)
    return url


def update_index():
    p = os.path.join(GD, 'index.html')
    idx = open(p, encoding='utf-8').read()
    for slug in GUIDES:
        if 'href="%s.html"><small>' % slug in idx:
            continue
        tag, title, desc = card(slug)
        c = '<a class="guide" href="%s.html"><small>%s</small><h3>%s</h3><p>%s</p></a>' % (slug, tag, title, desc)
        k = '<a class="guide" href="../domande-frequenti.html">'
        if k in idx:
            idx = idx.replace(k, c + k, 1)
        else:
            i = idx.index('</div>', idx.index('<div class="guides rv">'))
            idx = idx[:i] + c + idx[i:]
        # ItemList
        m = re.search(r'("@type": "ItemList".*?"itemListElement": \[)(.*?)(\n\s*\]\s*\})', idx, flags=re.S)
        if m:
            n = len(re.findall(r'"@type": "ListItem"', m.group(2))) + 1
            item = ',\n    {\n     "@type": "ListItem",\n     "position": %d,\n     "url": "%sguide/%s.html",\n     "name": %s\n    }' % (n, BASE, slug, json.dumps(plain(title), ensure_ascii=False))
            idx = idx[:m.end(2)] + item + idx[m.end(2):]
    open(p, 'w', encoding='utf-8').write(idx)


def main():
    for s, g in GUIDES.items():
        print('ok', build(s, g))
    update_index()


if __name__ == '__main__':
    main()
