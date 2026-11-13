---
sidebar_position: 3
title: Network requirements for a charging site
description: What a charging point needs in terms of internet, firewall, DNS and time — and how to recognise and resolve an offline charger.
keywords: [network requirements, firewall, VLAN, DHCP, DNS, NTP, charge point offline, connectivity]
---

# Network requirements for a charging site

A charging point needs an internet connection to communicate with our management system. It uses little, but it must be **reliable**: a charger that is offline cannot authorise a card and cannot invoice a session.

## Connectivity

- **Bandwidth:** 1 Mbps per charger is ample; 10 Mbps shared for around ten chargers is comfortable
- **Latency:** less than 200 ms to our back-end is fine
- **Protocol:** WebSocket over TLS (`wss://`)
- **Outbound only** — the charger initiates the connection itself; **no inbound ports** need to be open

:::note About 4G
Some chargers have their own 4G modem, others do not. Do not count on it unless it has been explicitly agreed and the SIM is active. A 4G connection is usable for OCPP traffic but unsuitable for firmware updates.
:::

## Firewall

If there is a firewall between the charging network and the internet, the following must be permitted **outbound**:

| Destination | Port | Protocol | For |
|---|---|---|---|
| `ocpp.stroomlijnen.nl` | 443 | TCP (WSS) | OCPP connection to the back-end |
| NTP server (ours or a public pool) | 123 | UDP | Time synchronisation |
| Firmware/update location | 443 | TCP (HTTPS) | Only needed during an update |

You will receive the exact hostnames and a test endpoint at commissioning. If anything about the network configuration changes, report it before the change — a firewall adjustment is the most common cause of a charger that has "spontaneously" gone offline.

## Network isolation

Preferably place chargers on a **separate VLAN**, separated from the office network:

- charging traffic does not mix with business traffic
- firewall rules stay manageable
- the attack surface is smaller
- you can apply QoS if the uplink is shared

This is not a luxury: charging infrastructure is critical infrastructure, and a compromise on a laptop should never be able to reach the chargers directly.

## IP addressing and DNS

- **DHCP** is preferred; static is possible if the network administrator insists
- **IPv4** is required for the connection to the back-end
- **IPv6** is used internally on the charging cable (ISO 15118), not for the back-end link
- **DNS** must work: provide a resolver via DHCP, or configure one statically (a public resolver as fallback is sensible)

## Time

Accurate time is not a detail:

- certificate validation depends on validity dates
- meter values and invoicing depend on timestamps
- log files are worthless without correct time

Make sure NTP is in place. If a charger's clock deviates far, you will see that reflected in sessions booked on the wrong day or authorisations that fail inexplicably.

## What actually goes over the line

| Activity | Volume | Frequency |
|---|---|---|
| Heartbeat | ~1 KB | Every few minutes |
| Authorisation | ~2 KB | Per session |
| Meter values | ~1 KB | Every 15 seconds to a few minutes |
| Start/stop | ~3 KB | Per event |
| Firmware update | tens to hundreds of MB | Rare |

A charger that is waiting sends virtually nothing. The connection is small but **continuous** — a firewall that cuts long-lived WebSockets after a while causes exactly the kind of "it drops out every few hours" that is hard to find.

## Charger is offline — what now?

1. Check the **link** on the charger and the switch port (LEDs).
2. Check whether DHCP is handing out an address (DHCP log).
3. Test **DNS** from the same subnet — can the charger resolve our hostname?
4. Test whether **443 outbound** is open to `ocpp.stroomlijnen.nl`.
5. Check whether anything about the firewall or the VLAN was changed recently.
6. Only then restart the charger.

Report a charger that has been offline for more than a few minutes; we see it on our side too and can often determine remotely whether it is the connection or the charger.

## Further reading

- [OCPP overview](/en/docs/technical/ocpp-overview)
- [Site guide](/en/docs/locations/site-guide)
- [Reporting faults](/en/docs/locations/site-guide#reporting-faults)
