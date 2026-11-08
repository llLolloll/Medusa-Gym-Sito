#!/usr/bin/env python3
"""Genera orari.html, corsi/index.html e 404.html partendo dal template di abbonamenti.html.
Il palinsesto viene letto dalla tabella #orari della home, cosi' resta uno solo da aggiornare.
Rilanciare dopo ogni modifica agli orari in index.html:  python3 tools/build_hubs.py
"""
import os, re, json, html as H
from datetime import date

SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'medusa-gym')
BASE = 'https://www.medusagym.it/'
TODAY = date.today().isoformat()
NAME = "Medusa Gym - Fight n' Fitness"

def rd(p): return open(os.path.join(SITE, p), encoding='utf-8').read()
def wr(p, s): open(os.path.join(SITE, p), 'w', encoding='utf-8').write(s)

TPL = rd('abbonamenti.html')
HEAD_END = TPL.index('<main>')
FOOT_START = TPL.index('</main>')

CORSI = [
    # slug, nome, foto, frase
    ('kickboxing', 'Kickboxing', 'images/corsi/kick-pao', 'Full contact, low kick, K-1 e kick light, dai principianti al Team Last Round. Sparring facoltativo.'),
    ('pugilato', 'Pugilato', 'images/corsi/pugilato-1', 'Boxe con un tecnico FPI: guardia, colpi e sacco. Anche la mattina alle 8.30 e il sabato.'),
    ('autodifesa-path', 'Autodifesa PATH', 'images/corsi/difesa-1', 'Difesa personale per la vita di tutti i giorni con il Maestro Roberto Boi. Non serve essere allenati.'),
    ('kickboxing-ragazzi', 'Kickboxing Kids 9-14', 'images/corso-kickboxing-bambini', 'Per bambini e ragazzi dai 9 ai 14 anni, senza contatto, con la Maestra Marika Pagliaroli.'),
    ('functional-training', 'Functional Training', 'images/corsi/func-1', 'Kettlebell, bilanciere e corpo libero in gruppo, anche in pausa pranzo.'),
    ('calisthenics', 'Calisthenics', 'images/corsi/cali-1', 'Trazioni, dip e skill a corpo libero con Yvonne Rivellini, gruppo base e avanzato.'),
    ('sala-pesi', 'Sala pesi', 'images/corsi/pesi-1', 'Aperta in tutti gli orari, con una scheda personalizzata gratuita preparata dall\'istruttore.'),
    ('ginnastica-posturale', 'Ginnastica posturale', 'images/corso-posturale', 'Metodo ATS con Ermenegildo Pagliaroli: valutazione iniziale e piccoli gruppi per schiena e collo.'),
    ('active-senior', 'Active Senior', 'images/corso-active-senior', 'Ginnastica dolce per over 55 con Donatella Vecchioni, il martedi\' e il giovedi\' mattina.'),
]
LINK = {'Kickboxing': 'corsi/kickboxing.html', 'Pugilato': 'corsi/pugilato.html', 'Autodifesa PATH': 'corsi/autodifesa-path.html',
        'Calisthenics': 'corsi/calisthenics.html', 'Functional Training': 'corsi/functional-training.html',
        'Active Senior': 'corsi/active-senior.html', 'Ginnastica Posturale': 'corsi/ginnastica-posturale.html'}
GIORNI = [('Lun', 'Lunedì', 1), ('Mar', 'Martedì', 2), ('Mer', 'Mercoledì', 3), ('Gio', 'Giovedì', 4), ('Ven', 'Venerdì', 5), ('Sab', 'Sabato', 6)]


def palinsesto():
    s = rd('index.html')
    i = s.index('<section id="orari"'); blk = s[i:s.index('</table>', i)]
    days = {g[0]: [] for g in GIORNI}
    for row in re.findall(r'<tr class="fu[^"]*"><th scope="row">([^<]+)</th>(.*?)</tr>', blk, re.S):
        corso, cells = row
        for d, cell in re.findall(r'<td[^>]*data-d="(\w+)"[^>]*>(.*?)</td>', cells, re.S):
            for sl in re.findall(r'<span class="sl(?: sl-t)?">(.*?)</span>', cell, re.S):
                tag = re.search(r'<b>(.*?)</b>', sl); tag = tag.group(1) if tag else ''
                ora = re.sub(r'<b>.*?</b>', '', sl).strip()
                nome = corso.strip()
                link = LINK.get(nome)
                if nome == 'Kickboxing' and tag.startswith('Kids'):
                    link = 'corsi/kickboxing-ragazzi.html'
                days[d].append((ora, nome, tag, link))
    for d in days: days[d].sort(key=lambda x: x[0])
    return days


