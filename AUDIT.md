
## 🎯 Resumen ejecutivo

### Hallazgos principales

1. **211 Errores críticos** — principalmente broken links y missing images
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

- Audit ejecutado: Mon Jun 15 20:28:15 CEST 2026
- Archivo de configuración: `.gitlab/audit.json` (no existe, pero podría crearse)
- Próxima ejecución recomendada: antes de cada merge a main


---

# AUDIT REPORT — tech.notes.io
Generated: Mon Jun 15 20:28:15 CEST 2026
## 📊 Estadísticas
- **Errores encontrados:** 211
- **Advertencias:** 1051
- **Archivos escaneados:** 217
- **Imágenes escaneadas:** 528
- **Imágenes referenciadas:** 412
- **Enlaces markdown:** 1918

## ❌ Errores

### Broken Images (1 errores)

- `pages/development/OpenApi.md:159` — Image not found: images/example-image.png

### Broken Links (210 errores)

- `pages/development/OpenApi.md:159` — Link target not found: images/example-image.png
- `pages/development/on_java_notes.md:64` — Link target not found: \#introducción
- `pages/development/on_java_notes.md:65` — Link target not found: \#¿qué-es-el-paradigma-de-la-orientación-a-objetos?
- `pages/development/on_java_notes.md:66` — Link target not found: \#ventajas-del-paradigma-de-la-orientación-a-objetos
- `pages/development/on_java_notes.md:67` — Link target not found: \#desventajas-del-paradigma-de-la-orientación-a-objetos
- `pages/development/on_java_notes.md:68` — Link target not found: \#conceptos-generales-de-la-oo.
- `pages/development/on_java_notes.md:69` — Link target not found: \#pilares-(características
- `pages/development/on_java_notes.md:70` — Link target not found: \#abstracción.
- `pages/development/on_java_notes.md:71` — Link target not found: \#encapsulamiento.
- `pages/development/on_java_notes.md:72` — Link target not found: \#herencia.
- `pages/development/on_java_notes.md:73` — Link target not found: \#polimorfismo.
- `pages/development/on_java_notes.md:74` — Link target not found: \#polimorfismo-aparente
- `pages/development/on_java_notes.md:75` — Link target not found: \#coerción-/-casting
- `pages/development/on_java_notes.md:76` — Link target not found: \#sobrecarga.
- `pages/development/on_java_notes.md:77` — Link target not found: \#paramétrico.
- `pages/development/on_java_notes.md:78` — Link target not found: \#polimorfismo-real
- `pages/development/on_java_notes.md:79` — Link target not found: \#real.
- `pages/development/on_java_notes.md:80` — Link target not found: \#solución-orientada-a-objetos.
- `pages/development/on_java_notes.md:81` — Link target not found: \#representación-de-una-clase.
- `pages/development/on_java_notes.md:82` — Link target not found: \#la-plataforma-java.
- `pages/development/on_java_notes.md:83` — Link target not found: \#versiones-de-la-plataforma-java.
- `pages/development/on_java_notes.md:84` — Link target not found: \#modos-de-ejecución-de-java.
- `pages/development/on_java_notes.md:85` — Link target not found: \#código-administrado.
- `pages/development/on_java_notes.md:86` — Link target not found: \#características-del-lenguaje-java
- `pages/development/on_java_notes.md:87` — Link target not found: \#entry-point
- `pages/development/on_java_notes.md:88` — Link target not found: \#ejecutable
- `pages/development/on_java_notes.md:89` — Link target not found: \#java-native-interface
- `pages/development/on_java_notes.md:90` — Link target not found: \#primer-programa-en-java.
- `pages/development/on_java_notes.md:91` — Link target not found: \#variable-de-entorno-classpath
- `pages/development/on_java_notes.md:92` — Link target not found: \#clases
- `pages/development/on_java_notes.md:93` — Link target not found: \#el-constructor.
- `pages/development/on_java_notes.md:94` — Link target not found: \#¿cómo-se-destruyen-los-objetos?
- `pages/development/on_java_notes.md:95` — Link target not found: \#paradigma:-paquetes.
- `pages/development/on_java_notes.md:96` — Link target not found: \#tipos-de-datos-en-java
- `pages/development/on_java_notes.md:97` — Link target not found: \#tipos-primitivos.
- `pages/development/on_java_notes.md:98` — Link target not found: \#las-referencias.
- `pages/development/on_java_notes.md:99` — Link target not found: \#los-objetos.
- `pages/development/on_java_notes.md:100` — Link target not found: \#modelo-de-memoria-de-java
- `pages/development/on_java_notes.md:101` — Link target not found: \#área-de-código/datos.
- `pages/development/on_java_notes.md:102` — Link target not found: \#stack.
- `pages/development/on_java_notes.md:103` — Link target not found: \#el-heap.
- `pages/development/on_java_notes.md:104` — Link target not found: \#alcance-o-scope.
- `pages/development/on_java_notes.md:105` — Link target not found: \#alcance-y-perdurabilidad-de-los-tipos-primitivos-/-referencias
- `pages/development/on_java_notes.md:106` — Link target not found: \#alcance-y-perdurabilidad-de-los-objetos.
- `pages/development/on_java_notes.md:107` — Link target not found: \#como-se-obtienen-referencias-a-los-objetos?
- `pages/development/on_java_notes.md:108` — Link target not found: \#tipos-en-java.
- `pages/development/on_java_notes.md:109` — Link target not found: \#tipos-primitivos.-1
- `pages/development/on_java_notes.md:110` — Link target not found: \#referencias.
- `pages/development/on_java_notes.md:111` — Link target not found: \#objetos.
- `pages/development/on_java_notes.md:112` — Link target not found: \#paradigma
- `pages/development/on_java_notes.md:113` — Link target not found: \#identidad-vs-igualdad.
- `pages/development/on_java_notes.md:114` — Link target not found: \#herencia.-1
- `pages/development/on_java_notes.md:115` — Link target not found: \#aplicaciones-de-la-herencia.
- `pages/development/on_java_notes.md:116` — Link target not found: \#mecanismo-de-especialización.
- `pages/development/on_java_notes.md:117` — Link target not found: \#mecanismo-de-generalización.
- `pages/development/on_java_notes.md:118` — Link target not found: \#overriding-(redefinición
- `pages/development/on_java_notes.md:119` — Link target not found: \#this-–-super
- `pages/development/on_java_notes.md:120` — Link target not found: \#this
- `pages/development/on_java_notes.md:121` — Link target not found: \#super
- `pages/development/on_java_notes.md:122` — Link target not found: \#calificadores-/-modificadores-de-acceso.
- `pages/development/on_java_notes.md:123` — Link target not found: \#regla-de-oro.
- `pages/development/on_java_notes.md:124` — Link target not found: \#calificadores-de-pertenencia.
- `pages/development/on_java_notes.md:125` — Link target not found: \#de-instancia.
- `pages/development/on_java_notes.md:126` — Link target not found: \#de-clase-(metadatos
- `pages/development/on_java_notes.md:127` — Link target not found: \#clases-y-métodos-abstractos.
- `pages/development/on_java_notes.md:128` — Link target not found: \#clase-abstracta.
- `pages/development/on_java_notes.md:129` — Link target not found: \#método-abstracto.
- `pages/development/on_java_notes.md:130` — Link target not found: \#clases-y-miembros-finales.
- `pages/development/on_java_notes.md:131` — Link target not found: \#clases-en-uml.
- `pages/development/on_java_notes.md:132` — Link target not found: \#upcasting-vs-downcasting
- `pages/development/on_java_notes.md:133` — Link target not found: \#upcasting.
- `pages/development/on_java_notes.md:134` — Link target not found: \#downcasting.
- `pages/development/on_java_notes.md:135` — Link target not found: \#binding.
- `pages/development/on_java_notes.md:136` — Link target not found: \#binding-estático
- `pages/development/on_java_notes.md:137` — Link target not found: \#binding-dinámico.
- `pages/development/on_java_notes.md:138` — Link target not found: \#polimorfismo-ó-métodos-polimorficos.
- `pages/development/on_java_notes.md:139` — Link target not found: \#asociaciones.
- `pages/development/on_java_notes.md:140` — Link target not found: \#asociaciones-generales.
- `pages/development/on_java_notes.md:141` — Link target not found: \#asociaciones-especiales.
- `pages/development/on_java_notes.md:142` — Link target not found: \#agregación
- `pages/development/on_java_notes.md:143` — Link target not found: \#composición
- `pages/development/on_java_notes.md:144` — Link target not found: \#clases-asociativas.
- `pages/development/on_java_notes.md:145` — Link target not found: \#interfaces.
- `pages/development/on_java_notes.md:146` — Link target not found: \#sobre-java.-resumen-de-sintaxis.
- `pages/development/on_java_notes.md:147` — Link target not found: \#clase.
- `pages/development/on_java_notes.md:148` — Link target not found: \#interface.
- `pages/development/on_java_notes.md:149` — Link target not found: \#atributo.
- `pages/development/on_java_notes.md:150` — Link target not found: \#método.
- `pages/development/on_java_notes.md:151` — Link target not found: \#paquetes.
- `pages/development/on_java_notes.md:152` — Link target not found: \#dominios-de-internet-(dns
- `pages/development/on_java_notes.md:153` — Link target not found: \#¿qué-es-el-nombre-completo-de-una-clase?
- `pages/development/on_java_notes.md:154` — Link target not found: \#keyword-import.
- `pages/development/on_java_notes.md:155` — Link target not found: \#java.lang
- `pages/development/on_java_notes.md:156` — Link target not found: \#default-package
- `pages/development/on_java_notes.md:157` — Link target not found: \#archivo-.jar
- `pages/development/on_java_notes.md:158` — Link target not found: \#organización-de-fuentes-y-clases
- `pages/development/on_java_notes.md:159` — Link target not found: \#identidad-e-igualdad-en-java.
- `pages/development/on_java_notes.md:160` — Link target not found: \#método-equals.
- `pages/development/on_java_notes.md:161` — Link target not found: \#identidad.
- `pages/development/on_java_notes.md:162` — Link target not found: \#igualdad.
- `pages/development/on_java_notes.md:163` — Link target not found: \#otros-métodos-de-la-clase-object
- `pages/development/on_java_notes.md:164` — Link target not found: \#método-hashcode.
- `pages/development/on_java_notes.md:165` — Link target not found: \#método-tostring.
- `pages/development/on_java_notes.md:166` — Link target not found: \#método-clone.
- `pages/development/on_java_notes.md:167` — Link target not found: \#system.out
- `pages/development/on_java_notes.md:168` — Link target not found: \#integer
- `pages/development/on_java_notes.md:169` — Link target not found: \#int-value
- `pages/development/on_java_notes.md:170` — Link target not found: \#parseint
- `pages/development/on_java_notes.md:171` — Link target not found: \#valueof
- `pages/development/on_java_notes.md:172` — Link target not found: \#tostring
- `pages/development/on_java_notes.md:173` — Link target not found: \#hola-mundo
- `pages/development/on_java_notes.md:174` — Link target not found: \#clases-wrapper
- `pages/development/on_java_notes.md:175` — Link target not found: \#arreglos-en-java.
- `pages/development/on_java_notes.md:176` — Link target not found: \#sintaxis.
- `pages/development/on_java_notes.md:177` — Link target not found: \#arreglos-de-tipos-primitivos.
- `pages/development/on_java_notes.md:178` — Link target not found: \#arreglos-de-objetos.
- `pages/development/on_java_notes.md:179` — Link target not found: \#clase-vector.
- `pages/development/on_java_notes.md:180` — Link target not found: \#arquitectura-cliente-servidor.
- `pages/development/on_java_notes.md:181` — Link target not found: \#arquitectura-multitier
- `pages/development/on_java_notes.md:182` — Link target not found: \#arquitectura-de-tres-capas.
- `pages/development/on_java_notes.md:183` — Link target not found: \#excepciones
- `pages/development/on_java_notes.md:184` — Link target not found: \#concepto
- `pages/development/on_java_notes.md:185` — Link target not found: \#que-sucede-cuando-ocurre-una-excepción?
- `pages/development/on_java_notes.md:186` — Link target not found: \#concepto-de-excepción
- `pages/development/on_java_notes.md:187` — Link target not found: \#lanzar-excepciones
- `pages/development/on_java_notes.md:188` — Link target not found: \#manejador-de-excepciones
- `pages/development/on_java_notes.md:189` — Link target not found: \#excepciones-en-run-time
- `pages/development/on_java_notes.md:190` — Link target not found: \#interfaz-throwable
- `pages/development/on_java_notes.md:191` — Link target not found: \#clase-error
- `pages/development/on_java_notes.md:192` — Link target not found: \#bloque-finally
- `pages/development/on_java_notes.md:193` — Link target not found: \#rtti-(oo
- `pages/development/on_java_notes.md:194` — Link target not found: \#clases-internas-/-clases-anidadas
- `pages/development/on_java_notes.md:195` — Link target not found: \#clases-anidadas
- `pages/development/on_java_notes.md:196` — Link target not found: \#clase-interna-(inner-class
- `pages/development/on_java_notes.md:197` — Link target not found: \#características
- `pages/development/on_java_notes.md:198` — Link target not found: \#clases-internas-anónimas
- `pages/development/on_java_notes.md:199` — Link target not found: \#características.
- `pages/development/on_java_notes.md:200` — Link target not found: \#jfc-–-java-fundation-classes
- `pages/development/on_java_notes.md:201` — Link target not found: \#awt-vs-swing
- `pages/development/on_java_notes.md:202` — Link target not found: \#java-beans
- `pages/development/on_java_notes.md:203` — Link target not found: \#características-1
- `pages/development/on_java_notes.md:204` — Link target not found: \#convenciones.
- `pages/development/on_java_notes.md:205` — Link target not found: \#jerarquía-de-clases-beans
- `pages/development/on_java_notes.md:206` — Link target not found: \#jframe
- `pages/development/on_java_notes.md:207` — Link target not found: \#japplet
- `pages/development/on_java_notes.md:208` — Link target not found: \#modelo-de-eventos-de-java
- `pages/development/on_java_notes.md:209` — Link target not found: \#layoutmanager
- `pages/development/on_java_notes.md:210` — Link target not found: \#generics
- `pages/development/on_java_notes.md:211` — Link target not found: \#métodos-y-constructores-genéricos
- `pages/development/on_java_notes.md:212` — Link target not found: \#patrones-de-diseño
- `pages/development/on_java_notes.md:213` — Link target not found: \#patrón-de-diseño-(definición-general
- `pages/development/on_java_notes.md:214` — Link target not found: \#patrón-de-diseño-(en-la-oo
- `pages/development/on_java_notes.md:215` — Link target not found: \#composición-de-un-patrón
- `pages/development/on_java_notes.md:216` — Link target not found: \#organización-de-los-patrones-(gof
- `pages/development/on_java_notes.md:217` — Link target not found: \#clasificación-por-propósito
- `pages/development/on_java_notes.md:218` — Link target not found: \#clasificación-por-alcance
- `pages/development/on_java_notes.md:219` — Link target not found: \#problema-que-se-encara
- `pages/development/on_java_notes.md:220` — Link target not found: \#definición-de-framework
- `pages/development/on_java_notes.md:221` — Link target not found: \#patrones-de-creación
- `pages/development/on_java_notes.md:222` — Link target not found: \#abstract-factory
- `pages/development/on_java_notes.md:223` — Link target not found: \#singleton
- `pages/development/on_java_notes.md:224` — Link target not found: \#builder
- `pages/development/on_java_notes.md:225` — Link target not found: \#factory-method
- `pages/development/on_java_notes.md:226` — Link target not found: \#prototype
- `pages/development/on_java_notes.md:227` — Link target not found: \#patrones-estructurales
- `pages/development/on_java_notes.md:228` — Link target not found: \#adapter
- `pages/development/on_java_notes.md:229` — Link target not found: \#bridge
- `pages/development/on_java_notes.md:230` — Link target not found: \#decorator
- `pages/development/on_java_notes.md:231` — Link target not found: \#versión-1
- `pages/development/on_java_notes.md:232` — Link target not found: \#versión-2
- `pages/development/on_java_notes.md:233` — Link target not found: \#composite
- `pages/development/on_java_notes.md:234` — Link target not found: \#facade
- `pages/development/on_java_notes.md:235` — Link target not found: \#flyweight
- `pages/development/on_java_notes.md:236` — Link target not found: \#proxy
- `pages/development/on_java_notes.md:237` — Link target not found: \#patrones-de-comportamiento
- `pages/development/on_java_notes.md:238` — Link target not found: \#chain-of-responsability
- `pages/development/on_java_notes.md:239` — Link target not found: \#command
- `pages/development/on_java_notes.md:240` — Link target not found: \#interpreter
- `pages/development/on_java_notes.md:241` — Link target not found: \#iterator
- `pages/development/on_java_notes.md:242` — Link target not found: \#mediator
- `pages/development/on_java_notes.md:243` — Link target not found: \#memento
- `pages/development/on_java_notes.md:244` — Link target not found: \#observer
- `pages/development/on_java_notes.md:245` — Link target not found: \#state
- `pages/development/on_java_notes.md:246` — Link target not found: \#strategy
- `pages/development/on_java_notes.md:247` — Link target not found: \#template-method
- `pages/development/on_java_notes.md:248` — Link target not found: \#visitor
- `pages/development/on_java_notes.md:249` — Link target not found: \#7análisis-y-diseño-orientado-a-objeto.
- `pages/development/on_java_notes.md:250` — Link target not found: \#análisis-y-diseño
- `pages/development/on_java_notes.md:251` — Link target not found: \#uml-(unified-modeling-languaje
- `pages/development/on_java_notes.md:252` — Link target not found: \#análisis
- `pages/development/on_java_notes.md:253` — Link target not found: \#identificación-de-actores-(ia
- `pages/development/on_java_notes.md:254` — Link target not found: \#casos-de-uso-(cu
- `pages/development/on_java_notes.md:255` — Link target not found: \#documentación-de-un-caso-de-uso.
- `pages/development/on_java_notes.md:256` — Link target not found: \#curso-de-eventos:
- `pages/development/on_java_notes.md:257` — Link target not found: \#excepciones:
- `pages/development/on_java_notes.md:258` — Link target not found: \#diagrama-de-actividad-(da
- `pages/development/on_java_notes.md:259` — Link target not found: \#diagrama-de-caso-de-usos-(dcu
- `pages/development/on_java_notes.md:260` — Link target not found: \#ranking-de-casos-de-uso
- `pages/development/on_java_notes.md:261` — Link target not found: \#modelo-conceptual
- `pages/development/on_java_notes.md:262` — Link target not found: \#asociaciones.-1
- `pages/development/on_java_notes.md:263` — Link target not found: \#atributos
- `pages/development/on_java_notes.md:264` — Link target not found: \#glosario
- `pages/development/on_java_notes.md:265` — Link target not found: \#diagrama-de-eventos-de-sistema
- `pages/development/on_java_notes.md:266` — Link target not found: \#contratos
- `pages/development/on_java_notes.md:267` — Link target not found: \#volviendo-sobre-el-modelo-conceptual.
- `pages/development/on_java_notes.md:268` — Link target not found: \#diagrama-de-colaboración.
- `pages/development/on_java_notes.md:269` — Link target not found: \#interfaz-gráfica-de-prototipo
- `pages/master_direccion_tecnologica/12_TFM_trabajo_final_master/2025-04-19_revision_v0.1.md:66` — Link target not found: 2025-06-05%20review%205.0.md
- `pages/master_direccion_tecnologica/12_TFM_trabajo_final_master/2025-04-19_revision_v0.1.md:67` — Link target not found: Feedback%20workshop.md
- `pages/sw_eng_specialization/final_projects_specialization.md:1884` — Link target not found: 
- Git Flow - Gestión de ramas o Branching (Driessen, 2010

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

- `pages/sw_eng_specialization/final_projects_specialization.md` — Unmatched brackets: [ = 276, ] = 277

### TODOs (4 advertencias)

- `pages/development/on_java_notes.md` — Contains 11 TODO/FIXME markers
- `pages/development/programacion_c.md` — Contains 50 TODO/FIXME markers
- `pages/projects/orquestador_workflows.md` — Contains 1 TODO/FIXME markers
- `pages/sw_eng_specialization/ingenieria_requisitos/sesion_2.md` — Contains 1 TODO/FIXME markers

