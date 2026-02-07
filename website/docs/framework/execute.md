---
sidebar_position: 3
title: Execute (SDLC)
---

# Execute (SDLC)

Execution builds the agreed solution in repeatable phases. Each phase has a goal, a scope, and a clear checkpoint.

## 🔁 Execution loop (E1 to E6)

```mermaid
flowchart LR
    E1["E1 Plan"] --> E2["E2 Design"] --> E3["E3 Build"] --> E4["E4 Test"] --> E5["E5 Deploy"] --> E6["E6 Review"]
    E6 --> E1
```

## ✅ How execution works

- Work is planned and approved phase by phase.
- Each phase has a clear goal and documented outputs.
- Review feedback informs the next phase.

## E1 — Plan

Goal: Define the next slice of work clearly.

Outputs:

- Milestones or sprint goal.
- Tickets and acceptance criteria.
- Updated risks or dependencies.

## E2 — Design

Goal: Make the solution buildable.

Outputs:

- API contracts.
- Data model changes.
- Infrastructure decisions.

## E3 — Build

Goal: Implement the agreed slice.

Outputs:

- Working code.
- Updated technical documentation.
- Infrastructure changes (if needed).

## E4 — Test

Goal: Validate behavior before release.

Outputs:

- Unit and integration tests.
- Targeted end-to-end checks.
- Security sanity checks.

## E5 — Deploy

Goal: Release safely.

Outputs:

- Production deployment.
- Monitoring and rollback readiness.

## E6 — Review

Goal: Close the loop and decide next steps.

Outputs:

- Demo and feedback.
- Backlog updates.
- Next phase decision.

## 🧱 Exit criteria

Execution ends when the MVP is delivered or the client stops.

Next: [Operate](operate.md)
