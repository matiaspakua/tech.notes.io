---
title: "Testing de Software"
tags:
  - especializacion
  - uca
  - universidad
  - notas
---

# Testing de Software

[← Inicio](https://matiaspakua.github.io/tech.notes.io)


--- 

## Pirámide y Ciclo de Testing

```mermaid
flowchart TD
    REQ["📋 Requerimientos\n(funcionales y no funcionales)"] --> PLAN["📝 Planificación\nde Testing"]
    PLAN --> DESIGN["🎨 Diseño de\nCasos de Prueba"]
    DESIGN --> EXEC["⚙️ Ejecución\nde Pruebas"]
    EXEC --> EVAL["📊 Evaluación\nde Resultados"]
    EVAL -->|"defecto encontrado"| FIX["🔧 Corrección\ny Retesting"]
    FIX --> EXEC
    EVAL -->|"pruebas OK"| REPORT["✅ Informe\nde Calidad"]

    DESIGN --> UT["🔬 Unit Tests\n(caja blanca, estructural)"]
    DESIGN --> IT["🔗 Integration Tests\n(interfaces entre módulos)"]
    DESIGN --> ST["🌐 System Tests\n(funcional / no funcional)"]
    DESIGN --> AT["✔️ Acceptance Tests\n(BDD / criterios de aceptación)"]

    style REQ fill:#1e1e2e,stroke:#61dafb,color:#f8f8f2
    style PLAN fill:#1e1e2e,stroke:#ffd700,color:#f8f8f2
    style DESIGN fill:#1e1e2e,stroke:#bd93f9,color:#f8f8f2
    style EXEC fill:#1e1e2e,stroke:#50fa7b,color:#f8f8f2
    style EVAL fill:#1e1e2e,stroke:#64ffda,color:#f8f8f2
    style REPORT fill:#1e1e2e,stroke:#50fa7b,color:#f8f8f2
    style FIX fill:#1e1e2e,stroke:#ff5555,color:#f8f8f2
```

## Contenidos

Actividades, terminología y modelos de validación y verificación de software. Uso de técnicas y herramientas de validación y verificación. Calidad de producto software: calidad funcional y no funcional. Validación y verificación en los modelos de desarrollo. Validación y verificación en distintos dominios de aplicación. Taxonomía de técnicas y herramientas. Validación y verificación para distintos artefactos de software. Requerimientos, diseños, código. Testing. Tareas del proceso de testing. Niveles de testing. Tipos de testing. Testing funcional. Definición de casos y datos de prueba. Testing estructural. Testing de integración. Planificación de testing. Testing no funcional. Otras técnicas de validación y verificación para software crítico: Concepto de alta integridad. Dependability, survivability, reliability, safety, confiabilidad de software. Safety engineering. Técnicas avanzadas de análisis de software: dataflow analysis, model checking, slicing, abstract interpretation.

## Referencias

- [The Art of Software Testing — Glenford Myers, Wiley, 2011](https://www.wiley.com/en-us/The+Art+of+Software+Testing%2C+3rd+Edition-p-9781118031964)
- [ISTQB Certified Tester Foundation Level Syllabus](https://www.istqb.org/certifications/certified-tester-foundation-level)

## Notas relacionadas

- [TDD y BDD](../testing/on_unit_test_tdd_and_bdd.md)
- [BDD con Cucumber](../testing/bdd_with_cucumber_java_notes.md)
- [Gherkin y Automatización](../testing/gherkin_and_automation.md)
- [Trabajo Final de Especialización](final_projects_specialization.md)