# Threat Modeling Reference

Use STRIDE to classify common security threats and LINDDUN or an applicable privacy method for personal-data risks. Model assets, actors, entry points, trust boundaries, data flows, controls and assumptions before ranking risks.

| Threat class | Question | Example control family |
|---|---|---|
| Spoofing | Can identity be forged? | authentication, MFA, session binding |
| Tampering | Can data or code be altered? | integrity checks, authorization, signed artifacts |
| Repudiation | Can an action be denied? | tamper-resistant audit evidence |
| Information disclosure | Can sensitive data leak? | minimization, encryption, access control, redaction |
| Denial of service | Can availability be exhausted? | limits, quotas, graceful degradation |
| Elevation of privilege | Can permissions be exceeded? | least privilege, object/function authorization |

Risk records need a verification method. A mitigation is incomplete until its implementation and test evidence are identified.
