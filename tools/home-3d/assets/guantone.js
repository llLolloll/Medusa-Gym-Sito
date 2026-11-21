// Guantone da boxe procedurale (Medusa Gym). Nessun file esterno: SDF -> surface nets, piping/cuciture/bordino come mesh parametriche.
// Orientamento: nocche +Z, polsino -Z, palmo -Y, pollice -X. Lunghezza ~0.33 m.
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---------- primitive SDF ----------
const sqrt = Math.sqrt, abs = Math.abs, max = Math.max, min = Math.min;
function smin(a, b, k) { const h = max(k - abs(a - b), 0) / k; return min(a, b) - h * h * k * 0.25; }
function smax(a, b, k) { const h = max(k - abs(a - b), 0) / k; return max(a, b) + h * h * k * 0.25; }
function sstep(e0, e1, x) { let t = (x - e0) / (e1 - e0); t = t < 0 ? 0 : t > 1 ? 1 : t; return t * t * (3 - 2 * t); }
function sdEll(x, y, z, rx, ry, rz) {
  const a = x / rx, b = y / ry, c = z / rz, k0 = sqrt(a * a + b * b + c * c);
  const a2 = a / rx, b2 = b / ry, c2 = c / rz, k1 = sqrt(a2 * a2 + b2 * b2 + c2 * c2);
  return k1 < 1e-9 ? -min(rx, ry, rz) : k0 * (k0 - 1) / k1;
}
function sdEll2(x, y, rx, ry) {
  const a = x / rx, b = y / ry, k0 = sqrt(a * a + b * b), a2 = a / rx, b2 = b / ry, k1 = sqrt(a2 * a2 + b2 * b2);
  return k1 < 1e-9 ? -min(rx, ry) : k0 * (k0 - 1) / k1;
}
// capsula con raggio variabile (approssimata)
function sdCapT(x, y, z, ax, ay, az, bx, by, bz, ra, rb) {
  const px = x - ax, py = y - ay, pz = z - az, ex = bx - ax, ey = by - ay, ez = bz - az;
  let h = (px * ex + py * ey + pz * ez) / (ex * ex + ey * ey + ez * ez); h = h < 0 ? 0 : h > 1 ? 1 : h;
  const dx = px - ex * h, dy = py - ey * h, dz = pz - ez * h;
  return sqrt(dx * dx + dy * dy + dz * dz) - (ra + (rb - ra) * h);
}
function rbox2(px, py, bx, by, r) {
  const qx = abs(px) - bx + r, qy = abs(py) - by + r;
  const ox = max(qx, 0), oy = max(qy, 0);
  return sqrt(ox * ox + oy * oy) + min(max(qx, qy), 0) - r;
}

// ---------- forma del guantone ----------
const YC = -0.004;            // asse del polsino
const Z_END = -0.165;         // fine del polsino (bordino verde sopra)
const TILT = 0.15;            // taglio del polsino inclinato: lato palmo piu' corto
const STRAP_Z = -0.099, STRAP_HW = 0.027;
const FLAP_END = 2.05;        // angolo dove finisce la linguetta del velcro (lato alto, verso il pollice)
function cuffR(z) {
  const t = sstep(-0.128, -0.165, z);
  return [0.055 + 0.0055 * t, 0.047 + 0.005 * t];
}
// mode: 0 = completo, 1 = senza strap (base per le cuciture), 2 = anche senza pollice
const BIG = 1;
let LOW = false; // LOD basso: niente dettagli sottili nell'SDF, polsino/strap parametrici
const PATCH = [0.004, 0.028, 0.03, 0.022];
const SEAM = [-0.004, -0.17];
const TCA = Math.cos(0.16), TSA = Math.sin(0.16);
function thumbD(x, y, z) {
  if (x > -0.025 || z > 0.085 || z < -0.075) return BIG;
  // lobo ellissoidale appiattito, inclinato in su verso la punta, appoggiato al fianco del pugno
  const dy = y + 0.011, dz = z - 0.0, u = dz * TCA + dy * TSA;
  const tp = 1 - 0.45 * sstep(-0.01, 0.045, u); // piu' sottile verso la punta
  return sdEll((x + 0.059) / tp, -dz * TSA + dy * TCA, u, 0.0172, 0.026, 0.05) * (0.7 + 0.3 * tp);
}
const CREASES = [ // pieghe al polso: [z0, inclinazione, curvatura, centro x, semilarghezza, profondita']
  [-0.058, 0.08, 3.0, 0.004, 0.042, 0.00065],
  [-0.047, -0.06, 2.0, -0.012, 0.03, 0.00045],
  [-0.037, 0.14, 4.0, 0.014, 0.022, 0.00035]];
