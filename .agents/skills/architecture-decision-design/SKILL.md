---
name: architecture-decision-design
description: Create, review or evolve lightweight software architecture documentation and architecture decisions. Use whenever a task mentions SAD, ADRs, C4, UML, PlantUML, quality attributes, architecture tradeoffs, system context, components, deployment views, design alternatives or documenting why a technical choice was made.
compatibility: Provider-neutral. Use repository conventions and PlantUML diagrams-as-code when diagrams are needed.
---

# Architecture Decision Design

Use just-enough upfront design followed by explicit, reversible decisions. The goal is a shared model that supports change, testing, security and operation, not a diagram that merely decorates documentation.

## Workflow

1. Inspect existing architecture docs, diagrams, decision numbering and quality attributes. Preserve established IDs and terminology.
2. State the problem, drivers, constraints, stakeholders, system boundary and level of certainty.
3. Choose the smallest useful view: C4 context for actors/systems, container for deployables, component for one container, sequence for a critical interaction, deployment for topology, ER for data.
4. Identify alternatives and evaluate them against measurable quality attributes: security, reliability, performance, operability, maintainability, scalability, usability, cost and compliance as relevant.
5. Write an ADR with status, context, decision, alternatives, consequences, risks, validation and links to work/tests/threats.
6. Validate diagram syntax, links, names, ownership and consistency with implementation; flag unknowns instead of inventing details.

## ADR template

```markdown
# ADR-<id>: <decision>
- Status: proposed | accepted | superseded | rejected
- Date: <YYYY-MM-DD>
- Owners: <people/team>
- Related work: <FR/REQ/SEC/TC IDs>

## Context
## Decision
## Alternatives considered
## Consequences
## Security and privacy impact
## Operational and testing impact
## Validation and review
## Supersedes/superseded by
```

## SAD outline

Purpose/scope -> context and drivers -> architecture views -> data/integration -> security and privacy -> deployment/operations -> testing/quality attributes -> decisions and references.

## PlantUML rules

Keep diagrams focused and versioned beside the documentation. Prefer a set of context/container/component/sequence/deployment diagrams over one overloaded image. Use stable aliases, explicit boundaries, readable labels, `left to right direction` when helpful, and `skinparam shadowing false`; render and inspect non-trivial diagrams. Link each important element to an owner, requirement or decision when useful.

Read `references/views-and-adr.md` when choosing a diagram view or drafting an ADR. Use `evals/evals.json` for decision and PlantUML scenarios.

## References

- C4 Model, Simon Brown
- ISO/IEC/IEEE 42010, Architecture description
- Architecture Decision Records, adr.github.io
- ISO/IEC 25010, Quality model
- PlantUML documentation and the repository's PlantUML skill
