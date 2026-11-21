// Coppia di anelli da ginnastica (calisthenics): betulla, fettucce nere con fibbie a camma, fino a y = 3.0 m.
// Origine sul pavimento tra i due anelli (distanza 0.5 m), centri anello a y = 1.9 m. group.userData.update(t) = dondolio minimo.
// 2 anelli x (legno + fettucce/metallo) = 4 draw call. Fettuccia e metallo condividono un solo materiale (attributi per-vertice).
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export function build(THREE, opts = {}) {
  const group = new THREE.Group();
  const YC = 1.9, YT = 3.0, SPACING = 0.5;
  const RM = 0.104, RT = 0.016;                // raggio maggiore / del tubo: diametro esterno 0.24 m, spessore 32 mm

  // ---------------- texture: venatura betulla (laminato) ----------------
  const wc = document.createElement('canvas'); wc.width = 1024; wc.height = 256;
  { const g = wc.getContext('2d'); const im = g.createImageData(1024, 256);
    let s = 4242; const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
    const ph = Array.from({ length: 12 }, () => rnd() * 6.283);
    for (let y = 0; y < 256; y++) for (let x = 0; x < 1024; x++) {
      const u = x / 1024, v = y / 256;
      // fibre lungo u (che e' la circonferenza dell'anello): strisce sottili, deriva lenta in u (periodica)
      const w = Math.sin(u * 6.283 * 2 + ph[0] + v * 3) * 0.012 + Math.sin(u * 6.283 * 5 + ph[1] + v * 7) * 0.004;
      const f1 = Math.sin((v + w) * 6.283 * 38 + ph[2]) * 0.5 + 0.5;
      const f2 = Math.sin((v + w * 1.7) * 6.283 * 97 + ph[3] + Math.sin(u * 6.283 * 3) * 2) * 0.5 + 0.5;
      const fine = (rnd() - 0.5) * 0.07;
      // laminati: 5 strati con linea di colla piu' scura e variazione di tono tra strato e strato
      const layer = Math.floor(v * 5), lv = (v * 5) % 1;
      const glue = Math.exp(-Math.pow((lv - 0.0) * 5 * 9, 2)) * 0.35 + Math.exp(-Math.pow((1 - lv) * 5 * 9, 2)) * 0.35;
      const tone = (Math.sin(layer * 12.9898) * 0.5 + 0.5) * 0.08;
      let k = 0.80 - f1 * 0.30 - f2 * 0.14 * f1 + fine * 1.4 + tone - glue * 0.65;
      const i = (y * 1024 + x) * 4;
      im.data[i] = Math.min(255, 232 * k + 6); im.data[i + 1] = Math.min(255, 168 * k + 4); im.data[i + 2] = Math.min(255, 104 * k + 2); im.data[i + 3] = 255;
    }
    g.putImageData(im, 0, 0); }
  const wood = new THREE.CanvasTexture(wc); wood.colorSpace = THREE.SRGBColorSpace; wood.wrapS = wood.wrapT = THREE.RepeatWrapping; wood.anisotropy = 8;
  // rugosita': usa la stessa mappa (venature piu' porose = piu' opache)
  const woodR = new THREE.CanvasTexture(wc); woodR.wrapS = woodR.wrapT = THREE.RepeatWrapping; woodR.anisotropy = 4;

  // ---------------- texture: tessuto fettuccia (grigio chiaro, nervature lungo la lunghezza) ----------------
  const nc = document.createElement('canvas'); nc.width = nc.height = 128;
  { const g = nc.getContext('2d'); const im = g.createImageData(128, 128);
    for (let y = 0; y < 128; y++) for (let x = 0; x < 128; x++) {
      const u = x / 128, v = y / 128;
      const rib = Math.abs(Math.sin(u * 6.283 * 8)); const herr = Math.sin((v * 16 + (Math.floor(u * 8) % 2) * 0.5) * 6.283) * 0.5 + 0.5;
      const k = 0.55 + rib * 0.3 + herr * 0.15; const c = Math.min(255, k * 255);
      const i = (y * 128 + x) * 4; im.data[i] = im.data[i + 1] = im.data[i + 2] = c; im.data[i + 3] = 255;
    }
    g.putImageData(im, 0, 0); }
  const weave = new THREE.CanvasTexture(nc); weave.colorSpace = THREE.SRGBColorSpace; weave.wrapS = weave.wrapT = THREE.RepeatWrapping; weave.anisotropy = 8;
  weave.offset.set(0, 0);

  // ---------------- helper geometrie ----------------
  const attrTag = (g, col, metal, rough, uvMode) => {
    const n = g.index ? g.toNonIndexed() : g; const c = n.attributes.position.count;
    const cols = new Float32Array(c * 3), mr = new Float32Array(c * 2);
    for (let i = 0; i < c; i++) { cols[i * 3] = col[0]; cols[i * 3 + 1] = col[1]; cols[i * 3 + 2] = col[2]; mr[i * 2] = metal; mr[i * 2 + 1] = rough; }
    n.setAttribute('color', new THREE.BufferAttribute(cols, 3)); n.setAttribute('aMR', new THREE.BufferAttribute(mr, 2));
    if (uvMode === 'flat' || !n.attributes.uv) n.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(c * 2), 2));
    return n;
  };
  // nastro piatto lungo una polilinea (larghezza lungo X, spessore sul resto), normali morbide, UV tessuto
  function ribbon(pts, width, th) {
    const pos = [], nor = [], uv = [], idx = [];
    const W = new THREE.Vector3(1, 0, 0); let len = 0;
    for (let i = 0; i < pts.length; i++) {
      if (i) len += pts[i].distanceTo(pts[i - 1]);
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
      const T = new THREE.Vector3().subVectors(b, a).normalize();
      const n = new THREE.Vector3().crossVectors(W, T).normalize();
      const p = pts[i], hw = width / 2, ht = th / 2, vv = len / 0.004;
      const push = (ox, on, nx, uu) => { const q = p.clone().addScaledVector(W, ox).addScaledVector(n, on); pos.push(q.x, q.y, q.z); nor.push(nx.x, nx.y, nx.z); uv.push(uu, vv); };
      const nn = n.clone().negate(), nW = W.clone(), nWn = W.clone().negate();
      push(-hw, ht, n, 0); push(hw, ht, n, width / 0.004);         // fronte
      push(-hw, -ht, nn, 0); push(hw, -ht, nn, width / 0.004);     // retro
      push(-hw, ht, nWn, 0); push(-hw, -ht, nWn, 0);               // bordo sx
      push(hw, ht, nW, 0); push(hw, -ht, nW, 0);                   // bordo dx
    }
    const faces = [[0, 1], [3, 2], [4, 5], [7, 6]]; // coppie di vertici di ogni faccia (con orientamento)
    for (let i = 0; i < pts.length - 1; i++) {
      const a = i * 8, b = (i + 1) * 8;
      for (const [p, q] of faces) idx.push(a + p, a + q, b + p, a + q, b + q, b + p);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    // orientamento facce: se invertite lo correggo controllando la prima normale geometrica
    g.computeBoundingBox(); return fixWinding(g);
  }
  function fixWinding(g) { // allinea il winding alle normali dichiarate
    const P = g.attributes.position, N = g.attributes.normal, I = g.index.array;
    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), n = new THREE.Vector3();
    for (let t = 0; t < I.length; t += 3) {
      a.fromBufferAttribute(P, I[t]); b.fromBufferAttribute(P, I[t + 1]); c.fromBufferAttribute(P, I[t + 2]);
      n.crossVectors(b.sub(a), c.sub(a));
      const dn = new THREE.Vector3().fromBufferAttribute(N, I[t]);
      if (n.dot(dn) < 0) { const tmp = I[t + 1]; I[t + 1] = I[t + 2]; I[t + 2] = tmp; }
    }
    return g;
  }

  // ---------------- materiali ----------------
  const woodMat = new THREE.MeshStandardMaterial({ map: wood, roughness: 0.58, roughnessMap: woodR, bumpMap: woodR, bumpScale: 0.35, metalness: 0.0, envMapIntensity: 0.8 });
  const hwMat = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, map: weave, bumpMap: weave, bumpScale: 0.8, roughness: 0.8, metalness: 0.0, envMapIntensity: 1.2 });
  hwMat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec2 aMR; varying vec2 vMR;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvMR = aMR;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec2 vMR;')
      .replace('#include <roughnessmap_fragment>', 'float roughnessFactor = vMR.y;')
      .replace('#include <metalnessmap_fragment>', 'float metalnessFactor = vMR.x;');
  };
  hwMat.customProgramCacheKey = () => 'anelli_hw_v1';

  const BLACK = [0.045, 0.045, 0.05], STEEL = [0.86, 0.87, 0.9], DSTEEL = [0.55, 0.56, 0.6];

  // ---------------- un anello completo, coordinate locali rispetto al punto di aggancio (0, YT, 0) ----------------
  function makeRing(px, seed) {
    const g = new THREE.Group(); g.position.set(px, YT, 0);
    const yc = YC - YT;                                  // centro anello (locale)
    // anello in legno
    const torus = new THREE.TorusGeometry(RM, RT, 12, 48);
    // uv: u lungo la circonferenza, v attorno alla sezione; ripeto la venatura (1 giro = 1 tile)
    torus.translate(0, yc, 0);
    const wm = new THREE.Mesh(torus, woodMat); wm.castShadow = wm.receiveShadow = true; g.add(wm);

    const parts = [];
    const yw = yc + RM;                                  // centro del tubo alla sommita'
    // avvolgimento della fettuccia attorno al tubo (arco corto di toro, lievemente piu' grosso)
    const arc = 0.04 / RM;
    const band = new THREE.TorusGeometry(RM, RT + 0.0028, 10, 4, arc);
    band.rotateZ(Math.PI / 2 - arc / 2); band.translate(0, yc, 0);
    { const u = band.attributes.uv; for (let i = 0; i < u.count; i++) u.setXY(i, u.getX(i) * 10, u.getY(i) * 6); }
    parts.push(attrTag(band, BLACK, 0.0, 0.85, 'uv'));
    // due capi di fettuccia che salgono convergendo verso la fibbia, poi dritti fino al soffitto
    const yb = yc + 0.46;                                // quota della fibbia
    const zs = [0.0172, 0.0168, 0.0148, 0.0098, 0.0056, 0.0038, 0.0034];
    const dy = [0, 0.035, 0.085, 0.15, 0.25, 0.36, yb - yw];
    for (const sgn of [1, -1]) {
      const pts = []; for (let i = 0; i < zs.length; i++) pts.push(new THREE.Vector3(0, yw + dy[i], sgn * zs[i] * (i === 0 ? 1 : 1)));
      // sopra la fibbia: dritto, due tratti
      pts.push(new THREE.Vector3(0, yb + 0.25, sgn * 0.0034)); pts.push(new THREE.Vector3(0, -0.02, sgn * 0.0034));
      parts.push(attrTag(ribbon(pts, 0.038, 0.0032), BLACK, 0.0, 0.85, 'uv'));
    }
    // sovrapposizione cucita in cima + barra d'acciaio (aggancio)
    const seam = new THREE.BoxGeometry(0.040, 0.05, 0.011); seam.translate(0, -0.03, 0); parts.push(attrTag(seam, BLACK, 0, 0.9, 'flat'));
    const bar = new THREE.CylinderGeometry(0.0055, 0.0055, 0.056, 14); bar.rotateZ(Math.PI / 2); bar.translate(0, -0.004, 0); parts.push(attrTag(bar, STEEL, 1, 0.25, 'flat'));
    const eye = new THREE.TorusGeometry(0.02, 0.0036, 8, 24); eye.rotateY(Math.PI / 2); eye.translate(0, 0.016, 0); parts.push(attrTag(eye, STEEL, 1, 0.25, 'flat'));
    // coda libera della fettuccia sotto la fibbia
    { const tail = ribbon([new THREE.Vector3(0, yb + 0.02, -0.0105), new THREE.Vector3(0, yb - 0.08, -0.0105), new THREE.Vector3(0, yb - 0.17, -0.0098)], 0.036, 0.0028); parts.push(attrTag(tail, BLACK, 0, 0.85, 'uv')); }
    // fibbia a camma: piastra con asole + leva eccentrica con zigrinatura
    const plate = new THREE.Shape(); const pw = 0.025, ph = 0.04;
    plate.moveTo(-pw + 0.006, -ph); plate.lineTo(pw - 0.006, -ph); plate.quadraticCurveTo(pw, -ph, pw, -ph + 0.006); plate.lineTo(pw, ph - 0.006);
    plate.quadraticCurveTo(pw, ph, pw - 0.006, ph); plate.lineTo(-pw + 0.006, ph); plate.quadraticCurveTo(-pw, ph, -pw, ph - 0.006); plate.lineTo(-pw, -ph + 0.006); plate.quadraticCurveTo(-pw, -ph, -pw + 0.006, -ph);
    for (const hy of [-0.022, 0.012]) { const h = new THREE.Path(); h.moveTo(-0.0185, hy - 0.0045); h.lineTo(0.0185, hy - 0.0045); h.lineTo(0.0185, hy + 0.0045); h.lineTo(-0.0185, hy + 0.0045); h.closePath(); plate.holes.push(h); }
    const pg = new THREE.ExtrudeGeometry(plate, { depth: 0.0022, bevelEnabled: true, bevelThickness: 0.0008, bevelSize: 0.0008, bevelSegments: 1 });
    pg.translate(0, yb, 0.0062); parts.push(attrTag(pg, STEEL, 1, 0.3, 'flat'));
    const pivot = new THREE.CylinderGeometry(0.0042, 0.0042, 0.05, 12); pivot.rotateZ(Math.PI / 2); pivot.translate(0, yb + 0.0375, 0.0105); parts.push(attrTag(pivot, DSTEEL, 1, 0.35, 'flat'));
    const cam = new THREE.CylinderGeometry(0.0075, 0.0075, 0.04, 16); cam.rotateZ(Math.PI / 2); cam.translate(0, yb - 0.004, 0.011); parts.push(attrTag(cam, DSTEEL, 1, 0.4, 'flat'));
    // leva
    const lv = new THREE.Shape(); lv.moveTo(-0.017, 0); lv.lineTo(0.017, 0); lv.lineTo(0.0145, 0.052); lv.quadraticCurveTo(0, 0.058, -0.0145, 0.052); lv.closePath();
    const lg = new THREE.ExtrudeGeometry(lv, { depth: 0.0022, bevelEnabled: true, bevelThickness: 0.0007, bevelSize: 0.0007, bevelSegments: 1 });
    lg.rotateX(-0.28); lg.translate(0, yb + 0.034, 0.0118); parts.push(attrTag(lg, STEEL, 1, 0.3, 'flat'));
    const hw = new THREE.Mesh(mergeGeometries(parts, false), hwMat); hw.castShadow = true; hw.receiveShadow = true; g.add(hw);
    g.userData.seed = seed; return g;
  }
  const r1 = makeRing(-SPACING / 2, 0.0), r2 = makeRing(SPACING / 2, 2.3);
  group.add(r1, r2);

  const sway = (t) => {
    for (const r of [r1, r2]) { const s = r.userData.seed;
      r.rotation.x = 0.0100 * Math.sin(t * 0.71 + s) + 0.0035 * Math.sin(t * 1.63 + s * 2.1);
      r.rotation.z = 0.0120 * Math.sin(t * 0.53 + s * 1.7) + 0.0030 * Math.sin(t * 1.21 + s);
      r.rotation.y = 0.060 * Math.sin(t * 0.37 + s * 0.6); }
  };
  group.userData.update = sway; sway(0);
  return group;
}
