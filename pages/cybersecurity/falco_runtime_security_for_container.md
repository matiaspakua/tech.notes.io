---
title: "Falco: Runtime Security para contenedores"
tags:
  - ciberseguridad
  - seguridad
  - notas
---

# Falco

[← Inicio](https://matiaspakua.github.io/tech.notes.io)

**Title**: Detección de amenazas multi-cloud con Falco y AWS Security Hub  
**Speaker:** [Dan Belmonte](https://www.linkedin.com/in/danbelmonte/) | Strategic Alliances Solutions Architect en Sysdig  
**Duration**: 30-40 mins  
**Abstract**:  
¿Te gustaría probar una solución que detecte amenazas en tiempo de ejecución y que ya esté integrada con un servicio de seguridad en la nube como AWS Security Hub?  
Mostraremos cómo desplegar Falco dentro de clústers EKS de una manera nativa con AWS Security Hub, y así utilizar este servicio como centro unificado de seguridad incluso para entornos multi-cloud.  
Durante la sesión, veremos cómo funcionan las reglas de Falco para detectar comportamientos anómalos y amenazas en tiempo de ejecución a nivel de kernel (dentro de los nodos EKS) y el flujo completo de alertas desde Falco hasta AWS Security Hub (a través de Falcosidekick).  
Al finalizar esta charla, tendrás una mejor comprensión de:  

- Qué es Falco (una herramienta Open Source ampliamente utilizada en entornos _Cloud Native_) y cómo detecta procesos a nivel de kernel.
- Cómo crear un pipeline dentro del ecosistema AWS que integre CloudWatch y Lambda para procesar datos que luego se integrarán con AWS Security Hub.

# What is Falco?


>[!quote] 
>Falco is a cloud native security tool that provides runtime security across hosts, containers, Kubernetes, and cloud environments. It is designed to detect and alert on abnormal behavior and potential security threats in real-time.

Falco es un proyecto open-source originalmente creado por Sysdig y actualmente graduado en la Cloud Native Computing Foundation (CNCF), donde alcanzó el estado de proyecto graduado en 2023.

# High level overview

```mermaid
flowchart TD
    subgraph K8S["☸️ Kubernetes Cluster (EKS)"]
        POD["🐳 Pods / Containers"]
        NODE["🖥️ Node (EC2)"]
        POD --> NODE
    end

    NODE -->|"syscall events\n(ebpf / kernel module)"| FALCO["🦅 Falco\n(runtime threat detection)"]
    FALCO -->|"alert"| FSK["🔀 Falcosidekick\n(event forwarder)"]
    FSK --> CW["📊 AWS CloudWatch\n(logs)"]
    FSK --> LAMBDA["⚡ AWS Lambda\n(procesamiento)"]
    LAMBDA --> HUB["🔒 AWS Security Hub\n(centro unificado)"]
    HUB --> NOTIFY["🔔 Alertas /\nNotificaciones"]

    style FALCO fill:#1e1e2e,stroke:#ff5555,color:#f8f8f2
    style HUB fill:#1e1e2e,stroke:#ffd700,color:#f8f8f2
    style K8S fill:#1e1e2e,stroke:#61dafb,color:#f8f8f2
```

![](../../images/falco_high_level_overview.png))

# AWS security hub con alertas

![](../../images/AWS_security_hub_alerts.png))

## References

- [Falco Documentation — falco.org](https://falco.org/docs/#what-is-falco)
- [Falco en CNCF — CNCF](https://www.cncf.io/projects/falco/)
- [AWS Security Hub — AWS](https://aws.amazon.com/security-hub/)

## Notas relacionadas

- [Cybersecurity Foundations](cybersecurity_foundations.md)
- [IT Security Foundations: Core Concepts](it_security_foundations_core_concepts.md)
- [Programming Foundations: Web Security](programming_foundations_web_security.md)
- [DevSecOps Foundations](dev_sec_ops_foundations.md)
