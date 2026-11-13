---
sidebar_position: 2
title: What does an EMS do?
description: How an energy management system measures, budgets and distributes the power at a location across charging and building — and what you notice of it.
keywords: [EMS, energy management system, smart charging, load management, power budget, power distribution]
---

import { ControlArchitecture } from '@site/src/components/EnergyVisuals';

# What does an EMS do?

An **EMS (energy management system)** is the layer between your meter and your charge points. It continuously measures what the building is consuming, calculates how much is left over, and distributes that across the vehicles that are charging.

Without an EMS, charging is a guess. With an EMS, it is a budget.

## The overall picture

The controller allocates charging power. Electricity flows through cables and the distribution board, not through software.

<ControlArchitecture locale="en" />

## The core: one budget, continuously measured

The system works with a single figure that is determined anew all the time:

```
headroom = ceiling − measured draw + what the battery can contribute
```

A few properties that matter here:

- **Per phase, not just the total.** Your connection is a fuse per phase. A neatly balanced total can still blow a single phase. That is why the **tightest phase** is decisive.
- **From measurement, not from a spreadsheet.** The ceiling comes from the meter, not from an assumption about what the building "usually" does.
- **With an expiry date.** Every allocation is valid briefly and must be confirmed again. An old measurement is not permission.
- **One owner per figure.** There is exactly one component that determines how much a charge point may draw. Two systems both setting a limit is asking for trouble.

## Admitting versus limiting

This distinction explains most of the confusion among users:

| | **Admission** (on plugging in) | **Limiting** (continuous) |
|---|---|---|
| When | Once, when the session starts | Continuously, every second |
| Question | Can this session be served at all? | How much power may go to it now? |
| With too little headroom | The session does not start | The session slows down, but does not stop |

A session that has been admitted is **not** cut off halfway because the building gets busy. The power goes down and the expected end time shifts. That is deliberate: a driver who starts at 15:00 and has to leave at 23:00 is better served by a session that runs more slowly than by a session that stops at 20:00.

## Honestly slow

If charging goes more slowly than you expect, that is usually not a fault. The order of causes is:

1. **The battery is cold or already fairly full** — above approximately 80%, the charging speed drops for every vehicle.
2. **The vehicle limits itself** — many trucks have a maximum that is lower than what the charger can deliver.
3. **The location has little headroom at that moment** — the building is using the power (air conditioning, kitchen, performance) and charging gets the rest.
4. **More vehicles are charging at the same time** — the available power is distributed.

Only points 3 and 4 are "ours", and even those are not errors: they are the system doing what it should. What you may expect is that you can see it: the Customer Portal (Klantportaal) shows, per session, what the power was and why it was limited.

:::note What we do not do
We do not let a session quietly stall without you knowing. If the power has to go down, the expected end time shifts and the session keeps running. We only stop if there is really no alternative (for example in the case of an emergency stop or a fault).
:::

## If something is wrong with the measurement

An EMS that keeps calculating on an old measurement is more dangerous than an EMS that stops. That is why these rules apply:

| Situation | What the system does |
|---|---|
| Meter briefly provides no data | Maintain the last good budget, block increases |
| Meter stays away | Increases set to zero, current limits remain in place |
| Verification fails | Transmission freezes at the last good value and an alert is issued |
| Cloud or internet down | The control system on site keeps running; sessions continue to work and are processed later |
| Storage or logging broken | New sessions are refused instead of started "blind" |

The last one sounds strict, but it is the only way to demonstrate afterwards what happened. Every limit, every refusal and every restriction is recorded with a reason.

## What you notice of it

- **No blown fuses**, because the ceiling comes from a live measurement
- **Honest expectations** — a lower charging speed with an accurate end time instead of a silent stop
- **Evidence afterwards** — for each session it can be traced why it was limited
- **Charging without internet** — the loop runs on site, not in the cloud

## EMS and the GACS building-automation requirements

**Energy management is part of building performance—not just charging.** A GACS (the Dutch term for a building automation and control system) monitors and controls a building's climate and energy installations. RVO explicitly includes interaction with battery storage, solar panels and charging stations among its required functions.

The Stroomlijnen EMS coordinates site electricity flows and available charging power, taking account of connected generation and battery storage. This is relevant to the energy-coordination functions of a GACS. **It does not, by itself, establish that the whole building meets the GACS requirements.** The actual connected equipment, enabled functions and integration with heating, cooling and other building systems must be assessed per building.

### When does the obligation apply?

According to [RVO's GACS guidance](https://www.rvo.nl/onderwerpen/wetten-en-regels-gebouwen/epbd-iii/systeemeisen-technische-bouwsystemen/gacs):

- Since **1 January 2026**, qualifying non-residential buildings with heating and/or air-conditioning systems above **290 kW** must have a GACS.
- From **1 January 2030**, the threshold becomes **more than 70 kW**.
- These thresholds concern the relevant heating/cooling capacity—not charger power, battery capacity or the electrical grid connection. Building use, system boundaries and exceptions matter; consult RVO's applicability guidance.

### What must be demonstrated?

RVO lists continuous energy monitoring, recording, analysis and adjustment; assessment of building energy efficiency and detection of performance losses with improvement information for the manager; communication with connected building systems; and interoperability with other energy-related equipment.

A GACS can combine components from different suppliers. An EMS is therefore a possible component, not an automatic substitute for all required building-automation functions. RVO also states that an existing EMS may avoid additional investment **if its functions meet the requirements and are actually used**.

For existing buildings, RVO specifies at least **class C**, with **class B for the technical management and analysis functions in chapter 7**, under NEN-EN-ISO 52120-1. For new non-residential buildings, its guidance states that requirements applying since **29 May 2026** are **class B**, with **class A for chapter 7**. These are building-system requirements, **not classifications awarded to our EMS**.

Use the checklist linked by RVO with a technically competent assessor, record the findings and identify any missing functions. We do not claim that installing our EMS alone fulfils the GACS obligation.

**Official source:** [RVO — Building automation and control system (GACS), in Dutch](https://www.rvo.nl/onderwerpen/wetten-en-regels-gebouwen/epbd-iii/systeemeisen-technische-bouwsystemen/gacs).

## Further reading

- [Grid congestion](/en/docs/energie/netcongestie)
- [Battery storage as a buffer](/en/docs/energie/ess)
- [Energy budgets and reservations](/en/docs/energie/energiebudget)
- [Power management and grid connection](/en/docs/pandeneigenaren/vermogensbeheer)
