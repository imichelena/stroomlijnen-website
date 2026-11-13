---
sidebar_position: 3
title: Sessions
description: Viewing, filtering, understanding and exporting charging sessions — including the power curve and what the figures do and do not tell you.
keywords: [charging sessions, session history, export, CSV, power curve, energy per session]
---

# Sessions

Every charging session is recorded: when, where, how much energy, at which tariff and how authentication took place.

## Active sessions

At the top you see what is charging right now:

- which vehicle
- at which site and which charging point
- since when
- how many kWh have been delivered so far
- the current power

The power is updated at intervals, not continuously. A screen showing "60 kW" while the vehicle has just started regulating down is therefore slightly behind. For an exact picture, use the power curve afterwards.

## Session history

Filter by:

- **period** (day, week, month, custom range)
- **vehicle** or vehicle group
- **site**
- **authentication method** (automatic recognition, card, QR)

## What a session contains

| Field | Meaning |
|---|---|
| Start and end | Time, including time zone |
| Duration | From connection to stop |
| Energy | kWh delivered |
| Maximum power | The highest peak during the session |
| Average power | Energy divided by time — usually the fairest figure |
| Tariff and costs | Which tariff applied and what it cost |
| Authentication method | How the session was started |
| Charging point | Site and EVSE-ID |

:::note SoC is often missing
The battery status (SoC) is not reported by all vehicles, by a long way. If nothing is shown, the vehicle did not share it — that is not an error in our records.
:::

## Reading the power curve

A DC session usually looks like this:

1. **Start** — the power ramps up while vehicle and charger negotiate
2. **Plateau** — the maximum the vehicle can handle, or the maximum the site allows
3. **Taper** — above roughly 60–80% SoC the power gradually drops off
4. **End** — at the target or on manual stop

A "dip" in the middle of the plateau is usually the EMS reducing the power because the building needed it. That is visible in the curve and can be traced in the portal.

## Exporting

Every filtered view can be downloaded as **CSV**. Use that for:

- allocating costs to cost centres
- analysis in Excel or a BI tool
- checking the invoice

See [Integrations and data export](/en/docs/technical/integration) for structural integration.

## Further reading

- [Invoicing](/en/docs/klantportaal/invoicing)
- [Energy budgets and reservations](/en/docs/energie/energiebudget)
- [What does an EMS do?](/en/docs/energie/ems)