def relink(s, pre):
    """Aggiunge ../ ai percorsi relativi (per le pagine in sottocartella)."""
    def fix(m):
        attr, v = m.group(1), m.group(2)
        if attr == 'srcset':
            v = ', '.join(pre + p.strip() if not re.match(r'^(https?:|/|data:)', p.strip()) else p.strip() for p in v.split(','))
            return f'{attr}="{v}"'
        if re.match(r'^(https?:|/|#|mailto:|tel:|data:|javascript:)', v) or v == '':
            return m.group(0)
        return f'{attr}="{pre}{v}"'
    s = re.sub(r'\b(href|src|srcset)="([^"]*)"', fix, s)
    # url(...) nel CSS inline (font e immagini di sfondo)
    return re.sub(r"url\((['\"]?)(?!https?:|/|data:|#)([^)'\"]+)\1\)", lambda m: f"url({m.group(1)}{pre}{m.group(2)}{m.group(1)})", s)


def page(path, title, desc, main, graph, extra_css='', noindex=False):
    head, foot = TPL[:HEAD_END], TPL[FOOT_START:]
    url = BASE + path.replace('index.html', '')
    head = re.sub(r'<title>.*?</title>', f'<title>{H.escape(title)}</title>', head, count=1, flags=re.S)
    for pat, val in [(r'(<meta name="description" content=")[^"]*', desc), (r'(<meta property="og:title" content=")[^"]*', title),
                     (r'(<meta property="og:description" content=")[^"]*', desc), (r'(<meta property="og:url" content=")[^"]*', url),
                     (r'(<link rel="canonical" href=")[^"]*', url)]:
        head = re.sub(pat, lambda m: m.group(1) + H.escape(val, quote=True), head, count=1)
    head = re.sub(r'(<meta name="twitter:title" content=")[^"]*', lambda m: m.group(1) + H.escape(title, quote=True), head, count=1)
    head = re.sub(r'(<meta name="twitter:description" content=")[^"]*', lambda m: m.group(1) + H.escape(desc, quote=True), head, count=1)
    if noindex:
        head = re.sub(r'<meta name="robots" content="[^"]*">', '<meta name="robots" content="noindex, follow">', head, count=1)
        if 'name="robots"' not in head:
            head = head.replace('<title>', '<meta name="robots" content="noindex, follow">\n<title>', 1)
        head = re.sub(r'\n?<link rel="canonical"[^>]*>', '', head, count=1)
    # sostituisce il JSON-LD della pagina template (l'ultimo blocco ld+json)
    blocks = list(re.finditer(r'<script type="application/ld\+json">.*?</script>', head, re.S))
    if blocks:
        b = blocks[-1]
        ld = '<script type="application/ld+json">\n' + json.dumps({'@context': 'https://schema.org', '@graph': graph}, ensure_ascii=False, indent=1) + '\n</script>' if graph else ''
        head = head[:b.start()] + ld + head[b.end():]
    if extra_css:
        head = head.replace('</head>', f'<style>{extra_css}</style>\n</head>', 1)
    body = head + '<main>\n' + main + '\n' + foot
    depth = path.count('/')
    if depth:
        body = relink(body, '../' * depth)
    wr(path, body)


