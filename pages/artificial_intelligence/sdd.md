# Spec Driven Development (SDD)

  **Resumen de la formación**

Objetivo: introducir Spec-Driven Development (SDD) como patrón de ingeniería para equipos que usan asistentes de codificación con IA, mostrando cómo formalizar el “qué” antes del “cómo” y reducir la variabilidad de los resultados. La sesión combina fundamentos, comparación de dos frameworks de referencia (OpenSpec y GitHub Spec Kit) y dos casos prácticos (greenfield y brownfield) para que el público pueda replicar el enfoque en sus proyectos.

# Herramientas

[https://openspec.dev/](https://openspec.dev/)

[https://github.github.com/spec-kit/](https://github.github.com/spec-kit/)


# **Índice de temas**

  

1\) Fundamentos de Spec-Driven Development (SDD)

  

Qué es SDD y por qué importa con agentes de IA: especificaciones ejecutables que guían la generación de código en lugar de prompts ad-hoc.

  

Problemas que resuelve: alineación humano/IA, trazabilidad, consistencia arquitectónica y reducción de “context tax”.

  

2\) Marcos de trabajo: OpenSpec vs GitHub Spec Kit

  

Visión general de cada herramienta: filosofía, modelo de especificación y encaje típico (greenfield vs brownfield).

  

Tabla comparativa de características y diferencias.

  

3\) Caso práctico A – Proyecto greenfield (nuevo)

Flujo recomendado con Spec Kit: constitución → specify → plan → tasks → implement (con opcional clarify/analyze/checklist).

  

Estructura de artefactos y entregables típicos (7+ archivos por feature).

  

Demo/ walkthrough de un feature end-to-end.

  

4\) Caso práctico B – Proyecto brownfield (legacy)

  

Flujo recomendado con OpenSpec: propose → apply → archive (con verify opcional), modelo de delta specs (ADDED/MODIFIED/REMOVED).

  

Ventajas en codebases existentes: cambio incremental, specs vivos y menor sobrecarga documental.

  

Demo/ walkthrough de una modificación sobre código legacy.

  

5\) Cierre operativo

  

Cuándo usar cada framework (criterios de selección).

  

Patrón de adopción en equipos: pilotaje, estándares mínimos y extensión progresiva.