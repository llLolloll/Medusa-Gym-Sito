// Regia: una scena unica, fissa dietro la pagina. Lo scroll muove la camera dentro la palestra.
import { THREE } from './three_slim.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { buildStory } from './storia.js';
import { createRenderer, createStage, GREEN } from './stage.js';
import { A } from './assets/index.js';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const sstep = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const RX = [12, 19.5, 27], RZ = [-1, -2.2, -1];           // i tre ring
const BAG = new THREE.Vector3(0, 0, -0.62), MOUNT_Y = 2.9; // sacco dell'hero
const GLV = [[27.0, -1.2, 1.2], [27.34, -1.34, -0.3]];     // guantoni del finale: x, z, rotazione

/* Tappe della camera. sel/at = punto della pagina che, a centro schermo, corrisponde alla tappa
   (senza sel = punto di passaggio a meta' tra la tappa prima e quella dopo).
   p = variante per schermi verticali (telefono). vis = quanto la scena e' in primo piano (1) o dietro un velo. */
const KEYS = [
  { id: 'hero', sel: null, pos: [0.82, 1.53, 1.72], tgt: [0, 1.45, 0.25], fov: 30, sx: 0.72, sy: 0, vis: 1, p: { pos: [0.75, 1.55, 1.75], fov: 36, sx: 0, sy: 0.1 } },
  { id: 'carica', sel: '#home', at: 1, pos: [1.95, 1.5, 0.45], tgt: [0, 1.42, 0.1], fov: 32, sx: 0.05, sy: 0, vis: 1, p: { pos: [1.5, 1.57, -1.15], tgt: [-0.05, 1.42, 0.15], fov: 48, sx: 0, sy: -0.12 } },
  { id: 'pugno', sel: '.fx-win[data-fx="pugno"]', at: 0.5, pos: [1.9, 1.5, -0.15], tgt: [0, 1.42, -0.05], fov: 34, sx: 0, sy: 0, vis: 1, p: { pos: [1.45, 1.56, -1.5], tgt: [0, 1.42, -0.1], fov: 51, sx: -0.6, sy: -0.12 } },
  { id: 'trailer', sel: '#trailer', at: 0.5, pos: [3.6, 2.3, 4.8], tgt: [4.2, 1.25, -1.6], fov: 36, sx: 0, sy: 0, vis: 0.55, p: { fov: 50 } },
  { id: 'ring', sel: '.fx-win[data-fx="ring"]', at: 0.5, pos: [6.6, 3.3, 5.3], tgt: [20, 0.9, -1.7], fov: 36, sx: 0, sy: 0.1, vis: 1, p: { pos: [5.6, 3.9, 5.8], fov: 54, sy: 0.05 } },
  { id: 'about', sel: '#about', at: 0.5, pos: [13.5, 2.3, 5.3], tgt: [21, 1.1, -1.6], fov: 36, sx: 0.3, sy: 0, vis: 0.25, p: { fov: 52, sx: 0 } },
  { id: 'fitness', sel: '.fx-win[data-fx="fitness"]', at: 0.5, pos: [33.5, 0.95, 3.7], tgt: [35.3, 1.0, -0.8], fov: 42, sx: 0, sy: 0.12, vis: 1, p: { pos: [33.6, 1.05, 4.7], tgt: [35.0, 1.05, -0.8], fov: 62, sy: 0.1 } },
  { id: 'corsi', sel: '#corsi', at: 0.5, pos: [33.2, 1.3, 2.0], tgt: [34.6, 1.3, -1.4], fov: 36, sx: 0, sy: 0, vis: 0.28, p: { fov: 50 } },
  // --- seconda meta' del racconto: si esce dalla porta, corridoio (tre ingressi, recensione, orari, staff), poi di nuovo in sala ---
  { id: 'porta', sel: '.fx-win[data-fx="porta"]', at: 0.22, pos: [33.9, 1.5, 1.45], tgt: [39.0, 1.3, 1.18], fov: 40, sx: 0, sy: -0.12, vis: 1, p: { pos: [33.7, 1.55, 1.4], fov: 58, sy: -0.06 } },
  { id: 'ingressi', sel: '.fx-win[data-fx="porta"]', at: 0.8, pos: [40.7, 1.6, 0.7], tgt: [40.7, 1.45, -7.6], fov: 40, sx: 0, sy: 0, vis: 1, p: { fov: 60 } },
  { id: 'quiz', sel: '#quiz', at: 0.5, pos: [40.7, 1.6, -0.5], tgt: [40.7, 1.45, -7.6], fov: 40, sx: 0, sy: 0, vis: 0.3, p: { fov: 60 } },
  { id: 'recensione', sel: '.fx-win[data-fx="recensione"]', at: 0.5, pos: [40.2, 1.68, -2.0], tgt: [42.4, 1.72, -2.65], fov: 44, sx: 0, sy: -0.03, vis: 1, p: { pos: [39.55, 1.7, -2.45], tgt: [42.4, 1.72, -2.6], fov: 60 } },
  { id: 'reviews', sel: '#reviews', at: 0.5, pos: [40.5, 1.7, -3.2], tgt: [42.4, 1.6, -4.4], fov: 40, sx: 0, sy: 0, vis: 0.2, p: { fov: 58 } },
  { id: 'tabellone', sel: '.fx-win[data-fx="tabellone"]', at: 0.5, pos: [41.95, 1.7, -4.3], tgt: [39.0, 1.72, -4.62], fov: 46, sx: 0, sy: -0.03, vis: 1, p: { pos: [41.95, 1.72, -4.5], tgt: [39.0, 1.72, -4.6], fov: 62 } },
  { id: 'orari', sel: '#orari', at: 0.5, pos: [41.5, 1.7, -4.9], tgt: [39.0, 1.6, -5.6], fov: 40, sx: 0, sy: 0, vis: 0.2, p: { fov: 58 } },
  { id: 'cornici', sel: '.fx-win[data-fx="cornici"]', at: 0.5, pos: [39.6, 1.62, -5.3], tgt: [42.4, 1.6, -5.75], fov: 56, sx: 0, sy: -0.02, vis: 1, p: { pos: [39.45, 1.62, -5.2], tgt: [42.4, 1.6, -5.6], fov: 64 } },
  { id: 'famiglia', sel: '#famiglia', at: 0.5, pos: [39.9, 1.7, -6.2], tgt: [42.4, 1.5, -6.4], fov: 44, sx: 0, sy: 0, vis: 0.2, p: { fov: 60 } },
  { id: 'sale', pos: [40.3, 5.2, -3.0], tgt: [35, 0.8, -2.5], fov: 40, sx: 0, sy: 0, vis: 0.3, p: { fov: 54 } },
  { id: 'gallery', sel: '#gallery', at: 0.5, pos: [35.6, 6.0, 6.8], tgt: [24, 0.5, -1.5], fov: 40, sx: 0, sy: 0, vis: 0.3, p: { fov: 56 } },
  { id: 'campioni', sel: '.fx-win[data-fx="campioni"]', at: 0.5, pos: [27.45, 1.72, -0.5], tgt: [29.15, 1.36, 1.15], fov: 42, sx: 0, sy: 0, vis: 1, p: { pos: [27.3, 1.78, -0.65], fov: 56 } },
  { id: 'risultati', sel: '#risultati', at: 0.5, pos: [27.4, 1.95, -0.5], tgt: [29.2, 1.5, 1.2], fov: 40, sx: 0, sy: 0, vis: 0.2, p: { fov: 54 } },
  { id: 'esce', pos: [29.2, 2.7, 2.0], tgt: [29.3, 1.1, 3.1], fov: 40, sx: 0, sy: 0, vis: 0.6, p: { fov: 54 } },
  { id: 'gong', sel: '.fx-win[data-fx="gong"]', at: 0.5, pos: [29.75, 1.5, 5.85], tgt: [29.3, 1.15, 3.0], fov: 40, sx: 0, sy: -0.02, vis: 1, p: { pos: [29.6, 1.55, 6.3], fov: 56 } },
  { id: 'giochi', sel: '#giochi', at: 0.5, pos: [30.6, 1.7, 5.4], tgt: [29.0, 1.2, 2.6], fov: 38, sx: 0, sy: 0, vis: 0.2, p: { fov: 54 } },
  { id: 'faq', sel: '#faq', at: 0.5, pos: [29.8, 3.1, 4.9], tgt: [27, 1.6, -1], fov: 38, sx: 0, sy: 0, vis: 0.14, p: { fov: 52 } },
  { id: 'scavalca', pos: [28.1, 2.15, 0.7], tgt: [27.1, 1.2, -1.1], fov: 37, sx: 0, sy: 0.08, vis: 0.6, p: { fov: 50 } },
  { id: 'finale', sel: '.fx-win[data-fx="finale"]', at: 0.5, pos: [27.78, 1.5, -0.08], tgt: [27.14, 0.99, -1.26], fov: 34, sx: 0, sy: 0.2, vis: 1, p: { pos: [27.98, 1.72, 0.3], fov: 48, sy: 0.1 } },
  { id: 'prova', sel: '#prova', at: 0.5, pos: [27.6, 1.3, -0.4], tgt: [27.14, 1.0, -1.26], fov: 36, sx: 0, sy: 0, vis: 0.1, p: { fov: 50 } },
  { id: 'contatti', sel: '#contatti', at: 0.5, pos: [19.5, 13, 9.5], tgt: [19.5, 0, -1.5], fov: 42, sx: 0, sy: 0, vis: 0.28, p: { pos: [19.5, 20, 13], fov: 58 } },
];
const IDX = Object.fromEntries(KEYS.map((k, i) => [k.id, i]));
const GYAW = -0.3, GROLL = 0.3;   // all'impatto il polso gira un poco verso la camera: si leggono nocche e pollice, non il tubo del polsino
const K_HIT = 1.9;   // momento dell'impatto (tra "carica" e "pugno")

