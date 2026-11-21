// "Angolo dei giochi": tavolino da bordo ring con la campana (gong) e, dietro, il timer a led dei round su palo.
// Origine: punto sul pavimento sotto il centro del tavolino. Y in alto, fronte verso +Z. Misure in metri.
// 5 draw call: metallo nero (tavolino, palo, scatola timer) / legno (base campana) / metallo lucido (campana in ottone,
// martelletto e minuteria in acciaio, distinti con i colori per vertice) / display (unica texture canvas 512x256) / due punti del timer.
// opts.lod: 'high' (default) oppure 'low'. opts.color: verde dei led (default #39FF14).
// group.userData.update(t): t in secondi, fa lampeggiare i due punti (solo .visible, il canvas non viene ridisegnato).
// group.userData.redrawDisplay(): ridisegna il display una volta, utile se il font 'Bebas Neue' arriva dopo la build.
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------- display: cifre a sette segmenti disegnate a poligoni
// Spazio logico 512 x 140 (stesso rapporto del vetro, 0.64 x 0.175 m) stirato sul canvas 512 x 256.
const LW = 512, LH = 140;
const DIG = { W: 54, H: 96, T: 11, Y: 22, SKEW: 0.09, X: [196, 266, 358, 428], COLON_X: 339 };
const SEGS = { 0: 'abcdef', 1: 'bc', 2: 'abged' };

function segPath(g, x0, y0, x1, y1, t) {
  // segmento esagonale con le punte, orizzontale o verticale
  const h = t / 2;
  g.beginPath();
  if (y0 === y1) { g.moveTo(x0, y0); g.lineTo(x0 + h, y0 - h); g.lineTo(x1 - h, y0 - h); g.lineTo(x1, y0); g.lineTo(x1 - h, y0 + h); g.lineTo(x0 + h, y0 + h); }
  else { g.moveTo(x0, y0); g.lineTo(x0 + h, y0 + h); g.lineTo(x0 + h, y1 - h); g.lineTo(x0, y1); g.lineTo(x0 - h, y1 - h); g.lineTo(x0 - h, y0 + h); }
  g.closePath(); g.fill();
}

function drawDigit(g, x, ch, on, off) {
  const { W, H, T, Y } = DIG, h = T / 2, gap = 1.6;
  const xl = x + h, xr = x + W - h, yt = Y + h, ym = Y + H / 2, yb = Y + H - h;
  const seg = {
    a: [xl + gap, yt, xr - gap, yt], g: [xl + gap, ym, xr - gap, ym], d: [xl + gap, yb, xr - gap, yb],
    f: [xl, yt + gap, xl, ym - gap], b: [xr, yt + gap, xr, ym - gap],
    e: [xl, ym + gap, xl, yb - gap], c: [xr, ym + gap, xr, yb - gap],
  };
  const lit = SEGS[ch] || '';
  // prima i segmenti spenti (appena visibili, come nei display veri), poi quelli accesi con un filo di alone
  g.shadowBlur = 0; g.fillStyle = off;
  for (const k in seg) if (!lit.includes(k)) segPath(g, ...seg[k], T);
  g.shadowColor = on; g.shadowBlur = 9; g.fillStyle = on;
  for (const k in seg) if (lit.includes(k)) segPath(g, ...seg[k], T);
  g.shadowBlur = 0;
}

function drawDisplay(g, onCss) {
  g.setTransform(1, 0, 0, 1, 0, 0);
  g.fillStyle = '#020302'; g.fillRect(0, 0, 512, 256);
  g.setTransform(1, 0, 0, 256 / LH, 0, 0);
  // scritta piccola a sinistra, rosso spento
  g.fillStyle = '#b0352a'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = '400 44px "Bebas Neue", Impact, sans-serif';
  try { g.letterSpacing = '2px'; } catch (e) { /* browser senza letterSpacing sul canvas */ }
  g.fillText('ROUND 1', 96, LH / 2 + 2, 150);
  try { g.letterSpacing = '0px'; } catch (e) { /* idem */ }
  // cifre inclinate: 00:20 (i due punti accesi sono mesh a parte, qui solo la versione spenta)
  const off = '#0b1c08';
  g.setTransform(1, 0, -DIG.SKEW * 256 / LH, 256 / LH, DIG.SKEW * (DIG.Y + DIG.H / 2) * 256 / LH, 0);
  const txt = ['0', '0', '2', '0'];
  for (let i = 0; i < 4; i++) drawDigit(g, DIG.X[i], txt[i], onCss, off);
  g.fillStyle = off;
  for (const f of [0.3, 0.7]) g.fillRect(DIG.COLON_X - 6, DIG.Y + DIG.H * f - 6, 12, 12);
  g.setTransform(1, 0, 0, 1, 0, 0);
}

