#!/usr/bin/env python3
"""Genera le pagine pilastro/zona del sito partendo dallo scheletro di palestra-principianti.html.
Uso:  python3 tools/build_pillars.py   (poi rilanciare tools/build_md.py)
Le pagine generate stanno nella radice di "medusa-gym 2/". I contenuti sono nei dict PAGES qui sotto.
"""
import html as H
import json
import os
import re

SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'medusa-gym 2')
BASE = 'https://www.medusagym.it/'
SKEL = open(os.path.join(SITE, 'palestra-principianti.html'), encoding='utf-8').read()

AREAS = ["Cinecittà", "Don Bosco", "Quadraro", "Appio Claudio", "Tuscolano", "Via Tuscolana", "Lamaro",
         "Cinecittà Est", "Anagnina", "Romanina", "Arco di Travertino", "Roma"]

WA = 'https://wa.me/393920708111?text='


def wa(msg):
    from urllib.parse import quote
    return WA + quote(msg, safe='')


def e(t):
    """testo semplice -> HTML con entita (come il resto del sito)"""
    return H.escape(t, quote=False).encode('ascii', 'xmlcharrefreplace').decode()


def plain(t):
    return re.sub(r'<[^>]+>', '', H.unescape(t)).strip()


def faq_html(faqs):
    out = ''
    for q, a in faqs:
        out += f'<details class="fq"><summary><h3>{q}</h3></summary><div class="fq-a"><p>{a}</p></div></details>'
    return out



RELATED = {
    'palestra-tuscolana.html': [('palestra-don-bosco.html', 'Palestra vicino a Don Bosco'), ('palestra-pausa-pranzo.html', 'Palestra in pausa pranzo'), ('palestra-aperta-sabato.html', 'Palestra aperta il sabato'), ('personal-training.html', 'Personal training')],
    'palestra-don-bosco.html': [('palestra-tuscolana.html', 'Palestra Tuscolana'), ('palestra-spogliatoi-docce.html', 'Spogliatoi e docce'), ('palestra-ragazzi.html', 'Palestra per ragazzi'), ('palestra-pausa-pranzo.html', 'Palestra in pausa pranzo')],
    'palestra-pausa-pranzo.html': [('palestra-spogliatoi-docce.html', 'Spogliatoi e docce'), ('personal-training.html', 'Personal training'), ('palestra-tuscolana.html', 'Palestra Tuscolana'), ('palestra-principianti.html', 'Palestra per principianti')],
    'preparazione-atletica.html': [('personal-training.html', 'Personal training'), ('corsi/functional-training.html', 'Functional training'), ('corsi/kickboxing.html', 'Kickboxing'), ('palestra-ragazzi.html', 'Palestra per ragazzi')],
    'personal-training.html': [('preparazione-atletica.html', 'Preparazione atletica'), ('palestra-principianti.html', 'Palestra per principianti'), ('palestra-pausa-pranzo.html', 'Palestra in pausa pranzo'), ('corsi/sala-pesi.html', 'Sala pesi con scheda gratuita')],
    'palestra-aperta-sabato.html': [('palestra-pausa-pranzo.html', 'Palestra in pausa pranzo'), ('palestra-famiglie.html', 'Palestra per famiglie'), ('palestra-ragazzi.html', 'Palestra per ragazzi'), ('palestra-tuscolana.html', 'Palestra Tuscolana')],
    'palestra-ragazzi.html': [('corsi/kickboxing-ragazzi.html', 'Kickboxing Kids 9-14'), ('palestra-aperta-sabato.html', 'Palestra aperta il sabato'), ('palestra-don-bosco.html', 'Palestra vicino a Don Bosco'), ('palestra-famiglie.html', 'Palestra per famiglie')],
    'palestra-spogliatoi-docce.html': [('palestra-pausa-pranzo.html', 'Palestra in pausa pranzo'), ('palestra-aperta-sabato.html', 'Palestra aperta il sabato'), ('palestra-don-bosco.html', 'Palestra vicino a Don Bosco'), ('come-arrivare.html', 'Come arrivare')],
}


def related(slug):
    return ''.join('<a href="%s">%s</a>' % (h, t) for h, t in RELATED[slug])


