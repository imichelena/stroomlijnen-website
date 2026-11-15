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
| **1.6J** | Released in 2015 | Existing installations, AC chargers, many brands |
| **2.0.1** | Released in 2020 | New installations; ISO 15118 integration, better device model, stronger security |
| **2.1** | Released in 2025 | Including MCS and more extensive V2G support |

The difference that matters to you:

- **1.6J** can authorise, meter and receive a fixed limit perfectly well. For many applications that is enough.
- **2.0.1** adds, among other things, a standardised device model (which connectors, which capabilities), better support for Plug & Charge certificates and more control over smart charging.

:::note At a Stroomlijnen site
OEM AC chargers use OCPP locally. The bastion translates their messages into platform API requests. Our own DC charger application uses the direct API on site. Stroomlijnen has no public OCPP endpoint.
:::

## Charging profiles: how "smart charging" works technically

OCPP has a few types of charging profile:

- **ChargingStationMaxProfile** — the ceiling for the whole station
- **TxDefaultProfile** — default limit for every new session
- **TxProfile** — limit for one specific running session

An EMS translates "there is 50 kW of headroom now" into a profile and sends it to the charger. The charger executes it. Whoever sets that profile must be exactly one party — otherwise two systems fight over the same charger.

## Security and hardware integration

For an OEM AC integration, confirm the OCPP version, supported security profile and charging profiles with the installer. TLS and client-certificate support depend on the device and firmware. The bastion confines the OCPP connection to the charging network. A private uplink protects traffic between the site and the platform.

When commissioning a new charger model, verify authorisation, session reporting and charging limits on the agreed local interface. See the [OCPP specifications](https://openchargealliance.org/protocols/ocpp-protocols/) for the protocol versions.

## Further reading

- [ISO 15118 in depth](/en/docs/technical/iso-15118)
- [Network requirements](/en/docs/technical/network-requirements)
- [Roaming and OCPI](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd)
