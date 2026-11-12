"""Genera medusa-gym/js/prova-sheet.js dal modulo della home (index.html, sezione #prova).
Rilanciare dopo ogni modifica al modulo della home: python3 tools/build_prova_sheet.py"""
import re, json, pathlib
R = pathlib.Path(__file__).resolve().parent.parent / 'medusa-gym'
s = (R / 'index.html').read_text(encoding='utf-8')
# markup: barra di avanzamento + modulo + alternativa WhatsApp + conferma
a = s.index('<div class="pv-prog"'); b = s.index('<div class="fsuc" id="fsuc"')
b = s.index('<ol class="pv-steps">', b); b = s.index('</ol>', b) + len('</ol>')
html = s[a:b] + '\n      </div>'
html = re.sub(r'\n\s+', '\n', html)
# css: regole del modulo nel primo <style> della home, riscritte sotto .pvs
st = s[s.index('<style'):s.index('</style>', s.index('/* Modulo prova a tocchi'))]
SEL = re.compile(r'^(\.step|@keyframes stepIn|\.fgrid|\.fg|\.consents|\.cons|\.ferr|\.btn-back|\.btn-next|\.btn-submit|\.fnote|\.falt|\.wa-alt|\.fsuc|\.pv-|#prova |#fsuc|@media\(max-width:600px\)\{#prova|@media \(prefers-reduced-motion:reduce\)\{#prova)')
rules = []
for line in st.split('\n'):
    line = line.strip()
    if not SEL.match(line) or line.startswith(('.steps-bar', '.step-dot', '.step-line')): continue
    if line.startswith('@keyframes'): rules.append(line); continue
    def scope(sel):
        sel = sel.strip().replace('#prova ', '')
        return '.pvs ' + sel if sel else '.pvs'
    if line.startswith('@media'):
        inner = line[line.index('{') + 1:-1]
        body = re.sub(r'(^|\})([^{}]+)\{', lambda m: m.group(1) + ','.join(scope(x) for x in m.group(2).split(',')) + '{', inner)
        rules.append(line[:line.index('{') + 1] + body + '}'); continue
    sel, rest = line.split('{', 1)
    rules.append(','.join(scope(x) for x in sel.split(',')) + '{' + rest)
css = '\n'.join(rules)
css = css.replace('.pvs .btn-submit{animation:breathe 3s ease-in-out infinite}', '')
tpl = (R / 'js' / 'prova-sheet.src.js').read_text(encoding='utf-8')
out = tpl.replace('/*@@HTML@@*/""', json.dumps(html, ensure_ascii=False)).replace('/*@@CSS@@*/""', json.dumps(css, ensure_ascii=False))
(R / 'js' / 'prova-sheet.js').write_text('/* FILE GENERATO da tools/build_prova_sheet.py partendo da js/prova-sheet.src.js e dal modulo di index.html: non modificarlo a mano. */\n' + out, encoding='utf-8')
print('ok', len(html), len(css))
