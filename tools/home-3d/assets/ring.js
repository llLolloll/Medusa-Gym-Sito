// Ring da boxe / kickboxing procedurale. Origine = centro ring a livello pavimento. Unita = metri, Y su.
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export function build(THREE, opts = {}) {
  const hi = (opts.lod || 'high') !== 'low';
  const G = new THREE.Group(); G.name = 'ring';
  const GREEN = 0x39ff14;

  // ---------- misure ----------
  const PLAT = 6.1, H = PLAT / 2;        // piattaforma
  const DECK = 0.9;                       // quota tela
  const P = 2.6;                          // centro paletti (x,z)
  const R = 2.5;                          // quadrato corde
  const ROPE_H = [0.45, 0.727, 1.0, 1.27];
  const ROPE_R = 0.03;
  const POST_R = 0.055, POST_TOP = 2.26;

  // ---------- random deterministico ----------
  let seed = 1337; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

  // ---------- helper texture ----------
  const mkCanvas = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
  const toTex = (c, srgb = true, rep) => {
    const t = new THREE.CanvasTexture(c);
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); }
    return t;
  };

  // rumore veloce: tile 256 di pixel bianchi/neri semitrasparenti ripetuto con pattern
  const grain = (x, w, h, amp) => {
    const t = mkCanvas(256, 256), tx = t.getContext('2d'), id = tx.createImageData(256, 256), d = id.data;
    for (let i = 0; i < d.length; i += 4) { const v = rnd() < 0.5 ? 0 : 255; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = Math.floor(rnd() * amp); }
    tx.putImageData(id, 0, 0); x.fillStyle = x.createPattern(t, 'repeat'); x.fillRect(0, 0, w, h);
  };
  // tela: grigio carbone, trama fine, usura al centro, scritta sbiadita
  function canvasTextures() {
    const S = 1024, c = mkCanvas(S, S), x = c.getContext('2d');
    x.fillStyle = '#17191c'; x.fillRect(0, 0, S, S);
    // zone: fascia esterna leggermente piu scura
    const g = x.createRadialGradient(S / 2, S / 2, S * 0.05, S / 2, S / 2, S * 0.75);
    g.addColorStop(0, 'rgba(255,255,255,0.04)'); g.addColorStop(0.55, 'rgba(255,255,255,0.01)'); g.addColorStop(1, 'rgba(0,0,0,0.25)');
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    // bordo del ring (area oltre le corde) piu scuro, linea sottile
    x.strokeStyle = 'rgba(0,0,0,0.35)'; x.lineWidth = 3; x.strokeRect(S * 0.095, S * 0.095, S * 0.81, S * 0.81);
    // scritta centrale sbiadita (verde spento)
    x.save(); x.translate(S / 2, S / 2); x.scale(1, 1);
    x.font = '900 190px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillStyle = 'rgba(57,255,20,0.045)'; x.fillText('MEDUSA', 0, 0);
    x.restore();
    for (let i = 0; i < 60; i++) { x.fillStyle = `rgba(23,25,28,${0.3 + rnd() * 0.5})`; const px = S * 0.2 + rnd() * S * 0.6, py = S * 0.4 + rnd() * S * 0.2; x.fillRect(px, py, 6 + rnd() * 40, 2 + rnd() * 6); }
    // trama: righe fini incrociate
    x.globalAlpha = 0.07; x.fillStyle = '#000';
    for (let i = 0; i < S; i += 2) { x.fillRect(i, 0, 1, S); x.fillRect(0, i, S, 1); }
    x.globalAlpha = 1;
    // graffi / segni d'usura (sfumati, piu densi al centro)
    for (let i = 0; i < 160; i++) {
      const a = rnd() * 6.283, d = Math.pow(rnd(), 1.6) * S * 0.38, px = S / 2 + Math.cos(a) * d, py = S / 2 + Math.sin(a) * d;
      const L = 15 + rnd() * 60, th = rnd() * 3.14;
      x.strokeStyle = `rgba(210,215,210,${0.02 + rnd() * 0.045})`; x.lineWidth = 1 + rnd() * 2.2;
      x.beginPath(); x.moveTo(px, py); x.lineTo(px + Math.cos(th) * L, py + Math.sin(th) * L); x.stroke();
    }
    // macchie scure (sudore/sporco) morbide
    for (let i = 0; i < 18; i++) {
      const px = rnd() * S, py = rnd() * S, r = 40 + rnd() * 110; const gg = x.createRadialGradient(px, py, 0, px, py, r);
      gg.addColorStop(0, 'rgba(0,0,0,0.10)'); gg.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = gg; x.fillRect(px - r, py - r, r * 2, r * 2);
    }
    // rumore pixel
    grain(x, S, S, 22);
    const map = toTex(c);
    // bump trama (piccola, ripetuta)
    const b = mkCanvas(64, 64), bx = b.getContext('2d'); bx.fillStyle = '#808080'; bx.fillRect(0, 0, 64, 64);
    for (let i = 0; i < 64; i += 4) { bx.fillStyle = '#b0b0b0'; bx.fillRect(i, 0, 2, 64); bx.fillStyle = '#404040'; bx.fillRect(0, i, 64, 2); }
    const bump = toTex(b, false, [64, 64]);
    return { map, bump };
  }

  // fiancata: nero tessuto con scritta MEDUSA GYM (texture 1024x256 per 6.1 x 0.8 m)
  function apronTexture() {
    const W = 1024, Hh = 256, c = mkCanvas(W, Hh), x = c.getContext('2d');
    x.fillStyle = '#111312'; x.fillRect(0, 0, W, Hh);
    const g = x.createLinearGradient(0, 0, 0, Hh); g.addColorStop(0, 'rgba(255,255,255,0.04)'); g.addColorStop(1, 'rgba(0,0,0,0.25)');
    x.fillStyle = g; x.fillRect(0, 0, W, Hh);
    for (let i = 0; i < 260; i++) { x.fillStyle = `rgba(150,155,150,${0.04 + rnd() * 0.1})`; x.fillRect(rnd() * W, rnd() * 14, 4 + rnd() * 30, 1 + rnd() * 3); }
    for (let i = 0; i < 60; i++) { x.fillStyle = `rgba(0,0,0,${0.1 + rnd() * 0.2})`; x.fillRect(rnd() * W, Hh - rnd() * 40, 10 + rnd() * 60, 2 + rnd() * 6); }
    // pixel px: x = 6.1/1024 m, y = 0.8/256 m -> compensazione 0.52 in x
    x.save(); x.translate(W / 2, Hh * 0.47); x.scale(0.50, 1);
    x.font = '900 150px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif'; x.textBaseline = 'middle'; x.textAlign = 'left';
    x.letterSpacing = '8px';
    const w1 = x.measureText('MEDUSA ').width, w2 = x.measureText('GYM').width, tot = w1 + w2;
    x.fillStyle = '#eef2ee'; x.fillText('MEDUSA ', -tot / 2, 0);
    x.fillStyle = '#39ff14'; x.fillText('GYM', -tot / 2 + w1, 0);
    x.restore();
    x.strokeStyle = 'rgba(255,255,255,0.12)'; x.setLineDash([8, 6]); x.lineWidth = 1.5; x.beginPath(); x.moveTo(0, Hh * 0.86); x.lineTo(W, Hh * 0.86); x.stroke(); x.setLineDash([]);
    // grana tessuto
    grain(x, W, Hh, 18);
    return toTex(c);
  }

  // corda: fasce diagonali di nastro avvolto (tile 64x64)
  function ropeTexture(hexA, hexB, hexGap) {
    const c = mkCanvas(64, 64), x = c.getContext('2d');
    x.fillStyle = hexGap; x.fillRect(0, 0, 64, 64);
    // fasce diagonali: ripetute con wrap
    for (let k = -1; k <= 1; k++) {
      x.save(); x.translate(k * 64, 0);
      const grd = x.createLinearGradient(0, 0, 64, 0);
      x.beginPath(); x.moveTo(0, 64); x.lineTo(64, 0); x.lineTo(64, 28); x.lineTo(0, 92); x.closePath();
      grd.addColorStop(0, hexA); grd.addColorStop(0.5, hexB); grd.addColorStop(1, hexA);
      x.fillStyle = hexA; x.fill(); x.restore();
    }
    // highlight lungo il nastro
    x.globalAlpha = 0.22; x.strokeStyle = hexB; x.lineWidth = 5;
    for (let k = -1; k <= 1; k++) { x.beginPath(); x.moveTo(-5, 64 + 12 + k * 64); x.lineTo(69, -12 + k * 64 + 0); x.stroke(); }
    x.globalAlpha = 1;
    return c;
  }

  // ---------- materiali ----------
  const ct = canvasTextures();
  const matCanvas = new THREE.MeshStandardMaterial({ map: ct.map, bumpMap: ct.bump, bumpScale: 1.6, roughness: 0.95, metalness: 0, color: 0xc4c4c4 });
  const apronTex = apronTexture();
  const matApron = new THREE.MeshPhysicalMaterial({ map: apronTex, roughness: 0.88, metalness: 0, sheen: 0.6, sheenRoughness: 0.6, sheenColor: new THREE.Color(0x555a55) });
  const matTrim = new THREE.MeshStandardMaterial({ color: 0x0a1f06, emissive: new THREE.Color(GREEN), emissiveIntensity: 1.5, roughness: 0.4 });
  const matSteel = new THREE.MeshStandardMaterial({ color: 0xb6babd, metalness: 1, roughness: 0.28 });
  const wearC = mkCanvas(128, 128), wx = wearC.getContext('2d'); wx.fillStyle = '#b4b4b4'; wx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 70; i++) { wx.strokeStyle = rnd() < 0.5 ? `rgba(255,255,255,${0.1 + rnd() * 0.25})` : `rgba(60,60,60,${0.1 + rnd() * 0.3})`; wx.lineWidth = 1 + rnd() * 2; const a = rnd() * 128, b = rnd() * 128, th = rnd() * 3.14; wx.beginPath(); wx.moveTo(a, b); wx.lineTo(a + Math.cos(th) * (6 + rnd() * 24), b + Math.sin(th) * (6 + rnd() * 24)); wx.stroke(); }
  const wearT = toTex(wearC, false);
  const vinyl = (col, rough = 0.42) => new THREE.MeshPhysicalMaterial({ color: col, roughness: rough, roughnessMap: wearT, metalness: 0, clearcoat: 0.5, clearcoatRoughness: 0.28 });
  const matPadBlack = vinyl(0x24262a, 0.3), matPadGreen = vinyl(0x1fc20b, 0.38), matPadWhite = vinyl(0xe6e8e4, 0.42);
  matPadGreen.emissive = new THREE.Color(GREEN); matPadGreen.emissiveIntensity = 0.12;
  const ropeBlackC = ropeTexture('#222223', '#3d3e40', '#0a0a0a');
  const ropeGreenC = ropeTexture('#33d818', '#6bf252', '#1a8a0b');
  const rtB = toTex(ropeBlackC, true, [hi ? 70 : 40, 1]);
  const rtG = toTex(ropeGreenC, true, [hi ? 70 : 40, 1]);
  const rtBb = toTex(ropeBlackC, false, [hi ? 70 : 40, 1]);
  const matRopeBlack = new THREE.MeshStandardMaterial({ map: rtB, bumpMap: rtBb, bumpScale: 1.5, roughness: 0.62, metalness: 0 });
  const matRopeGreen = new THREE.MeshStandardMaterial({ map: rtG, emissive: new THREE.Color(GREEN), emissiveMap: rtG, emissiveIntensity: 0.35, bumpMap: toTex(ropeGreenC, false, [hi ? 70 : 40, 1]), bumpScale: 1.5, roughness: 0.55 });

  // ---------- accumulatori di geometria per materiale ----------
  const acc = { canvas: [], apron: [], trim: [], steel: [], padBlack: [], padGreen: [], padWhite: [], ropeBlack: [], ropeGreen: [] };
  const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), V = new THREE.Vector3(), S1 = new THREE.Vector3(1, 1, 1), E = new THREE.Euler();
  const put = (key, geo, x = 0, y = 0, z = 0, ry = 0, rx = 0, rz = 0) => { E.set(rx, ry, rz); Q.setFromEuler(E); M4.compose(V.set(x, y, z), Q, S1); geo.applyMatrix4(M4); acc[key].push(geo); return geo; };
  const rbox = (w, h, d, r, seg) => new RoundedBoxGeometry(w, h, d, seg, r);

  // ---------- tela + imbottitura bordo ----------
  {
    const seg = hi ? 4 : 2;
    const g = rbox(PLAT, 0.12, PLAT, 0.05, seg);
    put('canvas', g, 0, DECK - 0.06, 0);
  }

  // ---------- grembiule (4 lati con pieghe) ----------
  {
    const top = DECK - 0.12 + 0.01, bot = 0.025, hh = top - bot;
    const nx = hi ? 112 : 40, ny = hi ? 4 : 2;
    for (let s = 0; s < 4; s++) {
      const pos = [], uv = [], idx = [];
      for (let r = 0; r <= ny; r++) {
        const v = r / ny;
        for (let c = 0; c <= nx; c++) {
          const u = c / nx, xx = (u - 0.5) * (PLAT - 0.06);
          const fold = Math.sin(u * Math.PI * 2 * 34 + 0.8 * Math.sin(u * 9)) * (0.006 + 0.01 * v);
          const sag = Math.sin(u * Math.PI * 2 * 5 + s) * 0.004 * v;
          pos.push(xx, top - v * hh - (v === 1 ? Math.abs(Math.sin(u * 40)) * 0.004 : 0), H - 0.04 + fold + sag);
          uv.push(u, 1 - v);
        }
      }
      for (let r = 0; r < ny; r++) for (let c = 0; c < nx; c++) {
        const a = r * (nx + 1) + c, b = a + 1, cc = a + nx + 1, d = cc + 1;
        idx.push(a, cc, b, b, cc, d);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      g.setIndex(idx); g.computeVertexNormals();
      put('apron', g, 0, 0, 0, s * Math.PI / 2);
    }
    // fascia neon verde lungo il bordo alto del grembiule (cornice continua)
    const tw = 0.05, ty = top - tw / 2 - 0.004, th = 0.03;
    for (let s = 0; s < 4; s++) {
      const g2 = rbox(PLAT, tw, th, 0.008, 1);
      g2.applyMatrix4(new THREE.Matrix4().makeRotationY(s * Math.PI / 2).multiply(new THREE.Matrix4().makeTranslation(0, ty, H - 0.02)));
      acc.trim.push(g2);
    }
  }

  const MODEL = opts.model || null;                // pali, tenditori, paracolpi e corde presi dal modello scaricato (A1905, CC BY)
  // ---------- paletti d'angolo ----------
  const CORNERS = [[1, 1, 'padBlack'], [-1, 1, 'padGreen'], [-1, -1, 'padBlack'], [1, -1, 'padWhite']];
  const radialSeg = hi ? 20 : 10;
  for (const [sx, sz, padKey] of (MODEL ? [] : CORNERS)) {
    const px = sx * P, pz = sz * P;
    // piastra base
    put('steel', rbox(0.2, 0.025, 0.2, 0.006, 1), px, DECK + 0.0125, pz, Math.PI / 4);
    // paletto
    put('steel', new THREE.CylinderGeometry(POST_R, POST_R * 1.04, POST_TOP - DECK, radialSeg, 1), px, (POST_TOP + DECK) / 2, pz);
    // collare base + testa
    put('steel', new THREE.CylinderGeometry(POST_R * 1.35, POST_R * 1.35, 0.05, radialSeg, 1), px, DECK + 0.07, pz);
    put('steel', new THREE.CylinderGeometry(POST_R * 1.3, POST_R * 1.3, 0.035, radialSeg, 1), px, POST_TOP - 0.02, pz);
    put('steel', new THREE.SphereGeometry(POST_R * 1.15, radialSeg, hi ? 8 : 4, 0, Math.PI * 2, 0, Math.PI / 2), px, POST_TOP, pz);
    // occhielli / tenditori sul retro del paletto (uno per corda)
    for (let i = 0; i < 4; i++) {
      const yy = DECK + ROPE_H[i], ox = sx * 0.075, oz = sz * 0.075, dir = Math.atan2(sx, sz);
      put('steel', new THREE.CylinderGeometry(0.016, 0.016, 0.16, 8, 1), px + ox, yy, pz + oz, dir, Math.PI / 2, 0);
      if (hi) put('steel', new THREE.TorusGeometry(0.03, 0.007, 6, 14), px + sx * 0.16, yy, pz + sz * 0.16, dir + Math.PI / 2, 0, 0);
      put('steel', new THREE.CylinderGeometry(0.026, 0.026, 0.022, 6, 1), px + sx * 0.05, yy, pz + sz * 0.05, dir, Math.PI / 2, 0);
    }
    // cuscino angolare imbottito (ruotato a 45 gradi verso il centro)
    const ry = Math.atan2(sx, sz);
    const padBot = DECK + 0.25, padTop = POST_TOP - 0.07, padH = padTop - padBot;
    const cx = sx * (P - 0.06), cz = sz * (P - 0.06);
    // cuscino a 3 pannelli rigonfi con filetto verde nelle giunture
    const nP = 3, segH = padH / nP;
    for (let k = 0; k < nP; k++) {
      const yc = padBot + segH * (k + 0.5);
      put(padKey, rbox(0.34, segH + 0.02, 0.25, 0.1, hi ? 3 : 1), cx, yc, cz, ry);
      if (k > 0) put('trim', rbox(0.335, 0.008, 0.24, 0.003, 1), cx, padBot + segH * k, cz, ry);
    }
    for (const yy of [padBot + 0.006, padTop - 0.006]) put('trim', rbox(0.28, 0.007, 0.2, 0.003, 1), cx, yy, cz, ry);
  }

  // ---------- corde ----------
  const sagAt = (u, amp) => amp * (1 - Math.pow(2 * u - 1, 2));
  const tubeSeg = hi ? 40 : 14, tubeRad = hi ? 8 : 5;
  const ropeSides = MODEL ? [] : [
    { a: [-R, -R], b: [R, -R] },  // z=-R
    { a: [R, -R], b: [R, R] },    // x=R
    { a: [R, R], b: [-R, R] },    // z=R
    { a: [-R, R], b: [-R, -R] },  // x=-R
  ];
  const ropeKeys = ['ropeBlack', 'ropeBlack', 'ropeBlack', 'ropeGreen'];
  const sleeveKeys = {};
  for (const side of ropeSides) {
    for (let i = 0; i < 4; i++) {
      const y0 = DECK + ROPE_H[i], amp = 0.034 - i * 0.006;
      const pts = [];
      const N = 14;
      for (let k = 0; k <= N; k++) {
        const u = k / N;
        pts.push(new THREE.Vector3(side.a[0] + (side.b[0] - side.a[0]) * u, y0 - sagAt(u, amp), side.a[1] + (side.b[1] - side.a[1]) * u));
      }
      const curve = new THREE.CatmullRomCurve3(pts);
      const geo = new THREE.TubeGeometry(curve, tubeSeg, ROPE_R, tubeRad, false);
      acc[ropeKeys[i]].push(geo);
    }
  }
  // fasce/cuffie imbottite ai capi delle corde (turnbuckle cover) + tenditori in acciaio
  for (const side of ropeSides) {
    const dx = side.b[0] - side.a[0], dz = side.b[1] - side.a[1], L = Math.hypot(dx, dz), ux = dx / L, uz = dz / L;
    const ang = Math.atan2(ux, uz); // direzione lungo la corda
    for (let i = 0; i < 4; i++) {
      const y0 = DECK + ROPE_H[i];
      const corner = (side === ropeSides[0] ? 0 : 0);
      for (const end of [0, 1]) {
        const ex = end ? side.b[0] : side.a[0], ez = end ? side.b[1] : side.a[1];
        const dir = end ? -1 : 1;
        const len = 0.30;
        const mx = ex + ux * dir * len / 2, mz = ez + uz * dir * len / 2;
        // colore cuffia = colore del cuscino d'angolo
        const sx = Math.sign(ex), sz = Math.sign(ez);
        const key = CORNERS.find(c => c[0] === sx && c[1] === sz)[2];
        const cyl = hi ? new THREE.CapsuleGeometry(0.05, len - 0.1, 2, 12) : new THREE.CylinderGeometry(0.05, 0.05, len, 7, 1);
        put(key, cyl, mx, y0 - 0.002, mz, ang, Math.PI / 2, 0);
        // tenditore in acciaio dietro il cuscino
      }
    }
  }
  // distanziatori verticali in nastro (2 per lato)
  for (const side of ropeSides) {
    const dx = side.b[0] - side.a[0], dz = side.b[1] - side.a[1], L = Math.hypot(dx, dz), ux = dx / L, uz = dz / L;
    const ang = Math.atan2(ux, uz);
    for (const u of [1 / 3, 2 / 3]) {
      const mx = side.a[0] + dx * u, mz = side.a[1] + dz * u;
      const yTop = DECK + ROPE_H[3] - sagAt(u, 0.034 - 3 * 0.006) + 0.045, yBot = DECK + ROPE_H[0] - sagAt(u, 0.034) - 0.045;
      put('padBlack', rbox(0.045, yTop - yBot, 0.014, 0.005, 1), mx, (yTop + yBot) / 2, mz, ang);
      // anelli attorno alle corde
      for (let i = 0; i < 4; i++) {
        const yy = DECK + ROPE_H[i] - sagAt(u, 0.034 - i * 0.006);
        put('padBlack', new THREE.CylinderGeometry(ROPE_R * 1.45, ROPE_R * 1.45, 0.05, hi ? 10 : 6, 1), mx, yy, mz, ang, Math.PI / 2, 0);
      }
    }
  }

  // ---------- scalini d'angolo (due angoli neutri) ----------
  if (hi) {
    for (const [sx, sz] of [[1, -1], [-1, 1]]) {
      // gradino su lato lungo, accanto all'angolo
      const bx = sx * (H + 0.30), bz = sz * 1.95;
      put('padBlack', rbox(0.6, 0.45, 0.9, 0.02, 1), bx, 0.225, bz, 0);
      put('padBlack', rbox(0.34, 0.22, 0.9, 0.02, 1), bx + sx * 0.47, 0.11, bz, 0);
      put('trim', rbox(0.02, 0.02, 0.9, 0.005, 1), bx - sx * 0.3, 0.44, bz, 0);
      put('trim', rbox(0.02, 0.02, 0.9, 0.005, 1), bx + sx * 0.3, 0.21, bz, 0);
    }
  }

  // ---------- merge + mesh ----------
  const mats = { canvas: matCanvas, apron: matApron, trim: matTrim, steel: matSteel, padBlack: matPadBlack, padGreen: matPadGreen, padWhite: matPadWhite, ropeBlack: matRopeBlack, ropeGreen: matRopeGreen };
  for (const k of Object.keys(acc)) {
    if (!acc[k].length) continue;
    // normalizza attributi
    const list = acc[k].map(g => { for (const n of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(n)) g.deleteAttribute(n); return g.index ? g.toNonIndexed() : g; });
    const geo = mergeGeometries(list, false);
    const m = new THREE.Mesh(geo, mats[k]);
    m.name = 'ring_' + k;
    m.castShadow = k !== 'canvas'; m.receiveShadow = true;
    if (k === 'canvas') m.castShadow = true;
    G.add(m);
  }
  if (MODEL) {
    const flat = (color, roughness, metalness = 0, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness, metalness, side: THREE.DoubleSide, ...extra });
    for (const m of [matPadBlack, matPadGreen, matPadWhite]) m.side = THREE.DoubleSide;
    matTrim.emissiveIntensity = 0.9;                 // il filo luminoso della pedana resta, ma piu' basso: non deve sembrare un neon
    const padGreen2 = vinyl(0x195c0a, 0.75); padGreen2.side = THREE.DoubleSide;   // verde spento, senza luce propria
    const mm = {
      palo: flat(0x17181b, 0.42, 0.7), acciaio: flat(0xb6babd, 0.3, 1), nastro: flat(0x151517, 0.72),
      cordaNera: flat(0x1b1b1d, 0.58), cordaVerde: flat(0x186e0c, 0.7),       // corda alta verde ma non luminosa: i neon restano solo quelli veri
      padNero: matPadBlack, padVerde: padGreen2, padBianco: padGreen2,
    };
    MODEL.updateMatrixWorld(true);
    MODEL.traverse((o) => {
      if (!o.isMesh) return;
      const m = new THREE.Mesh(o.geometry, mm[o.material.name] || mm.nastro);
      m.applyMatrix4(o.matrixWorld); m.name = 'ring_' + o.material.name; m.castShadow = m.receiveShadow = true; G.add(m);
    });
  }
  return G;
}
