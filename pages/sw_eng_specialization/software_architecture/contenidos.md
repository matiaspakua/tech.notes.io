---
title: "Arquitectura de Software"
tags:
  - especializacion
  - uca
  - universidad
  - arquitectura
  - patrones
  - notas
---

# Arquitectura de Software

[← Inicio](https://matiaspakua.github.io/tech.notes.io)


--- 

# Contenidos

## Marco de Arquitectura de Software

```mermaid
flowchart TD
    REQARCH["📋 Requisitos que\nAfectan la Arquitectura\n(RF + RNF + calidad)"]
    REQARCH --> CONFLICT["⚡ Conflictos\nde Requisitos\n(performance vs seguridad,\nflexibilidad vs costo)"]
    CONFLICT --> DECISION["🎯 Decisiones\nArquitecturales\n(ADRs)"]

    DECISION --> VIEW["📐 Vistas y Estilos\nArquitecturales"]
    VIEW --> V1["🔧 Vista Lógica\n(componentes, módulos)"]
    VIEW --> V2["🚀 Vista de Despliegue\n(infraestructura)"]
    VIEW --> V3["🔄 Vista de Procesos\n(concurrencia, integración)"]

    DECISION --> DOC["📄 Documentación\nArquitectural"]
    DOC --> COMM["🤝 Comunicación\nHumana de Arquitecturas"]

    DECISION --> EVAL["🔍 Evaluación\nde Arquitecturas\n(ATAM, CBAM)"]
    EVAL -->|"feedback"| DECISION

    style REQARCH fill:#1e1e2e,stroke:#61dafb,color:#f8f8f2
    style DECISION fill:#1e1e2e,stroke:#ffd700,color:#f8f8f2
    style EVAL fill:#1e1e2e,stroke:#50fa7b,color:#f8f8f2
    style DOC fill:#1e1e2e,stroke:#bd93f9,color:#f8f8f2
```

Conceptos, técnicas y modelos de Arquitectura de Software: Conceptos de Arquitectura de Software. Arquitecturas en el contexto de la Ingeniería del Software. Cómo se identifican los requerimientos que afectan una arquitectura de software. Conflictos entre requerimientos. 

Complejidad de crear una arquitectura de software Documentación formal en ingeniería de software. Necesidades y puntos a tener en cuenta al realizar cualquier tipo de documentación. Documentación de arquitecturas de software. Cómo se documenta una arquitectura de software. Las vistas y estilos existentes para modelar una arquitectura. Los roles y la importancia relativa de los distintos aspectos de una arquitectura. Aspectos humanos de la comunicación de arquitecturas de software. 

Evaluación y juicio crítico-objetivo de arquitecturas de software. Métodos y procesos formales, semi-formales e informales para evaluar arquitecturas de software. ROI de analizar una arquitectura de software. Parámetros para decidir si una arquitectura es lo suficientemente buena. Costo de evaluar arquitecturas de software.