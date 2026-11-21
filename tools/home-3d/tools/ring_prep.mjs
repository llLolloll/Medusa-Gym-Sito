// Prepara la parte alta del ring scaricato (Sketchfab, A1905, CC-BY): pali, tenditori, paracolpi, corde, distanziatori.
// Pedana e tela restano le nostre (grembiule MEDUSA GYM). Uso: node tools/ring_prep.mjs <in.glb> <out.glb> <hi|lo>
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, weld, join, prune, quantize, getBounds, simplifyPrimitive } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
const [,, inp, out, lod = 'hi'] = process.argv;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(inp); await MeshoptSimplifier.ready;
const root = doc.getRoot(), scene = root.listScenes()[0], buf = root.listBuffers()[0];
const S = 0.1, CX = -28.215, CZ = -32.415, DY = 0.033;   // decimetri -> metri, centro dei pali, tela a 0.90
const mul = (a, b) => { const o = new Array(16).fill(0); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) o[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k]; return o; };
const Gm = [S, 0, 0, 0, 0, S, 0, 0, 0, 0, S, 0, -CX * S, DY, -CZ * S, 1];
// --- materiali Medusa ---
const mk = (name, c, r, m = 0, e) => { const x = doc.createMaterial(name).setDoubleSided(true).setBaseColorFactor([...c, 1]).setRoughnessFactor(r).setMetallicFactor(m); if (e) x.setEmissiveFactor(e); return x; };
const MAT = {
  palo: mk('palo', [0.02, 0.021, 0.023], 0.38, 0.75),
  acciaio: mk('acciaio', [0.55, 0.56, 0.57], 0.3, 1),
  cordaNera: mk('cordaNera', [0.014, 0.014, 0.015], 0.55),
  cordaVerde: mk('cordaVerde', [0.04, 0.78, 0.02], 0.5, 0, [0.03, 0.22, 0.012]),
  padNero: mk('padNero', [0.017, 0.018, 0.02], 0.36),
  padVerde: mk('padVerde', [0.045, 0.62, 0.02], 0.4, 0, [0.012, 0.08, 0.005]),
  padBianco: mk('padBianco', [0.78, 0.79, 0.76], 0.42),
  nastro: mk('nastro', [0.012, 0.012, 0.013], 0.7),
};
const MAP = { '69_iron': 'palo', '16_scrat': 'acciaio', Color_02: 'padNero', Foregrou: 'nastro', '108_leat': 'nastro', Color_I0: 'cordaNera', Color_J0: 'cordaNera' };
const RATIO = lod === 'hi'
  ? { palo: [0.5, 0.004], acciaio: [0.2, 0.002], padNero: [0.6, 0.004], padVerde: [0.6, 0.004], padBianco: [0.6, 0.004], nastro: [0.028, 0.004], cordaNera: [0.4, 0.004], cordaVerde: [0.4, 0.004] }
  : { palo: [0.2, 0.012], acciaio: [0.04, 0.006], padNero: [0.18, 0.02], padVerde: [0.25, 0.012], padBianco: [0.25, 0.012], nastro: [0.006, 0.03], cordaNera: [0.1, 0.02], cordaVerde: [0.1, 0.02] };
