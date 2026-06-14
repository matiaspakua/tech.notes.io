import * as THREE from 'three';
import { NODE_VERT, NODE_FRAG, CONN_VERT, CONN_FRAG, STAR_VERT, STAR_FRAG, NEBULA_VERT, NEBULA_FRAG, BG_NEBULA_VERT, BG_NEBULA_FRAG } from './shaders.js';
import { SECTIONS, NOTES, CONNECTIONS } from './data.js';
import { computeLayout } from './layout.js';

const BASE_URL = 'https://matiaspakua.github.io/tech.notes.io/';

export class Universe {
  constructor(scene) {
    this.scene = scene;
    this.time = 0;

    this.layout = computeLayout(NOTES, SECTIONS);
    this.noteIndex = new Map(NOTES.map((n, i) => [n.id, i]));
    this.sectionColors = new Map(SECTIONS.map(s => [s.id, new THREE.Color(s.color)]));

    // Build connection lookup: note id → set of connected note ids
    this.connectionSet = new Map();
    for (const [a, b] of CONNECTIONS) {
      if (!this.connectionSet.has(a)) this.connectionSet.set(a, new Set());
      if (!this.connectionSet.has(b)) this.connectionSet.set(b, new Set());
      this.connectionSet.get(a).add(b);
      this.connectionSet.get(b).add(a);
    }

    this._buildBackgroundNebula();
    this._buildStarfield();
    this._buildNebulae();
    this._buildNodes();
    this._buildConnections();
    this._buildSectionLabels();
  }

