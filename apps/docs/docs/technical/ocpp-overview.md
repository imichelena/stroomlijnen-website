---
sidebar_position: 1
title: OCPP — het protocol tussen lader en backend
description: Wat OCPP is, welke versies er zijn, wat het wel en niet kan, en hoe Stroomlijnen het gebruikt.
keywords: [OCPP, OCPP 1.6, OCPP 2.0.1, CSMS, laadpaal protocol, slim laden, Open Charge Alliance]
---

# OCPP — het protocol tussen lader en backend

**OCPP (Open Charge Point Protocol)** is de open standaard waarmee een laadpunt communiceert met het beheersysteem — het **CSMS** (Charging Station Management System). Het is de reden dat u van beheerder kunt wisselen zonder de laders te vervangen.

OCPP wordt beheerd door de **Open Charge Alliance (OCA)** en is vrij te gebruiken.

## Wat OCPP regelt

| Functie | Wat het betekent |
|---|---|
| **Autorisatie** | De lader vraagt of een pas, voertuig of app-sessie mag laden |
| **Transacties** | Starten, bijhouden en afsluiten van een laadsessie |
| **Meting** | Meterwaarden (kWh, vermogen) doorgeven tijdens de sessie |
| **Aansturing** | Limieten zetten, sessies starten of stoppen, herstarten |
| **Diagnose** | Status, foutcodes, logbestanden opvragen |
| **Slim laden** | Laadprofielen die bepalen hoeveel vermogen er wanneer mag vloeien |
| **Firmware** | Updates uitrollen en volgen |

## Wat OCPP *niet* doet

Dit is waar het meest wordt overdreven:

- **OCPP gaat niet over roaming.** Dat is OCPI. Zie [Roaming uitgelegd](/docs/pandeneigenaren/cpo-roaming-uitgelegd).
- **OCPP levert geen energiemanagement.** Het kan een limiet *ontvangen*, maar niet beslissen hoeveel ruimte er is. Die beslissing hoort bij een EMS. Zie [Wat doet een EMS?](/docs/energie/ems).
- **OCPP gaat niet over betalen aan de chauffeur.** Het gaat over autoriseren, niet over afrekenen.
- **OCPP garandeert geen interoperabiliteit in de praktijk.** Twee partijen kunnen beide "OCPP-compliant" zijn en toch verschillen. Daarom zijn er conformiteitstests en in de praktijk altijd integratiewerk.

## Versies

| Versie | Status | Waar u het tegenkomt |
|---|---|---|
| **1.6J** | Uitgebracht in 2015 | Bestaande installaties, AC-laders, veel merken |
| **2.0.1** | Uitgebracht in 2020 | Nieuwe installaties; ISO 15118-integratie, beter apparaatmodel, sterkere beveiliging |
| **2.1** | Uitgebracht in 2025 | Onder meer MCS en uitgebreidere V2G-ondersteuning |

Het verschil dat er voor u toe doet:

- **1.6J** kan prima autoriseren, meten en een vaste limiet ontvangen.
- **2.0.1** voegt onder meer een gestandaardiseerd apparaatmodel toe (welke connectoren, welke mogelijkheden), betere ondersteuning voor Plug & Charge-certificaten en meer grip op slim laden.

## Hoe Stroomlijnen laders aansluit

- **DC-laders van Stroomlijnen** communiceren via onze directe API met het lokale bastion.
- **Nieuwe AC-laders in de testfase** ondersteunen OCPP 2.0.1 en ISO 15118 Plug & Charge. Stroomlijnen test deze modellen voordat ze in het aanbod komen.
- **Bestaande AC-laders van de klant** vormen de enige uitzondering voor OCPP 1.6J. Wil een klant al geïnstalleerde AC-laders behouden, dan kan het bastion hun OCPP-verbinding lokaal afhandelen en de berichten vertalen voor het platform. Stroomlijnen verkoopt geen laders met OCPP 1.6.

Stroomlijnen heeft geen publiek OCPP-eindpunt.

## Laadprofielen: hoe "slim laden" technisch werkt

OCPP kent een paar soorten laadprofielen:

- **ChargingStationMaxProfile** — het plafond voor het hele station
- **TxDefaultProfile** — standaardlimiet voor elke nieuwe sessie
- **TxProfile** — limiet voor één specifieke lopende sessie

Een EMS vertaalt "er is nu 50 kW ruimte" naar een profiel en stuurt dat naar de lader. De lader voert het uit. Wie dat profiel zet, is precies één partij — anders vechten twee systemen om dezelfde lader.

## Beveiliging van het lokale laadnetwerk

Stem voor de integratie van een AC-lader de OCPP-versie, het beveiligingsprofiel en de ondersteunde laadprofielen af met de installateur. Ondersteuning voor TLS en clientcertificaten hangt af van apparaat en firmware. Het bastion houdt de OCPP-verbinding binnen het laadnetwerk. Een private uplink beschermt het verkeer tussen locatie en platform.

Toets bij de ingebruikname van een nieuw ladermodel de autorisatie, sessieregistratie en laadlimieten via de afgesproken lokale interface. Zie de [OCPP-specificaties](https://openchargealliance.org/protocols/ocpp-protocols/) voor de protocolversies.

## Verder lezen

- [ISO 15118 verdieping](/docs/technical/iso-15118)
- [Netwerkvereisten](/docs/technical/network-requirements)
- [Roaming en OCPI](/docs/pandeneigenaren/cpo-roaming-uitgelegd)
