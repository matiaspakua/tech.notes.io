/**
 * Knowledge Atlas — D3 + GSAP knowledge visualization
 *
 * Scientific foundations:
 * - Cognitive Load Theory (Sweller): progressive disclosure, max 16 items at tier 1
 * - Dual Coding Theory (Paivio): spatial position + text labels as parallel encodings
 * - Method of Loci: fixed section positions build hippocampal spatial memory
 * - Spreading Activation (Collins & Quillian): hover reveals semantic neighbors
 * - Tufte: high data-ink ratio, no decorative elements
 * - Preattentive vision: max 5 hues (≤7 for reliable encoding)
 */

import * as d3 from 'd3';
import gsap from 'gsap';
import { SECTIONS, NOTES, CONNECTIONS } from './data.js';

// ── DOMAIN GROUPS — 5 colors (≤7 for preattentive processing) ────────────────
const GROUPS = [
  { id: 'technical', label: 'Technical',   color: '#79c0ff',
    sections: ['development','software_engineering','sw_and_system_architecture','testing'] },
  { id: 'learning',  label: 'Learning',    color: '#bd93f9',
    sections: ['master_direccion_tecnologica','master_ti','cursos','books','sw_eng_specialization'] },
  { id: 'ai',        label: 'AI & Data',   color: '#50fa7b',
    sections: ['artificial_intelligence'] },
  { id: 'human',     label: 'Leadership',  color: '#D4A853',
    sections: ['leadership','we_are_developers_wc_2024','general_topic'] },
  { id: 'frontier',  label: 'Frontier',    color: '#ff79c6',
    sections: ['projects','space','cybersecurity'] },
];

const sectionColor = new Map();
const sectionGroup = new Map();
for (const g of GROUPS) {
  for (const sid of g.sections) {
    sectionColor.set(sid, g.color);
    sectionGroup.set(sid, g);
  }
}

// ── LAYOUT CONSTANTS ──────────────────────────────────────────────────────────
const W = 1000, H = 1000;
const CX = W / 2, CY = H / 2;
const RING_R = 320;  // section centroids radius

const NODE_R_MIN = 2.8;
const NODE_R_MAX = 7;

export class Atlas {
  constructor(svgEl) {
    this.svgEl = svgEl;
    this.svg = d3.select(svgEl);
    this.state = 'overview'; // 'overview' | 'domain' | 'note'
    this.activeDomain = null;
    this.activeNote = null;

    this._prepare();
    this._simulate();
    this._buildSVG();
  }

  // ── DATA PREPARATION ─────────────────────────────────────────────────────────

  _prepare() {
    this.noteMap = new Map(NOTES.map(n => [n.id, n]));

    // Connection lookup
    this.connTo = new Map();
    for (const [a, b] of CONNECTIONS) {
      if (!this.connTo.has(a)) this.connTo.set(a, []);
      if (!this.connTo.has(b)) this.connTo.set(b, []);
      this.connTo.get(a).push(b);
      this.connTo.get(b).push(a);
    }

    // Section centroids — fixed ring positions (memory palace anchors)
    this.secCentroid = new Map(SECTIONS.map((s, i) => {
      const angle = -Math.PI / 2 + (i / SECTIONS.length) * 2 * Math.PI;
      return [s.id, { x: CX + RING_R * Math.cos(angle), y: CY + RING_R * Math.sin(angle), angle }];
    }));

    // Node size scale (square root → area proportional to words)
    const wordExtent = d3.extent(NOTES, d => d.words);
    this.sizeScale = d3.scaleSqrt().domain(wordExtent).range([NODE_R_MIN, NODE_R_MAX]);

    // Degree count (for secondary size encoding)
    this.degree = new Map(NOTES.map(n => [n.id, (this.connTo.get(n.id) || []).length]));
  }

  // ── FORCE SIMULATION ─────────────────────────────────────────────────────────

