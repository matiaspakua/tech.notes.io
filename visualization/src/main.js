import { Atlas } from './atlas.js';
import gsap from 'gsap';

// ── GRAIN CANVAS ──────────────────────────────────────────────────────────────
function buildGrain() {
  const canvas = document.getElementById('grain');
  if (!canvas) return;
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

let atlas = null;

// ── INIT — single rAF to let loading screen paint, then build ─────────────────
requestAnimationFrame(() => {
  const loadSub  = document.getElementById('loading-sub');
  const loadEl   = document.getElementById('loading');
  const svgEl    = document.getElementById('atlas');

  const report = (msg) => { if (loadSub) loadSub.textContent = msg; };
  const fail   = (err) => {
    const m = err?.message || String(err);
    if (loadSub) { loadSub.textContent = '✗ ' + m; loadSub.style.color = '#ff6b6b'; }
    console.error('[Atlas]', err);
  };

  try {
    report('Computing topology…');
    atlas = new Atlas(svgEl);
    window.__atlas = atlas;
    report('Ready');
  } catch (err) {
    fail(err);
    return;
  }

  // Use CSS opacity transition to dismiss (no GSAP needed for loading)
  loadEl.style.transition = 'opacity 0.5s ease';
  loadEl.style.opacity = '0';
  setTimeout(() => {
    loadEl.style.display = 'none';
    atlas.entrance();
  }, 550);
});

// ── SEARCH ────────────────────────────────────────────────────────────────────
let searchDebounce;
document.getElementById('search').addEventListener('input', function() {
  clearTimeout(searchDebounce);
  const q = this.value;
  searchDebounce = setTimeout(() => atlas?.search(q), 80);
});
document.getElementById('search').addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { this.value = ''; atlas?.search(''); this.blur(); }
});

document.getElementById('reset-btn').addEventListener('click', () => {
  atlas?.resetView();
  const s = document.getElementById('search');
  s.value = '';
  atlas?.search('');
});

window.addEventListener('resize', buildGrain);