const WINDOWS = [
  { fx: 'pugno', before: '#trailer', cap: '' },
  { fx: 'ring', before: '#about', cap: '550 mq <b>e 3 ring</b>' },
  { fx: 'fitness', before: '#corsi', cap: 'Sala pesi, functional, <b>calisthenics</b>' },
  { fx: 'porta', before: '#quiz', cap: '' },
  { fx: 'recensione', before: '#reviews', cap: '', short: 1 },
  { fx: 'tabellone', before: '#orari', cap: '', short: 1 },
  { fx: 'cornici', before: '#famiglia', cap: '', short: 1 },
  { fx: 'campioni', before: '#risultati', cap: '', short: 1 },
  { fx: 'gong', before: '#giochi', cap: '', short: 1 },
  { fx: 'finale', before: '#prova', cap: 'Il ring <b>ti aspetta</b>' },
];

function insertWindows() {
  // la sezione che sta in cima allo schermo deve restare dov'e' anche dopo l'inserimento
  let ref = null, top0 = 0;
  for (const s of document.querySelectorAll('main > section')) { const r = s.getBoundingClientRect(); if (r.top <= 1 && r.bottom > 1) { ref = s; top0 = r.top; break; } }
  const made = [];
  for (const w of WINDOWS) {
    const at = document.querySelector(w.before); if (!at) continue;
    const d = document.createElement('div');
    d.className = 'fx-win' + (w.short ? ' fx-s' : ''); d.dataset.fx = w.fx; d.setAttribute('aria-hidden', 'true');
    if (w.cap) d.innerHTML = '<p class="fx-cap">' + w.cap + '</p>';
    at.parentNode.insertBefore(d, at); made.push(d);
  }
  if (location.hash && location.hash.length > 1) { let t = null; try { t = document.querySelector(location.hash); } catch (e) {} if (t) t.scrollIntoView(); }
  else if (ref) { const d = ref.getBoundingClientRect().top - top0; if (Math.abs(d) > 1) window.scrollBy({ top: d, behavior: 'instant' }); }
  return made;
}

