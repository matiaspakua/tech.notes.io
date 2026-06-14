import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import gsap from 'gsap';

import { Universe } from './universe.js';
import { UI } from './ui.js';
import { NOTES } from './data.js';

// Expose gsap globally so Universe can use it for pulse animations
window._gsap = gsap;

// ── RENDERER ──────────────────────────────────────────────────────────────────
const canvas = document.createElement('canvas');
document.getElementById('canvas-container').appendChild(canvas);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;

// ── SCENE & CAMERA ────────────────────────────────────────────────────────────
const scene = new THREE.Scene();
scene.background = new THREE.Color('#070711');
scene.fog = new THREE.FogExp2('#070711', 0.0025);

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 800);
camera.position.set(0, 20, 130);

// ── ORBIT CONTROLS ────────────────────────────────────────────────────────────
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.04;
controls.minDistance = 15;
controls.maxDistance = 250;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.25;
controls.enablePan = false;

// ── POST-PROCESSING ───────────────────────────────────────────────────────────
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.4,   // strength
  0.4,   // radius
  0.0    // threshold — bloom everything
);
composer.addPass(bloomPass);
composer.addPass(new OutputPass());

// ── UNIVERSE & UI ─────────────────────────────────────────────────────────────
const universe = new Universe(scene);
const ui = new UI(universe, camera, renderer);
ui.onToggleRotate = () => { controls.autoRotate = !controls.autoRotate; };

// ── RAYCASTER ─────────────────────────────────────────────────────────────────
const raycaster = new THREE.Raycaster();
raycaster.params.Points.threshold = 1.2;
const mouse = new THREE.Vector2(-9999, -9999);
let hoveredNoteId = null;
let mouseScreenX = 0, mouseScreenY = 0;

window.addEventListener('mousemove', e => {
  mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  mouseScreenX = e.clientX;
  mouseScreenY = e.clientY;
});

// ── SYNAPTIC PULSE TIMER ──────────────────────────────────────────────────────
let pulseTimer = 0;
const PULSE_INTERVAL = 2.2;

// ── SPAWN ANIMATION ───────────────────────────────────────────────────────────
function spawnNodes() {
  const posAttr = universe.nodePoints.geometry.getAttribute('position');
  const originalPositions = posAttr.array.slice();
  const N = NOTES.length;

  // Start all nodes at origin
  for (let i = 0; i < N; i++) {
    posAttr.array[i*3]   = (Math.random() - 0.5) * 5;
    posAttr.array[i*3+1] = (Math.random() - 0.5) * 5;
    posAttr.array[i*3+2] = (Math.random() - 0.5) * 5;
  }
  posAttr.needsUpdate = true;

  // Burst outward with GSAP stagger
  const proxy = { progress: 0 };
  gsap.to(proxy, {
    progress: 1,
    duration: 2.5,
    ease: 'expo.out',
    delay: 0.5,
    onUpdate() {
      const t = proxy.progress;
      for (let i = 0; i < N; i++) {
        const px = posAttr.array[i*3];
        const py = posAttr.array[i*3+1];
        const pz = posAttr.array[i*3+2];
        posAttr.array[i*3]   = px + (originalPositions[i*3]   - px) * t;
        posAttr.array[i*3+1] = py + (originalPositions[i*3+1] - py) * t;
        posAttr.array[i*3+2] = pz + (originalPositions[i*3+2] - pz) * t;
      }
      posAttr.needsUpdate = true;
    },
    onComplete() {
      ui.revealUI();
    }
  });
}

// ── LOADING SEQUENCE ──────────────────────────────────────────────────────────
gsap.to('#loading', {
  opacity: 0,
  duration: 0.6,
  delay: 1.0,
  onComplete() {
    document.getElementById('loading').style.display = 'none';
    spawnNodes();
  }
});

// ── HOVER DETECTION ───────────────────────────────────────────────────────────
function detectHover() {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(universe.nodePoints);

  if (intersects.length > 0) {
    const idx = intersects[0].index;
    const note = NOTES[idx];
    if (note.id !== hoveredNoteId) {
      hoveredNoteId = note.id;
      ui.showNote(note);
      ui.showTooltip(note.title, mouseScreenX, mouseScreenY);
      document.body.style.cursor = 'pointer';
    }
  } else {
    if (hoveredNoteId !== null) {
      hoveredNoteId = null;
      ui.clearNote();
      document.body.style.cursor = 'crosshair';
    }
  }
}

// ── CLICK TO ZOOM ─────────────────────────────────────────────────────────────
canvas.addEventListener('click', () => {
  if (!hoveredNoteId) return;
  const pos = universe.getNotePosition(hoveredNoteId);
  if (!pos) return;
  const dir = pos.clone().normalize();
  const dest = pos.clone().add(dir.multiplyScalar(12));
  gsap.to(camera.position, {
    x: dest.x, y: dest.y, z: dest.z,
    duration: 1.4,
    ease: 'power3.inOut',
    onUpdate: () => controls.target.lerp(pos, 0.05)
  });
});

// ── RESIZE ────────────────────────────────────────────────────────────────────
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
  bloomPass.resolution.set(window.innerWidth, window.innerHeight);
});

// ── ANIMATION LOOP ────────────────────────────────────────────────────────────
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();
  const delta = clock.getDelta ? 0.016 : 0.016;

  controls.update();
  universe.tick(elapsed);
  detectHover();
  ui.updateSectionLabels();

  // Synaptic pulses
  pulseTimer += 0.016;
  if (pulseTimer >= PULSE_INTERVAL) {
    pulseTimer = 0;
    const burstCount = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < burstCount; i++) {
      setTimeout(() => {
        universe.fireSynapticPulse();
        ui.incrementPulse();
      }, i * 180);
    }
    // Heartbeat bloom flash
    gsap.to(bloomPass, { strength: 2.2, duration: 0.15, ease: 'power2.out',
      onComplete: () => gsap.to(bloomPass, { strength: 1.4, duration: 0.6, ease: 'power2.in' })
    });
  }

  // Hover ring spin
  universe.tickHoverRing(elapsed);

  composer.render();
}

animate();
