---
title: "Durable Execution: A revolutionary abstraction for building resilient applications"
tags:
  - conferencia
  - we-are-developers
  - 2024
  - notas
  - arquitectura
---

# Durable Execution: A revolutionary abstraction for building resilient applications

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

> [!note]
> Charla de **Maxim Fateev** — CTO/Cofounder @ Temporal.io
> [LinkedIn](https://www.linkedin.com/in/fateev)

---
### Introducción

Representación del sistema solar, trajectoria de los planetas:

![500x400](../../images/sistema_solar_trajectoria_planetas_real.png)

---
### Abstracciones

Nosotros trabajamos con abstracciones, pero hay niveles de abstracción. El problema aparece cuando se modelas las abstracciones equivocadas o de manera equivocada.

![800x400](../../images/sistema_solar_copernico.png)

---
### Complejidad de los sistemas

![700x500](../../images/durable_execution_complexity.png)

---
### Propiedad de un sistema monolito

![700x500](../../images/durable_execution_monolito_transaccion.png)


---
### Concepto de Transaccionalidad

![700x500](../../images/durable_execution_transaccional.png)

---

### Consistencia Eventual

Un sistema monolítico es <mark style="background: #BBFABBA6;">transaccional</mark> y las transacciones no permiten <mark style="background: #FFF3A3A6;">"fallas parciales"</mark>.

Pero cuando el monolito es muy grande, la estrategia es separarlo en **microservicios**. Y cuando los pasos de un determinado proceso está separado y toma más tiempo completarlo, las transacciones no sirven. Entonces apare: <mark style="background: #FFF3A3A6;">Event-Driven.</mark>

---

![](../../images/monolith_to_microservices.png)

Fuente: https://pivovarit.github.io/talks/embracing-microservices/

---
### Event-Driven Architecture al rescate

```mermaid
flowchart LR
    PROD["📤 Productor\n(genera evento)"] -->|"publica"| CANAL["📡 Canal / Broker\n(Kafka / RabbitMQ)"]
    CANAL -->|"propaga"| C1["📥 Consumidor A\n(procesa evento)"]
    CANAL -->|"propaga"| C2["📥 Consumidor B\n(procesa evento)"]
    CANAL -->|"propaga"| C3["📥 Consumidor C\n(procesa evento)"]

    style CANAL fill:#1e1e2e,stroke:#ffd700,color:#f8f8f2
    style PROD fill:#1e1e2e,stroke:#61dafb,color:#f8f8f2
```

 - <mark style="background: #FFF3A3A6;">Productores</mark>: produced => un EVENTO es generado
 - <mark style="background: #FFF3A3A6;">Canal</mark>: publica y propaga un mensaje (asociado un evento)
- <mark style="background: #FFF3A3A6;">Consumidores</mark>: detectan el mensaje del canal y consumen el mensaje, para luego actuar sobre el "evento"
- Arquitectura de mensajes <mark style="background: #FFF3A3A6;">"asincrónica" y distribuida</mark>.

Ref. https://en.wikipedia.org/wiki/Event-driven_architecture

---
### Abstracciones y sus complejidades

![](../../images/monolith_vs_microservices.jpg)


---
### Abstracciones y sus complejidades

 - Microservices => complejidad distribuida
 - Monolitos => complejidad en un solo lugar
 - Arquitectura basada en eventos=> se pierde la lógica
 - Scatered Logs. => se distribuye la lógica de negocio
 - Error Handling => mal manejada, distribuida, que pasa con la lógica distribuida.
 - Visibilidad y Debugging => solo notifica que pasan cosas n algún lugar

<mark style="background: #FFF3A3A6;">Eventos</mark> => son variables globales en sistemas distribuidos. ATENCION.

---

![](../../images/event_driven_architecture_schema.png)

---
## Durable Execution 

=><mark style="background: #FFF3A3A6;"> ejecución que no crashea por causas de fallas a nivel sistema</mark>.

**La principal idea es**: recuperar el estado de una transacción distribuida, pese a la falla de una parte o todo el sistema.

```mermaid
sequenceDiagram
    participant C as Cliente
    participant W as Workflow\n(Temporal.io)
    participant A as Activity A\n(debit)
    participant B as Activity B\n(credit)
    participant S as State Store\n(persistente)

    C->>W: start transfer(100$)
    W->>S: persist state=STARTED
    W->>A: execute debit()
    A-->>W: success
    W->>S: persist state=DEBITED
    Note over W: sistema falla aquí 💥
    Note over W: se reinicia y recupera estado
    W->>S: recover state=DEBITED
    W->>B: execute credit()
    B-->>W: success
    W->>S: persist state=COMPLETED
    W-->>C: transfer done ✓
```

---
### Caracteristicas:

1. Estado totalmente persistente.
2. Duración ilimitada
3. Duración ilimiatda de llamadas a API
4. Logica de Retry
5. Comunicación asincronica
6. Times Durables.

---

![](../../images/durable_execution_temporal.io.png)

---

### Demo: Implementación

 - Usando event-sourcring.
 - Ejemplo de un banco y transacciones.


---
### Armar ambiente dev

Paso #01. Instalar el CLI de temporal.io para comenzar a desarrollar:

Link: [Set up a local development environment for Temporal and Java | Learn Temporal](https://learn.temporal.io/getting_started/java/dev_environment/)

Luego de bajar el CLI, se puede ejecutar:

```bash

$ temporal server start-dev
CLI 1.0.0 (Server 1.24.2, UI 2.28.0)

Server:  localhost:7233
UI:      http://localhost:8233
Metrics: http://localhost:63504/metrics

```

---
### Servidor local en localhost

Link: [Workflows default](http://localhost:8233/namespaces/default/workflows)

![](../../images/temporal.io.localhost.png)

---
### Proyecto de ejemplo: money-transfer

```bash
 git clone https://github.com/temporalio/money-transfer-project-java
```

Básicamente la aplicación es lo siguiente:

![](../../images/temporal-high-level-application-design.png)

---

1) Iniciar: TransferApp
2) Ver en la UI el workflow en progreso
3) Iniciar un worker: MoneyTransferWorker (hace el Withdraw y el Deposit )
4) 


---

# Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/wIpz4ioK0gI?si=xS7z-_UsLxl0McCV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

# Temporal.io  Durable Execution platform

- Web: [temporal.io](https://temporal.io)
- GitHub demo: [temporalio/money-transfer-project-java](https://github.com/temporalio/money-transfer-project-java)

## Notas relacionadas

- [Autonomous microservices with event-driven architecture](charla_11.md)
- [The Lifehackers guide to software architecture](charla_13.md)


