---
sidebar_position: 2
title: Vehicles and charge cards
description: Vehicle administration, EVCCID enrolment at the charger, separate approval and managing charge cards.
keywords: [vehicles, VIN, registration number, charge card, RFID, cost centre, vehicle group]
---

# Vehicles and charge cards

Automatic recognition requires a recorded vehicle identifier and valid permission. Administrative vehicle details alone are not enough.

## Enrolling a vehicle for automatic recognition

Vehicle administration and automatic recognition are not the same. A registration number, make/model or VIN can be administrative information; the VIN is not the identifier for our current automatic recognition.

Registration for recognition takes place **on the charger screen**, with a card linked to the account. On connection, the charger reads the **EVCCID (the MAC address of the vehicle communication controller)** and records the link. See [Setting up automatic recognition](/en/docs/plug-and-charge/setup-guide) for the full procedure, including the optional rental and registration-number steps. The registration number can be checked against RDW there; no RDW result does not prevent enrolment.

## Recording and approval

The account owner must give permission separately. A message that the vehicle has been added is not confirmation that it may already charge automatically. Waiting for approval, denial and expired permission are different situations. Ask the account owner to check the registration in the [Customer Portal](https://portal.stroomlijnen.nl); ask your account manager to explain the available management options.

Entering portal details or supplying a vehicle list does not replace capturing the identity at the charger and approval. Vehicle compatibility and charging permissions remain relevant after approval too.

## Groups and cost centres

Divide vehicles into groups to keep the overview:

- **by department** — operations, sales, logistics
- **by site** — if you have multiple premises
- **by type** — lorries, vans, passenger cars

Groups are not access control: they do not determine permissions, only grouping and reporting. You arrange permissions via [Team and roles](/en/docs/klantportaal/team).

## Charge cards

You manage charge cards in the same place:

| Action | Effect |
|---|---|
| Add card | The card becomes usable as soon as it is known to us |
| Link card to vehicle | Sessions are attributed to that vehicle |
| Link card to person | Sessions follow the person, regardless of the vehicle |
| Block card | No new sessions immediately |

See [RFID cards](/en/docs/getting-started/rfid-cards) for the full story, including requesting them.

## Retiring a vehicle

On sale or decommissioning:

1. Have permission for automatic recognition revoked and check this with the account owner or account manager.
2. Do not assume that deleting administrative details alone is enough.
3. Check linked cards separately and have them blocked if needed.

The session history is retained for your records; you do not lose historical data by removing a vehicle.

## What you cannot configure

We are honest about this, because the previous documentation suggested more:

- **No charging power per vehicle** — the power is determined by the EMS and by what the vehicle requests
- **No SoC target per vehicle** — the vehicle determines the level to which it charges
- **No charging windows per vehicle in the portal** — we agree charging windows and budgets with you per site

What you *can* configure: which vehicles count, under which group or cost centre, and which cards are active.

## Further reading

- [Setting up automatic recognition](/en/docs/plug-and-charge/setup-guide)
- [RFID cards](/en/docs/getting-started/rfid-cards)
- [Team and roles](/en/docs/klantportaal/team)
- [Invoicing](/en/docs/klantportaal/invoicing)
