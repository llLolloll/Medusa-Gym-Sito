// Tubo neon in canalina nera + alone finto (additivo, billboard cilindrico attorno all'asse X). Nessuna luce reale.
// Origine al centro del tubo, tubo lungo X. Il tubo guarda verso +Z, la canalina sta dietro (-Z): ruotare per montare a soffitto/parete.
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export function build(THREE, { length = 3, color = 0x39ff14, intensity = 1 } = {}) {
  const group = new THREE.Group();
  const L = length, R = 0.0115;
  const col = new THREE.Color(color);

  // --- canalina: profilo a U estruso lungo X (aperto verso +Z), testate e due staffe ---
  const W = 0.062, D = 0.034, T = 0.004;
  const sh = new THREE.Shape();
  sh.moveTo(-W / 2, -D / 2); sh.lineTo(W / 2, -D / 2); sh.lineTo(W / 2, D / 2); sh.lineTo(W / 2 - T, D / 2);
  sh.lineTo(W / 2 - T, -D / 2 + T); sh.lineTo(-W / 2 + T, -D / 2 + T); sh.lineTo(-W / 2 + T, D / 2); sh.lineTo(-W / 2, D / 2); sh.closePath();
  // il profilo vive in XY (x = larghezza, y = profondita'): lo estrudo e poi lo ruoto cosi' che l'estrusione vada su X e la profondita' su Z
  const ch = new THREE.ExtrudeGeometry(sh, { depth: L + 0.04, bevelEnabled: false });
  ch.translate(0, 0, -(L + 0.04) / 2);          // estrusione lungo Z centrata
  ch.rotateY(Math.PI / 2);                     // Z -> X ; x(larghezza) -> -Z...
  ch.rotateX(Math.PI / 2);                     // larghezza -> Y, profondita'(y) -> -Z... (verificato a occhio nello shot)
  const parts = [ch];
  const cap = (x) => { const g = new THREE.BoxGeometry(0.012, W + 0.008, D + 0.004); g.translate(x, 0, 0); return g; };
  parts.push(cap(-(L + 0.04) / 2 - 0.006), cap((L + 0.04) / 2 + 0.006));
  for (const x of [-L * 0.32, L * 0.32]) { // supporti del tubo
    const b = new THREE.BoxGeometry(0.014, 0.02, 0.012); b.translate(x, 0, -D / 2 + T + 0.006 + 0.0); parts.push(b);
  }
  const housingGeo = mergeGeometries(parts.map(g => { const n = g.index ? g.toNonIndexed() : g; n.deleteAttribute('uv'); return n; }), false);
  const housing = new THREE.Mesh(housingGeo, new THREE.MeshStandardMaterial({ color: 0x0b0c0d, roughness: 0.45, metalness: 0.6 }));
  housing.castShadow = true; housing.receiveShadow = true; group.add(housing);

  // --- tubo: capsula (cilindro + semisfere), shader: nucleo caldo al centro, bordo del colore pieno ---
  const tubeGeo = new THREE.CapsuleGeometry(R, L - 2 * R, 3, 12); tubeGeo.rotateZ(Math.PI / 2);
  tubeGeo.translate(0, 0, 0.004);
  const tubeMat = new THREE.ShaderMaterial({
    uniforms: { uCol: { value: col }, uInt: { value: intensity } },
    vertexShader: `varying vec3 vN; varying vec3 vV;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uCol; uniform float uInt; varying vec3 vN; varying vec3 vV;
      void main(){ float f = clamp(dot(normalize(vN), normalize(vV)), 0.0, 1.0);
        float core = pow(f, 2.2);
        vec3 c = mix(uCol * 1.15, mix(uCol, vec3(1.0), 0.78) * 1.5, core) * uInt;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
    toneMapped: false, fog: false,
  });
  const tube = new THREE.Mesh(tubeGeo, tubeMat); tube.castShadow = false; tube.receiveShadow = false; group.add(tube);

  // --- alone finto: piano che ruota attorno all'asse X verso la camera, SDF di capsula, additivo ---
  const gw = L + 1.4, gh = 1.3;
  const glowGeo = new THREE.PlaneGeometry(gw, gh);
  const glowMat = new THREE.ShaderMaterial({
    uniforms: { uCol: { value: col }, uInt: { value: intensity }, uHalf: { value: L / 2 } },
    vertexShader: `varying vec2 vP;
      void main(){
        vec3 c = (modelMatrix * vec4(0.0,0.0,0.004,1.0)).xyz;
        vec3 ax = normalize((modelMatrix * vec4(1.0,0.0,0.0,0.0)).xyz);
        vec3 toCam = cameraPosition - c;
        vec3 side = cross(ax, toCam);
        float sl = length(side);
        side = sl < 1e-4 ? vec3(0.0,1.0,0.0) : side / sl;
        vec3 w = c + ax * position.x + side * position.y;
        vP = position.xy;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
      }`,
    fragmentShader: `uniform vec3 uCol; uniform float uInt; uniform float uHalf; varying vec2 vP;
      void main(){
        float dx = max(abs(vP.x) - uHalf, 0.0);
        float d = length(vec2(dx, vP.y));
        float g = exp(-d * 7.5) * 0.55 + exp(-d * 2.6) * 0.28 + exp(-d * 18.0) * 0.5;
        // finestra: azzera ai bordi del piano
        vec2 e = abs(vP) / vec2(${(gw / 2).toFixed(3)}, ${(gh / 2).toFixed(3)});
        g *= (1.0 - smoothstep(0.55, 1.0, e.x)) * (1.0 - smoothstep(0.45, 1.0, e.y));
        gl_FragColor = vec4(uCol * g * uInt * 0.55, g);
        #include <colorspace_fragment>
      }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: false, side: THREE.DoubleSide,
  });
  const glow = new THREE.Mesh(glowGeo, glowMat); glow.frustumCulled = false; glow.renderOrder = 5; glow.castShadow = false; glow.receiveShadow = false;
  group.add(glow);

  group.userData.setIntensity = (v) => { tubeMat.uniforms.uInt.value = v; glowMat.uniforms.uInt.value = v; };
  return group;
}