function glove(x, y, z, mode) {
  // massa del pugno (dorso + nocche)
  let d = sdEll(x - 0.005, y - 0.017, z - 0.045, 0.065, 0.066, 0.1);
  // rotolo delle dita, leggermente inclinato (lato mignolo piu' basso)
  const roll = sdCapT(x, y, z, -0.016, 0.002, 0.108, 0.018, -0.004, 0.106, 0.056, 0.054);
  d = smin(d, roll, 0.03);
  // cuscinetto nocche
  d = smin(d, sdEll(x, y - 0.047, z - 0.088, 0.052, 0.035, 0.046), 0.03);
  // palmo piatto
  d = smax(d, -0.052 - y, 0.02);
  // piega della presa (tra dita e palmo), risale sul lato mignolo
  // faccia di impatto: piano morbido leggermente inclinato verso l'alto
  if (z > 0.09) d = smax(d, 0.26 * y + 0.966 * z - 0.1525, 0.03);
  if (y < -0.015 && z > 0.03 && z < 0.11) {
    let cr = sdCapT(x, y, z, -0.04, -0.0558, 0.07, 0.045, -0.0558, 0.068, 0.0085, 0.0085);
    cr = min(cr, sdCapT(x, y, z, 0.045, -0.0558, 0.068, 0.062, -0.043, 0.076, 0.0085, 0.006));
    cr = min(cr, sdCapT(x, y, z, -0.04, -0.0558, 0.07, -0.058, -0.045, 0.077, 0.0085, 0.006));
    d = smax(d, -cr, 0.008);
  }
  // polsino: tubo ellittico leggermente svasato
  let ax = 0.055, ay = 0.047;
  if (z < 0.03) {
    const zl = z + TILT * (y - YC);
    const r = cuffR(zl); ax = r[0]; ay = r[1];
    const cuff = max(sdEll2(x, y - YC, ax, ay), max((Z_END - zl) * 0.99, z + 0.01));
    d = smin(d, cuff, 0.035);
  }
  // pollice: lobo separato lungo il lato, punta in avanti
  if (mode !== 2) {
    const th = thumbD(x, y, z);
    if (th < 0.05) {
      // solco poco profondo lungo il lobo, base e punta che sfumano nel pugno
      const kt = 0.022 + (0.007 - 0.022) * sstep(-0.025, 0.008, z) + 0.012 * sstep(0.025, 0.06, z);
      d = smin(d, th, kt);
    }
  }
  if (LOW) return max(d, -0.082 - z);
  // pieghe morbide della pelle al polso (dorso) e alla base del pollice
  if (z > -0.075 && z < -0.02 && y > 0.012) {
    const m = sstep(0.012, 0.035, y);
    for (let ci = 0; ci < 3; ci++) {
      const C = CREASES[ci], z0 = C[0], ti = C[1], be = C[2], xo = C[3], hw = C[4], dep = C[5];
      const dx = x - xo, ex = 1 - sstep(hw * 0.45, hw, abs(dx));
      if (ex <= 0) continue;
      const u = (z - (z0 + ti * dx + be * dx * dx)) / 0.0042;
      if (abs(u) < 3) d += m * ex * dep * Math.exp(-u * u);
    }
  }
  // irregolarita' dell'imbottitura (bassa frequenza)
  d += 0.00045 * Math.sin(x * 61 + z * 23) * Math.sin(y * 57 - z * 41 + 1.3);
  // cavita' interna (apertura del polsino)
  if (z < -0.075) d = smax(d, -max(sdEll2(x, y - YC, ax - 0.0085, ay - 0.0085), z + 0.09), 0.004);
  if (mode) return d;
  // toppa cucita sul dorso (vuota)
  if (y > 0.04 && abs(x - PATCH[0]) < 0.05 && abs(z - PATCH[1]) < 0.05) {
    const pr = rbox2(x - PATCH[0], z - PATCH[1], PATCH[2], PATCH[3], 0.011);
    d = smin(d, max(pr, d - 0.0014), 0.0012);
  }
  // strap velcro: fascia + linguetta sovrapposta che termina con un gradino
  const zz = z - STRAP_Z;
  if (abs(zz) < STRAP_HW + 0.006) {
    const es = sdEll2(x, y - YC, 0.055, 0.047);
    if (es < 0.02) {
      const base = rbox2(es - 0.003, zz, 0.0032, STRAP_HW, 0.0016);
      const th2 = Math.atan2((y - YC) / 0.047, x / 0.055);
      const hf = 0.0031 + 0.0016 * sstep(-1.7, -0.5, th2);
      const flap = max(rbox2(es - hf, zz, hf, STRAP_HW - 0.0006, 0.0016), (th2 - FLAP_END) * 0.05);
      d = min(d, min(base, flap));
    }
  }
  return d;
}

