---
title: "The Lifehackers guide to software architecture"
tags:
  - conferencia
  - we-are-developers
  - 2024
  - notas
  - arquitectura
---

# The Lifehackers guide to software architecture

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

## Beware of the faith healer

> [!warning]
> Desconfiar de quien propone una solución sin hablar de los trade-offs.
> Todas las decisiones de arquitectura tienen trade-offs y downsides.

Puntos clave:
- Todas las decisiones tienen trade-offs y downsides. Para lidiar con ellos: hacer los trade-offs explícitos.
- **Integración** es una parte integral de la arquitectura del software.
- ¿Qué tan difícil puede ser conectar dos sistemas? Muchas tecnologías, comunicaciones, procesos, interacciones y componentes.
- Ejemplo de control de flujo: **Queues** (colas de mensajes).

## Apply Divide-and-Conquer

El monolito y sus desventajas. A veces se mezcla con Legacy Modernization.

Los microservicios traen algunas ventajas (mantener la arquitectura limpia) pero tampoco es fácil mantener muchos microservicios de forma limpia.

Patrones para dividir:
1. Apoyarse en los **patrones de integración**
2. **Integration pattern**
3. **Conversation pattern**

## Strive for Loose Coupling

¿Cuánto puedo cambiar de un componente sin afectar a otros? Viene en muchas dimensiones.

**Topic-queue chaining**: patrón donde los mensajes entre consumer y producer se redirigen a los distintos servicios a través de colas, y esas colas además están categorizadas por tópicos.

## Manage Failure

<mark style="background: #FFF3A3A6;">La principal causa de fallas en sistemas distribuidos es la RETRY LOGIC</mark> mal implementada.

Herramientas: **Dead-Letter Queue (DLQ)**

Tipos de fallas a identificar:
- Transient failure (mitigable con retry)
- Poison pill failure (mensaje inválido que siempre falla)

Soluciones:
- **Deduplication**: evitar procesar el mismo mensaje dos veces
- **Archive and reply**: archivar mensajes fallidos para análisis y re-proceso

## Prepare for Success

- **Vertical scaling**: más recursos a un mismo servidor
- **Horizontal scaling**: más servidores (requiere stateless design)
- Monolito vs microservicios: cada uno tiene su contexto de aplicación

## No reinventar la rueda

Entender y aplicar estándares: por ejemplo, los status codes de HTTP ya resuelven la semántica de las respuestas — no inventar un sistema propio.

## References

- [Enterprise Integration Patterns — Gregor Hohpe & Bobby Woolf, Addison-Wesley, 2003](https://www.enterpriseintegrationpatterns.com/)
- [Microservices.io — Chris Richardson](https://microservices.io/)
