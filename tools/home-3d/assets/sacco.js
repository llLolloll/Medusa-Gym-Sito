// Sacco pesante appeso, procedurale. Origine = punto a terra sotto il sacco. Unita = metri, Y su.
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const TEX = {};   // texture gia' disegnate: il sacco dell'hero e quelli di sfondo le condividono (si disegnano una volta sola)
export function build(THREE, opts = {}) {
  const hi = (opts.lod || 'high') !== 'low';
  const GREEN = 0x39ff14;
  const MODEL = opts.model || null;                    // corpo, cinghie e catene presi dal modello scaricato (CAL21, CC BY)
  const BAG_L = 1.206, BAG_R = 0.182, Y0 = MODEL ? 0.83 : 0.75;     // lunghezza, raggio, quota del fondo
  const CEIL = 2.9;                                    // soffitto (attacco)
  const group = new THREE.Group(); group.name = 'sacco';
  const pivot = new THREE.Group(); pivot.position.set(0, CEIL, 0); group.add(pivot);
  const hang = new THREE.Group(); hang.position.set(0, -CEIL, 0); pivot.add(hang);   // coordinate "mondo" locali al gruppo

  let seed = 91; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const mkCanvas = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
  const tex = (c, srgb) => { const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.wrapS = THREE.RepeatWrapping; return t; };
  const noise = (ctx, w, h, amp) => {
    const t = mkCanvas(256, 256), tx = t.getContext('2d'), id = tx.createImageData(256, 256), d = id.data;
    for (let i = 0; i < d.length; i += 4) { const v = rnd() < 0.5 ? 0 : 255; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = Math.floor(rnd() * amp * 2.2); }
    tx.putImageData(id, 0, 0); ctx.fillStyle = ctx.createPattern(t, 'repeat'); ctx.fillRect(0, 0, w, h);
  };
  const PY = m => (1 - m / BAG_L) * 1024;             // metri lungo il sacco -> pixel y
  const FONT = '900 100px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif';

  // ---------- texture corpo: colore, bump, rugosita ----------
  function bodyTextures() {
    const W = 1024, H = 1024;
    const c = mkCanvas(W, H), x = c.getContext('2d');
    x.fillStyle = '#0d0d0e'; x.fillRect(0, 0, W, H);
    // schiaritura della zona di impatto (usura): fascia ellittica sul fianco
    for (let k = 0; k < 2; k++) {
      const g = x.createRadialGradient(W * (0.25 + 0.5 * k), PY(0.82), 10, W * (0.25 + 0.5 * k), PY(0.82), 240);
      g.addColorStop(0, 'rgba(120,120,125,0.10)'); g.addColorStop(1, 'rgba(120,120,125,0)');
      x.fillStyle = g; x.fillRect(0, 0, W, H);
    }
    // fascia verde centrale
    const b0 = PY(0.78), b1 = PY(0.55);
    const bg = x.createLinearGradient(0, b0, 0, b1);
    bg.addColorStop(0, '#2c7c1b'); bg.addColorStop(0.5, '#34901f'); bg.addColorStop(1, '#27701a');
    x.fillStyle = bg; x.fillRect(0, b0, W, b1 - b0);
    // testo sulla fascia (due volte, sui fianchi opposti)
    for (const cx of [W * 0.25, W * 0.75]) {
      x.save(); x.translate(cx, (b0 + b1) / 2 + 4); x.scale(MODEL ? 0.4 : 0.46, 1);
      x.font = '900 ' + (MODEL ? 118 : 82) + 'px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = 'rgba(8,10,8,0.92)'; x.letterSpacing = '4px';
      x.fillText('MEDUSA GYM', 0, 0); x.restore();
    }
    // righe sottili verdi in alto e in basso
    x.fillStyle = '#2f8a1d';
    x.fillRect(0, PY(0.115), W, 14); x.fillRect(0, PY(1.03), W, 14);
    // cuciture: filo (tratteggio) sui bordi fascia e righe
    const stitch = (yy, col, dash) => { x.strokeStyle = col; x.lineWidth = 3; x.setLineDash(dash); x.beginPath(); x.moveTo(0, yy); x.lineTo(W, yy); x.stroke(); x.setLineDash([]); };
    stitch(b0 - 8, 'rgba(10,10,10,0.9)', [9, 7]); stitch(b1 + 8, 'rgba(10,10,10,0.9)', [9, 7]);
    for (const m of [0.135, 0.095, 1.05, 1.01]) stitch(PY(m), 'rgba(150,160,150,0.55)', [8, 6]);
    stitch(PY(0.5), 'rgba(110,115,110,0.5)', [8, 6]); stitch(PY(0.83), 'rgba(110,115,110,0.5)', [8, 6]);
    // cuciture verticali (2 giunte, a u=0 e u=0.5), doppio filo
    for (const ux of [0, W * 0.5, W]) {
      x.fillStyle = '#050505'; x.fillRect(ux - 3, 0, 6, H);
      x.strokeStyle = 'rgba(150,160,150,0.6)'; x.lineWidth = 3; x.setLineDash([9, 7]);
      for (const dx of [-14, 14]) { x.beginPath(); x.moveTo(ux + dx, 0); x.lineTo(ux + dx, H); x.stroke(); }
      x.setLineDash([]);
    }
    // pieghe/crepe orizzontali in alto e al fondo
    x.lineCap = 'round';
    for (let i = 0; i < 70; i++) {
      const yy = (rnd() < 0.7 ? PY(0.95 + rnd() * 0.22) : PY(0.0 + rnd() * 0.3)), xx = rnd() * W, L = 40 + rnd() * 220;
      x.strokeStyle = `rgba(0,0,0,${0.35 + rnd() * 0.3})`; x.lineWidth = 1 + rnd() * 2;
      x.beginPath(); x.moveTo(xx, yy); x.quadraticCurveTo(xx + L / 2, yy + (rnd() - 0.5) * 12, xx + L, yy + (rnd() - 0.5) * 6); x.stroke();
      x.strokeStyle = `rgba(200,205,205,${0.04 + rnd() * 0.05})`; x.beginPath(); x.moveTo(xx, yy + 2); x.lineTo(xx + L, yy + 2); x.stroke();
    }
    // graffi chiari + segni di guanti (verticale)
    for (let i = 0; i < 90; i++) {
      const xx = rnd() * W, yy = PY(0.35 + rnd() * 0.65), L = 8 + rnd() * 50, th = (rnd() - 0.5) * 1.2 + Math.PI / 2;
      x.strokeStyle = `rgba(210,215,215,${0.03 + rnd() * 0.06})`; x.lineWidth = 1 + rnd() * 1.5;
      x.beginPath(); x.moveTo(xx, yy); x.lineTo(xx + Math.cos(th) * L, yy + Math.sin(th) * L); x.stroke();
    }
    for (let i = 0; i < 220; i++) { x.fillStyle = `rgba(10,14,10,${0.25 + rnd() * 0.5})`; x.fillRect(rnd() * W, b0 + rnd() * (b1 - b0), 1 + rnd() * 7, 1 + rnd() * 3); }
    for (let i = 0; i < 160; i++) { x.fillStyle = `rgba(150,190,140,${0.05 + rnd() * 0.1})`; x.fillRect(rnd() * W, b0 + rnd() * (b1 - b0), 3 + rnd() * 25, 1 + rnd() * 2); }
    for (let i = 0; i < 900; i++) { x.fillStyle = `rgba(0,30,0,${0.05 + rnd() * 0.14})`; const rr = 0.6 + rnd() * 1.8; x.beginPath(); x.arc(rnd() * W, b0 + rnd() * (b1 - b0), rr, 0, 6.28); x.fill(); }
    for (let i = 0; i < 40; i++) { const xx = rnd() * W, yy = b0 + rnd() * (b1 - b0), L = 10 + rnd() * 50; x.strokeStyle = `rgba(0,40,0,${0.08 + rnd() * 0.15})`; x.lineWidth = 1 + rnd() * 2; x.beginPath(); x.moveTo(xx, yy); x.lineTo(xx + (rnd() - 0.5) * L, yy + (rnd() - 0.5) * L); x.stroke(); }
    noise(x, W, H, 7);
    const map = tex(c, true);

    // bump: grana pebble + incavi cucitura
    const b = mkCanvas(W, H), bx = b.getContext('2d');
    bx.fillStyle = '#808080'; bx.fillRect(0, 0, W, H);
    const n1 = mkCanvas(256, 256), n1x = n1.getContext('2d'); const id = n1x.createImageData(256, 256);
    for (let i = 0; i < id.data.length; i += 4) { const v = 90 + rnd() * 90; id.data[i] = id.data[i + 1] = id.data[i + 2] = v; id.data[i + 3] = 255; }
    n1x.putImageData(id, 0, 0);
    bx.globalAlpha = 0.85; bx.imageSmoothingEnabled = true; bx.drawImage(n1, 0, 0, W, H); bx.globalAlpha = 1;
    noise(bx, W, H, 40);
    // fascia leggermente in rilievo
    bx.fillStyle = 'rgba(200,200,200,0.35)'; bx.fillRect(0, b0, W, b1 - b0);
    bx.fillStyle = '#404040'; bx.fillRect(0, b0 - 3, W, 5); bx.fillRect(0, b1 - 2, W, 5);
    for (const ux of [0, W * 0.5, W]) { bx.fillStyle = '#1c1c1c'; bx.fillRect(ux - 5, 0, 10, H); }
    bx.strokeStyle = '#303030'; bx.lineWidth = 3; bx.setLineDash([9, 7]);
    for (const ux of [0, W * 0.5, W]) for (const dx of [-14, 14]) { bx.beginPath(); bx.moveTo(ux + dx, 0); bx.lineTo(ux + dx, H); bx.stroke(); }
    for (const m of [0.135, 0.095, 1.05, 1.01]) { bx.beginPath(); bx.moveTo(0, PY(m)); bx.lineTo(W, PY(m)); bx.stroke(); }
    bx.setLineDash([]);
    bx.lineCap = 'round';
    for (let i = 0; i < 80; i++) {
      const yy = (rnd() < 0.7 ? PY(0.95 + rnd() * 0.22) : PY(rnd() * 0.3)), xx = rnd() * W, L = 40 + rnd() * 220;
      bx.strokeStyle = `rgba(20,20,20,${0.5 + rnd() * 0.4})`; bx.lineWidth = 2 + rnd() * 3;
      bx.beginPath(); bx.moveTo(xx, yy); bx.quadraticCurveTo(xx + L / 2, yy + (rnd() - 0.5) * 12, xx + L, yy + (rnd() - 0.5) * 6); bx.stroke();
    }
    const bump = tex(b, false);

    // rugosita: base satinata, zona colpita piu lucida, bordi piu opachi
    const r = mkCanvas(512, 512), rx = r.getContext('2d');
    rx.fillStyle = '#9a9a9a'; rx.fillRect(0, 0, 512, 512);
    for (let k = 0; k < 2; k++) {
      const g = rx.createRadialGradient(512 * (0.25 + 0.5 * k), 512 * (1 - 0.82 / BAG_L), 5, 512 * (0.25 + 0.5 * k), 512 * (1 - 0.82 / BAG_L), 150);
      g.addColorStop(0, '#585858'); g.addColorStop(1, 'rgba(154,154,154,0)'); rx.fillStyle = g; rx.fillRect(0, 0, 512, 512);
    }
    rx.fillStyle = 'rgba(205,205,205,0.9)'; rx.fillRect(0, 512 * (1 - 0.78 / BAG_L), 512, 512 * 0.23 / BAG_L); rx.fillRect(0, 512 * (1 - 0.1155 / BAG_L) - 3, 512, 5); rx.fillRect(0, 512 * (1 - 1.03 / BAG_L) - 3, 512, 5);
    noise(rx, 512, 512, 36);
    const rough = tex(r, false);
    return { map, bump, rough };
  }

  // ---------- texture calotta (UV planari) ----------
  function capTexture() {
    const S = 512, c = mkCanvas(S, S), x = c.getContext('2d');
    x.fillStyle = '#0c0c0d'; x.fillRect(0, 0, S, S);
    x.strokeStyle = 'rgba(160,170,160,0.65)'; x.lineWidth = 3; x.setLineDash([9, 7]);
    for (const r of [0.86, 0.74]) { x.beginPath(); x.arc(S / 2, S / 2, S / 2 * r, 0, 6.2832); x.stroke(); }
    x.setLineDash([]);
    x.strokeStyle = 'rgba(0,0,0,0.9)'; x.lineWidth = 6; x.beginPath(); x.arc(S / 2, S / 2, S / 2 * 0.8, 0, 6.2832); x.stroke();
    x.strokeStyle = '#39ff14'; x.lineWidth = 6; x.beginPath(); x.arc(S / 2, S / 2, S / 2 * 0.64, 0, 6.2832); x.stroke();
    noise(x, S, S, 7);
    return tex(c, true);
  }

  const tk = opts.model ? 'modello' : 'codice';
  const T = TEX[tk] || (TEX[tk] = { ...bodyTextures(), cap: capTexture() });
  const bodyMat = new THREE.MeshPhysicalMaterial({
    map: T.map, bumpMap: T.bump, bumpScale: 2.0, roughnessMap: T.rough, roughness: 0.72, metalness: 0,
    clearcoat: 0.28, clearcoatRoughness: 0.5, sheen: 0.4, sheenRoughness: 0.5, sheenColor: new THREE.Color(0x30363a),
  });
  const capMat = new THREE.MeshPhysicalMaterial({
    map: T.cap, bumpMap: T.bump, bumpScale: 1.5, roughness: 0.6, metalness: 0, clearcoat: 0.25, clearcoatRoughness: 0.5,
  });
  capMat.bumpMap.repeat.set(0.5, 0.5);
  const steelMat = new THREE.MeshStandardMaterial({ color: 0xb9bdc1, metalness: 1, roughness: 0.32 });
  let SWY = 2.5;                                     // quota anello di convergenza delle catene
  if (MODEL) {
    // la scritta sulla fascia guarda verso la camera dell'hero
    for (const t of [T.map, T.bump, T.rough]) t.offset.x = -0.25;   // scritta della fascia al centro tra le inquadrature del pugno (computer e telefono)
    const strapMat = new THREE.MeshPhysicalMaterial({ color: 0x101011, roughness: 0.62, metalness: 0, clearcoat: 0.2, clearcoatRoughness: 0.5 });
    const chainMat = steelMat.clone(); chainMat.side = THREE.DoubleSide;
    const mats = { corpo: bodyMat, cinghie: strapMat, catene: chainMat };
    let top = 0;
    MODEL.updateMatrixWorld(true);
    MODEL.traverse((o) => {
      if (!o.isMesh) return;
      const m = new THREE.Mesh(o.geometry, mats[o.material.name] || strapMat);
      m.applyMatrix4(o.matrixWorld); m.position.y += Y0; m.castShadow = m.receiveShadow = true; hang.add(m);
      const bb = new THREE.Box3().setFromObject(m); top = Math.max(top, bb.max.y);
    });
    SWY = top - 0.03;                                // la girella parte dall'anello in cima alle catene del modello
  }

  // ---------- corpo (lathe) ----------
  const prof = [];
  const add = (r, y) => prof.push(new THREE.Vector2(r, y));
  add(0, 0); add(0.06, 0); add(0.12, 0);
  const rcb = 0.062;
  const AS = hi ? 6 : 3;
  for (let i = 1; i <= AS; i++) { const t = (i / AS) * Math.PI / 2; add(0.12 + rcb * Math.sin(t), rcb - rcb * Math.cos(t)); }
  add(0.1815, 0.3); add(0.1822, 0.6); add(0.1815, 0.9);
  const rct = 0.05, cy = 1.155;
  for (let i = 0; i <= AS; i++) { const t = (i / AS) * Math.PI / 2; add(0.132 + rct * Math.cos(t), cy + rct * Math.sin(t)); }
  add(0.066, 1.205); add(0, 1.205);
  const SEG = MODEL ? 3 : hi ? 40 : 18;             // con il modello questo corpo a tornio non si usa: resta minimo
  const bodyGeo = new THREE.LatheGeometry(prof, SEG);
  {
    const pos = bodyGeo.attributes.position, uv = bodyGeo.attributes.uv;
    for (let i = 0; i < pos.count; i++) uv.setY(i, Math.min(1, Math.max(0, pos.getY(i) / BAG_L)));
    // leggera asimmetria da usura: appiattisce un poco il fondo e deforma di pochi mm
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i), x = pos.getX(i), z = pos.getZ(i), a = Math.atan2(z, x);
      const k = 1 + 0.004 * Math.sin(a * 2 + y * 5) + (y < 0.35 ? 0.006 * Math.sin(y * 9) : 0);
      pos.setX(i, x * k); pos.setZ(i, z * k);
    }
    bodyGeo.computeVertexNormals();
  }
  const body = new THREE.Mesh(bodyGeo, bodyMat); body.position.y = Y0; body.castShadow = body.receiveShadow = true;
  if (!MODEL) hang.add(body);

  // ---------- calotta con cucitura + alette D-ring ----------
  const capProf = [new THREE.Vector2(0, 1.224), new THREE.Vector2(0.09, 1.224), new THREE.Vector2(0.112, 1.219), new THREE.Vector2(0.125, 1.209), new THREE.Vector2(0.128, 1.199), new THREE.Vector2(0.0, 1.199)].reverse();
  const capGeo = new THREE.LatheGeometry(capProf, hi ? 40 : 12);
  {
    const p = capGeo.attributes.position, uv = capGeo.attributes.uv;
    for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / 0.256 + 0.5, p.getZ(i) / 0.256 + 0.5);
  }
  const capParts = [capGeo];
  const tabGeos = [];
  // 4 alette in pelle (nere) con D-ring in acciaio
  const steelParts = [];
  const place = (geo, m) => { geo.applyMatrix4(m); return geo; };
  const M = new THREE.Matrix4(), Qn = new THREE.Quaternion(), Vv = new THREE.Vector3(), Sc = new THREE.Vector3(1, 1, 1), Eu = new THREE.Euler();
  const mat = (x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) => { Eu.set(rx, ry, rz); Qn.setFromEuler(Eu); return new THREE.Matrix4().compose(Vv.set(x, y, z), Qn, Sc.set(sx, sy, sz)); };
  const TOPY = Y0 + 1.224;                           // quota calotta (mondo)
  const ang = [0.785398, 2.356194, 3.926991, 5.497787];
  const rDr = 0.108;
  for (const a of ang) {
    const sx = Math.sin(a), sz = Math.cos(a);
    // piastrina in pelle sulla calotta, orientata radialmente
    if (hi) capParts.push(place(new RoundedBoxGeometry(0.06, 0.012, 0.06, 2, 0.005), mat(sx * rDr, 1.224 + 0.006, sz * rDr, 0, a, 0)));
  }
  // ---------- catene ----------
  const linkGeoBase = new THREE.TorusGeometry(0.0155, 0.0055, hi ? 4 : 3, hi ? 6 : 5);           // anello in piano XY
  const chainPitch = hi ? 0.037 : 0.062;
  const addLink = (p, dir, alt, scaleY = 1.75) => {
    const g = linkGeoBase.clone();
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    const qa = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), alt ? Math.PI / 2 : 0);
    const m = new THREE.Matrix4().compose(p, q.multiply(qa), new THREE.Vector3(1, scaleY, 1));
    g.applyMatrix4(m); steelParts.push(g);
  };
  const chainTopLocal = new THREE.Vector3(0, SWY - 0.01, 0);
  for (const a of (MODEL ? [] : ang)) {
    const sx = Math.sin(a), sz = Math.cos(a);
    const p0 = new THREE.Vector3(sx * rDr, TOPY + 0.016, sz * rDr);         // D-ring
    const p1 = new THREE.Vector3(sx * 0.018, SWY - 0.012, sz * 0.018);
    const d = p1.clone().sub(p0), L = d.length(); d.normalize();
    const n = Math.round(L / chainPitch);
    for (let i = 0; i < n; i++) addLink(p0.clone().addScaledVector(d, (i + 0.5) * (L / n)), d, i % 2);
    // D-ring (anello piccolo) sulla piastrina
    if (hi) steelParts.push(place(new THREE.TorusGeometry(0.018, 0.0045, 5, 10), mat(sx * rDr, TOPY + 0.012, sz * rDr, 0, a + Math.PI / 2, 0)));
  }
  // anello di convergenza + girella + anello superiore
  if (!MODEL) steelParts.push(place(new THREE.TorusGeometry(0.036, 0.008, 6, 16), mat(0, SWY, 0, Math.PI / 2, 0, 0, 1, 1, 1)));
  steelParts.push(place(new THREE.CylinderGeometry(0.019, 0.019, 0.07, hi ? 12 : 6, 1), mat(0, SWY + 0.062, 0)));
  steelParts.push(place(new THREE.CylinderGeometry(0.03, 0.03, 0.012, hi ? 14 : 7, 1), mat(0, SWY + 0.045, 0)));
  steelParts.push(place(new THREE.CylinderGeometry(0.03, 0.03, 0.012, hi ? 14 : 7, 1), mat(0, SWY + 0.08, 0)));
  steelParts.push(place(new THREE.SphereGeometry(0.024, hi ? 10 : 6, hi ? 6 : 3), mat(0, SWY + 0.115, 0)));
  steelParts.push(place(new THREE.TorusGeometry(0.03, 0.008, hi ? 6 : 3, hi ? 14 : 7), mat(0, SWY + 0.158, 0, 0, 0, 0, 0.8, 1.15, 1)));
  // catena corta verso soffitto
  {
    const top = SWY + 0.19, bot = CEIL - 0.05, d = new THREE.Vector3(0, 1, 0);
    const n = Math.round((bot - top) / 0.038);
    for (let i = 0; i < n; i++) addLink(new THREE.Vector3(0, top + (i + 0.5) * ((bot - top) / n), 0), d, i % 2, 1.7);
  }
  // staffa a soffitto (statica)
  const staticSteel = [];
  staticSteel.push(place(new THREE.CylinderGeometry(0.095, 0.095, 0.02, hi ? 20 : 8, 1), mat(0, CEIL - 0.01, 0)));
  staticSteel.push(place(new THREE.TorusGeometry(0.028, 0.0075, hi ? 6 : 3, hi ? 14 : 7), mat(0, CEIL - 0.038, 0, 0, 0, 0)));
  for (let i = 0; i < (hi ? 4 : 0); i++) { const a = i * Math.PI / 2 + Math.PI / 4; staticSteel.push(place(new THREE.CylinderGeometry(0.01, 0.01, 0.012, 6, 1), mat(Math.sin(a) * 0.065, CEIL - 0.026, Math.cos(a) * 0.065))); }
  // piastra morsa piu grande (struttura)
  staticSteel.push(place(new RoundedBoxGeometry(0.22, 0.012, 0.22, 2, 0.004), mat(0, CEIL - 0.006 + 0.0, 0)));

  // ---------- merge ----------
  const nonIdx = gs => gs.map(g => { for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k); return g.index ? g.toNonIndexed() : g; });
  const capMesh = new THREE.Mesh(mergeGeometries(nonIdx(capParts), false), capMat); capMesh.position.y = Y0; capMesh.castShadow = capMesh.receiveShadow = true; if (!MODEL) hang.add(capMesh);
  const steelMesh = new THREE.Mesh(mergeGeometries(nonIdx(steelParts), false), steelMat); steelMesh.castShadow = steelMesh.receiveShadow = true; hang.add(steelMesh);
  const fixedMesh = new THREE.Mesh(mergeGeometries(nonIdx(staticSteel), false), steelMat); fixedMesh.castShadow = fixedMesh.receiveShadow = true; group.add(fixedMesh);

  // ---------- oscillazione ----------
  const A = 1.5 * Math.PI / 180, T0 = 2 * Math.PI / Math.sqrt(9.81 / 2.2);
  group.userData.update = (t) => {
    const w = 2 * Math.PI / T0;
    pivot.rotation.z = A * Math.sin(w * t);
    pivot.rotation.x = A * 0.35 * Math.sin(w * t * 1.03 + 1.2);
  };
  group.userData.update(0);
  return group;
}
