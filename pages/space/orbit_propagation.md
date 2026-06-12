---
title: "Propagación Orbital y Guía de Python"
tags:
  - espacio
  - satelites
  - notas
---

# Propagación Orbital y Guía de Python

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

---

## Tipos de Órbitas

- **LEO** (Low Earth Orbit): altitud entre 200 y 2,000 km. Ejemplos: ISS, Starlink.
- **MEO** (Medium Earth Orbit): altitud entre 2,000 y 35,786 km. Ejemplos: GPS, Galileo, GLONASS.
- **GEO** (Geostationary Orbit): altitud ~35,786 km. El satélite orbita en sincronía con la rotación terrestre.

## Órbita Kepleriana

La **órbita Kepleriana** se describe mediante los 6 **elementos orbitales de Kepler** (Keplerian Elements):

1. **Semi-major axis (a)**: tamaño de la órbita.
2. **Eccentricity (e)**: forma de la órbita (0 = circular, 1 = parabólica).
3. **Inclination (i)**: ángulo del plano orbital respecto al ecuador.
4. **Right Ascension of Ascending Node (RAAN, Ω)**: orientación del plano orbital.
5. **Argument of Perigee (ω)**: orientación de la elipse en el plano orbital.
6. **True Anomaly (ν)**: posición del satélite en la órbita.

> [!note]
> El propagador estándar para satélites en LEO usando TLE (Two-Line Element sets) es **SGP4** (Simplified General Perturbations Model 4). Es el estándar de la industria para predicción de órbitas a corto plazo.

## Código del Workshop

- [Notebook Workshop — Google Colab](https://colab.research.google.com/drive/1EjnyD51IfYV1trbaSpjOc6sTfAf6YM3A?usp=sharing)

## Guía de Python

- [Notebook Python Espacial — Google Colab](https://colab.research.google.com/drive/1qGK2ZbD1Ncz-P3wTCsQLIqRvohF7nidZ)

## Referencias

- [Leyes de Kepler — Wikipedia](https://es.wikipedia.org/wiki/Leyes_de_Kepler)
- [SGP4 — Wikipedia](https://en.wikipedia.org/wiki/Simplified_perturbations_models)
- [Two-Line Element Set (TLE) — Wikipedia](https://en.wikipedia.org/wiki/Two-line_element_set)
- [Tipos de órbita — ESA](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits)