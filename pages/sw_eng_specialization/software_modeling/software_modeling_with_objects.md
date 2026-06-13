---
title: "Modelado de Software con Objetos"
tags:
  - especializacion
  - uca
  - universidad
  - modelado
  - uml
  - notas
---

# Modelado de Software con Objetos

[← Inicio](https://matiaspakua.github.io/tech.notes.io)


--- 

## Conceptos del Paradigma de Objetos

```mermaid
classDiagram
    class Objeto {
        +identidad
        +estado
        +comportamiento
        +enviarMensaje()
    }

    class Clase {
        +atributos
        +métodos
        +instanciar() Objeto
    }

    class ClaseAbstracta {
        <<abstract>>
        +métodoAbstracto()*
    }

    class Interfaz {
        <<interface>>
        +contrato()
    }

    class PatronDiseño {
        +nombre
        +problema
        +solución
        +consecuencias
    }

    class State {
        +manejarEstado()
    }

    class Strategy {
        +ejecutarAlgoritmo()
    }

    class Singleton {
        -instancia$
        +getInstancia()$
    }

    Clase --> Objeto : instancia
    ClaseAbstracta <|-- Clase : hereda
    Interfaz <|.. Clase : implementa
    PatronDiseño <|-- State
    PatronDiseño <|-- Strategy
    PatronDiseño <|-- Singleton
```

## Contenidos

Conceptos básicos del paradigma: Objeto, Mensaje, método, polimorfismo, Identidad, Colaboraciones, colaboradores. Conceptos y construcciones derivados del paradigma: Creación de objetos, destrucción de objetos, Prototipos, Clases abstractas y concretas, Clasificación, subclasificación y herencia. Concepto de “tipo” en el paradigma de objetos. Lenguajes y ambientes de desarrollo. Notación UML básica: Diagrama de Objetos, Diagrama de Secuencia Definición y especificación de protocolos y contratos. Manejo de Excepciones. Jerarquías polimórficas. Encapsulamiento. Beneficios del binding dinámico. Notación UML básica: Diagrama de Clases. Breve introducción a patrones de diseño. Definición de Arquitectura. Problemas de Diseño recurrentes. Idioms. Definición de Patrón de Diseño. Ejemplos de utilización de patrones Caracterización del diseño. Repaso de Jerarquías polimórficas. Refactoring. Inspección. Introducción a los principales patrones de diseño: State, Command, Singleton, Strategy, Factory. Frameworks: Caja Blanca, Caja Negra.