import gsap from 'gsap';
import * as THREE from 'three';

export class UI {
  constructor(universe, camera, renderer) {
    this.universe = universe;
    this.camera = camera;
    this.renderer = renderer;
    this.activeSection = null;
    this.pulseCount = 0;
    this._vec3 = new THREE.Vector3();

    this._buildLegend();
    this._buildSectionLabels();
    this._bindSearch();
    this._bindControls();
  }

  _buildSectionLabels() {
    const container = document.createElement('div');
    container.id = 'section-labels';
    container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:5;';
    document.body.appendChild(container);
    this._labelElements = [];

    for (const section of this.universe.sectionLabelData) {
      const el = document.createElement('div');
      el.style.cssText = `
        position:absolute;
        pointer-events:auto;
        cursor:pointer;
        display:flex;
        align-items:center;
        gap:5px;
        padding:3px 8px;
        border-radius:100px;
        background:rgba(7,7,17,0.7);
        border:1px solid ${section.color}33;
        color:${section.color};
        font-family:'JetBrains Mono',monospace;
        font-size:10px;
        letter-spacing:0.05em;
        white-space:nowrap;
        opacity:0;
        transform:translate(-50%,-50%);
        transition:border-color 0.2s,background 0.2s;
        backdrop-filter:blur(4px);
      `;
      el.innerHTML = `<span>${section.icon}</span><span>${section.label}</span><span style="opacity:0.5">${section.count}</span>`;
      el.addEventListener('click', () => {
        const item = document.querySelector(`[data-section-id="${section.id}"]`);
        if (item) this._onSectionClick(section.id, item);
      });
      el.dataset.sectionId = section.id;
      container.appendChild(el);
      this._labelElements.push({ el, position: section.position, sectionId: section.id });
    }
    this._labelsVisible = false;
  }

  updateSectionLabels() {
    if (!this._labelsVisible) return;
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (const { el, position } of this._labelElements) {
      this._vec3.copy(position);
      this._vec3.project(this.camera);
      const x = (this._vec3.x * 0.5 + 0.5) * width;
      const y = (-(this._vec3.y * 0.5) + 0.5) * height;
      if (this._vec3.z < 1) {
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        el.style.display = 'flex';
      } else {
        el.style.display = 'none';
      }
    }
  }

  showSectionLabels() {
    this._labelsVisible = true;
    for (const { el } of this._labelElements) {
      gsap.to(el, { opacity: 1, duration: 0.5, delay: Math.random() * 0.4 });
    }
  }

  _buildLegend() {
    const container = document.getElementById('legend-items');
    for (const section of this.universe.sections) {
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.dataset.sectionId = section.id;
      item.innerHTML = `
        <div class="legend-dot" style="background:${section.color};color:${section.color}"></div>
        <span class="legend-label" title="${section.label}">${section.icon} ${section.label}</span>
        <span class="legend-count">${section.count}</span>
      `;
      item.addEventListener('click', () => this._onSectionClick(section.id, item));
      container.appendChild(item);
    }
  }

  _onSectionClick(sectionId, item) {
    const allItems = document.querySelectorAll('.legend-item');
    if (this.activeSection === sectionId) {
      // Deselect
      this.activeSection = null;
      allItems.forEach(el => el.classList.remove('active'));
      this.universe.clearFilters();
    } else {
      this.activeSection = sectionId;
      allItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      this.universe.setActiveSection(sectionId);
      // Fly camera toward section center
      const info = this.universe.layout.sectionMap.get(sectionId);
      if (info) this._flyToPosition(info.center, 35);
    }
  }

  _bindSearch() {
    const input = document.getElementById('search');
    input.addEventListener('input', () => {
      this.universe.searchNotes(input.value.trim());
      if (input.value.trim()) {
        this.activeSection = null;
        document.querySelectorAll('.legend-item').forEach(el => el.classList.remove('active'));
      }
    });
  }

