#!/usr/bin/env python3
"""Genera le illustrazioni animate (SVG + CSS) usate come immagine di apertura
al posto delle foto: mappa 3D (come arrivare), doccia (spogliatoi), cartello metro.
Scrive i file in tools/art/*.html; build_pillars.py li incorpora, e questo script
sostituisce direttamente la figura in come-arrivare.html (pagina non generata)."""
import math, os, random, re

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'art')
SITE = os.path.join(os.path.dirname(HERE), 'medusa-gym 2')
os.makedirs(OUT, exist_ok=True)

G = '#39FF14'
GS = '#8CFF7B'


def wrap(name, svg, css, label):
    """Contenitore comune: SVG a pieno riquadro 4:5, animazioni solo se consentite."""
    return (f'<div class="art art-{name}" role="img" aria-label="{label}">'
            f'<style>.hero-ph.hero-art{{border:0;box-shadow:none;background:none;border-radius:0;overflow:visible}}.hero-ph.hero-art::after,.hero-ph.hero-art .hero-tag{{display:none}}.art{{position:absolute;inset:0}}.art svg{{width:100%;height:100%;display:block}}{css}'
            f'@media (prefers-reduced-motion:reduce){{.art *{{animation:none!important}}}}</style>{svg}</div>')


# ------------------------------------------------------------------ MAPPA 3D
def iso(x, y, z=0, s=.62, cx=400, cy=300):
    return (cx + (x - y) * .866 * s, cy + (x + y) * .5 * s - z * s)


def poly(pts, fill, stroke=None, sw=1, op=1, extra=''):
    p = ' '.join(f'{a:.1f},{b:.1f}' for a, b in pts)
    st = f' stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"' if stroke else ''
    return f'<polygon points="{p}" fill="{fill}" fill-opacity="{op}"{st}{extra}/>'


def box(x0, y0, x1, y1, h, top, left, right, edge, glow=False):
    t = [iso(x0, y0, h), iso(x1, y0, h), iso(x1, y1, h), iso(x0, y1, h)]
    l = [iso(x0, y1, h), iso(x1, y1, h), iso(x1, y1, 0), iso(x0, y1, 0)]
    r = [iso(x1, y0, h), iso(x1, y1, h), iso(x1, y1, 0), iso(x1, y0, 0)]
    cls = ' class="gymroof"' if glow else ''
    return (poly(l, left, edge, .8) + poly(r, right, edge, .8) + poly(t, top, edge, .9, 1, cls))