// ---------------------------------------------------------------- base in legno: tavola smussata, venature a colori per vertice
function woodBoard(THREE, w, h, d, c, N) {
  let s = 41; const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  // serie di toni lungo Z (venatura che corre lungo X), lisciata, con qualche vena scura
  const M = N + 12, raw = [];
  for (let i = 0; i < M; i++) raw.push(0.78 + rnd() * 0.44 - (rnd() > 0.82 ? 0.3 : 0));
  const tone = k => { const i = Math.max(1, Math.min(M - 2, k)); return raw[i - 1] * 0.22 + raw[i] * 0.56 + raw[i + 1] * 0.22; };
  const base = new THREE.Color(0x44240f);
  const zs = [-d / 2]; for (let i = 0; i <= N; i++) zs.push(-d / 2 + c + (d - 2 * c) * i / N); zs.push(d / 2);
  const R = zs.length, xs = [-w / 2, -w / 2, -w / 2 + c, -w / 6, w / 6, w / 2 - c, w / 2, w / 2], P = xs.length;
  const shift = [0, 0, 0, 2, 4, 5, 5, 5]; // la venatura "scivola" un po' da una colonna all'altra, cosi' non e' a righe perfette
  const pos = [], col = [], idx = [];
  for (let k = 0; k < R; k++) {
    const end = k === 0 || k === R - 1;
    const ys = [0, h - c, end ? h - c : h, end ? h - c : h, end ? h - c : h, end ? h - c : h, h - c, 0];
    for (let j = 0; j < P; j++) {
      pos.push(xs[j], ys[j], zs[k]);
      const t = tone(k + shift[j]) * (j === 0 || j === P - 1 ? 0.8 : 1);
      col.push(base.r * t, base.g * t, base.b * t);
    }
  }
  for (let k = 0; k < R - 1; k++) for (let j = 0; j < P - 1; j++) {
    const a = k * P + j, b = (k + 1) * P + j, cc = a + 1, dd = b + 1;
    idx.push(a, b, cc, b, dd, cc);
  }
  // testate (davanti e dietro): piu' scure, come il legno di testa
  const cap = (z, flip) => {
    const o = pos.length / 3, t = 0.62;
    pos.push(-w / 2, 0, z, w / 2, 0, z, w / 2, h - c, z, -w / 2, h - c, z);
    for (let i = 0; i < 4; i++) col.push(base.r * t, base.g * t, base.b * t);
    if (flip) idx.push(o, o + 2, o + 1, o, o + 3, o + 2); else idx.push(o, o + 1, o + 2, o, o + 2, o + 3);
  };
  cap(d / 2, false); cap(-d / 2, true);
  let g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g = g.toNonIndexed(); g.computeVertexNormals(); // normali piatte: gli smussi restano netti
  return g;
}

