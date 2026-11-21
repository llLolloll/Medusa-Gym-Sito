// Prepara il guantone scaricato (Sketchfab, A1905, CC-BY): appiattisce, centra, alleggerisce, ricolora.
// Uso: node tools/glove_prep.mjs <in.glb> <out.glb> <rapporto semplificazione> <lato texture> [debug]
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { flatten, dedup, weld, simplify, prune, textureCompress, quantize, center, getBounds, normals } from '@gltf-transform/functions';
import { KHRTextureTransform } from '@gltf-transform/extensions';
import fs from 'node:fs';
import { MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp';
const [,, inp, out, ratio = '0.3', tex = '1024', debug] = process.argv;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(inp);
await MeshoptSimplifier.ready;
await doc.transform(flatten(), dedup(), center({ pivot: 'center' }));
const LOOK = {
  guante: { c: [0.016, 0.016, 0.017], r: 0.4 },            // pelle nera
  dedo: { c: [0.016, 0.016, 0.017], r: 0.4 },
  'Mat.1': { c: [0.02, 0.02, 0.021], r: 0.5 },
  costura: { c: [0.05, 0.82, 0.02], r: 0.6 },              // cuciture verde Medusa
  costura_velcro: { c: [0.05, 0.82, 0.02], r: 0.6 },
  parte_de_adentro: { c: [0.035, 0.036, 0.035], r: 0.85 },
};
// grana di pelle generata da noi (le mappe originali avevano il logo del produttore in rilievo)
const grana = doc.createTexture('grana').setImage(fs.readFileSync(new URL('../models/_grana.png', import.meta.url))).setMimeType('image/png');
const tt = doc.createExtension(KHRTextureTransform);
const GRAIN = { guante: [9, 9, 0.42], dedo: [5, 5, 0.42], 'Mat.1': [6, 3, 0.35] };
doc.getRoot().listMaterials().forEach((m, i) => {
  const L = LOOK[m.getName()] || { c: [0.02, 0.02, 0.02], r: 0.5 };
  m.setBaseColorTexture(null).setNormalTexture(null);        // via colori, loghi e rilievi originali
  m.setBaseColorFactor([L.c[0], L.c[1], L.c[2], 1]).setRoughnessFactor(L.r).setMetallicFactor(0);
  m.setMetallicRoughnessTexture(null).setOcclusionTexture(null).setEmissiveTexture(null).setEmissiveFactor([0, 0, 0]);
  const g = GRAIN[m.getName()];
  if (g) { m.setNormalTexture(grana).setNormalScale(g[2]); m.getNormalTextureInfo().setExtension('KHR_texture_transform', tt.createTransform().setScale([g[0], g[1]])); }
});
// attributi che non servono piu' (secondi set di UV, tangenti); le parti interne si rifanno le normali dopo la semplificazione
for (const mesh of doc.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) {
  const inner = p.getMaterial() && !GRAIN[p.getMaterial().getName()];
  for (const sem of p.listSemantics()) if (/TEXCOORD_[12]|TANGENT/.test(sem) || (inner && /TEXCOORD_0|NORMAL/.test(sem))) p.setAttribute(sem, null);
}
await doc.transform(weld(), simplify({ simplifier: MeshoptSimplifier, ratio: +ratio, error: +(process.env.ERR || 0.004) }));
// normali morbide ricalcolate a mano per le parti a cui le abbiamo tolte (restano indicizzate, quindi leggere)
for (const mesh of doc.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) {
  if (p.getAttribute('NORMAL')) continue;
  const pos = p.getAttribute('POSITION'), idx = p.getIndices().getArray(), P = pos.getArray(), n = new Float32Array(P.length);
  for (let i = 0; i < idx.length; i += 3) {
    const a = idx[i] * 3, b = idx[i + 1] * 3, c = idx[i + 2] * 3;
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    for (const k of [a, b, c]) { n[k] += nx; n[k + 1] += ny; n[k + 2] += nz; }
  }
  for (let i = 0; i < n.length; i += 3) { const l = Math.hypot(n[i], n[i + 1], n[i + 2]) || 1; n[i] /= l; n[i + 1] /= l; n[i + 2] /= l; }
  p.setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(n).setBuffer(doc.getRoot().listBuffers()[0]));
}
await doc.transform(prune(), textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [+tex, +tex], quality: 88 }), quantize());
let tris = 0; for (const mesh of doc.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) tris += (p.getIndices() ? p.getIndices().getCount() : p.getAttribute('POSITION').getCount()) / 3;
const b = getBounds(doc.getRoot().listScenes()[0]);
await io.write(out, doc);
console.log('triangoli', Math.round(tris), 'bbox', b.min.map(v => +v.toFixed(2)), b.max.map(v => +v.toFixed(2)));