def build(slug, p):
    url = BASE + slug
    title = p['title']
    desc = p['desc']
    faqs = p['faq']
    graph = [
        {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": title, "inLanguage": "it-IT",
         "isPartOf": {"@id": BASE + "#website"}, "about": {"@id": url + "#servizio"},
         "breadcrumb": {"@id": url + "#breadcrumb"}, "primaryImageOfPage": BASE + p['img']},
        {"@type": "Service", "@id": url + "#servizio", "name": p['service'], "serviceType": p['service'],
         "description": plain(desc), "provider": {"@id": BASE + "#palestra"}, "areaServed": AREAS,
         "image": [BASE + p['img']]},
        {"@type": "BreadcrumbList", "@id": url + "#breadcrumb", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "MedusA Gym", "item": BASE},
            {"@type": "ListItem", "position": 2, "name": p['crumb'], "item": url}]},
        {"@type": "FAQPage", "@id": url + "#faq", "mainEntity": [
            {"@type": "Question", "name": plain(q),
             "acceptedAnswer": {"@type": "Answer", "text": plain(a)}} for q, a in faqs]},
    ]
    ld = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, indent=1)

    # ---- head
    head = SKEL[:SKEL.index('<title>')]
    head += f'<title>{e(title)}</title>\n<meta name="description" content="{H.escape(desc)}">\n<meta name="theme-color" content="#0A0A0A">\n'
    head += f'<link rel="canonical" href="{url}">\n<meta property="og:type" content="website">\n<meta property="og:locale" content="it_IT">\n'
    head += f'<meta property="og:title" content="{H.escape(plain(p["og"]))}">\n<meta property="og:description" content="{H.escape(plain(p["ogdesc"]))}">\n'
    head += f'<meta property="og:url" content="{url}">\n<meta property="og:image" content="{BASE + p["img"]}">\n<meta name="twitter:card" content="summary_large_image">\n'
    tail_start = SKEL.index('<link rel="icon"')
    tail_end = SKEL.index('<script type="application/ld+json">')
    mid = SKEL[tail_start:tail_end]
    mid = '\n'.join(l for l in mid.split('\n') if 'rel="preload" as="image"' not in l)
    img_s = p['img'].replace('.webp', '-s.webp')
    if os.path.exists(os.path.join(SITE, img_s)):
        mid = mid.replace('<style>', f'<link rel="preload" as="image" href="{p["img"]}" imagesrcset="{img_s} 640w, {p["img"]} 1080w" imagesizes="(max-width:900px) 100vw, 45vw">\n<style>', 1)
    head += mid
    head += '<script type="application/ld+json">\n' + ld + '\n</script>\n</head>\n'

    # ---- body
    body_start = SKEL.index('<body')
    header = SKEL[body_start:SKEL.index('<main>')]
    img_tag = f'<img src="{p["img"]}"'
    if os.path.exists(os.path.join(SITE, img_s)):
        img_tag += f' srcset="{img_s} 640w, {p["img"]} 1080w" sizes="(max-width:900px) 100vw, 45vw"'
    from PIL import Image
    W, Hh = Image.open(os.path.join(SITE, p['img'])).size
    img_tag += f' alt="{H.escape(p["alt"])}" fetchpriority="high" width="{W}" height="{Hh}">'
    facts = ''.join(f'<li>{x}</li>' for x in p['facts'])
    main = f'''<main>
<section class="hero">
  <div class="wrap">
    <div>
      <nav class="crumbs" aria-label="Percorso"><a href="index.html">MedusA Gym</a> / {e(p['crumb'])}</nav>
      <p class="eyebrow">{p['eyebrow']}</p>
      <h1>{p['h1']}<small>{p['h1s']}</small></h1>
      <p class="lead">{p['lead']}</p>
      <div class="cta-row">
        <a class="btn btn-g" href="#prova">Prenota la prova gratuita &#8594;</a>
        <a class="btn btn-o" href="#{p['anchor']}">{p['anchor_label']}</a>
      </div>
      <ul class="facts" aria-label="In breve">{facts}</ul>
    </div>
    <figure class="hero-ph">
      {img_tag}
      <figcaption class="hero-tag"><span>{p['tag']}</span><em>Via Quinto Sertorio 24<br>Roma Cinecitt&agrave;</em></figcaption>
    </figure>
  </div>
</section>
'''
    for sec in p['sections']:
        main += sec + '\n'
    main += f'''<section class="blk" id="faq">
  <div class="wrap faq-wrap">
    <div class="rv">
      <p class="eyebrow">Domande</p>
      <h2>Le domande pi&ugrave; frequenti</h2>
    </div>
    <div class="rv" style="margin-top:1.6rem">
      {faq_html(faqs)}
      <p class="note" style="margin-top:1.4rem">Altre domande su iscrizione, orari e pagamenti? <a href="domande-frequenti.html">Leggi tutte le domande frequenti</a>. Prima volta in palestra? <a href="palestra-principianti.html">Parti da qui</a>.</p>
    </div>
  </div>
</section>
<section class="blk" style="padding-top:1rem">
  <div class="wrap">
    <div class="final rv" id="prova" style="scroll-margin-top:6.5rem">
      <p class="eyebrow">Il primo passo</p>
      <h2>La prima lezione &egrave; gratis</h2>
      <p>Vale per tutti i corsi e va prenotata, cos&igrave; ti aspettiamo con l&rsquo;istruttore giusto. Pi&ugrave; che una palestra, una famiglia.</p>
      <div class="cta-row">
        <a class="btn btn-g" href="{wa(p['wa'])}" target="_blank" rel="noopener">Prenota su WhatsApp &#8594;</a>
        <a class="btn btn-o" href="index.html#prova">Compila il modulo</a>
      </div>
    </div>
    <div class="rv" style="margin-top:3rem">
      <p class="eyebrow">Potrebbe interessarti</p>
      <nav class="others" aria-label="Pagine correlate">{related(slug)}</nav>
    </div>
    <div class="rv" style="margin-top:3rem">
      <p class="eyebrow">I corsi</p>
      <nav class="others" aria-label="Corsi"><a href="corsi/kickboxing.html">Kickboxing</a><a href="corsi/pugilato.html">Pugilato</a><a href="corsi/autodifesa-path.html">Autodifesa PATH</a><a href="corsi/kickboxing-ragazzi.html">Kickboxing Kids 9-14</a><a href="corsi/functional-training.html">Functional Training</a><a href="corsi/calisthenics.html">Calisthenics</a><a href="corsi/ginnastica-posturale.html">Ginnastica Posturale</a><a href="corsi/active-senior.html">Active Senior</a><a href="corsi/sala-pesi.html">Sala Pesi</a></nav>
    </div>
  </div>
</section>
</main>
'''
    after = SKEL[SKEL.index('</main>') + len('</main>'):]
    out = head + header + main + after
    out = out.replace('Scopri MedusA', 'Scopri MedusA')
    open(os.path.join(SITE, slug), 'w', encoding='utf-8').write(out)
    return url


def cards(items, cls='cards'):
    s = f'<div class="{cls}">'
    for n, t, d in items:
        s += f'<div class="card"><span class="n">{n}</span><h3>{t}</h3><p>{d}</p></div>'
    return s + '</div>'


def guides(items):
    s = '<div class="guides rv">'
    for href, small, t, d in items:
        s += f'<a class="guide" href="{href}"><small>{small}</small><h3>{t}</h3><p>{d}</p></a>'
    return s + '</div>'


def steps(items):
    s = '<ol class="steps4 rv">'
    for t, d in items:
        s += f'<li><h3>{t}</h3><p>{d}</p></li>'
    return s + '</ol>'


def chk(items):
    return '<ul class="chk">' + ''.join(f'<li><b>{b}</b> {t}</li>' for b, t in items) + '</ul>'


def section(sid, eyebrow, h2, sub, inner):
    sub_html = f'<p class="sub">{sub}</p>' if sub else ''
    return f'''<section class="blk" id="{sid}">
  <div class="wrap">
    <div class="rv">
      <p class="eyebrow">{eyebrow}</p>
      <h2>{h2}</h2>
      {sub_html}
    </div>
    {inner}
  </div>
</section>'''


def split(left_eyebrow, left_h2, left_inner, right_eyebrow, right_h2, right_inner, sid):
    return f'''<section class="blk" id="{sid}">
  <div class="wrap">
    <div class="split">
      <div class="rv"><p class="eyebrow">{left_eyebrow}</p><h2>{left_h2}</h2>{left_inner}</div>
      <div class="rv"><p class="eyebrow">{right_eyebrow}</p><h2>{right_h2}</h2>{right_inner}</div>
    </div>
  </div>
</section>'''


PAGES = {}

