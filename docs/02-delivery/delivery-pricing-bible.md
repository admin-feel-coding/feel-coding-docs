# Delivery & Pricing Bible

This document defines how Feel Coding delivers work and how that work is priced. It protects delivery quality, time, and client trust. It is internal, but sections can be shared with clients when helpful.

## Core principle
Feel Coding separates **decisions** from **execution**. We do not build until the problem, scope, and risks are clearly decided.

## The D2E operating model
```
DECIDE → EXECUTE → OPERATE
```
- **Decide (Discovery):** Determine what to build, why it matters, and what “done” means.
- **Execute (SDLC):** Build the agreed solution in phases.
- **Operate:** Keep the system healthy and improving after launch.

See also: [D2E Framework](../01-frameworks/d2e-framework.md) and [D2E Big Picture](../03-diagrams/d2e-big-picture.mmd).

## DECIDE (Discovery)
Discovery is a paid, independent phase. Its goal is clarity and risk reduction, not commitment to build.

### Discovery steps (D1–D6)
- **D1 Problem & Outcomes:** Define the problem, users, success metrics, and constraints.
- **D2 Requirements:** Core flows, roles, integrations, and non-functional needs.
- **D3 Solution Shaping:** Architecture sketch, key tradeoffs, top risks.
- **D4 MVP & Phases:** Minimum viable scope and explicit out-of-scope items.
- **D5 Estimation:** Range estimates and unknowns/spikes.
- **D6 Proposal-Ready Plan:** Milestones, acceptance criteria, assumptions, exclusions, change control.

Decision gate: SDLC starts only after D1–D6 are complete and approved.

See: [Discovery Flow](../03-diagrams/decide-flow.mmd) and [Discovery Standalone](../03-diagrams/discovery-standalone.mmd).

### Discovery outputs
- Written Discovery Summary (D1–D6)
- High-level architecture sketch
- Phased roadmap
- Hour estimates per phase

Discovery stands alone. Clients may continue with Feel Coding or take the outputs elsewhere.

## EXECUTE (SDLC)
Execution begins only after Discovery approval. The SDLC loop is:
```
Plan → Design → Build → Test → Deploy → Review
```

### Execution rules
- Work is **phase-based** and **estimated** before starting.
- Each phase has a goal, hour range, and review checkpoint.
- No open-ended work without a scope and a cap.

### SDLC phases (E1–E6)
- **E1 Plan:** Milestones, tickets, acceptance criteria.
- **E2 Design:** APIs, data models, infrastructure decisions.
- **E3 Build:** Implementation and integration.
- **E4 Test:** Unit, integration, and sanity checks.
- **E5 Deploy:** Production release, monitoring, rollback readiness.
- **E6 Review:** Demo, feedback, next-phase decision.

See: [SDLC Loop](../03-diagrams/sdlc-loop.mmd).

## OPERATE
Operate is optional and may be hourly or retainer-based.
- **O1 Monitor:** Logs, metrics, traces, AI quality if relevant.
- **O2 Fix:** Incidents, bugs, recovery, post-mortems.
- **O3 Improve:** Performance, reliability, UX, retrieval quality.
- **O4 Optimize:** Cost, infra, latency, model usage.

See: [Operate Loop](../03-diagrams/operate-loop.mmd).

## Pricing doctrine
- Discovery is always paid and independent.
- Execution is hourly or time-boxed by phase.
- Phases are optional; clients can stop after any phase.
- Estimates are ranges, not promises.
- Transparency beats precision.

See: [Phase-Based Pricing](../03-diagrams/phase-pricing.mmd) and [Estimation Ranges](../03-diagrams/estimation-range.mmd).

## Client relationship principles
- We do not oversell or hide risk.
- We do not promise certainty where none exists.
- We prefer long-term trust over short-term revenue.
- If the project is unclear or risky, we propose Discovery or we say no.

## Solo-first, scale-ready
This model works for a solo operator and scales cleanly as collaborators join. Decision authority stays centralized; execution can scale.

See: [Solo to Team](../03-diagrams/solo-to-team.mmd).

## One rule to remember
If we cannot clearly explain what we are building, we do not build it.

## Canonical summary
```
FEEL CODING OPERATING MODEL:
- Decide before Execute
- Discovery is paid and independent
- Work is phased, estimated, and optional
- SDLC executes agreed decisions
- Trust > speed > volume
```

See the full visual map: [D2E Master Model](../03-diagrams/d2e-master.mmd).
