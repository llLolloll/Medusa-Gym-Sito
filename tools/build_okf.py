#!/usr/bin/env python3
"""Genera il bundle OKF (Open Knowledge Format, Google v0.1) in medusa-gym/okf/ a partire da medusa-gym/md/.
Ogni file ha frontmatter YAML (type, title, description, resource, tags, timestamp). Aggiuntivo a llms.txt, llms-full.txt e md/.
Rilanciare dopo build_md.py:  python3 tools/build_okf.py"""
import os, re, glob, datetime, json

SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'medusa-gym')
MD, OUT = os.path.join(SITE, 'md'), os.path.join(SITE, 'okf')
BASE = 'https://www.medusagym.it/'
TS = datetime.date.today().isoformat()

PEOPLE = {'andrea-durazzi','donatella-vecchioni','lucio-pedana','marika-pagliaroli','yvonne-rivellini'}
ZONES = {'palestra-cinecitta-due','palestra-tuscolana','palestra-quadraro-appio-claudio','palestra-vicino-metro-a','palestra-don-bosco','come-arrivare'}

def kind(rel):
    name = rel[:-3]
    if rel == 'index.md': return 'Organization', ['palestra','roma','cinecitta']
    if rel == 'guide/index.md': return 'Collection', ['guide']
    if rel.startswith('corsi/'): return 'Course', ['corso', name.split('/')[-1]]
    if rel.startswith('guide/'): return 'Guide', ['guida', name.split('/')[-1]]
    if name in PEOPLE: return 'Person', ['staff', name]
    if name in ZONES: return 'Location', ['zona', 'come-arrivare', name]
    if name == 'domande-frequenti': return 'FAQ', ['faq']
    if name == 'abbonamenti': return 'Service', ['abbonamenti']
    return 'Page', [name]

def q(s): return json.dumps(s, ensure_ascii=False)

def parse(path):
    t = open(path, encoding='utf-8').read()
    title = re.search(r'^# (.+)$', t, re.M)
    desc = re.search(r'^> (.+)$', t, re.M)
    body = t
    return (title.group(1).strip() if title else ''), (desc.group(1).strip() if desc else ''), body

os.makedirs(OUT, exist_ok=True)
for f in glob.glob(OUT + '/**/*.md', recursive=True): os.remove(f)

entries = []
for p in sorted(glob.glob(MD + '/**/*.md', recursive=True)):
    rel = os.path.relpath(p, MD)
    title, desc, body = parse(p)
    typ, tags = kind(rel)
    resource = BASE + ('' if rel == 'index.md' else rel[:-3] + '.html')
    if rel == 'guide/index.md': resource = BASE + 'guide/'
    fm = ['---', f'type: {typ}', f'title: {q(title)}', f'description: {q(desc)}', f'resource: {q(resource)}',
          'tags: [' + ', '.join(q(x) for x in tags) + ']', f'timestamp: {q(TS)}', '---', '']
    dst = os.path.join(OUT, 'organization.md' if rel == 'index.md' else rel)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    open(dst, 'w', encoding='utf-8').write('\n'.join(fm) + body.rstrip() + '\n')
    entries.append((typ, title, desc, os.path.relpath(dst, OUT)))

order = ['Organization','Course','Location','Person','Service','FAQ','Guide','Collection','Page']
lines = ['---', 'type: Index', 'title: "MedusA Gym - Fight n\' Fitness: base di conoscenza"',
         'description: "Palestra di sport da combattimento e fitness a Roma Cinecittà: corsi, orari, zone servite, istruttori, guide. Nessun prezzo pubblicato."',
         f'resource: {q(BASE)}', 'tags: ["palestra", "roma", "cinecitta"]', f'timestamp: {q(TS)}', '---', '',
         "# MedusA Gym - Fight n' Fitness", '',
         "Palestra di Via Quinto Sertorio 24, 00174 Roma (Cinecittà), gestita dall'A.S.D. Yama Team. Prima lezione gratuita su prenotazione: WhatsApp +39 392 070 8111, telefono +39 06 747 7431, medusagym2023@gmail.com. Orari: lun-ven 8-22, sab 9-17, domenica chiuso. I prezzi si comunicano solo in segreteria.", '']
titles = {'Organization':'Palestra','Course':'Corsi','Location':'Zone e come arrivare','Person':'Istruttori','Service':'Abbonamenti','FAQ':'Domande frequenti','Guide':'Guide','Collection':'Indice guide','Page':'Altre pagine'}
for t in order:
    items = [e for e in entries if e[0] == t]
    if not items: continue
    lines += [f'## {titles[t]}', '']
    for _, title, desc, rel in items:
        lines.append(f'- [{title}]({rel}): {desc}'.rstrip(': '))
    lines.append('')
open(os.path.join(OUT, 'index.md'), 'w', encoding='utf-8').write('\n'.join(lines))
print(len(entries) + 1, 'file OKF in medusa-gym/okf')
