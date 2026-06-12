---
title: "Modern data Architectures need software engineering"
tags:
  - conferencia
  - we-are-developers
  - 2024
  - notas
  - arquitectura
  - data-engineering
---

# Modern data Architectures need software engineering

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

> [!note]
> Charla de **Matthias Niehoff** sobre cómo las arquitecturas de datos modernas necesitan prácticas de ingeniería de software.

## Introducción

¿Qué es data architecture? Sistemas, procesos, análisis de datos, toma de decisiones. Data-Driven decision, design, etc.

==> Problemas?

1. Datos distribuidos
2. Datos dificiles de manejar.

## Evolución de Procesos clasicos

Fuente -> ETL => data warehouse -> reportes, BI, analytics.

Luego Fuente pueden ser "data lakes"

Luego Cloud Data Lakes (snowflake)

ETL a ELT => Extract, Load => luego Transform

Data Lakehouse (Apache Iceberg) y formatos de almacenamiento.


## Challenge: centralización

Es lo más práctico, pero en grandes organizaciones puede ser un problema por el volumen.

==> Data Mesh => DDD para los datos.

## Influencia en la Ingenieria del software

Python ecosistema para el procesamiento de datos.
Testing= unit, integration, and data test.
sobre los ambientes de pruebas: dev, pre-prod, prod y como se debe hacer ingeniería de datos

## modern data stack => dbt

Devops aplicado a data
dbt => herramienta para hacer consultas SQL y archivos yaml para configurar
con esta herramienta podemos hacer test_unitarios para "datos", o sea, TDD en datos.
poner todo en el repositorio "dbt" hace que se pueda crear un pipeline y por lo tanto, automatizar el proceso.

## Data Contract — como una API pero para DATA

Ver [Data Contract Specification](https://datacontract.com/).

## Data-as-a-Product & data-thinking

Puede producir valor (es el oro de nuestros tiempos)
Que se puede hacer con los datos?
