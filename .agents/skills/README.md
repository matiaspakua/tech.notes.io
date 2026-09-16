# DevSecOps + QA Automation Skills

Generic, provider-neutral skills derived from the specialization project **DevSecOps from a QA Automation perspective**.

## Shared model

All skills treat QA as a cross-cutting capability across discovery, design, development, security, delivery and operations. They use iterative, incremental refinement and prefer the smallest useful artifact. They are tool-agnostic: adapt outputs to the repository, language, CI platform and governance context discovered in the task.

## Skills

| Skill | Use it for | Primary artifacts |
|---|---|---|
| [devsecops-traceability](devsecops-traceability/SKILL.md) | Link work, requirements, design, code, tests, releases and incidents | ID scheme, traceability matrix, evidence map |
| [qa-automation-strategy](qa-automation-strategy/SKILL.md) | Design risk-based testing and automation | Master Test Plan, test model, vectors, evidence |
| [secure-threat-modeling](secure-threat-modeling/SKILL.md) | Identify threats, privacy risks and mitigations | DFD/C4 PlantUML, threat register, security requirements |
| [architecture-decision-design](architecture-decision-design/SKILL.md) | Document architecture and decisions | SAD, ADR, C4/UML diagrams, quality attributes |
| [ci-cd-quality-gates](ci-cd-quality-gates/SKILL.md) | Build quality, security and release gates | Pipeline model, gate policy, promotion/rollback plan |
| [operations-observability-readiness](operations-observability-readiness/SKILL.md) | Make a service operable and recoverable | SLOs, telemetry plan, runbook, incident readiness |
| [api-contract-testing](api-contract-testing/SKILL.md) | Design and verify API contracts | OpenAPI contract, contract tests, compatibility report |
| [delivery-maturity-roadmap](delivery-maturity-roadmap/SKILL.md) | Assess capability and sequence adoption | Baseline, metrics, roadmap, experiment backlog |

## Recommended order

Use `delivery-maturity-roadmap` to establish context, then `devsecops-traceability` to define identifiers. Apply `architecture-decision-design` and `secure-threat-modeling` during discovery/design, `qa-automation-strategy` and `api-contract-testing` before implementation, `ci-cd-quality-gates` before integration, and `operations-observability-readiness` before production. Re-run traceability and maturity assessment continuously.

## Shared safety rules

- Treat security testing as authorized defensive work only. Define scope, targets, data handling, rate limits and stop conditions before active testing.
- Never expose secrets, personal data, financial data, session tokens or raw production evidence in generated artifacts.
- Do not claim compliance from a checklist alone; map the applicable jurisdiction, version and control owner.
- Prefer current official documentation and record tool/version assumptions.