export function build(THREE, opts = {}) {
  const low = opts.lod === 'low';
  const accent = opts.color ?? 0x39ff14;
  const group = new THREE.Group();
  const blackG = [], woodG = [], metalG = [];

  // ---- utilita': tutte le geometrie diventano non indicizzate, senza uv, con colore per vertice ----
  const tc = new THREE.Color();
  const add = (arr, g, hex, m4) => {
    let n = g.index ? g.toNonIndexed() : g;
    if (n.attributes.uv) n.deleteAttribute('uv');
    if (m4) n.applyMatrix4(m4);
    if (!n.attributes.normal) n.computeVertexNormals();
    if (!n.attributes.color) {
      tc.set(hex); const k = n.attributes.position.count, a = new Float32Array(k * 3);
      for (let i = 0; i < k; i++) { a[i * 3] = tc.r; a[i * 3 + 1] = tc.g; a[i * 3 + 2] = tc.b; }
      n.setAttribute('color', new THREE.Float32BufferAttribute(a, 3));
    }
    arr.push(n); return n;
  };
  const box = (arr, hex, w, h, d, x, y, z) => { const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z); return add(arr, g, hex); };
  const cyl = (arr, hex, rt, rb, h, seg, x, y, z, open = false) => { const g = new THREE.CylinderGeometry(rt, rb, h, seg, 1, open); g.translate(x, y, z); return add(arr, g, hex); };
  const UP = new THREE.Vector3(0, 1, 0);
  const rod = (arr, hex, A, B, r, seg, open = true) => {
    const a = new THREE.Vector3(...A), b = new THREE.Vector3(...B), dir = b.clone().sub(a), len = dir.length();
    const g = new THREE.CylinderGeometry(r, r, len, seg, 1, open);
    const m = new THREE.Matrix4().compose(a.clone().add(b).multiplyScalar(0.5), new THREE.Quaternion().setFromUnitVectors(UP, dir.normalize()), new THREE.Vector3(1, 1, 1));
    return add(arr, g, hex, m);
  };

  // tinte (colori per vertice)
  const K_TABLE = 0x1b1d20, K_BOX = 0x121416, K_RUBBER = 0x060606, K_POLE = 0x141618;
  const K_BRASS = 0xe2b657, K_STEEL = 0xcdd2d6;

  // ================================================================ 1) tavolino
  const TW = 0.60, TD = 0.45, TH = 0.75, TT = 0.018;
  if (low) box(blackG, K_TABLE, TW, TT, TD, 0, TH - TT / 2, 0);
  else {
    // piano con angoli arrotondati e bordo smussato
    const bv = 0.003, r = 0.02, hw = TW / 2 - bv, hd = TD / 2 - bv;
    const sh = new THREE.Shape();
    sh.moveTo(-hw + r, -hd); sh.lineTo(hw - r, -hd); sh.absarc(hw - r, -hd + r, r, -Math.PI / 2, 0, false);
    sh.lineTo(hw, hd - r); sh.absarc(hw - r, hd - r, r, 0, Math.PI / 2, false);
    sh.lineTo(-hw + r, hd); sh.absarc(-hw + r, hd - r, r, Math.PI / 2, Math.PI, false);
    sh.lineTo(-hw, -hd + r); sh.absarc(-hw + r, -hd + r, r, Math.PI, Math.PI * 1.5, false);
    const top = new THREE.ExtrudeGeometry(sh, { depth: TT - 2 * bv, bevelEnabled: true, bevelThickness: bv, bevelSize: bv, bevelSegments: 1, curveSegments: 4 });
    top.rotateX(-Math.PI / 2); top.translate(0, TH - TT + bv, 0);
    add(blackG, top, K_TABLE);
  }
  const LX = TW / 2 - 0.04, LZ = TD / 2 - 0.04, LS = 0.022, FOOT = low ? 0 : 0.008, AH = 0.034;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    box(blackG, K_TABLE, LS, TH - TT - FOOT, LS, sx * LX, FOOT + (TH - TT - FOOT) / 2, sz * LZ);
    if (!low) cyl(blackG, K_RUBBER, 0.015, 0.016, FOOT, 10, sx * LX, FOOT / 2, sz * LZ);
  }
  // fascia sotto il piano e traverse basse (a H)
  for (const s of [-1, 1]) {
    box(blackG, K_TABLE, 2 * LX - LS, AH, 0.012, 0, TH - TT - AH / 2, s * LZ);
    box(blackG, K_TABLE, 0.012, AH, 2 * LZ - LS, s * LX, TH - TT - AH / 2, 0);
    box(blackG, K_TABLE, 0.016, 0.016, 2 * LZ - LS, s * LX, 0.16, 0);
  }
  box(blackG, K_TABLE, 2 * LX - 0.016, 0.016, 0.016, 0, 0.16, 0);

  // ================================================================ 2) campana da ring
  const BW = 0.32, BH = 0.03, BD = 0.22, BZ = -0.015;        // base in legno
  const yb = TH + BH;                                         // quota del piano della base
  const wood = woodBoard(THREE, BW, BH, BD, 0.004, low ? 8 : 20);
  wood.translate(0, TH, BZ); woodG.push(wood);

  // calotta: profilo (raggio, quota) dal labbro interno al colmo, tornita
  const BX = -0.045, RIM = 0.016, DOME_H = 0.0685;                             // centro campana (un po' a sinistra per far posto al martelletto), luce sotto il bordo
  const prof = new THREE.SplineCurve([
    [0.0925, 0.0080], [0.0958, 0.0022], [0.0986, 0.0], [0.1004, 0.0020], [0.1000, 0.0065], [0.0986, 0.0160],
    [0.0962, 0.0280], [0.0920, 0.0400], [0.0840, 0.0510], [0.0700, 0.0595], [0.0520, 0.0648], [0.0310, 0.0675], [0.0130, 0.0683], [0.0, DOME_H],
  ].map(([x, y]) => new THREE.Vector2(x, y)));
  const pp = prof.getSpacedPoints(low ? 9 : 15); pp[pp.length - 1].x = 0;
  const dome = new THREE.LatheGeometry(pp, low ? 22 : 40);
  dome.translate(BX, yb + RIM, BZ); add(metalG, dome, K_BRASS);
  const domeTop = yb + RIM + DOME_H;
  // perno centrale, rondella e dado cieco
  cyl(metalG, K_STEEL, 0.011, 0.011, RIM + 0.06, low ? 8 : 12, BX, yb + (RIM + 0.06) / 2, BZ, true);
  cyl(metalG, K_STEEL, 0.019, 0.019, 0.003, low ? 10 : 18, BX, domeTop + 0.0012, BZ);
  cyl(metalG, K_STEEL, 0.0105, 0.0105, 0.008, 6, BX, domeTop + 0.0067, BZ);
  if (!low) { const capg = new THREE.SphereGeometry(0.0088, 10, 4, 0, Math.PI * 2, 0, Math.PI / 2); capg.translate(BX, domeTop + 0.0105, BZ); add(metalG, capg, K_STEEL); }

  // martelletto: leva a squadra su perno, testa a sfera contro il fianco della calotta, molla sotto la leva
  const PX = 0.114, PY = yb + 0.02;                           // perno
  const HX = BX + 0.0968 + 0.003 + 0.0155, HY = yb + RIM + 0.0255, HR = 0.0155; // testa
  const LXE = 0.203, LYE = yb + 0.05;                         // estremita' della leva
  const head = new THREE.SphereGeometry(HR, low ? 8 : 14, low ? 6 : 10); head.translate(HX, HY, BZ); add(metalG, head, K_STEEL);
  rod(metalG, K_STEEL, [PX, PY, BZ], [HX + 0.004, HY - 0.002, BZ], 0.0038, low ? 5 : 8);
  rod(metalG, K_STEEL, [PX, PY, BZ], [LXE, LYE, BZ], 0.0038, low ? 5 : 8);
  // staffa a U con perno passante
  for (const s of [-1, 1]) box(metalG, K_STEEL, 0.022, 0.03, 0.003, PX, yb + 0.015, BZ + s * 0.0105);
  box(metalG, K_STEEL, 0.034, 0.003, 0.034, PX, yb + 0.0015, BZ);
  const pin = new THREE.CylinderGeometry(0.0048, 0.0048, 0.032, low ? 6 : 10); pin.rotateX(Math.PI / 2); pin.translate(PX, PY, BZ); add(metalG, pin, K_STEEL);
  // pomello nero in fondo alla leva
  { const kn = new THREE.SphereGeometry(0.0125, low ? 7 : 10, low ? 5 : 6); kn.translate(LXE + 0.004, LYE + 0.0015, BZ); add(blackG, kn, K_RUBBER); }
  // molla a spirale tra base e leva
  {
    const SX = 0.146, sy0 = yb + 0.001, sy1 = PY + (LYE - PY) * (SX - PX) / (LXE - PX) - 0.002;
    const turns = low ? 3.5 : 5, n = low ? 28 : 50, pts = [];
    for (let i = 0; i <= n; i++) { const u = i / n, a = u * turns * Math.PI * 2; pts.push(new THREE.Vector3(SX + Math.cos(a) * 0.0068, sy0 + (sy1 - sy0) * u, BZ + Math.sin(a) * 0.0068)); }
    const sp = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), low ? 28 : 50, 0.0012, low ? 3 : 4, false);
    add(metalG, sp, K_STEEL);
    cyl(metalG, K_STEEL, 0.009, 0.009, 0.002, low ? 6 : 10, SX, yb + 0.001, BZ);
  }
  // viti agli angoli della base
  if (!low) for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(metalG, K_BRASS, 0.0055, 0.0062, 0.0022, 8, sx * (BW / 2 - 0.018), yb + 0.0011, BZ + sz * (BD / 2 - 0.018));

  // ================================================================ 3) timer a led su palo
  const TY = 1.55, TZ = -0.35, BXW = 0.70, BXH = 0.22, BXD = 0.06, FR = 0.006;
  const DW = 0.64, DH = 0.175;                                // vetro del display (stesso rapporto dello spazio logico del canvas)
  const zFace = TZ + BXD / 2 - FR;                            // faccia su cui appoggia il display
  box(blackG, K_BOX, BXW, BXH, BXD - FR, 0, TY, TZ - FR / 2);
  // cornice in rilievo attorno al vetro
  const mH = (BXH - DH) / 2, mW = (BXW - DW) / 2;
  for (const s of [-1, 1]) {
    box(blackG, K_BOX, BXW, mH, FR, 0, TY + s * (DH / 2 + mH / 2), zFace + FR / 2);
    box(blackG, K_BOX, mW, DH, FR, s * (DW / 2 + mW / 2), TY, zFace + FR / 2);
  }
  // palo con base pesante a disco, collare e piastra di fissaggio dietro la scatola
  const PZ = TZ - BXD / 2 - 0.012 - 0.016, PR = 0.016;
  cyl(blackG, K_POLE, PR, PR, TY + 0.075, low ? 8 : 14, 0, (TY + 0.075) / 2, PZ, true);
  cyl(blackG, K_POLE, PR, PR, 0.002, low ? 8 : 14, 0, TY + 0.075, PZ);
  cyl(blackG, K_POLE, 0.165, 0.175, 0.012, low ? 16 : 28, 0, 0.006, PZ);
  cyl(blackG, K_POLE, 0.026, 0.032, 0.05, low ? 8 : 14, 0, 0.012 + 0.025, PZ, true);
  box(blackG, K_POLE, 0.11, 0.15, 0.012, 0, TY, TZ - BXD / 2 - 0.006);
  if (!low) for (const s of [-1, 1]) box(blackG, K_POLE, 0.05, 0.014, 0.04, 0, TY + s * 0.05, PZ + 0.004); // fascette attorno al palo

  // ================================================================ 4) fischietto accanto alla base (solo 'high')
  if (!low) {
    const r = 0.0115, th = 0.016, bv = 0.0012;
    const sh = new THREE.Shape();
    sh.moveTo(0.037, r); sh.lineTo(0, r); sh.absarc(0, 0, r, Math.PI / 2, Math.PI * 2 + 0.3, false); sh.lineTo(0.037, 0.0045); sh.closePath();
    const w = new THREE.ExtrudeGeometry(sh, { depth: th - 2 * bv, bevelEnabled: true, bevelThickness: bv, bevelSize: bv, bevelSegments: 1, curveSegments: 12 });
    w.translate(0, 0, bv); w.rotateX(-Math.PI / 2);          // sdraiato sul fianco: spessore in Y, sagoma sul piano
    const place = new THREE.Matrix4().compose(new THREE.Vector3(-0.215, TH + 0.0002, 0.165), new THREE.Quaternion().setFromAxisAngle(UP, 0.5), new THREE.Vector3(1, 1, 1));
    add(metalG, w, K_STEEL, place);
    // feritoia scura sul dorso e anellino
    const slot = new THREE.BoxGeometry(0.008, th * 0.62, 0.002); slot.translate(0.012, th / 2, -r - bv - 0.0002); add(blackG, slot, K_RUBBER, place);
    const ring = new THREE.TorusGeometry(0.0062, 0.0011, 4, 10); ring.rotateX(Math.PI / 2); ring.translate(-r - bv - 0.0045, th / 2, 0); add(metalG, ring, K_STEEL, place);
    // cordino nero appoggiato sul piano
    const p0 = new THREE.Vector3(-r - bv - 0.008, 0.004, 0).applyMatrix4(place);
    const cord = new THREE.CatmullRomCurve3([
      p0, new THREE.Vector3(p0.x - 0.02, TH + 0.0025, p0.z + 0.012), new THREE.Vector3(p0.x - 0.012, TH + 0.0025, p0.z - 0.05),
      new THREE.Vector3(p0.x + 0.05, TH + 0.0025, p0.z - 0.085), new THREE.Vector3(p0.x + 0.115, TH + 0.0025, p0.z - 0.05),
      new THREE.Vector3(p0.x + 0.1, TH + 0.0025, p0.z - 0.005), new THREE.Vector3(p0.x + 0.02, TH + 0.0025, p0.z + 0.03), new THREE.Vector3(p0.x - 0.004, TH + 0.005, p0.z + 0.004),
    ]);
    add(blackG, new THREE.TubeGeometry(cord, 26, 0.0022, 3, false), K_RUBBER);
  }

  // ================================================================ materiali e mesh
  const M = (arr, mat) => { const m = new THREE.Mesh(mergeGeometries(arr, false), mat); m.castShadow = m.receiveShadow = true; group.add(m); return m; };
  M(blackG, new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, metalness: 0.45, roughness: 0.5, envMapIntensity: 0.9 })).name = 'gong_nero';
  M(woodG, new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, metalness: 0.0, roughness: 0.58, envMapIntensity: 0.7 })).name = 'gong_legno';
  M(metalG, new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, metalness: 1.0, roughness: 0.2, envMapIntensity: 1.35 })).name = 'gong_metallo';

  // display: una sola texture, usata come map ed emissiveMap
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 256;
  const ctx = cv.getContext('2d');
  const onCss = '#' + new THREE.Color(accent).getHexString();
  drawDisplay(ctx, onCss);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const dispMat = new THREE.MeshStandardMaterial({ color: 0xffffff, map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 1.2, roughness: 0.3, metalness: 0.0, envMapIntensity: 0.6 });
  const disp = new THREE.Mesh(new THREE.PlaneGeometry(DW, DH), dispMat);
  disp.position.set(0, TY, zFace + 0.0015); disp.castShadow = false; disp.receiveShadow = false; disp.name = 'gong_display'; group.add(disp);

  // due punti: due quadratini emissivi in un'unica mesh, accesi e spenti con .visible
  const dots = [];
  for (const f of [0.3, 0.7]) {
    const ly = DIG.Y + DIG.H * f, lx = DIG.COLON_X - DIG.SKEW * (ly - (DIG.Y + DIG.H / 2));
    const s = 12 / LW * DW, g = new THREE.PlaneGeometry(s, s);
    g.translate((lx / LW - 0.5) * DW, (0.5 - ly / LH) * DH, 0); dots.push(g);
  }
  const colon = new THREE.Mesh(mergeGeometries(dots, false), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: accent, emissiveIntensity: 1.2, roughness: 0.3, metalness: 0.0 }));
  colon.position.set(0, TY, zFace + 0.0032); colon.castShadow = false; colon.receiveShadow = false; colon.name = 'gong_duepunti'; group.add(colon);

  group.userData.update = (t) => { const f = t - Math.floor(t); colon.visible = f < 0.5; };
  group.userData.redrawDisplay = () => { drawDisplay(ctx, onCss); tex.needsUpdate = true; };
  return group;
}
