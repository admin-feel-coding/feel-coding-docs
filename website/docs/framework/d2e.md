---
sidebar_position: 1
title: D2E Framework
---

# D2E Framework
A one-page summary of our delivery framework.

D2E stands for **Decide, Execute, Operate**. It is the delivery framework Feel Coding uses to structure every client engagement.

The framework separates decisions from execution. Each phase is independent, documented, and produces concrete outputs that the client owns. A client can stop after any phase and still keep everything they need to continue on their own.

For the principles that guide how we operate, see [Core Principles](../company/core-principles.md).

> Discovery decides. SDLC executes. Ops stabilizes.

## 🧭 One-page overview

```mermaid
graph LR
    D["Decide<br/>(Discovery)"] --> E["Execute<br/>(SDLC)"] --> O["Operate"]

    D -.- D_out["D1 Problem<br/>D2 Requirements<br/>D3 Solution shaping<br/>D4 MVP + Phases<br/>D5 Estimation<br/>D6 Proposal-ready"]
    E -.- E_out["E1 Plan<br/>E2 Design<br/>E3 Build<br/>E4 Test<br/>E5 Deploy<br/>E6 Review"]
    O -.- O_out["O1 Monitor<br/>O2 Fix<br/>O3 Improve<br/>O4 Optimize"]

    style D fill:#e8f4f8,stroke:#2c3e50,color:#2c3e50
    style E fill:#e8f4f8,stroke:#2c3e50,color:#2c3e50
    style O fill:#e8f4f8,stroke:#2c3e50,color:#2c3e50
    style D_out fill:#fff,stroke:#bdc3c7,color:#2c3e50
    style E_out fill:#fff,stroke:#bdc3c7,color:#2c3e50
    style O_out fill:#fff,stroke:#bdc3c7,color:#2c3e50
```

## ✅ How to read the framework

- **Decide (Discovery)** reduces risk and produces a clear plan.
- **Execute (SDLC)** builds the agreed solution in phases.
- **Operate** keeps the system healthy after delivery.

Each phase is detailed on its own page:

- [Decide (Discovery)](decide.md)
- [Execute (SDLC)](execute.md)
- [Operate](operate.md)

## 📌 When to use D2E

- The request is vague or risky.
- You need to estimate or propose.
- You want to avoid scope chaos.

## 🧱 Core rule

Do not start SDLC until Discovery is complete and approved.
