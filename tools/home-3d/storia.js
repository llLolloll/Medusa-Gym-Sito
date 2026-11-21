// Seconda meta' del racconto: la porta, il corridoio con i tre ingressi, la recensione sul muro,
// il tabellone degli orari e la parete con le cornici dello staff. Testi, orari e foto si leggono dalla pagina
// (cosi' restano giusti quando il sito cambia). Unita' = metri, Y in alto.
import { THREE } from './three_slim.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// pianta: parete est della palestra a x0 con la porta, corridoio fino a x1, da z0 (fondo sud) a z1 (parete nord con i tre ingressi)
export const COR = { x0: 39.0, x1: 42.4, z0: 2.6, z1: -7.6, h: 3.1, door: { a: 0.5, b: 1.9, h: 2.25 } };
const GREEN = 0x39ff14;

const mkCanvas = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
const tex = (c) => { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; };
const fontH = () => (getComputedStyle(document.documentElement).getPropertyValue('--fh') || '').trim() || "'Bebas Neue', Impact, sans-serif";
const FB = 'Archivo, Arial, sans-serif';
const txt = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');

function wrap(x, text, maxW) {
  const out = []; let line = '';
  for (const w of text.split(' ')) { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > maxW && line) { out.push(line); line = w; } else line = t; }
  if (line) out.push(line); return out;
}

// --- recensione vera presa dalla sezione recensioni, scritta sul muro ---
function quoteTexture(S) {
  const cards = [...document.querySelectorAll('#reviews .rcard')].map((c) => ({ t: txt(c.querySelector('.rtext')), n: txt(c.querySelector('.rname')) })).filter((c) => c.t);
  const pick = cards.find((c) => /aria familiare/i.test(c.t)) || cards.filter((c) => c.t.length < 170)[0] || cards[0] || { t: 'Più che una palestra, una famiglia.', n: '' };
  const c = mkCanvas(S, S), x = c.getContext('2d'), k = S / 1024;
  x.textAlign = 'left'; x.textBaseline = 'alphabetic';
  x.fillStyle = '#39ff14'; x.font = `${96 * k}px ${FB}`; x.fillText('★★★★★', 60 * k, 150 * k);
  let fs = 104; x.font = `${fs * k}px ${fontH()}`; let lines = wrap(x, pick.t.toUpperCase(), S - 120 * k);
  while (lines.length > 7 && fs > 56) { fs -= 6; x.font = `${fs * k}px ${fontH()}`; lines = wrap(x, pick.t.toUpperCase(), S - 120 * k); }
  x.fillStyle = '#f4f4f2'; lines.forEach((l, i) => x.fillText(l, 60 * k, (270 + i * fs * 1.02) * k));
  const yb = (270 + lines.length * fs * 1.02 + 30) * k;
  x.fillStyle = '#39ff14'; x.fillRect(60 * k, yb, 110 * k, 6 * k);
  if (pick.n) { x.fillStyle = 'rgba(244,244,242,.78)'; x.font = `500 ${40 * k}px ${FB}`; x.fillText(pick.n + '  ·  Recensione Google', 60 * k, yb + 64 * k); }
  return tex(c);
}

