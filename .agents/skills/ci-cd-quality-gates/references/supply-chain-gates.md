# CI/CD Gate Reference

A trustworthy release records source revision, dependency resolution, build result, test evidence, scan findings, artifact digest/provenance, approvals, deployment target and post-deploy verification.

Recommended controls include pinned dependencies, isolated least-privilege runners, secret injection, immutable artifacts, signed/provenance metadata, policy expiry for exceptions, environment separation and tested rollback. Gate severity should be explicit: blocking, warning with owner/expiry, or informational.

Prefer promotion of the same built artifact across environments over rebuilding per environment.
