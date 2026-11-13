---
sidebar_position: 4
title: Choosing a CPO
description: What to look out for when choosing a Charge Point Operator — the questions that make the difference, and the answers you should distrust.
keywords: [choosing a CPO, OCPP, vendor lock-in, SLA, contract form, tender]
---

# Choosing a CPO

A **CPO (Charge Point Operator)** manages your charging infrastructure operationally: authorisation, metering, invoicing, monitoring and fault service. You often enter into a contract for several years, so the choice is not reversible without cost.

This page is deliberately not "why we are the best". It is a checklist with which you can assess any provider.

## The seven questions that make the difference

### 1. Is the charging infrastructure genuinely transferable?

Everyone says "OCPP, so no vendor lock-in". Ask further:

- **Which OCPP version** does the charger run, and is that firmware-updatable?
- **Will I get the configuration when I leave** — network settings, charging profiles, keys?
- **Who owns the hardware** and what happens in the event of a dispute?
- **Are there features that only work via the supplier** (for example their own app, their own ports, their own authentication)? That is lock-in, even with OCPP.

:::note OCPP 2.0.1 is not a requirement
A frequently made mistake in checklists: "do you require OCPP 2.0.1". For many applications **1.6J** is entirely sufficient, and many existing installations run on it. 2.0.1 is better in the areas of device model, Plug & Charge certificates and security, but it is not a precondition for a working installation. Rather ask: *does it work, and can I continue with it later?*
:::

### 2. Who determines the capacity?

This is the question almost nobody asks and which most often causes problems.

- **Is the capacity control in the cloud or on site?** In the cloud means: no internet, no control.
- **What happens if the connection drops?** Does the installation stay within your connection, or does everything shut down?
- **Does the system measure per phase?** If not, one phase can still blow.
- **Who is the only party that sets a limit?** Two systems both controlling is a fault in the making.

### 3. What is the SLA really?

Everyone promises 97% availability. Ask:

- **What is that 97% based on** — theory or measured figures?
- **What is the response time** in the event of a fault, and does that apply 24/7?
- **What happens if the SLA is not met** — is there compensation, or only an excuse?
- **How quickly is a defective module replaced?** With modular chargers that is hours instead of days, provided parts are in stock.

### 4. Roaming: what actually happens?

Roaming sounds like an advantage ("300,000 charging points!"). Ask:

- **Via which hub or which direct connections** does it run?
- **What does it cost** — roaming gives up a commission to the hub and the eMSP, and that sits in the tariff or in the owner's margin.
- **Is it on or off** on the charging points, and can it be set per location?

With us, roaming is deliberately **off** because the costs do not outweigh the use; a direct connection is possible on request. See [Roaming explained](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd).

### 5. Who does the electrical work?

A frequently made assumption is that the CPO installs everything. Ask explicitly:

- **What does the CPO do and what must I arrange myself** (installer, meter cupboard, permit)?
- **Who is liable** for damage caused by the installation?
- **Who maintains the cable and the connection** after handover?

### 6. What happens in the event of bankruptcy?

Unpleasant but relevant:

- Does the charging infrastructure keep working without the supplier?
- Who has the data, and can you export it?
- Is there an escrow or transfer arrangement?

### 7. Does the financing fit the business case?

- **Who invests** — you, the CPO, or a third party?
- **How is the investment earned back** — per kWh, a fixed amount, or a combination?
- **Is subsidy part of the model** and who applies for it?

## Questions you should distrust

Red flags in a conversation:

| Statement | Why it is a signal |
|---|---|
| "Our chargers deliver 400 kW" | Ask about the model and the type plate. Often it is the sum of several units. |
| "Plug & Charge works everywhere" | Ask which variant: vehicle identity or contract certificate. |
| "You don't have to do anything" | There is always something the location has to do: electrics, access, permission. |
| "Roaming is free" | Commissions are paid somewhere. |
| "100% availability" | Does not exist. Ask for measured figures. |
| "No vendor lock-in, because OCPP" | OCPP does not automatically prevent lock-in. See question 1. |

## A good tender in one page

1. Ask for an **analysis on your own quarter-hour data**, not a standard package
2. Ask for the **configuration and the assumptions** in writing
3. Ask for **two references** from comparable locations, and call them
4. Ask for the **draft agreement** before the quotation becomes final
5. Have the **subsidy conditions** confirmed separately (application before commission!)
6. Record **who does what** for installation, maintenance and faults

## Further reading

- [Roaming explained](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd)
- [Capacity management](/en/docs/pandeneigenaren/vermogensbeheer)
- [From decision to first charging session](/en/docs/pandeneigenaren/installatie)
- [Network requirements](/en/docs/technical/network-requirements)
