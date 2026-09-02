---
name: note-content-fixer
description: >-
  Pre-validation content fixer para la base de conocimiento tech.notes.io.
  Úsalo al crear o editar notas en pages/ para mejorar formato, contenido, tags
  y referencias, manteniendo el estilo de escritura personal del autor (Matias
  Miguez). Aplica un template consistente compatible con Obsidian y con el sitio
  GitHub Pages (just-the-docs). Invócalo antes de commitear notas nuevas.
---

# Note Content Fixer

Skill para revisar y mejorar notas de la base de conocimiento **tech.notes.io**
de forma consistente, conservando la voz del autor. Es un *pre-validation
content fixer*: cambios **leves y moderados**, nunca una reescritura.

## Cuándo se aplica

- Al crear una nota nueva en `pages/`.
- Al editar una nota existente de forma sustancial.
- Antes de commitear/pushear notas (validación previa).
- Automáticamente vía el workflow `.github/workflows/note-content-fixer.yml`,
  que abre una PR con las mejoras para que el dueño revise y mergee.

## Principio rector

> Mejorar, no reescribir. Conservar las palabras, ejemplos, reflexiones
> personales y el idioma original (mezcla natural de español e inglés).

No traducir. No inventar contenido. No agregar secciones largas nuevas. No
cambiar opiniones o experiencias personales del autor. Ante la duda, hacer
menos.

## Estilo de escritura del autor (a respetar)

- **Idioma**: mezcla natural de español e inglés; los notas técnicas suelen
  estar en inglés, las de máster/universidad en español. **Mantener el idioma
  que ya tiene la nota.**
- **Tono**: personal, sencillo, profesional. Primera persona ("aquí voy
  recopilando…", "en mi opinión…", "estas son mis notas de…").
- **Resaltados**: usa `<mark style="background: #FFF3A3A6;">texto</mark>`
  (amarillo), `#BBFABBA6` (verde), `#ADCCFFA6` (azul) — estilo Obsidian.
  **Conservarlos.**
- Sin emojis salvo que la nota ya los use.

## Template de una nota

Toda nota en `pages/` debe seguir esta estructura:

```markdown
---
title: "Título descriptivo de la nota"
tags:
  - tag-de-seccion
  - tag-de-tema
  - notas
---

# Título descriptivo de la nota

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

> [!note]
> (Opcional) Contexto breve: de dónde salen estas notas (curso, libro, charla).

## Sección 1

Contenido…

## Referencias

- [Título — Autor, Año](https://url)
```

### Reglas del template

1. **Frontmatter YAML obligatorio** con `title` (descriptivo, no genérico como
   "Introduction" o "Referencias") y `tags` (ver taxonomía abajo). Siempre
   incluir el tag `notas`.
2. **Un único `# H1`** al inicio del cuerpo, coincidente con el `title`.
3. **Link `[← Inicio](https://matiaspakua.github.io/tech.notes.io)`** justo
   debajo del H1.
4. **NO usar** bloques `<style>` + `<button class="back-button">` (legacy).
   Reemplazarlos por el link `← Inicio`.
5. **NO usar** anclas HTML `<a name="...">` (just-the-docs genera anclas de
   headings automáticamente).
6. **Jerarquía de headings** consistente: H1 → H2 → H3, sin saltos.
7. **Referencias**: convertir URLs sueltas a `[Título — Fuente/Autor, Año](url)`.
   Priorizar fuentes fiables: Wikipedia, papers, documentación oficial, libros y
   autores reconocidos.

## Taxonomía de tags (por carpeta)

| Carpeta | Tags base |
|---|---|
| `software_engineering/` | `software-engineering` |
| `sw_and_system_architecture/` | `arquitectura`, `software-engineering` |
| `development/` | `desarrollo`, `programacion` |
| `cybersecurity/` | `ciberseguridad`, `seguridad` |
| `testing/` | `testing`, `qa` |
| `artificial_intelligence/` | `inteligencia-artificial`, `ai` |
| `general_topic/` | `tecnologia` |
| `books/` | `libros` |
| `leadership/` | `liderazgo`, `soft-skills` |
| `projects/` | `proyectos` |
| `space/` | `espacio`, `satelites` |
| `we_are_developers_wc_2024/` | `conferencia`, `we-are-developers`, `2024` |
| `sw_eng_specialization/` | `especializacion`, `uca`, `universidad` |
| `master_ti/` | `master`, `universidad-palermo` |
| `master_direccion_tecnologica/` | `master`, `lasalle-bcn` |

Añadir tags de tema específicos cuando aporten (`cloud`, `aws`, `agile`, `uml`,
`requerimientos`, etc.). Siempre cerrar con `notas`.

## Compatibilidad Obsidian + web

- **Callouts**: usar la sintaxis `> [!note]`, `> [!warning]`, `> [!tip]`,
  `> [!important]` (funciona en Obsidian y está configurada en
  `_config.yml`).
- **Enlaces internos**: preferir `[[nombre-de-nota]]` (wikilinks de Obsidian)
  para relacionar notas; usar `[texto](ruta/relativa.md)` cuando se necesita un
  link que renderice también en la web. Las rutas relativas `.md` deben resolver
  correctamente desde la ubicación del archivo.
- **Diagramas**: usar bloques ` ```mermaid ` cuando un proceso, flujo o
  arquitectura se describe en prosa y un diagrama lo aclara. Mermaid renderiza
  nativo en Obsidian y está habilitado en el sitio.
- **Tablas**: usar tablas markdown para comparar conceptos, listar versiones,
  resumir.

## Verificación de contenido (fact-checking)

Para cambios de contenido, **contrastar con fuentes fiables** antes de corregir:

- Fechas, autores y atribuciones (ej: GitFlow → Vincent Driessen, 2010;
  Hexagonal Architecture → Alistair Cockburn, 2005; Brooks's Law → Fred Brooks,
  1975).
- Definiciones técnicas (usar Wikipedia / documentación oficial).
- Versiones de tecnologías (marcar como desactualizado si corresponde, con un
  `> [!note]`).

Corregir errores claros (typos en nombres propios, siglas mal — ej. "NPL" →
"NLP", "MPC" → "MCP", magnitudes equivocadas). Si una nota está desactualizada,
**no borrar** el contenido viejo: añadir un callout `> [!note]` aclarando la
fecha/contexto.

## Checklist final por nota

- [ ] Frontmatter con `title` descriptivo y `tags` correctos (incluye `notas`).
- [ ] Un `# H1` coincidente con el title.
- [ ] Link `← Inicio` bajo el H1.
- [ ] Sin `<button class="back-button">` ni `<style>` legacy ni `<a name>`.
- [ ] Jerarquía de headings correcta.
- [ ] Referencias formateadas con título/autor/año y fuentes fiables.
- [ ] Errores factuales corregidos y contrastados.
- [ ] `<mark>`, callouts y wikilinks compatibles con Obsidian.
- [ ] Diagramas/tablas añadidos solo donde aportan claridad real.
- [ ] El estilo y la voz del autor se conservan.

## Validación deterministaa rápida

Antes del fix con IA, se puede correr el validador determinista:

```bash
python3 scripts/validate_notes.py            # valida todas las notas de pages/
python3 scripts/validate_notes.py pages/x.md # valida archivos concretos
```

Detecta: frontmatter ausente, títulos genéricos, HTML legacy, anclas `<a name>`,
links internos `.md` rotos y H1 faltante. El hook `.githooks/pre-commit` lo
ejecuta sobre las notas en staging.
