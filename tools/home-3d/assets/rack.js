// Rack da calisthenics: tre pali, due sbarre per trazioni a quote diverse, trave alta. Origine = centro a terra. Metri, Y in alto.
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export function build(THREE, opts = {}) {
  const hi = (opts.lod || 'high') !== 'low';
  const G = new THREE.Group(); G.name = 'rack';
  const H = 2.6, W = 1.25, D = 0.9, T = 0.075;            // altezza, passo tra i pali, profondita' dei piedi, lato del tubolare
  const black = [], steel = [], green = [];
  const box = (list, w, h, d, x, y, z) => { const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z); list.push(g); };
  const cyl = (list, r, len, x, y, z, axis) => { const g = new THREE.CylinderGeometry(r, r, len, hi ? 14 : 7, 1); if (axis === 'x') g.rotateZ(Math.PI / 2); if (axis === 'z') g.rotateX(Math.PI / 2); g.translate(x, y, z); list.push(g); };
  for (const i of [-1, 0, 1]) {
    const x = i * W;
    box(black, T, H, T, x, H / 2, 0);                      // palo
    box(black, T, 0.05, D, x, 0.025, 0);                   // piede a terra
    box(green, T + 0.006, 0.09, T + 0.006, x, 1.05, 0);    // fascia verde
    if (hi) for (const y of [1.5, 1.7, 1.9, 2.1]) cyl(steel, 0.011, T + 0.012, x, y, 0, 'z');   // fori e perni di regolazione
    box(black, 0.26, 0.012, 0.36, x, 0.056, 0);            // piastra larga imbullonata a terra
  }
  box(black, 2 * W + T, T, T, 0, H - T / 2, 0);            // trave alta
  cyl(steel, 0.016, W - T, -W / 2, 2.32, 0, 'x');          // sbarra alta
  cyl(steel, 0.016, W - T, W / 2, 2.08, 0, 'x');           // sbarra bassa
  // parallele basse a sbalzo sull'ultimo palo
  for (const s of [-1, 1]) { cyl(steel, 0.019, 0.62, W + 0.31 + T / 2 - 0.02, 1.18, s * 0.26, 'x'); box(black, 0.05, 0.05, 0.3, W + T / 2 + 0.01, 1.18, s * 0.14); }
  // nastro da presa bianco sulle sbarre
  const tape = [];
  for (const [x, y] of [[-W / 2 - 0.28, 2.32], [-W / 2 + 0.28, 2.32], [W / 2 - 0.28, 2.08], [W / 2 + 0.28, 2.08]]) cyl(tape, 0.0185, 0.2, x, y, 0, 'x');
  const M = (list, mat) => { const m = new THREE.Mesh(mergeGeometries(list.map((g) => g.index ? g.toNonIndexed() : g), false), mat); m.castShadow = m.receiveShadow = true; G.add(m); };
  M(black, new THREE.MeshStandardMaterial({ color: 0x141517, roughness: 0.5, metalness: 0.6 }));
  M(steel, new THREE.MeshStandardMaterial({ color: 0xb8bcc0, roughness: 0.28, metalness: 1 }));
  M(green, new THREE.MeshStandardMaterial({ color: 0x2fb814, roughness: 0.6, metalness: 0 }));
  M(tape, new THREE.MeshStandardMaterial({ color: 0xd9d9d2, roughness: 0.9, metalness: 0 }));
  return G;
}
