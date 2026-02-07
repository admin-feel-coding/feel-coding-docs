# Delivery & Pricing Bible

**Version 1.0**

---

## 1. Purpose of this document

This document defines **how Feel Coding works**.

It exists to:

- Ensure consistency across all projects
- Protect delivery quality
- Protect time and energy
- Set clear expectations with clients
- Allow Feel Coding to scale from solo to small team without chaos

This document is internal, but parts of it may be shared with clients when useful.

---

## 2. Core principle

> Feel Coding separates decisions from execution.

We do not jump into building software without first deciding:

- What problem we are solving
- What the smallest valuable solution is
- What risks exist
- What "done" means

This is how we protect clients, ourselves, and long-term reputation.

---

## 3. The Feel Coding Framework: D2E

All projects at Feel Coding follow the D2E Framework:

```
DECIDE → EXECUTE → OPERATE
```

- **Decide (Discovery)** decides *what* to build and *if* it is worth building.
- **Execute (SDLC)** builds the agreed solution.
- **Operate** keeps the system healthy after delivery.

See also: [D2E Framework](../01-frameworks/d2e-framework.md) | [D2E Big Picture](../03-diagrams/d2e-big-picture.mmd).

---

## 4. Decide (Discovery phase)

Discovery is a **paid, independent phase**.

Its goal is **clarity and risk reduction**, not commitment to build.

### Discovery always answers

- What problem are we solving?
- Who is it for?
- What is the MVP?
- What are the technical risks?
- How long and how much to build?

### 4.1 Discovery steps (D1-D6)

**D1 — Problem and outcomes**

- Define the business problem
- Identify users and decision-makers
- Define success metrics
- Identify constraints

**D2 — Requirements**

- Core user flows
- Roles and permissions
- Integrations
- Non-functional requirements (security, performance, scale)

**D3 — Solution shaping**

- High-level architecture
- Technology tradeoffs (REST vs GraphQL, monolith vs services, etc.)
- AI/RAG decisions if applicable
- Top technical risks

**D4 — MVP and phases**

- Define Phase 1 (must-have)
- Define Phase 2/3 (nice-to-have, optimization)
- Explicitly define what is out of scope

**D5 — Estimation**

- Hour ranges per phase
- Identify unknowns and spikes
- Add buffers for risk

**D6 — Proposal-ready plan**

- Milestones
- Acceptance criteria
- Assumptions and exclusions
- Change-control rules

### 4.2 Discovery outputs

Every Discovery must produce:

- A written Discovery Summary (D1-D6)
- A high-level architecture sketch
- A phased roadmap
- Hour estimates per phase

Discovery **stands alone**:

- Clients may continue with Feel Coding
- Or use the output elsewhere

Both outcomes are valid.

See: [Discovery Flow](../03-diagrams/decide-flow.mmd) | [Discovery Standalone](../03-diagrams/discovery-standalone.mmd).

---

## 5. Execute (SDLC phase)

Execution starts **only after Discovery is approved**.

Execution follows a standard SDLC loop:

```
Plan → Design → Build → Test → Deploy → Review
```

### 5.1 Execution rules

- Execution is charged per phase, based on estimated hours.
- Phases are independent.
- Each phase has:
  - A goal
  - An estimated hour range
  - A review checkpoint
- No open-ended work without an estimate or cap.

### 5.2 SDLC phases (E1-E6)

**E1 — Plan**

- Break scope into milestones
- Define tickets and acceptance criteria

**E2 — Design**

- Detailed design for the next slice
- APIs, data models, infra decisions

**E3 — Build**

- Implementation and integration

**E4 — Test**

- Unit, integration, and sanity testing

**E5 — Deploy**

- Deployment to production
- Monitoring and rollback readiness

**E6 — Review**

- Demo
- Feedback
- Decide next phase

See: [SDLC Loop](../03-diagrams/sdlc-loop.mmd).

---

## 6. Operate (post-delivery)

Operations may be:

- Hourly
- Or retainer-based

Includes:

- Monitoring
- Bug fixes
- Performance improvements
- Cost optimization
- AI quality improvements (if applicable)

See: [Operate Loop](../03-diagrams/operate-loop.mmd).

---

## 7. Pricing doctrine

### 7.1 General rules

- Discovery is **always paid**.
- Execution is **hourly or time-boxed**.
- No phase depends financially on the next.
- Estimates are ranges, not promises.
- Transparency beats precision.

### 7.2 Phase-based pricing model

Each phase:

- Has a defined scope
- Has an estimated hour range
- Is approved before starting
- Can be stopped after completion

This applies to:

- Small clients
- LATAM clients
- North American clients
- Internal or external projects

See: [Phase-Based Pricing](../03-diagrams/phase-pricing.mmd) | [Estimation Ranges](../03-diagrams/estimation-range.mmd).

---

## 8. Client relationship principles

Feel Coding:

- Does not oversell
- Does not hide risk
- Does not promise certainty where none exists
- Prefers long-term trust over short-term revenue

If a project is unclear or risky:

- We propose Discovery
- Or we say no

Both are professional outcomes.

---

## 9. Solo-first, scale-ready

This framework is designed to:

- Work when Feel Coding is a solo operation
- Scale naturally when collaborators are added
- Allow delegation by phase, not chaos

Anyone joining Feel Coding must:

- Understand this framework
- Follow it
- Respect its boundaries

See: [Solo to Team](../03-diagrams/solo-to-team.mmd).

---

## 10. One rule to remember

> If we cannot clearly explain what we are building, we do not build it.

---

## 11. Canonical summary

```
FEEL CODING OPERATING MODEL:
- Decide before Execute
- Discovery is paid and independent
- Work is phased, estimated, and optional
- SDLC executes agreed decisions
- Trust > speed > volume
```

See the full visual map: [D2E Master Model](../03-diagrams/d2e-master.mmd).
