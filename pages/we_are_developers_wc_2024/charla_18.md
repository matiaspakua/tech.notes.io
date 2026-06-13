---
title: "Non-Functional user Stories Specification and test"
tags:
  - conferencia
  - we-are-developers
  - 2024
  - notas
---

# Non-Functional user Stories Specification and test

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

## Agile: artefactos de requerimientos

Cómo se organizan los artefactos desde el alto nivel hasta las user-stories. Tanto del lado del cliente → developer → management. Básicamente un mapa de donde cae cada cosa en una matrix: épicas, features, user stories, acceptance criteria.

## Req. Funcionales vs RNF

- **Requisitos funcionales**: describen el comportamiento del sistema (qué hace).
- **Requisitos no funcionales (RNF)**: describen restricciones de calidad (cómo lo hace).

Árbol de categorías de RNF basado en <mark style="background: #FFF3A3A6;">ISO 25010:2023</mark>: rendimiento, usabilidad, seguridad, mantenibilidad, portabilidad, confiabilidad, compatibilidad.

## Specification on Scrum

Generalmente los RNF no se escriben como debería. Pasan a ser un "wishlist" vago ("el sistema debe ser rápido") sin métricas ni criterios de aceptación claros.

La solución: escribir los RNF como user stories con datos que puedan ser validados a través de pruebas, usando **criterios de aceptación** medibles.

Ejemplo:
> *"Como usuario final, quiero que la página de inicio cargue en menos de 2 segundos bajo una carga de 1000 usuarios concurrentes."*

## Takeaways

1. Considerar los RNF desde el inicio del proyecto
2. Revisar la norma **ISO 25010:2023** como base de categorías
3. Especificar con criterio: solo lo que tenga sentido testear
4. Escribir los acceptance criteria y automatizar los tests asociados
5. Los NFR demandan mucho tiempo — priorizar qué testear y cómo

## References

- [ISO/IEC 25010:2023 — Systems and software Quality Requirements and Evaluation (SQuaRE)](https://www.iso.org/standard/35733.html)
- [Non-Functional Requirements — Wikipedia](https://en.wikipedia.org/wiki/Non-functional_requirement)

## Notas relacionadas

- [Testing de Software](../sw_eng_specialization/software_testing.md)
- [Gherkin and Automation](../testing/gherkin_and_automation.md)