# ------------------------------------------------------------------ TUSCOLANA
PAGES['palestra-tuscolana.html'] = dict(
    title='Palestra Tuscolana Roma | Sala Pesi, Kickboxing, Functional | MedusA Gym',
    desc='Palestra vicino a Via Tuscolana, Roma: a 5 minuti dalla metro A Giulio Agricola. Sala pesi con scheda gratuita, kickboxing, pugilato, functional, calisthenics. Prova gratuita.',
    og='Palestra Tuscolana Roma | MedusA Gym', ogdesc='Sala pesi, kickboxing, pugilato, functional e calisthenics a pochi minuti da Via Tuscolana. Prima lezione gratuita.',
    service='Palestra zona Tuscolana, Roma', crumb='Palestra Tuscolana',
    img='images/corsi/pesi-1.webp', alt='Atleta si allena al pulley nella sala pesi della MedusA Gym, palestra zona Tuscolana a Roma',
    eyebrow='Zona Tuscolana &middot; Roma',
    h1='Palestra <span class="o">Tuscolana</span>', h1s='A pochi minuti da Via Tuscolana e dalla metro A',
    lead='Cerchi una palestra nella zona della Tuscolana? MedusA Gym &egrave; in Via Quinto Sertorio 24, a Cinecitt&agrave;: sala pesi con scheda gratuita, sport da combattimento, functional, calisthenics e ginnastica posturale, tutto nello stesso posto. La metro A ti porta qui senza cambi.',
    facts=['<b>Metro A</b> Giulio Agricola, 5 min', 'Subaugusta, 6 min', 'Lun-Ven 8-22', 'Sab 9-17'],
    tag='Sotto casa, se abiti<br>sulla Tuscolana', anchor='arrivare', anchor_label='Come arrivare',
    wa='Ciao MedusA Gym! Abito in zona Tuscolana e vorrei prenotare una prova gratuita.',
    sections=[
        section('arrivare', 'Come arrivare', 'Dalla Tuscolana a MedusA Gym',
                'Siamo a poca distanza dalla Via Tuscolana, ben collegati con la metro A, i bus e anche in auto.',
                steps([('Metro A', 'Dalla fermata Cinecitt&agrave; (in Via Tuscolana) &egrave; una fermata fino a Subaugusta, poi pochi passi. A piedi sono circa 1,2 km.'),
                       ('Da Lucio Sestio e Numidio Quadrato', 'Una o due fermate fino a Giulio Agricola, la pi&ugrave; vicina alla palestra: circa 5 minuti a piedi.'),
                       ('Bus', 'Nelle vie intorno passano le linee 451, 520, 548, 557 e 590, con fermate a pochi minuti a piedi.'),
                       ('Auto', 'Si parcheggia in tutta la zona intorno alla palestra e ci sono numerosi garage nelle vicinanze.')]) +
                '<p class="note rv">Indicazioni dettagliate, quartiere per quartiere, nella pagina <a href="come-arrivare.html">come arrivare</a>.</p>'),
        section('cosa-trovi', 'Cosa trovi', 'Una palestra completa, non solo fitness',
                'Dalla sala pesi al ring: scegli quello che ti serve, oppure combina pi&ugrave; discipline con la formula OPEN.',
                guides([('corsi/sala-pesi.html', 'Sala pesi', 'Scheda gratuita su misura', 'Macchine, bilancieri e rack, aperta dalle 8 alle 22.'),
                        ('corsi/kickboxing.html', 'Kickboxing', 'Dal primo giorno al ring', 'Lezioni di mattina, pausa pranzo e sera. Sparring facoltativo.'),
                        ('corsi/pugilato.html', 'Pugilato', 'Tecnica e fiato', 'Con un tecnico FPI, anche di sabato.'),
                        ('corsi/functional-training.html', 'Functional', 'Forza per la vita reale', 'Gruppi da massimo 15 persone, tutti i livelli.'),
                        ('corsi/calisthenics.html', 'Calisthenics', 'Dalla prima trazione alle skill', 'Gruppi base, avanzato e misto.'),
                        ('corsi/ginnastica-posturale.html', 'Posturale', 'Schiena e movimento', 'Valutazione iniziale e piccoli gruppi.')])),
        section('perche', 'Perch&eacute; noi', 'Perch&eacute; scegliere MedusA Gym',
                None,
                chk([('Recensioni vere.', '4,8 su 5 su Google, con oltre 100 recensioni dei soci.'),
                     ('Orari lunghi.', 'Dal luned&igrave; al venerd&igrave; dalle 8 alle 22, il sabato dalle 9 alle 17.'),
                     ('Prima provi.', 'La prima lezione &egrave; gratuita e senza impegno, poi scegli tra <a href="abbonamenti.html">ONE, OPEN e FAMILY</a>.'),
                     ('Spazi curati.', 'Spogliatoi separati uomo e donna, con docce e armadietti.'),
                     ('Un ambiente familiare.', 'Pi&ugrave; che una palestra, una famiglia: ti seguono sempre gli stessi istruttori.')])),
    ],
    faq=[('C&rsquo;&egrave; una palestra vicino a Via Tuscolana?', 'S&igrave;. MedusA Gym &egrave; in Via Quinto Sertorio 24, a Cinecitt&agrave;, a pochi minuti da Via Tuscolana: dalla fermata Cinecitt&agrave; della metro A &egrave; una fermata fino a Subaugusta.'),
         ('Qual &egrave; la fermata della metro pi&ugrave; vicina?', 'Giulio Agricola della metro A, a circa 5 minuti a piedi. Subaugusta &egrave; a circa 6 minuti.'),
         ('Che corsi ci sono nella palestra?', 'Sala pesi, kickboxing, pugilato, autodifesa PATH, functional training, calisthenics, ginnastica posturale e Active Senior, pi&ugrave; Kickboxing Kids 9-14.'),
         ('Si trova parcheggio?', 'S&igrave;, si parcheggia in tutta la zona intorno alla palestra e ci sono numerosi garage nelle vicinanze.'),
         ('Come posso provare la palestra?', 'La prima lezione &egrave; gratuita e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.')],
)

