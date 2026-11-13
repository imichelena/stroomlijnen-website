---
sidebar_position: 1
title: OCPP — the protocol between charger and back-end
description: What OCPP is, which versions exist, what it can and cannot do, and how Stroomlijnen uses it.
keywords: [OCPP, OCPP 1.6, OCPP 2.0.1, CSMS, charge point protocol, smart charging, Open Charge Alliance]
---

# OCPP — the protocol between charger and back-end

**OCPP (Open Charge Point Protocol)** is the open standard with which a charging point communicates with the management system — the **CSMS** (Charging Station Management System). It is the reason you can change operator without replacing the chargers.

OCPP is maintained by the **Open Charge Alliance (OCA)** and is free to use.

## What OCPP handles

| Function | What it means |
|---|---|
| **Authorisation** | The charger asks whether a card, vehicle or app session may charge |
| **Transactions** | Starting, tracking and closing a charging session |
| **Metering** | Passing on meter values (kWh, power) during the session |
| **Control** | Setting limits, starting or stopping sessions, restarting |
| **Diagnostics** | Requesting status, error codes, log files |
| **Smart charging** | Charging profiles that determine how much power may flow when |
| **Firmware** | Rolling out and tracking updates |

## What OCPP does *not* do

This is where it is most often overstated:

- **OCPP is not about roaming.** That is OCPI. See [Roaming explained](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd).
- **OCPP does not provide energy management.** It can *receive* a limit, but it cannot decide how much headroom there is. That decision belongs to an EMS. See [What does an EMS do?](/en/docs/energie/ems).
- **OCPP is not about paying the driver.** It is about authorising, not about settling payment.
- **OCPP does not guarantee interoperability in practice.** Two parties can both be "OCPP-compliant" and still differ. That is why there are conformity tests and, in practice, always integration work.

## Versions

| Version | Status | Where you encounter it |
|---|---|---|
| **1.6J** | Still the most widely used version | Existing installations, AC chargers, many brands |
| **2.0.1** | Current standard | New installations; ISO 15118 integration, better device model, stronger security |
| **2.1** | In development | Including MCS and more extensive V2G support |

The difference that matters to you:

- **1.6J** can authorise, meter and receive a fixed limit perfectly well. For many applications that is enough.
- **2.0.1** adds, among other things, a standardised device model (which connectors, which capabilities), better support for Plug & Charge certificates and more control over smart charging.

:::note Our situation
Our DC chargers (HGL ENC-DCL120B) run **OCPP 2.0.1**. Our AC chargers run **1.6J**. Both are fully fledged; the version says nothing about the quality of the installation.
:::

## Charging profiles: how "smart charging" works technically

OCPP has a few types of charging profile:

- **ChargingStationMaxProfile** — the ceiling for the whole station
- **TxDefaultProfile** — default limit for every new session
- **TxProfile** — limit for one specific running session

An EMS translates "there is 50 kW of headroom now" into a profile and sends it to the charger. The charger executes it. Whoever sets that profile must be exactly one party — otherwise two systems fight over the same charger.

## Security

What you may expect from a serious party:

- **TLS** on the connection between charger and back-end (wss:// instead of ws://)
- **Certificate currency** — OCPP 1.6J does not permit client certificates; 2.0.1 does. With 1.6J, security therefore depends on the network around it. That is precisely why we place a bastion: the chargers are not connected directly to the internet.
- **Signed meter values** — only in 2.0.1. Useful, but no substitute for a calibrated meter for formal invoicing.

## For hardware partners

If you work with us as a manufacturer or installer, we ask for:

- OCPP **2.0.1** for new DC chargers; 1.6J is negotiable for existing stock
- TLS 1.2 or higher
- Working `GetConfiguration`/`SetChargingProfile` — in practice the two calls that integrations come unstuck on
- A test environment or test unit before we put a site into service

Get in touch via the channels on [stroomlijnen.nl](https://stroomlijnen.nl/en/).

## Further reading

- [ISO 15118 in depth](/en/docs/technical/iso-15118)
- [Network requirements](/en/docs/technical/network-requirements)
- [Roaming and OCPI](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd)
