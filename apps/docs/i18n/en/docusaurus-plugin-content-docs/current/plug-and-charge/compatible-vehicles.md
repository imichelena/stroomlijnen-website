---
sidebar_position: 3
title: Which vehicles can do this?
description: What compatibility depends on, how to check it for your vehicle, and why we do not publish a fixed list of brands.
keywords: [compatibility, CCS2, ISO 15118, Plug and Charge vehicles, EVCCID, brands]
---

# Which vehicles can use this?

**Being able to charge** and **being recognised automatically** are different questions. A matching connector is no guarantee of automatic recognition or a successful charging session.

## Charging with a cable

CCS Combo 2 is the relevant connection for our DC chargers. Also check electrical specifications, vehicle support and access at the site. Different conditions apply to Type 2 AC charging; the DC enrolment described here does not prove AC compatibility.

## Automatic recognition

Current recognition uses **EVCCID: the MAC address of the vehicle communication controller**, not the VIN. To use it:

- the charger must support the function;
- the vehicle must supply a usable EVCCID that can be recognised on subsequent use;
- that identifier must be linked to the correct account through the [enrolment procedure](/en/docs/plug-and-charge/setup-guide);
- the account owner must have given separate approval and that permission must still be valid.

A CCS connection, an entered VIN or a statement that the vehicle supports ISO 15118 does not prove this MAC-based recognition works. Certificate-based Plug & Charge is a different technology.

## Check each vehicle

Vehicle specification and software can affect behaviour. That is why this page has no universal brand list or guarantee for all modern EVs. Check the actual vehicle at a suitable charger: can its identity be captured during enrolment, is recording confirmed, and does recognition work on a later connection after approval?

For questions, give your account manager the make, model, year, registration number, site and screen message. A VIN can be useful vehicle metadata, but does not replace this test or EVCCID enrolment. No fixed turnaround time for such an investigation is promised.

## If automatic starting fails

Follow the charger instructions. Use an offered and authorised RFID or QR option if available. Those alternatives do not guarantee a start if there is a communication problem, charging fault or missing charging permission.

## Further reading

- [What is Plug & Charge?](/en/docs/plug-and-charge/what-is-pnc)
- [Setup](/en/docs/plug-and-charge/setup-guide)
- [Troubleshooting](/en/docs/plug-and-charge/troubleshooting)
