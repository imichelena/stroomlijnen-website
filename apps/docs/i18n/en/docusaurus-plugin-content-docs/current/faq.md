---
sidebar_position: 100
title: Frequently asked questions
description: Answers to the questions we get most often about charging with Stroomlijnen — technology, costs, roaming, Plug & Charge and power.
keywords: [FAQ, frequently asked questions, charging, tariffs, roaming, Plug and Charge, grid congestion]
---

# Frequently asked questions

## General

### What is Stroomlijnen?
A Dutch Charge Point Operator (CPO) and e-Mobility Service Provider (eMSP). We install charging infrastructure at sites with a large electricity connection — theatres, cultural institutions, hotels and businesses — and manage the power at those sites. See [What is Stroomlijnen?](/en/docs/getting-started/intro).

### Why theatres in particular?
Theatres have a large connection that is largely unused during the day, room for a lorry, and a building peak in the evening — exactly the profile that suits charging. In addition, the cultural sector has to switch to electric first because of the zero-emission zones.

### Do you only work with theatres?
No. The same approach works for hotels (charging as a room facility) and businesses (vehicle fleet on own premises, within the existing connection).

### Can passenger cars charge with you?
Passenger cars with CCS Combo 2 may be suitable for our DC chargers; check vehicle compatibility and site access. Our charging locations are, however, designed for commercial vehicles: more spacious bays, higher cable holders.

### How much power does a charger deliver?
Our DC charger is **120 kW**, configurable as 1×120 kW or 2×60 kW, modularly expandable to 180 kW. Our AC charger is 30 kW. See [Our chargers](/en/docs/getting-started/intro#our-chargers).

### Do you also deliver 350 or 400 kW?
Not as a standard product. For most touring days, 120 kW is more than enough (400 kWh in 10 hours = 40 kW on average). At larger sites we scale up with additional units or modules. Figures of 350–400 kW that you encounter elsewhere are usually the sum of several units or a different type of installation.

## Charging

### How do I start a session?
Follow the display. Automatic starting requires a usable EVCCID, approved registration and valid charging permissions. Use an offered and authorised RFID or QR option as an alternative. See [Your first charging session](/en/docs/getting-started/first-session).

### Why does my session not start automatically?
Check EVCCID enrolment, separate account-owner approval, permission validity and vehicle communication. Entering a VIN is not a solution for missing recognition. See [Troubleshooting](/en/docs/plug-and-charge/troubleshooting).

### My charging session stops and does not restart. Is that a fault?
No. If a session ends while the cable is still connected (battery full, or stopped remotely), a new one does not start automatically. Unplug the cable and plug it in again, or start explicitly.

### Why does my vehicle charge more slowly than expected?
A cold battery, a high charge level (above ~80%), a maximum in the vehicle itself, or little power available at the site at that moment. See [Honestly slow](/en/docs/energie/ems#honestly-slow).

### Can I charge with a card from another provider?
As a rule, no: roaming is deliberately switched off on our chargers because of the costs. See [Roaming](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd).

## Plug & Charge

### What is Plug & Charge?
Plugging in and charging without a card or app. See [What is Plug & Charge?](/en/docs/plug-and-charge/what-is-pnc).

### Does that work with ISO 15118 certificates?
Current recognition at supported DC chargers uses **EVCCID: the MAC address of the vehicle communication controller**, not the VIN and not an ISO 15118 contract certificate. Those technologies are not the same.

### Do I need to install anything in the vehicle?
You do not request a contract certificate for this enrolment procedure. Use an account-linked card on the charger screen and connect only when prompted; the charger captures the EVCCID. The vehicle must support that recognition. See [Setup](/en/docs/plug-and-charge/setup-guide).

### How long does it take before a vehicle works?
From **Begin** on the charger screen, enrolment has 5 minutes. Capture can take up to 3 minutes, within that overall deadline. Recording happens automatically after capture; the account owner must then approve separately. This is not a promise that charging will be possible within that time.

## Costs

### What does charging cost?
A fixed tariff per kWh per site, laid down in your agreement. No start-up costs per session, no time-based costs. You can find tariffs in your agreement or request them from your account manager — not in this knowledge base, because they differ per site and per year.

### How does invoicing work?
Monthly invoices with session details, as PDF in the portal. See [Invoicing](/en/docs/klantportaal/invoicing).

### Can I get a subsidy?
For charging infrastructure at businesses there is SPRILA (RVO). Note: for an investment above € 25,000, the application must be submitted **before** the order is placed. See [Subsidies](/en/docs/pandeneigenaren/subsidies).

## Power and energy

### What is grid congestion and does it affect me?
The electricity grid is full in many areas, which means reinforcement takes a long time or is not possible. That is why we work with smart control and, where necessary, a battery. See [Grid congestion](/en/docs/energie/netcongestie).

### What does an EMS do?
It continuously measures the building's consumption, calculates the headroom under your connection and distributes it across the charging points. See [What does an EMS do?](/en/docs/energie/ems).

### What is an energy budget?
An agreement about how much a vehicle, person or department may charge — per day, week or month. See [Energy budgets](/en/docs/energie/energiebudget).

### Do you have batteries?
Yes, as a buffer to allow more charging than the connection permits and to flatten building peaks. See [Battery storage](/en/docs/energie/ess).

### Can you also feed back to the grid (V2G)?
Not today. Bidirectional charging is future functionality; we do not claim it as something that is possible now.

## Portal and data

### Where do I log in?
At [portal.stroomlijnen.nl](https://portal.stroomlijnen.nl). There is no self-registration; you receive access during onboarding. See [Customer Portal](/en/docs/klantportaal/overview).

### Is there an app?
Drivers can start with a QR code. There is no Stroomlijnen app in the app stores; if you see one mentioned somewhere, that is no longer correct.

### Is there an API?
No public API with documentation and self-service keys. You can export CSV, and a link is possible on request. See [Integrations and data export](/en/docs/technical/integration).

### How long is my data retained?
Session data remains available for your records for as long as you are a customer, and invoices are retained in accordance with the statutory retention period. On departure, request an export.

## Faults

### How do I report a fault?
With the site, number on the charger, time, registration number and the text on the display — via your account manager or [stroomlijnen.nl/contact](https://stroomlijnen.nl/en/contact/). See [Reporting faults](/en/docs/locations/site-guide#reporting-faults).

### The charger is offline. Can you see that?
Yes, we can see whether a charger is online and which faults have occurred. A report with the time is therefore often enough to resolve it remotely.

## Anything else not found?

The pages above cover most of it. For specific questions: [stroomlijnen.nl/contact](https://stroomlijnen.nl/en/contact/) or your account manager.