// ---------- surface nets ----------
function polygonize(f, lo, hi, h) {
  const nx = Math.ceil((hi[0] - lo[0]) / h) + 1, ny = Math.ceil((hi[1] - lo[1]) / h) + 1, nz = Math.ceil((hi[2] - lo[2]) / h) + 1;
  const N = nx * ny * nz, vals = new Float32Array(N);
  // griglia grossolana per saltare i punti lontani dalla superficie
  const H = h * 4, cx = Math.ceil((nx - 1) / 4) + 1, cy = Math.ceil((ny - 1) / 4) + 1, cz = Math.ceil((nz - 1) / 4) + 1;
  const coarse = new Float32Array(cx * cy * cz);
  for (let k = 0; k < cz; k++) for (let j = 0; j < cy; j++) for (let i = 0; i < cx; i++)
    coarse[i + cx * (j + cy * k)] = f(lo[0] + i * H, lo[1] + j * H, lo[2] + k * H);
  const thr = H * 0.9;
  for (let k = 0; k < nz; k++) {
    const z = lo[2] + k * h, ck = Math.min(cz - 1, Math.round(k / 4));
    for (let j = 0; j < ny; j++) {
      const y = lo[1] + j * h, cj = Math.min(cy - 1, Math.round(j / 4));
      let o = nx * (j + ny * k);
      for (let i = 0; i < nx; i++, o++) {
        const c = coarse[Math.min(cx - 1, Math.round(i / 4)) + cx * (cj + cy * ck)];
        vals[o] = abs(c) > thr ? c : f(lo[0] + i * h, y, z);
      }
    }
  }
  const cellV = new Int32Array(N).fill(-1);
  const pos = [], idx = [];
  const off = [0, 1, nx, nx + 1, nx * ny, nx * ny + 1, nx * ny + nx, nx * ny + nx + 1];
  const E = [0, 1, 2, 3, 4, 5, 6, 7, 0, 2, 1, 3, 4, 6, 5, 7, 0, 4, 1, 5, 2, 6, 3, 7];
  const cv = new Float32Array(8);
  const strideY = nx, strideZ = nx * ny;
  for (let k = 0; k < nz - 1; k++) for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const o = i + nx * (j + ny * k);
    let mask = 0;
    for (let c = 0; c < 8; c++) { const v = vals[o + off[c]]; cv[c] = v; if (v < 0) mask |= 1 << c; }
    if (mask === 0 || mask === 255) continue;
    let sx = 0, sy = 0, sz = 0, n = 0;
    for (let e = 0; e < 24; e += 2) {
      const a = E[e], b = E[e + 1], va = cv[a], vb = cv[b];
      if ((va < 0) === (vb < 0)) continue;
      const t = va / (va - vb);
      sx += (a & 1) + ((b & 1) - (a & 1)) * t;
      sy += ((a >> 1) & 1) + (((b >> 1) & 1) - ((a >> 1) & 1)) * t;
      sz += ((a >> 2) & 1) + (((b >> 2) & 1) - ((a >> 2) & 1)) * t;
      n++;
    }
    const vi = pos.length / 3;
    pos.push(lo[0] + (i + sx / n) * h, lo[1] + (j + sy / n) * h, lo[2] + (k + sz / n) * h);
    cellV[o] = vi;
    const s0 = cv[0] < 0;
    // facce sugli spigoli che partono dall'angolo 0 della cella
    if (j > 0 && k > 0 && s0 !== (cv[1] < 0)) { // asse x
      const a = cellV[o], b = cellV[o - strideY], c = cellV[o - strideY - strideZ], d = cellV[o - strideZ];
      if (s0) idx.push(a, b, c, a, c, d); else idx.push(a, c, b, a, d, c);
    }
    if (i > 0 && k > 0 && s0 !== (cv[2] < 0)) { // asse y
      const a = cellV[o], b = cellV[o - strideZ], c = cellV[o - strideZ - 1], d = cellV[o - 1];
      if (s0) idx.push(a, b, c, a, c, d); else idx.push(a, c, b, a, d, c);
    }
    if (i > 0 && j > 0 && s0 !== (cv[4] < 0)) { // asse z
      const a = cellV[o], b = cellV[o - 1], c = cellV[o - 1 - strideY], d = cellV[o - strideY];
      if (s0) idx.push(a, b, c, a, c, d); else idx.push(a, c, b, a, d, c);
    }
  }
  return { pos: new Float32Array(pos), idx };
}
function grad(f, x, y, z, e, out) {
  // gradiente tetraedrico
  const a = f(x + e, y - e, z - e), b = f(x - e, y - e, z + e), c = f(x - e, y + e, z - e), d = f(x + e, y + e, z + e);
  out[0] = a - b - c + d; out[1] = -a - b + c + d; out[2] = -a + b - c + d;
  const l = sqrt(out[0] * out[0] + out[1] * out[1] + out[2] * out[2]) || 1;
  out[0] /= l; out[1] /= l; out[2] /= l;
}
function projectFast(f, p, n, e) {
  const d = f(p[0], p[1], p[2]); grad(f, p[0], p[1], p[2], e, n);
  p[0] -= d * n[0]; p[1] -= d * n[1]; p[2] -= d * n[2];
}
function project(f, p, n, e, iters) {
  for (let it = 0; it < iters; it++) {
    const d = f(p[0], p[1], p[2]); grad(f, p[0], p[1], p[2], e, n);
    p[0] -= d * n[0]; p[1] -= d * n[1]; p[2] -= d * n[2];
  }
  grad(f, p[0], p[1], p[2], e, n);
}

// ---------- contorno piano (marching squares) per tracciare le cuciture ----------
function planeContour(f2, u0, u1, v0, v1, s) {
  const nu = Math.ceil((u1 - u0) / s) + 1, nv = Math.ceil((v1 - v0) / s) + 1;
  const F = new Float32Array(nu * nv);
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) F[i + nu * j] = f2(u0 + i * s, v0 + j * s);
  const pts = new Map(); // id spigolo -> punto
  const adj = new Map();
  const ep = (i, j, dir) => { // dir 0: spigolo orizzontale (i,j)-(i+1,j); 1: verticale (i,j)-(i,j+1)
    const id = (j * nu + i) * 2 + dir;
    if (!pts.has(id)) {
      const a = F[i + nu * j], b = dir ? F[i + nu * (j + 1)] : F[i + 1 + nu * j], t = a / (a - b);
      pts.set(id, dir ? [u0 + i * s, v0 + (j + t) * s] : [u0 + (i + t) * s, v0 + j * s]);
    }
    return id;
  };
  const link = (a, b) => { (adj.get(a) || adj.set(a, []).get(a)).push(b); (adj.get(b) || adj.set(b, []).get(b)).push(a); };
  for (let j = 0; j < nv - 1; j++) for (let i = 0; i < nu - 1; i++) {
    const a = F[i + nu * j] < 0, b = F[i + 1 + nu * j] < 0, c = F[i + 1 + nu * (j + 1)] < 0, d = F[i + nu * (j + 1)] < 0;
    const es = [];
    if (a !== b) es.push(ep(i, j, 0));
    if (b !== c) es.push(ep(i + 1, j, 1));
    if (d !== c) es.push(ep(i, j + 1, 0));
    if (a !== d) es.push(ep(i, j, 1));
    if (es.length === 2) link(es[0], es[1]);
    else if (es.length === 4) { link(es[0], es[1]); link(es[2], es[3]); }
  }
  const seen = new Set(), lines = [];
  for (const start of adj.keys()) {
    if (seen.has(start)) continue;
    // trova un estremo (o parti da qui se chiuso)
    let s0 = start, prev = -1, guard = 0;
    while (guard++ < 100000) { const nb = adj.get(s0).filter(x => x !== prev); if (adj.get(s0).length < 2 || nb.length === 0) break; const nx = nb[0]; prev = s0; s0 = nx; if (s0 === start) break; }
    const line = []; let cur = s0; prev = -1;
    while (cur !== undefined && !seen.has(cur)) { seen.add(cur); line.push(pts.get(cur)); const nb = adj.get(cur).filter(x => x !== prev && !seen.has(x)); prev = cur; cur = nb[0]; }
    if (line.length > 4) lines.push(line);
  }
  return lines;
}
// ricampiona una polilinea 3D a passo costante con smussatura
function resample(P, step, smooth = 2) {
  for (let s = 0; s < smooth; s++) for (let i = 1; i < P.length - 1; i++) for (let c = 0; c < 3; c++) P[i][c] = (P[i - 1][c] + 2 * P[i][c] + P[i + 1][c]) / 4;
  const L = [0]; for (let i = 1; i < P.length; i++) L.push(L[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1], P[i][2] - P[i - 1][2]));
  const tot = L[L.length - 1], n = Math.max(2, Math.round(tot / step)), out = [];
  let j = 0;
  for (let k = 0; k <= n; k++) {
    const t = tot * k / n; while (j < L.length - 2 && L[j + 1] < t) j++;
    const u = (t - L[j]) / ((L[j + 1] - L[j]) || 1);
    out.push([0, 1, 2].map(c => P[j][c] + (P[j + 1][c] - P[j][c]) * u));
  }
  return out;
}

