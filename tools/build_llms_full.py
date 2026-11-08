#!/usr/bin/env python3
"""Genera medusa-gym/llms-full.txt: llms.txt + tutte le pagine Markdown di /md/ in un unico file.
Ordine per importanza (home, corsi, orari, abbonamenti... guide in fondo) e senza le righe
che sono solo bottoni/link di invito (Prenota, Scrivici, Scopri...), che per un'AI sono rumore.
Da rilanciare quando cambiano llms.txt o i file in md/."""
import glob, os, re

base = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "medusa-gym")
md = os.path.join(base, "md")

PRIORITA = [
    "index", "corsi/index", "orari", "abbonamenti", "perche-medusa", "prova-gratuita",
    "corsi/kickboxing", "corsi/pugilato", "corsi/autodifesa-path", "corsi/kickboxing-ragazzi",
    "corsi/functional-training", "corsi/calisthenics", "corsi/sala-pesi",
    "corsi/ginnastica-posturale", "corsi/active-senior",
    "team-last-round", "istruttori", "come-arrivare", "domande-frequenti",
]


def chiave(path):
    nome = os.path.relpath(path, md)[:-3].replace(os.sep, "/")
    if nome in PRIORITA:
        return (0, PRIORITA.index(nome), nome)
    if nome.startswith("guide/"):
        return (3, 0 if nome == "guide/index" else 1, nome)
    if nome.startswith("palestra-") or nome.startswith("sport-"):
        return (1, 0, nome)  # quartieri e segmenti
    return (2, 0, nome)      # persone e altre pagine


CTA = re.compile(r"^\s*(?:\d+\.\s*)?\[[^\]]+\]\([^)]+\)\s*$")  # riga fatta solo di un link
RUMORE = re.compile(r"^\s*(Ultimo aggiornamento|Last updated)", re.I)


def pulisci(testo):
    righe = []
    for r in testo.splitlines():
        if CTA.match(r) or RUMORE.match(r):
            continue
        righe.append(r)
    t = "\n".join(righe)
    return re.sub(r"\n{3,}", "\n\n", t).strip()


files = sorted(glob.glob(os.path.join(md, "**", "*.md"), recursive=True), key=chiave)
out = [open(os.path.join(base, "llms.txt"), encoding="utf-8").read().rstrip(),
       "\n\n---\n\n# Contenuto completo delle pagine (in ordine di importanza)\n"]
for f in files:
    out.append("\n\n---\n\n" + pulisci(open(f, encoding="utf-8").read()))
open(os.path.join(base, "llms-full.txt"), "w", encoding="utf-8").write("\n".join(out) + "\n")
print(len(files), "pagine")
