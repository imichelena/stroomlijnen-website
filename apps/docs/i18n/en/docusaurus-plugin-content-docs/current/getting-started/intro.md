---
sidebar_position: 1
title: What is Stroomlijnen?
description: Introduction to Stroomlijnen — a Dutch CPO and eMSP that installs charging infrastructure at theatres, hotels and businesses, and distributes the available power at those locations intelligently.
keywords: [Stroomlijnen, CPO, eMSP, electric charging, trucks, grid congestion, energy storage]
---

# What is Stroomlijnen?

Stroomlijnen B.V. is a Dutch **Charge Point Operator (CPO)** and **e-Mobility Service Provider (eMSP)**. We install charging infrastructure at locations that already have a large electricity connection — theatres, cultural institutions, hotels and businesses — and make sure that connection can also be used to charge vehicles without the building running into problems.

Our eMSP identity in the European charging network is **NL\*STM**.

## Charging as part of your building

A charge point connects a vehicle to your site’s energy system. Power management, access control and cybersecurity therefore belong together: charging must fit the building’s capacity, with clear boundaries around who can control the equipment.

Our approach divides these responsibilities between the cloud, an on-site gateway (the bastion) and charger software. The EMS manages available power; network and access controls protect communication and operation. Capabilities depend on the device and site configuration.

Start with the overall system below. The [architecture and security boundaries](/en/docs/security/architecture) are explained separately, with diagrams.

## Where we come from

Stroomlijnen started in 2025 as a pilot in the **cultural sector**. The reason was practical: touring productions drive a truck full of lighting, sound and scenery from theatre to theatre. From 2030, diesel trucks will no longer be allowed into many city centres. Electric trucks already exist — but without charging facilities at the venue, touring electrically is simply not feasible.

The conclusion was simple: **a charge point at every venue**. Charging during the time the production is there anyway, at a tariff that is clear in advance.

The same logic applies outside culture: a hotel that wants to let guests charge, or a company electrifying its fleet, usually does not lack ambition but **usable power** on the meter.

## Three layers, one system

What we deliver is not a standalone charge point but a system of three layers:

| Layer | What it is | What it does for you |
|---|---|---|
| **Storage** | A battery (ESS) that buffers power when it is quiet and releases it when it is busy | Makes charging possible without you needing to upgrade your connection |
| **Intelligence** | An energy management system (EMS) that controls the entire building in real time | Keeps you automatically below your connection limit, without unexpected peaks |
| **Charging** | The charge points themselves, with automatic vehicle recognition | Lets vehicles charge with the power that is actually available at that moment |

The middle layer is where the real work happens. See [Grid congestion and power](/en/docs/energie/netcongestie) and [What does an EMS do?](/en/docs/energie/ems).

## Our chargers

We work with **Hongjiali (HGL)** charging stations, validated by us at the factory:

| Type | Power | Connector | Protocol |
|---|---|---|---|
| DC fast charger (ENC-DCL120B) | **120 kW**, modularly expandable to 180 kW; configurable as 1×120 kW or 2×60 kW | 2× CCS2 | OCPP 2.0.1 |
| AC charger (ENC-DCX030A) | 30 kW | Type 2 | OCPP 1.6J |

The DC chargers are modularly built: if a power module fails, the others keep working and the module can be replaced on site.

:::note No 400 kW
Elsewhere in the sector you will come across figures of 350–400 kW. Our standard DC charger is 120 kW, because that is more than enough for an average touring day: charging 400 kWh during a 10-hour stay requires an average of 40 kW, and 120 kW provides margin for a quick start on arrival. At larger locations we scale up with additional units or modules.
:::

## What you can expect from us

- **One party for the whole process** — installation, management, faults, invoicing and (for the cultural sector) ERE registration
- **No surprises on the meter** — the EMS continuously monitors how much may still be drawn
- **Continue charging if the cloud goes down** — the control system is on site, not in a data centre
- **Insight** — via the [Customer Portal](/en/docs/klantportaal/overview) (Klantportaal) you can see what has been charged, by whom and at what tariff

## What this is not

We do not promise things that do not exist yet. That is why, in this knowledge base, we state in case of doubt what works **today** and what is **in development**. Specifically:

- **Roaming** (charging with a card from another provider at our chargers, or the other way round) is technically available via OCPI, but is deliberately **switched off** on our chargers because of the costs. A direct connection is possible on request. See [Roaming explained](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd).
- **Plug & Charge** works at our chargers on the basis of automatic vehicle recognition; the certificate variant according to ISO 15118 is in development. See [What is Plug & Charge?](/en/docs/plug-and-charge/what-is-pnc).
- **Bidirectional charging** (feeding power back from a vehicle) is something for the future, not something we can deliver now.

## Further reading

- [Your first charging session](/en/docs/getting-started/first-session)
- [Grid congestion: why power is the real problem](/en/docs/energie/netcongestie)
- [Plug & Charge](/en/docs/plug-and-charge/what-is-pnc)
- [The Customer Portal](/en/docs/klantportaal/overview)
- [Frequently asked questions](/en/docs/faq)