def crumbs_graph(path, name):
    url = BASE + path.replace('index.html', '')
    return [
        {'@type': 'WebPage', '@id': url + '#webpage', 'url': url, 'name': name, 'inLanguage': 'it-IT', 'dateModified': TODAY,
         'isPartOf': {'@id': BASE + '#website'}, 'about': {'@id': BASE + '#palestra'}, 'breadcrumb': {'@id': url + '#breadcrumb'}},
        {'@type': 'BreadcrumbList', '@id': url + '#breadcrumb', 'itemListElement': [
            {'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE},
            {'@type': 'ListItem', 'position': 2, 'name': name, 'item': url}]},
    ]


FINAL = '''<section class="blk" style="padding-top:1rem">
  <div class="wrap">
    <div class="final rv" id="prova" style="scroll-margin-top:6.5rem">
      <h2>La prima lezione &egrave; gratis</h2>
      <p>Vale per tutti i corsi e va prenotata, cos&igrave; ti aspettiamo con l&rsquo;istruttore giusto.</p>
      <div class="cta-row">
        <a class="btn btn-g" href="https://wa.me/393920708111?text=Ciao%20Medusa%20Gym%21%20Vorrei%20prenotare%20una%20prova%20gratuita." target="_blank" rel="noopener">Prenota su WhatsApp &#8594;</a>
        <a class="btn btn-o" href="index.html#prova">Compila il modulo</a>
      </div>
    </div>
  </div>
</section>
<p class="agg-data" style="text-align:center;font-size:.8rem;opacity:.7;margin:28px 16px 12px">Ultimo aggiornamento: <time datetime="''' + TODAY + '">' + TODAY + '</time></p>'


def build_orari():
    days = palinsesto()
    cols = []
    for k, nome, wd in GIORNI:
        items = ''.join(
            f'<li><span class="os-t">{H.escape(o)}</span><span class="os-c">'
            + (f'<a href="{l}">{H.escape(c)}</a>' if l else H.escape(c))
            + (f' <em>{H.escape(t)}</em>' if t else '') + '</span></li>'
            for o, c, t, l in days[k])
        cols.append(f'<div class="os-day" data-d="{wd}"><h3>{nome}</h3><ul>{items}</ul></div>')
    main = f'''<section class="hero">
  <div class="wrap">
    <div>
      <nav class="crumbs" aria-label="Percorso"><a href="index.html">Medusa Gym</a> / Orari</nav>
      <h1>Ora<span class="o">ri</span><small>Il palinsesto della settimana</small></h1>
      <p class="lead">Medusa Gym - Fight n' Fitness &egrave; in Via Quinto Sertorio 24, ad Appio Claudio, quadrante di Cinecitt&agrave;. Siamo aperti dal luned&igrave; al venerd&igrave; dalle 8 alle 22 e il sabato dalle 9 alle 17. La sala pesi &egrave; aperta in tutti questi orari, i corsi seguono il palinsesto qui sotto.</p>
      <div class="cta-row">
        <a class="btn btn-g" href="#prova">Prenota la prova gratuita &#8594;</a>
        <a class="btn btn-o" href="corsi/">Tutti i corsi</a>
      </div>
      <ul class="facts" aria-label="In breve"><li><b>Lun-Ven</b> 8-22</li><li><b>Sab</b> 9-17</li><li><b>Dom</b> chiuso</li><li><b>Pausa pranzo</b> dalle 13.30</li></ul>
    </div>
    <figure class="hero-ph">
      <img src="images/gal-sala-pesi.webp" alt="Sala pesi di Medusa Gym a Roma Cinecitt&agrave;" fetchpriority="high" width="600" height="450">
      <figcaption class="hero-tag"><span>Mattina, pranzo<br>e sera.</span><em>Via Quinto Sertorio 24<br>Roma Cinecitt&agrave;</em></figcaption>
    </figure>
  </div>
</section>

<section class="blk" id="settimana">
  <div class="wrap">
    <div class="rv"><h2>Corsi giorno per giorno</h2><p class="note">Tocca un corso per vedere la sua pagina. Il palinsesto pu&ograve; cambiare: per conferme scrivici su <a href="https://wa.me/393920708111" target="_blank" rel="noopener">WhatsApp</a> o chiama lo <a href="tel:+39067477431">06 747 7431</a>.</p></div>
    <div class="os-grid rv">{''.join(cols)}</div>
  </div>
</section>

{FINAL}'''
    css = ('.os-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:1.6rem}'
           '.os-day{border:1px solid var(--bd);border-radius:var(--r-lg);background:rgba(16,16,16,.88);padding:1.3rem 1.3rem 1rem}'
           '.os-day.today{border-color:rgba(57,255,20,.55);box-shadow:0 0 0 1px rgba(57,255,20,.25)}'
           '.os-day h3{font-family:var(--fh);font-size:1.6rem;letter-spacing:.03em;color:#fff;margin-bottom:.6rem}'
           '.os-day.today h3::after{content:" oggi";color:var(--g);font-size:1rem;letter-spacing:.08em}'
           '.os-day ul{list-style:none;margin:0;padding:0}'
           '.os-day li{display:flex;gap:.9rem;padding:.55rem 0;border-top:1px solid rgba(255,255,255,.06);font-size:.92rem;line-height:1.35}'
           '.os-t{flex:none;width:7.6rem;color:var(--txt2);font-variant-numeric:tabular-nums}'
           '.os-c a{color:#fff;text-decoration:none;border-bottom:1px solid rgba(57,255,20,.4)}.os-c a:hover{color:var(--g)}'
           '.os-c em{font-style:normal;font-size:.75rem;color:var(--g);margin-left:.3rem;white-space:nowrap}'
           '@media(max-width:900px){.os-grid{grid-template-columns:1fr 1fr}}@media(max-width:600px){.os-grid{grid-template-columns:1fr}.os-t{width:6.8rem}}')
    graph = crumbs_graph('orari.html', 'Orari dei corsi')
    page('orari.html', 'Orari dei corsi e apertura | Medusa Gym Roma Cinecittà',
         'Orari di Medusa Gym a Roma Cinecittà: aperta lun-ven 8-22 e sabato 9-17. Palinsesto giorno per giorno di kickboxing, pugilato, functional, posturale e altri corsi.',
         main, graph, css)
    # evidenzia il giorno di oggi
    s = rd('orari.html')
    s = s.replace('</body>', "<script>(function(){var t=document.querySelector('.os-day[data-d=\"'+new Date().getDay()+'\"]');if(t)t.classList.add('today')})()</script>\n</body>", 1)
    wr('orari.html', s)


def build_corsi():
    cards = ''.join(f'''<a class="ch-c" href="{slug}.html"><img src="../{img}.webp" alt="{H.escape(nome)} a Medusa Gym Roma" loading="lazy" width="600" height="750"><span class="ch-b"><h2>{H.escape(nome)}</h2><p>{H.escape(frase)}</p><span class="ch-m">Scopri il corso &#8594;</span></span></a>'''
                    for slug, nome, img, frase in CORSI)
    main = f'''<section class="hero">
  <div class="wrap">
    <div>
      <nav class="crumbs" aria-label="Percorso"><a href="index.html">Medusa Gym</a> / Corsi</nav>
      <h1>I nostri <span class="o">corsi</span><small>9 discipline, un solo abbonamento OPEN</small></h1>
      <p class="lead">Da Medusa Gym - Fight n' Fitness, in Via Quinto Sertorio 24 ad Appio Claudio, quadrante di Cinecitt&agrave;, trovi sport da combattimento e fitness nello stesso posto: 550 mq, 3 ring, sala pesi e sale corsi. La prima lezione di ogni corso &egrave; gratuita.</p>
      <div class="cta-row">
        <a class="btn btn-g" href="#prova">Prenota la prova gratuita &#8594;</a>
        <a class="btn btn-o" href="orari.html">Orari</a>
      </div>
      <ul class="facts" aria-label="In breve"><li><b>9</b> discipline</li><li><b>3</b> ring</li><li><b>40+</b> lezioni a settimana</li><li>Dai 9 anni agli over 55</li></ul>
    </div>
    <figure class="hero-ph">
      <img src="images/gal-ring.webp" alt="Ring di Medusa Gym a Roma Cinecitt&agrave;" fetchpriority="high" width="600" height="450">
      <figcaption class="hero-tag"><span>Fight<br>e Fitness.</span><em>Via Quinto Sertorio 24<br>Roma Cinecitt&agrave;</em></figcaption>
    </figure>
  </div>
</section>

<section class="blk" id="elenco">
  <div class="wrap">
    <div class="ch-grid rv">{cards}</div>
  </div>
</section>

{FINAL}'''
    css = ('.ch-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}'
           '.ch-c{position:relative;display:block;border-radius:var(--r-xl);overflow:hidden;border:1px solid var(--bd);aspect-ratio:4/5;text-decoration:none;background:#111}'
           '.ch-c img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(.62) saturate(.9);transition:transform .5s ease-out,filter .3s}'
           '.ch-c:hover img{transform:scale(1.04);filter:brightness(.72)}'
           '.ch-c:active{transform:scale(.98)}'
           '.ch-b{position:absolute;left:0;right:0;bottom:0;padding:1.4rem;background:linear-gradient(0deg,rgba(0,0,0,.92),rgba(0,0,0,0))}'
           '.ch-b h2{font-family:var(--fh);font-size:2rem;line-height:1;color:#fff;margin-bottom:.45rem}'
           '.ch-b p{color:#E6E6E6;font-size:.9rem;line-height:1.5;margin-bottom:.8rem}'
           '.ch-m{color:var(--g);font-family:var(--fh);font-size:1.05rem;letter-spacing:.05em}'
           '@media(max-width:900px){.ch-grid{grid-template-columns:1fr 1fr}}@media(max-width:600px){.ch-grid{grid-template-columns:1fr}.ch-c{aspect-ratio:4/3}}')
    graph = crumbs_graph('corsi/index.html', 'Corsi') + [{
        '@type': 'ItemList', 'name': 'Corsi di Medusa Gym', 'itemListElement': [
            {'@type': 'ListItem', 'position': i + 1, 'name': c[1], 'url': BASE + 'corsi/' + c[0] + '.html'} for i, c in enumerate(CORSI)]}]
    # in corsi/index.html i link relativi devono partire dalla radice del sito: scriviamo la pagina come se fosse in radice e poi aggiungiamo ../
    main_root = main.replace('href="orari.html"', 'href="orari.html"')
    main_root = re.sub(r'href="([a-z-]+)\.html"', lambda m: f'href="corsi/{m.group(1)}.html"' if m.group(1) in [c[0] for c in CORSI] else m.group(0), main_root)
    main_root = main_root.replace('src="../images/', 'src="images/')
    page('corsi/index.html', 'Corsi di kickboxing, boxe e fitness a Roma Cinecittà | Medusa Gym',
         'Tutti i corsi di Medusa Gym a Roma Cinecittà: kickboxing, pugilato, autodifesa, kids 9-14, functional, calisthenics, sala pesi, posturale e Active Senior. Prova gratuita.',
         main_root, graph, css)


def build_404():
    main = '''<section class="hero">
  <div class="wrap">
    <div>
      <h1>Pagina <span class="o">non trovata</span><small>Il link &egrave; sbagliato o la pagina &egrave; stata spostata</small></h1>
      <p class="lead">Da qui puoi tornare alla home, vedere tutti i corsi o gli orari. Se cercavi qualcosa di preciso, scrivici su WhatsApp e ti rispondiamo noi.</p>
      <div class="cta-row">
        <a class="btn btn-g" href="/">Torna alla home</a>
        <a class="btn btn-o" href="/corsi/">Tutti i corsi</a>
        <a class="btn btn-o" href="/orari.html">Orari</a>
      </div>
    </div>
  </div>
</section>'''
    page('404.html', 'Pagina non trovata | Medusa Gym', 'La pagina che cercavi non esiste. Torna alla home di Medusa Gym, Roma Cinecittà.', main, None, noindex=True)
    s = rd('404.html')
    # nel 404 i link devono essere assoluti: la pagina viene servita a qualsiasi profondita'
    s = re.sub(r'\b(href|src)="(?!https?:|/|#|mailto:|tel:|data:)([^"]+)"', r'\1="/\2"', s)
    s = re.sub(r'srcset="([^"]+)"', lambda m: 'srcset="' + ', '.join(('/' + p.strip()) if not p.strip().startswith(('/', 'http')) else p.strip() for p in m.group(1).split(',')) + '"', s)
    s = re.sub(r"url\((['\"]?)(?!https?:|/|data:|#)([^)'\"]+)\1\)", lambda m: f"url({m.group(1)}/{m.group(2)}{m.group(1)})", s)
    wr('404.html', s)


if __name__ == '__main__':
    os.makedirs(os.path.join(SITE, 'corsi'), exist_ok=True)
    build_orari(); build_corsi(); build_404()
    print('orari.html, corsi/index.html, 404.html generati')