function softTex(stops, size = 128) {
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d');
  const r = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  stops.forEach(([o, col]) => r.addColorStop(o, col)); g.fillStyle = r; g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// Modelli "veri" scaricati da Sketchfab (CC BY 4.0), alleggeriti e ricolorati: guantone e pali/corde del ring di A1905, sacco di CAL21.
// Se uno non arriva (rete, file mancante) al suo posto resta la versione scritta in codice.
async function loadModels(mobile) {
  const ctl = new AbortController(); let timer;
  const one = async (name, q = mobile ? 'lo' : 'hi') => {
    try {
      // sul sito i modelli sono file .glb; nell'anteprima privata viaggiano come testo (l'archivio dell'anteprima non serve i .glb)
      const B64 = typeof __FX_B64__ !== 'undefined' && __FX_B64__;
      const url = new URL('../models/' + name + '_' + q + (B64 ? '.b64.txt' : '.glb'), import.meta.url);
      const res = await fetch(url, { signal: ctl.signal }); if (!res.ok) throw new Error('modello non trovato');
      let data;
      if (B64) { const bin = atob((await res.text()).trim()), buf = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i); data = buf.buffer; }
      else data = await res.arrayBuffer();
      return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(data, '')).scene;   // i modelli sono compressi (meshopt)
    } catch (e) { return null; }
  };
  // chi non arriva in tempo (4 s su telefono, 6 su computer) viene annullato e sostituito dalla versione in codice
  const late = new Promise((r) => { timer = setTimeout(() => { ctl.abort(); r(null); }, mobile ? 4000 : 6000); });
  const jobs = [one('guantone'), one('ring_top'), one('sacco'), mobile ? null : one('sacco', 'lo')];   // su computer i sacchi di sfondo usano la versione leggera
  const [glove, ring, bag, bagLow] = await Promise.all(jobs.map((j) => Promise.race([j, late])));
  clearTimeout(timer);
  return { glove, ring, bag, bagLow };
}

// pausa tra un pezzo e l'altro della costruzione: il telefono resta reattivo al tocco mentre la scena nasce
const nap = () => (window.scheduler && window.scheduler.yield ? window.scheduler.yield() : new Promise((r) => setTimeout(r, 0)));