  _bindControls() {
    const btnRotate = document.getElementById('btn-rotate');
    const btnConnections = document.getElementById('btn-connections');
    const btnReset = document.getElementById('btn-reset');

    btnRotate.addEventListener('click', () => {
      this.onToggleRotate?.();
      btnRotate.classList.toggle('active');
    });

    let showAllConn = false;
    btnConnections.addEventListener('click', () => {
      showAllConn = !showAllConn;
      this.universe.showAllConnections(showAllConn);
      btnConnections.classList.toggle('active', showAllConn);
    });

    btnReset.addEventListener('click', () => {
      this._flyToDefault();
      this.activeSection = null;
      document.querySelectorAll('.legend-item').forEach(el => el.classList.remove('active'));
      this.universe.clearFilters();
      document.getElementById('search').value = '';
    });
  }

  showNote(note) {
    if (!note) {
      this._hideInfoPanel();
      this._hideTooltip();
      return;
    }
    const section = this.universe.sections.find(s => s.id === note.section);
    const color = section?.color || '#64ffda';

    document.getElementById('info-section-bar').style.background = color;
    document.getElementById('info-section-label').style.color = color;
    document.getElementById('info-section-label').textContent = `${section?.icon || ''} ${section?.label || note.section}`;
    document.getElementById('info-title').textContent = note.title;

    const tagsEl = document.getElementById('info-tags');
    tagsEl.innerHTML = '';
    for (const tag of note.tags) {
      const span = document.createElement('span');
      span.className = 'info-tag';
      span.textContent = tag;
      tagsEl.appendChild(span);
    }

    document.getElementById('info-words').innerHTML = `<span>⬡</span> ${note.words.toLocaleString()} words`;
    document.getElementById('info-diagram').innerHTML = note.has_diagram ? '<span style="color:#50fa7b">◈</span> diagram' : '';

    const noteUrl = this.universe.getBaseUrl() + note.path.replace('.md', '').replace(/ /g, '_');
    document.getElementById('info-open').href = noteUrl;

    this._showInfoPanel();
    this.universe.setHoveredNote(note.id);
  }

  clearNote() {
    this._hideInfoPanel();
    this._hideTooltip();
    this.universe.setHoveredNote(null);
  }

  _showInfoPanel() {
    const panel = document.getElementById('info-panel');
    gsap.to(panel, { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', pointerEvents: 'auto' });
  }

  _hideInfoPanel() {
    const panel = document.getElementById('info-panel');
    gsap.to(panel, { opacity: 0, x: 20, duration: 0.2, ease: 'power2.in', pointerEvents: 'none' });
  }

  showTooltip(title, x, y) {
    const tip = document.getElementById('tooltip');
    tip.textContent = title;
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
    gsap.to(tip, { opacity: 1, duration: 0.15 });
  }

  _hideTooltip() {
    gsap.to(document.getElementById('tooltip'), { opacity: 0, duration: 0.1 });
  }

  revealUI() {
    gsap.to('#header', { opacity: 1, duration: 0.8, delay: 0.2, pointerEvents: 'auto' });
    gsap.to('#legend', { opacity: 1, duration: 0.8, delay: 0.4, pointerEvents: 'auto' });
    gsap.to('#controls', { opacity: 1, duration: 0.8, delay: 0.6, pointerEvents: 'auto' });
    gsap.to('#pulse-counter', { opacity: 1, duration: 0.8, delay: 0.8 });
    setTimeout(() => this.showSectionLabels(), 1200);
  }

  incrementPulse() {
    this.pulseCount++;
    document.getElementById('pulse-num').textContent = this.pulseCount;
    gsap.fromTo('#pulse-num', { scale: 1.3, color: '#64ffda' }, { scale: 1, color: '#64ffda', duration: 0.4 });
  }

  _flyToPosition(target, distance = 40) {
    const dir = target.clone().normalize();
    const dest = dir.multiplyScalar(distance).add(target);
    gsap.to(this.camera.position, {
      x: dest.x, y: dest.y, z: dest.z,
      duration: 1.8,
      ease: 'power3.inOut',
      onUpdate: () => this.camera.lookAt(target)
    });
  }

  _flyToDefault() {
    gsap.to(this.camera.position, {
      x: 0, y: 20, z: 120,
      duration: 1.8,
      ease: 'power3.inOut'
    });
  }
}
