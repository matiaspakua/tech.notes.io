---
title: "The Mythical Man-Month"
tags:
  - libros
  - notas
---

# The Mythical Man-Month

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

---

> [!note]
> **"The Mythical Man-Month: Essays on Software Engineering"** por Frederick P. Brooks Jr.
> Primera edición: 1975. Edición aniversario (20 años) con capítulos adicionales: 1995.
> ISBN (edición aniversario): 978-0201835953
>
> **Brooks's Law**: "Adding manpower to a late software project makes it later."

# Mythical Man Month. By Fred Brooks.

## Chapter One. The tar pit.

### The programming system product.
1. Huawei then have not all industrial programming teams being replaced by dedicate garage doors. One must look at what it's being produced.
2. Programming System. Brooks. This refers from the simple programme in all the above ways. It costs 9 times as much but is the truly useful object the intended product of most system programming efforts.

### The joys of the Craft.
1. 1st is the sheer joy of making things.
2. 2nd is pleasure of making things that are useful to other people.
3. Finally, there is the delight of working in Such a tractable medium.

### The woes of the craft

1.	Humans being are not accustomed to being perfect and few areas of human activity Demand it.
2.	The dependence upon others has a particular case in that is especially painful for the system programmer.
3.	Massive spend hours studying and fixing things that in ideal world would be completed, available and usable.
4.	The product over which one has Liberal so long appears to be obsolete upon or before completion.
5.	Of course, they technological base on which one builds is always advancing as soon as one freeze design is become obsolete in terms of its concepts.

## Chapter 2. The mythical Man Month.

### Brooks's Law visualizado

```mermaid
flowchart LR
    LAT["⏰ Proyecto\ntardío"] -->|"solución intuitiva"| ADD["➕ Agregar\npersonas"]
    ADD -->|"más canales de comunicación\nn*(n-1)/2"| COM["💬 Overhead de\ncomunicación"]
    COM -->|"curva de aprendizaje\n+ distracción del equipo"| MORE["⏳ Más tardío\naún"]
    MORE -->|"Brooks's Law"| LAT

    style LAT fill:#1e1e2e,stroke:#ff5555,color:#f8f8f2
    style ADD fill:#1e1e2e,stroke:#ffd700,color:#f8f8f2
    style COM fill:#1e1e2e,stroke:#ff9f43,color:#f8f8f2
    style MORE fill:#1e1e2e,stroke:#ff5555,color:#f8f8f2
```

> "Adding manpower to a late software project makes it later." — Fred Brooks, 1975

---

## References

- [The Mythical Man-Month — Frederick P. Brooks Jr., 1975 (anniversary ed. 1995)](https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959) (ISBN: 978-0201835953)
- [Brooks's Law — Wikipedia](https://en.wikipedia.org/wiki/Brooks%27s_law)
- [Frederick P. Brooks Jr. — Wikipedia](https://en.wikipedia.org/wiki/Fred_Brooks)

## Notas relacionadas

- [Agile and Scrum. The perks of know nothing](../software_engineering/agile_and_scrum.md)
- [Waterfall. The misunderstood concept in software engineering](../software_engineering/waterfall.md)
- [Software Engineering Timeline](../software_engineering/software_engineering_timeline.md)
- [Modern Software Engineering: Doing What Works to Build Better Software Faster](modern_software_engineering.md)
- [Extreme Programming Explained by Kent Beck](book_extreme_programming_explained.md)
