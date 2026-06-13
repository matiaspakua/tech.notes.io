---
title: "Quantum Computing for classical developers"
tags:
  - conferencia
  - we-are-developers
  - 2024
  - notas
---

# Quantum Computing for classical developers

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

## Introducción

La computación clásica será **aumentada** por Quantum Computing (QC), no reemplazada. La unidad de procesamiento se llama **QPU** (Quantum Computing Processing Unit).

La gran diferencia:

| | Computación Clásica | Computación Cuántica |
|---|---|---|
| Unidad básica | Bit (0 ó 1) | Qubit (0, 1, o ambos simultáneamente) |
| Estados posibles con n unidades | 2^n estados **secuenciales** | 2^n estados **simultáneos** |

La <mark style="background: #FFF3A3A6;">superposición</mark> en sí no sirve de mucho porque el resultado verdadero se mezcla con todos los resultados falsos superpuestos. Aquí entra la **Quantum Fourier Transformation** para extraer los resultados relevantes.

## Caso de ejemplo: Algoritmo de Shor (romper RSA)

Demostración matemática de cómo se podría resolver una encriptación usando quantum computing.

El punto principal: los QPU solo harán **parte** del trabajo de procesamiento, apoyándose en la computación clásica. El flujo es:

```mermaid
flowchart LR
    PROB["🖥️ Problema clásico\n(RSA-2048 factorización)"] --> QPU["⚛️ QPU\n(Quantum Processing Unit)"]
    QPU -->|"superposición\n2ⁿ estados simultáneos"| STATES["🌀 Todos los estados\nen paralelo"]
    STATES -->|"Quantum Fourier\nTransformation"| EXTRACT["🎯 Extracción de\nresultados relevantes"]
    EXTRACT -->|"los más probables"| CPU["💻 CPU clásica\n(post-procesamiento)"]
    CPU --> RESULT["✅ Resultado final"]

    style QPU fill:#1e1e2e,stroke:#bd93f9,color:#f8f8f2
    style STATES fill:#1e1e2e,stroke:#61dafb,color:#f8f8f2
```

1. Se plantea el problema de forma clásica
2. Se pasa la "carga" de procesamiento al QPU
3. El QPU procesa en paralelo y simultáneamente todas las alternativas
4. De todos los resultados simultáneos, solo se toman los más probables

## Problemas actuales

1. Para resolver el algoritmo de Shor sobre RSA-2048 se necesitan **2 millones de qubits** (actualmente existen procesadores de ~1000 qubits)
2. **Error correction**: cómo corregir las interferencias que pueden hacer colapsar el cálculo (decoherencia)

## Aplicaciones prácticas

1. **Quantum Machine Learning (QML)**
2. **Problemas de optimización** (logistics, portfolio optimization, drug discovery)

## References

- [Shor's Algorithm — Wikipedia](https://en.wikipedia.org/wiki/Shor%27s_algorithm)
- [Quantum Computing — Wikipedia](https://en.wikipedia.org/wiki/Quantum_computing)
- [IBM Quantum — Official Site](https://www.ibm.com/quantum)
