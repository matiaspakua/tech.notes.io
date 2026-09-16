---
name: delivery-maturity-roadmap
description: Assess DevSecOps, QA automation and software delivery maturity, then produce a context-sensitive adoption roadmap. Use whenever a user asks for a maturity assessment, DORA metrics, flow metrics, transformation plan, DevSecOps rollout, QA improvement roadmap, capability baseline, ROI or prioritization of engineering practices.
compatibility: Provider-neutral. Use available delivery data; do not fabricate DORA scores or treat a framework as a certification.
---

# Delivery Maturity Roadmap

Measure the current system before prescribing tools. The objective is sustainable flow, quality, security and learning, not maximizing activity or adopting every practice at once.

## Workflow

1. Define product, teams, value stream, customers, environments, constraints and assessment period.
2. Gather evidence from repositories, issue tracking, pipelines, tests, releases, incidents, support and interviews. Record confidence and missing data.
3. Assess capabilities across culture/collaboration, discovery, architecture, QA, security, CI/CD, release, operations, incident learning and documentation.
4. Measure trends where possible: deployment frequency, lead time for changes, change failure rate, time to restore, flow velocity/time/load/distribution/efficiency, defect escape, flaky rate, vulnerability remediation time and SLO performance.
5. Identify bottlenecks and risks, then rank improvements by customer value, risk reduction, effort, dependencies and learning value.
6. Build a staged roadmap with outcome, owner, experiment, leading/lagging measure, exit condition and review date.
7. Re-measure after an iteration; update the roadmap when evidence or context changes.

## Baseline template

```markdown
# Delivery Maturity Assessment
## Scope, period and evidence quality
## Capability scorecard
| Capability | Evidence | Current state | Risk | Confidence |
## Flow and quality trends
## Bottlenecks and hypotheses
## Prioritized opportunities
## 30/60/90-day experiments
| Outcome | Smallest experiment | Owner | Measure | Exit condition | Review |
## Risks, dependencies and assumptions
```

## Guardrails

Metrics are for learning and system improvement, not individual performance ranking. Never optimize speed by hiding defects, weakening security gates or increasing toil. GitFlow, Scrum, Kanban, fixed task sizes and two-pizza teams are context-dependent options, not universal maturity requirements. Tool choice follows the bottleneck and organizational authorization.

Read `references/metrics.md` when defining metric names, denominators or trend interpretation. Use `evals/evals.json` for baseline and 90-day roadmap scenarios.

## References

- Accelerate, Forsgren, Humble and Kim
- DORA research and Quick Check
- Flow Framework metrics
- DevOps Handbook, The Three Ways
- OWASP SAMM maturity model
- NIST SSDF for secure-development capability