export function build(THREE, opts = {}) {
  const t0 = performance.now();
  const low = opts.lod === 'low'; LOW = low;
  const group = new THREE.Group(); group.name = 'guantone';
  const F = (x, y, z) => glove(x, y, z, 0), FB = (x, y, z) => glove(x, y, z, 1), FN = (x, y, z) => glove(x, y, z, 2);
  const h = low ? 0.006 : 0.0038;

  // ---------- corpo ----------
  const { pos, idx } = polygonize(F, [-0.104, -0.066, -0.17], [0.08, 0.096, 0.172], h);
  const nV = pos.length / 3, nrm = new Float32Array(nV * 3), p = [0, 0, 0], n = [0, 0, 0];
  for (let v = 0; v < nV; v++) {
    p[0] = pos[v * 3]; p[1] = pos[v * 3 + 1]; p[2] = pos[v * 3 + 2];
    projectFast(F, p, n, h * 0.35);
    pos[v * 3] = p[0]; pos[v * 3 + 1] = p[1]; pos[v * 3 + 2] = p[2];
    nrm[v * 3] = n[0]; nrm[v * 3 + 1] = n[1]; nrm[v * 3 + 2] = n[2];
  }
  // separa fodera interna (materiale tessuto scuro) dalla pelle
  const outer = [], lining = [];
  for (let t = 0; t < idx.length; t += 3) {
    let a = idx[t], b = idx[t + 1], c = idx[t + 2];
    // orientamento coerente con la normale SDF
    const ax = pos[a * 3], ay = pos[a * 3 + 1], az = pos[a * 3 + 2];
    const e1x = pos[b * 3] - ax, e1y = pos[b * 3 + 1] - ay, e1z = pos[b * 3 + 2] - az;
    const e2x = pos[c * 3] - ax, e2y = pos[c * 3 + 1] - ay, e2z = pos[c * 3 + 2] - az;
    const fx = e1y * e2z - e1z * e2y, fy = e1z * e2x - e1x * e2z, fz = e1x * e2y - e1y * e2x;
    const sx = nrm[a * 3] + nrm[b * 3] + nrm[c * 3], sy = nrm[a * 3 + 1] + nrm[b * 3 + 1] + nrm[c * 3 + 1], sz = nrm[a * 3 + 2] + nrm[b * 3 + 2] + nrm[c * 3 + 2];
    if (fx * sx + fy * sy + fz * sz < 0) { const tmp = b; b = c; c = tmp; }
    const mz = (az + pos[b * 3 + 2] + pos[c * 3 + 2]) / 3, mx = (ax + pos[b * 3] + pos[c * 3]) / 3, my = (ay + pos[b * 3 + 1] + pos[c * 3 + 1]) / 3;
    const [rx, ry] = cuffR(mz + TILT * (my - YC));
    const inside = mz < -0.08 && (mx / (rx - 0.004)) ** 2 + ((my - YC) / (ry - 0.004)) ** 2 < 1;
    (inside ? lining : outer).push(a, b, c);
  }
  const bodyGeo = new THREE.BufferGeometry();
  bodyGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  bodyGeo.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  bodyGeo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(nV * 2), 2));
  bodyGeo.setIndex([...outer, ...lining]);
  bodyGeo.addGroup(0, outer.length, 0); bodyGeo.addGroup(outer.length, lining.length, 1);

  // ---------- texture grana pelle (tileable) ----------
  const TS = 256; // tile piccolo ripetuto piu' spesso: stessa grana, costruzione piu' veloce
  const grain = makeGrain(THREE, TS);

  const leather = new THREE.MeshPhysicalMaterial({ color: 0x0c0c0d, roughness: 0.46, metalness: 0, clearcoat: 0.4, clearcoatRoughness: 0.28, sheen: 0.35, sheenColor: 0x3a3a3a, sheenRoughness: 0.5, specularIntensity: 0.6 });
  const green = new THREE.MeshPhysicalMaterial({ color: 0x39ff14, roughness: 0.5, metalness: 0, clearcoat: 0.3, clearcoatRoughness: 0.25, });
  addGrain(leather, grain, 140, 0.00012, 0.0007);
  addGrain(green, grain, 140, 0.00007, 0.0004);
  const liningMat = new THREE.MeshStandardMaterial({ color: 0x050605, roughness: 1, metalness: 0, envMapIntensity: 0.35 });
  const thread = new THREE.MeshStandardMaterial({ color: 0xcfd2cc, roughness: 0.75, metalness: 0 });

  const body = new THREE.Mesh(bodyGeo, [leather, liningMat]);
  body.castShadow = body.receiveShadow = true; group.add(body);

  // ---------- bordino verde del polsino (sweep del profilo attorno all'ellisse) ----------
  const nT = low ? 40 : 96;
  const prof = [[-0.0005, -0.1435], [0.0007, -0.1442], [0.0011, -0.1458], [0.0012, -0.149], [0.0012, -0.1615]];
  const RC = 0.0044, rcx = 0.0012 - RC, rcz = -0.1628;
  const nArc = low ? 6 : 10;
  for (let a = 1; a <= nArc; a++) { const ang = Math.PI * a / nArc; prof.push([rcx + RC * Math.cos(ang), rcz - RC * Math.sin(ang)]); }
  prof.push([rcx - RC + 0.0002, -0.1575], [rcx - RC + 0.0012, -0.155]);
  const greenParts = [sweepRing(THREE, prof, nT)];
  if (low) { // polsino e strap come superfici di rivoluzione (piu' pulite a bassa risoluzione)
    const add = (g, m) => { g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); const me = new THREE.Mesh(g, m); me.castShadow = me.receiveShadow = true; group.add(me); };
    const outerW = sweepRing(THREE, [[-0.0004, -0.078], [0, -0.1], [0, -0.13], [0, -0.159]], nT);
    const st = [[-0.0006, -0.0722], [0.0035, -0.072], [0.0058, -0.0732], [0.0066, -0.0758], [0.0066, -0.1222], [0.0058, -0.1248], [0.0035, -0.126], [-0.0006, -0.1258]];
    add(mergeGeometries([outerW, sweepRing(THREE, st, nT, false)]), leather);
    add(sweepRing(THREE, [[-0.0094, -0.158], [-0.0094, -0.13], [-0.0094, -0.105], [-0.02, -0.1], [-0.04, -0.097]], nT, true, true), liningMat);
  }

  // ---------- piping verde lungo il contorno laterale (sul lato esterno e sopra il pollice) ----------
  const pipeR = 0.0023, radial = low ? 4 : 8;
  const stitchPaths = [];
  const traceSide = (xc, keep, fc = FB) => {
    const lines = planeContour((y, z) => fc(xc, y, z), -0.068, 0.084, -0.075, 0.175, low ? 0.003 : 0.0022);
    for (const L of lines) {
      let P = L.map(([y, z]) => [xc, y, z]);
      // spezza dove esce dall'area utile (sotto lo strap / sul bordino)
      let seg = [];
      const flush = () => { if (seg.length > 6) { const R = resample(seg, low ? 0.0045 : 0.002, 6); pipeOn(R); } seg = []; };
      for (const q of P) { const l = seg[seg.length - 1]; if (l && Math.hypot(q[0] - l[0], q[1] - l[1], q[2] - l[2]) > 0.008) flush(); if (keep(q)) seg.push(q); else flush(); }
      flush();
    }
  };
  const pipeOn = (R) => {
    const pts = [], nn = [];
    for (const q of R) { const pp = q.slice(), n2 = [0, 0, 0]; project(FB, pp, n2, 0.0008, 2); pts.push(pp); nn.push(n2); }
    greenParts.push(tube(THREE, pts, nn, pipeR, pipeR * 0.45, radial));
    stitchPaths.push({ pts, nn, side: 1 });
  };
  const notStrap = (q) => q[2] > (low ? -0.052 : STRAP_Z + STRAP_HW + 0.0015);
  traceSide(0.055, notStrap);
  traceSide(-0.053, (q) => notStrap(q) && thumbD(q[0], q[1], q[2]) > 0.008, FN);

  // ---------- cuciture ----------
  const stitches = [];
  const ST = { len: 0.0032, gap: 0.0021, w: 0.0009, hgt: 0.00055 };
  // fila interna parallela al piping
  for (const sp of stitchPaths) {
    const row = offsetPath(sp.pts, sp.nn, 0.0048, FB);
    if (row) dashes(THREE, row.pts, row.nn, ST, stitches, low);
  }
  // bordi dello strap e bordo del bordino
  const ringPath = (z, off, fn, a0 = -Math.PI, a1 = Math.PI) => {
    const pts = [], nn = [], N = 220;
    for (let i = 0; i <= N; i++) {
      const a = a0 + (a1 - a0) * i / N, [rx, ry] = cuffR(z);
      const q = [(rx + off) * Math.cos(a), YC + (ry + off) * Math.sin(a), z], n2 = [0, 0, 0];
      project(fn, q, n2, 0.0006, 3); pts.push(q); nn.push(n2);
    }
    return { pts, nn };
  };
  for (const zz of [STRAP_Z - STRAP_HW + 0.0042, STRAP_Z + STRAP_HW - 0.0042]) {
    const r = ringPath(zz, 0.01, F); dashes(THREE, r.pts, r.nn, ST, stitches, low);
  }
  { // cucitura sul bordino verde
    const pts = [], nn = [], N = 220;
    for (let i = 0; i <= N; i++) {
      const a = -Math.PI + 2 * Math.PI * i / N, [rx, ry] = cuffR(-0.1525);
      pts.push([(rx + 0.0014) * Math.cos(a), YC + (ry + 0.0014) * Math.sin(a), -0.1535 - TILT * (ry + 0.0014) * Math.sin(a)]);
      const nx2 = Math.cos(a) / rx, ny2 = Math.sin(a) / ry, l = Math.hypot(nx2, ny2); nn.push([nx2 / l, ny2 / l, 0]);
    }
    dashes(THREE, pts, nn, ST, stitches, low);
  }
  // cucitura lungo il bordo della linguetta (gradino del velcro)
  {
    const pts = [], nn = [];
    for (let i = 0; i <= 30; i++) {
      const zz = STRAP_Z - STRAP_HW + 0.004 + (2 * STRAP_HW - 0.008) * i / 30, a = FLAP_END - 0.09;
      const q = [0.07 * Math.cos(a), YC + 0.062 * Math.sin(a), zz], n2 = [0, 0, 0];
      project(F, q, n2, 0.0006, 3); pts.push(q); nn.push(n2);
    }
    dashes(THREE, pts, nn, ST, stitches, low);
  }

  { // cucitura della toppa
    const pts = [], nn = [], N = 160, ins = 0.0045;
    for (let i = 0; i <= N; i++) {
      const a = 2 * Math.PI * i / N, c = Math.cos(a), sn = Math.sin(a);
      // superellisse ~ rettangolo arrotondato
      const ex = Math.sign(c) * Math.pow(abs(c), 0.42) * (PATCH[2] - ins), ez = Math.sign(sn) * Math.pow(abs(sn), 0.42) * (PATCH[3] - ins);
      const q = [PATCH[0] + ex, 0.1, PATCH[1] + ez], n2 = [0, 0, 0];
      for (let it = 0; it < 30; it++) { const dd = F(q[0], q[1], q[2]); q[1] -= dd; if (abs(dd) < 1e-6) break; }
      project(F, q, n2, 0.0006, 1); pts.push(q); nn.push(n2);
    }
    dashes(THREE, pts, nn, ST, stitches, low);
  }
  const greenGeo = mergeGeometries(greenParts.map(g => (g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)), g)));
  const greenMesh = new THREE.Mesh(greenGeo, green); greenMesh.castShadow = greenMesh.receiveShadow = true; group.add(greenMesh);
  if (stitches.length) {
    const sg = mergeGeometries(stitches);
    const sm = new THREE.Mesh(sg, thread); sm.castShadow = false; sm.receiveShadow = true; group.add(sm);
  }

  let tris = 0; group.traverse(o => { if (o.isMesh) tris += o.geometry.index ? o.geometry.index.count / 3 : o.geometry.attributes.position.count / 3; });
  group.userData.tris = Math.round(tris);
  group.userData.buildMs = Math.round(performance.now() - t0);
  if (typeof window !== 'undefined') window.__guantone = { tris: group.userData.tris, ms: group.userData.buildMs };
  return group;
}

