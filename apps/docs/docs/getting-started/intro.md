---
sidebar_position: 1
title: Wat is Stroomlijnen?
description: Introductie tot Stroomlijnen — een Nederlandse CPO en eMSP die laadinfrastructuur plaatst bij theaters, hotels en bedrijven, en het vermogen op die locaties slim verdeelt.
keywords: [Stroomlijnen, CPO, eMSP, elektrisch laden, vrachtwagens, netcongestie, energieopslag]
---

# Wat is Stroomlijnen?

Stroomlijnen B.V. is een Nederlandse **Charge Point Operator (CPO)** en **e-Mobility Service Provider (eMSP)**. We plaatsen laadinfrastructuur op locaties die al een grote elektriciteitsaansluiting hebben — theaters, culturele instellingen, hotels en bedrijven — en zorgen dat die aansluiting ook gebruikt kan worden om voertuigen te laden zonder dat het gebouw in de problemen komt.

Onze eMSP-identiteit in het Europese laadnetwerk is **NL\*STM**.

## Laden als onderdeel van uw gebouw

Een laadpunt verbindt een voertuig met het energiesysteem van uw locatie. Daarom horen vermogensbeheer, toegangscontrole en beveiliging bij dezelfde basis: laden moet passen binnen de mogelijkheden van het gebouw, met duidelijke grenzen aan wie apparatuur mag bedienen.

Onze aanpak verdeelt die verantwoordelijkheden over de cloud, een gateway op locatie (het bastion) en de laadpaalsoftware. Het EMS beheert het beschikbare vermogen; netwerk- en toegangsbeveiliging beschermen de communicatie en bediening. De mogelijkheden verschillen per apparaat en locatieconfiguratie.

Begin hieronder met het geheel. De [architectuur en beveiligingsgrenzen](/docs/security/architecture) worden apart uitgelegd, met diagrammen.

## Waar we vandaan komen

Stroomlijnen is in 2025 begonnen als pilot in de **culturele sector**. De aanleiding was praktisch: tournende producties rijden met een vrachtwagen vol licht, geluid en decor van theater naar theater. Vanaf 2030 mogen dieseltrucks veel binnensteden niet meer in. Elektrische trucks bestaan al — maar zonder laadmogelijkheid bij de zaal is touren elektrisch niet te doen.

De conclusie was simpel: **iedere zaal een laadpaal**. Laden in de tijd dat de productie er toch staat, tegen een vooraf duidelijk tarief.

Diezelfde logica werkt buiten de cultuur: een hotel dat gasten wil laten laden, of een bedrijf dat zijn wagenpark elektrisch maakt, heeft meestal niet te weinig ambitie maar **te weinig bruikbaar vermogen** op de meter.

## Drie lagen, één systeem

Wat we leveren is geen losse laadpaal maar een systeem van drie lagen:

| Laag | Wat het is | Wat het voor u doet |
|---|---|---|
| **Opslag** | Een batterij (ESS) die vermogen buffert wanneer het rustig is en afgeeft wanneer het druk is | Maakt laden mogelijk zonder dat u uw aansluiting hoeft te verzwaren |
| **Intelligentie** | Een energiebeheersysteem (EMS) dat het hele pand in realtime aanstuurt | U blijft automatisch onder uw aansluiting, zonder onverwachte pieken |
| **Laden** | De laadpunten zelf, met automatische voertuigherkenning | Voertuigen laden met het vermogen dat er op dat moment écht is |

Die middelste laag is waar het echte werk zit. Zie [Netcongestie en vermogen](/docs/energie/netcongestie) en [Wat doet een EMS?](/docs/energie/ems).

## Onze laders

We werken met **Hongjiali (HGL)** laadstations, door ons zelf gevalideerd bij de fabriek:

| Type | Vermogen | Connector | Protocol |
|---|---|---|---|
| DC-snellader (ENC-DCL120B) | **120 kW**, modulair uitbreidbaar tot 180 kW; te configureren als 1×120 kW of 2×60 kW | 2× CCS2 | OCPP 2.0.1 |
| AC-lader (ENC-DCX030A) | 30 kW | Type 2 | OCPP 1.6J |

De DC-laders zijn modulair opgebouwd: als er een vermogensmodule uitvalt, blijven de andere werken en kan de module ter plaatse worden vervangen.

:::note Geen 400 kW
U zult elders in de sector getallen van 350–400 kW tegenkomen. Onze standaard DC-lader is 120 kW, omdat dat voor een gemiddelde tourneedag ruim voldoende is: 400 kWh laden in een verblijf van 10 uur vraagt gemiddeld 40 kW, en 120 kW geeft marge voor een snelle start bij aankomst. Bij grotere locaties schalen we op met extra units of modules.
:::

## Wat u van ons kunt verwachten

- **Eén partij voor het hele traject** — plaatsing, beheer, storingen, facturatie en (voor de cultuursector) ERE-registratie
- **Geen verrassingen op de meter** — het EMS bewaakt continu wat er nog mag worden afgenomen
- **Blijven laden als de cloud wegvalt** — de aansturing zit op locatie, niet in een datacenter
- **Inzicht** — via het [Klantportaal](/docs/klantportaal/overview) ziet u wat er geladen is, door wie en tegen welk tarief

## Wat dit niet is

We beloven geen dingen die er nog niet zijn. Daarom staat er in deze kennisbank bij twijfel wat **vandaag** werkt en wat **in ontwikkeling** is. Concreet:

- **Roaming** (laden met een pas van een andere aanbieder bij ons, of andersom) is technisch aanwezig via OCPI, maar staat bij onze laders bewust **uit** in verband met de kosten. Op verzoek is een directe koppeling mogelijk. Zie [Roaming uitgelegd](/docs/pandeneigenaren/cpo-roaming-uitgelegd).
- **Plug & Charge** werkt bij ons op basis van automatische voertuigherkenning; de certificaatvariant volgens ISO 15118 is in ontwikkeling. Zie [Wat is Plug & Charge?](/docs/plug-and-charge/what-is-pnc).
- **Bidirectioneel laden** (terugleveren vanuit een voertuig) is toekomstmuziek, niet iets wat we nu kunnen leveren.

## Verder lezen

- [Uw eerste laadsessie](/docs/getting-started/first-session)
- [Netcongestie: waarom vermogen het echte probleem is](/docs/energie/netcongestie)
- [Plug & Charge](/docs/plug-and-charge/what-is-pnc)
- [Het Klantportaal](/docs/klantportaal/overview)
- [Veelgestelde vragen](/docs/faq)