# ------------------------------------------------------------------ DON BOSCO
PAGES['palestra-don-bosco.html'] = dict(
    title='Palestra Don Bosco Roma | Boxe, Sala Pesi, Functional | MedusA Gym',
    desc='Palestra a Don Bosco e Cinecittà, Roma: sala pesi con scheda gratuita, kickboxing, pugilato, functional, calisthenics e posturale. Metro A Giulio Agricola a 5 minuti. Prova gratuita.',
    og='Palestra Don Bosco Roma | MedusA Gym', ogdesc='Sei di Don Bosco? Sala pesi, kickboxing, pugilato e functional a pochi passi da te. Prima lezione gratuita.',
    service='Palestra zona Don Bosco, Roma', crumb='Palestra Don Bosco',
    img='images/corsi/func-1.webp', alt='Donatella Vecchioni esegue uno squat con kettlebell durante il functional training alla MedusA Gym',
    eyebrow='Don Bosco &middot; Cinecitt&agrave; &middot; Roma',
    h1='Palestra <span class="o">Don Bosco</span>', h1s='Nel quartiere, a due passi da te',
    lead='Se abiti a Don Bosco la palestra &egrave; praticamente sotto casa: MedusA Gym &egrave; in Via Quinto Sertorio 24, nel quartiere Cinecitt&agrave;. Qui trovi sala pesi, sport da combattimento, functional, calisthenics e ginnastica posturale, con orari dal mattino alla sera.',
    facts=['Nel quartiere', '<b>Metro A</b> Giulio Agricola, 5 min', 'Lun-Ven 8-22', 'Prova gratuita'],
    tag='Sotto casa,<br>se sei di Don Bosco', anchor='corsi', anchor_label='Cosa puoi fare',
    wa='Ciao MedusA Gym! Abito a Don Bosco e vorrei prenotare una prova gratuita.',
    sections=[
        section('corsi', 'Cosa puoi fare', 'Allenarti vicino a casa, come vuoi tu',
                'Scegli una sola disciplina con la formula ONE, oppure tutte con la formula OPEN, sala pesi compresa.',
                guides([('corsi/sala-pesi.html', 'Sala pesi', 'La tua scheda, gratis', 'Per chi inizia e per chi spinge, dalle 8 alle 22.'),
                        ('corsi/kickboxing.html', 'Kickboxing', 'Tecnica, fiato, sfogo', 'Lezioni al mattino, in pausa pranzo e la sera.'),
                        ('corsi/pugilato.html', 'Pugilato', 'Boxe per tutti', 'Con un tecnico FPI, dal base all&rsquo;agonismo.'),
                        ('corsi/functional-training.html', 'Functional', 'Tutto il corpo', 'Gruppi da massimo 15, anche in pausa pranzo.'),
                        ('corsi/calisthenics.html', 'Calisthenics', 'Controllo del corpo', 'Dalle prime trazioni agli elementi avanzati.'),
                        ('corsi/active-senior.html', 'Active Senior', 'Ginnastica dolce over 55', 'Al mattino, con i tuoi ritmi.')])),
        section('arrivare', 'Come arrivare', 'Da Don Bosco, in pochi minuti',
                'Sei nel quartiere: puoi arrivare a piedi. Se preferisci i mezzi, la metro A &egrave; a un passo.',
                steps([('A piedi', 'Da Don Bosco e dal resto di Cinecitt&agrave; arrivi in palestra a piedi, senza pensare al parcheggio.'),
                       ('Metro A', 'Scendi a Giulio Agricola (circa 5 minuti a piedi) o a Subaugusta (circa 6).'),
                       ('Bus', 'Nelle vie intorno passano le linee 451, 520, 548, 557 e 590.'),
                       ('Auto', 'Si parcheggia in tutta la zona e ci sono numerosi garage nelle vicinanze.')]) +
                '<p class="note rv">Tutti i dettagli su <a href="come-arrivare.html">come arrivare</a>, con distanze da Cinecitt&agrave; Due, metro e Studios.</p>'),
        section('famiglia', 'Per tutta la famiglia', 'Una palestra dove entrano tutti',
                None,
                chk([('Famiglia.', 'La formula <a href="palestra-famiglie.html">FAMILY</a> vale per 2, 3 o 4 persone dello stesso nucleo, Kids compreso.'),
                     ('Ragazzi.', '<a href="corsi/kickboxing-ragazzi.html">Kickboxing Kids 9-14</a>, il marted&igrave; e il gioved&igrave;.'),
                     ('Over 55.', '<a href="corsi/active-senior.html">Active Senior</a>, ginnastica dolce con Donatella.'),
                     ('Donne.', 'Corsi e percorsi pensati anche per te: leggi <a href="sport-combattimento-donne.html">sport da combattimento per donne</a>.')])),
    ],
    faq=[('C&rsquo;&egrave; una palestra a Don Bosco?', 'MedusA Gym &egrave; in Via Quinto Sertorio 24, nel quartiere Cinecitt&agrave;, e serve Don Bosco: dal quartiere arrivi a piedi.'),
         ('Quali corsi posso fare vicino a Don Bosco?', 'Sala pesi, kickboxing, pugilato, autodifesa PATH, functional training, calisthenics, ginnastica posturale e Active Senior, pi&ugrave; Kickboxing Kids 9-14.'),
         ('Come arrivo dalla metro?', 'Con la metro A scendi a Giulio Agricola, a circa 5 minuti a piedi, oppure a Subaugusta, a circa 6.'),
         ('Ci sono orari comodi per chi lavora?', 'S&igrave;: la sala pesi &egrave; aperta dalle 8 alle 22 dal luned&igrave; al venerd&igrave; e ci sono lezioni anche in pausa pranzo e la sera. Il sabato siamo aperti dalle 9 alle 17.'),
         ('La prima lezione &egrave; gratuita?', 'S&igrave;, vale per tutti i corsi e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.')],
)

# ------------------------------------------------------------------ PAUSA PRANZO
PAGES['palestra-pausa-pranzo.html'] = dict(
    title='Palestra in Pausa Pranzo a Roma Cinecittà | MedusA Gym',
    desc='Palestra a Roma Cinecittà con lezioni in pausa pranzo: kickboxing 13.30, functional 13.30, pugilato 14.00. Sala pesi aperta dalle 8 alle 22. Prova gratuita.',
    og='Palestra in pausa pranzo a Roma Cinecittà | MedusA Gym', ogdesc='Kickboxing, functional e pugilato all&rsquo;ora di pranzo, sala pesi dalle 8 alle 22. Prima lezione gratuita.',
    service='Lezioni in pausa pranzo e orari flessibili', crumb='Palestra pausa pranzo',
    img='images/corsi/func-2.webp', alt='Allieva esegue il superman sul tappeto durante il functional training',
    eyebrow='Orari comodi &middot; Roma Cinecitt&agrave;',
    h1='Palestra in <span class="o">pausa pranzo</span>', h1s='Un&rsquo;ora per te, in mezzo alla giornata',
    lead='Poco tempo e tanto da fare? A MedusA Gym puoi allenarti anche tra le 13.30 e le 15.00, con lezioni guidate di kickboxing, functional e pugilato, e hai la sala pesi aperta dalle 8 alle 22. Scegli l&rsquo;ora che ti sta meglio e prova gratis.',
    facts=['<b>Pausa pranzo</b> 13.30-15.00', 'Sala pesi 8-22', 'Mattina dalle 8.30', 'Sabato 9-17'],
    tag='Un&rsquo;ora sola,<br>fatta bene', anchor='orari', anchor_label='Vedi gli orari',
    wa='Ciao MedusA Gym! Vorrei prenotare una prova gratuita in pausa pranzo.',
    sections=[
        section('orari', 'Gli orari', 'Cosa c&rsquo;&egrave; tra le 13.30 e le 15.00',
                'Le lezioni di gruppo che cadono in pausa pranzo, con istruttore e per tutti i livelli.',
                cards([('Lun &middot; Mer &middot; Ven', 'Kickboxing 13.30-14.30', 'Lezione di un&rsquo;ora, con tecnica e condizionamento. <a href="corsi/kickboxing.html">Scopri la kickboxing</a>.'),
                       ('Mar &middot; Gio', 'Functional 13.30-14.30', 'Con Donatella, gruppi da massimo 15 persone. <a href="corsi/functional-training.html">Scopri il functional</a>.'),
                       ('Mar &middot; Gio', 'Pugilato 14.00-15.00', 'Tecnica e fiato con un tecnico FPI. <a href="corsi/pugilato.html">Scopri il pugilato</a>.'),
                       ('Tutti i giorni', 'Sala pesi', 'Aperta dalle 8 alle 22 (sabato 9-17): vieni quando vuoi, con la tua scheda. <a href="corsi/sala-pesi.html">Scopri la sala pesi</a>.')], 'cards') +
                '<p class="note rv">Gli orari possono variare: li trovi sempre aggiornati nella <a href="index.html#orari">tabella corsi</a>.</p>'),
        section('mattina-sera', 'Prima o dopo il lavoro', 'Non puoi a pranzo? Hai altre fasce',
                None,
                chk([('Mattina presto.', 'Pugilato il luned&igrave;, mercoled&igrave; e venerd&igrave; dalle 8.30 alle 9.30; sala pesi dalle 8.'),
                     ('Met&agrave; mattina.', 'Ginnastica posturale e Active Senior, nelle fasce del mattino.'),
                     ('Sera.', 'Kickboxing alle 18.00 e alle 20.30, functional alle 19.15, calisthenics e autodifesa PATH nelle serate dei giorni feriali.'),
                     ('Sabato.', 'Palestra aperta dalle 9 alle 17, pugilato dalle 14 alle 16.')])),
        section('come-fare', 'Come fare', 'Provare &egrave; semplice',
                'La prima lezione &egrave; gratuita e va prenotata, cos&igrave; ti aspettiamo con tutto pronto.',
                steps([('Scegli l&rsquo;ora', 'Guarda la tabella e scegli il corso che cade nella tua pausa.'),
                       ('Prenota', 'Scrivici su WhatsApp o compila il modulo: ti confermiamo giorno e orario.'),
                       ('Porta poco', 'Abiti comodi, scarpe pulite, asciugamano e acqua. L&rsquo;attrezzatura delle prime lezioni te la diamo noi.'),
                       ('Doccia e via', 'Spogliatoi separati con docce e armadietti: porta un lucchetto e un asciugamano.')])),
    ],
    faq=[('Si pu&ograve; fare palestra in pausa pranzo a Cinecitt&agrave;?', 'S&igrave;. A MedusA Gym ci sono lezioni alle 13.30 di kickboxing (luned&igrave;, mercoled&igrave; e venerd&igrave;) e di functional (marted&igrave; e gioved&igrave;), pi&ugrave; il pugilato alle 14.00 il marted&igrave; e il gioved&igrave;. La sala pesi &egrave; aperta dalle 8 alle 22.'),
         ('Basta un&rsquo;ora per allenarsi bene?', 'S&igrave;: le lezioni durano un&rsquo;ora e sono guidate dall&rsquo;istruttore, cos&igrave; usi bene il tempo che hai.'),
         ('Posso farmi la doccia?', 'S&igrave;, gli spogliatoi sono separati uomo e donna, con docce e armadietti. Porta lucchetto e asciugamano.'),
         ('Sono principiante: posso venire in pausa pranzo?', 'S&igrave;, ogni corso parte dal livello base e l&rsquo;istruttore adatta la lezione al gruppo.'),
         ('Come prenoto la prova gratuita?', 'Su WhatsApp al 392 070 8111 o dal modulo sul sito: scegli il corso e l&rsquo;orario che preferisci.')],
)

