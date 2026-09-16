# TPF Analysis: DevSecOps from a QA Automation Perspective

## Thesis

The project proposes an iterative and incremental DevSecOps adoption roadmap in which QA Automation is transversal to Development, Security and Operations. Quality starts in discovery and design, continues through implementation and delivery, and is fed by production evidence.

## Scope covered by the TPF

- Software-engineering foundations: quality, culture, people and collaboration.
- Information organization, artifacts, identification, knowledge base and traceability.
- Continuous integration, continuous delivery, testing levels and API-first practices.
- DevOps culture, Three Ways, security concepts and QA Automation.
- Design strategies: BDUF, RDUF, emergent design and context-sensitive tradeoffs.
- QA by Design, Dev by Design, Sec by Design, Ops by Design and failure handling.
- Threat modeling, STRIDE/LINDDUN, security requirements and security testing.
- Toolchains for modeling, build, QA, security, packaging, release, infrastructure and monitoring.
- SecTx Analysis as a conceptual fraud/risk-analysis case study.
- Roles, Scrum/Kanban, Git workflow, SAD, ADRs, MTP, CI/CD, deployment, support and feedback.

## Recurrent lifecycle

```text
Business/support input
  -> intake and triage
  -> refinement and acceptance criteria
  -> architecture and security design
  -> test design and automation
  -> implementation and review
  -> build, scan, test and package
  -> promote and deploy
  -> observe, support and recover
  -> incident/feedback evidence back to discovery
```

## Core artifact chain

`FR/BUG -> REQ/UC -> SAD/ADR/C4/Threat Model -> SR -> code/change -> TC/TS -> build/scan reports -> artifact/release -> deployment/SLO evidence -> INC/DOC`

The chain is useful only when IDs, owners, status and evidence are explicit. It must support both backward questions (why does this exist?) and forward questions (what proves it works?).

## Capability decomposition

| Capability | TPF evidence | Skill produced |
|---|---|---|
| Traceability and information organization | IDs, repositories, artifacts, issue/branch/commit links | `devsecops-traceability` |
| QA strategy and automation | MTP, test pyramid, fixtures, vectors, xUnit phases, evidence | `qa-automation-strategy` |
| Secure design | STRIDE/LINDDUN, attack trees, security requirements, SAMM | `secure-threat-modeling` |
| Architecture and decisions | SAD, ADRs, C4, UML, quality attributes, GitFlow context | `architecture-decision-design` |
| Delivery controls | CI/CD stages, build self-testing, artifact promotion, rollback | `ci-cd-quality-gates` |
| Operations and feedback | logs, metrics, traces, SRE, observability, postmortems | `operations-observability-readiness` |
| API quality | API-first, OpenAPI, REST/gRPC, contract and performance testing | `api-contract-testing` |
| Adoption and measurement | DORA and flow metrics, maturity baseline, roadmap | `delivery-maturity-roadmap` |

## Boundaries

- Traceability owns identifiers and relationship completeness; every other skill emits links into it.
- QA owns test strategy and automation boundaries; API quality specializes contract concerns.
- Threat modeling owns risk and mitigations; secure review and testing verify implementation.
- Architecture owns decisions and views; threat modeling adds security analysis to those views.
- CI/CD owns gate sequencing and promotion; lifecycle metadata belongs to the roadmap/release context.
- Operations owns readiness and telemetry; incident learning activates after incidents and near misses.

## Generic-provider design decisions

- No skill assumes a particular AI provider, language, CI platform, cloud or tool.
- Instructions use imperative steps, progressive disclosure and explicit output templates.
- Existing repository conventions take precedence over invented IDs, formats or workflows.
- Unknowns are reported as assumptions or gaps, never fabricated.
- Each skill ends with validation, residual risk and authoritative references.

## Corrections carried into the skills

The TPF includes useful but dated or imprecise examples. The skills correct these points:

- Parameterized queries prevent SQL injection, but passwords must also be verified against a slow password hash; secrets must not be hard-coded.
- CSP is defense-in-depth; it does not replace output encoding, validation or authorization.
- CSRF protection does not replace API authorization or input validation.
- TLS, DNSSEC and DoH solve different problems.
- RASP is a runtime control, not a penetration-testing method.
- Penetration testing requires written authorization, scope, rate limits, safe targets and stop conditions.
- Production evidence may contain personal, financial, behavioral and biometric data; minimize, redact, encrypt, restrict and retain it deliberately.
- Fraud/ML outputs need false-positive handling, explainability, drift monitoring and human review.
- PCI, GDPR and NIST require applicable-version and jurisdiction-specific mapping, not generic checklist claims.
- GitFlow, Scrum, Kanban and fixed team/task patterns are contextual practices, not universal requirements.

## Selection rationale

The eight skills cover the TPF's complete operating loop while keeping each skill independently triggerable and composable. The recommended execution order is maturity baseline -> traceability -> architecture/threat design -> QA/API test design -> CI/CD gates -> operations readiness, with traceability and measurement revisited continuously.
