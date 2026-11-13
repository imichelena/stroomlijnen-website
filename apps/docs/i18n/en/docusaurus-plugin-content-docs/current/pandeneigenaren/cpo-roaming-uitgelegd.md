---
sidebar_position: 9
title: CPO, eMSP and roaming explained
description: The roles in the charging sector, the difference between OCPP and OCPI, how roaming works and what Stroomlijnen does and does not do.
keywords: [CPO, eMSP, roaming, OCPI, OCPP, hub, Gireve, Hubject, IDRO, AFIR]
---

# CPO, eMSP and roaming explained

The charging sector has its own jargon. This page sets out the roles and protocols, and then honestly explains what Stroomlijnen does — because there is a lot of confusion about that.

## The two roles

### CPO — Charge Point Operator

Manages the **physical charging infrastructure**:

- installation and maintenance of charging points
- communication between charging point and backend (via **OCPP**)
- authorisation of sessions
- metering of energy delivered
- monitoring and fault service

### eMSP — e-Mobility Service Provider

Provides services to the **end user**:

- issuing charge cards or apps
- access to charging points of various CPOs
- one invoice for all sessions
- customer service

One company can have both roles. Stroomlijnen is both CPO and eMSP.

## Two protocols, two directions

This is the distinction that causes the most confusion:

| Protocol | What it connects | Direction |
|---|---|---|
| **OCPP** | Charging point ↔ backend of the CPO | Vertical (downwards) |
| **OCPI** | Backend of CPO ↔ backend of eMSP | Horizontal (sideways) |

OCPP is about "how do I control this charger". OCPI is about "how do I settle a session with another party". They are entirely separate: you can have OCPP perfectly and no roaming at all.

## How roaming works

```
Driver with a card from eMSP A
        ↓
Charging point operated by CPO B
        ↓  OCPI link
Backend CPO B  →  Backend eMSP A
        ↓
Invoice from eMSP A to the driver
```

The CPO invoices the eMSP, the eMSP invoices the driver. Both sides add something on top: the hub or the direct connection costs money, and the eMSP has to exist too.

### Hubs

Instead of dozens of bilateral connections, parties can connect via a **hub**:

| Hub | Role |
|---|---|
| **Gireve** | European roaming hub |
| **Hubject** | European hub, strong in Plug & Charge |
| **e-clearing.net** | European neutral hub |

A hub is a technical and commercial intermediary, not a charity: every session via a hub costs commission.

## What "300,000 charging points" means

You see that promise everywhere. What it actually says: *a card from a large eMSP works on many networks in Europe*. That is something different from "you can charge anywhere", because:

- the coverage depends on the cards that *you* have, not on the CPO
- tariffs and conditions may differ per network
- during busy periods or faults, the coverage does not apply

For a fleet it is therefore usually wiser to have **direct accounts** with the networks where you charge a lot, instead of relying on a single roaming card.

## What Stroomlijnen does

This is the honest part.

### What we have

- **OCPI 2.2.1** is implemented
- Our party identity **NL\*STM** is registered with the Benelux IDRO (registration IDRO/0274)
- Charging points can be offered under OCPI

### What we deliberately do not do

:::warning Roaming is off on our charging points
Roaming is technically present but **disabled**. The reason is cost: every session via a hub or eMSP gives up commission, and that applies both to third-party sessions at our sites and to our users elsewhere. For most of our locations — closed or by appointment — roaming mainly produces costs and little use.

On request, a **direct bilateral connection** with a specific party is possible. That is custom work, not self-service.
:::

In concrete terms this means:

- A driver with a card from another provider generally **cannot** charge with us
- Our users charge with us, not "anywhere in Europe" with the same card
- To charge elsewhere, you need an account with that network

### Publication of charging point data

Under the European **AFIR** regulation, publicly accessible charging points must be registered with the national access point (in the Netherlands the **NDW**). That process is under way; once it is complete, our public charging points will appear in the common maps and apps. See [Finding a charging space](/en/docs/locations/finding-charger).

## Common mistakes when reading offers

| Claim | What is usually meant |
|---|---|
| "OCPI roaming with 300,000 points" | There is a connection with a hub; the coverage depends on your card |
| "Plug & Charge throughout Europe" | A certificate variant is in preparation, not operational everywhere |
| "Open protocol, so freedom" | OCPP/OCPI are open standards, but contracts and certificates can still bind you |

## Further reading

- [OCPP overview](/en/docs/technical/ocpp-overview)
- [Finding a charging space](/en/docs/locations/finding-charger)
- [Choosing a CPO](/en/docs/pandeneigenaren/cpo-kiezen)
- [Integrations and data export](/en/docs/technical/integration)