# ------------------------------------------------------------------ PREPARAZIONE ATLETICA
PAGES['preparazione-atletica.html'] = dict(
    title='Preparazione Atletica a Roma Cinecittà | MedusA Gym',
    desc='Preparazione atletica a Roma Cinecittà: forza esplosiva, resistenza, agilità e coordinazione, con kickboxing, pugilato, functional e sala pesi. Prima lezione gratuita.',
    og='Preparazione atletica a Roma Cinecittà | MedusA Gym', ogdesc='Forza, fiato, agilit&agrave; e coordinazione con i nostri istruttori. Prima lezione gratuita.',
    service='Preparazione atletica', crumb='Preparazione atletica',
    img='images/corsi/kick-prep-manubri.webp', alt='Atleta di kickboxing solleva i dischi a due mani durante la preparazione atletica alla MedusA Gym',
    eyebrow='Condizionamento &middot; Roma Cinecitt&agrave;',
    h1='Preparazione <span class="o">atletica</span>', h1s='Forza, fiato e agilit&agrave;: il corpo che serve',
    lead='La preparazione atletica &egrave; il lavoro che rende il corpo pronto: forza esplosiva, resistenza, agilit&agrave; e coordinazione. A MedusA Gym la alleni dentro le lezioni di kickboxing e pugilato, in sala pesi e nel functional training, seguito da istruttori qualificati.',
    facts=['Forza esplosiva', 'Resistenza', 'Agilit&agrave; e coordinazione', 'Prova gratuita'],
    tag='Prima di tutto,<br>il corpo', anchor='cosa-si-allena', anchor_label='Cosa si allena',
    wa='Ciao MedusA Gym! Vorrei prenotare una prova gratuita e sapere come lavorate sulla preparazione atletica.',
    sections=[
        section('cosa-si-allena', 'Cosa si allena', 'Quattro qualit&agrave; fisiche, un solo corpo',
                'Si lavora su tutto insieme, perch&eacute; nello sport e nella vita non si usa una cosa alla volta.',
                cards([('01', 'Forza esplosiva', 'Potenza nei colpi e negli scatti, con sala pesi e lavoro a corpo libero.'),
                       ('02', 'Resistenza', 'Fiato aerobico e anaerobico per reggere il ritmo di una ripresa o di una lezione intera.'),
                       ('03', 'Agilit&agrave;', 'Spostamenti, cambi di direzione e leggerezza sulle gambe.'),
                       ('04', 'Coordinazione', 'Muoversi bene con braccia, gambe e testa nello stesso momento.')])),
        split('Dove si fa', 'Quattro strade, un obiettivo',
              chk([('Kickboxing.', 'Condizionamento e preparazione atletica degli agonisti con il Team Last Round, guidati dall&rsquo;Head Coach <a href="lucio-pedana.html">Lucio Pedana</a>.'),
                   ('Pugilato.', 'Con <a href="andrea-durazzi.html">Andrea Durazzi</a> la preparazione atletica va insieme a tecnica e tattica.'),
                   ('Functional training.', 'Forza e condizione con kettlebell, bilanciere e corpo libero, in gruppi da massimo 15.'),
                   ('Sala pesi.', 'Forza e prevenzione con la tua <a href="corsi/sala-pesi.html">scheda gratuita</a>.')]),
              'Per chi &egrave;', 'Per chi combatte e per chi vuole stare meglio',
              chk([('Chi combatte.', 'Se fai kickboxing o pugilato, il corpo fa la differenza tra una ripresa e l&rsquo;altra.'),
                   ('Chi vuole il fisico di un atleta.', 'Senza dover fare gare: il percorso lo scegli tu.'),
                   ('Chi riparte.', 'Si parte dal tuo livello, con esercizi pi&ugrave; facili o pi&ugrave; difficili.'),
                   ('Chi vuole prevenire.', 'Forza e mobilit&agrave; per ridurre il rischio di fastidi e infortuni.')]), 'dove'),
        section('come-lavoriamo', 'Come lavoriamo', 'Dalla valutazione alla progressione',
                None,
                steps([('Parli con noi', 'Ci racconti obiettivo, sport e livello di partenza.'),
                       ('Provi', 'La prima lezione &egrave; gratuita: ti alleni con il gruppo e con l&rsquo;istruttore giusto.'),
                       ('Scegli il percorso', 'Combatti, fai condizione o costruisci forza: la formula la decidi tu, anche <a href="abbonamenti.html">OPEN</a> per fare tutto.'),
                       ('Progredisci', 'Gli esercizi si adattano ai tuoi progressi, con la scheda aggiornata nel tempo.')])),
    ],
    faq=[('Cos&rsquo;&egrave; la preparazione atletica?', 'Il lavoro su forza, resistenza, agilit&agrave; e coordinazione che rende il corpo pronto per uno sport o per la vita di tutti i giorni.'),
         ('Devo fare gare?', 'No. Puoi allenarti da amatore, per la forma e per la testa, oppure prepararti per l&rsquo;attivit&agrave; agonistica: il percorso lo scegli tu.'),
         ('Posso fare solo preparazione atletica senza combattere?', 'La preparazione atletica &egrave; parte dei corsi di kickboxing e pugilato. Se vuoi lavorare su forza e condizione senza combattimento, puoi scegliere sala pesi e functional training.'),
         ('Chi segue la preparazione atletica?', 'Lucio Pedana guida la preparazione degli agonisti del Team Last Round, Andrea Durazzi la integra nel pugilato; Donatella Vecchioni segue il functional training.'),
         ('Serve esperienza per iniziare?', 'No. Ogni corso parte dal livello base e l&rsquo;istruttore adatta gli esercizi a chi ha davanti.')],
)

