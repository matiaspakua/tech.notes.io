---
name: api-contract-testing
description: Design, review or test API contracts and lifecycle quality. Use whenever a task mentions API-first, OpenAPI, REST, gRPC, schemas, endpoints, contract testing, mocks, compatibility, authentication, authorization, Postman/Newman, API documentation, performance or API versioning.
compatibility: Provider-neutral. OpenAPI is suitable for HTTP APIs; adapt to AsyncAPI, protobuf or another contract format when required.
---

# API Contract Quality

Treat an API contract as an executable agreement between producers and consumers. Design it before implementation when practical, then verify behavior, security and compatibility continuously.

## Workflow

1. Inventory consumers, endpoints/RPCs, data classifications, owners, versions, SLAs and dependencies.
2. Define resources/messages, success/error schemas, validation, idempotency, pagination, timeouts, retries, rate limits and version compatibility.
3. Specify authentication and authorization separately, including object-level and function-level access checks. Do not put secrets or real personal data in examples.
4. Generate representative positive, negative, boundary, malformed, unauthorized and replay cases from the contract.
5. Run provider contract tests and consumer compatibility tests in CI; use mocks only when their limitations are explicit.
6. Add performance, resilience and security tests proportionate to risk. Define deprecation, changelog and migration policy.
7. Report mismatches with request, response, expected contract, actual behavior, environment, test ID and remediation owner.

## Contract review checklist

- Unique operation IDs and stable naming
- Explicit required/optional/null semantics
- Strict enough validation without rejecting intended evolution
- Safe error messages and correlation ID
- Authentication plus authorization and tenant/object isolation
- No sensitive data leakage in schemas, examples or logs
- Timeouts, retry/idempotency and rate-limit behavior documented
- Backward/forward compatibility assessed
- Security and operational requirements linked

## Test artifact template

```markdown
| TC/API ID | Operation | Preconditions | Request vector | Expected status/schema | Security assertion | Evidence |
|---|---|---|---|---|---|---|
```

Read `references/compatibility.md` when reviewing version changes or consumer impact. Use `evals/evals.json` for contract-design and OpenAPI-review scenarios.

## References

- OpenAPI Specification
- AsyncAPI Specification, when asynchronous APIs are used
- Protocol Buffers and gRPC API guidance
- Pact contract testing concepts
- OWASP API Security Top 10
- RFC 9110 HTTP Semantics