  _buildBackgroundNebula() {
    const geo = new THREE.SphereGeometry(380, 48, 48);
    this.bgNebulaMat = new THREE.ShaderMaterial({
      vertexShader: BG_NEBULA_VERT,
      fragmentShader: BG_NEBULA_FRAG,
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.scene.add(new THREE.Mesh(geo, this.bgNebulaMat));
  }

  _buildStarfield() {
    const N = 3500;
    const pos = new Float32Array(N * 3);
    const sizes = new Float32Array(N);
    const randoms = new Float32Array(N);

    for (let i = 0; i < N; i++) {
      const r = 200 + Math.random() * 300;
      const theta = Math.random() * Math.PI;
      const phi = Math.random() * Math.PI * 2;
      pos[i*3]   = r * Math.sin(theta) * Math.cos(phi);
      pos[i*3+1] = r * Math.cos(theta);
      pos[i*3+2] = r * Math.sin(theta) * Math.sin(phi);
      sizes[i] = 0.5 + Math.random() * 2;
      randoms[i] = Math.random();
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

    this.starMat = new THREE.ShaderMaterial({
      vertexShader: STAR_VERT,
      fragmentShader: STAR_FRAG,
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.scene.add(new THREE.Points(geo, this.starMat));
  }

  _buildNebulae() {
    const { sectionCenters, sectionMap } = this.layout;
    this.nebulaMats = [];

    for (const section of SECTIONS) {
      const info = sectionMap.get(section.id);
      if (!info) continue;
      const center = info.center;
      const N = Math.floor(section.count * 18);
      const spread = Math.max(8, Math.sqrt(section.count) * 4.5);

      const pos = new Float32Array(N * 3);
      const sizes = new Float32Array(N);
      const randoms = new Float32Array(N);

      for (let i = 0; i < N; i++) {
        const theta = Math.random() * Math.PI;
        const phi = Math.random() * Math.PI * 2;
        const r = spread * (0.3 + Math.random() * 0.7);
        pos[i*3]   = center.x + r * Math.sin(theta) * Math.cos(phi);
        pos[i*3+1] = center.y + r * Math.cos(theta);
        pos[i*3+2] = center.z + r * Math.sin(theta) * Math.sin(phi);
        sizes[i] = 0.8 + Math.random() * 1.5;
        randoms[i] = Math.random();
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
      geo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

      const color = new THREE.Color(section.color);
      const mat = new THREE.ShaderMaterial({
        vertexShader: NEBULA_VERT,
        fragmentShader: NEBULA_FRAG,
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: color }
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      this.nebulaMats.push(mat);
      this.scene.add(new THREE.Points(geo, mat));
    }
  }

  _buildNodes() {
    const N = NOTES.length;
    const positions = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);
    const sizes = new Float32Array(N);
    const randoms = new Float32Array(N);
    const selected = new Float32Array(N);

    const minW = Math.min(...NOTES.map(n => n.words));
    const maxW = Math.max(...NOTES.map(n => n.words));

    for (let i = 0; i < N; i++) {
      const note = NOTES[i];
      const pos = this.layout.notePositions.get(note.id) || new THREE.Vector3();
      positions[i*3]   = pos.x;
      positions[i*3+1] = pos.y;
      positions[i*3+2] = pos.z;

      const color = this.sectionColors.get(note.section) || new THREE.Color('#ffffff');
      colors[i*3]   = color.r;
      colors[i*3+1] = color.g;
      colors[i*3+2] = color.b;

      const t = (note.words - minW) / (maxW - minW + 1);
      sizes[i] = 2.5 + t * 5.5;
      randoms[i] = Math.random();
      selected[i] = 0;
    }

    this.nodeGeo = new THREE.BufferGeometry();
    this.nodeGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.nodeGeo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    this.nodeGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    this.nodeGeo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
    this.nodeGeo.setAttribute('aSelected', new THREE.BufferAttribute(selected, 1));

    this.nodeMat = new THREE.ShaderMaterial({
      vertexShader: NODE_VERT,
      fragmentShader: NODE_FRAG,
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.nodePoints = new THREE.Points(this.nodeGeo, this.nodeMat);
    this.scene.add(this.nodePoints);

    // Store original positions for raycasting
    this.notePositionsArray = positions;
  }

  _buildConnections() {
    // Background connections (faint, always visible)
    const bgConnCount = Math.min(CONNECTIONS.length, 800);
    const bgSample = CONNECTIONS.slice().sort(() => Math.random() - 0.5).slice(0, bgConnCount);

    const bgPos = [];
    const bgProg = [];

    for (const [a, b] of bgSample) {
      const posA = this.layout.notePositions.get(a);
      const posB = this.layout.notePositions.get(b);
      if (!posA || !posB) continue;
      const STEPS = 12;
      for (let s = 0; s <= STEPS; s++) {
        const t = s / STEPS;
        bgPos.push(posA.x + (posB.x - posA.x) * t, posA.y + (posB.y - posA.y) * t, posA.z + (posB.z - posA.z) * t);
        bgProg.push(t);
      }
    }

    const bgGeo = new THREE.BufferGeometry();
    bgGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(bgPos), 3));
    bgGeo.setAttribute('aProgress', new THREE.BufferAttribute(new Float32Array(bgProg), 1));

    // Build line indices
    const indices = [];
    const segLen = 13;
    const lineCount = bgPos.length / 3 / segLen;
    for (let l = 0; l < lineCount; l++) {
      for (let s = 0; s < segLen - 1; s++) {
        indices.push(l * segLen + s, l * segLen + s + 1);
      }
    }
    bgGeo.setIndex(indices);

    this.bgConnMat = new THREE.ShaderMaterial({
      vertexShader: CONN_VERT,
      fragmentShader: CONN_FRAG,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#64ffda') },
        uAlpha: { value: 0.06 },
        uPulse: { value: 0.0 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.bgConnections = new THREE.LineSegments(bgGeo, this.bgConnMat);
    this.scene.add(this.bgConnections);

    // Highlighted connections (shown on hover)
    this.hlConnGroup = new THREE.Group();
    this.scene.add(this.hlConnGroup);

    // Store for pulse animations
    this.pulseGroup = new THREE.Group();
    this.scene.add(this.pulseGroup);

    this.allConnectionLines = CONNECTIONS;
  }

  _buildSectionLabels() {
    // Section labels are rendered as HTML (see ui.js) — we just expose positions
    this.sectionLabelData = SECTIONS.map(s => {
      const info = this.layout.sectionMap.get(s.id);
      return { ...s, position: info ? info.center : new THREE.Vector3() };
    });
  }

  _ensureHoverRing() {
    if (this._hoverRing) return;
    const geo = new THREE.TorusGeometry(1.5, 0.06, 16, 48);
    const mat = new THREE.MeshBasicMaterial({ color: '#64ffda', transparent: true, opacity: 0, depthWrite: false });
    this._hoverRing = new THREE.Mesh(geo, mat);
    this.scene.add(this._hoverRing);
  }

  tickHoverRing(time) {
    if (!this._hoverRing) return;
    this._hoverRing.rotation.x = time * 1.1;
    this._hoverRing.rotation.y = time * 0.7;
  }

  setHoveredNote(noteId) {
    // Reset selected attribute
    const selArr = this.nodeGeo.getAttribute('aSelected').array;
    selArr.fill(0);

    this._ensureHoverRing();

    if (noteId === null) {
      this._clearHighlightConnections();
      this.nodeGeo.getAttribute('aSelected').needsUpdate = true;
      const gsap = window._gsap;
      if (gsap) gsap.to(this._hoverRing.material, { opacity: 0, duration: 0.2 });
      return;
    }

    const idx = this.noteIndex.get(noteId);
    if (idx !== undefined) selArr[idx] = 1;

    // Highlight connected notes dimly
    const connected = this.connectionSet.get(noteId) || new Set();
    for (const cid of connected) {
      const ci = this.noteIndex.get(cid);
      if (ci !== undefined) selArr[ci] = 0.3;
    }
    this.nodeGeo.getAttribute('aSelected').needsUpdate = true;

    // Position hover ring
    const pos = this.layout.notePositions.get(noteId);
    const note = NOTES[idx];
    const color = this.sectionColors.get(note?.section) || new THREE.Color('#64ffda');
    if (pos && this._hoverRing) {
      this._hoverRing.position.copy(pos);
      this._hoverRing.material.color.copy(color);
      const gsap = window._gsap;
      if (gsap) gsap.to(this._hoverRing.material, { opacity: 0.85, duration: 0.25 });
    }

    this._buildHighlightConnections(noteId, connected);
  }

  setActiveSection(sectionId) {
    const selArr = this.nodeGeo.getAttribute('aSelected').array;
    for (let i = 0; i < NOTES.length; i++) {
      selArr[i] = NOTES[i].section === sectionId ? 0.5 : 0;
    }
    this.nodeGeo.getAttribute('aSelected').needsUpdate = true;
    this._clearHighlightConnections();
  }

  clearFilters() {
    const selArr = this.nodeGeo.getAttribute('aSelected').array;
    selArr.fill(0);
    this.nodeGeo.getAttribute('aSelected').needsUpdate = true;
    this._clearHighlightConnections();
  }

  searchNotes(query) {
    const selArr = this.nodeGeo.getAttribute('aSelected').array;
    if (!query) {
      selArr.fill(0);
    } else {
      const q = query.toLowerCase();
      for (let i = 0; i < NOTES.length; i++) {
        const n = NOTES[i];
        const match = n.title.toLowerCase().includes(q) ||
                      n.tags.some(t => t.toLowerCase().includes(q));
        selArr[i] = match ? 1 : -0.7;
      }
    }
    this.nodeGeo.getAttribute('aSelected').needsUpdate = true;
    this._clearHighlightConnections();
  }

  _buildHighlightConnections(noteId, connected) {
    this._clearHighlightConnections();
    const posA = this.layout.notePositions.get(noteId);
    if (!posA) return;

    const secColor = this.sectionColors.get(NOTES[this.noteIndex.get(noteId)]?.section) || new THREE.Color('#64ffda');

    for (const cid of connected) {
      const posB = this.layout.notePositions.get(cid);
      if (!posB) continue;

      const STEPS = 20;
      const pts = [];
      const progs = [];
      for (let s = 0; s <= STEPS; s++) {
        const t = s / STEPS;
        pts.push(posA.x + (posB.x - posA.x) * t, posA.y + (posB.y - posA.y) * t, posA.z + (posB.z - posA.z) * t);
        progs.push(t);
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3));
      geo.setAttribute('aProgress', new THREE.BufferAttribute(new Float32Array(progs), 1));
      const idx = [];
      for (let s = 0; s < STEPS; s++) idx.push(s, s + 1);
      geo.setIndex(idx);

      const mat = new THREE.ShaderMaterial({
        vertexShader: CONN_VERT,
        fragmentShader: CONN_FRAG,
        uniforms: {
          uTime: { value: this.time },
          uColor: { value: secColor.clone() },
          uAlpha: { value: 0.75 },
          uPulse: { value: 1.0 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      this.hlConnGroup.add(new THREE.LineSegments(geo, mat));
    }
  }

  _clearHighlightConnections() {
    this.hlConnGroup.clear();
  }

  showAllConnections(show) {
    this.bgConnMat.uniforms.uAlpha.value = show ? 0.18 : 0.06;
  }

  fireSynapticPulse() {
    const conn = CONNECTIONS[Math.floor(Math.random() * CONNECTIONS.length)];
    const [a, b] = conn;
    const posA = this.layout.notePositions.get(a);
    const posB = this.layout.notePositions.get(b);
    if (!posA || !posB) return;

    const noteA = NOTES[this.noteIndex.get(a)];
    const color = this.sectionColors.get(noteA?.section) || new THREE.Color('#64ffda');

    // Create a glowing sphere that travels along the path
    const geo = new THREE.SphereGeometry(0.18, 8, 8);
    const mat = new THREE.MeshBasicMaterial({ color: color.clone(), transparent: true, opacity: 0.9 });
    const sphere = new THREE.Mesh(geo, mat);
    this.pulseGroup.add(sphere);

    // Animate with gsap (imported by main.js and attached to window for convenience)
    const progress = { t: 0 };
    const gsap = window._gsap;
    if (!gsap) {
      this.pulseGroup.remove(sphere);
      return;
    }

    gsap.to(progress, {
      t: 1,
      duration: 1.8 + Math.random() * 1.2,
      ease: 'power1.inOut',
      onUpdate: () => {
        const t = progress.t;
        sphere.position.set(
          posA.x + (posB.x - posA.x) * t,
          posA.y + (posB.y - posA.y) * t,
          posA.z + (posB.z - posA.z) * t
        );
        mat.opacity = Math.sin(Math.PI * t) * 0.9;
      },
      onComplete: () => {
        this.pulseGroup.remove(sphere);
        geo.dispose();
        mat.dispose();
      }
    });
  }

  tick(time) {
    this.time = time;
    this.nodeMat.uniforms.uTime.value = time;
    this.starMat.uniforms.uTime.value = time;
    this.bgNebulaMat.uniforms.uTime.value = time;
    this.bgConnMat.uniforms.uTime.value = time;
    for (const mat of this.nebulaMats) mat.uniforms.uTime.value = time;
    for (const child of this.hlConnGroup.children) {
      if (child.material?.uniforms?.uTime) child.material.uniforms.uTime.value = time;
    }
  }

  // Expose notes and positions for raycasting + UI
  get notes() { return NOTES; }
  get sections() { return SECTIONS; }
  getNotePosition(id) { return this.layout.notePositions.get(id); }
  getBaseUrl() { return BASE_URL; }
}
