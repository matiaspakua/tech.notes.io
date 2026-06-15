# Motion Design para la Web

Skill para agentes AI orientada a crear sitios web de alto impacto visual mediante motion design, creative coding e interactive web design. Diseñada para producir experiencias web modernas, inmersivas, rápidas y mantenibles usando herramientas libres y open source.

---

## Propósito

Esta skill guía la creación de webs visualmente sobresalientes, con un stack coherente de animación, tipografía, gráficos, texturas, composición, interacción y rendimiento.

Objetivos:

- Construir experiencias web tipo premium, editoriales, inmersivas o inspiradas en estándares de showcase.
- Priorizar consistencia visual, rendimiento, accesibilidad y control técnico.
- Usar librerías open source maduras, compatibles entre sí y mantenibles.
- Traducir principios de motion design y UX avanzada en decisiones concretas de implementación.

No está pensada para sitios corporativos genéricos, layouts de plantilla o interfaces sin dirección visual clara.

---

## Cuándo usar esta skill

Usar esta skill cuando el usuario pida alguna de estas metas:

- Una web impresionante, inmersiva o muy visual.
- Un sitio con scroll narrativo, microinteracciones y animación avanzada.
- Una experiencia tipo Awwwards, portfolio premium o landing de alto nivel.
- Una web con 3D, WebGL, texturas, transiciones sofisticadas o storytelling interactivo.
- Un sistema visual donde tipografía, motion, composición y gráficos trabajen como una sola dirección de arte.

No usar esta skill como base principal para:

- Dashboards CRUD sin ambición visual.
- Formularios administrativos convencionales.
- Sitios donde el objetivo principal sea solo velocidad de entrega sin refinamiento visual.

---

## Resultado esperado

La salida debe ser una web que cumpla estas propiedades:

- Dirección visual clara y no genérica.
- Motion intencional, no decorativo.
- Tipografía con jerarquía fuerte.
- Ritmo visual entre secciones.
- Profundidad mediante capas, contraste, textura, luz o 3D cuando proceda.
- Navegación comprensible pese a la riqueza visual.
- Rendimiento razonable y degradación progresiva.
- Accesibilidad suficiente para producción real.

La meta no es “poner efectos”. La meta es construir una experiencia coherente donde diseño, interacción y tecnología se refuercen mutuamente.

---

## Principios operativos

### 1. El concepto manda

No elegir librerías, animaciones o estilos antes de fijar el concepto visual.

Definir primero:

- Tipo de sitio: portfolio, landing, brand experience, editorial, producto, instalación digital.
- Tono: sobrio, futurista, brutalista, cinemático, táctil, experimental, elegante, técnico.
- Densidad visual: mínima, balanceada o intensa.
- Papel del motion: utilitario, expresivo, narrativo o inmersivo.
- Nivel de tridimensionalidad: plano, pseudo-3D, WebGL parcial o escena 3D protagonista.

Toda decisión posterior debe derivar de eso.

### 2. El motion debe comunicar

Toda animación debe cumplir al menos una función:

- Guiar atención.
- Explicar jerarquía.
- Dar continuidad espacial.
- Indicar causa y efecto.
- Aumentar sensación material o profundidad.
- Crear ritmo narrativo.

Eliminar toda animación que no aporte una de esas funciones.

### 3. La composición precede al efecto

Una web mediocre con animaciones sigue siendo mediocre. Primero resolver:

- Grid.
- Jerarquía tipográfica.
- Espaciado.
- Contraste.
- Orden de lectura.
- Agrupación.
- Proporción entre bloques.

Solo después añadir motion, texturas, 3D y efectos.

### 4. Una o dos ideas fuertes por pantalla

Evitar acumulación de recursos vistosos. Una pantalla potente suele apoyarse en una combinación dominante:

- Tipografía + scroll reveal.
- Imagen/3D + cámara/scroll.
- Capas translúcidas + textura + parallax.
- Gráficos animados + narrativa.

Demasiadas ideas simultáneas destruyen el foco.

### 5. Rendimiento como restricción creativa

La calidad visual no justifica interacciones lentas, scroll roto o jank. El rendimiento es parte del diseño.

---

## Stack recomendado

Usar por defecto este stack coherente, moderno y open source.

### Base de aplicación

- Next.js: framework principal para sitios modernos con routing, SSR, optimización y buena integración con React.
- React: base de composición e interactividad.
- TypeScript: obligatorio cuando el proyecto tenga complejidad media o alta.
- Vite: alternativa válida para sitios más pequeños o experimentales sin necesidad de SSR.

### Estilos y sistema visual

- Tailwind CSS: para velocidad, consistencia y diseño por tokens.
- CSS moderno nativo: variables, container queries, clamp, color-mix, nesting.
- OKLCH: espacio de color recomendado para paletas y gradientes más controlables.

### Motion principal

- GSAP: motor principal de animación.
- GSAP ScrollTrigger: para secuencias ligadas al scroll.
- Motion One: alternativa ligera para microinteracciones o proyectos más simples.
- Framer Motion: útil en React para transiciones de componentes, pero no debe sustituir a GSAP cuando el foco es una experiencia visual avanzada.

### Scroll y navegación cinética

- Lenis: smooth scroll moderno y compatible con GSAP.

### 3D, WebGL y visuales avanzados

- Three.js: estándar para 3D en web.
- React Three Fiber: capa recomendada si el proyecto usa React.
- Drei: utilidades para acelerar trabajo con React Three Fiber.
- OGL: alternativa minimalista si se quiere más control y menos abstracción.
- shaders GLSL o WebGL custom: para distorsiones, ruido, displacement, blobs, fondos vivos y transiciones materiales.

### Data visualization

- D3: para gráficos custom de alto nivel.
- Observable Plot: para visualización elegante con menos complejidad.
- Chart.js: solo si se requiere simplicidad y no se necesita dirección visual sofisticada.

### Tipografía

- Fontshare: fuente prioritaria por calidad y menor saturación estética.
- Google Fonts: soporte adicional para familias variables bien mantenidas.
- Variable fonts: recomendadas por flexibilidad de peso, ancho y rendimiento.

### Iconografía y vectores

- Lucide: iconografía principal.
- SVG inline: obligatorio para logos, máscaras, paths y elementos animables.
- Lottie solo si existe una razón clara; evitar dependencia excesiva de assets exportados si la misma solución puede construirse con SVG/CSS/JS.

### Texturas y profundidad

- SVG filters.
- CSS masks.
- mix-blend-mode.
- backdrop-filter.
- ruido procedural en SVG o canvas.
- gradientes en OKLCH.

---

## Instalación base recomendada

Para un stack React/Next.js:

```bash
npx create-next-app@latest my-site --typescript --eslint --app
cd my-site
npm install gsap @studio-freight/lenis three @react-three/fiber @react-three/drei lucide-react d3
npm install -D tailwindcss postcss autoprefixer
