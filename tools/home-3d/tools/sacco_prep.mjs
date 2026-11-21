// Prepara il sacco scaricato (Sketchfab, CAL21, CC-BY): tiene forma, cinghie, anelli e catene; la pelle nera con la fascia
// MEDUSA GYM la disegna il nostro codice, quindi qui si rifanno le UV del corpo "a cilindro". Uso: node tools/sacco_prep.mjs <in.glb> <out.glb> <hi|lo>
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, weld, join, prune, quantize, getBounds, simplifyPrimitive } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
const [,, inp, out, lod = 'hi'] = process.argv;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(inp); await MeshoptSimplifier.ready;
const root = doc.getRoot(), scene = root.listScenes()[0], buf = root.listBuffers()[0];
const mk = (name, c, r, m = 0) => doc.createMaterial(name).setDoubleSided(name === 'catene').setBaseColorFactor([...c, 1]).setRoughnessFactor(r).setMetallicFactor(m);
const MAT = { corpo: mk('corpo', [0.02, 0.02, 0.021], 0.6), cinghie: mk('cinghie', [0.018, 0.018, 0.019], 0.6), catene: mk('catene', [0.62, 0.63, 0.64], 0.32, 1) };
// --- 1) cuoce le trasformazioni e misura il corpo ---
const parts = []; let body = null;
for (const node of root.listNodes()) {
  const mesh = node.getMesh(); if (!mesh) continue;
  const M = node.getWorldMatrix();
  for (const p of mesh.listPrimitives()) {
    const P0 = p.getAttribute('POSITION').getArray(), N0 = p.getAttribute('NORMAL').getArray(), n = P0.length / 3, P = new Float32Array(n * 3), N = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const x = P0[i * 3], y = P0[i * 3 + 1], z = P0[i * 3 + 2], a = N0[i * 3], b = N0[i * 3 + 1], c = N0[i * 3 + 2];
      P[i * 3] = M[0] * x + M[4] * y + M[8] * z + M[12]; P[i * 3 + 1] = M[1] * x + M[5] * y + M[9] * z + M[13]; P[i * 3 + 2] = M[2] * x + M[6] * y + M[10] * z + M[14];
      const nx = M[0] * a + M[4] * b + M[8] * c, ny = M[1] * a + M[5] * b + M[9] * c, nz = M[2] * a + M[6] * b + M[10] * c, l = Math.hypot(nx, ny, nz) || 1; N[i * 3] = nx / l; N[i * 3 + 1] = ny / l; N[i * 3 + 2] = nz / l;
    }
    const I = Uint32Array.from(p.getIndices().getArray());
    const key = p.getMaterial().getName() === 'maetlchains' ? 'catene' : n > 2000 ? 'corpo' : 'cinghie';
    const part = { key, P, N, I }; parts.push(part); if (key === 'corpo') body = part;
  }
}
let mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9];
for (let i = 0; i < body.P.length; i += 3) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], body.P[i + k]); mx[k] = Math.max(mx[k], body.P[i + k]); }
const cx = (mn[0] + mx[0]) / 2, cz = (mn[2] + mx[2]) / 2, S = 0.364 / ((mx[0] - mn[0] + mx[2] - mn[2]) / 2);   // diametro medio 36,4 cm come il sacco di prima
for (const { key, P, N, I } of parts) {
  for (let i = 0; i < P.length; i += 3) { P[i] = (P[i] - cx) * S; P[i + 1] = (P[i + 1] - mn[1]) * S; P[i + 2] = (P[i + 2] - cz) * S; }   // origine = centro del fondo
  const np = doc.createPrimitive().setMaterial(MAT[key]).setIndices(doc.createAccessor().setType('SCALAR').setArray(I).setBuffer(buf))
    .setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(P).setBuffer(buf)).setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(N).setBuffer(buf));
  parts[parts.indexOf(parts.find(q => q.P === P))].node = doc.createNode().setMesh(doc.createMesh().addPrimitive(np));
}
const L = (mx[1] - mn[1]) * S;
for (const n of scene.listChildren()) n.dispose();
const keep = parts.map(p => p.node); for (const n of root.listNodes()) if (!keep.includes(n)) n.dispose();
for (const n of keep) scene.addChild(n);
await doc.transform(prune(), dedup(), join({ keepNamed: false }), weld());
const RATIO = lod === 'hi' ? { corpo: [1, 0.0005], cinghie: [0.5, 0.003], catene: [0.28, 0.004] } : { corpo: [0.3, 0.004], cinghie: [0.15, 0.01], catene: [0.1, 0.005] };
for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) { const k = p.getMaterial().getName(); mesh.setName(k); const [ratio, error] = RATIO[k]; if (ratio < 1) simplifyPrimitive(p, { simplifier: MeshoptSimplifier, ratio, error }); }
await doc.transform(prune());
// --- 2) UV cilindriche del corpo: u = angolo, v = altezza (0 fondo, 1 cima), cucitura sdoppiata ---
for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) {
  if (p.getMaterial().getName() !== 'corpo') continue;
  const P = Array.from(p.getAttribute('POSITION').getArray()), N = Array.from(p.getAttribute('NORMAL').getArray()), I = Array.from(p.getIndices().getArray());
  const U = [], n0 = P.length / 3;
  for (let i = 0; i < n0; i++) U.push(0.5 - Math.atan2(P[i * 3 + 2], P[i * 3]) / (2 * Math.PI), Math.min(1, Math.max(0, P[i * 3 + 1] / L)));
  const dup = new Map();
  for (let t = 0; t < I.length; t += 3) {
    const us = [U[I[t] * 2], U[I[t + 1] * 2], U[I[t + 2] * 2]];
    if (Math.max(...us) - Math.min(...us) > 0.5) for (let k = 0; k < 3; k++) if (us[k] < 0.5) {
      const v = I[t + k]; let d = dup.get(v);
      if (d === undefined) { d = P.length / 3; dup.set(v, d); P.push(P[v * 3], P[v * 3 + 1], P[v * 3 + 2]); N.push(N[v * 3], N[v * 3 + 1], N[v * 3 + 2]); U.push(U[v * 2] + 1, U[v * 2 + 1]); }
      I[t + k] = d;
    }
  }
  const acc = (type, arr) => doc.createAccessor().setType(type).setArray(arr).setBuffer(buf);
  p.setAttribute('POSITION', acc('VEC3', new Float32Array(P))).setAttribute('NORMAL', acc('VEC3', new Float32Array(N))).setAttribute('TEXCOORD_0', acc('VEC2', new Float32Array(U))).setIndices(acc('SCALAR', new Uint32Array(I)));
}
await doc.transform(prune({ keepAttributes: true }), quantize({ quantizePosition: 14, quantizeNormal: 10, pattern: /^(POSITION|NORMAL)$/ }));
const tri = {}; let tot = 0; for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) { const t = p.getIndices().getCount() / 3; tri[p.getMaterial().getName()] = t; tot += t; }
const b = getBounds(scene); await io.write(out, doc);
console.log(lod, 'triangoli', tot, JSON.stringify(tri), 'corpo lungo', L.toFixed(3), 'bbox', b.min.map(v => +v.toFixed(3)), b.max.map(v => +v.toFixed(3)));
