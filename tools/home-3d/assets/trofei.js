// "L'angolo dei campioni": due cinture appese alle corde alte, tre medaglie su una corda piu' bassa, una coppa sulla tela.
// Origine = punto sulla tela ai piedi dell'angolo. L'angolo sta verso +X/+Z: tutto guarda verso -X/-Z (centro del ring).
// Metri, Y in alto. Corde, pali e ring NON sono modellati (esistono gia'): qui ci sono solo gli oggetti.
//
// opts: lod 'high' | 'low'; yCorda (1.0) quota corda delle cinture; yCordaBassa (0.75) quota corda delle medaglie;
//       rCorda (0.03) raggio delle corde; testo ('MEDUSA GYM') scritta sulla placca;
//       imbardata ([1.5, 3]) gradi di rotazione delle due cinture verso la diagonale;
//       placcaRuotata (false): true = scritta lungo la cintura (come su una cintura indossata, quindi verticale da appesa).
// userData.update(t): leggero dondolio delle medaglie (facoltativo). userData.ridisegna(): ridisegna la texture (font caricato dopo).
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const S = 512;                                            // lato dell'atlante (una texture colore + una di rilievo, stessa mappa)
const FONT = "'Bebas Neue', Impact, sans-serif";
// regioni dell'atlante in pixel canvas [x, y, w, h]
const REG = {
  placca: [16, 4, 480, 392],                              // placca centrale 22 x 18 cm
  laterale: [4, 410, 100, 88],                            // placca laterale
  med: [[110, 412, 82, 82], [198, 412, 82, 82], [286, 412, 82, 82]],   // facce medaglie 1, 2, 3
  pelle: [376, 406, 72, 100],                             // pelle con cuciture (si ripete a specchio lungo la cintura)
  nastro: [456, 406, 30, 100],                            // nastro verde e nero
  liscio: [493, 410, 14, 36],                             // metallo liscio
  nero: [493, 460, 14, 40],                               // nero pieno (base della coppa)
};
const TEX = {};                                           // texture condivise tra le chiamate (una per testo)

// il font c'e' davvero? (misura contro il monospace)
const haFont = (g, nome) => { g.save(); g.font = '40px monospace'; const a = g.measureText('MEDUSA 123').width; g.font = `40px ${nome}, monospace`; const b = g.measureText('MEDUSA 123').width; g.restore(); return Math.abs(b - a) > 0.5; };

