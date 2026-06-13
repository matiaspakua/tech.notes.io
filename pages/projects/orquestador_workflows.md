---
title: "Proyecto: Orquestador de workflows"
tags:
  - proyectos
  - notas
---

# Proyecto: Orquestador de workflows

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

## Introducción

Este proyecto tiene como objetivo definir un sistema de gestión, ejecución y monitoreo de workflows. Un <mark style="background: #FFF3A3A6;">workflow</mark> se define como una secuencia de tareas que se deben llevar a cabo por uno o varios componentes de un sistema. 

Cada tarea de un workflow se define de forma independiente, autónoma y autosuficiente, esto quiere decir que al ser llamada para su ejecución, recibe una entrada (<mark style="background: #FFF3A3A6;">data input</mark>) y genera una salida (<mark style="background: #FFF3A3A6;">data output</mark>). Tanto los data inputs como outputs pueden ser de diversa naturaleza (un mensaje, datos en formato binario, un txt, csv, json, etc).

Un workflow se debe define en un archivo YAML donde cada archivos es un "<mark style="background: #FFF3A3A6;">workflow definition</mark>", dentro del YAML, cada sección es una tarea y cada tarea es ejecutada por uno (y solo uno) componente del sistema o interfaz externa (componente externo).

## Repositorio de código


> [!url]
> https://github.com/matiaspakua/orquestador_workflows

## Alcance

// TODO

## Definiciones

La lista de tareas del workflow definition (archivo .yaml) se definen de la siguiente manera:

```terminal
$ workflow_1.yaml
```


```yaml

workflow_name: workflow_1
steps:
- step:
  component: component_A
  imput: input_data_A
  output: output_data_A
  wait_for_return: false

```


## Contexto

![](../../images/C0_orquestador_workflows.png)

## Flujo de ejecución

```mermaid
sequenceDiagram
    participant C as Cliente
    participant O as Orquestador
    participant T as Tarea (Step)
    participant E as Componente Externo

    C->>O: Enviar workflow YAML
    O->>O: Parsear definición
    loop Para cada step
        O->>T: Ejecutar tarea(input)
        alt componente externo
            T->>E: Llamada externa
            E-->>T: Resultado
        end
        T-->>O: output_data
    end
    O-->>C: Resultado final del workflow
```

## Referencias

- [YAML Specification — yaml.org](https://yaml.org/spec/)
- [Workflow Orchestration Patterns — Maxim Fateev, Temporal.io](https://temporal.io/blog/workflow-orchestration)
- [Martin Fowler — Process Manager Pattern](https://www.enterpriseintegrationpatterns.com/ProcessManager.html)

## Notas relacionadas

- [Durable Execution (Temporal.io)](../we_are_developers_wc_2024/charla_06.md)
- [REST API Notes](../development/on_rest_api_notes.md)
- [Architecture — Hexagonal](../sw_and_system_architecture/on_hexagonal_architecture_notes.md)
