---
name: ci-cd-quality-gates
description: Design, review or improve CI/CD pipelines with fast feedback, reproducible builds, QA automation, security checks, artifact integrity, promotion and recovery. Use whenever a task mentions CI, CD, pipelines, builds, stages, quality gates, release promotion, registries, deployment, rollback, canary, blue/green, runners or pipeline failures.
compatibility: Provider-neutral. Do not assume GitLab, GitHub Actions, Jenkins, Kubernetes, Docker, Java or a particular cloud.
---

# CI/CD Quality Gates

A pipeline is a risk-control system. Order checks to provide cheap feedback early, preserve trustworthy artifacts, and make deployment and recovery routine. Continuous delivery means releasable on demand; continuous deployment is an optional policy that deploys automatically.

## Workflow

1. Inspect the current pipeline, repository, build tool, environments, artifact registry, secrets mechanism and branch/release policy.
2. Define the supply-chain boundary and required evidence: source revision, dependency lock, build result, test reports, scan reports, artifact digest/provenance and approvals.
3. Model stages: validate -> build -> unit/component -> contract/integration -> security/SAST/SCA -> package/sign -> deploy ephemeral/staging -> acceptance/performance as appropriate -> promote -> deploy -> verify/observe.
4. Put fast deterministic gates before expensive suites; make gate ownership and failure action explicit.
5. Enforce least privilege, pinned dependencies, isolated runners, secret injection, artifact immutability, retention and redaction.
6. Define promotion, approval, feature flags, canary/blue-green, rollback triggers and rollback verification.
7. Validate with a safe representative change, failure injection or pipeline linting without touching production.

## Gate policy template

```markdown
| Gate | Signal/evidence | Blocking? | Owner | Trigger | Failure action |
|---|---|---:|---|---|---|
```

## Release checklist

- Reproducible build from identified source
- Tests and security findings reviewed by policy
- Artifact immutable, signed/provenance recorded where supported
- Configuration and migrations reviewed
- Deployment target and rollback tested
- Observability and health checks ready
- Approval and change record linked
- Post-deploy verification defined

## Failure handling

Stop promotion on critical policy violations. Preserve logs and reports without secrets, notify the responsible team, restore the last known-good version where authorized, and create a traceable corrective action. Do not make “ignore failures” the default fix; if a warning is accepted, record expiry and owner.

Read `references/supply-chain-gates.md` when defining release evidence or supply-chain controls. Use `evals/evals.json` for pipeline-review and recovery-plan scenarios.

## References

- DORA research on delivery performance
- SLSA framework for software supply-chain integrity
- NIST SSDF (SP 800-218)
- OWASP CI/CD Security Risks
- Continuous Delivery, Jez Humble and David Farley