async function buildWorld(scene, lod, mobile, M = {}) {
  const W = {}, tick = [];
  // il cuoio prende i riflessi delle luci dello studio (stessa mappa d'ambiente della scena, piu' forte)
  const shine = (m, k) => { if (scene.environment) { m.envMap = scene.environment; m.envMapIntensity = k; m.needsUpdate = true; } };
  const Z = { bags: new THREE.Group(), rings: new THREE.Group(), fit: new THREE.Group() };
  scene.add(Z.bags, Z.rings, Z.fit); W.Z = Z;
  const add = (par, o, x, y, z, ry = 0) => { o.position.set(x, y, z); o.rotation.y = ry; par.add(o); return o; };
  const upd = (o) => { if (o.userData && o.userData.update) tick.push(o.userData.update); return o; };
  const zoneAt = (x) => (x < 8 ? Z.bags : x < 30.5 ? Z.rings : Z.fit);

  // pavimento: gomma scura con la griglia "blueprint" del sito, appena accennata
  const floor = add(scene, A.pavimento(THREE, { lod, gridOpacity: 0.045 }), 20, 0, 0);
  floor.traverse((o) => { if (o.isMesh && o.material && 'envMapIntensity' in o.material) { o.material.envMapIntensity = 0.08; o.material.roughnessMap = null; o.material.roughness = 1; o.material.needsUpdate = true; } });
  // ombre di contatto morbide (decalcomanie): tengono gli oggetti "a terra" anche dove non ci sono ombre vere
  const blobT = softTex([[0, 'rgba(0,0,0,.9)'], [0.55, 'rgba(0,0,0,.35)'], [1, 'rgba(0,0,0,0)']]);
  const blobG = new THREE.PlaneGeometry(1, 1);
  const blob = (par, x, y, z, sx, sz, op = 0.8) => { const m = new THREE.Mesh(blobG, new THREE.MeshBasicMaterial({ map: blobT, transparent: true, opacity: op, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })); m.rotation.x = -Math.PI / 2; m.position.set(x, y + 0.004, z); m.scale.set(sx, sz, 1); m.renderOrder = 2; par.add(m); return m; };

  await nap();
  // parete di fondo e tubi neon
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(90, 9), new THREE.MeshStandardMaterial({ color: 0x070908, roughness: 0.92 }));
  wall.position.set(20, 4.5, -8.5); wall.receiveShadow = true; scene.add(wall);
  const neonH = A.neon(THREE, { length: 3.6 }), neonV = A.neon(THREE, { length: 2.2 });
  for (let x = -6; x <= 46; x += 6.5) add(zoneAt(x), neonH.clone(), x, 3.4, -8.42);
  for (const x of [-9.2, 8.2, 23.2, 38.5]) { const n = neonV.clone(); n.rotation.z = Math.PI / 2; add(zoneAt(x), n, x, 1.9, -8.42); }

  await nap();
  // sala sacchi: quello dell'hero su un perno che possiamo far oscillare, gli altri sullo sfondo (un solo modello, clonato)
  W.bagPivot = new THREE.Group(); W.bagPivot.position.set(BAG.x, MOUNT_Y, BAG.z); Z.bags.add(W.bagPivot);
  const heroBag = upd(A.sacco(THREE, { lod, model: M.bag })); heroBag.position.set(0, -MOUNT_Y, 0); W.bagPivot.add(heroBag);
  heroBag.traverse((o) => { if (o.isMesh && o.material.map && o.material.clearcoat !== undefined) shine(o.material, 1.4); });
  const bagLow = M.bag && mobile ? heroBag : A.sacco(THREE, { lod: 'low', model: M.bagLow || null });
  [[-4.6, -3.3], [-2.9, -2.9], [-1.4, -3.5], [1.7, -3.1], [3.3, -3.6], [4.9, -2.8], [-3.7, -5.6], [0.4, -5.9], [3.9, -5.7]]
    .forEach(([x, z], i) => add(Z.bags, bagLow.clone(), x, 0, z, i * 1.3));

  await nap();
  // guantone protagonista (uno solo costruito, gli altri sono copie)
  // mkGlove(dx): dx = guantone destro (quello che colpisce); l'altro e' la sua copia specchiata
  let mkGlove;
  if (M.glove) {
    const inner = M.glove;
    // il file ha le nocche in alto (+Y) e il dorso verso +Z: lo portiamo a nocche in avanti (+Z) e palmo in giu'
    inner.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 1, 0)));
    inner.scale.setScalar(0.082);
    inner.traverse((o) => {
      if (!o.isMesh) return; o.castShadow = true; o.receiveShadow = true;
      if (o.material.name === 'parte_de_adentro') { o.material.color.set(0x040404); o.material.roughness = 1; }   // l'interno del polsino non deve mai schiarirsi
    });
    mkGlove = (dx) => { const g = new THREE.Group(); g.add(inner.clone()); if (dx) g.scale.x = -1; return g; };
  } else {
    const glove0 = A.guantone(THREE, { lod });
    mkGlove = (dx) => { const g = glove0.clone(); if (!dx) g.scale.x = -1; return g; };
  }
  W.glove = new THREE.Group(); W.glove.add(mkGlove(true)); W.glove.scale.setScalar(1.2); Z.bags.add(W.glove);
  // sbuffo all'impatto
  const puffT = softTex([[0, 'rgba(230,235,228,.55)'], [0.5, 'rgba(200,210,198,.18)'], [1, 'rgba(200,210,198,0)']], 64);
  W.puff = Array.from({ length: mobile ? 6 : 10 }, (_, i) => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: puffT, transparent: true, opacity: 0, depthWrite: false, })); const a = i * 2.399; s.userData.d = new THREE.Vector3(Math.cos(a) * 0.9, Math.sin(a) * 0.9 + 0.15, 0.25 + (i % 3) * 0.2); s.visible = false; Z.bags.add(s); return s; });

  await nap();
  // Da qui in giu' i pezzi che non si vedono all'apertura finiscono in coda (later): si costruiscono uno alla volta,
  // nei momenti liberi, quando la scena e' gia' comparsa. Ogni pezzo restituisce la zona da preparare per la scheda grafica.
  const later = []; W.later = later;
  // i tre ring
  later.push(() => {
    const ring0 = A.ring(THREE, { lod, model: M.ring });
    W.rings = RX.map((x, i) => add(Z.rings, i ? ring0.clone() : ring0, x, 0, RZ[i], i === 1 ? Math.PI / 2 : 0)); return Z.rings;
  });

  await nap();
  // angolo fitness: attrezzi in profondita' davanti a un pannello con i neon
  const noGlow = (o) => { o.traverse((m) => { if (m.isMesh && m.material && m.material.emissiveIntensity) m.material.emissiveIntensity = 0; }); return o; };
  [[0x39ff14, 33.75, 0.95, 1.0], [0xd9d9d9, 34.2, 0.72, 0.9], [0x39ff14, 34.62, 0.9, 1.08], [0x1a1a1a, 35.0, 0.6, 0.95]].forEach(([c, x, z, s], i) => later.push(() => {
    add(Z.fit, noGlow(A.kettlebell(THREE, { color: c, lod })), x, 0, z, i * 0.7 + 0.3).scale.setScalar(s); blob(Z.fit, x, 0, z, 0.42 * s, 0.42 * s); return i === 3 ? Z.fit : null;
  }));
  later.push(() => { add(Z.fit, noGlow(A.manubri(THREE, { lod })), 35.3, 0, 0.1, 0.5); blob(Z.fit, 35.3, 0, 0.1, 0.9, 0.6, 0.7); });
  later.push(() => { const an = upd(A.anelli(THREE, { lod })); add(Z.fit, an, 34.25, -0.45, -1.2, -0.2); add(Z.fit, an.clone(), 35.7, -0.3, -2.0, 0.25); });
  later.push(() => {
    // rack da calisthenics accanto agli anelli
    if (A.rack) { add(Z.fit, A.rack(THREE, { lod }), 37.2, 0, -1.55, -0.18); blob(Z.fit, 37.2, 0, -1.55, 3.2, 1.3, 0.6); }
    const panel = new THREE.Mesh(new THREE.BoxGeometry(8, 3.4, 0.12), new THREE.MeshStandardMaterial({ color: 0x0c0e0d, roughness: 0.75 }));
    panel.position.set(34.6, 1.7, -3.3); panel.receiveShadow = true; Z.fit.add(panel);
    add(Z.fit, neonH.clone(), 34.9, 2.75, -3.22); { const n = neonV.clone(); n.rotation.z = Math.PI / 2; add(Z.fit, n, 31.9, 1.5, -3.22); }
    return Z.fit;
  });

  await nap();
  // corridoio del racconto (porta, tre ingressi, recensione, orari, staff): una zona a parte, accesa solo quando serve
  W.story = { load() {}, setLit() {} }; Z.cor = new THREE.Group(); scene.add(Z.cor);
  later.push(() => { const st = buildStory({ mobile, softTex }); Z.cor.add(st.group); W.story = st; return Z.cor; });
  await nap();
  // angolo dei campioni (cinture e medaglie sull'angolo verde del ring 3) e gong a bordo ring
  if (A.trofei) later.push(() => { const tr = A.trofei(THREE, { lod }); add(Z.rings, tr, RX[2] + 2.42, 0.9, RZ[2] + 2.42); W.trofei = tr; tr.traverse((o) => { if (o.isMesh && o.material.metalness > 0.5) { shine(o.material, mobile ? 0.3 : 0.55); if (mobile) o.material.roughness = Math.max(o.material.roughness, 0.5); } }); if (tr.userData.update) tick.push((t) => { if (W.u > IDX.sale && W.u < IDX.esce + 1) tr.userData.update(t); }); return tr; });
  if (A.gong) later.push(() => { const gg = upd(A.gong(THREE, { lod })); add(Z.rings, gg, 29.3, 0, 3.0); if (gg.userData.redrawDisplay && document.fonts && document.fonts.ready) document.fonts.ready.then(() => gg.userData.redrawDisplay()); blob(Z.rings, 29.3, 0, 3.0, 1.1, 0.9, 0.7); return gg; });
  if (!mobile) { W.tspot = new THREE.SpotLight(0xfff4dc, 0, 7, 0.36, 0.8, 1.4); W.tspot.position.set(27.9, 4.4, -0.1); W.tspot.target.position.set(29.0, 1.15, 1.0); scene.add(W.tspot, W.tspot.target); }
  await nap();
  // finale: i guantoni appoggiati sul tappeto del ring 3, dentro un cono di luce
  const cy = 0.9;
  W.pair = GLV.map(([x, z, ry], i) => { const g = new THREE.Group(); g.add(mkGlove(i === 0)); g.position.set(x, cy + 0.074, z); g.rotation.set(0, ry, i ? 0.06 : -0.04); Z.rings.add(g); blob(Z.rings, x, cy, z, 0.5, 0.42, 0.85); return g; });
  const gc = [(GLV[0][0] + GLV[1][0]) / 2, (GLV[0][1] + GLV[1][1]) / 2];
  W.spot = new THREE.SpotLight(0xf2fff0, 22, 14, 0.2, 1.0, 1.6);
  W.spot.position.set(gc[0] - 0.1, 6.4, gc[1] + 0.3); W.spot.target.position.set(gc[0], cy, gc[1]); scene.add(W.spot, W.spot.target);
  if (!mobile) { W.spot.castShadow = true; W.spot.shadow.mapSize.set(1024, 1024); W.spot.shadow.bias = -0.0006; W.spot.shadow.camera.near = 2; W.spot.shadow.camera.far = 9; W.spot.shadow.autoUpdate = false; }
  const coneT = (() => { const c = document.createElement('canvas'); c.width = 4; c.height = 128; const g = c.getContext('2d'); const l = g.createLinearGradient(0, 0, 0, 128); l.addColorStop(0, 'rgba(255,255,255,.75)'); l.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = l; g.fillRect(0, 0, 4, 128); return new THREE.CanvasTexture(c); })();
  W.cone = new THREE.Mesh(new THREE.ConeGeometry(1.25, 5.5, 40, 1, true), new THREE.MeshBasicMaterial({ map: coneT, color: 0xbfffb0, transparent: true, opacity: 0.1, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
  W.cone.position.set(gc[0], cy + 2.75, gc[1]); Z.rings.add(W.cone);
  if (!mobile) {
    const n = 140, pp = new Float32Array(n * 3); let sd = 7; const rnd = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < n; i++) { const h = rnd(), r = Math.sqrt(rnd()) * 1.15 * (0.12 + 0.88 * h), a = rnd() * 6.2832; pp[i * 3] = Math.cos(a) * r; pp[i * 3 + 1] = 2.6 - h * 2.55; pp[i * 3 + 2] = Math.sin(a) * r; }
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(pp, 3));
    W.dust = new THREE.Points(dg, new THREE.PointsMaterial({ map: softTex([[0, 'rgba(255,255,255,1)'], [1, 'rgba(255,255,255,0)']], 32), color: 0xd8ffd0, size: 0.007, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    W.dust.position.set(gc[0], cy, gc[1]); Z.rings.add(W.dust);
  }

  await nap();
  // luci locali (su telefono solo quelle indispensabili: ogni luce costa su ogni pixel)
  if (!mobile) {
    const g1 = new THREE.PointLight(GREEN, 6, 9, 1.8); g1.position.set(-1.6, 2.4, -2.2); scene.add(g1);
    const g2 = new THREE.PointLight(GREEN, 6, 9, 1.8); g2.position.set(35.6, 2.3, -2.4); scene.add(g2);
  }
  const k = new THREE.SpotLight(0xffffff, 14, 2.45, 0.4, 0.9, 1.2);
  k.position.set(1.0, 2.1, 1.6); k.target.position.set(0, 1.45, 0.15); scene.add(k, k.target);
  W.tick = tick;
  return W;
}

export async function start() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (navigator.connection && navigator.connection.saveData) return;
  const force = /[?&]fxforce/.test(location.search);
  try { if (!force && sessionStorage.getItem('fxoff')) return; } catch (e) {}
  const mobile = matchMedia('(max-width: 900px), (hover: none)').matches;
  const root = document.documentElement;
  const canvas = document.createElement('canvas');
  canvas.className = 'fx-world'; canvas.setAttribute('aria-hidden', 'true');
  let renderer, wins = [], dead = false;
  const rollback = () => {
    dead = true;
    // la pagina non deve saltare: si tiene ferma la sezione che si sta guardando mentre spariscono le finestre
    let ref = null, top0 = 0;
    try { for (const el of document.querySelectorAll('section,footer')) { if (el.classList.contains('fx-win')) continue; const r = el.getBoundingClientRect(); if (r.bottom > 80) { ref = el; top0 = r.top; break; } } } catch (e) {}
    root.classList.remove('fx-on', 'fx-m', 'cv-all'); wins.forEach((w) => w.remove()); canvas.remove();
    try { if (ref) { const d = ref.getBoundingClientRect().top - top0; if (Math.abs(d) > 1) window.scrollBy({ top: d, behavior: 'instant' }); } } catch (e) {}
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    try { renderer.dispose(); renderer.forceContextLoss(); } catch (e) {}
  };
  try { renderer = createRenderer(canvas, { mobile, strict: !force }); renderer.info.autoReset = false; } catch (e) { return; }

  const M = await loadModels(mobile);
  window.__fxModels = { guantone: !!M.glove, ring: !!M.ring, sacco: !!M.bag }; window.__fxGlove = M.glove ? 'glb' : 'codice';
  let scene, st, W, cam, composer = null, bloom = null;
  // prepara i materiali di un oggetto per la scheda grafica prima che entri in scena (altrimenti lo scatto arriva mentre si scorre)
  const comp = async (obj) => { try { renderer.setRenderTarget(composer ? composer.readBuffer : null); const pr = renderer.compileAsync(obj, cam, scene); renderer.setRenderTarget(null); await Promise.race([pr, new Promise((r) => setTimeout(r, 2500))]); } catch (e2) { try { renderer.setRenderTarget(null); } catch (e3) {} } };
  try {
    scene = new THREE.Scene(); scene.background = new THREE.Color(0x030504);
    st = createStage(scene, renderer, { mobile, floor: false });
    st.key.intensity = 1.7; scene.environmentIntensity = 0.75;
    if (mobile) scene.remove(st.rim); else st.rim.intensity = 0.4;
    W = await buildWorld(scene, mobile ? 'low' : 'high', mobile, M);
    if (force) window.__fxKeys = KEYS.map((k) => [k.sel || null, k.at == null ? 0.5 : k.at, k.id]);
    if (force) window.__fxDbg = () => { const b = (o) => { const x = new THREE.Box3().setFromObject(o); return [x.min.toArray().map((v) => +v.toFixed(3)), x.max.toArray().map((v) => +v.toFixed(3))]; }; return { glove: b(W.glove), gpos: W.glove.position.toArray(), bag: b(W.bagPivot.children[0].children[0]), rot: W.bagPivot.rotation.x }; };   // PROVA
    cam = new THREE.PerspectiveCamera(36, 1, 0.1, 140);
    if (!mobile) {
      // alone morbido sulle sole luci (neon, bordi): e' quello che da' "atmosfera" senza appesantire il telefono
      const rt = new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, samples: 4 });
      composer = new EffectComposer(renderer, rt);
      composer.addPass(new RenderPass(scene, cam));
      bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.4, 0.5, 1.6); composer.addPass(bloom);
      composer.addPass(new OutputPass());
    }
    await comp(scene);   // prepara subito i materiali di quello che si vede all'apertura: niente scatto al primo fotogramma
  } catch (e) { console.error(e); try { renderer.dispose(); renderer.forceContextLoss(); } catch (e2) {} return; }

  document.body.appendChild(canvas);
  root.classList.add('fx-on', 'cv-all'); if (mobile) root.classList.add('fx-m');
  wins = insertWindows();
  // le finestre spostano la pagina: le animazioni gia' presenti (GSAP) devono ricalcolare le posizioni
  if (window.ScrollTrigger && window.ScrollTrigger.refresh) requestAnimationFrame(() => window.ScrollTrigger.refresh());
  let lost = false, lostAt = 0, noBloom = false;
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); lost = true; lostAt = performance.now(); canvas.style.opacity = '0'; });
  canvas.addEventListener('webglcontextrestored', () => { lost = false; ready = 0; });

  let portrait = false, vw = 0, vh = 0, needAnchors = true;
  function resize() {
    const nw = canvas.clientWidth, nh = canvas.clientHeight;
    if (nw === vw && nh === vh) return;                       // la barra indirizzi del telefono non deve far ricreare il buffer
    vw = nw; vh = nh; portrait = vw / vh < 0.85;
    renderer.setSize(vw, vh, false); cam.aspect = vw / vh; needAnchors = true;
    if (composer) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(vw, vh); }
  }
  let posC, tgtC, K;
  function buildCurves() {
    K = KEYS.map((k) => Object.assign({}, k, portrait && k.p ? k.p : {}));
    posC = new THREE.CatmullRomCurve3(K.map((k) => new THREE.Vector3(...k.pos)), false, 'centripetal');
    tgtC = new THREE.CatmullRomCurve3(K.map((k) => new THREE.Vector3(...k.tgt)), false, 'centripetal');
  }
  // pagina -> tappa
  const homeEl = document.getElementById('home');
  let anchors = [], wasPortrait = null, homeH = 1;
  function computeAnchors() {
    needAnchors = false;
    if (wasPortrait !== portrait) { wasPortrait = portrait; buildCurves(); }
    const h = window.innerHeight, sy = window.scrollY; homeH = homeEl ? homeEl.offsetHeight : h;
    const ys = KEYS.map((k) => {
      if (k.sel === null) return 0;
      if (!k.sel) return NaN;
      const el = document.querySelector(k.sel); if (!el) return NaN;
      const r = el.getBoundingClientRect(); return Math.max(0, r.top + sy + r.height * k.at - h / 2);
    });
    for (let i = 0; i < ys.length; i++) if (isNaN(ys[i])) { let a = i - 1, b = i + 1; while (b < ys.length && isNaN(ys[b])) b++; ys[i] = b < ys.length ? lerp(ys[a], ys[b], 1 / (b - a)) : ys[a] + 1; }
    for (let i = 1; i < ys.length; i++) if (ys[i] <= ys[i - 1]) ys[i] = ys[i - 1] + 1;
    anchors = ys;
  }
  function uAt(y) {
    if (y <= anchors[0]) return 0;
    for (let i = 1; i < anchors.length; i++) if (y <= anchors[i]) return i - 1 + (y - anchors[i - 1]) / (anchors[i] - anchors[i - 1]);
    return anchors.length - 1;
  }
  let roT = 0; new ResizeObserver(() => { clearTimeout(roT); roT = setTimeout(() => { needAnchors = true; }, 150); }).observe(document.body);
  window.addEventListener('resize', resize);

  const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
  if (!mobile) window.addEventListener('pointermove', (e) => { ptr.tx = (e.clientX / innerWidth) * 2 - 1; ptr.ty = (e.clientY / innerHeight) * 2 - 1; }, { passive: true });
  document.addEventListener('visibilitychange', () => { last = performance.now(); });

  let u = 0, last = performance.now(), ready = 0, frame = 0, lastY = -1, still = 0, lastFxo = -1, lastFxh = -1;
  const bag = { a: 0, v: 0 }; let shake = 0, prevU = 0, hitAge = 9, squash = 0;
  const P = new THREE.Vector3(), T = new THREE.Vector3(), tmp = new THREE.Vector3();
  const N = KEYS.length - 1, dbg = { u: 0, vis: 0, calls: 0, tris: 0 };
  window.__fx = dbg;
  const mix = (key, f, i) => lerp(K[i][key], K[Math.min(N, i + 1)][key], f);
  const iFin = IDX.finale, gov = { n: 0, s: 0, lvl: 0, bad: 0, t0: 0 };

  function loop(now) {
    if (dead) return;
    requestAnimationFrame(loop);
    const raw = now - last, dt = Math.max(0, Math.min(0.05, raw / 1000)); last = now; const t = now / 1000; frame++;
    if (document.hidden) return;
    if (lost) { if (now - lostAt > 4000) rollback(); return; }
    if (needAnchors) computeAnchors();
    const y = window.scrollY; still = y === lastY ? still + dt : 0;
    if (y !== lastY && homeEl && y < homeH * 1.2) {
      // l'hero lascia il campo alla scena mentre esce: niente scritte "fantasma" sopra il pugno
      const fxo = +sstep(0.1, 0.45, y / homeH).toFixed(2); if (fxo !== lastFxo) { lastFxo = fxo; homeEl.style.setProperty('--fxo', fxo); }
      if (mobile) { const fxh = +sstep(0, 0.3, y / homeH).toFixed(2); if (fxh !== lastFxh) { lastFxh = fxh; homeEl.style.setProperty('--fxh', fxh); } }
    }
    lastY = y;
    const test = window.FX_U != null, uT = test ? window.FX_U : uAt(y);
    if (test) { ready = 1; canvas.style.opacity = '1'; if (window.__fxDone === uT) return; }
    u += (uT - u) * (1 - Math.exp(-dt * (test ? 60 : 5.5)));
    const i = Math.max(0, Math.min(N - 1, Math.floor(u))), f = sstep(0, 1, u - i);
    const vis = mix('vis', f, i);
    if (ready < 1) { ready = Math.min(1, ready + dt * 1.6); canvas.style.opacity = ready.toFixed(3); }
    const settled = Math.abs(u - uT) < 2e-3 && still > 1.2;
    if (settled && !test && frame % (vis < 0.35 ? 4 : mobile ? 2 : 1)) return;   // a riposo si disegna meno

    renderer.info.reset();
    // su telefono: se i fotogrammi arrancano si abbassa la definizione una volta sola
    // regolatore: se mentre si scorre i fotogrammi arrancano, prima si alleggerisce (definizione piu' bassa, niente alone);
    // se resta a scatti anche cosi' la scena si spegne da sola e la pagina torna quella di sempre
    if (!settled && !test && raw < 1000) {
      // si contano i fotogrammi lenti (non la media): uno scatto isolato non deve far scattare niente
      // computer: sopra 25 ms = sotto i 40 fotogrammi, cosi' anche un blocco fisso a 30 fa scendere di gradino (26/11)
      gov.n++; if (raw > (gov.lvl ? 50 : mobile ? 36 : 25)) gov.s++;
      if (gov.lvl === 0 && gov.n >= 40) {
        if (gov.s > gov.n / 2) {
          gov.lvl = 1; gov.t0 = now; window.__fxGov = 1;
          if (renderer.getPixelRatio() > 1) { renderer.setPixelRatio(1); renderer.setSize(vw, vh, false); if (composer) { composer.setPixelRatio(1); composer.setSize(vw, vh); } }
          noBloom = true;
        }
        gov.n = 0; gov.s = 0;
      } else if (gov.lvl === 1 && gov.n >= 60) {
        if (window.__fxBuilt && now - gov.t0 > 3000) gov.bad = gov.s > gov.n / 2 ? gov.bad + 1 : 0;
        gov.n = 0; gov.s = 0;
        if (gov.bad >= 2) { window.__fxGov = 2; try { sessionStorage.setItem('fxoff', '1'); } catch (e) {} rollback(); return; }
      }
    }
    // --- zone: si disegna solo la parte di palestra che la camera puo' vedere
    W.Z.bags.visible = u < 4.7; W.Z.rings.visible = u > 2.7; W.u = u;
    W.Z.fit.visible = u > 4.7 && u < iFin + 0.4 && !(u > IDX.campioni - 0.5 && u < IDX.esce);   // dall'angolo dei campioni gli attrezzi sullo sfondo distraggono
    W.Z.cor.visible = u > IDX.fitness - 0.6 && u < IDX.campioni - 0.15; if (u > IDX.fitness - 0.6) W.story.load();
    W.story.setLit(sstep(IDX.cornici - 0.45, IDX.famiglia - 0.15, u));
    if (W.tspot) W.tspot.intensity = 40 * sstep(IDX.gallery + 0.3, IDX.campioni - 0.1, u) * (1 - sstep(IDX.risultati + 0.2, IDX.esce + 0.3, u));

    // --- pugno: legato alla tappa, quindi reversibile
    const aim = sstep(0.35, 1.25, u), back = sstep(0.7, 1.45, u), hit = sstep(1.45, K_HIT, u), after = sstep(2.05, 2.7, u);
    const contact = sstep(K_HIT - 0.1, K_HIT, u) * (1 - sstep(2.05, 2.55, u));   // 1 finche' le nocche premono sul sacco
    if (prevU < K_HIT && u >= K_HIT) { bag.v += 0.8; shake = 1; hitAge = 0; squash = 1; }
    prevU = u;
    bag.v += (-28 * bag.a - 3 * bag.v) * dt; bag.a += bag.v * dt;
    // rotazione positiva = il sacco si allontana dal guantone; finche' c'e' contatto non puo' tornargli addosso
    const push = 0.03 * contact, rot = Math.max(push + bag.a * 0.16, push - 0.05 * (1 - contact));
    W.bagPivot.rotation.x = rot;
    squash *= Math.exp(-dt * 7); W.bagPivot.scale.set(1 + 0.04 * squash, 1, 1 - 0.08 * squash);
    const g = W.glove, idle = 1 - aim;
    // il guantone si ferma sulla pelle e la segue mentre il sacco cede (1,45 m = distanza tra perno e punto colpito)
    g.position.set(lerp(0, 0.02, aim), 1.45 + Math.sin(t * 1.1) * 0.012 * idle - 0.03 * aim, lerp(0.3, 0.58, back) - 0.88 * hit * hit + 0.38 * after - (rot - push) * 1.45 * contact);
    // a riposo il guantone sta dritto, di tre quarti, come in una foto di prodotto; poi si abbassa e punta il sacco
    g.rotation.order = 'YXZ';
    g.rotation.set(lerp(-1.25, 0, aim) + 0.22 * back * (1 - hit), lerp(3.0 + Math.sin(t * 0.5) * 0.16, Math.PI, aim) + GYAW * hit, lerp(0.12, 0, aim) + GROLL * hit);
    g.scale.setScalar(1.2 * (1 - sstep(2.3, 2.85, u)));              // dopo il colpo il guantone esce di scena
    shake *= Math.exp(-dt * 9); hitAge += dt;
    const pa = hitAge / 0.45;
    for (const s of W.puff) { if (pa >= 1) { s.visible = false; continue; } s.visible = true; s.position.set(0, 1.42, -0.4).addScaledVector(s.userData.d, 0.03 + pa * 0.3); const sc = 0.03 + pa * 0.13; s.scale.set(sc, sc, 1); s.material.opacity = (1 - pa) * (1 - pa) * 0.6; }
    for (const fn of W.tick) fn(t);

    // --- camera
    posC.getPoint(clamp(u / N, 0, 1), P); tgtC.getPoint(clamp(u / N, 0, 1), T);
    ptr.x += (ptr.tx - ptr.x) * 0.05; ptr.y += (ptr.ty - ptr.y) * 0.05;
    const d = P.distanceTo(T);
    tmp.subVectors(P, T).cross(cam.up).normalize();
    P.addScaledVector(tmp, ptr.x * d * 0.035); P.y -= ptr.y * d * 0.02;
    P.x += Math.sin(t * 0.31) * d * 0.006; P.y += Math.sin(t * 0.23 + 1) * d * 0.004;
    if (shake > 0.01) { P.x += Math.sin(t * 90) * 0.014 * shake; P.y += Math.cos(t * 70) * 0.012 * shake; P.addScaledVector(tmp.subVectors(T, P).normalize(), 0.06 * shake); }
    cam.position.copy(P); cam.lookAt(T);
    cam.fov = mix('fov', f, i); cam.updateProjectionMatrix();
    cam.projectionMatrix.elements[8] = -mix('sx', f, i); cam.projectionMatrix.elements[9] = -mix('sy', f, i);
    cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();

    // --- luci: la principale segue il punto guardato (a scatti di un texel, cosi' l'ombra non "nuota"); nel finale lascia spazio al cono
    const fin = sstep(iFin - 1.6, iFin - 0.3, u) * (1 - sstep(iFin + 1, iFin + 2, u));
    st.key.intensity = lerp(1.7, 0.3, fin); W.cone.material.opacity = 0.34 * fin; if (W.dust) { W.dust.material.opacity = 0.5 * fin; W.dust.rotation.y = t * 0.03; }
    const S = d < 4 ? 3 : d < 9 ? 7 : 14, sc = st.key.shadow.camera;
    if (sc.right !== S) { sc.left = -S; sc.right = S; sc.top = S; sc.bottom = -S; sc.updateProjectionMatrix(); }
    const ts = (2 * S) / 2048, lx = Math.round(T.x / ts) * ts, lz = Math.round(T.z / ts) * ts;
    st.key.target.position.set(lx, 0, lz); st.key.target.updateMatrixWorld(); st.key.position.set(lx + 4, 9, lz + 6);
    if (W.spot.castShadow) W.spot.shadow.needsUpdate = fin > 0.01;
    if (bloom) bloom.strength = lerp(0.4, 0.5, fin);

    if (composer && !noBloom) composer.render(); else renderer.render(scene, cam);
    dbg.u = +u.toFixed(2); dbg.vis = +vis.toFixed(2); dbg.calls = renderer.info.render.calls; dbg.tris = renderer.info.render.triangles;
    window.__fxDone = test && Math.abs(u - uT) < 1e-3 ? uT : null;
  }
  resize();
  requestAnimationFrame(loop);
  // il resto del mondo (ring, attrezzi, corridoio, campioni, gong) nasce adesso, un pezzo per volta nei momenti liberi
  const idle = () => new Promise((r) => (window.requestIdleCallback ? requestIdleCallback(() => r(), { timeout: 500 }) : setTimeout(r, 80)));
  for (const fn of W.later) { await idle(); if (dead) return; let z = null; try { z = fn(); } catch (e) { console.error(e); } await nap(); if (z) await comp(z); }
  window.__fxBuilt = true;
}
start();
