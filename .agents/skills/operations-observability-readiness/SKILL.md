---
name: operations-observability-readiness
description: Assess or design production readiness, observability and operational feedback for services and delivery pipelines. Use whenever a task mentions SRE, monitoring, logs, metrics, traces, health checks, SLOs, alerts, runbooks, capacity, reliability, rollback, incidents or operating a service after deployment.
compatibility: Provider-neutral. Map examples to the existing telemetry stack; do not assume Prometheus, Grafana, OpenTelemetry or Kubernetes.
---

# Operations and Observability Readiness

Design for operation and use operational evidence to improve design. Observability means being able to ask useful questions about system state from emitted signals; it is not simply collecting more logs.

## Workflow

1. Identify users, critical journeys, dependencies, failure modes, data sensitivity, environments and ownership.
2. Define service-level objectives and indicators for availability, latency, correctness, throughput, saturation and relevant business outcomes. Set targets with stakeholders.
3. Specify structured logs, metrics, traces, correlation IDs, health/readiness checks and dashboards. Redact secrets, tokens, personal and financial data.
4. Define actionable alerts with severity, threshold, owner, deduplication, escalation and runbook link. Avoid alerting on symptoms nobody can act on.
5. Document deployment verification, capacity assumptions, graceful degradation, backup/restore, rollback and disaster recovery expectations.
6. Test readiness in a non-production environment and feed findings into backlog, architecture decisions, QA and threat models.

## Readiness checklist

```markdown
| Concern | Requirement/signal | Evidence | Owner | Status | Gap/action |
|---|---|---|---|---|---|
```

Cover: ownership/on-call, health, dependencies, telemetry, SLOs, alerting, access/audit, data retention, scaling, backups, recovery, release verification, runbook, support and postmortem process.

## Runbook template

```markdown
# Runbook: <service/symptom>
## Impact and severity
## Detection and dashboards
## Preconditions and safety checks
## Diagnosis steps
## Mitigation and rollback
## Verification
## Escalation and communication
## Follow-up and evidence retention
```

## Principles

Prefer automation for repeatable remediation, but keep a human approval boundary for high-impact actions. Treat incidents as learning opportunities; distinguish triggering event, contributing conditions and systemic causes. Never expose raw sensitive production data in tickets or examples.

Read `references/telemetry-and-slos.md` when defining indicators, SLOs or telemetry fields. Use `evals/evals.json` for readiness and runbook scenarios.

## References

- Google SRE Workbook
- OpenTelemetry documentation
- Twelve-Factor App methodology
- ITIL incident/change concepts where applicable
- DORA reliability and delivery research
