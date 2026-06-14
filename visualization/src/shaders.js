export const NODE_VERT = /* glsl */`
  uniform float uTime;
  attribute float aSize;
  attribute float aRandom;
  attribute float aSelected;
  attribute vec3 aColor;

  varying vec3 vColor;
  varying float vSelected;
  varying float vRandom;

  void main() {
    vColor = aColor;
    vSelected = aSelected;
    vRandom = aRandom;

    float breathe = sin(uTime * 1.2 + aRandom * 6.2832) * 0.12 + 1.0;
    float hoverScale = 1.0 + aSelected * 0.8;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * breathe * hoverScale * (280.0 / -mvPosition.z);
    gl_PointSize = clamp(gl_PointSize, 2.0, 60.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const NODE_FRAG = /* glsl */`
  uniform float uTime;

  varying vec3 vColor;
  varying float vSelected;
  varying float vRandom;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;

    // Core: bright white hot center
    float core = pow(1.0 - dist * 2.0, 4.0);
    // Halo: smooth glow in section color
    float halo = pow(max(0.0, 1.0 - dist * 2.0), 2.0) * 0.5;
    // Outer ring
    float ring = smoothstep(0.38, 0.42, dist) * (1.0 - smoothstep(0.44, 0.5, dist));
    ring *= (0.4 + sin(uTime * 3.0 + vRandom * 6.28) * 0.3);

    float alpha = core * 0.95 + halo * 0.6 + ring * 0.7;
    // Selected: 1=hover, 0.3=connected, 0=default, -0.7=search-no-match, 0.5=section
    float alphaMult = vSelected < 0.0
      ? max(0.04, 1.0 + vSelected * 1.3)
      : 1.0 + vSelected * 0.7;
    alpha *= alphaMult;
    alpha = clamp(alpha, 0.0, 1.0);

    vec3 color = mix(vColor, vec3(1.0), core * 0.7);
    color += vColor * ring * 0.5;
    color = mix(color, vColor * 1.5, vSelected * 0.3);

    gl_FragColor = vec4(color, alpha);
  }
`;

export const CONN_VERT = /* glsl */`
  attribute float aProgress;
  varying float vProgress;

  void main() {
    vProgress = aProgress;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const CONN_FRAG = /* glsl */`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uAlpha;
  uniform float uPulse;

  varying float vProgress;

  void main() {
    float pulse = fract(vProgress - uTime * 0.4);
    float glow = smoothstep(0.0, 0.08, pulse) * (1.0 - smoothstep(0.08, 0.35, pulse));
    float baseLine = 0.08;
    float alpha = (baseLine + glow * 0.9 * uPulse) * uAlpha;
    alpha = clamp(alpha, 0.0, 1.0);
    vec3 color = mix(uColor, vec3(1.0), glow * 0.5 * uPulse);
    gl_FragColor = vec4(color, alpha);
  }
`;

export const STAR_VERT = /* glsl */`
  attribute float aSize;
  attribute float aRandom;
  uniform float uTime;

  void main() {
    float twinkle = sin(uTime * 2.0 + aRandom * 12.0) * 0.5 + 0.5;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (twinkle * 0.5 + 0.5);
    gl_PointSize = clamp(gl_PointSize, 0.5, 3.5);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const STAR_FRAG = /* glsl */`
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;
    float alpha = pow(1.0 - dist * 2.0, 2.5) * 0.8;
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
  }
`;

export const BG_NEBULA_VERT = /* glsl */`
  varying vec2 vUv;
  varying vec3 vPos;

  void main() {
    vUv = uv;
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const BG_NEBULA_FRAG = /* glsl */`
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vPos;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x),
               mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0; float a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.1; a *= 0.5; }
    return v;
  }

  void main() {
    vec2 uv = vUv * 2.5 + uTime * 0.008;
    float n1 = fbm(uv);
    float n2 = fbm(uv + vec2(n1 * 2.3, n1 * 1.7) + uTime * 0.006);
    float n3 = fbm(uv + vec2(n2 * 1.8, n2 * 2.1));

    // Dracula palette deep tones
    vec3 c1 = vec3(0.08, 0.02, 0.22);   // deep purple
    vec3 c2 = vec3(0.0, 0.09, 0.20);    // deep teal
    vec3 c3 = vec3(0.12, 0.0, 0.10);    // deep magenta
    vec3 c4 = vec3(0.0, 0.04, 0.06);    // near black

    vec3 color = mix(c4, mix(c1, c2, n1), n3 * 0.7);
    color = mix(color, c3, n2 * 0.25);
    color *= 0.55;

    // Edge vignette
    float edgeDist = length(vUv - 0.5) * 2.0;
    color *= 1.0 - edgeDist * 0.3;

    float alpha = clamp(n3 * 0.4, 0.0, 0.4);
    gl_FragColor = vec4(color, alpha);
  }
`;

export const NEBULA_VERT = /* glsl */`
  attribute float aSize;
  attribute float aRandom;
  uniform float uTime;

  void main() {
    float drift = sin(uTime * 0.3 + aRandom * 6.28) * 0.5;
    vec3 pos = position + normalize(position) * drift;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (150.0 / -mvPosition.z);
    gl_PointSize = clamp(gl_PointSize, 0.5, 4.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const NEBULA_FRAG = /* glsl */`
  uniform vec3 uColor;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;
    float alpha = pow(1.0 - dist * 2.0, 3.0) * 0.35;
    gl_FragColor = vec4(uColor, alpha);
  }
`;
