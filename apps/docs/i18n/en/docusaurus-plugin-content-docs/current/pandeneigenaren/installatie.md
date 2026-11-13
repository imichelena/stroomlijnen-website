---
sidebar_position: 3
title: From decision to first charging session
description: The real process when installing charging infrastructure — what happens, in what order, and where the time goes.
keywords: [installation, process, lead time, SPRILA, permit, commissioning, production time]
---

# From decision to first charging session

Installing a charging point is not an installation of a few days; it is a process with a long delivery time. Realistically allow **four to six months** from first conversation to first session. Anyone who promises eight weeks here has never had a charging point shipped from Asia.

## The process

```
1. Intake and data analysis      1–2 weeks
2. Proposal and agreement        1–3 weeks
3. Subsidy application           before ordering (required above € 25,000)
4. Order and production          6–8 weeks
5. Transport                     approx. 4 weeks (sea freight to Rotterdam)
6. Installation and connection   1–3 days (by your own electrician)
7. Commissioning and testing     1–3 days
```

Steps 3 to 5 partly run in parallel, but the delivery time from Asia is the hard limit: nothing can be gained there.

## 1. Intake and data analysis

- Conversation about use: who charges, when, how often, with which vehicles
- **Analysis of your quarter-hour data** — what is your actual peak, when is there room
- Practical check: where does the charger go, is the cable route feasible, how is access

This is the step where the most can be gained (and lost). Without your own data, every configuration is a guess.

## 2. Proposal and agreement

- Configuration based on the analysis: capacity, number of charging points, battery or not
- Calculation of the business case, with the assumptions stated explicitly
- Contract form: who operates, who owns, what is the term

## 3. Subsidy

For charging infrastructure at businesses there is the **SPRILA scheme**. Two things are essential:

:::warning Apply before the commission
For an investment above **€ 25.000**, the application must be submitted **before you commission the installation**. If you sign earlier, the right to subsidy lapses. This is not a formality — this is where things go wrong in practice.
:::

See [Subsidies](/en/docs/pandeneigenaren/subsidies) for amounts, conditions and the correct source links.

## 4–5. Order, production and transport

Our DC chargers come from **Hongjiali (HGL)** in China. That is deliberate: it is the reason a 120 kW charger has become affordable instead of an investment that does not fit a culture budget.

- Production time: **6–8 weeks**
- Sea transport to Rotterdam: **approximately 25 days**
- After that: customs clearance, transport to the location, receipt check

Do not expect daily updates in this phase — for weeks nothing visible happens. That is normal.

## 6. Installation and connection

:::caution Who does what
The **electrical installation** — cable tray, circuit in the meter cupboard, connection — is done by **your own installer**, not by us. That is a deliberate choice: your installer knows the building, the distribution board and the safety regulations. We supply the charger, the configuration and the commissioning, and coordinate beforehand with your installer what is needed.
:::

What physically arrives:

| Item | Explanation |
|---|---|
| Charging point | DC fast charger and/or AC charger, with connector(s) and display |
| Cabling in the building | From meter cupboard to charging point — by your installer |
| Measuring points | For the EMS: measurement of the building consumption |
| Battery (optional) | If the analysis shows that buffering is needed |

## 7. Commissioning

1. Bringing the charger online (network, OCPP connection with our backend)
2. Configuration: capacity limits, charging profiles, energy management
3. Check of the safety interlock with the fire alarm system
4. Test sessions with a real vehicle
5. Handover: access to the Customer Portal, recording tariffs, instructing users

Only after that test do we call it "live".

## What shortens the lead time

- **Supplying your quarter-hour data early** — otherwise the analysis becomes the bottleneck
- **Investigating the electrics early** — if the meter cupboard has to be modified, that often comes as a surprise
- **Starting the subsidy early** — the application must be before the commission
- **Completing decision-making internally** — the most common delay is not on our side

## Further reading

- [Subsidies](/en/docs/pandeneigenaren/subsidies)
- [Capacity management](/en/docs/pandeneigenaren/vermogensbeheer)
- [Choosing a CPO](/en/docs/pandeneigenaren/cpo-kiezen)
- [Network requirements](/en/docs/technical/network-requirements)