# ------------------------------------------------------------------ PERSONAL TRAINING
PAGES['personal-training.html'] = dict(
    title='Personal Training a Roma Cinecittà | MedusA Gym',
    desc='Personal training a Roma Cinecittà con istruttori qualificati: scheda gratuita in sala pesi e soluzioni PT su richiesta. Chiedi in segreteria, prima lezione gratuita.',
    og='Personal training a Roma Cinecittà | MedusA Gym', ogdesc='Qualcuno accanto a ogni serie: chiedi le soluzioni PT in segreteria. Prima lezione gratuita.',
    service='Personal training', crumb='Personal training',
    img='images/corsi/pesi-3.webp', alt='Allieva al pulley basso nella sala pesi della MedusA Gym durante un allenamento seguito',
    eyebrow='Allenamento seguito &middot; Roma Cinecitt&agrave;',
    h1='Personal <span class="o">training</span>', h1s='Qualcuno accanto a ogni serie',
    lead='Vuoi un percorso tutto tuo, con un istruttore che ti corregge e ti motiva? In sala pesi parti sempre con una scheda personalizzata gratuita e, se vuoi qualcuno accanto a ogni serie, puoi chiedere le soluzioni di personal training in segreteria.',
    facts=['Scheda gratuita', 'PT su richiesta', 'Istruttori qualificati', 'Prova gratuita'],
    tag='Su misura,<br>serie dopo serie', anchor='come-funziona', anchor_label='Come funziona',
    wa='Ciao MedusA Gym! Vorrei informazioni sul personal training e prenotare una prova gratuita.',
    sections=[
        section('come-funziona', 'Come funziona', 'Dal tuo obiettivo al tuo programma',
                'Il percorso parte sempre da te: quello che vuoi ottenere, il tuo livello, il tempo che hai.',
                cards([('01', 'Obiettivo', 'Ci dici cosa vuoi: forza, massa, forma, dimagrimento, benessere.'),
                       ('02', 'Scheda gratuita', 'In sala pesi l&rsquo;istruttore prepara un programma personalizzato.'),
                       ('03', 'Soluzioni PT', 'Se vuoi essere seguito serie per serie, chiedi le soluzioni di personal training.'),
                       ('04', 'Aggiornamenti', 'Il programma cresce con i tuoi progressi, nel tempo.')])),
        split('Chi ti segue', 'Istruttori con titoli veri',
              chk([('Andrea Durazzi.', 'Personal Trainer di 2&deg; livello dell&rsquo;Accademia Italiana Fitness (AIF) e istruttore di <a href="andrea-durazzi.html">pugilato</a>.'),
                   ('Donatella Vecchioni.', 'Tecnico FIPE fitness personal trainer, guida il <a href="donatella-vecchioni.html">functional</a> e l&rsquo;Active Senior.')]) +
              '<p class="note">Per sapere chi segue il personal training e a quali condizioni, chiedi in segreteria.</p>',
              'Per chi &egrave;', 'Per chi vuole pi&ugrave; attenzione',
              chk([('Chi inizia.', 'Per imparare bene i movimenti fin dal primo giorno.'),
                   ('Chi ha un obiettivo preciso.', 'Dimagrire, mettere massa, tornare in forma: <a href="palestra-dimagrire.html">leggi come ti aiutiamo a dimagrire</a>.'),
                   ('Chi ha poco tempo.', 'Un programma costruito sul tuo tempo, senza allenarti a caso.'),
                   ('Chi vuole un supporto in pi&ugrave;.', 'Anche se ti alleni gi&agrave;: una guida accanto fa la differenza.')]), 'chi'),
        section('cosa-serve', 'Prima di iniziare', 'Cosa serve',
                None,
                steps([('Prova gratuita', 'La prima lezione &egrave; gratuita e va prenotata, cos&igrave; ti aspettiamo con l&rsquo;istruttore giusto.'),
                       ('Iscrizione', 'Scegli la formula in segreteria: <a href="abbonamenti.html">ONE, OPEN o FAMILY</a>, anche a rate.'),
                       ('Certificato', 'Serve il certificato medico non agonistico: ti aiutiamo a capire quale.'),
                       ('Porta con te', 'Abiti comodi, scarpe pulite, asciugamano e acqua.')])),
    ],
    faq=[('La scheda personalizzata &egrave; gratuita?', 'S&igrave;. In sala pesi l&rsquo;istruttore prepara gratuitamente una scheda sui tuoi obiettivi e la aggiorna periodicamente.'),
         ('C&rsquo;&egrave; il personal trainer?', 'S&igrave;, sono disponibili soluzioni di personal training su richiesta: chiedi in segreteria.'),
         ('Quanto costa il personal training?', 'Dipende dalla soluzione che scegli: i dettagli li vediamo insieme in segreteria, dopo la prova gratuita.'),
         ('Posso fare personal training da principiante?', 'S&igrave;, anzi &egrave; un buon modo per imparare bene i movimenti fin dall&rsquo;inizio.'),
         ('Come si prenota la prova?', 'Su WhatsApp al 392 070 8111 o dal modulo sul sito: la prima lezione &egrave; gratuita.')],
)