  _simulate() {
    // Seeded initial positions near section centroids
    const seed = (id) => {
      let h = 0;
      for (const c of id) h = (h * 31 + c.charCodeAt(0)) & 0x7fffffff;
      return h / 0x7fffffff;
    };

    this.simNodes = NOTES.map(n => {
      const c = this.secCentroid.get(n.section) || { x: CX, y: CY };
      const s = seed(n.id);
      return {
        id: n.id,
        section: n.section,
        x: c.x + (s - 0.5) * 50,
        y: c.y + ((seed(n.id + 'y') - 0.5) * 50),
        r: this.sizeScale(n.words)
      };
    });

    const centMap = this.secCentroid;

    const sim = d3.forceSimulation(this.simNodes)
      .force('cluster', clusterForce(centMap, 0.28))
      .force('charge', d3.forceManyBody().strength(-18))
      .force('collision', d3.forceCollide(d => d.r + 4).iterations(2))
      .stop();

    // Progress reporting for loading bar
    const TICKS = 320;
    for (let i = 0; i < TICKS; i++) {
      sim.tick();
      if (i % 40 === 0) {
        const pct = Math.round(i / TICKS * 100);
        const bar = document.getElementById('loading-bar');
        if (bar) bar.style.width = pct + '%';
      }
    }

    this.nodePos = new Map(this.simNodes.map(n => [n.id, { x: n.x, y: n.y }]));

    // Convex hulls per section
    this.hullMap = new Map();
    for (const sec of SECTIONS) {
      const pts = NOTES
        .filter(n => n.section === sec.id)
        .map(n => { const p = this.nodePos.get(n.id); return [p.x, p.y]; });
      if (pts.length >= 3) {
        this.hullMap.set(sec.id, d3.polygonHull(pts));
      }
    }
  }

  // ── SVG BUILD ────────────────────────────────────────────────────────────────

  _buildSVG() {
    const svg = this.svg;
    svg.attr('viewBox', `0 0 ${W} ${H}`);

    // Defs: grid pattern + glow filter
    const defs = svg.append('defs');

    defs.append('pattern')
      .attr('id', 'grid')
      .attr('width', 44).attr('height', 44)
      .attr('patternUnits', 'userSpaceOnUse')
      .call(p => {
        p.append('path')
          .attr('d', 'M 44 0 L 0 0 0 44')
          .attr('fill', 'none')
          .attr('stroke', 'rgba(255,255,255,0.028)')
          .attr('stroke-width', 0.5);
      });

    defs.append('filter').attr('id', 'glow')
      .call(f => {
        f.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'blur');
        f.append('feMerge').call(m => {
          m.append('feMergeNode').attr('in', 'blur');
          m.append('feMergeNode').attr('in', 'SourceGraphic');
        });
      });

    // Background grid
    svg.append('rect').attr('width', W).attr('height', H).attr('fill', 'url(#grid)');

    // Root group (for breathing animation)
    this.root = svg.append('g').attr('id', 'root');

    // Layers (bottom → top)
    this.layerHulls    = this.root.append('g').attr('id', 'layer-hulls');
    this.layerConns    = this.root.append('g').attr('id', 'layer-conns').style('opacity', 0);
    this.layerNodes    = this.root.append('g').attr('id', 'layer-nodes');
    this.layerLabDom   = this.root.append('g').attr('id', 'layer-lab-dom');
    this.layerLabNote  = this.root.append('g').attr('id', 'layer-lab-note').style('opacity', 0);

