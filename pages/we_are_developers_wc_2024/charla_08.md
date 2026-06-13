---
title: "Intentional code: minimalism in a world of dogmatic design"
tags:
  - conferencia
  - we-are-developers
  - 2024
  - notas
---

# Intentional code: minimalism in a world of dogmatic design

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

Charla sobre cómo evitar la trampa de aplicar patrones de diseño dogmáticamente y en cambio escribir código **con intención clara**.

## Software as Literature

El software es una forma de literatura que se usa para comunicar de programador a programador (código), pero que además entiende la máquina. La clave: escribir para quien lo lee, no solo para quien lo ejecuta.

## Intentional > Clean

El objetivo no es "código limpio" como fin en sí mismo, sino comunicar la **intención**.

- **Macro** → patrones de organización (arquitectura, módulos)
- **Micro** → forma, flujos y cohesión (funciones, variables, estructura)

Hasta las líneas importan: así como usamos párrafos en texto, la forma del código da señales visuales al lector.

## The Central Challenge

<mark style="background: #FFF3A3A6;">INTENCIONALIDAD es lo opuesto a COMPLEJIDAD.</mark>

La complejidad de una aplicación debe ser como mucho tan compleja como el problema en el espacio en el cual habita, **y no mayor**. Cuando una solución es más compleja que el problema, algo está mal.

> [!note]
> El diseño estructural a veces se hace demasiado grande. Los patrones de diseño
> aplicados dogmáticamente generan más complejidad de la que resuelven.

## Buen código, diseño, abstracciones

1. Código que es fácil de leer para otra persona con poco conocimiento del negocio.
2. Código orientado para desarrolladores: fácil de leer, debuguear y usar.
3. Código cuya intención se vea tan clara como cuando se lee un párrafo de un buen libro.

## Poner el diseño en práctica

Repasar el diseño y el código que se escribe y ser autocrítico: ¿se entiende la intención sin leer los comentarios?

```mermaid
flowchart TD
    INT["🎯 Código Intencional\n(Intentional Code)"]

    INT --> MACRO["📐 Nivel Macro\n(arquitectura / módulos)"]
    INT --> MICRO["🔬 Nivel Micro\n(funciones / variables / forma)"]

    MACRO --> M1["Patrones de organización\ncon propósito claro"]
    MACRO --> M2["Arquitectura ≤ complejidad\ndel problema"]
    MICRO --> U1["Nombres que comunican\nla intención"]
    MICRO --> U2["Cohesión visible\nen la estructura"]
    MICRO --> U3["Párrafos de código:\nlíneas en blanco como señales"]

    INT --> OPP["⚠️ Lo opuesto:\nComplejidad Accidental"]
    OPP --> D1["Patrones dogmáticos\nsin necesidad real"]
    OPP --> D2["Abstracciones prematuras\nque oscurecen la intención"]

    style INT fill:#1e1e2e,stroke:#64ffda,color:#f8f8f2
    style MACRO fill:#1e1e2e,stroke:#61dafb,color:#f8f8f2
    style MICRO fill:#1e1e2e,stroke:#50fa7b,color:#f8f8f2
    style OPP fill:#1e1e2e,stroke:#ff5555,color:#f8f8f2
```

## References

- [A Philosophy of Software Design — John Ousterhout, Yaknyam Press, 2018](https://www.goodreads.com/book/show/39996759-a-philosophy-of-software-design)
- [Clean Code — Robert C. Martin, Prentice Hall, 2008](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
