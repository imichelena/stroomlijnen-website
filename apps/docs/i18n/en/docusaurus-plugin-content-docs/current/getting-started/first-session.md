---
sidebar_position: 2
title: Your first charging session
description: Step-by-step explanation of a charging session at a Stroomlijnen charger — from arrival to disconnecting, including what can go wrong.
keywords: [first charging session, CCS2, RFID, Plug and Charge, charging truck]
---

# Your first charging session

Whether you are a fleet manager setting everything up or a driver standing at the charger for the first time: here is what happens.

## Before you arrive

### As a fleet manager

1. **Register your organisation** — via [stroomlijnen.nl](https://stroomlijnen.nl/en/) or your account manager. You get access to the [Customer Portal](/en/docs/klantportaal/overview) (Klantportaal).
2. **Arrange vehicle enrolment** for automatic recognition: an account-linked card is used on the charger screen to capture the EVCCID (the MAC address of the vehicle communication controller). Have the account owner approve it separately afterwards. Entering a VIN is not activation. See [Setup](/en/docs/plug-and-charge/setup-guide).
3. **Choose how authentication takes place:**
   - **Automatic vehicle recognition** — for supported vehicles with valid, approved registration, recognition on connection can replace the card (see [Plug & Charge](/en/docs/plug-and-charge/what-is-pnc))
   - **RFID card** — see [RFID cards](/en/docs/getting-started/rfid-cards)
   - **QR code in the app** — for occasional use
4. **Inform your drivers** about the location, access and the charging tariff.

### As a driver

- Make sure you know **how you may start**: automatically on plugging in, or with a card or QR code
- Check the **battery level** and plan the charging time
- Know where the **charging bay** is and whether there is a barrier or gate

## At the charger

These steps are for a normal charging session. **Enrolling a new vehicle?** Open the [enrolment procedure](/en/docs/plug-and-charge/setup-guide) first and connect only when it asks you to.

### Step 1 — Park and connect

1. Drive to a free charging bay.
2. Switch off the vehicle (some trucks require this, others do not — see the manufacturer's instructions).
3. Open the charging flap and connect the **CCS Combo 2** cable. The plug only fits one way; do not force it.

### Step 2 — Authenticate

**Automatic recognition:** wait for the display message. The charger checks the EVCCID and permission; a known registration alone does not guarantee a start. If approval is awaited, denied or expired, the account owner needs to check it.

**RFID card:** hold the card against the reader and wait for confirmation on the display.

**QR code (app):** scan the QR code on the display and start the session in the app.

### Step 3 — Follow the charging

The display shows the current power (kW) and the energy delivered (kWh). You will see the same session in the Customer Portal.

How fast it goes depends on four things:

1. the **power of the charger** (at our sites 120 kW per unit, shared if two vehicles are charging)
2. what the **vehicle** can handle
3. the **battery temperature** and the **charge level** (above ~80% the speed drops sharply)
4. the **power available at that moment** at the location — the EMS reduces charging if the building needs the power itself

The last one is not a fault. See [Why is my vehicle charging slower than expected?](/en/docs/energie/ems#honestly-slow).

### Step 4 — Disconnect

1. **Stop the session** — tap the card again, or stop in the app, or use the stop button on the charger.
2. **Wait** until the charger confirms that the connector is unlocked.
3. Take the cable out, put it back in the holder, close the charging flap.

:::caution
The connector is locked while the session is running. Never pull on the cable during charging — stop first.
:::

:::note Session stops, vehicle stays put
If a session ends while the cable is still connected (battery full, or stopped remotely), a new session does **not** start automatically. You must unplug the cable and plug it in again, or start explicitly with card or QR code. This prevents a car from charging again for hours without anyone knowing.
:::

## What if something goes wrong?

| Problem | What to do |
|---|---|
| Card is not recognised | Check in the Customer Portal whether the card is active. Hold the card longer or closer to the reader. |
| Automatic recognition does not start | Was the EVCCID recorded and is account-owner permission valid? See [Troubleshooting](/en/docs/plug-and-charge/troubleshooting). |
| Charger shows an error message | Note the message and the charger ID (on the device) and report it. See [Reporting faults](/en/docs/locations/site-guide#reporting-faults). |
| Charging is slow | Usually normal: cold battery, high charge level, or little headroom on the connection at that moment. |
| Cable will not come loose | The session has not stopped completely. Stop again and wait for the unlock. |
| Session keeps stopping | Session ended while the plug is still inserted → unplug the cable and plug it in again. |

## Next steps

- [RFID cards](/en/docs/getting-started/rfid-cards)
- [Setting up Plug & Charge](/en/docs/plug-and-charge/setup-guide)
- [Understanding your invoices](/en/docs/klantportaal/invoicing)