# ------------------------------------------------------------------ SABATO
PAGES['palestra-aperta-sabato.html'] = dict(
    title='Palestra Aperta il Sabato a Roma Cinecittà | MedusA Gym',
    desc='Palestra aperta il sabato a Roma Cinecittà dalle 9 alle 17: sala pesi con scheda gratuita e pugilato dalle 14 alle 16. Prima lezione gratuita su prenotazione.',
    og='Palestra aperta il sabato a Roma Cinecittà | MedusA Gym', ogdesc='Il sabato siamo aperti dalle 9 alle 17: sala pesi e pugilato. Prima lezione gratuita.',
    service='Palestra aperta il sabato', crumb='Palestra aperta il sabato',
    img='images/corsi/pesi-2.webp', alt='Atleta alla lat machine nella sala pesi della MedusA Gym',
    eyebrow='Weekend &middot; Roma Cinecitt&agrave;',
    h1='Palestra aperta <span class="o">il sabato</span>', h1s='Quando hai finalmente tempo, noi ci siamo',
    lead='Durante la settimana non riesci mai? Il sabato MedusA Gym &egrave; aperta dalle 9 alle 17: puoi allenarti in sala pesi con la tua scheda e fare pugilato con un tecnico FPI dalle 14 alle 16. La domenica siamo chiusi.',
    facts=['<b>Sabato</b> 9-17', 'Sala pesi aperta', 'Pugilato 14-16', 'Prova gratuita'],
    tag='Il sabato<br>&egrave; tutto tuo', anchor='sabato', anchor_label='Cosa c&rsquo;&egrave; il sabato',
    wa='Ciao MedusA Gym! Vorrei prenotare una prova gratuita di sabato.',
    sections=[
        section('sabato', 'Il sabato', 'Cosa puoi fare dalle 9 alle 17',
                'Gli orari delle lezioni possono variare: trovi sempre la versione aggiornata nella <a href="index.html#orari">tabella corsi</a>.',
                cards([('9-17', 'Sala pesi', 'Macchine, bilancieri e rack con la tua scheda gratuita. <a href="corsi/sala-pesi.html">Scopri la sala pesi</a>.'),
                       ('14-16', 'Pugilato', 'Tecnica e fiato con un tecnico FPI, per chi inizia e per chi si allena. <a href="corsi/pugilato.html">Scopri il pugilato</a>.'),
                       ('Su richiesta', 'Personal training', 'Se vuoi qualcuno accanto a ogni serie, chiedi le soluzioni PT. <a href="personal-training.html">Scopri come funziona</a>.')])),
        section('settimana', 'Il resto della settimana', 'Dal luned&igrave; al venerd&igrave; hai ancora pi&ugrave; scelta',
                None,
                chk([('Sala pesi.', 'Dalle 8 alle 22 senza interruzioni.'),
                     ('Pausa pranzo.', 'Lezioni alle 13.30 e 14.00: <a href="palestra-pausa-pranzo.html">palestra in pausa pranzo</a>.'),
                     ('Sera.', 'Kickboxing, functional, calisthenics e autodifesa PATH dopo il lavoro.'),
                     ('Tutte le discipline.', 'Con la formula <a href="abbonamenti.html">OPEN</a> le fai tutte, sala pesi compresa.')])),
        section('come-fare', 'Come provare', 'Prenota la tua prova gratuita',
                'La prima lezione &egrave; gratuita e va prenotata, cos&igrave; ti aspettiamo con l&rsquo;istruttore giusto.',
                steps([('Scegli il sabato', 'Dicci quando preferisci: sala pesi o pugilato.'),
                       ('Prenota', 'Su WhatsApp o dal modulo del sito.'),
                       ('Porta poco', 'Abiti comodi, scarpe pulite, asciugamano e acqua.'),
                       ('Allenati', 'Prima provi, poi scegli la formula con calma.')])),
    ],
    faq=[('La palestra &egrave; aperta il sabato?', 'S&igrave;, dalle 9 alle 17. La domenica siamo chiusi.'),
         ('Quali lezioni ci sono il sabato?', 'Il pugilato dalle 14 alle 16. La sala pesi &egrave; accessibile per tutto l&rsquo;orario di apertura.'),
         ('Posso fare la prova gratuita di sabato?', 'S&igrave;, va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito.'),
         ('Gli orari del sabato possono cambiare?', 'Le lezioni possono variare: controlla sempre la tabella corsi sul sito o scrivici su WhatsApp.'),
         ('Il sabato posso usare la sala pesi?', 'S&igrave;, dalle 9 alle 17, con la tua scheda personalizzata gratuita.')],
)

# ------------------------------------------------------------------ RAGAZZI
PAGES['palestra-ragazzi.html'] = dict(
    title='Palestra per Ragazzi a Roma Cinecittà | Kickboxing Kids 9-14 | MedusA Gym',
    desc='Palestra per ragazzi a Roma Cinecittà: Kickboxing Kids dai 9 ai 14 anni, senza contatto, con la Maestra Marika Pagliaroli. Martedì e giovedì alle 17.30. Prova gratuita.',
    og='Palestra per ragazzi a Roma Cinecittà | MedusA Gym', ogdesc='Kickboxing Kids 9-14 anni, senza contatto, con cinture e gradi. Prima lezione gratuita.',
    service='Palestra per ragazzi (Kickboxing Kids 9-14)', crumb='Palestra per ragazzi',
    img='images/corso-kickboxing-bambini.jpg', alt='Ragazze si allenano ai sacchi durante la lezione di Kickboxing Kids alla MedusA Gym',
    eyebrow='Ragazzi &middot; Roma Cinecitt&agrave;',
    h1='Palestra per <span class="o">ragazzi</span>', h1s='Kickboxing dai 9 ai 14 anni, senza contatto',
    lead='Tuo figlio ha energia da vendere? A MedusA Gym i ragazzi dai 9 ai 14 anni imparano la kickboxing senza contatto con la Maestra Marika Pagliaroli: guardia, pugni e calci passo dopo passo, rispetto delle regole e una cintura alla volta.',
    facts=['<b>9-14 anni</b>', 'Senza contatto', 'Mar e Gio 17.30', 'Cinture e gradi'],
    tag='Il coraggio<br>si allena da piccoli', anchor='come-funziona', anchor_label='Come funziona',
    wa='Ciao MedusA Gym! Vorrei prenotare una prova gratuita di Kickboxing Kids per mio figlio/a.',
    sections=[
        section('come-funziona', 'Come funziona', 'Una lezione che unisce gioco e disciplina',
                'Ogni lezione dura un&rsquo;ora e mezza, con la Maestra sempre presente.',
                cards([('01', 'Tecnica', 'Guardia, pugni e calci insegnati passo dopo passo, adattati all&rsquo;et&agrave;.'),
                       ('02', 'Coordinazione', 'Equilibrio, riflessi e movimento: una base che serve in ogni sport.'),
                       ('03', 'Rispetto', 'Per la Maestra, per i compagni e per le regole della palestra.'),
                       ('04', 'Cinture e gradi', 'Si cresce di cintura in cintura, a ritmo proprio.')])),
        split('Per i genitori', 'Tuo figlio &egrave; in buone mani',
              chk([('Senza contatto.', 'Il corso Kids &egrave; senza contatto; il contatto leggero &egrave; facoltativo, solo per i pi&ugrave; grandi e solo con l&rsquo;ok dei genitori.'),
                   ('Dietro il vetro.', 'I genitori possono seguire la lezione da dietro il vetro.'),
                   ('Maestra qualificata.', 'La guida <a href="marika-pagliaroli.html">Marika Pagliaroli</a>, campionessa PRO italiana e internazionale.')]),
              'Dopo i 14 anni', 'Il percorso continua',
              chk([('Kickboxing adulti.', 'Dai 14 anni si passa al corso di <a href="corsi/kickboxing.html">kickboxing</a> con i grandi.'),
                   ('Per tutta la famiglia.', 'Con la formula <a href="palestra-famiglie.html">FAMILY</a>, un solo abbonamento per 2, 3 o 4 persone, Kids compreso.'),
                   ('Guida.', 'Leggi <a href="guide/a-che-eta-iniziare-kickboxing.html">a che et&agrave; si pu&ograve; iniziare kickboxing</a>.')]), 'genitori'),
        section('orari', 'Gli orari', 'Quando si allenano',
                None,
                cards([('Marted&igrave;', 'Kids 17.30 - 19.00', 'Kickboxing Kids 9-14, con la Maestra Marika.'),
                       ('Gioved&igrave;', 'Kids 17.30 - 19.00', 'Kickboxing Kids 9-14, con la Maestra Marika.')]) +
                '<p class="note rv">Tutti i dettagli sul <a href="corsi/kickboxing-ragazzi.html">corso Kickboxing Kids</a>.</p>'),
    ],
    faq=[('Da che et&agrave; si pu&ograve; iniziare kickboxing?', 'Dai 9 anni con il corso Kids, senza contatto. Dai 14 anni si passa al corso adulti.'),
         ('I ragazzi prendono colpi?', 'No: il corso Kids &egrave; senza contatto. Il contatto leggero &egrave; facoltativo, solo per i pi&ugrave; grandi e solo con il consenso dei genitori.'),
         ('Quando sono le lezioni?', 'Il marted&igrave; e il gioved&igrave; dalle 17.30 alle 19.00.'),
         ('Serve esperienza?', 'No, si parte tutti dalla prima cintura.'),
         ('Come prenoto la prova gratuita?', 'Su WhatsApp al 392 070 8111 o dal modulo sul sito: la prima lezione &egrave; gratuita.')],
)