// ------------------------------------------------------------------ disegno dell'atlante
function dipingi(g, col, testo) {
  let seed = 4711; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const gr = v => { v = Math.round(v); return `rgb(${v},${v},${v})`; };
  const k = (a, b) => gr(col ? a : b);                    // primo valore: colore (grigio, lo tinge il colore dei vertici); secondo: altezza
  const TAU = Math.PI * 2;
  g.setTransform(1, 0, 0, 1, 0, 0); g.globalAlpha = 1;
  g.fillStyle = col ? '#000' : gr(128); g.fillRect(0, 0, S, S);

  // il font c'e' davvero? (misura contro il monospace)
  const stretto = haFont(g, "'Bebas Neue'") || haFont(g, 'Impact');
  // scritta portata a un'altezza delle maiuscole precisa e stretta nella larghezza data (regge qualsiasi font di ripiego)
  const scritta = (txt, cx, cy, maxW, capH, fill, sp = 0) => {
    g.save(); g.font = `${stretto ? 400 : 700} 100px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
    try { g.letterSpacing = sp + 'px'; } catch (e) { /* non supportato */ }
    const m = g.measureText(txt), asc = m.actualBoundingBoxAscent || 72, w = m.width || 1;
    const sy = capH / asc, sx = Math.min(maxW / w, sy * 1.12);
    g.translate(cx + (sp * sx) / 2, cy + capH / 2); g.scale(sx, sy); g.fillStyle = fill; g.fillText(txt, 0, 0); g.restore();
  };
  const stella = (cx, cy, R, a, b, rot = 0, ri = 0.4) => {
    const P = []; for (let i = 0; i < 10; i++) { const an = rot - Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? R * ri : R; P.push([cx + Math.cos(an) * r, cy + Math.sin(an) * r]); }
    for (let i = 0; i < 10; i++) { const q = P[(i + 1) % 10]; g.fillStyle = (i % 2) ? a : b; g.beginPath(); g.moveTo(cx, cy); g.lineTo(P[i][0], P[i][1]); g.lineTo(q[0], q[1]); g.closePath(); g.fill(); }
  };
  const stellaPiena = (cx, cy, R, fill) => stella(cx, cy, R, fill, fill);
  const foglia = (x, y, ang, len, wid) => {
    g.save(); g.translate(x, y); g.rotate(ang);
    g.fillStyle = k(238, 205); g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(len * 0.45, -wid, len, 0); g.quadraticCurveTo(len * 0.45, wid, 0, 0); g.fill();
    g.strokeStyle = k(120, 150); g.lineWidth = 1; g.beginPath(); g.moveTo(1, 0); g.lineTo(len - 2, 0); g.stroke();
    g.restore();
  };
  // ramo d'alloro lungo un'ellisse, dal basso verso l'alto, sui due lati
  const alloro = (cx, cy, rx, ry, a0, a1, n, len, wid) => {
    for (const sd of [-1, 1]) for (let i = 0; i < n; i++) {
      const f = a0 + (a1 - a0) * (i / (n - 1));
      const x = cx + sd * rx * Math.cos(f) * -1, y = cy + ry * Math.sin(f);
      const tx = sd * rx * Math.sin(f), ty = ry * Math.cos(f);            // tangente nel verso di salita
      const ta = Math.atan2(ty, tx);
      foglia(x, y, ta - sd * 0.55, len, wid); foglia(x, y, ta + sd * 0.55, len * 0.92, wid);
    }
  };
  const puntini = (x, y, w, h, n, a0, a1, b0, b1, sz = 2) => { for (let i = 0; i < n; i++) { g.fillStyle = k(a0 + rnd() * (a1 - a0), b0 + rnd() * (b1 - b0)); g.fillRect(x + rnd() * w, y + rnd() * h, sz, sz); } };
  const perline = (cx, cy, rx, ry, n, r) => {
    for (let i = 0; i < n; i++) {
      const a = i / n * TAU, x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a);
      if (col) { g.fillStyle = gr(60); g.beginPath(); g.arc(x, y, r + 1.2, 0, TAU); g.fill(); g.fillStyle = gr(250); g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); }
      else { const q = g.createRadialGradient(x, y, 0, x, y, r + 1); q.addColorStop(0, gr(250)); q.addColorStop(1, gr(70)); g.fillStyle = q; g.beginPath(); g.arc(x, y, r + 1, 0, TAU); g.fill(); }
    }
  };

  // ---------- placca centrale ----------
  {
    const [x, y, w, h] = REG.placca, cx = x + w / 2, cy = y + h / 2, rx = w / 2, ry = h / 2;
    const ell = s => { g.beginPath(); g.ellipse(cx, cy, rx * s, ry * s, 0, 0, TAU); };
    g.fillStyle = k(255, 238); g.fillRect(x - 8, 0, w + 16, y + h + 4);                  // bordo lucido (pieno fin fuori dall'ovale)
    g.save(); ell(0.905); g.clip();
    g.fillStyle = k(104, 78); g.fillRect(x, y, w, h);                                    // campo ribassato
    puntini(x, y, w, h, 5200, 70, 140, 48, 112);                                         // puntinatura
    // raggiera dietro la stella
    const sx = cx, sy = cy - 0.475 * ry;
    g.save(); ell(0.8); g.clip();
    for (let i = 0; i < 40; i++) { const a0 = i / 40 * TAU, a1 = a0 + TAU / 80; g.fillStyle = k(168, 132); g.beginPath(); g.moveTo(sx, sy); g.lineTo(sx + Math.cos(a0) * 600, sy + Math.sin(a0) * 600); g.lineTo(sx + Math.cos(a1) * 600, sy + Math.sin(a1) * 600); g.closePath(); g.fill(); }
    g.restore();
    ell(0.8); g.strokeStyle = k(240, 205); g.lineWidth = 3; g.stroke();                  // filetto interno
    alloro(cx, cy, rx * 0.665, ry * 0.665, Math.PI * 0.53, Math.PI * 1.2, 13, 30, 9);
    // stella sfaccettata
    stellaPiena(sx, sy, 0.335 * ry, k(46, 52));
    stella(sx, sy, 0.3 * ry, k(255, 255), k(196, 178));
    perline(cx, cy, rx * 0.852, ry * 0.852, 70, 4.4);
    // nastro con la scritta
    const by0 = cy - 0.165 * ry, by1 = cy + 0.275 * ry, bh = by1 - by0;
    g.fillStyle = k(40, 46); g.fillRect(x, by0 - 4, w, bh + 8);
    g.fillStyle = k(252, 226); g.fillRect(x, by0, w, bh);
    g.fillStyle = k(96, 150); g.fillRect(x, by0 + 6, w, 2.5); g.fillRect(x, by1 - 8.5, w, 2.5);
    scritta(testo, cx, (by0 + by1) / 2, w * 0.82, bh * 0.6, k(10, 118), 2);
    // riga piccola sotto e stellina
    scritta('CAMPIONE', cx, cy + 0.455 * ry, w * 0.36, 21, k(246, 214), 6);
    stellaPiena(cx, cy + 0.655 * ry, 11, k(246, 220));
    g.restore();
    ell(0.905); g.strokeStyle = k(48, 40); g.lineWidth = 2.5; g.stroke();                // solco tra campo e bordo
  }
  // ---------- placca laterale ----------
  {
    const [x, y, w, h] = REG.laterale, cx = x + w / 2, cy = y + h / 2, rx = w / 2, ry = h / 2;
    g.fillStyle = k(255, 238); g.fillRect(x - 3, y - 3, w + 6, h + 6);
    g.save(); g.beginPath(); g.ellipse(cx, cy, rx * 0.86, ry * 0.86, 0, 0, TAU); g.clip();
    g.fillStyle = k(104, 78); g.fillRect(x, y, w, h); puntini(x, y, w, h, 500, 70, 140, 48, 112);
    stellaPiena(cx, cy + 1, ry * 0.6, k(46, 52)); stella(cx, cy + 1, ry * 0.52, k(255, 255), k(196, 178));
    g.restore();
    g.beginPath(); g.ellipse(cx, cy, rx * 0.86, ry * 0.86, 0, 0, TAU); g.strokeStyle = k(48, 40); g.lineWidth = 2; g.stroke();
    perline(cx, cy, rx * 0.74, ry * 0.74, 22, 2.6);
  }
  // ---------- facce delle medaglie ----------
  REG.med.forEach(([x, y, w, h], i) => {
    const cx = x + w / 2, cy = y + h / 2, r = w / 2;
    g.fillStyle = k(255, 238); g.fillRect(x - 3, y - 3, w + 6, h + 6);
    g.save(); g.beginPath(); g.arc(cx, cy, r * 0.84, 0, TAU); g.clip();
    g.fillStyle = k(112, 78); g.fillRect(x, y, w, h); puntini(x, y, w, h, 420, 78, 146, 48, 112);
    alloro(cx, cy, r * 0.6, r * 0.6, Math.PI * 0.56, Math.PI * 1.36, 8, 13, 4.5);
    scritta(String(i + 1), cx, cy + 1, r * 0.7, r * 0.72, k(40, 60)); scritta(String(i + 1), cx - 1, cy, r * 0.62, r * 0.66, k(255, 245));
    g.restore();
    g.beginPath(); g.arc(cx, cy, r * 0.84, 0, TAU); g.strokeStyle = k(48, 40); g.lineWidth = 2; g.stroke();
  });
  // ---------- pelle con cuciture ----------
  // due bande da 20 px ai bordi (cucitura a scala vera, 0.55 mm per pixel) e in mezzo pelle liscia, che sulla cintura viene stirata in larghezza
  {
    const [x, y, w, h] = REG.pelle, B = 20;
    g.fillStyle = k(15, 128); g.fillRect(x - 4, y - 2, w + 8, h + 4);
    if (col) { puntini(x - 4, y - 2, B + 4, h + 4, 260, 9, 24, 0, 0, 1.5); puntini(x + w - B, y - 2, B + 4, h + 4, 260, 9, 24, 0, 0, 1.5); for (let i = 0; i < 260; i++) { g.fillStyle = gr(9 + rnd() * 15); g.fillRect(x + B + rnd() * (w - 2 * B), y - 2 + rnd() * (h + 4), 0.7, 4); } }
    else {
      puntini(x - 4, y - 2, B + 4, h + 4, 800, 0, 0, 92, 164, 2); puntini(x + w - B, y - 2, B + 4, h + 4, 800, 0, 0, 92, 164, 2);
      for (let i = 0; i < 900; i++) { g.fillStyle = gr(92 + rnd() * 72); g.fillRect(x + B + rnd() * (w - 2 * B), y - 2 + rnd() * (h + 4), 0.8, 5); }
    }
    for (const sx of [x + 8, x + w - 8]) {
      g.fillStyle = k(7, 86); g.fillRect(sx - 2.5, y - 2, 5, h + 4);                     // solco della cucitura
      for (let i = 0; i < 10; i++) { g.fillStyle = col ? '#2c9c1a' : gr(205); g.fillRect(sx - 1.2, y + i * 10 + 2, 2.4, 6); }   // filo verde
    }
  }
  // ---------- nastro verde e nero ----------
  {
    const [x, y, w, h] = REG.nastro;
    g.fillStyle = k(12, 128); g.fillRect(x - 3, y - 2, w + 6, h + 4);
    if (col) { g.fillStyle = '#35e616'; g.fillRect(x + 5, y - 2, 7, h + 4); g.fillRect(x + w - 12, y - 2, 7, h + 4); g.fillStyle = '#dfe6dc'; g.fillRect(x + w / 2 - 1, y - 2, 2, h + 4); }
    else for (let yy = y - 2; yy < y + h + 2; yy += 3) { g.fillStyle = gr(150); g.fillRect(x - 3, yy, w + 6, 1.5); g.fillStyle = gr(106); g.fillRect(x - 3, yy + 1.5, w + 6, 1.5); }
  }
  // ---------- pezze piene ----------
  { const [x, y, w, h] = REG.liscio; g.fillStyle = k(255, 128); g.fillRect(x - 3, y - 3, w + 6, h + 6); }
  { const [x, y, w, h] = REG.nero; g.fillStyle = k(9, 128); g.fillRect(x - 3, y - 3, w + 6, h + 6); }
}

function creaTexture(THREE, testo) {
  const cCol = document.createElement('canvas'), cRil = document.createElement('canvas');
  cCol.width = cCol.height = cRil.width = cRil.height = S;
  const map = new THREE.CanvasTexture(cCol); map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 8;
  const ril = new THREE.CanvasTexture(cRil); ril.anisotropy = 8;
  const gC = cCol.getContext('2d'), gR = cRil.getContext('2d');
  let conBebas = false;
  const ridisegna = () => { conBebas = haFont(gC, "'Bebas Neue'"); dipingi(gC, true, testo); dipingi(gR, false, testo); map.needsUpdate = ril.needsUpdate = true; };
  ridisegna();
  // se il font del sito arriva dopo, la placca si ridisegna una volta sola (quando il Bebas Neue c'e' davvero)
  try {
    if (!conBebas && document.fonts && document.fonts.addEventListener) {
      const quando = () => { if (!conBebas && haFont(gC, "'Bebas Neue'")) { ridisegna(); document.fonts.removeEventListener('loadingdone', quando); } };
      document.fonts.addEventListener('loadingdone', quando);
    }
  } catch (e) { /* niente */ }
  return { map, ril, ridisegna };
}

// ------------------------------------------------------------------ modello
export function build(THREE, opts = {}) {
  const hi = (opts.lod || 'high') !== 'low';
  const Y_ALTA = opts.yCorda ?? 1.0, Y_BASSA = opts.yCordaBassa ?? 0.75, RC = opts.rCorda ?? 0.03;
  const testo = String(opts.testo || 'MEDUSA GYM');
  const ruotata = !!opts.placcaRuotata;
  const group = new THREE.Group(); group.name = 'trofei';

  // colori dei metalli (lineari, vanno nei colori dei vertici)
  const ORO = [1.0, 0.71, 0.29], ARGENTO = [0.9, 0.91, 0.93], BRONZO = [0.78, 0.42, 0.2];

  const T = TEX[testo] || (TEX[testo] = creaTexture(THREE, testo));
  const matPelle = new THREE.MeshStandardMaterial({ map: T.map, bumpMap: T.ril, bumpScale: 0.9, roughness: 0.55, metalness: 0 });
  const matMetallo = new THREE.MeshStandardMaterial({ map: T.map, bumpMap: T.ril, bumpScale: 1.6, roughness: 0.34, metalness: 1, vertexColors: true });
  const matNastro = new THREE.MeshStandardMaterial({ map: T.map, bumpMap: T.ril, bumpScale: 0.5, roughness: 0.82, metalness: 0, side: THREE.DoubleSide });

  // ---------- attrezzi di geometria ----------
  const geoDa = (pos, uv, idx) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals(); return g;
  };
  // griglia nr x nc; fn(i, j) -> [x, y, z, u, v]. La normale esce dal lato (verso j) x (verso i).
  const griglia = (nr, nc, fn, flip = false) => {
    const pos = [], uv = [], idx = [];
    for (let i = 0; i < nr; i++) for (let j = 0; j < nc; j++) { const p = fn(i, j); pos.push(p[0], p[1], p[2]); uv.push(p[3], p[4]); }
    for (let i = 0; i < nr - 1; i++) for (let j = 0; j < nc - 1; j++) {
      const a = i * nc + j, b = a + 1, c = a + nc, d = c + 1;
      if (flip) idx.push(a, c, b, b, c, d); else idx.push(a, b, c, b, d, c);
    }
    return geoDa(pos, uv, idx);
  };
  // anelli concentrici chiusi (dal piu' esterno al piu' interno) con eventuale vertice centrale
  const anelli = (nk, n, fn, centro, flip = false) => {
    const pos = [], uv = [], idx = [];
    for (let kk = 0; kk < nk; kk++) for (let j = 0; j < n; j++) { const p = fn(kk, j); pos.push(p[0], p[1], p[2]); uv.push(p[3], p[4]); }
    const tri = (a, b, c) => { if (flip) idx.push(a, c, b); else idx.push(a, b, c); };
    for (let kk = 0; kk < nk - 1; kk++) for (let j = 0; j < n; j++) {
      const o0 = kk * n + j, o1 = kk * n + (j + 1) % n, i0 = o0 + n, i1 = o1 + n;
      tri(o0, o1, i1); tri(o0, i1, i0);
    }
    if (centro) { const ci = nk * n; pos.push(centro[0], centro[1], centro[2]); uv.push(centro[3], centro[4]); for (let j = 0; j < n; j++) tri((nk - 1) * n + j, (nk - 1) * n + (j + 1) % n, ci); }
    return geoDa(pos, uv, idx);
  };
  // ovale in un riferimento F(d, a, h) -> [x,y,z] (d = lungo, a = attraverso, h = fuori). prof = [[raggio 0..1, h], ...]
  const ovale = (F, dc, ac, D, A, prof, n, uvf, flip = false) => {
    const chiuso = prof[prof.length - 1][0] === 0, nk = chiuso ? prof.length - 1 : prof.length;
    const c = chiuso ? [...F(dc, ac, prof[prof.length - 1][1]), ...uvf(0, 0)] : null;
    return anelli(nk, n, (kk, j) => {
      const rho = prof[kk][0], th = j / n * Math.PI * 2, nx = rho * Math.cos(th), ny = rho * Math.sin(th);
      return [...F(dc + ny * D, ac + nx * A, prof[kk][1]), ...uvf(nx, ny)];
    }, c, flip);
  };
  // uv dentro una regione dell'atlante: nx a destra, ny in alto, entrambi -1..1
  const uvReg = (r, m = 0.985) => (nx, ny) => [(r[0] + r[2] / 2 + nx * r[2] / 2 * m) / S, 1 - (r[1] + r[3] / 2 - ny * r[3] / 2 * m) / S];
  const uvFisso = r => { const u = (r[0] + r[2] / 2) / S, v = 1 - (r[1] + r[3] / 2) / S; return () => [u, v]; };
  const pezza = (g, r) => { const u = (r[0] + r[2] / 2) / S, v = 1 - (r[1] + r[3] / 2) / S, a = g.attributes.uv; for (let i = 0; i < a.count; i++) a.setXY(i, u, v); return g; };
  const tinta = (g, c) => { const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = c[0]; a[i * 3 + 1] = c[1]; a[i * 3 + 2] = c[2]; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; };
  const pulita = (g, colore) => {                          // solo gli attributi che servono, sempre con indice
    for (const key of Object.keys(g.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(key)) g.deleteAttribute(key);
    if (!colore && g.attributes.color) g.deleteAttribute('color');
    if (!g.index) { const n = g.attributes.position.count, ix = []; for (let i = 0; i < n; i++) ix.push(i); g.setIndex(ix); }
    return g;
  };
  const unisci = (lista, colore) => mergeGeometries(lista.map(g => pulita(g, colore)), false);

  const acc = { pelle: [], metallo: [] };

  // ---------- cintura a cavallo di una corda ----------
  // Riferimento locale: corda lungo Z per l'origine; la meta' con le placche pende verso -X, l'altra verso +X.
  function cintura(p) {
    const sc = p.scala, t = 0.005, Rb = 0.055;                                   // spessore pelle, raggio della piega (pelle rigida: arco largo)
    const L = p.L, dc = L / 2, hw0 = 0.055 * sc;
    const pA = (ruotata ? 0.09 : 0.11) * sc, pD = (ruotata ? 0.11 : 0.09) * sc;  // semiassi placca centrale: attraverso, lungo
    const lOff = pD + 0.06 * sc, lA = 0.0425 * sc, lD = 0.0375 * sc;             // placche laterali: distanza dal centro, semiassi
    const Lf = dc + lOff + lD + 0.012, arco = Math.PI * Rb;                      // tratto davanti: le tre placche stanno tutte sotto la corda
    const curlF = 0.3, curlB = 0.14, kc = 0.26;                                  // le code si arricciano un poco verso l'esterno
    const alpha = d => {
      if (d < Lf) { const c = Math.max(0, (curlF - d) / curlF); return Math.PI / 2 - kc * c * c; }
      if (d < Lf + arco) return Math.PI / 2 - (d - Lf) / Rb;
      const c = Math.max(0, (d - (L - curlB)) / curlB); return -Math.PI / 2 + kc * 0.7 * c * c;
    };
    // integro la linea di mezzo a passi di 2 mm
    const hs = 0.002, n = Math.ceil(L / hs), px = new Float32Array(n + 1), py = new Float32Array(n + 1);
    for (let i = 0; i < n; i++) { const a = alpha((i + 0.5) * hs); px[i + 1] = px[i] + Math.cos(a) * hs; py[i + 1] = py[i] + Math.sin(a) * hs; }
    const ia = Math.round((Lf + arco / 2) / hs), ox = -px[ia], oy = RC + t / 2 - py[ia];   // il colmo dell'arco poggia sulla corda
    const dTw = dc - lOff - lD - 0.01, tw = p.torsione || 0;                      // sotto l'ultima placca la coda si torce un poco
    const F0 = (d, a, h) => {
      const f = Math.max(0, Math.min(n - 1e-4, d / hs)), i = Math.floor(f), u = f - i, al = alpha(d);
      const q = d < dTw ? (dTw - d) / dTw : 0, ta = tw * q * q, ct = Math.cos(ta), st = Math.sin(ta);
      const hh = h * ct + a * st, aa = a * ct - h * st;
      return [px[i] + (px[i + 1] - px[i]) * u + ox - Math.sin(al) * hh, py[i] + (py[i + 1] - py[i]) * u + oy + Math.cos(al) * hh, aa];
    };
    const F = (d, a, h) => F0(d, a, t / 2 + h);                                  // h misurata dalla faccia esterna della pelle

    // semilarghezza della pelle: fascia, allargamento sotto la placca centrale, punte arrotondate
    const lpA = pA + 0.017 * sc, lpD = pD + 0.024 * sc;
    const hw = d => {
      const e = (d - dc) / lpD, bulge = Math.abs(e) < 1 ? lpA * Math.sqrt(1 - e * e) : 0;
      const coda = Math.min(1, Math.max(0, (Math.abs(d - dc) - lOff - lD) / 0.25));
      const base = hw0 * (1 - 0.14 * coda);
      let w = Math.pow(Math.pow(base, 6) + Math.pow(bulge, 6), 1 / 6);
      const tp = Math.min(d, L - d) / (0.032 * sc); if (tp < 1) w *= Math.max(0.12, Math.sqrt(1 - (1 - tp) * (1 - tp)));
      return w;
    };

    // righe lungo la cintura: i punti di inversione della texture + arco + allargamento + punte
    const Tt = hi ? 0.05 : 0.1;                                                  // lunghezza di una piastrella di cuciture
    const tri = d => { const x = d / Tt, m = x - 2 * Math.floor(x / 2); return 1 - Math.abs(m - 1); };
    const fisse = []; for (let d = 0; d < L - 1e-6; d += Tt) fisse.push(+d.toFixed(5));
    const extra = [L];
    const nArco = hi ? 10 : 5; for (let i = 0; i <= nArco; i++) extra.push(Lf + arco * i / nArco);
    for (const o of (hi ? [0, 0.3, 0.52, 0.7, 0.82, 0.91, 0.98, 1.05, 1.13, 1.24] : [0, 0.5, 0.85, 1.05, 1.2])) { extra.push(dc - o * lpD); extra.push(dc + o * lpD); }
    for (const o of (hi ? [0.003, 0.009, 0.019, 0.032] : [0.006, 0.02])) { extra.push(o * sc); extra.push(L - o * sc); }
    if (hi) for (let i = 1; i < 6; i++) extra.push(curlF * i / 6);
    const ds = fisse.slice();
    for (const e of extra.sort((a, b) => a - b)) if (!ds.some(d => Math.abs(d - e) < (hi ? 0.0045 : 0.012))) ds.push(e);
    ds.sort((a, b) => a - b);

    const geos = { pelle: [], metallo: [] };
    const nr = ds.length, bs = hi ? 0.0013 : 0;                                  // smusso del bordo tagliato
    const pr = REG.pelle;
    const uvP = (fx, d) => [(pr[0] + pr[2] * fx) / S, 1 - (pr[1] + pr[3] * (0.02 + 0.96 * tri(d))) / S];
    const wq = d => Math.max(hw(d), bs + 0.0006);
    const fxB = 20 / pr[2];                                                      // quota della banda di cucitura nella piastrella
    // faccia esterna a 4 colonne: le due bande di cucitura hanno larghezza fissa, in mezzo pelle liscia
    const hB = hi ? [t / 2, t / 2, t / 2, t / 2] : [0, t / 2, t / 2, 0];         // low: bordi a filo del retro (sezione a lente, senza fianchi)
    geos.pelle.push(griglia(nr, 4, (i, j) => {
      const d = ds[i], w = wq(d) - bs, eb = Math.min(0.011 * sc, w * 0.45), a = [-w, -w + eb, w - eb, w][j];
      return [...F0(d, a, hB[j]), ...uvP([0, fxB, 1 - fxB, 1][j], d)];
    }));
    geos.pelle.push(griglia(nr, 2, (i, j) => { const d = ds[i], w = wq(d) - bs; return [...F0(d, j ? w : -w, hi ? -t / 2 : 0), ...uvP(j ? 1 - fxB : fxB, d)]; }, true));
    if (hi) {                                                                    // fianchi con smusso
      const c = [[-bs, t / 2], [0, 0], [-bs, -t / 2]];
      geos.pelle.push(griglia(nr, 3, (i, j) => { const d = ds[i], w = wq(d); return [...F0(d, w + c[j][0], c[j][1]), ...uvP(0.5, d)]; }));
      geos.pelle.push(griglia(nr, 3, (i, j) => { const d = ds[i], w = wq(d); return [...F0(d, -(w + c[2 - j][0]), c[2 - j][1]), ...uvP(0.5, d)]; }));
    }

    // placca centrale (ovale bombato con bordo in rilievo) e placche laterali
    const uvPl = uvReg(REG.placca), uvLa = uvReg(REG.laterale);
    const uvC = ruotata ? (nx, ny) => uvPl(ny, -nx) : uvPl;
    const profC = hi ? [[1, 0], [1, 0.003], [0.975, 0.0049], [0.94, 0.0051], [0.905, 0.0036], [0.5, 0.0058], [0, 0.0068]]
      : [[1, 0], [1, 0.003], [0.94, 0.0051], [0.905, 0.0036], [0, 0.0068]];
    const profL = hi ? [[1, 0], [1, 0.0024], [0.95, 0.004], [0.86, 0.003], [0, 0.0046]] : [[1, 0], [0.95, 0.004], [0.86, 0.003], [0, 0.0046]];
    const m = [];
    m.push(ovale(F, dc, 0, pD, pA, profC.map(([r, h]) => [r, h * sc]), hi ? 40 : 18, uvC));
    for (const s of [-1, 1]) m.push(ovale(F, dc + s * lOff, 0, lD, lA, profL.map(([r, h]) => [r, h * sc]), hi ? 20 : 10, uvLa));
    // bottoni a pressione sulle due code
    const profB = hi ? [[1, 0], [0.62, 0.0026], [0, 0.0031]] : [[1, 0], [0, 0.003]];
    const uvB = uvFisso(REG.liscio), rB = 0.0068 * sc;
    const bott = [];
    for (let i = 0; i < 4; i++) for (const s of [-1, 1]) bott.push([(0.05 + 0.037 * i) * sc, s * 0.022 * sc]);
    for (let i = 0; i < (hi ? 3 : 2); i++) for (const s of [-1, 1]) bott.push([L - (0.045 + 0.037 * i) * sc, s * 0.022 * sc]);
    for (const [bd, ba] of bott) m.push(ovale(F, bd, ba, rB, rB, profB, hi ? 7 : 5, uvB));
    for (const g of m) geos.metallo.push(tinta(g, p.metallo));

    for (const key of ['pelle', 'metallo']) for (const g of geos[key]) { g.applyMatrix4(p.matrice); acc[key].push(g); }
  }

  const M4 = (x, y, z, ry) => new THREE.Matrix4().makeRotationY(ry).setPosition(x, y, z);
  // imbardata delle due cinture in gradi (positivo = verso la diagonale del ring). Quasi dritte: cosi' le placche specchiano
  // la parte chiara dell'ambiente e non i neon verdi; un filo di differenza tra le due per non sembrare messe col righello
  const IMB = [].concat(opts.imbardata ?? [1.5, 3]).map(a => a * Math.PI / 180); if (IMB.length < 2) IMB.push(IMB[0]);
  // 1) cintura grande, placca oro: corda lungo Z a x = 0
  cintura({ scala: 1, L: 1.2, metallo: ORO, torsione: 0.2, matrice: M4(0, Y_ALTA, -0.56, -IMB[0]) });
  // 2) cintura piu' piccola, placca argento: corda lungo X a z = 0
  cintura({ scala: 0.88, L: 1.06, metallo: ARGENTO, torsione: -0.14, matrice: M4(-0.56, Y_ALTA, 0, -Math.PI / 2 + IMB[1]) });

  // ---------- coppa ----------
  {
    const cx = -0.45, cz = -0.45, rot = Math.PI / 4 + 0.14;
    const M = M4(cx, 0, cz, rot);
    const B1 = 0.046, B2 = 0.066;                                                // quote della base nera a due gradini
    const base = [];
    const scat = (w, h, y) => { const g = hi ? new RoundedBoxGeometry(w, h, w, 1, 0.004) : new THREE.BoxGeometry(w, h, w); g.translate(0, y + h / 2, 0); return g; };
    base.push(scat(0.112, B1, 0)); base.push(scat(0.09, B2 - B1, B1));
    for (const g of base) { pezza(g, REG.nero); g.applyMatrix4(M); acc.pelle.push(g); }
    // profilo (r, y): piede, stelo con nodo, coppa, labbro e interno
    const Pf = hi ? [[0, B2], [0.037, B2], [0.04, B2 + 0.003], [0.039, B2 + 0.007], [0.03, B2 + 0.011], [0.017, B2 + 0.017], [0.0105, B2 + 0.028], [0.009, B2 + 0.042],
      [0.012, B2 + 0.048], [0.0185, B2 + 0.054], [0.0185, B2 + 0.059], [0.012, B2 + 0.065], [0.0095, B2 + 0.073], [0.012, B2 + 0.081],
      [0.024, B2 + 0.089], [0.038, B2 + 0.101], [0.048, B2 + 0.12], [0.0522, B2 + 0.14], [0.0545, B2 + 0.1435], [0.0545, B2 + 0.1475], [0.0528, B2 + 0.151], [0.0532, B2 + 0.19], [0.0556, B2 + 0.1935], [0.0556, B2 + 0.1975], [0.0542, B2 + 0.201], [0.058, B2 + 0.232], [0.065, B2 + 0.25], [0.0672, B2 + 0.254],
      [0.0655, B2 + 0.2535], [0.057, B2 + 0.232], [0.051, B2 + 0.2], [0.05, B2 + 0.16], [0.045, B2 + 0.125], [0.03, B2 + 0.104], [0, B2 + 0.098]]
      : [[0, B2], [0.04, B2], [0.038, B2 + 0.008], [0.014, B2 + 0.02], [0.009, B2 + 0.045], [0.0185, B2 + 0.056], [0.0095, B2 + 0.073],
        [0.03, B2 + 0.093], [0.05, B2 + 0.125], [0.054, B2 + 0.2], [0.0672, B2 + 0.254], [0.052, B2 + 0.2], [0.046, B2 + 0.125], [0, B2 + 0.098]];
    const oro = [];
    oro.push(new THREE.LatheGeometry(Pf.map(([r, y]) => new THREE.Vector2(r, y)), hi ? 18 : 12));
    // manici a orecchio, uno per lato
    const mp = [[0.045, B2 + 0.118], [0.068, B2 + 0.124], [0.09, B2 + 0.145], [0.098, B2 + 0.18], [0.09, B2 + 0.214], [0.07, B2 + 0.228], [0.054, B2 + 0.222]];
    for (const s of [0, Math.PI]) {
      const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(mp.map(([x, y]) => new THREE.Vector3(x, y, 0))), hi ? 14 : 7, 0.0048, hi ? 6 : 4, false);
      g.rotateY(s); oro.push(g);
    }
    // targhetta dorata sulla base, verso il centro del ring
    { const g = new THREE.BoxGeometry(0.062, 0.022, 0.002); g.translate(0, B1 * 0.5, -0.0565); oro.push(g); }
    for (const g of oro) { pezza(g, REG.liscio); tinta(g, ORO); g.applyMatrix4(M); acc.metallo.push(g); }
  }

  // ---------- medaglie (parte mobile) ----------
  const medNastri = [], medMetallo = [], dati = [];
  {
    const R = 0.036, w = 0.03;                                                   // raggio medaglia, larghezza nastro
    const uvN = (fx, fy) => [(REG.nastro[0] + REG.nastro[2] * (0.03 + 0.94 * fx)) / S, 1 - (REG.nastro[1] + REG.nastro[3] * (0.05 + 0.9 * fy)) / S];
    const elenco = [[-1.41, 0.235, ARGENTO, 1], [-1.25, 0.3, ORO, 0], [-1.09, 0.185, BRONZO, 2]];   // z, calata, metallo, faccia
    let vn = 0, vm = 0;
    for (const [z, calata, metallo, faccia] of elenco) {
      const yc = Y_BASSA - calata, xb = -(RC + 0.0022);                          // centro medaglia, piano del retro (sfiora le corde sotto)
      const Fm = (d, a, h) => [xb - h, yc + d, z + a];
      const profM = hi ? [[1, 0], [1, 0.004], [0.965, 0.0052], [0.9, 0.0052], [0.85, 0.004], [0.45, 0.0046], [0, 0.0049]] : [[1, 0], [1, 0.004], [0.9, 0.0052], [0.85, 0.004], [0, 0.0049]];
      const nS = hi ? 24 : 12;
      const met = [ovale(Fm, 0, 0, R, R, profM, nS, uvReg(REG.med[faccia]))];
      met.push(ovale(Fm, 0, 0, R, R, [[1, 0], [0, 0]], nS, uvFisso(REG.liscio), true));                 // retro liscio
      // anellino in cima, nel piano della medaglia
      const yA = yc + R + 0.0052, rA = 0.0072;
      { const g = new THREE.TorusGeometry(rA, 0.0013, hi ? 4 : 3, hi ? 9 : 6); g.rotateY(Math.PI / 2); g.translate(xb - 0.002, yA, z); met.push(pezza(g, REG.liscio)); }
      for (const g of met) tinta(g, metallo);
      // nastro a bocca di lupo sulla corda: fascia attorno alla corda, traversa davanti, due capi che scendono all'anellino
      const nas = [];
      const nW = hi ? 12 : 6, rW = RC + 0.0012;
      nas.push(griglia(nW + 1, 3, (i, j) => { const a = i / nW * Math.PI * 2; return [Math.cos(a) * rW, Y_BASSA + Math.sin(a) * rW, z + (j - 1) * w * 1.02, ...uvN(j === 1 ? 1 : 0, 0.5)]; }));
      const rT = RC + 0.0024, aT0 = 116 * Math.PI / 180, aT1 = 178 * Math.PI / 180, nT = hi ? 3 : 2;
      nas.push(griglia(nT + 1, 2, (i, j) => { const a = aT0 + (aT1 - aT0) * i / nT; return [Math.cos(a) * rT, Y_BASSA + Math.sin(a) * rT, z + (j ? 1 : -1) * w * 1.02, ...uvN(i / nT, j)]; }));
      const statici = nas.reduce((s, g) => s + g.attributes.position.count, 0);
      const yTop = Y_BASSA + 0.004, yBot = yA + rA - 0.002, nR = hi ? 5 : 3;
      for (const s of [-1, 1]) nas.push(griglia(nR, 2, (i, j) => {
        const f = i / (nR - 1), e = f * f * (3 - 2 * f), ww = w + (0.015 - w) * e, zc = z + s * (w * 0.46 * (1 - e) + 0.0015 * e);
        const x = -(RC + 0.0018) + (xb - 0.002 + s * 0.0009 + (RC + 0.0018)) * e;
        return [x, yTop + (yBot - yTop) * f, zc + (j ? 0.5 : -0.5) * ww, ...uvN(j, 0.1 + 0.8 * f)];
      }));
      const cn = nas.reduce((s, g) => s + g.attributes.position.count, 0), cm = met.reduce((s, g) => s + g.attributes.position.count, 0);
      const fase = z * 7.3;
      dati.push({ x: xb - 0.002, z, yP: Y_BASSA, yTop, yBot, n0: vn + statici, n1: vn + cn, m0: vm, m1: vm + cm,
        wS: Math.sqrt(9.81 / (calata + 0.02)), fS: fase, aS: 0.016, wT: 0.9 + 0.23 * faccia, fT: fase * 1.7, aT: 0.11 });
      vn += cn; vm += cm; medNastri.push(...nas); medMetallo.push(...met);
    }
  }

  // ---------- mesh: una per materiale (pelle, metallo) + due mobili per le medaglie ----------
  const mesh = (geo, mat, nome) => { const m = new THREE.Mesh(geo, mat); m.name = nome; m.castShadow = m.receiveShadow = true; group.add(m); return m; };
  mesh(unisci(acc.pelle, false), matPelle, 'pelle');
  mesh(unisci(acc.metallo, true), matMetallo, 'metallo');
  const mN = mesh(unisci(medNastri, false), matNastro, 'nastri');
  const mM = mesh(unisci(medMetallo, true), matMetallo, 'medaglie');

  // ---------- dondolio leggero delle medaglie: torsione attorno al nastro + piccolo pendolo lungo la corda ----------
  const mob = [mN, mM].map(m => ({ p: m.geometry.attributes.position, n: m.geometry.attributes.normal, p0: m.geometry.attributes.position.array.slice(), n0: m.geometry.attributes.normal.array.slice() }));
  for (const b of mob) { b.p.setUsage(THREE.DynamicDrawUsage); b.n.setUsage(THREE.DynamicDrawUsage); }
  const muovi = (b, i0, i1, d, tw, sw) => {
    const P = b.p.array, N = b.n.array, P0 = b.p0, N0 = b.n0, span = d.yTop - d.yBot;
    for (let i = i0; i < i1; i++) {
      const o = i * 3, wgt = Math.min(1, Math.max(0, (d.yTop - P0[o + 1]) / span));
      const a = tw * wgt, c = Math.cos(a), s = Math.sin(a), b2 = sw * Math.min(1, wgt * 3), c2 = Math.cos(b2), s2 = Math.sin(b2);
      // torsione attorno alla verticale del nastro
      let dx = P0[o] - d.x, dz = P0[o + 2] - d.z;
      const x = d.x + dx * c + dz * s; let z = d.z - dx * s + dz * c, y = P0[o + 1];
      let nx = N0[o] * c + N0[o + 2] * s, nz = -N0[o] * s + N0[o + 2] * c, ny = N0[o + 1];
      // pendolo attorno all'asse X per il punto di appoggio (si muove lungo la corda, non sbatte contro le corde sotto)
      const dy = y - d.yP; dz = z - d.z;
      y = d.yP + dy * c2 - dz * s2; z = d.z + dy * s2 + dz * c2;
      const ny2 = ny * c2 - nz * s2; nz = ny * s2 + nz * c2; ny = ny2;
      P[o] = x; P[o + 1] = y; P[o + 2] = z; N[o] = nx; N[o + 1] = ny; N[o + 2] = nz;
    }
  };
  group.userData.update = (t) => {
    for (const d of dati) {
      const tw = d.aT * Math.sin(d.wT * t + d.fT), sw = d.aS * Math.sin(d.wS * t + d.fS);
      muovi(mob[0], d.n0, d.n1, d, tw, sw); muovi(mob[1], d.m0, d.m1, d, tw, sw);
    }
    for (const b of mob) { b.p.needsUpdate = true; b.n.needsUpdate = true; }
  };
  group.userData.update(0);
  group.userData.ridisegna = T.ridisegna;
  return group;
}
