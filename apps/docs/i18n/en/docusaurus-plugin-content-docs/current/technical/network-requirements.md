---
sidebar_position: 3
title: Network requirements for a charging site
description: Site networking for local chargers, the bastion uplink and troubleshooting a loss of connectivity.
keywords: [network requirements, firewall, VLAN, DHCP, DNS, NTP, charge point offline, connectivity]
---

# Network requirements for a charging site

**Stroomlijnen has no public OCPP endpoint.** Provide connectivity for the on-site controller (the bastion). Chargers communicate on the isolated site network. The bastion initiates the private connection to the platform.

## Connectivity

| Connection | What site IT needs to provide |
|---|---|
| OEM AC charger to bastion | Local connectivity on the charging network. OCPP terminates at the bastion. |
| Stroomlijnen DC charger to bastion | Local connectivity for the Stroomlijnen application. It uses the direct API. |
| Bastion to platform | A reliable uplink for the outbound private tunnel. The bastion exchanges API traffic with the platform through that tunnel. |

## Firewall and network isolation

Separate the charging segment from office and guest networks. Keep direct charger internet access blocked. No public IP address or inbound port forwarding to a charger or bastion is required. Use the site-specific outbound settings agreed at commissioning for the bastion uplink.

## Addressing, DNS and time

Use the address plan, resolver and time service agreed for the site. Correct time is important for certificate validation and for matching meter readings to the right session. A public DNS or time service on each charger is unnecessary.

## If a charger appears offline

1. Establish whether one charger or the whole site is affected. Record the site, charger ID and time of the interruption.
2. For one charger, check power, the local network link, its assigned address and its connection to the bastion.
3. If all chargers have lost contact with the platform, check the bastion uplink and the status of its private connection. Review recent VLAN, firewall, DNS or time-service changes against the commissioned settings.
4. Report the observations to Stroomlijnen. A missing platform update alone does not establish that charging has stopped. Keep network isolation in place while the fault is investigated.

## Further reading

- [OCPP overview](/en/docs/technical/ocpp-overview)
- [Site guide](/en/docs/locations/site-guide)
- [Reporting faults](/en/docs/locations/site-guide#reporting-faults)
- [Security architecture](/en/docs/security/architecture)
