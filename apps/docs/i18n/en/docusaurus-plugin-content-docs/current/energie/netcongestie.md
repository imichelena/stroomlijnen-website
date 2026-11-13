---
sidebar_position: 1
title: Grid congestion — why power is the real problem
description: What grid congestion is, what contracted transmission capacity (GTV) means, why upgrading can take years, and what you can do about it without waiting.
keywords: [grid congestion, GTV, contracted capacity, connection capacity, upgrading, waiting time, capacity]
---

import { CapacityExplorer } from '@site/src/components/EnergyVisuals';

# Grid congestion — why power is the real problem

Almost everyone who wants to install charge points starts with the chargers. The real question is a different one: **how much power may pass through my connection right now, and who is using it?**

In large parts of the Netherlands, the answer to that question is the bottleneck. That is called grid congestion.

## Three figures you must keep apart

| Term | What it is | Where it comes from |
|---|---|---|
| **Connection capacity** | The physical maximum your connection can handle, determined by cables and the transformer station | Grid operator |
| **Contracted transmission capacity (GTV)** | The capacity for which you have a contract and for which you pay | Your contract with the grid operator |
| **Actual consumption** | What is actually being drawn at this moment | Your meter |

The GTV is usually **lower** than the connection capacity. And it is the only figure that counts for the question of whether you *may* connect something: drawing above your GTV constitutes an exceedance, and repeated exceedances lead to a fine or an obligation to upgrade.

:::warning kVA is not "kW per phase"
A connection is expressed in **kVA** (apparent power), distributed across three phases. A 400 kVA connection therefore does not mean 400 kW per phase. As a rough calculation, assume a total of approximately 400 kW across the three phases together, and take the power factor of your equipment into account. Anyone who reads this as "per phase" ends up a factor of three too high.
:::

## Why upgrading is not an option

In many regions the grid is full. Applying for an upgrade means a study, a queue and often a new transformer station. In practice, waiting times range from **months to several years**, depending on region and size — and in the busiest areas there is simply no date yet.

That does not mean nothing can be done. It means you have to work with the power that is **already** there.

## The headroom you already have

The crux: your GTV is dimensioned for your **peak**, not your average. At a theatre that peak is in the evening — audience inside, air conditioning on, performance running. During the day, consumption is often a fraction of that.

```
GTV                270 kW
Evening consumption 220 kW   →  50 kW headroom
Daytime              40 kW   →  230 kW headroom
```

Exactly that daytime gap is where a truck standing at the loading dock for 8–10 hours fits. So you do not need to buy extra power; you need to make it available **at the right moment**.

And that is the entire reason an EMS exists: to measure that gap continuously and keep charging within it. See [What does an EMS do?](/en/docs/energie/ems).

### See how headroom changes

Change the building demand in this example. Charging uses only the power available within the configured limit.

<CapacityExplorer locale="en" />

## Four ways to deal with a full grid

| Approach | What it does | When it makes sense |
|---|---|---|
| **Intelligent distribution (EMS)** | Charges only with the power that is left over at that moment | Always — this is the basis |
| **Buffering (battery/ESS)** | Fills up during quiet hours and delivers during peak moments | If the desired charging speed is greater than the headroom on the connection |
| **Shifting in time** | Scheduling charging during off-peak hours or outside the building peak | If the vehicle is stationary long enough |
| **Upgrading** | Contracting more capacity | If it is structurally necessary and the waiting time is acceptable |

In practice you combine the first three; the fourth is the last resort. See also [Battery storage as a buffer](/en/docs/energie/ess) and [Energy budgets and reservations](/en/docs/energie/energiebudget).

## What this means for a charge point at your site

A few conclusions that are often surprising:

- **A powerful charger is not automatically better.** A 120 kW charger that continuously draws 120 kW on a connection where 50 kW is left over is a problem. With an EMS, that same charger is useful: it takes what is available.
- **The average charging speed is what counts**, not the peak. 400 kWh over 10 hours is an average of 40 kW.
- **Your own generation helps, but not always.** Solar delivers during the day and drops away in the evening — exactly when the building peak arrives. Do not count solar production as guaranteed capacity.
- **The meter is the source of truth.** Any calculation that is not based on your own quarter-hour data is an estimate.

## Further reading

- [What does an EMS do?](/en/docs/energie/ems)
- [Battery storage as a buffer (ESS)](/en/docs/energie/ess)
- [Energy budgets and reservations](/en/docs/energie/energiebudget)
- [Power management and grid connection](/en/docs/pandeneigenaren/vermogensbeheer)
