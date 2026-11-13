---
sidebar_position: 1
title: What is Plug & Charge?
description: Plugging in and charging without a card or app — what Plug & Charge is, which two variants exist, and what Stroomlijnen delivers today.
keywords: [Plug and Charge, automatic recognition, plugging in, charging without a card, EVCCID]
---

# What is Plug & Charge?

Automatic recognition can make charging without a card or app possible on subsequent sessions. Both recognition and authorisation must succeed. Connecting a cable alone does not guarantee a start.

## Two different technologies

| | Automatic vehicle recognition at Stroomlijnen | ISO 15118 contract certificates |
|---|---|---|
| Identity | EVCCID: the MAC address of the vehicle communication controller | A contract certificate in the vehicle |
| Enrolment | With an account-linked card on the charger screen; the charger reads the EVCCID | Certificate provisioning through the supported contract and vehicle ecosystem |
| Permission | Separate account-owner approval and valid charging permissions | Certificate verification and contract authorisation |
| Other operators | Registration does not automatically grant access at other operators | Only with compatible systems and suitable trust and contract arrangements |

## What Stroomlijnen uses

Current recognition at supported DC chargers uses **EVCCID/MAC, not the VIN** and not an ISO 15118 contract certificate. Registration numbers and vehicle details help with administration; they do not replace capturing the EVCCID.

The driver enrols the vehicle on the charger screen using a card linked to the account. The account owner approves the vehicle separately. See [Setup](/en/docs/plug-and-charge/setup-guide) for the steps. Portal registration alone is not activation.

## What this does and does not prove

A MAC address is an identifier, **not cryptographic proof of a contract or vehicle identity**. Do not confuse recognition with certificate authentication or a guarantee against impersonation. The account link and permissions determine whether charging is allowed. Someone using an approved vehicle may thereby have access to charging on that account.

On sale, rental or unwanted use, have permission checked or revoked and check linked cards separately. A rental registration can have an end date.

## Conditions and limitations

- The charger must support this recognition and enrolment function.
- The vehicle must supply a usable EVCCID; a CCS connection alone does not prove this.
- Registration must be linked to the correct account and approved; denied or expired permission is not enough.
- The vehicle, charger and site must permit charging. A registered vehicle does not start in all circumstances.

Consult [Compatibility](/en/docs/plug-and-charge/compatible-vehicles) and follow the display instructions. An offered card or QR option may be an alternative, but does not bypass charging faults or missing permissions.

## Further reading

- [Setup](/en/docs/plug-and-charge/setup-guide)
- [Troubleshooting](/en/docs/plug-and-charge/troubleshooting)
- [ISO 15118 in depth](/en/docs/technical/iso-15118)
