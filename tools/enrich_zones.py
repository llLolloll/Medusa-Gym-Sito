#!/usr/bin/env python3
"""Riscrive FAQ e blocco 'Perche noi' delle 5 pagine di zona (contenuti diversi per zona).
FAQ visibili e FAQPage JSON-LD sono generati dalla stessa lista, quindi restano identici."""
import html, json, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "medusa-gym"
WA = "La prima lezione è gratuita e va prenotata su WhatsApp al 392 070 8111 o dal modulo sul sito."

ZONES = {
 "palestra-cinecitta-due": {
  "chk": [
   "<b>Vicino a Cinecittà Due.</b> Il centro commerciale di Viale Palmiro Togliatti 2 è a circa 850 metri: a piedi sono circa 12 minuti.",
   "<b>Orari lunghi.</b> Dal lunedì al venerdì dalle 8 alle 22, il sabato dalle 9 alle 17: ti alleni prima o dopo gli impegni della giornata.",
   "<b>Prima provi.</b> La prima lezione è gratuita e senza impegno, poi scegli tra <a href=\"abbonamenti.html\">ONE, OPEN e FAMILY</a>.",
   "<b>Spazi curati.</b> Spogliatoi separati uomo e donna, con docce e armadietti personali.",
   "<b>Sempre gli stessi istruttori.</b> Ti seguono persone che imparano il tuo nome, non turni che cambiano.",
  ],
  "faq": [
   ("MedusA Gym è vicina al centro commerciale Cinecittà Due?", "Sì. Cinecittà Due, in Viale Palmiro Togliatti 2, è a circa 850 metri da Via Quinto Sertorio 24: a piedi sono circa 12 minuti."),
   ("Da Cinecittà Due conviene venire a piedi o in metro?", "A piedi sono circa 12 minuti. Se piove o hai fretta puoi usare la metro A: Giulio Agricola è a circa 5 minuti dalla palestra."),
   ("Posso allenarmi prima o dopo gli impegni in zona?", "Sì. La sala pesi è aperta dalle 8 alle 22 dal lunedì al venerdì e il sabato dalle 9 alle 17, con lezioni anche in pausa pranzo e la sera."),
   ("Si trova parcheggio se arrivo in auto da Cinecittà Due?", "Sì, si parcheggia in tutta la zona intorno alla palestra e ci sono numerosi garage nelle vicinanze."),
   ("Cosa porto alla prima lezione?", "Abbigliamento comodo, un asciugamano e un lucchetto per l'armadietto. " + WA),
  ]},
 "palestra-tuscolana": {
  "chk": [
   "<b>Recensioni vere.</b> 4,8 su 5 su Google, con oltre 100 recensioni dei soci.",
   "<b>Dalla Tuscolana a due passi.</b> Dalla fermata Cinecittà della metro A è una fermata fino a Subaugusta; nelle vie intorno passano le linee bus 451, 520, 548, 557 e 590.",
   "<b>Orari lunghi.</b> Dal lunedì al venerdì dalle 8 alle 22, il sabato dalle 9 alle 17.",
   "<b>Prima provi.</b> La prima lezione è gratuita e senza impegno, poi scegli tra <a href=\"abbonamenti.html\">ONE, OPEN e FAMILY</a>.",
   "<b>Un ambiente familiare.</b> Più che una palestra, una famiglia: ti seguono sempre gli stessi istruttori.",
  ],
  "faq": [
   ("C’è una palestra vicino a Via Tuscolana?", "Sì. MedusA Gym è in Via Quinto Sertorio 24, a Cinecittà, a pochi minuti da Via Tuscolana."),
   ("Come arrivo dalla fermata Cinecittà della metro A?", "Dalla fermata Cinecittà sono circa 1,2 km a piedi (16 minuti), oppure una fermata di metro fino a Subaugusta e poi circa 6 minuti a piedi."),
   ("Cinecittà Studios è lontano dalla palestra?", "Gli studi cinematografici di Via Tuscolana 1055 distano circa 1,3 km, 18 minuti a piedi. Distanze stimate con Google Maps."),
   ("Quali autobus passano vicino alla palestra?", "Nelle vie intorno passano le linee 451, 520, 548, 557 e 590. Se arrivi in auto, si parcheggia in zona e ci sono numerosi garage nelle vicinanze."),
   ("Come posso provare la palestra?", WA),
  ]},
 "palestra-quadraro-appio-claudio": {
  "chk": [
   "<b>Metro A diretta.</b> Da Porta Furba-Quadraro sono 3 fermate fino a Giulio Agricola, da Lucio Sestio una sola: poi circa 5 minuti a piedi.",
   "<b>Il tuo quartiere, la tua palestra.</b> Chi vive al Quadraro conosce il percorso di street art del progetto MURo, che parte proprio dalla fermata Porta Furba-Quadraro: dopo i murales, un allenamento vero.",
   "<b>Orari lunghi.</b> Dal lunedì al venerdì dalle 8 alle 22, il sabato dalle 9 alle 17.",
   "<b>Prima provi.</b> La prima lezione è gratuita e senza impegno: la prenoti e ti aspettiamo con l’istruttore giusto.",
   "<b>Ti cambi qui.</b> Spogliatoi separati uomo e donna, con docce e armadietti, per tornare a casa freschi.",
  ],
  "faq": [
   ("C’è una palestra vicino al Quadraro?", "MedusA Gym è in Via Quinto Sertorio 24, a Cinecittà. Dalla fermata Porta Furba-Quadraro sono 3 fermate di metro A fino a Giulio Agricola, poi pochi passi."),
   ("Come arrivo da Appio Claudio?", "Da Lucio Sestio è una fermata di metro A fino a Giulio Agricola, la fermata più vicina alla palestra, a circa 5 minuti a piedi."),
   ("Posso venire dal Tuscolano o da Appio Latino?", "Sì. Da Numidio Quadrato sono due fermate fino a Giulio Agricola, da Arco di Travertino sono 4."),
   ("Conviene la metro o l’auto dal Quadraro?", "La metro A è la scelta più semplice, senza cambi. In auto si parcheggia in tutta la zona intorno alla palestra e ci sono numerosi garage nelle vicinanze."),
   ("Come posso provare la palestra?", WA),
  ]},
 "palestra-vicino-metro-a": {
  "chk": None,
  "faq": [
   ("Qual è la fermata della metro A più vicina a MedusA Gym?", "Giulio Agricola, a circa 400 metri e 5 minuti a piedi. Subaugusta è a circa 450 metri, 6 minuti a piedi."),
   ("Come arrivo dalla fermata Cinecittà?", "Dalla fermata Cinecittà è una fermata di metro A fino a Subaugusta, poi circa 6 minuti a piedi fino a Via Quinto Sertorio 24."),
   ("Quante fermate ci sono da Anagnina?", "Dal capolinea Anagnina sono 2 fermate fino a Subaugusta e 3 fino a Giulio Agricola."),
   ("E da Lucio Sestio e Numidio Quadrato?", "Da Lucio Sestio è una fermata fino a Giulio Agricola, da Numidio Quadrato sono due."),
   ("Posso allenarmi dopo il lavoro e tornare in metro?", "Sì. La palestra è aperta dal lunedì al venerdì dalle 8 alle 22 e il sabato dalle 9 alle 17. La domenica è chiusa. Ci sono docce e spogliatoi separati per cambiarti prima di rientrare."),
   ("Come posso provare la palestra?", WA),
  ]},
 "palestra-don-bosco": {
  "chk_append": "<b>Nel quartiere.</b> A Don Bosco c’è la Basilica di San Giovanni Bosco (Viale dei Salesiani 9), inaugurata nel 1959: MedusA Gym è nella stessa zona di Cinecittà.",
  "faq": [
   ("C’è una palestra a Don Bosco?", "MedusA Gym è in Via Quinto Sertorio 24, nel quartiere Cinecittà, e serve Don Bosco: dal quartiere arrivi a piedi."),
   ("Quali corsi posso fare vicino a Don Bosco?", "Sala pesi, kickboxing, pugilato, autodifesa PATH, functional training, calisthenics, ginnastica posturale e Active Senior, più Kickboxing Kids 9-14."),
   ("Posso venire con la mia famiglia?", "Sì. La formula FAMILY vale per 2, 3 o 4 persone dello stesso nucleo. Ci sono Kickboxing Kids 9-14 il martedì e il giovedì e Active Senior per gli over 55."),
   ("Come arrivo dalla metro?", "Con la metro A scendi a Giulio Agricola, a circa 5 minuti a piedi, oppure a Subaugusta, a circa 6."),
   ("Ci sono orari comodi per chi lavora?", "Sì: la sala pesi è aperta dalle 8 alle 22 dal lunedì al venerdì e ci sono lezioni anche in pausa pranzo e la sera. Il sabato siamo aperti dalle 9 alle 17."),
   ("La prima lezione è gratuita?", "Sì, vale per tutti i corsi. " + WA),
  ]},
}

