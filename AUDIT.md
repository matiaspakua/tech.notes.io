
## 🎯 Resumen ejecutivo

### Hallazgos principales

1. **480 Errores críticos** — principalmente broken links y missing images
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

- Audit ejecutado: Mon Jun 15 20:16:38 CEST 2026
- Archivo de configuración: `.gitlab/audit.json` (no existe, pero podría crearse)
- Próxima ejecución recomendada: antes de cada merge a main


---

# AUDIT REPORT — tech.notes.io
Generated: Mon Jun 15 20:16:38 CEST 2026
## 📊 Estadísticas
- **Errores encontrados:** 480
- **Advertencias:** 1051
- **Archivos escaneados:** 217
- **Imágenes escaneadas:** 528
- **Imágenes referenciadas:** 420
- **Enlaces markdown:** 1914

## ❌ Errores

### Broken Images (8 errores)

- `pages/books/book_extreme_programming_explained.md:501` — Image not found: https://upload.wikimedia.org/wikipedia/commons/b/bf/Rosetta_Stone.jpg
- `pages/development/OpenApi.md:159` — Image not found: images/example-image.png
- `pages/development/git_and_gitflow_trunk_based_dev.md:82` — Image not found: https://nvie.com/img/git-model@2x.png
- `pages/general_topic/specialization_building_cloud_computing_solutions_at_scale.md:107` — Image not found: https://user-images.githubusercontent.com/20072974/213302327-fd548e29-740d-472f-a99f-f755b6f8ebd0.png
- `pages/software_engineering/generative_ai.md:100` — Image not found: https://upload.wikimedia.org/wikipedia/commons/1/16/GenAI_Agent.png
- `pages/software_engineering/generative_ai.md:135` — Image not found: https://upload.wikimedia.org/wikipedia/commons/6/69/Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial.png
- `pages/sw_and_system_architecture/on_hexagonal_architecture_notes.md:59` — Image not found: https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe5f9ca77-0fc5-4fd4-8b89-c2e43ffff9c2_3601x4442.jpeg
- `pages/sw_eng_specialization/final_projects_specialization.md:450` — Image not found: https://martinfowler.com/bliki/images/ci-certification/sketch.png

### Broken Links (472 errores)

