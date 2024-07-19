# Modern data Architectures need software engineering

## introducción

que es data architecture? sistemas, processos, analisis de datos, toma de decisiones. Data-Driven decision, design, etc.

==> Problemas?

1. Datos distribuidos
2. Datos dificiles de manejar.

## Evolución de Procesos clasicos

Fuente -> ETL => data warehouse -> reportes, BI, analytics.

Luego Fuente pueden ser "data lakes"

Luego Cloud Data Lakes (snowflake)

ETL a ELT => Extract, Load => luego Transform

Data Lakehouse (IcerBerg) y formatos de almacenamiento.


## Challenge: centralización

Es lo más práctico, pero en grandes organizaciones puede ser un problema por el volumen.

==> Data Mesh => DDD para los datos.

## Influencia en la Ingenieria del software

Python ecosistema para el procesamiento de datos.
Testing= unit, integration, and data test.
sobre los ambientes de pruebas: dev, pre-prod, prod y como se debe hacer ingeniería de datos

## modern data stack => dbt

Devops aplicado a data
dbt => herramienta para hacer consultas SQL y archivos yaml para confgurar
con esta herramienta podemos hacer test_unitarios para "datos", o sea, TDD en datos.
poner todo en el repositorio "dbt" hace que se pueda crear un pipeline y por lo tanto, automatizar el proceso.

## Data Contract - Like API pero para DATA

https://datacontract.com/

## Data-as-a-Product & data-thinking

Puede producir valor (es el oro de nuestros tiempos)
Que se puede hacer con los datos?
