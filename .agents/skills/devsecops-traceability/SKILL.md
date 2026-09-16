---
name: devsecops-traceability
description: Build or audit end-to-end traceability for software delivery. Use whenever a task mentions requirements, user stories, issues, ADRs, architecture, tests, commits, pull/merge requests, releases, incidents, evidence, audit trails, or asks whether work is covered. Connect business intent through QA, security and operations, even when the user does not explicitly say traceability.
compatibility: Provider-neutral. Requires access to the repository and available work-item, CI, test and release metadata when those systems are in scope.
---

# DevSecOps Traceability

Create one explainable chain from intent to outcome. Traceability is a decision aid, not paperwork: every link should help prove coverage, investigate change impact or recover evidence.

## Workflow

1. Inspect the repository and local conventions before proposing identifiers. Identify existing IDs, issue references, branch/commit conventions, test reports and release metadata.
2. Define scope, owners, retention and the direction of traceability: backward (why does this exist?) and forward (what proves it works?).
3. Normalize or preserve existing IDs. Do not rename IDs casually; document aliases when migration is necessary.
4. Build a matrix linking request/bug -> requirement/use case -> design/ADR/threat -> code/change -> test -> artifact/release -> deployment/incident/documentation.
5. Mark each relation as `verified`, `inferred`, `missing` or `conflicting`; never silently fill gaps.
6. Recommend the smallest correction, then validate links against actual files, metadata or reports.

## Default identifiers

Use a repository-approved prefix where one exists. Otherwise use stable IDs such as `FR-*` (feature request), `BUG-*`, `REQ-*`, `UC-*`, `SEC-*`, `ADR-*`, `TC-*`, `TS-*`, `REL-*`, `INC-*` and `DOC-*`. IDs must be unique, human-readable and independent from line numbers.

## Required output

```markdown
# Traceability Report
## Scope and assumptions
## Identifier policy
## Traceability matrix
| Source ID | Artifact/type | Links | Status | Evidence | Owner/action |
## Orphans and conflicts
## Change-impact assessment
## Minimal remediation plan
## Validation performed
## Residual gaps
```

## Quality rules

- Link to durable evidence, not only prose claims.
- Keep production data and credentials redacted; store hashes or references when appropriate.
- Distinguish test existence, test execution and test success.
- Distinguish security requirement coverage from proof that a mitigation is effective.
- Do not equate a green pipeline with complete product quality.

## Useful artifacts

- Traceability matrix (CSV/Markdown)
- Requirement and test ID register
- Evidence index with retention/classification
- Change-impact report
- Orphan/conflict list

Read `references/artifact-model.md` when the repository has no established ID or evidence convention. Use `evals/evals.json` for audit and ID-design scenarios.

## References

- ISO/IEC/IEEE 29148, Requirements engineering
- ISO/IEC/IEEE 29119, Software testing
- OWASP Software Assurance Maturity Model (SAMM)
- DevSecOps lifecycle and the Three Ways (Humble, Kim, Debois, Forsgren)
- Repository-specific issue, commit, release and audit documentation
