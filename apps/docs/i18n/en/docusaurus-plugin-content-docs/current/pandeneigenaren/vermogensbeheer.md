---
sidebar_position: 6
title: Capacity management and grid connection
description: Connection capacity, contracted capacity, per-phase ceilings, peak shaving and when a grid upgrade is really needed.
keywords: [connection capacity, GTV, contracted capacity, peak shaving, load management, upgrade, kVA]
---

# Capacity management and grid connection

Before you install charging points, you need to know how much capacity you have and who uses it. This page explains the concepts and the calculation errors that are often made.

## Two numbers, one misunderstanding

**Connection capacity** is the physical maximum that your connection can handle: cables, fuses, transformer station. **Contracted transmission capacity (GTV)** is what you have agreed with the grid operator and what you pay for. The GTV is usually lower.

:::warning kVA is not "kW per phase"
Connections are expressed in **kVA** across **three phases together**. A connection of 400 kVA is therefore not 400 kW per phase — that would be 1,200 kW, which nobody has. Calculate approximately with the total, and take account of the power factor of your installation.
:::

| Concept | Meaning | Can it be influenced? |
|---|---|---|
| Connection capacity | Physical maximum | Only with a grid upgrade |
| GTV | What you may contractually draw | Yes, with the grid operator |
| Actual consumption | What is being drawn now | Yes, through behaviour and control |

## Per phase, not just the total

This is the second frequently made mistake. Your connection consists of **three fuses**. A neatly balanced total can still blow one phase if the load is unevenly distributed.

That is why good control works with a **per-phase ceiling**: the tightest phase determines what can be added. Connecting a charging point on one phase while that phase is already heavily loaded is asking for trouble — even if the total appears ample.

## How much room do you have?

The only reliable way: looking at your **quarter-hour values** over a longer period.

```
GTV                270 kW
Gemeten avondpiek  220 kW   →  50 kW ruimte
Gemeten overdag     40 kW   →  230 kW ruimte
```

Note what this says: the room is there **at certain moments**, not always. A charging point that continuously demands 150 kW on this connection is a problem in the evening. A charging point that is controlled charges quickly during the day and slowly in the evening — and then it works.

## What a charger demands

| Type | Capacity | Share of a 270 kW GTV |
|---|---|---|
| AC charger, single-phase | 3.7–7.4 kW | 1–3% |
| AC charger, three-phase | 11–30 kW | 4–11% |
| DC charger (our standard) | 120 kW (2×60) | up to 44% |
| DC when expanded | up to 180 kW | up to 67% |

A DC charger does not continuously draw its maximum: the capacity follows the vehicle's charging curve and drops sharply above 60–80% SoC. Nevertheless you must reckon with the maximum for as long as the session runs.

## The solution: controlling instead of upgrading

**Peak shaving / load management** continuously adjusts the charging capacity based on what is left over at that moment:

1. The system measures the building consumption, per phase
2. It calculates the remaining room under the ceiling
3. The charging points receive exactly that
4. If the building consumption rises (the public comes in, the kitchen starts), charging goes down
5. If it drops again, charging goes up

The result: you do not exceed your GTV, you charge as fast as possible, and no manual action is needed. See [What does an EMS do?](/en/docs/energie/ems).

## When is an upgrade really needed?

Rarely for a first charging point. An upgrade becomes relevant if:

- you structurally want to charge more than there is room for, even with control
- you want to supply guaranteed capacity to third parties (contractually)
- you want to run multiple heavy charging points at the same time without a battery

:::note Waiting times
Applying for an upgrade means a study and a queue at the grid operator. In busy areas that ranges from months to several years, and sometimes there is no date yet. Do not count on it as plan A. A battery can bridge the waiting time — see [Battery storage](/en/docs/energie/ess).
:::

## Battery as buffer

An ESS changes the arithmetic: the system can deliver more than the connection permits, because the battery steps in at peak moments and refills during quiet hours.

| | Without battery | With battery |
|---|---|---|
| Available during the day | 230 kW | 230 kW + buffer |
| Available in the evening | 50 kW | 50 kW + buffer |
| Condition | — | The battery must be charged; calculate with the usable capacity, not with the datasheet |

## Further reading

- [Grid congestion](/en/docs/energie/netcongestie)
- [Battery storage](/en/docs/energie/ess)
- [What does an EMS do?](/en/docs/energie/ems)
- [Energy budgets and reservations](/en/docs/energie/energiebudget)
