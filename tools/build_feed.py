#!/usr/bin/env python3
"""Genera medusa-gym/feed.xml (Atom) dalle guide in guide/*.html. Rilanciare quando si aggiunge o aggiorna una guida."""
import re, glob, os, html
base = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "medusa-gym")
items = []
for f in sorted(glob.glob(os.path.join(base, "guide", "*.html"))):
    n = os.path.basename(f)
    if n == "index.html": continue
    s = open(f, encoding="utf-8").read()
    t = html.unescape(re.search(r"<title>(.*?)</title>", s, re.S).group(1)).replace(" | MedusA Gym", "").strip()
    d = html.unescape(re.search(r'<meta name="description" content="(.*?)"', s).group(1))
    pub = re.search(r'"datePublished":\s*"(\d{4}-\d{2}-\d{2})', s)
    mod = re.search(r'"dateModified":\s*"(\d{4}-\d{2}-\d{2})', s)
    items.append((mod.group(1) if mod else pub.group(1), pub.group(1) if pub else mod.group(1), t, d, "https://www.medusagym.it/guide/" + n))
items.sort(reverse=True)
e = lambda x: html.escape(x, quote=True)
out = ['<?xml version="1.0" encoding="UTF-8"?>',
 '<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="it">',
 "  <title>MedusA Gym - Guide</title>",
 "  <subtitle>Guide pratiche su kickboxing, pugilato, functional e palestra a Roma Cinecittà</subtitle>",
 '  <link href="https://www.medusagym.it/feed.xml" rel="self" type="application/atom+xml"/>',
 '  <link href="https://www.medusagym.it/guide/" rel="alternate" type="text/html"/>',
 "  <id>https://www.medusagym.it/guide/</id>",
 f"  <updated>{items[0][0]}T00:00:00+02:00</updated>",
 "  <author><name>MedusA Gym - Fight n' Fitness</name></author>"]
for mod, pub, t, d, u in items:
    out += ["  <entry>", f"    <title>{e(t)}</title>", f'    <link href="{u}" rel="alternate" type="text/html"/>',
            f"    <id>{u}</id>", f"    <published>{pub}T00:00:00+02:00</published>", f"    <updated>{mod}T00:00:00+02:00</updated>",
            f"    <summary>{e(d)}</summary>", "  </entry>"]
out.append("</feed>")
open(os.path.join(base, "feed.xml"), "w", encoding="utf-8").write("\n".join(out) + "\n")
print(len(items), "guide nel feed")
