# Traceability Artifact Model

Use this model when the repository has no established convention.

| Prefix | Artifact | Minimum fields |
|---|---|---|
| FR/BUG | request or defect | title, source, priority, owner, status |
| REQ/UC | requirement or use case | behavior, acceptance, source, owner |
| ADR/SR | decision or security requirement | rationale/control, status, verifier |
| TC/TS | test case or automated test | SUT, vector, expected result, evidence |
| REL/INC | release or incident | version, environment, impact, links |
| DOC | durable documentation | owner, revision, related IDs |

A valid link has a source ID, target ID, relationship type, status, evidence location, owner and last verification date. Keep a machine-readable export when possible and treat links as data, not only prose.