def build_map():
    random.seed(7)
    s = []
    # terreno
    gnd = [iso(-30, -30), iso(730, -30), iso(730, 730), iso(-30, 730)]
    s.append(poly(gnd, '#0d130d', 'rgba(57,255,20,.25)', 1.2))
    # griglia leggera
    for k in range(0, 701, 100):
        a, b = iso(k, 0), iso(k, 700)
        s.append(f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="rgba(255,255,255,.05)"/>')
        a, b = iso(0, k), iso(700, k)
        s.append(f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="rgba(255,255,255,.05)"/>')
    # strade: verticali x=100..600, orizzontali y=100,200 (Via Quinto Sertorio), 420 (viale), 520, 620
    xs = [100, 200, 300, 400, 500, 600]
    ys = [100, 200, 420, 520, 620]

    def road(p0, p1, w, col):
        a, b = iso(*p0), iso(*p1)
        return f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="{col}" stroke-width="{w}" stroke-linecap="round"/>'
    for x in xs:
        s.append(road((x, 0), (x, 700), 7, '#171717'))
    for y in ys:
        s.append(road((0, y), (700, y), 7 if y != 420 else 15, '#171717' if y != 420 else '#1b1b1b'))
    # linea metro A sotto il viale
    a, b = iso(0, 420), iso(700, 420)
    s.append(f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="#ff9a1f" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" opacity=".9"/>')

    # isolati con palazzi (ordinati dal fondo al fronte)
    cells = []
    bx = [0] + xs + [700]
    by = [0, 100, 200, 420, 520, 620, 700]
    gym = None
    for i in range(len(bx) - 1):
        for j in range(len(by) - 1):
            x0, x1 = bx[i] + 12, bx[i + 1] - 12
            y0, y1 = by[j] + 12, by[j + 1] - 12
            if x1 - x0 < 30 or y1 - y0 < 30:
                continue
            cells.append((x0, y0, x1, y1))
    cells.sort(key=lambda c: (c[0] + c[2]) + (c[1] + c[3]))
    for x0, y0, x1, y1 in cells:
        is_gym = (x0 <= 250 <= x1 and y0 <= 150 <= y1 and y1 <= 200 and x0 >= 188)
        if is_gym:
            gym = (x0, y0, x1, y1)
            continue
        w, d = x1 - x0, y1 - y0
        # 1-2 palazzi per isolato
        parts = [(x0, y0, x1, y1)]
        if w > 140 and random.random() > .35:
            m = x0 + w * random.uniform(.4, .6)
            parts = [(x0, y0, m - 5, y1), (m + 5, y0, x1, y1)]
        for px0, py0, px1, py1 in parts:
            h = random.choice([18, 26, 34, 44, 58, 72, 90])
            s.append(box(px0, py0, px1, py1, h, '#1d1d1d', '#141414', '#0f0f0f', 'rgba(255,255,255,.07)'))
    # palestra (con alone)
    gx0, gy0, gx1, gy1 = gym
    s.append(box(gx0, gy0, gx1, gy1, 62, '#0f2a0a', '#0c1d09', '#08140a', GS, glow=True))

    # percorsi a piedi (verde pieno da Giulio Agricola, tratteggiato da Subaugusta)
    def path(pts):
        q = [iso(*p) for p in pts]
        return 'M' + ' L'.join(f'{a:.1f},{b:.1f}' for a, b in q)
    ga = [(360, 420), (360, 200), (250, 200)]
    sb = [(160, 420), (160, 200), (250, 200)]
    s.append(f'<path d="{path(sb)}" fill="none" stroke="{GS}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 10" class="rt2" opacity=".75"/>')
    s.append(f'<path d="{path(ga)}" fill="none" stroke="{G}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="rt" filter="url(#glow)"/>')

    # stazioni
    def station(x, y, name, dx, dy, w):
        px, py = iso(x, y, 0)
        txt = (f'<g class="st"><circle cx="{px:.1f}" cy="{py:.1f}" r="15" fill="#e11d27" stroke="#fff" stroke-width="2.5"/>'
               f'<text x="{px:.1f}" y="{py + 6:.1f}" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="19" fill="#fff">M</text></g>')
        lx, ly = px + dx, py + dy
        txt += (f'<g><rect x="{lx - w / 2:.1f}" y="{ly - 18:.1f}" width="{w}" height="26" rx="13" fill="rgba(10,10,10,.88)" stroke="rgba(255,255,255,.2)"/>'
                f'<text x="{lx:.1f}" y="{ly:.1f}" text-anchor="middle" font-family="Archivo,system-ui,sans-serif" font-size="13" font-weight="600" fill="#f2f2f2">{name}</text></g>')
        return txt
    s.append(station(360, 420, 'Giulio Agricola', 40, 46, 140))
    s.append(station(160, 420, 'Subaugusta', -10, 46, 112))

    # pin palestra
    px, py = iso(250, 150, 62 + 4)
    s.append(f'<g class="pin" transform="translate({px:.1f},{py:.1f})">'
             f'<ellipse class="ring" cx="0" cy="42" rx="26" ry="10" fill="none" stroke="{G}" stroke-width="2"/>'
             f'<ellipse class="ring r2" cx="0" cy="42" rx="26" ry="10" fill="none" stroke="{G}" stroke-width="2"/>'
             f'<g class="pinb"><path d="M0,40 C-22,10 -26,-8 -26,-20 A26,26 0 1 1 26,-20 C26,-8 22,10 0,40 Z" fill="{G}" filter="url(#glow)"/>'
             f'<circle cx="0" cy="-22" r="11" fill="#071a05"/></g></g>')
    lx, ly = px + 0, py - 100
    s.append(f'<g class="pinlab"><rect x="{lx - 78:.1f}" y="{ly - 21:.1f}" width="156" height="32" rx="16" fill="{G}"/>'
             f'<text x="{lx:.1f}" y="{ly:.1f}" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="22" letter-spacing="1.5" fill="#041004">MEDUSA GYM</text></g>')

    # etichette strade
    tx, ty = iso(520, 420)
    s.append(f'<text x="{tx:.1f}" y="{ty + 4:.1f}" transform="rotate(30 {tx:.1f} {ty:.1f})" font-family="Archivo,system-ui,sans-serif" font-size="12" letter-spacing="2" fill="rgba(242,242,242,.5)" text-anchor="middle">VIA TUSCOLANA · METRO A</text>')
    tx, ty = iso(420, 200)
    s.append(f'<text x="{tx:.1f}" y="{ty + 4:.1f}" transform="rotate(30 {tx:.1f} {ty:.1f})" font-family="Archivo,system-ui,sans-serif" font-size="11" letter-spacing="2" fill="rgba(242,242,242,.55)" text-anchor="middle">VIA QUINTO SERTORIO</text>')

    defs = ('<defs><filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.2" result="b"/>'
            '<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'
            '<radialGradient id="bgm" cx="50%" cy="38%" r="70%"><stop offset="0" stop-color="#14240f"/><stop offset=".6" stop-color="#0b0f0a"/><stop offset="1" stop-color="#070707"/></radialGradient></defs>')
    svg = (f'<svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">{defs}'
           f'<g class="world">{"".join(s)}</g>'
           f'<text x="26" y="40" font-family="Archivo,system-ui,sans-serif" font-size="11" letter-spacing="2.2" fill="rgba(242,242,242,.45)">MAPPA SCHEMATICA · NON IN SCALA</text></svg>')
    css = ('.art-mappa .world{animation:mfloat 7s ease-in-out infinite}'
           '.art-mappa .rt{stroke-dasharray:14 12;animation:mdash 1.6s linear infinite}'
           '.art-mappa .rt2{animation:mdash2 2.4s linear infinite}'
           '.art-mappa .gymroof{animation:mroof 2.6s ease-in-out infinite}'
           '.art-mappa .pinb{animation:mpin 1.9s ease-in-out infinite}'
           '.art-mappa .ring{transform-box:fill-box;transform-origin:center;animation:mring 2.4s ease-out infinite}'
           '.art-mappa .ring.r2{animation-delay:1.2s}'
           '.art-mappa .st{animation:mst 2.8s ease-in-out infinite;transform-box:fill-box;transform-origin:center}'
           '@keyframes mfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}'
           '@keyframes mdash{to{stroke-dashoffset:-52}}@keyframes mdash2{to{stroke-dashoffset:-28}}'
           '@keyframes mroof{0%,100%{fill:#0f2a0a}50%{fill:#17420f}}'
           '@keyframes mpin{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}'
           '@keyframes mring{0%{transform:scale(.4);opacity:.9}100%{transform:scale(2.4);opacity:0}}'
           '@keyframes mst{0%,100%{transform:scale(1)}50%{transform:scale(1.14)}}')
    return wrap('mappa', svg, css, 'Mappa 3D animata: dalla metro A Giulio Agricola e Subaugusta a piedi fino alla MedusA Gym in Via Quinto Sertorio')


# ------------------------------------------------------------------ DOCCIA
def build_shower():
    random.seed(11)
    o = []
    # piastrelle
    for r in range(0, 0):
        for c in range(0, 0):
            x, y = c * 92 - 6, r * 78 - 6
            o.append(f'<rect x="{x}" y="{y}" width="86" height="72" rx="6" fill="#101010" stroke="rgba(255,255,255,.045)"/>')
    # armadietti a sinistra
    for k in range(3):
        x = 40 + k * 112
        o.append(f'<g><rect x="{x}" y="330" width="100" height="560" rx="10" fill="#181818" stroke="rgba(255,255,255,.14)" stroke-width="2"/>'
                 f'<rect x="{x + 14}" y="352" width="72" height="14" rx="4" fill="#0c0c0c"/>'
                 f'<rect x="{x + 14}" y="376" width="72" height="14" rx="4" fill="#0c0c0c"/>'
                 f'<rect x="{x + 14}" y="400" width="72" height="14" rx="4" fill="#0c0c0c"/>'
                 f'<circle cx="{x + 50}" cy="640" r="9" fill="#0c0c0c" stroke="{GS}" stroke-width="2"/>'
                 f'<text x="{x + 50}" y="800" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="34" fill="rgba(242,242,242,.35)">{k + 1:02d}</text></g>')
    # tubo e soffione (destra)
    o.append(f'<path d="M640,-10 L640,170 Q640,215 600,215 L560,215" fill="none" stroke="#2c2c2c" stroke-width="22" stroke-linecap="round"/>'
             f'<path d="M640,-10 L640,170 Q640,215 600,215 L560,215" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="4" stroke-linecap="round" transform="translate(-6,0)"/>')
    o.append(f'<g transform="rotate(-8 520 240)"><ellipse cx="520" cy="236" rx="96" ry="30" fill="#242424" stroke="{GS}" stroke-width="3"/>'
             f'<ellipse cx="520" cy="250" rx="84" ry="22" fill="#141414"/>'
             + ''.join(f'<circle cx="{520 + (i - 3) * 22}" cy="{252 + (3 - abs(i - 3)) * 1.2:.1f}" r="2.4" fill="#050505"/>' for i in range(7)) + '</g>')
    # gocce
    drops = []
    for i in range(34):
        x = 450 + random.random() * 140
        d = random.uniform(0, 1.6)
        sp = random.uniform(.9, 1.4)
        ln = random.uniform(26, 54)
        drops.append(f'<rect class="dr" x="{x:.1f}" y="262" width="3" height="{ln:.0f}" rx="1.5" fill="url(#wg)" style="animation-delay:-{d:.2f}s;animation-duration:{sp:.2f}s"/>')
    o.append(''.join(drops))
    # pozza e spruzzi
    o.append(f'<ellipse cx="520" cy="880" rx="150" ry="28" fill="rgba(57,255,20,.07)"/>'
             f'<ellipse class="sp" cx="520" cy="880" rx="150" ry="28" fill="none" stroke="{GS}" stroke-width="2"/>'
             f'<ellipse class="sp s2" cx="520" cy="880" rx="150" ry="28" fill="none" stroke="{GS}" stroke-width="2"/>')
    # caldo / freddo
    o.append('<g transform="translate(415,-60)"><g class="hc hot"><circle cx="300" cy="470" r="46" fill="#ff5a1f" fill-opacity=".16" stroke="#ff7a3d" stroke-width="3"/>'
             '<path d="M300,440 C312,458 324,466 324,484 A24,24 0 0 1 276,484 C276,474 281,468 286,462 C288,470 292,474 296,474 C294,462 296,450 300,440 Z" fill="#ff7a3d"/>'
             '<text x="300" y="548" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="30" letter-spacing="2" fill="#ff9a66">CALDO</text></g></g>')
    sf = ''.join(f'<line x1="0" y1="-24" x2="0" y2="24" stroke="#6fd0ff" stroke-width="4.5" stroke-linecap="round" transform="rotate({a})"/>' for a in (0, 60, 120))
    sf += ''.join(f'<path d="M-7,-17 L0,-11 L7,-17 M-7,17 L0,11 L7,17" fill="none" stroke="#6fd0ff" stroke-width="3" stroke-linecap="round" transform="rotate({a})"/>' for a in (0, 60, 120))
    o.append('<g transform="translate(415,-110)"><g class="hc cold"><circle cx="300" cy="680" r="46" fill="#3aa8ff" fill-opacity=".16" stroke="#6fd0ff" stroke-width="3"/>'
             f'<g transform="translate(300,680)">{sf}</g>'
             '<text x="300" y="758" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="30" letter-spacing="2" fill="#9fdcff">FREDDO</text></g></g>')
    # vapore
    steam = []
    for i, x in enumerate([420, 500, 570, 640, 700]):
        steam.append(f'<path class="vp" d="M{x},860 C{x - 40},780 {x + 40},720 {x},640 S{x + 30},520 {x},430" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="26" stroke-linecap="round" filter="url(#bl)" style="animation-delay:-{i * 1.1:.1f}s"/>')
    o.append(''.join(steam))
    defs = ('<defs><linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8CFF7B" stop-opacity="0"/><stop offset="1" stop-color="#b9ffe0" stop-opacity=".95"/></linearGradient>'
            '<filter id="bl"><feGaussianBlur stdDeviation="16"/></filter>'
            '<linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset=".55" stop-color="#0a0a0a" stop-opacity="0"/><stop offset="1" stop-color="#0a0a0a" stop-opacity=".55"/></linearGradient></defs>')
    svg = (f'<svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">{defs}'
           f'{"".join(o)}</svg>')
    css = ('.art-doccia .dr{animation-name:ddrop;animation-iteration-count:infinite;animation-timing-function:linear}'
           '.art-doccia .sp{transform-box:fill-box;transform-origin:center;animation:dsp 1.8s ease-out infinite}'
           '.art-doccia .sp.s2{animation-delay:.9s}'
           '.art-doccia .hot{animation:dhot 6s ease-in-out infinite}.art-doccia .cold{animation:dcold 6s ease-in-out infinite}.art-doccia .hc{transform-box:fill-box;transform-origin:center}.art-doccia .dr{animation-name:ddrop}'
           '@keyframes dhot{0%,45%{opacity:1;transform:scale(1.08)}55%,100%{opacity:.4;transform:scale(1)}}@keyframes dcold{0%,45%{opacity:.4;transform:scale(1)}55%,100%{opacity:1;transform:scale(1.08)}}'
           '.art-doccia .vp{opacity:0;animation:dvp 6s ease-in-out infinite}'
           '@keyframes ddrop{0%{transform:translateY(0);opacity:0}10%{opacity:1}100%{transform:translateY(600px);opacity:.1}}'
           '@keyframes dsp{0%{transform:scale(.25);opacity:.9}100%{transform:scale(1);opacity:0}}'
           '@keyframes dvp{0%{opacity:0;transform:translateY(40px)}35%{opacity:.16}100%{opacity:0;transform:translateY(-120px)}}')
    return wrap('doccia', svg, css, 'Animazione di una doccia con acqua che scende e vapore, accanto agli armadietti dello spogliatoio')


# ------------------------------------------------------------------ CARTELLO METRO
def build_metro():
    o = []
    # luce a terra
    o.append('<ellipse cx="400" cy="330" rx="330" ry="260" fill="rgba(225,29,39,.1)" class="halo"/>')
    # palo
    o.append('<rect x="388" y="480" width="24" height="330" fill="#242424"/><rect x="388" y="480" width="6" height="330" fill="rgba(255,255,255,.12)"/>')
    # cartello con la M
    o.append('<g class="sign"><rect x="215" y="120" width="370" height="370" rx="36" fill="#e11d27" stroke="#ff6b72" stroke-width="3"/>'
             '<rect x="238" y="143" width="324" height="324" rx="22" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="3"/>'
             '<path d="M290,410 L290,200 L400,330 L510,200 L510,410" fill="none" stroke="#fff" stroke-width="42" stroke-linejoin="miter" stroke-linecap="butt"/></g>')
    # piastra stazione
    o.append(f'<g class="plate"><rect x="140" y="530" width="520" height="150" rx="22" fill="#141414" stroke="rgba(255,255,255,.18)" stroke-width="2"/>'
             f'<circle cx="212" cy="605" r="42" fill="#ff9a1f"/><text x="212" y="627" text-anchor="middle" font-family="Bebas Neue,Impact,sans-serif" font-size="66" fill="#141414">A</text>'
             f'<text x="276" y="590" font-family="Bebas Neue,Impact,sans-serif" font-size="46" letter-spacing="2" fill="#f2f2f2">GIULIO AGRICOLA</text>'
             f'<text x="276" y="640" font-family="Bebas Neue,Impact,sans-serif" font-size="46" letter-spacing="2" fill="{GS}">SUBAUGUSTA</text></g>')
    # galleria e treno
    o.append('<rect x="0" y="815" width="800" height="3" fill="rgba(255,255,255,.12)"/>')
    o.append('<line x1="0" y1="940" x2="800" y2="940" stroke="#2c2c2c" stroke-width="4"/><line x1="0" y1="968" x2="800" y2="968" stroke="#2c2c2c" stroke-width="4"/>')
    win = ''.join(f'<rect x="{30 + i * 92}" y="868" width="62" height="34" rx="6" fill="#d9ffd0"/>' for i in range(7))
    o.append(f'<g class="train"><rect x="0" y="852" width="700" height="78" rx="18" fill="#cfcfcf"/><rect x="0" y="912" width="700" height="12" fill="#e11d27"/>{win}'
             f'<rect x="690" y="860" width="14" height="40" rx="6" fill="#fff6c8"/><ellipse cx="760" cy="880" rx="90" ry="26" fill="rgba(255,246,200,.18)"/></g>')
    defs = '<defs><linearGradient id="mfade" x1="0" y1="0" x2="0" y2="1"><stop offset=".6" stop-color="#0a0a0a" stop-opacity="0"/><stop offset="1" stop-color="#0a0a0a" stop-opacity=".5"/></linearGradient></defs>'
    svg = (f'<svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">{defs}'
           f'{"".join(o)}</svg>')
    css = ('.art-metro .halo{animation:mhalo 3.4s ease-in-out infinite}'
           '.art-metro .sign{animation:msign 3.4s ease-in-out infinite;transform-origin:400px 305px}'
           '.art-metro .plate{animation:mplate 3.4s ease-in-out infinite}'
           '.art-metro .train{animation:mtrain 7s linear infinite}'
           '@keyframes mhalo{0%,100%{opacity:.5}50%{opacity:1}}'
           '@keyframes msign{0%,100%{filter:drop-shadow(0 0 10px rgba(225,29,39,.45))}50%{filter:drop-shadow(0 0 30px rgba(225,29,39,.95))}}'
           '@keyframes mplate{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}'
           '@keyframes mtrain{0%{transform:translateX(-860px)}100%{transform:translateX(900px)}}')
    return wrap('metro', svg, css, 'Cartello animato della metro con la M rossa e le fermate della linea A Giulio Agricola e Subaugusta')


def main():
    arts = {'mappa': build_map(), 'doccia': build_shower(), 'metro': build_metro()}
    for k, v in arts.items():
        with open(os.path.join(OUT, k + '.html'), 'w', encoding='utf-8') as f:
            f.write(v)
        print('art', k, len(v), 'byte')
    # come-arrivare.html non e' generata: sostituisce la figura
    p = os.path.join(SITE, 'come-arrivare.html')
    h = open(p, encoding='utf-8').read()
    pat = re.compile(r'(<figure class="hero-ph[^"]*">\s*)(?:<img [^>]*>|<div class="art .*?</div>)(\s*<figcaption)', re.S)
    new = pat.sub(lambda m: m.group(1) + arts['mappa'] + m.group(2), h, count=1)
    new = new.replace('<figure class="hero-ph">', '<figure class="hero-ph hero-art">', 1) if 'hero-art' not in new else new
    if new != h:
        open(p, 'w', encoding='utf-8').write(new)
        print('come-arrivare.html aggiornata')


if __name__ == '__main__':
    main()
