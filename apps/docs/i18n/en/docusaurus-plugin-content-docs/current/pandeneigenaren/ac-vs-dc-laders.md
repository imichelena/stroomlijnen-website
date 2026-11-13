---
sidebar_position: 8
title: AC and DC chargers explained
description: The difference between alternating current and direct current charging, what it means for charging time and costs, and how to choose.
keywords: [AC charger, DC charger, alternating current, direct current, CCS2, Type 2, charging capacity, MCS]
---

# AC and DC chargers explained

There are two ways to charge an electric vehicle, and the difference lies in one place: **where the conversion from alternating current to direct current takes place.**

## The principle

The grid supplies **alternating current (AC)**. A battery stores **direct current (DC)**. So somewhere a conversion must take place.

- **AC charging** — the conversion takes place **in the vehicle**, in the on-board charger (OBC)
- **DC charging** — the conversion takes place **in the charger**; the vehicle receives direct current directly

Everything else that differs follows from that.

## Comparison

| Characteristic | AC charger | DC charger |
|---|---|---|
| Where the conversion sits | In the vehicle (on-board charger) | In the charging point |
| Capacity | 3.7–43 kW | 20 kW to 350+ kW |
| What determines the speed | The vehicle's **on-board charger** | The **charger** and what the vehicle can handle |
| Charging time (truck, 300 kWh usable) | approx. 8–80 hours, depending on the OBC | approx. 1–5 hours, depending on vehicle and charger |
| Purchase price of charging point | A few hundred to a few thousand euros | From around € 10.000 to far above € 50.000 |
| Installation | Relatively simple | Heavier: cabling, protection, grid capacity |
| Connector (Europe) | Type 2 | CCS Combo 2 |
| Suitable for overnight/stay charging | Yes | Yes |
| Suitable for quick top-up charging | No | Yes |

:::note The price range is enormous — and that is information
For a 60 kW DC charger there are quotations of around € 50.000 (European, including installation and service) and purchase prices of a few thousand euros (direct import from Asia, excluding transport, customs clearance and commissioning). That difference is not "profiteering": it lies in margin, certification, service, warranty and who carries the risk if something breaks. So never compare only the number on the quotation.
:::

## The on-board charger is the bottleneck with AC

This surprises many people. A 22 kW AC charging point does not deliver 22 kW to a vehicle with an 11 kW on-board charger — it delivers 11 kW. The post adapts to the vehicle, not the other way round.

| OBC capacity | Time for 60 kWh (theoretical) |
|---|---|
| 3.7 kW | ~16 hours |
| 7.4 kW | ~8 hours |
| 11 kW | ~5.5 hours |
| 22 kW | ~2.75 hours |

In practice, time is added: charging losses, a charging curve that flattens off, and the temperature of the battery.

## AC is not "bad"

AC charging is slower but has real advantages:

- **cheaper** to purchase and install
- **lighter on the grid** — less peak capacity needed
- **better for the battery** during prolonged standstill
- **more charging points for the same capacity** — with 30 kW you can install three 11 kW AC points instead of one DC point

For a hotel guest staying a night, AC is fine. For a truck that has to leave at 23:00, it is not.

## DC is not always faster

Two things determine the actual charging speed with DC:

1. **The vehicle's maximum** — a truck with a 150 kW maximum does not charge faster on a 350 kW charger
2. **The charging curve** — above 60–80% SoC the capacity drops on virtually every vehicle

A 120 kW charger is more than sufficient for many touring days: 400 kWh in 10 hours requires an average of 40 kW.

## How to choose

| Situation | Recommendation |
|---|---|
| Vehicle stands still for a night or a working day | **AC** (or light DC), 11–30 kW |
| Vehicle stands still for 4–10 hours and must then be full | **DC**, 50–120 kW |
| Vehicle stands still briefly and must move on quickly | **DC**, 150 kW+ |
| Many vehicles at once, limited capacity | **Several AC points with smart distribution**, or DC with energy management |
| Delivery vans from a fleet | Often **AC** at night, with one DC for exceptions |

More important than AC or DC: **how much capacity is available at which moment**. See [Grid congestion](/en/docs/energie/netcongestie) and [Capacity management](/en/docs/pandeneigenaren/vermogensbeheer).

## What is still to come: MCS

For the heaviest trucks (40 tonnes, large battery packs), **MCS (Megawatt Charging System)** is becoming the next standard, with capacities up to 3.75 MW. Rollout along European corridors is under way but still limited, and it demands considerably more from the grid connection than CCS.

For a theatre or hotel, MCS is not relevant for the time being; for a logistics hub along a corridor it may become so in due course. See [CharIN](https://www.charin.global) for the standard.

## Further reading

- [Capacity management](/en/docs/pandeneigenaren/vermogensbeheer)
- [Grid congestion](/en/docs/energie/netcongestie)
- [What does an EMS do?](/en/docs/energie/ems)
- [OCPP overview](/en/docs/technical/ocpp-overview)