- `pages/artificial_intelligence/herramientas_de_ai.md:92` — Link target not found: ../software_engineering/generative_ai.md
- `pages/artificial_intelligence/herramientas_de_ai.md:93` — Link target not found: ruta_de_aprendisaje/claude%20code.md
- `pages/artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md:229` — Link target not found: ../../herramientas_de_ai.md
- `pages/artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md:231` — Link target not found: ../../../software_engineering/generative_ai.md
- `pages/artificial_intelligence/ruta_de_aprendisaje/grandes_modelos _de_lenguajes.md:66` — Link target not found: ../../software_engineering/generative_ai.md
- `pages/artificial_intelligence/ruta_de_aprendisaje/grandes_modelos _de_lenguajes.md:67` — Link target not found: ../herramientas_de_ai.md
- `pages/books/book_extreme_programming_explained.md:18` — Link target not found: ../../images/xp_programming.jpeg
- `pages/books/book_extreme_programming_explained.md:595` — Link target not found: ../software_engineering/agile_and_scrum.md
- `pages/books/book_extreme_programming_explained.md:596` — Link target not found: ../software_engineering/waterfall.md
- `pages/books/book_extreme_programming_explained.md:597` — Link target not found: ../software_engineering/software_engineering_timeline.md
- `pages/books/indice_libros.md:23` — Link target not found: ../leadership/dev_to_tech_lead.md
- `pages/books/indice_libros.md:28` — Link target not found: ../../README.md
- `pages/books/indice_libros.md:31` — Link target not found: ../software_engineering/agile_and_scrum.md
- `pages/books/indice_libros.md:32` — Link target not found: ../software_engineering/software_engineering_timeline.md
- `pages/books/indice_libros.md:33` — Link target not found: ../development/getting_started_spring_development.md
- `pages/books/indice_libros.md:34` — Link target not found: ../general_topic/specialization_building_cloud_computing_solutions_at_scale.md
- `pages/books/indice_libros.md:35` — Link target not found: ../sw_eng_specialization/final_projects_specialization.md
- `pages/books/indice_libros.md:36` — Link target not found: ../sw_eng_specialization/software_development_methods.md
- `pages/books/indice_libros.md:37` — Link target not found: ../master_direccion_tecnologica/06_gestion_proyecto_agile/sesion_1.md
- `pages/books/indice_libros.md:38` — Link target not found: ../projects/plataforma_pruebas_smallsats.md
- `pages/books/indice_libros.md:42` — Link target not found: ../leadership/dev_to_tech_lead.md
- `pages/books/indice_libros.md:45` — Link target not found: ../leadership/dev_to_tech_lead.md
- `pages/books/indice_libros.md:48` — Link target not found: ../leadership/dev_to_tech_lead.md
- `pages/books/indice_libros.md:52` — Link target not found: ../software_engineering/waterfall.md
- `pages/books/indice_libros.md:55` — Link target not found: ../leadership/dev_to_tech_lead.md
- `pages/books/indice_libros.md:59` — Link target not found: ../../README.md
- `pages/books/indice_libros.md:61` — Link target not found: ../software_engineering/agile_and_scrum.md
- `pages/books/indice_libros.md:62` — Link target not found: ../software_engineering/software_engineering_timeline.md
- `pages/books/indice_libros.md:63` — Link target not found: ../software_engineering/waterfall.md
- `pages/books/indice_libros.md:64` — Link target not found: ../development/getting_started_spring_development.md
- `pages/books/indice_libros.md:65` — Link target not found: ../development/git_and_gitflow_trunk_based_dev.md
- `pages/books/indice_libros.md:66` — Link target not found: ../development/on_rest_api_notes.md
- `pages/books/indice_libros.md:67` — Link target not found: ../general_topic/specialization_building_cloud_computing_solutions_at_scale.md
- `pages/books/indice_libros.md:68` — Link target not found: ../general_topic/tech_trends_2023.md
- `pages/books/indice_libros.md:69` — Link target not found: ../sw_eng_specialization/team_driving_and_human_resource_management.md
- `pages/books/indice_libros.md:70` — Link target not found: ../master_direccion_tecnologica/01_gestion_empresarial_y_transformacion_digital/sesion_2_25-10-2024.md
- `pages/books/indice_libros.md:71` — Link target not found: ../master_ti/cloud_computing/sesion_4.md
- `pages/books/indice_libros.md:72` — Link target not found: ../master_ti/transformacion_digital/sesion_6.md
- `pages/books/indice_libros.md:73` — Link target not found: ../we_are_developers_wc_2024/charla_03.md
- `pages/books/indice_libros.md:74` — Link target not found: ../we_are_developers_wc_2024/charla_10.md
- `pages/books/indice_libros.md:75` — Link target not found: ../we_are_developers_wc_2024/charla_13.md
- `pages/books/indice_libros.md:76` — Link target not found: ../we_are_developers_wc_2024/charla_19.md
- `pages/books/indice_libros.md:79` — Link target not found: ../leadership/dev_to_tech_lead.md
- `pages/books/indice_libros.md:85` — Link target not found: ../general_topic/specialization_building_cloud_computing_solutions_at_scale.md
- `pages/books/indice_libros.md:86` — Link target not found: ../we_are_developers_wc_2024/charla_19.md
- `pages/books/indice_libros.md:89` — Link target not found: ../cursos/visual_thinking.md
- `pages/books/indice_libros.md:92` — Link target not found: ../leadership/dev_to_tech_lead.md
- `pages/books/indice_libros.md:97` — Link target not found: ../../README.md
- `pages/books/indice_libros.md:99` — Link target not found: ../software_engineering/agile_and_scrum.md
- `pages/books/indice_libros.md:100` — Link target not found: ../software_engineering/software_engineering_timeline.md
- `pages/books/indice_libros.md:101` — Link target not found: ../software_engineering/waterfall.md
- `pages/books/indice_libros.md:102` — Link target not found: ../software_engineering/generative_ai.md
- `pages/books/indice_libros.md:103` — Link target not found: ../software_engineering/the_history_of_the_project_A7_by_David_Parnas.md
- `pages/books/indice_libros.md:104` — Link target not found: ../leadership/dev_to_tech_lead.md
- `pages/books/indice_libros.md:105` — Link target not found: ../leadership/emotional_intelligence.md
- `pages/books/indice_libros.md:106` — Link target not found: ../leadership/how_to_speak_by_patrick_winston.md
- `pages/books/indice_libros.md:107` — Link target not found: ../leadership/what_the_little_prince_teach_about_engineering.md
- `pages/books/indice_libros.md:108` — Link target not found: ../general_topic/on_user_stories_notes.md
- `pages/books/indice_libros.md:109` — Link target not found: ../general_topic/reflection_on_software_engineering.md
- `pages/books/indice_libros.md:110` — Link target not found: ../general_topic/design_thinking_explained.md
- `pages/books/indice_libros.md:111` — Link target not found: ../general_topic/how_to_build_a_knowledge_base.md
- `pages/books/indice_libros.md:112` — Link target not found: ../general_topic/nosql_the_basis_of.md
- `pages/books/indice_libros.md:113` — Link target not found: ../general_topic/specialization_building_cloud_computing_solutions_at_scale.md
- `pages/books/indice_libros.md:114` — Link target not found: ../general_topic/tech_trends_2023.md
- `pages/books/indice_libros.md:117` — Link target not found: ../development/advance_your_spring_development_skills.md
- `pages/books/indice_libros.md:118` — Link target not found: ../development/concurrencia_java.md
- `pages/books/indice_libros.md:119` — Link target not found: ../development/getting_started_spring_development.md
- `pages/books/indice_libros.md:120` — Link target not found: ../development/git_and_gitflow_trunk_based_dev.md
- `pages/books/indice_libros.md:121` — Link target not found: ../development/on_java_notes.md
- `pages/books/indice_libros.md:122` — Link target not found: ../development/on_rest_api_notes.md
- `pages/books/indice_libros.md:123` — Link target not found: ../development/OpenApi.md
- `pages/books/indice_libros.md:124` — Link target not found: ../development/programacion_c.md
- `pages/books/indice_libros.md:125` — Link target not found: ../cursos/visual_thinking.md
- `pages/books/indice_libros.md:126` — Link target not found: ../cybersecurity/cybersecurity_foundations.md
- `pages/books/indice_libros.md:127` — Link target not found: ../cybersecurity/cybersecurity_h4ck3d.md
- `pages/books/indice_libros.md:128` — Link target not found: ../cybersecurity/dev_sec_ops_foundations.md
- `pages/books/indice_libros.md:129` — Link target not found: ../cybersecurity/programming_foundations_web_security.md
- `pages/books/indice_libros.md:130` — Link target not found: ../sw_and_system_architecture/on_hexagonal_architecture_notes.md
- `pages/books/indice_libros.md:131` — Link target not found: ../sw_and_system_architecture/sustainable_software_architecture.md
- `pages/books/indice_libros.md:132` — Link target not found: ../sw_and_system_architecture/vertical_slicing_architectures.md
- `pages/books/indice_libros.md:133` — Link target not found: ../sw_eng_specialization/final_projects_specialization.md
- `pages/books/indice_libros.md:134` — Link target not found: ../testing/bdd_with_cucumber_java_notes.md
- `pages/books/indice_libros.md:135` — Link target not found: ../testing/gherkin_and_automation.md
- `pages/books/indice_libros.md:136` — Link target not found: ../testing/on_unit_test_tdd_and_bdd.md
- `pages/books/indice_libros.md:137` — Link target not found: ../we_are_developers_wc_2024/charla_01.md
- `pages/books/indice_libros.md:138` — Link target not found: ../we_are_developers_wc_2024/charla_03.md
- `pages/books/indice_libros.md:139` — Link target not found: ../we_are_developers_wc_2024/charla_04.md
- `pages/books/indice_libros.md:140` — Link target not found: ../we_are_developers_wc_2024/charla_05.md
- `pages/books/indice_libros.md:141` — Link target not found: ../we_are_developers_wc_2024/charla_07.md
- `pages/books/indice_libros.md:142` — Link target not found: ../we_are_developers_wc_2024/charla_08.md
- `pages/books/indice_libros.md:143` — Link target not found: ../we_are_developers_wc_2024/charla_09.md
- `pages/books/indice_libros.md:144` — Link target not found: ../we_are_developers_wc_2024/charla_13.md
- `pages/books/indice_libros.md:145` — Link target not found: ../we_are_developers_wc_2024/charla_15.md
- `pages/books/indice_libros.md:146` — Link target not found: ../we_are_developers_wc_2024/charla_16.md
- `pages/books/indice_libros.md:147` — Link target not found: ../we_are_developers_wc_2024/charla_17.md
- `pages/books/indice_libros.md:148` — Link target not found: ../artificial_intelligence/prompts/Claude%20Code%20Prompt%20for%20Plan%20Mode.md
- `pages/books/indice_libros.md:149` — Link target not found: ../artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/2_fundamentos_estadistica_aprendizaje_automatico.md
- `pages/books/indice_libros.md:150` — Link target not found: ../artificial_intelligence/ruta_de_aprendisaje/claude%20code.md
- `pages/books/indice_libros.md:151` — Link target not found: ../master_direccion_tecnologica/01_gestion_empresarial_y_transformacion_digital/sesion_6_15-11-2024.md
- `pages/books/indice_libros.md:152` — Link target not found: ../master_direccion_tecnologica/01_gestion_empresarial_y_transformacion_digital/sesion_11_13-12-2024.md
- `pages/books/indice_libros.md:153` — Link target not found: ../master_direccion_tecnologica/01_gestion_empresarial_y_transformacion_digital/sesion_12_13-12-2024.md
- `pages/books/indice_libros.md:154` — Link target not found: ../master_direccion_tecnologica/09_gestion_servicios_tic/sesion_1.md
- `pages/books/indice_libros.md:155` — Link target not found: ../master_direccion_tecnologica/09_gestion_servicios_tic/sesion_2.md
- `pages/books/indice_libros.md:156` — Link target not found: ../master_direccion_tecnologica/09_gestion_servicios_tic/sesion_3.md
- `pages/books/indice_libros.md:157` — Link target not found: ../projects/porfolio_projects.md
- `pages/books/indice_libros.md:158` — Link target not found: ../projects/uso_modelo_machine_learning.md
- `pages/books/indice_libros.md:159` — Link target not found: ../projects/plataforma_pruebas_smallsats.md
- `pages/books/modern_software_engineering.md:414` — Link target not found: ../software_engineering/agile_and_scrum.md
- `pages/books/modern_software_engineering.md:415` — Link target not found: ../software_engineering/waterfall.md
- `pages/books/modern_software_engineering.md:416` — Link target not found: ../software_engineering/software_engineering_timeline.md
- `pages/books/the_mythical_man_month.md:75` — Link target not found: ../software_engineering/agile_and_scrum.md
- `pages/books/the_mythical_man_month.md:76` — Link target not found: ../software_engineering/waterfall.md
- `pages/books/the_mythical_man_month.md:77` — Link target not found: ../software_engineering/software_engineering_timeline.md
- `pages/cursos/visual_thinking.md:16` — Link target not found: ../../images/conways_law_example.jpeg
- `pages/cursos/visual_thinking.md:47` — Link target not found: ../../images/building_confuse.png
- `pages/cursos/visual_thinking.md:57` — Link target not found: ../../images/iot_diagram.png
- `pages/cursos/visual_thinking.md:63` — Link target not found: ../../images/diagramas_secuancia.png
- `pages/cursos/visual_thinking.md:113` — Link target not found: ../../images/drawio_landing_page.png
- `pages/cursos/visual_thinking.md:121` — Link target not found: ../../images/desgin-thinking.png
- `pages/cursos/visual_thinking.md:152` — Link target not found: ../../images/post_linkedin_voyayer.png
- `pages/cursos/visual_thinking.md:173` — Link target not found: ../../images/demo_time_going_wrong.png
- `pages/cursos/visual_thinking.md:210` — Link target not found: ../general_topic/design_thinking_explained.md
- `pages/cursos/visual_thinking.md:219` — Link target not found: ../../images/download.png
- `pages/cursos/visual_thinking.md:229` — Link target not found: ../general_topic/design_thinking_explained.md
- `pages/cursos/visual_thinking.md:230` — Link target not found: ../leadership/how_to_speak_by_patrick_winston.md
- `pages/cursos/visual_thinking.md:231` — Link target not found: ../leadership/como_hacer_presentaciones.md
- `pages/development/OpenApi.md:159` — Link target not found: images/example-image.png
- `pages/development/getting_started_spring_development.md:179` — Link target not found: ../../images/spring_data_schema.svg
- `pages/development/getting_started_spring_development.md:230` — Link target not found: ../../images/query_methods_rules.png
- `pages/development/getting_started_spring_development.md:233` — Link target not found: ../../images/query_method_verify_at_bootstrap.png
- `pages/development/getting_started_spring_development.md:246` — Link target not found: ../../images/query_native.png
- `pages/development/getting_started_spring_development.md:917` — Link target not found: ../../images/spring-overview.png
- `pages/development/getting_started_spring_development.md:977` — Link target not found: ../../images/test-pyramid.jpg
- `pages/development/getting_started_spring_development.md:997` — Link target not found: ../../images/tdd-cycle.png
- `pages/development/getting_started_spring_development.md:1010` — Link target not found: ../../images/crud-rest-api.png
- `pages/development/git_and_gitflow_trunk_based_dev.md:22` — Link target not found: ../../images/git_flow.jpeg
- `pages/development/git_and_gitflow_trunk_based_dev.md:138` — Link target not found: ../cybersecurity/dev_sec_ops_foundations.md
- `pages/development/git_and_gitflow_trunk_based_dev.md:139` — Link target not found: ../software_engineering/agile_and_scrum.md
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
- `pages/development/on_rest_api_notes.md:68` — Link target not found: ../../images/api-contract-consumer-provider.png
- `pages/general_topic/design_thinking_explained.md:29` — Link target not found: ../../images/desgin-thinking.png
- `pages/general_topic/design_thinking_explained.md:137` — Link target not found: ../cursos/visual_thinking.md
- `pages/general_topic/how_to_build_a_knowledge_base.md:88` — Link target not found: ../cursos/visual_thinking.md
- `pages/general_topic/how_to_build_a_knowledge_base.md:90` — Link target not found: ../artificial_intelligence/herramientas_de_ai.md
- `pages/general_topic/kubernetes.md:77` — Link target not found: ../cybersecurity/dev_sec_ops_foundations.md
- `pages/general_topic/kubernetes.md:78` — Link target not found: ../we_are_developers_wc_2024/charla_20.md
- `pages/general_topic/nosql_the_basis_of.md:227` — Link target not found: ../../images/mdb-vs-sql.png
- `pages/general_topic/nosql_the_basis_of.md:267` — Link target not found: ../../images/sharding.png
- `pages/general_topic/nosql_the_basis_of.md:448` — Link target not found: ../../images/CAP theorem and NoSQL.png
- `pages/general_topic/reflection_on_software_engineering.md:77` — Link target not found: ../software_engineering/software_engineering_timeline.md
- `pages/general_topic/reflection_on_software_engineering.md:78` — Link target not found: ../books/modern_software_engineering.md
- `pages/general_topic/specialization_building_cloud_computing_solutions_at_scale.md:28` — Link target not found: ../../images/cloud_specialization_the_roadmap.png
- `pages/general_topic/specialization_building_cloud_computing_solutions_at_scale.md:768` — Link target not found: ../development/advance_your_spring_development_skills.md
- `pages/general_topic/specialization_building_cloud_computing_solutions_at_scale.md:1329` — Link target not found: ../projects/uso_modelo_machine_learning.md
- `pages/general_topic/specialization_building_cloud_computing_solutions_at_scale.md:1330` — Link target not found: ../cybersecurity/dev_sec_ops_foundations.md
- `pages/general_topic/tech_trends_2023.md:353` — Link target not found: ../software_engineering/generative_ai.md
- `pages/general_topic/tech_trends_2023.md:354` — Link target not found: ../artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md
- `pages/leadership/como_hacer_presentaciones.md:145` — Link target not found: ../cursos/visual_thinking.md
- `pages/leadership/dev_to_tech_lead.md:20` — Link target not found: ../../images/dev_to_lead.jpeg
- `pages/leadership/dev_to_tech_lead.md:188` — Link target not found: ../sw_eng_specialization/team_driving_and_human_resource_management.md
- `pages/leadership/how_to_speak_by_patrick_winston.md:20` — Link target not found: ../../images/how_to_speak.jpeg
- `pages/leadership/what_the_little_prince_teach_about_engineering.md:18` — Link target not found: ../../images/little_prince_sw_engineering.jpeg
- `pages/leadership/what_the_little_prince_teach_about_engineering.md:89` — Link target not found: ../general_topic/reflection_on_software_engineering.md
- `pages/master_direccion_tecnologica/12_TFM_trabajo_final_master/2025-04-19_revision_v0.1.md:64` — Link target not found: 2025-05-03_revisión_v0.2
- `pages/master_direccion_tecnologica/12_TFM_trabajo_final_master/2025-04-19_revision_v0.1.md:65` — Link target not found: 2025-05-20_revisión_v0.4
- `pages/master_direccion_tecnologica/12_TFM_trabajo_final_master/2025-04-19_revision_v0.1.md:66` — Link target not found: 2025-06-05 review 5.0
- `pages/master_direccion_tecnologica/12_TFM_trabajo_final_master/2025-05-03_revisión_v0.2.md:20` — Link target not found: 2025-04-19_revision_v0.1
- `pages/master_direccion_tecnologica/12_TFM_trabajo_final_master/2025-05-20_revisión_v0.4.md:20` — Link target not found: 2025-04-19_revision_v0.1
- `pages/master_direccion_tecnologica/12_TFM_trabajo_final_master/2025-06-05 review 5.0.md:20` — Link target not found: 2025-04-19_revision_v0.1
- `pages/master_direccion_tecnologica/12_TFM_trabajo_final_master/Feedback workshop.md:20` — Link target not found: 2025-04-19_revision_v0.1
- `pages/master_direccion_tecnologica/landing.md:94` — Link target not found: 11_Gestión%20sistemas%20de%20información/sesion_1.md
- `pages/master_direccion_tecnologica/landing.md:95` — Link target not found: 11_Gestión%20sistemas%20de%20información/sesion_2.md
- `pages/master_direccion_tecnologica/landing.md:96` — Link target not found: 11_Gestión%20sistemas%20de%20información/sesion_4.md
- `pages/projects/biblioteca_tecnica.md:352` — Link target not found: ../testing/on_unit_test_tdd_and_bdd.md
- `pages/projects/biblioteca_tecnica.md:353` — Link target not found: ../development/on_rest_api_notes.md
- `pages/projects/biblioteca_tecnica.md:354` — Link target not found: ../development/maven.md
- `pages/projects/orquestador_workflows.md:90` — Link target not found: ../we_are_developers_wc_2024/charla_06.md
- `pages/projects/orquestador_workflows.md:91` — Link target not found: ../development/on_rest_api_notes.md
- `pages/projects/orquestador_workflows.md:92` — Link target not found: ../sw_and_system_architecture/on_hexagonal_architecture_notes.md
- `pages/projects/plataforma_pruebas_smallsats.md:26` — Link target not found: ../../images/generic_satellite.jpg
- `pages/projects/plataforma_pruebas_smallsats.md:52` — Link target not found: ../../images/satellite_overview.png
- `pages/projects/plataforma_pruebas_smallsats.md:101` — Link target not found: ../../images/satellite_environment_context.png
- `pages/projects/plataforma_pruebas_smallsats.md:115` — Link target not found: ../../images/system_overview.png
- `pages/projects/plataforma_pruebas_smallsats.md:134` — Link target not found: ../../images/robot_framework_overwiew.png
- `pages/projects/plataforma_pruebas_smallsats.md:204` — Link target not found: ../testing/bdd_with_cucumber_java_notes.md
- `pages/projects/plataforma_pruebas_smallsats.md:205` — Link target not found: ../testing/gherkin_and_automation.md
- `pages/projects/plataforma_pruebas_smallsats.md:206` — Link target not found: ../testing/on_unit_test_tdd_and_bdd.md
- `pages/projects/plataforma_pruebas_smallsats.md:207` — Link target not found: ../space/space_introduccion.md
- `pages/projects/porfolio_projects.md:108` — Link target not found: ../development/spring_framework_notes.md
- `pages/projects/porfolio_projects.md:109` — Link target not found: ../development/on_rest_api_notes.md
- `pages/projects/porfolio_projects.md:110` — Link target not found: ../cybersecurity/dev_sec_ops_foundations.md
- `pages/projects/porfolio_projects.md:111` — Link target not found: ../sw_and_system_architecture/on_hexagonal_architecture_notes.md
- `pages/projects/uso_modelo_machine_learning.md:50` — Link target not found: ../artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md
- `pages/projects/uso_modelo_machine_learning.md:51` — Link target not found: ../artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/2_fundamentos_estadistica_aprendizaje_automatico.md
- `pages/projects/uso_modelo_machine_learning.md:52` — Link target not found: ../general_topic/specialization_building_cloud_computing_solutions_at_scale.md
- `pages/software_engineering/agile_and_scrum.md:55` — Link target not found: ../../images/stages.png
- `pages/software_engineering/agile_and_scrum.md:162` — Link target not found: ../../images/scrum-framework.png
- `pages/software_engineering/agile_and_scrum.md:327` — Link target not found: ../books/modern_software_engineering.md
- `pages/software_engineering/agile_and_scrum.md:328` — Link target not found: ../books/book_extreme_programming_explained.md
- `pages/software_engineering/agile_and_scrum.md:329` — Link target not found: ../books/the_mythical_man_month.md
- `pages/software_engineering/generative_ai.md:235` — Link target not found: ../artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md
- `pages/software_engineering/generative_ai.md:236` — Link target not found: ../artificial_intelligence/herramientas_de_ai.md
- `pages/software_engineering/generative_ai.md:237` — Link target not found: ../we_are_developers_wc_2024/charla_05.md
- `pages/software_engineering/software_engineering_timeline.md:52` — Link target not found: ../books/modern_software_engineering.md
- `pages/software_engineering/software_engineering_timeline.md:53` — Link target not found: ../books/book_extreme_programming_explained.md
- `pages/software_engineering/software_engineering_timeline.md:54` — Link target not found: ../books/the_mythical_man_month.md
- `pages/software_engineering/the_history_of_the_project_A7_by_David_Parnas.md:81` — Link target not found: ../../images/history_of_a7e_project_by_Paul_Clements.jpeg
- `pages/software_engineering/the_history_of_the_project_A7_by_David_Parnas.md:84` — Link target not found: ../sw_and_system_architecture/sustainable_software_architecture.md
- `pages/software_engineering/the_history_of_the_project_A7_by_David_Parnas.md:85` — Link target not found: ../books/modern_software_engineering.md
- `pages/software_engineering/the_history_of_the_project_A7_by_David_Parnas.md:86` — Link target not found: ../sw_eng_specialization/software_architecture/contenidos.md
- `pages/software_engineering/waterfall.md:78` — Link target not found: ../books/modern_software_engineering.md
- `pages/software_engineering/waterfall.md:79` — Link target not found: ../books/book_extreme_programming_explained.md
- `pages/software_engineering/waterfall.md:80` — Link target not found: ../books/the_mythical_man_month.md
- `pages/space/space_introduccion.md:323` — Link target not found: ../software_engineering/generative_ai.md
- `pages/space/space_introduccion.md:324` — Link target not found: ../artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/2_fundamentos_estadistica_aprendizaje_automatico.md
- `pages/sw_eng_specialization/final_projects_specialization.md:1886` — Link target not found: 
- Git Flow - Gestión de ramas o Branching (Driessen, 2010
- `pages/sw_eng_specialization/final_projects_specialization.md:2387` — Link target not found: ../books/modern_software_engineering.md
- `pages/sw_eng_specialization/final_projects_specialization.md:2395` — Link target not found: ../cybersecurity/dev_sec_ops_foundations.md
- `pages/sw_eng_specialization/final_projects_specialization.md:2396` — Link target not found: ../testing/on_unit_test_tdd_and_bdd.md
- `pages/sw_eng_specialization/final_projects_specialization.md:2397` — Link target not found: ../testing/bdd_with_cucumber_java_notes.md
- `pages/sw_eng_specialization/final_projects_specialization.md:2398` — Link target not found: ../sw_and_system_architecture/on_hexagonal_architecture_notes.md
- `pages/sw_eng_specialization/final_projects_specialization.md:2399` — Link target not found: ../software_engineering/agile_and_scrum.md
- `pages/sw_eng_specialization/software_development_methods.md:59` — Link target not found: ../books/book_extreme_programming_explained.md
- `pages/sw_eng_specialization/software_development_methods.md:63` — Link target not found: ../software_engineering/agile_and_scrum.md
- `pages/sw_eng_specialization/software_development_methods.md:64` — Link target not found: ../software_engineering/waterfall.md
- `pages/sw_eng_specialization/software_quality.md:72` — Link target not found: ../cybersecurity/dev_sec_ops_foundations.md
- `pages/sw_eng_specialization/software_quality.md:73` — Link target not found: ../testing/on_unit_test_tdd_and_bdd.md
- `pages/sw_eng_specialization/software_testing.md:60` — Link target not found: ../testing/on_unit_test_tdd_and_bdd.md
- `pages/sw_eng_specialization/software_testing.md:61` — Link target not found: ../testing/bdd_with_cucumber_java_notes.md
- `pages/sw_eng_specialization/software_testing.md:62` — Link target not found: ../testing/gherkin_and_automation.md
- `pages/sw_eng_specialization/team_driving_and_human_resource_management.md:59` — Link target not found: ../leadership/dev_to_tech_lead.md
- `pages/sw_eng_specialization/team_driving_and_human_resource_management.md:60` — Link target not found: ../leadership/emotional_intelligence.md
- `pages/testing/bdd_with_cucumber_java_notes.md:55` — Link target not found: ../general_topic/on_user_stories_notes.md
- `pages/we_are_developers_wc_2024/charla_01.md:244` — Link target not found: ../general_topic/how_to_build_a_knowledge_base.md
- `pages/we_are_developers_wc_2024/charla_02.md:191` — Link target not found: ../sw_and_system_architecture/sustainable_software_architecture.md
- `pages/we_are_developers_wc_2024/charla_02.md:192` — Link target not found: ../sw_eng_specialization/software_architecture/contenidos.md
- `pages/we_are_developers_wc_2024/charla_03.md:132` — Link target not found: ../sw_and_system_architecture/on_hexagonal_architecture_notes.md
- `pages/we_are_developers_wc_2024/charla_03.md:133` — Link target not found: ../sw_and_system_architecture/vertical_slicing_architectures.md
- `pages/we_are_developers_wc_2024/charla_04.md:72` — Link target not found: ../software_engineering/generative_ai.md
- `pages/we_are_developers_wc_2024/charla_05.md:64` — Link target not found: ../software_engineering/generative_ai.md
- `pages/we_are_developers_wc_2024/charla_05.md:65` — Link target not found: ../artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/1_conceptos_generales.md
- `pages/we_are_developers_wc_2024/charla_06.md:31` — Link target not found: ../../images/sistema_solar_trajectoria_planetas_real.png
- `pages/we_are_developers_wc_2024/charla_06.md:38` — Link target not found: ../../images/sistema_solar_copernico.png
- `pages/we_are_developers_wc_2024/charla_06.md:43` — Link target not found: ../../images/durable_execution_complexity.png
- `pages/we_are_developers_wc_2024/charla_06.md:48` — Link target not found: ../../images/durable_execution_monolito_transaccion.png
- `pages/we_are_developers_wc_2024/charla_06.md:54` — Link target not found: ../../images/durable_execution_transaccional.png
- `pages/we_are_developers_wc_2024/charla_07.md:91` — Link target not found: ../cybersecurity/dev_sec_ops_foundations.md
- `pages/we_are_developers_wc_2024/charla_09.md:59` — Link target not found: ../development/on_rest_api_notes.md
- `pages/we_are_developers_wc_2024/charla_09.md:60` — Link target not found: ../development/OpenApi.md
- `pages/we_are_developers_wc_2024/charla_10.md:84` — Link target not found: ../cybersecurity/dev_sec_ops_foundations.md
- `pages/we_are_developers_wc_2024/charla_11.md:48` — Link target not found: ../sw_and_system_architecture/on_hexagonal_architecture_notes.md
- `pages/we_are_developers_wc_2024/charla_11.md:49` — Link target not found: ../sw_and_system_architecture/vertical_slicing_architectures.md
- `pages/we_are_developers_wc_2024/charla_12.md:75` — Link target not found: ../software_engineering/generative_ai.md
- `pages/we_are_developers_wc_2024/charla_12.md:76` — Link target not found: ../cybersecurity/cybersecurity_h4ck3d.md
- `pages/we_are_developers_wc_2024/charla_14.md:75` — Link target not found: ../general_topic/nosql_the_basis_of.md
- `pages/we_are_developers_wc_2024/charla_15.md:92` — Link target not found: ../cybersecurity/dev_sec_ops_foundations.md
- `pages/we_are_developers_wc_2024/charla_15.md:93` — Link target not found: ../software_engineering/generative_ai.md
- `pages/we_are_developers_wc_2024/charla_16.md:67` — Link target not found: ../software_engineering/generative_ai.md
- `pages/we_are_developers_wc_2024/charla_16.md:68` — Link target not found: ../cybersecurity/dev_sec_ops_foundations.md
- `pages/we_are_developers_wc_2024/charla_16.md:69` — Link target not found: ../development/git_and_gitflow_trunk_based_dev.md
- `pages/we_are_developers_wc_2024/charla_17.md:84` — Link target not found: ../general_topic/kubernetes.md
- `pages/we_are_developers_wc_2024/charla_18.md:75` — Link target not found: ../sw_eng_specialization/software_testing.md
- `pages/we_are_developers_wc_2024/charla_18.md:76` — Link target not found: ../testing/gherkin_and_automation.md
- `pages/we_are_developers_wc_2024/charla_19.md:86` — Link target not found: ../general_topic/nosql_the_basis_of.md
- `pages/we_are_developers_wc_2024/charla_19.md:87` — Link target not found: ../software_engineering/generative_ai.md
- `pages/we_are_developers_wc_2024/charla_19.md:88` — Link target not found: ../artificial_intelligence/ruta_de_aprendisaje/1.fundamentos_inteligencia_artificial/2_fundamentos_estadistica_aprendizaje_automatico.md
- `pages/we_are_developers_wc_2024/charla_20.md:54` — Link target not found: ../general_topic/kubernetes.md

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

