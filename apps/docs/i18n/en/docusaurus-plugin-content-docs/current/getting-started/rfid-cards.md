---
sidebar_position: 3
title: RFID cards
description: How charging cards work at Stroomlijnen, how you request them, link them to a vehicle or person and block them again.
keywords: [RFID card, charging card, NL*STM, requesting a card, blocking a card, Customer Portal]
---

# RFID cards

An RFID card is the simplest fallback option: tap and charge. At Stroomlijnen you mainly use a card as a **backup** alongside automatic vehicle recognition, or for vehicles that cannot (yet) be recognised automatically.

## How it works

Every card has a unique identifier (the **UID**). When you tap:

1. The charger reads the UID.
2. The charger asks our backend via OCPP whether this card may charge.
3. Our backend checks whether the card is active and which organisation it belongs to.
4. If the card is valid, the session starts and the energy is booked to that account.

The card is a **means of payment, not a key**: it only says *who* is charging, not *whether* the vehicle may charge. The costs appear on the invoice of the organisation the card belongs to.

## Requesting a card

You request cards via the [Customer Portal](/en/docs/klantportaal/overview) (Klantportaal) or via your account manager. You indicate how many cards you need and where they should go. We then send them to you.

Do you not yet have access to the portal? Ask your account manager to include the first cards with the onboarding.

:::note Quantities and costs
The conditions regarding quantities, costs and replacement are set out in your agreement — they differ per package. No amounts are deliberately stated here, because they can differ per customer and per year. You can find your current conditions in the Customer Portal under **Account**.
:::

## Linking a card

A card is only usable once it is known to us **and** linked to your organisation.

1. Open the charging card section in the Customer Portal (your account manager will point you to it).
2. Check whether the new card appears in the list (this can take a while after delivery).
3. Link the card to a **vehicle** or to a **person**:
   - **To a vehicle** — the session is always attributed to that vehicle. Useful if one car is driven by several people.
   - **To a person** — the session follows the person, regardless of which car they drive.
4. Test the card at a charger.

By assigning cards consistently, your reporting stays accurate: you see what has been charged per vehicle or per person.

## Blocking a card

In case of loss, theft or an employee leaving:

1. Open the charging card overview in the Customer Portal.
2. Find the card and set it to **blocked**.

A blocked card can no longer start a session. Anything charged before the block remains on the invoice as normal.

:::warning Always block immediately in case of loss
Until the moment of blocking, anyone with the card can charge on your account. Blocking is immediate and irreversible in the sense that you must register the card again if it is found — which is exactly the intention.
:::

## Card or automatic recognition?

| | RFID card | Automatic vehicle recognition |
|---|---|---|
| Needed at the charger | Tap the card | Do nothing |
| What it identifies | The card (and therefore the person or vehicle it is linked to) | The vehicle itself |
| Can be lost | Yes | No |
| Works on someone else's charging network | Only if there is a roaming connection (switched off by default at our sites, see [roaming](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd)) | No, only at our sites |
| Suitable as a fallback option | Yes, always | No, if the vehicle is not recognised there is nothing |

**Advice:** use automatic recognition where possible and keep a card per vehicle or per driver as a fallback option. That way nobody has to wait if recognition fails once.

## Next steps

- [Setting up Plug & Charge](/en/docs/plug-and-charge/setup-guide)
- [Managing vehicles](/en/docs/klantportaal/vehicles)
- [Understanding your invoices](/en/docs/klantportaal/invoicing)