// ---------- helper mesh ----------
function sweepRing(THREE, prof, nT, tilt = true, inward = false) {
  const nP = prof.length, P = new Float32Array(nP * nT * 3), I = [];
  for (let t = 0; t < nT; t++) {
    const a = 2 * Math.PI * t / nT, c = Math.cos(a), s = Math.sin(a);
    for (let k = 0; k < nP; k++) {
      const [dr, z] = prof[k], zc = Math.max(z, Z_END), [rx, ry] = cuffR(zc);
      const o = (t * nP + k) * 3; P[o] = (rx + dr) * c; P[o + 1] = YC + (ry + dr) * s; P[o + 2] = tilt ? z - TILT * (ry + dr) * s : z;
    }
  }
  for (let t = 0; t < nT; t++) for (let k = 0; k < nP - 1; k++) {
    const a = t * nP + k, b = ((t + 1) % nT) * nP + k;
    I.push(a, a + 1, b, b, a + 1, b + 1);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setIndex(I); g.computeVertexNormals();
  // orienta verso l'esterno
  const nr = g.attributes.normal; let s = 0; for (let t = 0; t < nT; t++) { const o = (t * nP + 3); s += nr.getX(o) * P[o * 3] + nr.getY(o) * (P[o * 3 + 1] - YC); }
  if ((s < 0) !== inward) { const ix = g.index.array; for (let i = 0; i < ix.length; i += 3) { const tmp = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = tmp; } g.computeVertexNormals(); }
  return g;
}
function tube(THREE, pts, nn, r, lift, radial) {
  const N = pts.length, P = new Float32Array(N * radial * 3), Nr = new Float32Array(N * radial * 3), I = [];
  for (let i = 0; i < N; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(N - 1, i + 1)];
    let tx = b[0] - a[0], ty = b[1] - a[1], tz = b[2] - a[2]; const tl = Math.hypot(tx, ty, tz) || 1; tx /= tl; ty /= tl; tz /= tl;
    let [nx, ny, nz] = nn[i]; const dt = nx * tx + ny * ty + nz * tz; nx -= dt * tx; ny -= dt * ty; nz -= dt * tz;
    const nl = Math.hypot(nx, ny, nz) || 1; nx /= nl; ny /= nl; nz /= nl;
    const bx = ty * nz - tz * ny, by = tz * nx - tx * nz, bz = tx * ny - ty * nx;
    const cx = pts[i][0] + nx * lift, cy = pts[i][1] + ny * lift, cz = pts[i][2] + nz * lift;
    for (let k = 0; k < radial; k++) {
      const ang = 2 * Math.PI * k / radial, c = Math.cos(ang), s = Math.sin(ang);
      const dx = nx * c + bx * s, dy = ny * c + by * s, dz = nz * c + bz * s, o = (i * radial + k) * 3;
      P[o] = cx + dx * r; P[o + 1] = cy + dy * r; P[o + 2] = cz + dz * r; Nr[o] = dx; Nr[o + 1] = dy; Nr[o + 2] = dz;
    }
  }
  for (let i = 0; i < N - 1; i++) for (let k = 0; k < radial; k++) {
    const a = i * radial + k, b = i * radial + (k + 1) % radial, c = a + radial, d = b + radial;
    I.push(a, c, b, b, c, d);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('normal', new THREE.BufferAttribute(Nr, 3)); g.setIndex(I);
  // verifica orientamento del primo triangolo
  return fixWinding(g);
}
function fixWinding(g) {
  const P = g.attributes.position.array, Nr = g.attributes.normal.array, ix = g.index.array;
  const a = ix[0], b = ix[1], c = ix[2];
  const e1 = [P[b * 3] - P[a * 3], P[b * 3 + 1] - P[a * 3 + 1], P[b * 3 + 2] - P[a * 3 + 2]], e2 = [P[c * 3] - P[a * 3], P[c * 3 + 1] - P[a * 3 + 1], P[c * 3 + 2] - P[a * 3 + 2]];
  const f = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
  if (f[0] * Nr[a * 3] + f[1] * Nr[a * 3 + 1] + f[2] * Nr[a * 3 + 2] < 0) for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; }
  return g;
}
function offsetPath(pts, nn, d, f) {
  // sposta la polilinea di d verso l'interno del pannello (lato della curvatura) e la riproietta
  const N = pts.length; if (N < 4) return null;
  // centro della curva per decidere il lato
  const cen = [0, 0, 0]; for (const q of pts) for (let c = 0; c < 3; c++) cen[c] += q[c] / N;
  const out = [], on = [];
  for (let i = 0; i < N; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(N - 1, i + 1)];
    const t = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], n = nn[i];
    let s = [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
    const sl = Math.hypot(...s) || 1; s = s.map(v => v / sl);
    out.push([pts[i][0] + s[0] * d, pts[i][1] + s[1] * d, pts[i][2] + s[2] * d]);
  }
  // scegli il lato: quello verso x=0 (interno del pannello laterale e' verso il centro del guanto? no: verso il centro della curva)
  let dot = 0; for (let i = 0; i < N; i++) dot += (out[i][0] - pts[i][0]) * (cen[0] - pts[i][0]) + (out[i][1] - pts[i][1]) * (cen[1] - pts[i][1]) + (out[i][2] - pts[i][2]) * (cen[2] - pts[i][2]);
  if (dot < 0) for (let i = 0; i < N; i++) for (let c = 0; c < 3; c++) out[i][c] = 2 * pts[i][c] - out[i][c];
  for (const q of out) { const n2 = [0, 0, 0]; project(f, q, n2, 0.0006, 3); on.push(n2); }
  return { pts: out, nn: on };
}
function dashes(THREE, pts, nn, ST, outArr, low) {
  if (low) return; // in LOD basso niente cuciture geometriche
  // lunghezza cumulativa
  const L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1], pts[i][2] - pts[i - 1][2]));
  const tot = L[L.length - 1], pitch = ST.len + ST.gap;
  const P = [], Nr = [], I = [];
  const at = (t) => { let j = 0; while (j < L.length - 2 && L[j + 1] < t) j++; const u = (t - L[j]) / ((L[j + 1] - L[j]) || 1); const q = [], n = []; for (let c = 0; c < 3; c++) { q.push(pts[j][c] + (pts[j + 1][c] - pts[j][c]) * u); n.push(nn[j][c] + (nn[j + 1][c] - nn[j][c]) * u); } const l = Math.hypot(...n) || 1; return [q, n.map(v => v / l)]; };
  for (let t = pitch * 0.5; t + ST.len < tot; t += pitch) {
    const [a, na] = at(t), [b] = at(t + ST.len);
    let tx = b[0] - a[0], ty = b[1] - a[1], tz = b[2] - a[2]; const tl = Math.hypot(tx, ty, tz) || 1; tx /= tl; ty /= tl; tz /= tl;
    const [nx, ny, nz] = na; const sx = ty * nz - tz * ny, sy = tz * nx - tx * nz, sz = tx * ny - ty * nx;
    // punto filo: 6 vertici (sezione a cuscinetto), due anelli + punte
    const base = P.length / 3, w = ST.w / 2, hh = ST.hgt;
    const ring = (c, sc) => { // sezione: sinistra, alto, destra (a filo superficie leggermente affondata)
      P.push(c[0] - sx * w * sc - nx * 0.0002, c[1] - sy * w * sc - ny * 0.0002, c[2] - sz * w * sc - nz * 0.0002); Nr.push(-sx * 0.6 + nx * 0.8, -sy * 0.6 + ny * 0.8, -sz * 0.6 + nz * 0.8);
      P.push(c[0] + nx * hh * sc, c[1] + ny * hh * sc, c[2] + nz * hh * sc); Nr.push(nx, ny, nz);
      P.push(c[0] + sx * w * sc - nx * 0.0002, c[1] + sy * w * sc - ny * 0.0002, c[2] + sz * w * sc - nz * 0.0002); Nr.push(sx * 0.6 + nx * 0.8, sy * 0.6 + ny * 0.8, sz * 0.6 + nz * 0.8);
    };
    const m1 = [a[0] + tx * ST.len * 0.2, a[1] + ty * ST.len * 0.2, a[2] + tz * ST.len * 0.2], m2 = [a[0] + tx * ST.len * 0.8, a[1] + ty * ST.len * 0.8, a[2] + tz * ST.len * 0.8];
    P.push(a[0] - nx * 0.0002, a[1] - ny * 0.0002, a[2] - nz * 0.0002); Nr.push(-tx * 0.5 + nx * 0.8, -ty * 0.5 + ny * 0.8, -tz * 0.5 + nz * 0.8);
    ring(m1, 1); ring(m2, 1);
    P.push(b[0] - nx * 0.0002, b[1] - ny * 0.0002, b[2] - nz * 0.0002); Nr.push(tx * 0.5 + nx * 0.8, ty * 0.5 + ny * 0.8, tz * 0.5 + nz * 0.8);
    const A = base, r1 = base + 1, r2 = base + 4, B = base + 7;
    I.push(A, r1 + 1, r1, A, r1 + 2, r1 + 1);
    for (let k = 0; k < 2; k++) I.push(r1 + k, r1 + k + 1, r2 + k, r2 + k, r1 + k + 1, r2 + k + 1);
    I.push(B, r2, r2 + 1, B, r2 + 1, r2 + 2);
  }
  if (!P.length) return;
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(Nr, 3)); g.setIndex(I);
  // orientamento: confronta con normale
  const flip = (() => { const ix = I; const a = ix[0], b = ix[1], c = ix[2]; const e1 = [0, 1, 2].map(k => P[b * 3 + k] - P[a * 3 + k]), e2 = [0, 1, 2].map(k => P[c * 3 + k] - P[a * 3 + k]); const f = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]]; const nA = [0, 1, 2].map(k => Nr[b * 3 + k]); return f[0] * nA[0] + f[1] * nA[1] + f[2] * nA[2] < 0; })();
  if (flip) { const ix = g.index.array; for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; } }
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(P.length / 3 * 2), 2));
  outArr.push(g);
}

