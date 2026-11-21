// Pavimento palestra 60x60 m: gomma nerissima con griglia "blueprint" verde neon, anti-aliasata (fwidth) e senza shimmer.
// Origine al centro, y = 0. Riceve ombre e nebbia (MeshStandardMaterial + onBeforeCompile).
export function build(THREE, opts = {}) {
  const gridOpacity = opts.gridOpacity ?? 0.35;
  const color = new THREE.Color(opts.color ?? 0x39ff14);
  const group = new THREE.Group();

  // grana della gomma (EPDM): rumore fine come roughnessMap, ripetuto. 512 px.
  const N = 512, c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d'), img = g.createImageData(N, N);
  let s = 12345; const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let i = 0; i < N * N; i++) {
    let v = 150 + (rnd() - 0.5) * 80; if (rnd() > 0.97) v = 60 + rnd() * 40; // puntini di granulato piu' opachi/lucidi
    img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const grain = new THREE.CanvasTexture(c); grain.wrapS = grain.wrapT = THREE.RepeatWrapping; grain.anisotropy = 8;
  grain.repeat.set(60, 60); // ~1 ripetizione per metro

  const mat = new THREE.MeshStandardMaterial({
    color: 0x060707, roughness: 0.7, metalness: 0.0, roughnessMap: grain, envMapIntensity: 0.4,
  });
  const uniforms = {
    uGridColor: { value: color }, uGridOpacity: { value: gridOpacity },
    uFadeNear: { value: 7.0 }, uFadeFar: { value: 30.0 },
  };
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vFloorPos;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvFloorPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vFloorPos;
uniform vec3 uGridColor; uniform float uGridOpacity; uniform float uFadeNear; uniform float uFadeFar;
// copertura anti-aliasata di una linea (larghezza W metri) su una griglia di passo 'step' metri.
// Filtro per-asse con fwidth: se la cella diventa < ~4 px la linea sfuma (niente moire' a incidenza radente).
vec2 gridCov(vec2 p, float step, float W) {
  vec2 x = p / step;
  vec2 fw = max(fwidth(x), vec2(1e-5));
  vec2 d = abs(fract(x - 0.5) - 0.5);                // distanza (in celle) dalla linea piu' vicina
  vec2 wc = vec2(W / step);
  vec2 hw = max(wc, fw) * 0.5;                        // larghezza minima = 1 pixel
  vec2 cov = clamp((hw + fw * 0.5 - d) / fw, 0.0, 1.0);
  vec2 fade = 1.0 - smoothstep(vec2(0.12), vec2(0.45), fw); // celle troppo piccole: via
  return cov * fade * clamp(wc / fw, vec2(0.35), vec2(1.0));
}`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
{
  vec2 p = vFloorPos.xz;
  float r = length(p);
  float radial = 1.0 - smoothstep(uFadeNear, uFadeFar, r);
  radial *= radial;
  vec2 m5 = gridCov(p, 5.0, 0.026);
  vec2 m1 = gridCov(p, 1.0, 0.012);
  vec2 m25 = gridCov(p, 0.25, 0.005);
  float a = max(max(m25.x, m25.y) * 0.30, max(max(m1.x, m1.y) * 0.75, max(m5.x, m5.y) * 1.0));
  // piccolo alone attorno alle linee principali (glow di neon sul gomma)
  float glow = 0.0;
  { vec2 x = p; vec2 d = abs(fract(x - 0.5) - 0.5); vec2 fw = fwidth(x);
    vec2 gl = exp(-d * 38.0) * (1.0 - smoothstep(vec2(0.1), vec2(0.4), fw));
    glow = max(gl.x, gl.y) * 0.07; }
  float k = (a + glow) * radial * uGridOpacity;
  totalEmissiveRadiance += uGridColor * k * 0.85;
  diffuseColor.rgb = mix(diffuseColor.rgb, uGridColor * 0.15, clamp(k, 0.0, 1.0) * 0.5);
}`);
  };
  mat.customProgramCacheKey = () => 'pavimento_grid_v1';

  const geo = new THREE.PlaneGeometry(60, 60, 1, 1); geo.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, mat); mesh.receiveShadow = true; mesh.castShadow = false; mesh.name = 'pavimento';
  group.add(mesh);
  group.userData.setGridOpacity = (v) => { uniforms.uGridOpacity.value = v; };
  return group;
}
