---
sidebar_position: 2
title: Site guide
description: What you will find at a Stroomlijnen charging site — arrival, equipment, connecting, safety and reporting faults.
keywords: [charging site, CCS2, charge point operation, safety, emergency stop, reporting a fault]
---

# Site guide

What you will find at a typical Stroomlijnen site, and how to charge there without problems.

## Arrival

Charging locations can be recognised by the chargers themselves and by the markings of the bay. At sites with a barrier or gate, the site manager arranges access; we do not provide access passes for gates.

In practice:

- **Drive up to the bay and see where the cable comes out best.** At a drive-through layout you do not need to reverse.
- **Mind the height and the space.** Lorry bays are more spacious, but not every site is suitable for every combination.
- **Park one vehicle per charging point.**

## The chargers

| Feature | DC fast charger | AC charger |
|---|---|---|
| Type | HGL ENC-DCL120B | HGL ENC-DCX030A |
| Power | 120 kW (1×120 or 2×60), expandable to 180 kW | 30 kW |
| Connector | 2× CCS Combo 2 | Type 2 |
| Protocol | Direct API to local bastion | Local OCPP 1.6J |
| Use | Charging in hours, quick top-up | Standing idle for long periods |

<p><strong>120 kW DC fast charger · Brochure (PDF)</strong><br /><a href="https://docs.stroomlijnen.nl/brochures/Stroomlijnen-120kW-DC-snellader-Brochure-EN.pdf" download="" aria-label="120 kW DC fast charger · English (PDF)">English ↓</a> &nbsp;·&nbsp; <a href="https://docs.stroomlijnen.nl/brochures/Stroomlijnen-120kW-DC-snellader-Brochure-NL.pdf" download="" aria-label="120 kW DC fast charger · Nederlands (PDF)">Nederlands ↓</a></p>

The DC charger is modular: if one power module fails, the others keep working. That is why a fault sometimes does not mean you cannot charge, but that it goes more slowly.

## Connecting

1. **Park** in the bay.
2. **Open** the vehicle's charging flap.
3. **Take** the CCS connector from the holder.
4. **Insert** it until you feel a click. Do not force it.
5. **Authenticate** — with automatic recognition: do nothing. Otherwise: tap a card or scan a QR code.
6. **Check** on the display that charging starts and that the power ramps up.

## Disconnecting

1. **Stop** the session — tap a card, stop in the app, or use the stop button on the charger.
2. **Wait** until the charger confirms and unlocks the connector.
3. **Remove** the connector and hang it back in the holder.
4. **Close** the charging flap and drive away, so that the bay becomes free.

:::caution
The connector locks as soon as the session is running. Never pull on the cable to stop — stop the session first.
:::

## Safety

- **Emergency stop** — every charger has an emergency stop that cuts the power immediately. Use it in case of smoke, fire, sparks or a trapped cable.
- **Fire protection** — the charging installation is linked to the building's fire alarm system, so that the charging current is cut in the event of a fire alarm.
- **No flammable items** in or near the charging bay.
- **Damaged cable or connector** — do not use it, report it.
- **No smoking** in the charging area.
- **In a thunderstorm** — connecting is fine, but do not stand next to the installation.

## Reporting faults

Report with these details:

1. **Site** and **number on the charger**
2. **Time**
3. **What happened** and the **text on the display**
4. **Registration number** of the vehicle

You can report via your account manager or via [stroomlijnen.nl/contact](https://stroomlijnen.nl/en/contact/). In an emergency (for example a trapped cable or smoke), the general emergency number applies; use the emergency stop afterwards.

On our side we can also see whether a charger is online and which faults have occurred, so a report with the time is often enough to resolve it remotely.

## Facilities

What else is available at a site — toilet, coffee, waiting area — differs per building and is managed by the site, not by us. There is no Stroomlijnen WiFi network of our own. What does apply everywhere: the charging installation is reachable 24/7 and lit as far as the site permits.

## Further reading

- [Charging etiquette](/en/docs/locations/etiquette)
- [Your first charging session](/en/docs/getting-started/first-session)
- [Troubleshooting](/en/docs/plug-and-charge/troubleshooting)
- [Network requirements](/en/docs/technical/network-requirements)