// --- tabellone: i corsi e i giorni letti dalla tabella del palinsesto ---
function boardTexture(S) {
  const rows = [...document.querySelectorAll('#orari table tbody tr')].map((tr) => ({ name: txt(tr.querySelector('th')), d: [...tr.querySelectorAll('td')].map((td) => td.querySelectorAll('.sl').length) })).filter((r) => r.name && r.d.length);
  const days = [...document.querySelectorAll('#orari table thead th')].slice(1).map(txt);
  const c = mkCanvas(S, S), x = c.getContext('2d'), k = S / 1024;
  x.fillStyle = '#060807'; x.fillRect(0, 0, S, S);
  x.fillStyle = '#f4f4f2'; x.font = `${98 * k}px ${fontH()}`; x.textBaseline = 'alphabetic'; x.fillText('ORARIO ', 56 * k, 128 * k);
  const w0 = x.measureText('ORARIO ').width; x.fillStyle = '#39ff14'; x.fillText('DEI CORSI', 56 * k + w0, 128 * k);
  const n = Math.max(1, rows.length), nd = Math.max(1, days.length || 6), x0 = 430 * k, cw = (S - x0 - 50 * k) / nd, y0 = 250 * k, rh = Math.min(86 * k, (S - y0 - 90 * k) / n);
  x.font = `${46 * k}px ${fontH()}`; x.fillStyle = 'rgba(244,244,242,.6)'; x.textAlign = 'center';
  (days.length ? days : ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']).forEach((d, i) => x.fillText(d.toUpperCase(), x0 + cw * (i + 0.5), 212 * k));
  rows.forEach((r, j) => {
    const y = y0 + rh * j;
    x.fillStyle = 'rgba(255,255,255,.07)'; x.fillRect(50 * k, y, S - 100 * k, 2 * k);
    x.textAlign = 'left'; x.fillStyle = '#f4f4f2'; x.font = `${Math.min(52, 60 * rh / (86 * k)) * k}px ${fontH()}`; x.fillText(r.name.toUpperCase().slice(0, 20), 56 * k, y + rh * 0.68);
    r.d.forEach((v, i) => {
      const cx = x0 + cw * (i + 0.5), cy = y + rh * 0.5;
      if (v) { x.fillStyle = '#39ff14'; if (x.roundRect) { x.beginPath(); x.roundRect(cx - cw * 0.3, cy - rh * 0.2, cw * 0.6, rh * 0.4, rh * 0.2); x.fill(); } else x.fillRect(cx - cw * 0.3, cy - rh * 0.2, cw * 0.6, rh * 0.4); }
      else { x.fillStyle = 'rgba(255,255,255,.13)'; x.fillRect(cx - cw * 0.12, cy - 2 * k, cw * 0.24, 4 * k); }
    });
  });
  const m = /Lun-Ven[^.]*/.exec(txt(document.querySelector('#orari')));
  x.textAlign = 'left'; x.fillStyle = 'rgba(244,244,242,.6)'; x.font = `500 ${32 * k}px ${FB}`; x.fillText(m ? 'Sala pesi  ' + m[0].replace(/\s+/g, ' ') : '', 56 * k, S - 44 * k);
  return tex(c);
}

function labelTexture(word) {
  const c = mkCanvas(512, 128), x = c.getContext('2d');
  x.font = `92px ${fontH()}`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#eafde6'; x.fillText(word, 256, 70);
  return tex(c);
}
function nameTexture(name) {
  const c = mkCanvas(512, 96), x = c.getContext('2d');
  x.font = `62px ${fontH()}`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#f0f2ee'; x.fillText(name.toUpperCase(), 256, 52, 490);
  return tex(c);
}

export function buildStory({ mobile, softTex }) {
  const G = new THREE.Group(); G.name = 'storia';
  const { x0, x1, z0, z1, h, door } = COR, T = 0.16, xm = (x0 + x1) / 2;
  const wallM = new THREE.MeshStandardMaterial({ color: 0x171a18,   // pareti chiare quanto basta: il corridoio si regge sulle sue luci accese, senza lampade vere (costano su ogni pixel)
    roughness: 0.88, metalness: 0 });
  const walls = [], glowBars = [];
  const B = (list, w, hh, d, x, y, z) => { const g = new THREE.BoxGeometry(w, hh, d); g.translate(x, y, z); list.push(g); };
  // parete est della palestra, con il varco della porta
  B(walls, T, h, door.a + 8.5, x0, h / 2, (door.a - 8.5) / 2);
  B(walls, T, h, 7 - door.b, x0, h / 2, (7 + door.b) / 2);
  B(walls, T, h - door.h, door.b - door.a, x0, (h + door.h) / 2, (door.a + door.b) / 2);
  // corridoio: parete est e fondo sud
  B(walls, T, h, z0 - z1, x1, h / 2, (z0 + z1) / 2);
  B(walls, x1 - x0, h, T, xm, h / 2, z0);
  // parete nord con i tre ingressi
  const DW = 0.8, DH = 2.1, DX = [x0 + 0.8, xm, x1 - 0.8];
  const edges = [x0, ...DX.flatMap((c) => [c - DW / 2, c + DW / 2]), x1];
  for (let i = 0; i < edges.length; i += 2) B(walls, edges[i + 1] - edges[i], h, T, (edges[i] + edges[i + 1]) / 2, h / 2, z1);
  for (const c of DX) B(walls, DW, h - DH, T, c, (h + DH) / 2, z1);
  const wm = new THREE.Mesh(mergeGeometries(walls, false), wallM); wm.receiveShadow = true; wm.castShadow = !mobile; G.add(wm);

  // luci "accese": cornice della porta, tubi a soffitto, stipiti dei tre ingressi (un solo oggetto)
  const glowM = new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(0.3, 1.25, 0.2) });   // valori sopra 1: su computer prendono l'alone
  const R = 0.022;
  for (const zz of [door.a - R, door.b + R]) B(glowBars, 0.03, door.h, 0.03, x0 - T / 2 - 0.016, door.h / 2, zz);
  B(glowBars, 0.03, 0.03, door.b - door.a + 0.09, x0 - T / 2 - 0.016, door.h + R, (door.a + door.b) / 2);
  for (const c of DX) { for (const s of [-1, 1]) B(glowBars, 0.03, DH, 0.03, c + s * (DW / 2 + R), DH / 2, z1 + T / 2 + 0.016); B(glowBars, DW + 0.09, 0.03, 0.03, c, DH + R, z1 + T / 2 + 0.016); }
  G.add(new THREE.Mesh(mergeGeometries(glowBars, false), glowM));
  const tubeM = new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(1.5, 1.9, 1.45) }), tubes = [];
  for (const zz of [0.9, -2.3, -5.4]) B(tubes, 0.05, 0.05, 1.5, xm, h - 0.06, zz);
  G.add(new THREE.Mesh(mergeGeometries(tubes, false), tubeM));

  {
    const leaf = new THREE.Group(); leaf.position.set(x0 + T / 2, 0, door.b - 0.02); leaf.rotation.y = 1.42;   // cardine sullo stipite nord
    const dm = new THREE.MeshStandardMaterial({ color: 0x1a1d1b, roughness: 0.55, metalness: 0.35 }), sm = new THREE.MeshStandardMaterial({ color: 0xb9bdc1, roughness: 0.3, metalness: 1 });
    const d1 = new THREE.Mesh(new THREE.BoxGeometry(0.045, door.h - 0.04, door.b - door.a - 0.04), dm); d1.position.set(0, (door.h - 0.04) / 2 + 0.01, -(door.b - door.a - 0.04) / 2); d1.castShadow = !mobile; leaf.add(d1);
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, door.b - door.a - 0.3), sm); bar.position.set(-0.06, 1.02, -(door.b - door.a) / 2); leaf.add(bar);
    G.add(leaf);
    // cartello luminoso sopra la porta, come le uscite vere
    const sc = mkCanvas(256, 96), sx = sc.getContext('2d'); sx.fillStyle = '#1fa30f'; sx.fillRect(0, 0, 256, 96); sx.fillStyle = '#ffffff'; sx.beginPath(); sx.moveTo(196, 48); sx.lineTo(150, 18); sx.lineTo(150, 36); sx.lineTo(60, 36); sx.lineTo(60, 60); sx.lineTo(150, 60); sx.lineTo(150, 78); sx.closePath(); sx.fill();
    const sign = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.17, 0.45), [0, 1, 2, 3, 4, 5].map((i) => i === 1 ? new THREE.MeshBasicMaterial({ map: tex(sc), color: new THREE.Color().setRGB(1.5, 1.7, 1.5) }) : dm)); sign.position.set(x0 - T / 2 - 0.03, door.h + 0.2, (door.a + door.b) / 2); G.add(sign);
  }
  // i tre ingressi: luce che esce, scritta sopra, alone sul pavimento
  const glowT = (() => { const c = mkCanvas(8, 128), x = c.getContext('2d'), l = x.createLinearGradient(0, 0, 0, 128); l.addColorStop(0, '#9dff8c'); l.addColorStop(0.55, '#e9ffe4'); l.addColorStop(1, '#ffffff'); x.fillStyle = l; x.fillRect(0, 0, 8, 128); return tex(c); })();
  const lightM = new THREE.MeshBasicMaterial({ map: glowT, color: new THREE.Color().setRGB(0.5, 0.6, 0.48), fog: false });
  const pool = softTex([[0, 'rgba(190,255,175,.55)'], [0.6, 'rgba(120,255,95,.12)'], [1, 'rgba(120,255,95,0)']]);
  const poolM = new THREE.MeshBasicMaterial({ map: pool, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: mobile ? 0.45 : 0.8 });
  const pg = new THREE.PlaneGeometry(1, 1);
  const addPool = (x, z, sx, sz) => { const m = new THREE.Mesh(pg, poolM); m.rotation.x = -Math.PI / 2; m.position.set(x, 0.012, z); m.scale.set(sx, sz, 1); m.renderOrder = 3; G.add(m); };
  // dentro ogni ingresso una foto vera della palestra, come un manifesto retroilluminato (foto gia' usate nella pagina)
  const POSTER = [['images/anima-fight-s.webp', 0.34], ['images/corso-calisthenics.webp', 0.5], ['images/corso-posturale.webp', 0.56]];   // file, punto orizzontale da tenere al centro
  const doors = [];
  const veilM = new THREE.MeshBasicMaterial({ map: glowT, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.22, fog: false });
  ['FIGHT', 'FITNESS', 'BENESSERE'].forEach((wd, i) => {
    const pm = lightM.clone(); doors.push({ mat: pm, src: POSTER[i][0], fx: POSTER[i][1] });
    const p = new THREE.Mesh(pg, pm); p.position.set(DX[i], DH / 2, z1 - 0.02); p.scale.set(DW, DH, 1); G.add(p);
    const v = new THREE.Mesh(pg, veilM); v.position.set(DX[i], DH / 2, z1 - 0.012); v.scale.set(DW, DH, 1); v.renderOrder = 2; G.add(v);
    const l = new THREE.Mesh(pg, new THREE.MeshBasicMaterial({ map: labelTexture(wd), transparent: true, depthWrite: false })); l.position.set(DX[i], DH + 0.3, z1 + T / 2 + 0.012); l.scale.set(0.92, 0.23, 1); G.add(l);
    addPool(DX[i], z1 + 1.0, 1.5, 2.6);
  });
  // oltre la porta: un tubo acceso e il suo alone sul muro di fronte, cosi' il varco "chiama"
  { const dz = (door.a + door.b) / 2;
    const tb = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.7, 0.05), tubeM); tb.position.set(x1 - T / 2 - 0.05, 1.45, dz); G.add(tb);
    const wp = new THREE.Mesh(pg, new THREE.MeshBasicMaterial({ map: pool, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 1 })); wp.rotation.y = -Math.PI / 2; wp.position.set(x1 - T / 2 - 0.02, 1.45, dz); wp.scale.set(3.4, 3.0, 1); G.add(wp); }
  // la porta vista dalla palestra: luce del corridoio che esce sul pavimento
  addPool(x0 - 1.1, (door.a + door.b) / 2, 3.2, 2.4); addPool(x0 + 1.2, (door.a + door.b) / 2, 2.6, 2.6);

  // recensione sul muro est
  const S = mobile ? 512 : 1024;
  const quote = new THREE.Mesh(pg, new THREE.MeshBasicMaterial({ map: quoteTexture(S), transparent: true, depthWrite: false }));
  quote.rotation.y = -Math.PI / 2; quote.position.set(x1 - T / 2 - 0.012, 1.72, -2.6); quote.scale.set(1.36, 1.36, 1); G.add(quote);
  // tabellone degli orari sul muro ovest
  const frameM = new THREE.MeshStandardMaterial({ color: 0x050606, roughness: 0.5, metalness: 0.4 });
  const bt = boardTexture(S);
  const board = new THREE.Group(); board.position.set(x0 + T / 2, 1.72, -4.6); board.rotation.y = Math.PI / 2; G.add(board);
  const bb = new THREE.Mesh(new THREE.BoxGeometry(1.66, 1.66, 0.06), frameM); bb.position.z = 0.03; board.add(bb);
  const bs = new THREE.Mesh(pg, new THREE.MeshStandardMaterial({ map: bt, emissiveMap: bt, emissive: 0xffffff, emissiveIntensity: 0.62, roughness: 0.6 })); bs.position.z = 0.062; bs.scale.set(1.58, 1.58, 1); board.add(bs);

  // parete delle cornici: le foto dello staff arrivano dalla sezione "Le persone che ci credono"
  const people = [...document.querySelectorAll('#famiglia .tcard')].map((c) => { const im = c.querySelector('img'); return { name: txt(c.querySelector('.tn')), src: im ? im.getAttribute('src') : '' }; }).filter((p) => p.src).slice(0, 10);
  const frames = [], PW = mobile ? 0.29 : 0.4, PH = PW * 1.5, cols = Math.max(1, Math.ceil(people.length / 2)), pitch = mobile ? 0.335 : 0.53, zc = -5.75;   // su telefono piu' strette: devono entrare tutte e cinque in larghezza
  const fgeo = [], photoGeo = new THREE.PlaneGeometry(PW, PH), plateGeo = new THREE.PlaneGeometry(PW, PW * 96 / 512);
  people.forEach((p, i) => {
    const r = i < cols ? 0 : 1, cidx = r ? i - cols : i, nrow = r ? people.length - cols : cols;
    const z = zc + (cidx - (nrow - 1) / 2) * pitch, y = mobile ? (r ? 1.32 : 1.96) : (r ? 1.18 : 2.02), x = x1 - T / 2;
    { const g = new THREE.BoxGeometry(0.035, PH + 0.05, PW + 0.05); g.translate(x - 0.0175, y, z); fgeo.push(g); }
    const mat = new THREE.MeshStandardMaterial({ color: 0x1c1c1c, emissive: 0xffffff, emissiveIntensity: 0.05, roughness: 0.7 });
    const ph = new THREE.Mesh(photoGeo, mat); ph.rotation.y = -Math.PI / 2; ph.position.set(x - 0.037, y, z); G.add(ph);
    const pm = new THREE.MeshBasicMaterial({ map: nameTexture(p.name.split(' ')[0]), transparent: true, depthWrite: false, opacity: 0.25 });
    const pl = new THREE.Mesh(plateGeo, pm); pl.rotation.y = -Math.PI / 2; pl.position.set(x - 0.012, y - PH / 2 - 0.085, z); G.add(pl);
    frames.push({ mat, pm, src: p.src });
  });
  if (fgeo.length) { const fm = new THREE.Mesh(mergeGeometries(fgeo, false), frameM); fm.castShadow = !mobile; G.add(fm); }

  // le foto si scaricano solo quando la camera sta per entrare nel corridoio
  let asked = false;
  const load = () => {
    if (asked) return; asked = true;
    const L = new THREE.TextureLoader();
    for (const d of doors) L.load(d.src, (t) => {
      t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
      const ia = t.image.width / t.image.height, da = 0.8 / 2.1;                      // la foto riempie la porta: si taglia ai lati
      if (ia > da) { t.repeat.x = da / ia; t.offset.x = Math.min(1 - t.repeat.x, Math.max(0, d.fx - t.repeat.x / 2)); } else { t.repeat.y = ia / da; t.offset.y = (1 - t.repeat.y) / 2; }
      d.mat.map = t; d.mat.color.setRGB(0.92, 1.0, 0.9); d.mat.needsUpdate = true;
    }, undefined, () => {});
    for (const f of frames) {
      const ok = (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; f.mat.map = t; f.mat.emissiveMap = t; f.mat.color.set(0x8a8a8a); f.mat.needsUpdate = true; };
      const small = /-s\.webp$/.test(f.src) ? f.src : f.src.replace(/\.webp$/, '-s.webp');
      L.load(small, ok, undefined, () => { if (small !== f.src) L.load(f.src, ok, undefined, () => {}); });   // se la versione piccola manca si usa l'originale
    }
  };
  // lit: 0..1, le cornici si accendono una dopo l'altra
  const setLit = (v) => { const n = frames.length; frames.forEach((f, i) => { const k = Math.min(1, Math.max(0, v * (n + 2) - i)); f.mat.emissiveIntensity = 0.05 + 0.8 * k; f.pm.opacity = 0.25 + 0.75 * k; }); };
  if (document.fonts && document.fonts.ready && !document.fonts.check('40px ' + fontH())) document.fonts.ready.then(() => {
    quote.material.map = quoteTexture(S); quote.material.needsUpdate = true;
    const nb = boardTexture(S); bs.material.map = nb; bs.material.emissiveMap = nb; bs.material.needsUpdate = true;
  });
  return { group: G, load, setLit };
}