def esc(t): return html.escape(t, quote=False)

def replace_mainentity(s, faq):
    i = s.index('"@type": "FAQPage"')
    j = s.index('"mainEntity": [', i) + len('"mainEntity": ')
    depth = 0; k = j; instr = False
    while True:
        c = s[k]
        if instr:
            if c == "\\": k += 1
            elif c == '"': instr = False
        else:
            if c == '"': instr = True
            elif c == "[": depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0: break
        k += 1
    items = [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]
    block = json.dumps(items, ensure_ascii=False, indent=1)
    block = block.replace("\n", "\n   ")
    return s[:j] + block + s[k+1:]

for slug, d in ZONES.items():
    p = ROOT / f"{slug}.html"
    s = p.read_text(encoding="utf8")
    # FAQ visibile
    a = s.index('<details class="fq">')
    b = s.index('<p class="note"', a)
    details = "".join(f'<details class="fq"><summary><h3>{esc(q)}</h3></summary><div class="fq-a"><p>{esc(ans)}</p></div></details>' for q, ans in d["faq"])
    s = s[:a] + details + "\n      " + s[b:]
    s = replace_mainentity(s, d["faq"])
    # chk
    if d.get("chk"):
        m = re.search(r'(<section class="blk" id="perche">.*?)<ul class="chk">.*?</ul>', s, re.S)
        lis = "".join(f"<li>{x}</li>" for x in d["chk"])
        s = s[:m.start()] + m.group(1) + f'<ul class="chk">{lis}</ul>' + s[m.end():]
    if d.get("chk_append"):
        m = re.search(r'(<section class="blk" id="famiglia">.*?<ul class="chk">.*?)</ul>', s, re.S)
        s = s[:m.end(1)] + f"<li>{d['chk_append']}</li>" + s[m.end(1):]
    p.write_text(s, encoding="utf8")
    json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', s, re.S).group(1))
    print("ok", slug)