# ------------------------------------------------------------------ SPOGLIATOI
PAGES['palestra-spogliatoi-docce.html'] = dict(
    title='Palestra con Spogliatoi e Docce a Roma Cinecittà | MedusA Gym',
    desc='Palestra a Roma Cinecittà con spogliatoi separati uomo e donna, docce e armadietti personali. Cosa portare, regole e come arrivare. Prima lezione gratuita.',
    og='Palestra con spogliatoi e docce a Roma Cinecittà | MedusA Gym', ogdesc='Spogliatoi separati, docce e armadietti: cosa portare e come funziona. Prima lezione gratuita.',
    service='Spogliatoi, docce e armadietti', crumb='Spogliatoi e docce',
    img='images/corsi/pesi-1.webp', alt='Atleta si allena al pulley nella sala pesi della MedusA Gym',
    eyebrow='Servizi &middot; Roma Cinecitt&agrave;',
    h1='Spogliatoi e <span class="o">docce</span>', h1s='Allenati, fatti la doccia, riparti',
    lead='Vieni dal lavoro o ti serve una doccia prima di tornare a casa? A MedusA Gym gli spogliatoi sono separati per uomini e donne, con docce e armadietti personali. Basta portare lucchetto e asciugamano.',
    facts=['Spogliatoi separati', 'Docce', 'Armadietti personali', 'Porta lucchetto'],
    tag='Tutto pronto<br>prima e dopo', anchor='cosa-portare', anchor_label='Cosa portare',
    wa='Ciao MedusA Gym! Vorrei prenotare una prova gratuita e sapere cosa devo portare.',
    sections=[
        section('cosa-portare', 'Cosa portare', 'La borsa giusta',
                'Per la prima lezione di prova ti basta poco: l&rsquo;attrezzatura dei corsi di combattimento te la diamo noi.',
                cards([('01', 'Lucchetto', 'Per chiudere il tuo armadietto personale.'),
                       ('02', 'Asciugamano', 'Serve per la doccia e va usato anche su attrezzi e tappetini.'),
                       ('03', 'Scarpe pulite', 'Adatte alla disciplina che fai.'),
                       ('04', 'Acqua', 'Una borraccia per allenarti senza pause.')])),
        section('regole', 'Come funziona', 'Poche regole per stare bene tutti',
                None,
                chk([('Armadietti.', 'Vanno svuotati a fine giornata.'),
                     ('Docce.', 'L&rsquo;uso &egrave; consentito nel rispetto degli altri e senza spreco di acqua.'),
                     ('Ordine.', 'Mantieni gli spogliatoi puliti e in ordine.'),
                     ('Oggetti personali.', 'Usa gli armadietti e non lasciare nulla incustodito.')])),
        section('orari', 'Quando', 'Prima, dopo o in mezzo alla giornata',
                'La palestra &egrave; aperta dal luned&igrave; al venerd&igrave; dalle 8 alle 22, il sabato dalle 9 alle 17.',
                chk([('Dopo il lavoro.', 'Lezioni la sera e sala pesi fino alle 22.'),
                     ('In pausa pranzo.', 'Scopri le lezioni delle 13.30 e 14.00: <a href="palestra-pausa-pranzo.html">palestra in pausa pranzo</a>.'),
                     ('Il sabato.', 'Aperti dalle 9 alle 17: <a href="palestra-aperta-sabato.html">palestra aperta il sabato</a>.'),
                     ('Come arrivare.', 'A 5 minuti dalla metro A Giulio Agricola: <a href="come-arrivare.html">indicazioni</a>.')])),
    ],
    faq=[('Ci sono spogliatoi e docce?', 'S&igrave;, spogliatoi separati uomo e donna con armadietti personali e docce.'),
         ('Cosa devo portare?', 'Lucchetto per l&rsquo;armadietto, asciugamano, scarpe pulite e acqua.'),
         ('Gli armadietti sono sempre miei?', 'No, gli armadietti vanno svuotati a fine giornata.'),
         ('Posso fare la doccia dopo l&rsquo;allenamento?', 'S&igrave;, le docce sono a disposizione dei soci, nel rispetto degli altri e senza spreco di acqua.'),
         ('Per la prova gratuita serve l&rsquo;attrezzatura?', 'Per le prime lezioni di kickboxing e pugilato guantoni e protezioni li mettiamo noi.')],
)


def main():
    for slug, p in PAGES.items():
        print('ok', build(slug, p))


if __name__ == '__main__':
    main()
