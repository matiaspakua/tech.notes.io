import { Atlas } from './atlas.js';
import gsap from 'gsap';

// ── GRAIN CANVAS ──────────────────────────────────────────────────────────────
function buildGrain() {
  const canvas = document.getElementById('grain');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const id = ctx.createImageData(canvas.width, canvas.height);
  for (let i = 0; i < id.data.length; i += 4) {
    const v = Math.floor(Math.random() * 22);
    id.data[i] = v; id.data[i+1] = v; id.data[i+2] = v; id.data[i+3] = 255;
  }
  ctx.putImageData(id, 0, 0);
}

buildGrain();

// ── ATLAS INIT ────────────────────────────────────────────────────────────────
const svgEl = document.getElementById('atlas');
const atlas = new Atlas(svgEl);
window.__atlas = atlas; // for breadcrumb onclick

// ── LOADING DISMISS ───────────────────────────────────────────────────────────
gsap.to('#loading-bar', { width: '100%', duration: 0.3, delay: 0.1, onComplete() {
  gsap.to('#loading', {
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    onComplete() {
      document.getElementById('loading').style.display = 'none';
      atlas.entrance();
    }
  });
}});

// ── SEARCH ────────────────────────────────────────────────────────────────────
const searchEl = document.getElementById('search');
let searchDebounce;
searchEl.addEventListener('input', () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => atlas.search(searchEl.value), 80);
});
searchEl.addEventListener('keydown', e => { if (e.key === 'Escape') { searchEl.value = ''; atlas.search(''); } });

// ── RESET BUTTON ──────────────────────────────────────────────────────────────
document.getElementById('reset-btn').addEventListener('click', () => {
  atlas.resetView();
  searchEl.value = '';
  atlas.search('');
});

// ── RESIZE ────────────────────────────────────────────────────────────────────
window.addEventListener('resize', () => {
  buildGrain();
  // SVG viewBox is coordinate-system-based, no resize needed
});
