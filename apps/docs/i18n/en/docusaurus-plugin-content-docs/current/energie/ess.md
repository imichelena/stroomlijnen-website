---
sidebar_position: 3
title: Battery storage as a buffer (ESS)
description: How a stationary battery makes charging possible that the connection cannot deliver, what the limitations are and what to look out for.
keywords: [ESS, battery storage, peak shaving, buffer, grid congestion, C-rate, SPRILA]
---

import { DayFlow } from '@site/src/components/EnergyVisuals';

# Battery storage as a buffer (ESS)

An **ESS (Energy Storage System)** is a stationary battery at your location. It charges when there is headroom and delivers when needed. This increases the effective capacity of your connection without a cable having to go into the ground.

## What it solves

A battery helps in three different situations — and it is important not to confuse them:

| Purpose | What the battery does | Effect |
|---|---|---|
| **Peak shaving** | Briefly delivers power when the building threatens to exceed its contract | You avoid exceedance and fines |
| **Enabling charging** | Delivers power to the chargers on top of what the connection permits | You charge faster than your GTV allows |
| **Shifting energy** | Charges during cheap hours, delivers during expensive hours | Lower energy costs |

These are three different business cases with different requirements for the battery. A battery that is good at peak shaving is not automatically good at "charging the entire fleet".

## The calculation that counts

The usable capacity is not the figure on the datasheet. Two ratios determine what you really get out of it:

- **Capacity (kWh)** — how much energy fits in it. Determines how *long* the battery can contribute.
- **Power (kW)** — how fast energy can go in or out. Determines how *much* the battery can contribute.
- **C-rate (kW/kWh)** — the ratio between the two. A battery of 200 kWh with a C-rate of 0.5 can deliver 100 kW and is empty in two hours.

Rule of thumb: **an empty battery delivers nothing**. Any calculation that assumes "the battery will fill the gap" must also show when that battery is refilled — and whether there was headroom for that.

:::warning Do not calculate with the full capacity
Manufacturers like to quote the gross capacity. In practice, percentages are lost to service life preservation, temperature and a safety reserve. Calculate with the **usable** capacity and with the charging curve, not with the ideal picture.
:::

## Battery plus intelligent control

A battery without good control is an expensive battery pack. The combination is what works:

1. The EMS continuously measures what the building demands.
2. Solar and off-peak hours are used to fill the battery.
3. At peak moments the battery supplements — to the building or to the chargers.
4. The whole remains within the GTV.

So the same battery performs several services: it absorbs the building peak, enables charging and shifts energy to cheap hours. That is precisely the reason to sell the battery not as a standalone product but as part of a single system.

### A working day with storage

Explore three moments at an example site. Generation, charging and storage each follow a different rhythm.

<DayFlow locale="en" />

## Safety and building integration

A battery in a building is a fire safety topic, not just an electrical engineering topic. What to look out for:

- **Multi-layer safety design** — cell monitoring, disconnection and physical separation should all three be present, not just one of them
- **Link with the fire alarm system** — the charging infrastructure must be able to be switched off by the existing fire alarm system
- **Installation location** — ventilation, accessibility for the fire service and distance to (fire) compartments
- **Documentation for the insurer** — certificates, declarations of conformity and the liability story

See also [Municipality and insurer](/en/docs/pandeneigenaren/gemeente-verzekeraar).

## What it costs and what is subsidised

A battery is the most expensive component of the system. There is a subsidy for it, but with strict conditions. In 2026, for stationary batteries at charging infrastructure (SPRILA):

- **€85 per kWh** for SMEs (€60 for large enterprises)
- A maximum of **1,000 kWh** subsidised per charging bay
- C-rate **≤ 0.5**
- At least **70%** of the discharged energy must demonstrably go to the charging stations
- A battery is only eligible for subsidy **together with** at least one eligible charging station

See [Subsidies](/en/docs/pandeneigenaren/subsidies) for the full scheme and the sources.

## When do you need one?

A battery makes sense if:

- the desired charging speed is structurally greater than the headroom on your connection, **and** upgrading cannot happen in time
- you want to flatten your building peak to stay within the contract
- you have a lot of own generation that you would otherwise throw away

A battery does **not** make sense if:

- you only want to charge during the hours when the building is not using anything anyway (then intelligent distribution is enough)
- the business case relies on having the full battery power continuously available
- there is nobody who manages the battery and the EMS together

## Further reading

- [Grid congestion](/en/docs/energie/netcongestie)
- [What does an EMS do?](/en/docs/energie/ems)
- [Subsidies](/en/docs/pandeneigenaren/subsidies)
- [Power management and grid connection](/en/docs/pandeneigenaren/vermogensbeheer)
