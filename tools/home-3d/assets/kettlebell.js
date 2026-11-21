// Kettlebell da competizione / ghisa. Origine: pavimento sotto la campana. Altezza ~0.28 m.
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

function noiseTexture(THREE, size = 512, seed = 7, blotch = true) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d'); const img = g.createImageData(size, size);
  let s = seed; const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let i = 0; i < size * size; i++) {
    // sabbia di fusione: rumore fine + qualche granello piu' marcato
    let v = 128 + (rnd() - 0.5) * 70;
    if (rnd() > 0.985) v += (rnd() - 0.5) * 120;
    v = Math.max(0, Math.min(255, v));
    img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  // blotch a bassa frequenza (variazioni di opacita' della vernice)
  g.globalAlpha = 0.18;
  for (let i = 0; blotch && i < 60; i++) {
    const x = rnd() * size, y = rnd() * size, r = 20 + rnd() * 70;
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    const l = rnd() > 0.5 ? 255 : 0; gr.addColorStop(0, `rgb(${l},${l},${l})`); gr.addColorStop(1, 'rgba(128,128,128,0)');
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
  return t;
}

// tubo a sezione variabile lungo una curva planare (piano XY), cosi' le corna si raccordano al corpo senza cilindri incrociati
function sweepTube(THREE, curve, radiusAt, segs, radial) {
  const pos = [], nor = [], uv = [], idx = [];
  const Z = new THREE.Vector3(0, 0, 1);
  for (let i = 0; i <= segs; i++) {
    const u = i / segs; const p = curve.getPointAt(u); const T = curve.getTangentAt(u).normalize();
    const N = new THREE.Vector3().crossVectors(Z, T).normalize(); // nel piano XY
    const r = radiusAt(u);
    for (let j = 0; j <= radial; j++) {
      const a = j / radial * Math.PI * 2; const cx = Math.cos(a), sx = Math.sin(a);
      const n = new THREE.Vector3().addScaledVector(N, cx).addScaledVector(Z, sx);
      pos.push(p.x + n.x * r, p.y + n.y * r, p.z + n.z * r); nor.push(n.x, n.y, n.z);
      uv.push(j / radial * 2, u * 4);
    }
  }
  for (let i = 0; i < segs; i++) for (let j = 0; j < radial; j++) {
    const a = i * (radial + 1) + j, b = a + radial + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); return g;
}

export function build(THREE, opts = {}) {
  const accent = opts.color ?? 0x39ff14;
  const group = new THREE.Group();

  // profilo del corpo (r, y): base piatta, ventre pieno, spalla che sale verso le corna
  const prof = new THREE.SplineCurve([
    new THREE.Vector2(0.0, 0.0), new THREE.Vector2(0.066, 0.0), new THREE.Vector2(0.0775, 0.0026),
    new THREE.Vector2(0.0895, 0.015), new THREE.Vector2(0.0985, 0.04), new THREE.Vector2(0.1035, 0.072),
    new THREE.Vector2(0.1035, 0.1), new THREE.Vector2(0.0955, 0.13), new THREE.Vector2(0.0785, 0.153),
    new THREE.Vector2(0.056, 0.165), new THREE.Vector2(0.03, 0.169), new THREE.Vector2(0.0, 0.17),
  ]);
  // la spline passa per il bordo del piano base: campiono con piu' punti nei tratti curvi
  const pts = prof.getSpacedPoints(30);
  pts[0].set(0, 0);
  const SEG = 56;
  const body = new THREE.LatheGeometry(pts, SEG);
  // UV a scala: ripetizione sabbia
  { const uv = body.attributes.uv, P = body.attributes.position;
    for (let i = 0; i < uv.count; i++) {
      // calotta superiore: proiezione planare (evita la stella di pizzicamento al polo del lathe)
      if (P.getY(i) > 0.125) uv.setXY(i, P.getX(i) * 9, P.getZ(i) * 9);
      else uv.setXY(i, uv.getX(i) * 6, uv.getY(i) * 2);
    } }

  // corna + arco maniglia, tubo continuo con raggio variabile (svasatura alle estremita' dentro il corpo)
  const hw = 0.0575, top = 0.2625;
  const hp = [
    [-0.052, 0.135], [-0.0555, 0.17], [-0.0585, 0.21], [-0.0555, 0.2405], [-0.04, 0.2575], [-0.02, 0.2615], [0, 0.2625],
  ].map(([x, y]) => new THREE.Vector3(x, y, 0));
  const half = hp.slice(0, 6).concat([new THREE.Vector3(0, top, 0)]);
  const mirror = half.slice(0, 6).reverse().map(v => new THREE.Vector3(-v.x, v.y, 0));
  const curve = new THREE.CatmullRomCurve3([...half, ...mirror], false, 'centripetal');
  const rH = 0.0172;
  const sm = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const radiusAt = u => { const e = Math.min(u, 1 - u); return rH + 0.0105 * (1 - sm(0.0, 0.2, e)); };
  const handle = sweepTube(THREE, curve, radiusAt, 44, 14);
  const iron = mergeGeometries([body, handle], false);

  const tex = noiseTexture(THREE), bumpTex = noiseTexture(THREE, 512, 11, false); bumpTex.repeat.set(3, 3);
  const ironMat = new THREE.MeshStandardMaterial({
    color: 0x1d1e20, metalness: 0.4, roughness: 0.85, roughnessMap: tex, bumpMap: bumpTex, bumpScale: 0.12, envMapIntensity: 0.85,
  });
  const ironMesh = new THREE.Mesh(iron, ironMat); ironMesh.castShadow = ironMesh.receiveShadow = true;
  group.add(ironMesh);

  // fascia colore sul ventre (leggermente in rilievo, segue il profilo)
  const band = pts.filter(p => p.y > 0.04 && p.y < 0.088).map(p => new THREE.Vector2(p.x + 0.0007, p.y));
  const lc = document.createElement('canvas'); lc.width = 1024; lc.height = 96;
  { const g = lc.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, 1024, 96);
    g.fillStyle = '#0a0a0a'; g.font = '800 70px Impact, "Arial Black", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('24 KG', 512, 52); }
  const lab = new THREE.CanvasTexture(lc); lab.colorSpace = THREE.SRGBColorSpace; lab.anisotropy = 4;
  const bandMat = new THREE.MeshStandardMaterial({
    color: accent, map: lab, roughness: 0.55, metalness: 0.05, emissive: accent, emissiveMap: lab, emissiveIntensity: 0.12,
  });
  const bandGeo = new THREE.LatheGeometry(band, SEG);
  const bandMesh = new THREE.Mesh(bandGeo, bandMat); bandMesh.rotation.y = Math.PI; bandMesh.castShadow = false; bandMesh.receiveShadow = true;
  group.add(bandMesh);

  return group;
}
