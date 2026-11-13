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
| **1.6J** | Nog steeds de meestgebruikte versie | Bestaande installaties, AC-laders, veel merken |
| **2.0.1** | Huidige standaard | Nieuwe installaties; ISO 15118-integratie, beter apparaatmodel, sterkere beveiliging |
| **2.1** | In ontwikkeling | Onder meer MCS en uitgebreidere V2G-ondersteuning |

Het verschil dat er voor u toe doet:

- **1.6J** kan prima autoriseren, meten en een vaste limiet ontvangen. Voor veel toepassingen is dat genoeg.
- **2.0.1** voegt onder meer een gestandaardiseerd apparaatmodel toe (welke connectoren, welke mogelijkheden), betere ondersteuning voor Plug & Charge-certificaten en meer grip op slim laden.

:::note Onze situatie
Onze DC-laders (HGL ENC-DCL120B) draaien **OCPP 2.0.1**. Onze AC-laders draaien **1.6J**. Beide zijn volwaardig; de versie zegt niets over de kwaliteit van de installatie.
:::

## Laadprofielen: hoe "slim laden" technisch werkt

OCPP kent een paar soorten laadprofielen:

- **ChargingStationMaxProfile** — het plafond voor het hele station
- **TxDefaultProfile** — standaardlimiet voor elke nieuwe sessie
- **TxProfile** — limiet voor één specifieke lopende sessie

Een EMS vertaalt "er is nu 50 kW ruimte" naar een profiel en stuurt dat naar de lader. De lader voert het uit. Wie dat profiel zet, is precies één partij — anders vechten twee systemen om dezelfde lader.

## Beveiliging

Wat u van een serieuze partij mag verwachten:

- **TLS** op de verbinding tussen lader en backend (wss:// in plaats van ws://)
- **Actualiteit** — OCPP 1.6J staat geen clientcertificaten toe; 2.0.1 wel. Bij 1.6J is de beveiliging dus afhankelijk van het netwerk eromheen. Dat is precies waarom wij een bastion plaatsen: de laders staan niet rechtstreeks aan het internet.
- **Ondertekende meterwaarden** — alleen in 2.0.1. Nuttig, maar geen vervanging voor een geijkte meter bij formele facturering.

## Voor hardwarepartners

Werkt u met ons samen als fabrikant of installateur, dan vragen we:

- OCPP **2.0.1** voor nieuwe DC-laders, 1.6J is bespreekbaar voor bestaande voorraad
- TLS 1.2 of hoger
- Werkende `GetConfiguration`/`SetChargingProfile` — in de praktijk de twee calls waar integraties op stuklopen
- Een testomgeving of testunit voordat we een locatie in bedrijf nemen

Neem contact op via de kanalen op [stroomlijnen.nl](https://stroomlijnen.nl).

## Verder lezen

- [ISO 15118 verdieping](/docs/technical/iso-15118)
- [Netwerkvereisten](/docs/technical/network-requirements)
- [Roaming en OCPI](/docs/pandeneigenaren/cpo-roaming-uitgelegd)
