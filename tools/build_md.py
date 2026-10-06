#!/usr/bin/env python3
"""Genera le versioni markdown delle pagine pubbliche in "medusa-gym 2/md/".
Vercel le serve quando un agente AI chiede la pagina con "Accept: text/markdown" (vedi vercel.json).
Rilanciare dopo ogni modifica ai contenuti delle pagine:  python3 tools/build_md.py
"""
import glob, os, re, sys
from urllib.parse import urljoin
from bs4 import BeautifulSoup
from markdownify import markdownify as md

SITE = os.path.join(os.path.dirname(__file__), '..', 'medusa-gym 2')
BASE = 'https://www.medusagym.it/'
SKIP = {'privacy-policy.html', 'cookie-policy.html'}
OUT = os.path.join(SITE, 'md')

def page_url(rel):
    return BASE if rel == 'index.html' else BASE + rel

def convert(path, rel):
    html = open(path, encoding='utf-8').read()
    if 'noindex' in html:
        return None
    soup = BeautifulSoup(html, 'lxml')
    title = (soup.title.string or '').strip() if soup.title else rel
    d = soup.find('meta', attrs={'name': 'description'})
    desc = d['content'].strip() if d and d.get('content') else ''
    for t in soup(['script', 'style', 'svg', 'noscript', 'nav', 'header', 'footer', 'form',
                   'button', 'iframe', 'video', 'audio', 'canvas', 'template', 'input', 'select',
                   'textarea', 'picture', 'img']):
        t.decompose()
    for t in soup.select('[aria-hidden="true"], .sticky-cta, .mnav, #cky-consent, [hidden]'):
        t.decompose()
    for a in soup.find_all('a', href=True):
        h = a['href']
        if h == '#' or h.startswith('javascript:'):
            a.unwrap()
            continue
        a['href'] = urljoin(page_url(rel), h)
    for sm in soup.find_all('small'):
        sm.insert_before(' - ')
    for b in soup.select('span.sl b'):
        b.insert_after(' ')
    for sl in soup.select('span.sl'):
        sl.append(', ')
    for br in soup.find_all('br'):
        br.replace_with(' ')
    for w in soup.find_all('wbr'):
        w.decompose()
    body = soup.body or soup
    text = md(str(body), heading_style='ATX', bullets='-', strip=['span', 'em', 'i', 'div', 'section', 'article', 'main', 'aside'])
    text = re.sub(r',\s*(\||\n)', r' \1', text)
    text = re.sub(r'[ \t]+\n', '\n', text)
    text = re.sub(r'\n{3,}', '\n\n', text).strip()
    head = f'# {title}\n\n> {desc}\n\nFonte: {page_url(rel)}\n\n---\n\n'
    return head + text + '\n'

def main():
    n = 0
    files = sorted(glob.glob(os.path.join(SITE, '*.html')) + glob.glob(os.path.join(SITE, '*', '*.html')))
    for p in files:
        rel = os.path.relpath(p, SITE).replace(os.sep, '/')
        if rel.startswith('md/') or os.path.basename(rel) in SKIP:
            continue
        out = convert(p, rel)
        if out is None:
            continue
        dst = os.path.join(OUT, rel[:-5] + '.md')
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        open(dst, 'w', encoding='utf-8').write(out)
        n += 1
    print(n, 'pagine markdown generate in', os.path.relpath(OUT))

if __name__ == '__main__':
    sys.exit(main())
