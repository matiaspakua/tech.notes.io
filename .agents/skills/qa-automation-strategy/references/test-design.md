# Test Design Reference

Use this reference to choose tests by risk and feedback value.

| Level | Best for | Typical trigger | Main risk |
|---|---|---|---|
| Unit | local rules and transformations | every change | over-mocking |
| Component | one deployable boundary | pull request | hidden dependencies |
| Contract | producer/consumer agreement | pull request and release | stale contracts |
| Integration | real dependency interaction | merge/nightly | environment drift |
| System/E2E | critical user journeys | release or risk-based | slow, brittle feedback |
| Performance/resilience | capacity and failure behavior | scheduled/release | unsafe load or false confidence |
| Security | abuse cases and controls | every change plus scheduled | unauthorized testing |

Keep a test ID linked to its requirement/risk, fixture classification, expected outcome and evidence. Coverage claims must state denominator, execution point and exclusions.
