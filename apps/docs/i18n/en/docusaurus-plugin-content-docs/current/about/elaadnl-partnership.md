---
sidebar_position: 1
title: ElaadNL and open standards
description: Why we follow the standards of ElaadNL and the Open Charge Alliance, and what that means in practice.
keywords: [ElaadNL, OCPP, OCPI, ISO 15118, standards, interoperability, Open Charge Alliance]
---

# ElaadNL and open standards

The charging sector runs on open standards. We follow those standards and the guidelines maintained in the Netherlands by [ElaadNL](https://elaad.nl) and internationally by the **Open Charge Alliance** — not because it is mandatory, but because it is the only way not to get stuck in an ecosystem of our own.

:::note About "partnership"
We are not a participant in ElaadNL programmes and have no formal partnership agreement with ElaadNL. What we do is **follow their publications and standards** and test our implementations against them. The previous version of this page suggested more than that; that has been corrected.
:::

## What ElaadNL does

ElaadNL is the Dutch knowledge centre for charging infrastructure, founded by the grid operators. The work relevant to us:

- **Interoperability tests** — establishing whether chargers, vehicles and back-end systems work together
- **Protocol knowledge** — contributions to and explanations of OCPP, OCPI and ISO 15118
- **Grid impact research** — what mass charging does to the grid, and how to spread it
- **Knowledge sharing** — publications and the annual Kennisdag

## Which standards we follow

| Standard | For | Our implementation |
|---|---|---|
| **OCPP 2.0.1** | Charger ↔ back-end | Our DC chargers |
| **OCPP 1.6J** | Charger ↔ back-end | Our AC chargers |
| **OCPI 2.2.1** | CPO ↔ eMSP (roaming) | Present; deliberately off on chargers, see [roaming](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd) |
| **ISO 15118** | Vehicle ↔ charger (including Plug & Charge) | Vehicle recognition in use; certificate variant in development |
| **IEC 61851** | Safety and signalling on the cable | Basis of every CCS connection |
| **IEC 62196** | Connectors (Type 2, CCS) | Standard at all our charging points |

## Why standards alone are not enough

A commonly heard assumption is that "open standard" automatically means interoperability. In practice it does not:

- Two parties can both be OCPP-compliant and still differ in what they implement.
- The standard describes messages, not behaviour in edge cases (what happens if a session ends while the plug is still connected?).
- Security is largely arranged outside the standard.

That is why we test every combination of charger, firmware and vehicle before we put anything into service, and we work with our own test set-up alongside the production environment.

## Grid-aware charging and GACS

ElaadNL has been researching for years how charging affects the grid and how to spread it. In the Netherlands, that knowledge lands among other things in **GACS** (Generic Adaptive Charging Specification), a specification with which a grid operator or aggregator can issue signals about available grid capacity.

Our energy management systems are able to respond to such signals — it is the same logic as the per-phase budget we already use. See [What does an EMS do?](/en/docs/energie/ems).

## Further reading

- [OCPP overview](/en/docs/technical/ocpp-overview)
- [ISO 15118 in depth](/en/docs/technical/iso-15118)
- [Roaming explained](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd)
- [Grid congestion](/en/docs/energie/netcongestie)
