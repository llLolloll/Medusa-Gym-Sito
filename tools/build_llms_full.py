#!/usr/bin/env python3
"""Genera medusa-gym/llms-full.txt: llms.txt + tutte le pagine Markdown di /md/ in un unico file.
Da rilanciare quando cambiano llms.txt o i file in md/."""
import glob, os
base = os.path.join(os.path.dirname(__file__), "..", "medusa-gym")
out = [open(os.path.join(base, "llms.txt"), encoding="utf-8").read().rstrip(), "\n\n---\n\n# Contenuto completo delle pagine\n"]
files = sorted(glob.glob(os.path.join(base, "md", "**", "*.md"), recursive=True),
               key=lambda p: (p.count(os.sep), p))
files = [f for f in files if os.path.basename(f) != "index.md" or f.endswith(os.path.join("md", "index.md"))]
for f in files:
    out.append("\n\n---\n\n" + open(f, encoding="utf-8").read().strip())
open(os.path.join(base, "llms-full.txt"), "w", encoding="utf-8").write("\n".join(out) + "\n")
print(len(files), "pagine")
