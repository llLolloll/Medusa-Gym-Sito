// Coppia di manubri esagonali in gomma sul pavimento, maniglia cromata zigrinata, testa nera con anello verde.
// Origine sul pavimento, tra i due manubri. Uno dei due e' ruotato di ~13 gradi. 3 draw call (cromo / gomma / verde).
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export function build(THREE, opts = {}) {
  const accent = opts.color ?? 0x39ff14;
  const group = new THREE.Group();

  // ---- texture: zigrinatura a diamante (bump) e granulo gomma ----
  const mk = (n, fn) => { const c = document.createElement('canvas'); c.width = c.height = n; const g = c.getContext('2d'), im = g.createImageData(n, n);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { const v = Math.max(0, Math.min(255, fn(x / n, y / n))); const i = (y * n + x) * 4; im.data[i] = im.data[i + 1] = im.data[i + 2] = v; im.data[i + 3] = 255; }
    g.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; return t; };
  const tri = x => 1 - Math.abs(2 * (x - Math.floor(x)) - 1);
  const knurl = mk(128, (u, v) => { const a = tri(u + v), b = tri(u - v); return 255 * Math.pow(Math.min(a, b) * 1.0, 0.8) * 0.9 + 12; });
  let sd = 99; const rnd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
  const grain = mk(256, () => 128 + (rnd() - 0.5) * 90 + (rnd() > 0.992 ? 60 : 0));
  grain.repeat.set(14, 14);

  const chromeG = [], rubberG = [], greenG = [];
  const prep = (g, flatUV = false) => { let n = g.index ? g.toNonIndexed() : g; if (flatUV) { const c = n.attributes.position.count; n.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(c * 2), 2)); } return n; };

  // geometrie di un manubrio, asse lungo X, origine al centro dell'asse (y=0), poi trasformate per posizione/rotazione
  const R = 0.074, HL = 0.074, IN = 0.068;        // raggio esagono, lunghezza testa, mezza maniglia
  const BV = 0.0065;
  function dumbbell(m4) {
    const add = (arr, g, flat) => { const n = prep(g, flat); n.applyMatrix4(m4); arr.push(n); };
    // testa esagonale con smussi (faccia piatta in basso: vertici a 0,60,...)
    const hex = new THREE.Shape();
    for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3; const x = R * Math.cos(a), y = R * Math.sin(a); k ? hex.lineTo(x, y) : hex.moveTo(x, y); }
    hex.closePath();
    const head = new THREE.ExtrudeGeometry(hex, { depth: HL - 2 * BV, bevelEnabled: true, bevelThickness: BV, bevelSize: BV, bevelSegments: 3, steps: 1 });
    head.translate(0, 0, BV);                       // z in [0, HL]
    head.rotateY(Math.PI / 2);                      // z -> +X
    for (const s of [-1, 1]) {
      const h = head.clone(); if (s < 0) { h.rotateY(Math.PI); h.translate(0, 0, 0); }
      h.translate(s > 0 ? IN : -IN, 0, 0); add(rubberG, h, false);
      // anello verde sulla faccia esterna + tappo cromato centrale
      const xo = s * (IN + HL);
      const ring = new THREE.TorusGeometry(0.052, 0.0024, 6, 44); ring.rotateY(Math.PI / 2); ring.translate(xo + s * 0.0004, 0, 0); add(greenG, ring, true);
      const cap = new THREE.CylinderGeometry(0.036, 0.036, 0.0048, 28); cap.rotateZ(Math.PI / 2); cap.translate(xo + s * 0.0006, 0, 0); add(chromeG, cap, true);
      // flangia cromata dove la maniglia entra nella testa
      const fl = new THREE.CylinderGeometry(0.029, 0.029, 0.007, 24); fl.rotateZ(Math.PI / 2); fl.translate(s * (IN - 0.0005), 0, 0); add(chromeG, fl, true);
      // anello di bloccaggio (collare) sulla maniglia
      const co = new THREE.CylinderGeometry(0.0215, 0.0215, 0.011, 20); co.rotateZ(Math.PI / 2); co.translate(s * (IN - 0.0125), 0, 0); add(chromeG, co, true);
    }
    // maniglia zigrinata: UV (circonferenza x lunghezza) per il bump a diamante
    const hd = new THREE.CylinderGeometry(0.0165, 0.0165, 2 * IN, 28, 1, true); hd.rotateZ(Math.PI / 2);
    { const uv = hd.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 35, uv.getY(i) * 46); }
    add(chromeG, hd, false);
    return;
  }
  // posizionamento: appoggiati su una faccia piana, y sollevato a posteriori in modo che il punto piu' basso sia a 0
  const halfFlat = R * Math.cos(Math.PI / 6) + BV * 0.87;
  const mat4 = (x, z, yaw) => new THREE.Matrix4().compose(new THREE.Vector3(x, halfFlat, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw), new THREE.Vector3(1, 1, 1));
  dumbbell(mat4(-0.02, -0.165, 0.02));
  dumbbell(mat4(0.035, 0.175, 0.24));

  const M = (arr, mat, cs = true) => { const geo = mergeGeometries(arr, false); const m = new THREE.Mesh(geo, mat); m.castShadow = cs; m.receiveShadow = true; group.add(m); return m; };
  const chrome = M(chromeG, new THREE.MeshStandardMaterial({
    color: 0xe4e6e8, metalness: 1.0, roughness: 0.2, bumpMap: knurl, bumpScale: 2.2, envMapIntensity: 1.5,
  }));
  M(rubberG, new THREE.MeshStandardMaterial({ color: 0x0d0d0e, roughness: 0.86, metalness: 0.0, bumpMap: grain, bumpScale: 0.6, roughnessMap: grain }));
  M(greenG, new THREE.MeshStandardMaterial({ color: accent, roughness: 0.45, metalness: 0.0, emissive: accent, emissiveIntensity: 0.15 }), false);

  // pavimento a y=0: controllo il punto piu' basso reale (smussi inclusi) e ricentro in altezza
  const box = new THREE.Box3().setFromObject(group); group.children.forEach(c => c.position.y -= box.min.y);
  return group;
}
