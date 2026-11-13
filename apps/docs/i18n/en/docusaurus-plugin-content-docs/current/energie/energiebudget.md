---
sidebar_position: 4
title: Energy budgets and reservations
description: How you determine who may charge how much, how reservations work and why a reserved session is treated differently from a spontaneous one.
keywords: [energy budget, reservation, charging budget, reserving, priority, charging window, admission]
---

# Energy budgets and reservations

Intelligent distribution solves the technical problem: staying within the power that is available. But there is a second question that is just as important: **who gets that power?**

Energy budgets and reservations exist for that.

## A budget is an agreement, not a setting

An **energy budget** establishes how much a vehicle, person or department may charge — per day, per week or per month. For example:

- a guest at a hotel: a charging amount included with the room
- an employee: enough for commuting (roughly 10 kWh per 50 km)
- a department: a monthly maximum that belongs to the cost centre

The budget is linked to the identity that the vehicle discloses when it is plugged in (usually the vehicle itself). That way nobody has to "activate" a credit: the vehicle is recognised and the budget is known.

:::tip Why a budget works better than a per-session limit
A per-session limit says nothing about behaviour over a month. A budget over a longer period distributes scarce headroom fairly and makes costs predictable — even if someone charges every day.
:::

## Two types of sessions

This distinction is the core of the system:

| | **Contracted** | **Opportunistic** |
|---|---|---|
| What has been agreed | Energy **and** a time by which it must be ready | "Charge as much as possible" |
| Is capacity reserved | Yes, capacity is reserved | No |
| In case of scarcity | Takes precedence | Waits or charges more slowly |
| What you get | A substantiated promise | A best effort |

A **contracted** session is for the case where "approximately" is not good enough: the truck has to leave at 23:00, full stop. An **opportunistic** session is for the car that is there anyway and may charge as long as there is headroom.

## Reserving: keeping capacity free

A reservation does not reserve a charge point, but **power over time**. That has a few consequences that surprise people:

- **A reservation costs headroom, even if nothing happens.** Once a block is reserved, an opportunistic session can no longer fit in.
- **The calculation is pessimistic.** Feasibility is tested against an unfavourable charging curve, not against the best-case scenario.
- **You get an outcome, not a yes/no.** Planning a contracted session produces a result with feasibility, charging speed, expected end time, the worst case and the margin in kWh.

```
{ feasible, speed_kw, ready_at, worst_case, margin_kwh, reason }
```

If something is not feasible, you hear about it **before** the session starts — not at 22:30 when the truck is not yet full.

## Charging windows

A charging window limits *when* charging may take place, not *how much*. Useful for:

- charging outside the building peak (for example only after 21:00)
- charging during off-peak hours
- a fixed window per part of the day, so that ten cars do not all start at 09:00 at the same time

The last one is the most important practical application: if everyone arrives at the same time and everyone wants the full power at the same time, everyone has to wait. With staggered windows, everyone charges on time with less power each.

## Priority in case of scarcity

If the power is genuinely not enough for everyone, priority determines who goes first. Set this deliberately:

- **Operationally critical** — the vehicle that has to run the service
- **Contracted** — vehicles with an agreed departure time
- **Opportunistic** — the rest

Without explicit priority, the system distributes fairly, which usually works out well but does not always follow operational reality.

## What you set yourself, and what you do not

You set: budgets, windows, priorities, desired charging times.

You **cannot** set: more power than is available. An override is a *wish* ("charge this vehicle preferably at 60 kW"), not a guarantee. The system will never remove a limit that is needed to protect the connection — not even if a user asks for it.

## Further reading

- [What does an EMS do?](/en/docs/energie/ems)
- [Grid congestion](/en/docs/energie/netcongestie)
- [Plug & Charge](/en/docs/plug-and-charge/what-is-pnc)
- [Viewing sessions](/en/docs/klantportaal/sessions)