// ---------- grana pelle: R = grana fine (ciottoli), G = rugosita', B = ondulazione larga ----------
function makeGrain(THREE, S) {
  const data = new Uint8Array(S * S * 4);
  let seed = 1337; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const C = Math.round(S / 22), G = S / C, W = C + 2; // celle per lato + bordo per il tiling
  const fx = new Float32Array(W * W), fy = new Float32Array(W * W);
  const bx = new Float32Array(C * C), by = new Float32Array(C * C);
  for (let i = 0; i < C * C; i++) { bx[i] = 0.12 + rnd() * 0.76; by[i] = 0.12 + rnd() * 0.76; }
  for (let j = 0; j < W; j++) for (let i = 0; i < W; i++) {
    const k = ((i - 1 + C) % C) + C * ((j - 1 + C) % C);
    fx[i + W * j] = i - 1 + bx[k]; fy[i + W * j] = j - 1 + by[k];
  }
  // ondulazione larga tileable: somma di coseni separati in tabelle
  const NW = 6, cx = [], sx = [], cy = [], sy = [];
  for (let w = 0; w < NW; w++) {
    const a = 1 + Math.floor(rnd() * 3), b = (1 + Math.floor(rnd() * 3)) * (rnd() < 0.5 ? -1 : 1), ph = rnd() * 6.283;
    const CX = new Float32Array(S), SX = new Float32Array(S), CY = new Float32Array(S), SY = new Float32Array(S);
    for (let i = 0; i < S; i++) { CX[i] = Math.cos(2 * Math.PI * a * i / S); SX[i] = Math.sin(2 * Math.PI * a * i / S); CY[i] = Math.cos(2 * Math.PI * b * i / S + ph); SY[i] = Math.sin(2 * Math.PI * b * i / S + ph); }
    cx.push(CX); sx.push(SX); cy.push(CY); sy.push(SY);
  }
  for (let y = 0; y < S; y++) {
    const gy = y / G, cyy = Math.floor(gy);
    for (let x = 0; x < S; x++) {
      const gx = x / G, cxx = Math.floor(gx);
      let d1 = 9, d2 = 9;
      for (let j = 0; j < 3; j++) {
        let o = cxx + W * (cyy + j);
        for (let i = 0; i < 3; i++, o++) {
          const dx = fx[o] - gx, dy = fy[o] - gy, d = dx * dx + dy * dy;
          if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
        }
      }
      const e = sqrt(d2) - sqrt(d1);
      const hg = e * 2.4 > 1 ? 1 : e * 2.4, hh = 1 - (1 - hg) * (1 - hg) * (1 - hg);
      let w = 0; for (let k = 0; k < NW; k++) w += cx[k][x] * cy[k][y] - sx[k][x] * sy[k][y];
      const o = (x + y * S) * 4;
      data[o] = hh * 255 | 0;
      data[o + 1] = (0.55 + 0.45 * (1 - hh)) * 255 | 0;
      data[o + 2] = (0.5 + w / NW * 0.5) * 255 | 0;
      data[o + 3] = 255;
    }
  }
  const t = new THREE.DataTexture(data, S, S, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true; t.anisotropy = 4; t.colorSpace = THREE.NoColorSpace; t.needsUpdate = true;
  return t;
}
// grana triplanare in object space: bump con derivate schermo (niente UV necessarie)
function addGrain(mat, tex, tilesPerMeter, depth, waveDepth) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.grainMap = { value: tex };
    sh.uniforms.grainScale = { value: tilesPerMeter / 3.0 };
    sh.uniforms.grainDepth = { value: depth };
    sh.uniforms.waveDepth = { value: waveDepth };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vObjPos;\nvarying vec3 vObjNrm;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvObjPos = position;\nvObjNrm = normal;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vObjPos; varying vec3 vObjNrm;
uniform sampler2D grainMap; uniform float grainScale; uniform float grainDepth; uniform float waveDepth;
vec4 triS(vec3 p, vec3 w, float sc){
  return w.x*texture2D(grainMap, p.yz*sc) + w.y*texture2D(grainMap, p.zx*sc + 0.37) + w.z*texture2D(grainMap, p.xy*sc + 0.71);
}
float triH(vec3 p, vec3 w){
  float a = triS(p, w, grainScale).r * grainDepth;
  float b = triS(p, w, grainScale*0.055).b * waveDepth;
  return a + b;
}`)
      .replace('#include <roughnessmap_fragment>', `
vec3 gN = normalize(vObjNrm);
vec3 gW = pow(abs(gN), vec3(4.0)); gW /= (gW.x + gW.y + gW.z);
float gH0 = triH(vObjPos, gW);
float gHx = triH(vObjPos + dFdx(vObjPos), gW);
float gHy = triH(vObjPos + dFdy(vObjPos), gW);
float gR = triS(vObjPos, gW, grainScale).g;
float roughnessFactor = roughness * mix(0.78, 1.18, gR);`)
      .replace('#include <normal_fragment_maps>', `
{
  vec3 vpx = dFdx(-vViewPosition), vpy = dFdy(-vViewPosition);
  float sc = (length(vpx) + length(vpy)) / max(length(dFdx(vObjPos)) + length(dFdy(vObjPos)), 1e-12);
  vec2 dB = vec2(gHx - gH0, gHy - gH0) * sc;
  vec3 R1 = cross(vpy, normal), R2 = cross(normal, vpx);
  float det = dot(vpx, R1) * faceDirection;
  vec3 gv = sign(det) * (dB.x * R1 + dB.y * R2);
  normal = normalize(abs(det) * normal - gv);
}`);
  };
  mat.customProgramCacheKey = () => 'grain' + depth + '_' + waveDepth;
}
