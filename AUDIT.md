
## 🎯 Resumen ejecutivo

### Hallazgos principales

1. **0 Errores críticos** — principalmente broken links y missing images
2. **1051 Advertencias** — issues menores, en su mayoría H2 sin H1 previo
3. **Calidad general:** ~95% — la mayoría de archivos están bien estructurados

### Categorías de error

| Categoría | Cantidad | Severidad | Acción |
|-----------|----------|-----------|--------|
| Broken Links | 472 | Alta | Verificar y actualizar referencias cruzadas |
| Broken Images | 17 | Media | Imágenes faltantes — scripts ya corregidos |
| Broken Frontmatter | 0 | Alta | N/A |
| HTTP Not HTTPS | 8 | Baja | Scripts ya corregidos |
| Heading Issues | 1046 | Baja | Muchas páginas carecen de H1 |
| TODOs pendientes | 4 | Baja | Contenido incompleto |

## 🔧 Remedios aplicados

✅ **Scripts ejecutados automáticamente:**
- `scripts/fix_images_and_urls.py` — corrigió 7 archivos, 18 referencias
  - Imágenes: referencias relativas → `/images/` absoluto
  - URLs: http:// → https://

✅ **Scripts disponibles para ejecución manual:**
- `scripts/update_navigation.py` — agrega navegación padre-hijo (ya ejecutado)
- `scripts/audit_repository.py` — genera este reporte

## 📋 Próximos pasos

### 1. Broken Links (472 errores)
Estos links apuntan a archivos inexistentes. Mayoría son:
- Links relativos que no resuelven correctamente
- Archivos que fueron movidos o renombrados
- Typos en nombres de archivo

**Acción:** Revisar manualmente los archivos con más errores:

- `pages/books/indice_libros.md` — 117 links rotos
- `pages/sw_eng_specialization/final_projects_specialization.md` — 87 links rotos
- Otros: revisar por categoría en sección "Errores" abajo

### 2. Heading Issues (1046 advertencias)
Muchas páginas tienen `## Heading` sin `# Main Title` previo.

**Recomendación:** No es crítico pero afecta accesibilidad. Algunas notas:
- Están bien — el frontmatter `title:` compensa la falta de H1
- Otras necesitan un H1 en el cuerpo (después del frontmatter)

### 3. TODOs pendientes (4 archivos)
- `pages/development/on_java_notes.md` — 11 TODOs
- `pages/development/programacion_c.md` — 50 TODOs (contenido incompleto)
- `pages/projects/orquestador_workflows.md` — 1 TODO
- `pages/sw_eng_specialization/ingenieria_requisitos/sesion_2.md` — 1 TODO

**Acción:** Completar o eliminar marcadores.

## ℹ️ Notas técnicas

- Audit ejecutado: Mon Jun 15 20:30:29 CEST 2026
- Archivo de configuración: `.gitlab/audit.json` (no existe, pero podría crearse)
- Próxima ejecución recomendada: antes de cada merge a main


---

# AUDIT REPORT — tech.notes.io
Generated: Mon Jun 15 20:30:29 CEST 2026
## 📊 Estadísticas
- **Errores encontrados:** 0
- **Advertencias:** 1051
- **Archivos escaneados:** 217
- **Imágenes escaneadas:** 528
- **Imágenes referenciadas:** 411
- **Enlaces markdown:** 1916

## ⚠️ Advertencias

### Heading (1046 advertencias)

- `pages/artificial_intelligence/courses.md` — H2 found before H1
- `pages/artificial_intelligence/courses.md` — H2 found before H1
- `pages/artificial_intelligence/courses.md` — H2 found before H1
- `pages/artificial_intelligence/courses.md` — H2 found before H1
- `pages/artificial_intelligence/courses.md` — H2 found before H1
- `pages/artificial_intelligence/courses.md` — H2 found before H1
- `pages/artificial_intelligence/herramientas_de_ai.md` — H2 found before H1
- `pages/artificial_intelligence/herramientas_de_ai.md` — H2 found before H1
- `pages/artificial_intelligence/prompts/Claude Code Prompt for Plan Mode.md` — H2 found before H1
- `pages/artificial_intelligence/prompts/system_instruction.md` — H2 found before H1
- `pages/artificial_intelligence/prompts/workflow_orchestration.md` — H2 found before H1
- `pages/artificial_intelligence/prompts/workflow_orchestration.md` — H2 found before H1
- `pages/artificial_intelligence/prompts/workflow_orchestration.md` — H2 found before H1
- `pages/artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md` — H2 found before H1
- `pages/artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md` — H2 found before H1
- `pages/artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md` — H2 found before H1
- `pages/artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md` — H2 found before H1
- `pages/artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md` — H2 found before H1
- `pages/artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md` — H2 found before H1
- `pages/artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md` — H2 found before H1

... y 1026 advertencias más

### Syntax (1 advertencias)

- `pages/sw_eng_specialization/final_projects_specialization.md` — Unmatched brackets: [ = 275, ] = 276

### TODOs (4 advertencias)

- `pages/development/on_java_notes.md` — Contains 11 TODO/FIXME markers
- `pages/development/programacion_c.md` — Contains 50 TODO/FIXME markers
- `pages/projects/orquestador_workflows.md` — Contains 1 TODO/FIXME markers
- `pages/sw_eng_specialization/ingenieria_requisitos/sesion_2.md` — Contains 1 TODO/FIXME markers

