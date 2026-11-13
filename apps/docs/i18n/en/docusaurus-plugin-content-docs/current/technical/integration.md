---
sidebar_position: 4
title: Integrations and data export
description: How to get charging data out of the Customer Portal, what can be done with CSV and which integrations (OCPI, API) are possible on request.
keywords: [API, link, export, CSV, OCPI, integration, accounting, ERP]
---

# Integrations and data export

Your charging data is yours. There are three levels at which you can use it, from simple to technical.

## 1. Exporting from the Customer Portal

The simplest answer, and sufficient for most organisations:

- **Sessions** — filter by period, vehicle or site and download as **CSV**
- **Invoices** — download as PDF, with the session details included
- **Tariffs** — view per site and per tariff

That covers accounting, cost centres and most reporting questions. See [Sessions](/en/docs/klantportaal/sessions) and [Invoicing](/en/docs/klantportaal/invoicing).

## 2. Integrations on request

For structural integration with an ERP, fleet management system or accounting package there are options, but they are **custom work, not self-service**:

| Integration | For | Status |
|---|---|---|
| **OCPI** (CPO ↔ eMSP) | Roaming: that another eMSP can charge with us, or we with them | Technically present (OCPI 2.2.1); deliberately off on our chargers, can be enabled bilaterally on request |
| **OCPI publication** | Making your charging points visible in public maps and databases | In preparation |
| **Custom API** | Your system reads sessions or writes vehicles | On request, per customer |

:::warning No public API with public documentation
At this moment there is **no** public REST API with documentation, keys and rate limits that you can enable yourself. If you have seen one mentioned elsewhere: that is no longer correct. Request an integration via your account manager; we will then discuss what is needed and whether it fits.
:::

## 3. What OCPI is and is not

OCPI is the protocol for **roaming** between parties, not for "give me my data". It is no replacement for an export or a reporting integration. See [Roaming explained](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd).

## What you can expect from an export

A session export contains, per session, at least:

- date and time of start and end
- site and charging point (EVSE-ID)
- vehicle (registration number and/or VIN, where known)
- energy delivered in kWh
- tariff used and costs
- authentication method (automatic recognition, card, QR)

What is **not** in it: data the vehicle does not share. The battery status (SoC) is not reported by all vehicles, by a long way; if it is missing, that is not an error in the export.

## Further reading

- [Sessions](/en/docs/klantportaal/sessions)
- [Invoicing](/en/docs/klantportaal/invoicing)
- [Roaming explained](/en/docs/pandeneigenaren/cpo-roaming-uitgelegd)
