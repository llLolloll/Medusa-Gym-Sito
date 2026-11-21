// Palco comune: renderer, ambiente, luci, pavimento. Usato sia dal banco prova sia dalla scena finale.
import { THREE } from './three_slim.js';
export const GREEN = 0x39ff14;
export function createRenderer(canvas, { mobile = false, strict = false } = {}) {
  // strict: se il dispositivo non ha accelerazione grafica vera si rinuncia (la pagina resta quella normale)
  const r = new THREE.WebGLRenderer({ canvas, antialias: mobile, alpha: false, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: strict });
  r.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2));
  r.outputColorSpace = THREE.SRGBColorSpace;
  r.toneMapping = THREE.ACESFilmicToneMapping;
  r.toneMappingExposure = 1.05;
  r.shadowMap.enabled = !mobile;
  r.shadowMap.type = THREE.PCFSoftShadowMap;
  return r;
}
// Ambiente per i riflessi: stanza scura con pannelli luminosi (softbox bianco in alto, tubi neon verdi ai lati).
export function createEnvMap(renderer) {
  const s = new THREE.Scene();
  const room = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 20), new THREE.MeshBasicMaterial({ color: 0x050607, side: THREE.BackSide }));
  s.add(room);
  const panel = (w, h, col, int, pos, rot) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(int), side: THREE.DoubleSide }));
    m.position.set(...pos); m.rotation.set(...rot); s.add(m);
  };
  panel(7, 3.5, 0xffffff, 6, [0, 4.9, 1], [Math.PI / 2, 0, 0]);
  panel(4, 2.2, 0xffffff, 3, [-6, 2.5, 6], [0, Math.PI * 0.75, 0]);
  panel(0.35, 7, GREEN, 9, [9.9, 1.5, 0], [0, -Math.PI / 2, Math.PI / 2]);
  panel(0.35, 7, GREEN, 9, [-9.9, 1.2, -2], [0, Math.PI / 2, Math.PI / 2]);
  panel(6, 0.3, GREEN, 7, [0, 0.4, -9.9], [0, 0, 0]);
  const pm = new THREE.PMREMGenerator(renderer);
  const tex = pm.fromScene(s, 0.03).texture; pm.dispose();
  return tex;
}
export function createStage(scene, renderer, { mobile = false, floor = true } = {}) {
  scene.environment = createEnvMap(renderer);
  scene.environmentIntensity = 0.9;
  scene.fog = new THREE.FogExp2(0x030504, 0.028);
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(4, 9, 6); key.castShadow = !mobile;
  key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02;
  const c = key.shadow.camera; c.left = -14; c.right = 14; c.top = 14; c.bottom = -14; c.near = 0.5; c.far = 40;
  scene.add(key);
  const rim = new THREE.DirectionalLight(GREEN, 1.6); rim.position.set(-6, 3, -7); scene.add(rim);
  const fill = new THREE.HemisphereLight(0x9fffa0, 0x020302, 0.25); scene.add(fill);
  let floorMesh = null;
  if (floor) {
    floorMesh = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), new THREE.MeshStandardMaterial({ color: 0x0b0d0c, roughness: 0.42, metalness: 0.0 }));
    floorMesh.rotation.x = -Math.PI / 2; floorMesh.receiveShadow = true; scene.add(floorMesh);
  }
  return { key, rim, fill, floor: floorMesh };
}
