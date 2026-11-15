---
sidebar_position: 3
title: Netwerkvereisten voor een laadlocatie
description: Het lokale laadnetwerk, de uplink van het bastion en het onderzoeken van verbindingsverlies.
keywords: [netwerkvereisten, firewall, VLAN, DHCP, DNS, NTP, laadpaal offline, connectiviteit]
---

# Netwerkvereisten voor een laadlocatie

**Stroomlijnen heeft geen publiek OCPP-eindpunt.** Voorzie de regelaar op locatie (het bastion) van een uplink. De laders communiceren op het geïsoleerde locatienetwerk. Het bastion opent de private verbinding naar het platform.

## Connectiviteit

| Verbinding | Wat de netwerkbeheerder moet regelen |
|---|---|
| AC-lader van een andere fabrikant naar bastion | Lokale bereikbaarheid op het laadnetwerk. De OCPP-verbinding eindigt bij het bastion. |
| Stroomlijnen DC-lader naar bastion | Lokale bereikbaarheid voor de laadapplicatie van Stroomlijnen. Deze gebruikt de directe API. |
| Bastion naar platform | Een betrouwbare uplink voor de uitgaande privétunnel. Via deze tunnel wisselt het bastion API-verkeer uit met het platform. |

## Firewall en netwerkisolatie

Scheid het laadnetwerk van het kantoor- en gastnetwerk. Blokkeer rechtstreekse internettoegang voor de laders. Een publiek IP-adres of inkomende poortdoorsturing naar een lader of het bastion is niet nodig. Gebruik voor de uplink van het bastion de uitgaande instellingen die bij oplevering zijn afgesproken.

## Adressering, DNS en tijd

Gebruik het adresplan, de DNS-resolver en de tijdservice die voor de locatie zijn afgesproken. De juiste tijd is belangrijk voor certificaatcontrole en om meterstanden aan de juiste sessie te koppelen. Iedere lader afzonderlijk toegang geven tot publieke DNS- of tijdservers is overbodig.

## Als een lader offline lijkt

1. Stel vast of het één lader of de hele locatie betreft. Noteer de locatie, de lader-ID en het tijdstip van de onderbreking.
2. Controleer bij één lader de voeding, de lokale netwerkverbinding, het toegewezen adres en de verbinding met het bastion.
3. Is voor alle laders het contact met het platform weggevallen, controleer dan de uplink van het bastion en de status van de private verbinding. Vergelijk recente wijzigingen aan VLAN, firewall, DNS of tijdservice met de instellingen bij oplevering.
4. Meld uw bevindingen aan Stroomlijnen. Als een update op het platform uitblijft, kan een laadsessie ter plaatse nog steeds actief zijn. Houd het laadnetwerk geïsoleerd tijdens het onderzoek.

## Verder lezen

- [OCPP-overzicht](/docs/technical/ocpp-overview)
- [Locatiegids](/docs/locations/site-guide)
- [Storingen melden](/docs/locations/site-guide#storingen-melden)
- [Beveiligingsarchitectuur](/docs/security/architecture)
