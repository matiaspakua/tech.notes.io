---
name: qa-automation-strategy
description: Design or review a risk-based QA and test automation strategy across the software lifecycle. Use whenever a user asks for a test plan, test pyramid, acceptance criteria, regression strategy, unit/integration/E2E/API/security/performance testing, fixtures, test data, automation scope, evidence or coverage. Trigger even if the request only mentions automating tests for one feature.
compatibility: Provider-neutral. Adapt examples to the project language, test framework, runtime and CI system; do not assume Java, Robot Framework or GitLab.
---

# QA Automation Strategy

Treat the automation suite as production software: it needs design, ownership, versioning, feedback, maintenance and observable failure modes. Automate repeatable checks while reserving exploratory, usability and judgment-heavy work for people.

## Workflow

1. Read requirements, use cases, risks, architecture and existing tests. Ask for missing business invariants or classify them as assumptions.
2. Define the SUT, scope, exclusions, quality risks and acceptance criteria. Prefer observable behavior over implementation details.
3. Choose a proportionate mix of unit, component, contract, integration, system/E2E, performance, resilience and security tests. Use a test pyramid as a heuristic, not a quota.
4. Design deterministic fixtures, isolated data, test vectors, environment controls and cleanup. Never use unmasked production data by default.
5. Assign each test a stable `TC-*` ID and connect it to requirements, risks and expected evidence.
6. Define fast feedback gates and slower suites, quarantine policy, flaky-test ownership and reporting.
7. Validate with representative positive, negative, boundary, authorization and failure cases.

## Master Test Plan template

```markdown
# Master Test Plan: <system/release>
## Purpose, SUT and audience
## Scope and exclusions
## Risks and criticality
## Quality attributes and acceptance criteria
## Test levels and responsibilities
## Test IDs, fixtures and data classification
## Environments and dependencies
## Automation, suites and execution triggers
## Evidence, reporting and exit criteria
## Flaky tests, defects and change policy
## Traceability and approvals
```

## Four-phase case model

For each case: **Setup** (fixture and preconditions) -> **Exercise** (stimulus) -> **Verify** (assertions and observable effects) -> **Teardown** (cleanup). Keep tests independent, diagnostic and repeatable.

## Output

Return the strategy, a test-level decision table, sample cases/vectors, automation boundaries, CI placement, evidence schema, risks and explicit gaps. Report coverage by requirement/risk and outcome, not only line percentage.

## Guardrails

- Do not recommend bypassing authentication, authorization or safety controls in shared/production environments.
- Security and load tests require written authorization, isolated targets, limits and data handling rules.
- A passing test does not prove absence of defects; state residual risk.
- Avoid hard-coded secrets and real personal, financial or biometric data.

Read `references/test-design.md` when selecting test levels or defining coverage claims. Use `evals/evals.json` for strategy and flaky-suite review scenarios.

## References

- ISO/IEC/IEEE 29119, Software testing
- xUnit Test Patterns, Gerard Meszaros
- ISTQB glossary and test process concepts
- Google Testing Blog and testing pyramid guidance
- OWASP Testing Guide for application-security test coverage