    this._renderHulls();
    this._renderNodes();
    this._renderDomainLabels();
    this._renderNoteLabels();
    this._setupInteractions();
    this._buildLegend();
    this._entrance();
  }

  // ── RENDER LAYERS ────────────────────────────────────────────────────────────

  _renderHulls() {
    for (const sec of SECTIONS) {
      const hull = this.hullMap.get(sec.id);
      if (!hull) continue;
      const color = sectionColor.get(sec.id) || '#ffffff';

      // Expand hull outward from centroid
      const cx = d3.mean(hull, d => d[0]);
      const cy = d3.mean(hull, d => d[1]);
      const PAD = 20;
      const padded = hull.map(([x, y]) => {
        const dx = x - cx, dy = y - cy;
        const len = Math.sqrt(dx*dx + dy*dy) || 1;
        return [cx + dx * (1 + PAD/len), cy + dy * (1 + PAD/len)];
      });

      this.layerHulls.append('path')
        .datum(padded)
        .attr('id', `hull-${sec.id}`)
        .attr('class', 'domain-hull')
        .attr('data-section', sec.id)
        .attr('d', pts => `M ${pts.map(p => p.join(',')).join(' L ')} Z`)
        .attr('fill', `${color}10`)
        .attr('stroke', `${color}45`)
        .attr('stroke-width', 1.2)
        .attr('stroke-linejoin', 'round')
        .style('cursor', 'pointer')
        .style('opacity', 0);
    }
  }

  _renderNodes() {
    for (const note of NOTES) {
      const pos = this.nodePos.get(note.id);
      if (!pos) continue;
      const color = sectionColor.get(note.section) || '#ffffff';
      const r = this.sizeScale(note.words);

      this.layerNodes.append('circle')
        .attr('id', `node-${note.id}`)
        .attr('class', 'note-node')
        .attr('data-id', note.id)
        .attr('cx', pos.x)
        .attr('cy', pos.y)
        .attr('r', r)
        .attr('fill', color)
        .style('cursor', 'pointer')
        .style('opacity', 0);
    }
  }

  _renderDomainLabels() {
    for (const sec of SECTIONS) {
      const c = this.secCentroid.get(sec.id);
      if (!c) continue;
      const color = sectionColor.get(sec.id) || '#ffffff';
      const LABEL_R = RING_R + 62;
      const lx = CX + LABEL_R * Math.cos(c.angle);
      const ly = CY + LABEL_R * Math.sin(c.angle);
      const anchor = lx > CX + 20 ? 'start' : lx < CX - 20 ? 'end' : 'middle';
      const ox = anchor === 'start' ? 6 : anchor === 'end' ? -6 : 0;

      const g = this.layerLabDom.append('g')
        .attr('id', `dom-label-${sec.id}`)
        .attr('class', 'domain-label')
        .attr('data-section', sec.id)
        .attr('transform', `translate(${lx},${ly})`)
        .style('cursor', 'pointer')
        .style('opacity', 0);

      g.append('text')
        .text(sec.icon + ' ' + sec.label.toUpperCase())
        .attr('x', ox).attr('dy', '0em')
        .attr('text-anchor', anchor)
        .attr('font-family', "'JetBrains Mono', monospace")
        .attr('font-size', '7.5px')
        .attr('letter-spacing', '0.12em')
        .attr('fill', color)
        .attr('font-weight', '500');

      g.append('text')
        .text(`${sec.count} notes`)
        .attr('x', ox).attr('dy', '1.6em')
        .attr('text-anchor', anchor)
        .attr('font-family', "'JetBrains Mono', monospace")
        .attr('font-size', '6px')
        .attr('letter-spacing', '0.08em')
        .attr('fill', 'rgba(255,255,255,0.28)');
    }
  }

  _renderNoteLabels() {
    for (const note of NOTES) {
      const pos = this.nodePos.get(note.id);
      if (!pos) continue;
      const short = note.title.length > 24 ? note.title.slice(0, 24) + '…' : note.title;

      // Text with stroke for legibility against any background
      this.layerLabNote.append('text')
        .attr('id', `note-label-${note.id}`)
        .attr('x', pos.x + this.sizeScale(note.words) + 3)
        .attr('y', pos.y + 3)
        .text(short)
        .attr('font-family', "'JetBrains Mono', monospace")
        .attr('font-size', '5.5px')
        .attr('fill', 'rgba(255,255,255,0.78)')
        .attr('stroke', '#070709')
        .attr('stroke-width', '2.5')
        .attr('paint-order', 'stroke')
        .style('pointer-events', 'none');
    }
  }

  _buildLegend() {
    const container = document.getElementById('legend');
    for (const g of GROUPS) {
      const row = document.createElement('div');
      row.className = 'legend-group';
      row.innerHTML = `
        <div class="legend-dot" style="background:${g.color}"></div>
        <div class="legend-label">${g.label}</div>
      `;
      container.appendChild(row);
    }
  }

  // ── INTERACTIONS ─────────────────────────────────────────────────────────────

  _setupInteractions() {
    const self = this;

    // Hull hover + click
    this.layerHulls.selectAll('.domain-hull')
      .on('mouseenter', function() {
        const secId = this.getAttribute('data-section');
        if (self.state === 'overview') self.hoverDomain(secId);
      })
      .on('mouseleave', function() {
        if (self.state === 'overview') self.clearDomainHover();
      })
      .on('click', function(event) {
        const secId = this.getAttribute('data-section');
        self.zoomDomain(secId);
        event.stopPropagation();
      });

    // Domain label hover + click
    this.layerLabDom.selectAll('.domain-label')
      .on('mouseenter', function() {
        const secId = this.getAttribute('data-section');
        if (self.state === 'overview') self.hoverDomain(secId);
      })
      .on('mouseleave', function() {
        if (self.state === 'overview') self.clearDomainHover();
      })
      .on('click', function(event) {
        const secId = this.getAttribute('data-section');
        self.zoomDomain(secId);
        event.stopPropagation();
      });

    // Node hover + click
    this.layerNodes.selectAll('.note-node')
      .on('mouseenter', function() {
        const id = this.getAttribute('data-id');
        self.hoverNote(id);
      })
      .on('mouseleave', function() {
        self.clearNoteHover();
      })
      .on('click', function(event) {
        const id = this.getAttribute('data-id');
        self.selectNote(id);
        event.stopPropagation();
      });

    // SVG click → reset
    this.svg.on('click', () => this.resetView());

    // Keyboard
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.resetView();
    });
  }

  // ── DOMAIN INTERACTIONS ───────────────────────────────────────────────────────

  hoverDomain(secId) {
    gsap.to(`#hull-${secId}`, { opacity: 1, duration: 0.18 });

    const color = sectionColor.get(secId) || '#ffffff';
    d3.select(`#hull-${secId}`)
      .attr('stroke', `${color}90`)
      .attr('fill', `${color}20`);

    // Highlight notes in section, dim others
    for (const note of NOTES) {
      const el = document.getElementById(`node-${note.id}`);
      if (!el) continue;
      if (note.section === secId) {
        gsap.to(el, { opacity: 1, duration: 0.15 });
        gsap.to(el, { attr: { r: this.sizeScale(note.words) * 1.5 }, duration: 0.15 });
      } else {
        gsap.to(el, { opacity: 0.06, duration: 0.15 });
      }
    }
  }

  clearDomainHover() {
    for (const sec of SECTIONS) {
      const color = sectionColor.get(sec.id) || '#ffffff';
      d3.select(`#hull-${sec.id}`)
        .attr('stroke', `${color}45`)
        .attr('fill', `${color}10`);
    }
    for (const note of NOTES) {
      const el = document.getElementById(`node-${note.id}`);
      if (!el) continue;
      gsap.to(el, { opacity: 0.62, duration: 0.25 });
      gsap.to(el, { attr: { r: this.sizeScale(note.words) }, duration: 0.25 });
    }
  }

  zoomDomain(secId) {
    if (this.activeDomain === secId && this.state === 'domain') {
      this.resetView();
      return;
    }

    this.state = 'domain';
    this.activeDomain = secId;

    const secNotes = NOTES.filter(n => n.section === secId);
    const positions = secNotes.map(n => this.nodePos.get(n.id)).filter(Boolean);
    if (!positions.length) return;

    const xs = positions.map(p => p.x);
    const ys = positions.map(p => p.y);
    const MARGIN = 70;
    const x0 = Math.min(...xs) - MARGIN;
    const x1 = Math.max(...xs) + MARGIN;
    const y0 = Math.min(...ys) - MARGIN;
    const y1 = Math.max(...ys) + MARGIN;

    const vb = { x: 0, y: 0, w: W, h: H };
    gsap.to(vb, {
      x: x0, y: y0, w: x1-x0, h: y1-y0,
      duration: 0.85,
      ease: 'power3.inOut',
      onUpdate: () => this.svg.attr('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`)
    });

    // Fade: non-section nodes → very dim, section → bright
    for (const note of NOTES) {
      const el = document.getElementById(`node-${note.id}`);
      if (!el) continue;
      if (note.section === secId) {
        gsap.to(el, { opacity: 1, duration: 0.4, delay: 0.3 });
        gsap.to(el, { attr: { r: this.sizeScale(note.words) }, duration: 0.3 });
      } else {
        gsap.to(el, { opacity: 0.0, duration: 0.3 });
      }
    }

    // Show note labels for this section
    for (const note of NOTES) {
      const el = document.getElementById(`note-label-${note.id}`);
      if (!el) continue;
      el.style.opacity = note.section === secId ? '1' : '0';
    }

    gsap.to('#layer-lab-note', { opacity: 1, duration: 0.5, delay: 0.5 });

    // Dim all hulls except active
    for (const sec of SECTIONS) {
      gsap.to(`#hull-${sec.id}`, {
        opacity: sec.id === secId ? 1 : 0,
        duration: 0.35
      });
    }

    // Dim domain labels
    gsap.to('#layer-lab-dom', { opacity: 0.15, duration: 0.3 });

    // Update header
    const sec = SECTIONS.find(s => s.id === secId);
    const color = sectionColor.get(secId);
    document.getElementById('breadcrumb').innerHTML =
      `<span class="bc-home" onclick="window.__atlas.resetView()">Overview</span>
       <span class="bc-sep">›</span>
       <span class="bc-current" style="color:${color}">${sec?.icon} ${sec?.label}</span>`;
    const resetBtn = document.getElementById('reset-btn');
    gsap.to(resetBtn, { opacity: 1, duration: 0.3, pointerEvents: 'auto' });
    resetBtn.style.pointerEvents = 'auto';
  }

  // ── NOTE INTERACTIONS ────────────────────────────────────────────────────────

  hoverNote(noteId) {
    const note = this.noteMap.get(noteId);
    if (!note) return;

    // Scale up
    const el = document.getElementById(`node-${noteId}`);
    if (el) {
      gsap.to(el, { attr: { r: this.sizeScale(note.words) * 2.2 }, duration: 0.2 });
      gsap.to(el, { opacity: 1, duration: 0.1 });
    }

    // Spreading activation: layer 1
    const layer1 = (this.connTo.get(noteId) || []).slice(0, 18);
    layer1.forEach((cid, i) => {
      const cel = document.getElementById(`node-${cid}`);
      if (cel) gsap.to(cel, { opacity: 0.9, delay: i * 0.025, duration: 0.2 });
    });

    // Spreading activation: layer 2 (slower, dimmer)
    const seen = new Set([noteId, ...layer1]);
    const layer2 = [];
    for (const c1 of layer1.slice(0, 6)) {
      for (const c2 of (this.connTo.get(c1) || [])) {
        if (!seen.has(c2) && layer2.length < 12) { layer2.push(c2); seen.add(c2); }
      }
    }
    layer2.forEach((cid, i) => {
      const cel = document.getElementById(`node-${cid}`);
      if (cel) gsap.to(cel, { opacity: 0.4, delay: 0.3 + i * 0.02, duration: 0.25 });
    });

    // Activation pulse ring (spreading activation visual metaphor)
    const pos = this.nodePos.get(noteId);
    const color = sectionColor.get(note.section) || '#ffffff';
    if (pos) this._pulseRing(pos.x, pos.y, this.sizeScale(note.words), color);

    // Draw connection lines
    this._drawConnLines(noteId, layer1);

    // Info card (hover = non-persistent)
    this._showInfoCard(note, false);
  }

  clearNoteHover() {
    if (this.state === 'note') return; // persistent selection, don't clear

    this.layerConns.selectAll('.conn-line').remove();
    gsap.to(this.layerConns.node(), { opacity: 0, duration: 0.3 });

    // Restore opacities
    for (const note of NOTES) {
      const el = document.getElementById(`node-${note.id}`);
      if (!el) continue;
      const baseOpacity = (this.state === 'domain' && note.section !== this.activeDomain) ? 0 : 0.62;
      gsap.to(el, { opacity: baseOpacity, attr: { r: this.sizeScale(note.words) }, duration: 0.3 });
    }

    this._hideInfoCard();
  }

  selectNote(noteId) {
    const note = this.noteMap.get(noteId);
    if (!note) return;
    this.activeNote = noteId;
    this.state = 'note';
    this._showInfoCard(note, true);
  }

  // ── PULSE RING ────────────────────────────────────────────────────────────────

  _pulseRing(cx, cy, startR, color) {
    const ring = this.layerConns.append('circle')
      .attr('class', 'conn-line')
      .attr('cx', cx).attr('cy', cy)
      .attr('r', startR + 2)
      .attr('fill', 'none')
      .attr('stroke', color)
      .attr('stroke-width', 0.8)
      .attr('opacity', 0.8);

    gsap.to(ring.node(), {
      attr: { r: startR + 28 },
      opacity: 0,
      duration: 0.85,
      ease: 'power2.out',
      onComplete: () => ring.remove()
    });
  }

  // ── CONNECTION LINES ─────────────────────────────────────────────────────────

  _drawConnLines(noteId, connectedIds) {
    const pos = this.nodePos.get(noteId);
    if (!pos) return;

    this.layerConns.selectAll('.conn-line').remove();
    const color = sectionColor.get(this.noteMap.get(noteId)?.section) || '#ffffff';

    connectedIds.slice(0, 15).forEach((cid, i) => {
      const cpos = this.nodePos.get(cid);
      if (!cpos) return;

      // Quadratic bezier slightly curved
      const mx = (pos.x + cpos.x) / 2;
      const my = (pos.y + cpos.y) / 2;
      const curve = 15;
      const qx = mx + (Math.random() - 0.5) * curve;
      const qy = my + (Math.random() - 0.5) * curve;
      const pathD = `M ${pos.x} ${pos.y} Q ${qx} ${qy} ${cpos.x} ${cpos.y}`;

      const path = this.layerConns.append('path')
        .attr('class', 'conn-line')
        .attr('d', pathD)
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 0.9)
        .attr('stroke-opacity', 0);

      const len = path.node().getTotalLength();
      path.attr('stroke-dasharray', len).attr('stroke-dashoffset', len);

      // Pen-trace animation
      gsap.to(path.node(), {
        strokeDashoffset: 0,
        strokeOpacity: 0.55,
        delay: i * 0.045,
        duration: 0.5,
        ease: 'power2.out'
      });
    });

    gsap.to(this.layerConns.node(), { opacity: 1, duration: 0.2 });
  }

  // ── INFO CARD ────────────────────────────────────────────────────────────────

  _showInfoCard(note, persistent) {
    const sec = SECTIONS.find(s => s.id === note.section);
    const color = sectionColor.get(note.section) || '#ffffff';

    document.getElementById('nc-domain').style.color = color;
    document.getElementById('nc-domain').textContent = `${sec?.icon || ''} ${sec?.label || note.section}`;
    document.getElementById('nc-title').textContent = note.title;
    document.getElementById('nc-tags').innerHTML = note.tags.slice(0, 5)
      .map(t => `<span class="nc-tag">${t}</span>`).join('');
    document.getElementById('nc-meta').textContent =
      `${note.words.toLocaleString()} words${note.has_diagram ? ' · ⟁ diagram' : ''}`;

    const url = 'https://matiaspakua.github.io/tech.notes.io/' + note.path.replace('.md', '');
    document.getElementById('nc-link').href = url;

    const card = document.getElementById('note-card');
    card.classList.add('visible');

    gsap.to(card, { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' });
    card.style.pointerEvents = 'auto';
  }

  _hideInfoCard() {
    const card = document.getElementById('note-card');
    card.classList.remove('visible');
    gsap.to(card, { opacity: 0, x: 16, duration: 0.2 });
    card.style.pointerEvents = 'none';
  }

  // ── RESET ────────────────────────────────────────────────────────────────────

  resetView() {
    if (this.state === 'overview') return;
    this.state = 'overview';
    this.activeDomain = null;
    this.activeNote = null;

    // Restore viewBox
    const current = this.svg.attr('viewBox').split(' ').map(Number);
    const vb = { x: current[0], y: current[1], w: current[2], h: current[3] };
    gsap.to(vb, {
      x: 0, y: 0, w: W, h: H,
      duration: 0.75,
      ease: 'power3.inOut',
      onUpdate: () => this.svg.attr('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`)
    });

    // Restore layers
    gsap.to('#layer-lab-dom', { opacity: 1, duration: 0.4 });
    gsap.to('#layer-lab-note', { opacity: 0, duration: 0.2 });
    gsap.to(this.layerConns.node(), { opacity: 0, duration: 0.2 });
    this.layerConns.selectAll('.conn-line').remove();

    for (const sec of SECTIONS) {
      gsap.to(`#hull-${sec.id}`, { opacity: 1, duration: 0.4 });
    }
    for (const note of NOTES) {
      const el = document.getElementById(`node-${note.id}`);
      if (el) {
        gsap.to(el, { opacity: 0.62, attr: { r: this.sizeScale(note.words) }, duration: 0.4 });
      }
    }

    this._hideInfoCard();
    document.getElementById('breadcrumb').innerHTML = `<span class="bc-current">Overview</span>`;
    gsap.to('#reset-btn', { opacity: 0, duration: 0.2 });
    document.getElementById('reset-btn').style.pointerEvents = 'none';
  }

  // ── SEARCH ───────────────────────────────────────────────────────────────────

  search(query) {
    if (!query.trim()) {
      for (const note of NOTES) {
        const el = document.getElementById(`node-${note.id}`);
        if (el) gsap.to(el, { opacity: 0.62, attr: { r: this.sizeScale(note.words) }, duration: 0.2 });
      }
      for (const sec of SECTIONS) {
        gsap.to(`#hull-${sec.id}`, { opacity: 1, duration: 0.2 });
      }
      return;
    }

    const q = query.toLowerCase();
    for (const note of NOTES) {
      const match = note.title.toLowerCase().includes(q) || note.tags.some(t => t.toLowerCase().includes(q));
      const el = document.getElementById(`node-${note.id}`);
      if (el) {
        gsap.to(el, {
          opacity: match ? 1 : 0.04,
          attr: { r: match ? this.sizeScale(note.words) * 1.6 : this.sizeScale(note.words) },
          duration: 0.2
        });
      }
    }
  }

  // ── ENTRANCE ANIMATION ───────────────────────────────────────────────────────

  entrance() {
    const hulls     = Array.from(document.querySelectorAll('.domain-hull'));
    const nodes     = Array.from(document.querySelectorAll('.note-node'));
    const domLabels = Array.from(document.querySelectorAll('.domain-label'));

    const tl = gsap.timeline({ delay: 0.2 });

    // 1. Grid already visible (bg)
    // 2. Hulls appear with stagger
    tl.to(hulls, { opacity: 1, stagger: 0.055, duration: 0.55, ease: 'power2.out' });
    // 3. Notes emerge (staggered by section order)
    tl.to(nodes, { opacity: 0.62, stagger: 0.004, duration: 0.3, ease: 'power2.out' }, '-=0.25');
    // 4. Domain labels
    tl.to(domLabels, { opacity: 1, stagger: 0.04, duration: 0.4, ease: 'power2.out' }, '-=0.2');
    // 5. Instructions
    tl.to('#instructions', { opacity: 1, duration: 0.6 }, '-=0.1');
    // 6. Breathing pulse begins
    tl.call(() => this._breathe());

    return tl;
  }

  _breathe() {
    const root = document.getElementById('root');
    gsap.to(root, {
      scale: 1.008,
      transformOrigin: `${CX}px ${CY}px`,
      duration: 4.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: 0.5
    });
  }
}

// ── CLUSTER FORCE ─────────────────────────────────────────────────────────────

function clusterForce(centroidMap, strength = 0.28) {
  let nodes;
  const force = () => {
    for (const node of nodes) {
      const c = centroidMap.get(node.section);
      if (!c) continue;
      node.vx += (c.x - node.x) * strength * 0.08;
      node.vy += (c.y - node.y) * strength * 0.08;
    }
  };
  force.initialize = _nodes => { nodes = _nodes; };
  return force;
}
