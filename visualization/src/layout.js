import * as THREE from 'three';

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

function fibonacciSphere(n, radius) {
  const points = [];
  for (let i = 0; i < n; i++) {
    const theta = Math.acos(1 - 2 * (i + 0.5) / n);
    const phi = 2 * Math.PI * i / GOLDEN_RATIO;
    points.push(new THREE.Vector3(
      radius * Math.sin(theta) * Math.cos(phi),
      radius * Math.cos(theta),
      radius * Math.sin(theta) * Math.sin(phi)
    ));
  }
  return points;
}

export function computeLayout(notes, sections) {
  const sectionRadius = 52;
  const sectionCenters = fibonacciSphere(sections.length, sectionRadius);
  const sectionMap = new Map(sections.map((s, i) => [s.id, { center: sectionCenters[i], section: s }]));

  const notePositions = new Map();

  // Group notes by section
  const notesBySec = new Map();
  for (const note of notes) {
    if (!notesBySec.has(note.section)) notesBySec.set(note.section, []);
    notesBySec.get(note.section).push(note);
  }

  for (const [secId, secNotes] of notesBySec) {
    const info = sectionMap.get(secId);
    if (!info) continue;
    const { center } = info;
    const spread = Math.max(6, Math.sqrt(secNotes.length) * 3.8);
    const pts = fibonacciSphere(secNotes.length, spread);

    for (let i = 0; i < secNotes.length; i++) {
      const jitter = new THREE.Vector3(
        (Math.random() - 0.5) * 2.5,
        (Math.random() - 0.5) * 2.5,
        (Math.random() - 0.5) * 2.5
      );
      notePositions.set(secNotes[i].id, pts[i].clone().add(center).add(jitter));
    }
  }

  return { notePositions, sectionCenters, sectionMap };
}
