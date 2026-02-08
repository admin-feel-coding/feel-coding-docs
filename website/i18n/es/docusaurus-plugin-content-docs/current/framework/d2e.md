---
sidebar_position: 1
title: Framework D2E
---

# D2E Framework 🧭

**Un modelo de entrega claro y por fases**

El **Framework D2E (Decide → Execute → Operate)** es el framework de entrega que Feel Coding usa para estructurar **cada proyecto con clientes**.

Existe para traer **claridad, previsibilidad y propiedad** a proyectos de software, especialmente cuando los requisitos son complejos, cambiantes o poco claros al inicio.

Para los principios que guían cómo operamos, ver [Biblia de la Empresa](../company/company-bible.md).

---

## Qué significa D2E

**D2E significa:**

- **Decide** — clarificar *qué* construir y *por qué*
- **Execute** — construir y entregar la solución acordada
- **Operate** — mantener el sistema estable, eficiente y transferible

El framework se basa en una regla simple pero estricta:

> **Las decisiones vienen antes que la ejecución.**

Separar decisiones de implementación evita confusión de alcance, expectativas poco claras y riesgo de delivery.

---

## Cómo funciona el framework

Cada fase D2E es:

- **Independiente** — puede sostenerse por sí sola
- **Documentada** — los outputs son escritos y explícitos
- **Propiedad del cliente** — sin lock-in de proveedor

Un cliente puede detenerse después de **cualquier fase** y conservar todo lo necesario para continuar con otro equipo.

Esto protege a los clientes y permite a los ingenieros trabajar con límites claros.

---

## Las tres fases en resumen

### 🧠 Decide (Discovery)

Discovery es una **fase paga y standalone** enfocada en claridad y reducción de riesgo.

Su objetivo es responder:

- ¿Qué problema resolvemos?
- ¿Qué es éxito?
- ¿Qué se construye ahora y qué se deja para después?
- ¿Cuáles son los riesgos, tradeoffs y restricciones?

**Discovery decide.**

---

### 🛠️ Execute (SDLC)

Execution convierte decisiones aprobadas en software funcionando.

Sigue un loop SDLC estructurado:

- Plan
- Design
- Build
- Test
- Deploy
- Review

Execution **no redefine alcance** — implementa lo acordado en Discovery.

**SDLC ejecuta.**

---

### ⚙️ Operate

Operate mantiene el sistema saludable después del lanzamiento.

Se enfoca en:

- Monitoreo y confiabilidad
- Resolución de issues e incidentes
- Mejora continua
- Optimización de costos y performance

Operate es opcional y puede ser por hora o retainer.

**Ops estabiliza.**

---

## Resumen en una página 📄

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

## Cómo leer el framework ✅

- **Decide** reduce riesgo y produce un plan claro y compartido
- **Execute** construye la solución acordada en fases controladas
- **Operate** mantiene el sistema saludable después de la entrega

A lo largo de todas las fases:

- Cada fase se sostiene por sí misma
- Cada fase produce outputs documentados
- Todos los outputs pertenecen al cliente

Cada fase está explicada en detalle en su propia página:

- [Decide (Discovery)](decide.md)
- [Execute (SDLC)](execute.md)
- [Operate](operate.md)

Cada fase también tiene una plantilla para asegurar consistencia:

- [Decide Template](../templates/decide-template.md)
- [Execute Template](../templates/execute-template.md)
- [Operate Template](../templates/operate-template.md)

---

## Cuándo usar D2E 📌

Usa el framework D2E cuando:

- La solicitud es vaga, compleja o riesgosa
- Necesitas estimar o preparar una propuesta
- Quieres evitar scope creep y sorpresas
- Te importa la mantenibilidad y el ownership a largo plazo

En la práctica: **casi siempre**.

---

## Regla central 🧱

> **No iniciar SDLC hasta que Discovery esté completo y aprobado.**

Si D1–D6 no existen y no están acordados, sigues en Discovery.

Esta regla protege:

- A los clientes de un alcance poco claro y sobrecostos
- A los ingenieros de objetivos cambiantes en medio del build
- A los proyectos de fallas evitables