// --- cuoce le trasformazioni nei vertici, una mesh nuova per nodo ---
const fresh = [];
for (const node of root.listNodes()) {
  const mesh = node.getMesh(); if (!mesh) continue;
  const M = mul(Gm, node.getWorldMatrix());
  const det = M[0] * (M[5] * M[10] - M[6] * M[9]) - M[4] * (M[1] * M[10] - M[2] * M[9]) + M[8] * (M[1] * M[6] - M[2] * M[5]);
  for (const p of mesh.listPrimitives()) {
    const name = p.getMaterial()?.getName();
    if (name === 'Color_A0' || name === 'Color_B0') continue;        // pedana e tela: usiamo le nostre
    const P0 = p.getAttribute('POSITION').getArray(), N0 = p.getAttribute('NORMAL')?.getArray(), n = P0.length / 3;
    const P = new Float32Array(n * 3), N = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const x = P0[i * 3], y = P0[i * 3 + 1], z = P0[i * 3 + 2];
      P[i * 3] = M[0] * x + M[4] * y + M[8] * z + M[12]; P[i * 3 + 1] = M[1] * x + M[5] * y + M[9] * z + M[13]; P[i * 3 + 2] = M[2] * x + M[6] * y + M[10] * z + M[14];
      if (N0) { const a = N0[i * 3], b = N0[i * 3 + 1], c = N0[i * 3 + 2]; let nx = M[0] * a + M[4] * b + M[8] * c, ny = M[1] * a + M[5] * b + M[9] * c, nz = M[2] * a + M[6] * b + M[10] * c; const l = Math.hypot(nx, ny, nz) || 1; N[i * 3] = nx / l; N[i * 3 + 1] = ny / l; N[i * 3 + 2] = nz / l; }
    }
    let I = p.getIndices() ? Uint32Array.from(p.getIndices().getArray()) : Uint32Array.from({ length: n }, (_, i) => i);
    if (det < 0) for (let i = 0; i < I.length; i += 3) { const t = I[i + 1]; I[i + 1] = I[i + 2]; I[i + 2] = t; }
    // a quale materiale va: paracolpi per angolo, corda alta verde, resto da tabella
    let cx = 0, cy = 0, cz = 0; for (let i = 0; i < n; i++) { cx += P[i * 3]; cy += P[i * 3 + 1]; cz += P[i * 3 + 2]; } cx /= n; cy /= n; cz /= n;
    if (name === 'Foregrou' && (Math.abs(cx) > 2.8 || Math.abs(cz) > 2.85 || cy < 0.95)) continue;   // minuterie a terra fuori dai pali: la nostra pedana e' piu' stretta
    const add = (key, idx) => { if (!idx.length) return;
      const np = doc.createPrimitive().setMaterial(MAT[key]).setIndices(doc.createAccessor().setType('SCALAR').setArray(idx).setBuffer(buf))
        .setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(P).setBuffer(buf));   // normali rifatte dopo: senza, i vertici si saldano e la semplificazione lavora
      fresh.push(doc.createNode().setMesh(doc.createMesh().addPrimitive(np))); };
    if (name === '148_Blue') add(cx > 0 && cz > 0 ? 'padVerde' : cx < 0 && cz < 0 ? 'padBianco' : 'padNero', I);
    else if (name === 'Color_01') {       // due corde rosse (alta e bassa): la alta diventa verde, la bassa nera
      const hiI = [], loI = []; for (let i = 0; i < I.length; i += 3) { const y = (P[I[i] * 3 + 1] + P[I[i + 1] * 3 + 1] + P[I[i + 2] * 3 + 1]) / 3; (y > 1.55 ? hiI : loI).push(I[i], I[i + 1], I[i + 2]); }
      add('cordaVerde', Uint32Array.from(hiI)); add('cordaNera', Uint32Array.from(loI));
    } else add(MAP[name] || 'nastro', I);
  }
}
for (const n of scene.listChildren()) n.dispose();
for (const n of root.listNodes()) if (!fresh.includes(n)) n.dispose();
for (const n of fresh) scene.addChild(n);
await doc.transform(prune(), dedup(), join({ keepNamed: false }), weld());
for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) {
  const k = p.getMaterial().getName(); const [ratio, error] = RATIO[k]; simplifyPrimitive(p, { simplifier: MeshoptSimplifier, ratio, error });
}
await doc.transform(prune());
// normali con angolo di piega: lisce sui tondi (corde, pali), spigoli vivi sui paracolpi
const COS = Math.cos(42 * Math.PI / 180);
for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) {
  const P = p.getAttribute('POSITION').getArray(), I = p.getIndices().getArray(), nt = I.length / 3;
  const fn = new Float32Array(nt * 3), adj = new Map();
  for (let t = 0; t < nt; t++) {
    const a = I[t * 3] * 3, b = I[t * 3 + 1] * 3, c = I[t * 3 + 2] * 3;
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
    fn[t * 3] = uy * vz - uz * vy; fn[t * 3 + 1] = uz * vx - ux * vz; fn[t * 3 + 2] = ux * vy - uy * vx;     // lunghezza = area: pesa la media
    for (let k = 0; k < 3; k++) { const v = I[t * 3 + k]; let l = adj.get(v); if (!l) adj.set(v, l = []); l.push(t); }
  }
  const NP = new Float32Array(nt * 9), NN = new Float32Array(nt * 9);
  for (let t = 0; t < nt; t++) {
    const fx = fn[t * 3], fy = fn[t * 3 + 1], fz = fn[t * 3 + 2], fl = Math.hypot(fx, fy, fz) || 1;
    for (let k = 0; k < 3; k++) {
      const v = I[t * 3 + k]; let nx = 0, ny = 0, nz = 0;
      for (const o of adj.get(v)) { const ox = fn[o * 3], oy = fn[o * 3 + 1], oz = fn[o * 3 + 2], ol = Math.hypot(ox, oy, oz) || 1; if ((fx * ox + fy * oy + fz * oz) / (fl * ol) >= COS) { nx += ox; ny += oy; nz += oz; } }
      const l = Math.hypot(nx, ny, nz) || 1, o = (t * 3 + k) * 3;
      NP[o] = P[v * 3]; NP[o + 1] = P[v * 3 + 1]; NP[o + 2] = P[v * 3 + 2]; NN[o] = nx / l; NN[o + 1] = ny / l; NN[o + 2] = nz / l;
    }
  }
  p.setIndices(null).setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(NP).setBuffer(buf)).setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(NN).setBuffer(buf));
}
await doc.transform(weld(), prune(), quantize({ quantizePosition: 14, quantizeNormal: 10 }));
const tri = {}; let tot = 0; for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) { const t = p.getIndices().getCount() / 3; tri[p.getMaterial().getName()] = (tri[p.getMaterial().getName()] || 0) + t; tot += t; }
const b = getBounds(scene); await io.write(out, doc);
console.log(lod, 'triangoli', tot, JSON.stringify(tri), 'bbox', b.min.map(v => +v.toFixed(2)), b.max.map(v => +v.toFixed(2)));
