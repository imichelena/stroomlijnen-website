---
sidebar_position: 9
title: CPO, eMSP en roaming uitgelegd
description: De rollen in de laadsector, het verschil tussen OCPP en OCPI, hoe roaming werkt en wat Stroomlijnen wel en niet doet.
keywords: [CPO, eMSP, roaming, OCPI, OCPP, hub, Gireve, Hubject, IDRO, AFIR]
---

# CPO, eMSP en roaming uitgelegd

De laadsector heeft zijn eigen jargon. Deze pagina zet de rollen en protocollen op een rij, en vertelt daarna eerlijk wat Stroomlijnen doet — want daarover bestaat veel verwarring.

## De twee rollen

### CPO — Charge Point Operator

Beheert de **fysieke laadinfrastructuur**:

- installatie en onderhoud van laadpunten
- communicatie tussen laadpunt en backend (via **OCPP**)
- autorisatie van sessies
- meting van geleverde energie
- monitoring en storingsdienst

### eMSP — e-Mobility Service Provider

Levert diensten aan de **eindgebruiker**:

- uitgifte van laadpassen of apps
- toegang tot laadpunten van verschillende CPO's
- één factuur voor alle sessies
- klantenservice

Eén bedrijf kan beide rollen hebben. Stroomlijnen is zowel CPO als eMSP.

## Twee protocollen, twee richtingen

Dit is het onderscheid dat het meeste verwarring geeft:

| Protocol | Wat het verbindt | Richting |
|---|---|---|
| **OCPP** | Laadpunt ↔ backend van de CPO | Verticaal (naar beneden) |
| **OCPI** | Backend van CPO ↔ backend van eMSP | Horizontaal (zijwaarts) |

OCPP gaat over "hoe bestuur ik deze lader". OCPI gaat over "hoe verreken ik een sessie met een andere partij". Ze staan volledig los van elkaar: je kunt OCPP perfect hebben en helemaal geen roaming.

## Hoe roaming werkt

```
Chauffeur met pas van eMSP A
        ↓
Laadpunt van CPO B
        ↓  OCPI-koppeling
Backend CPO B  →  Backend eMSP A
        ↓
Factuur van eMSP A aan de chauffeur
```

De CPO factureert de eMSP, de eMSP factureert de chauffeur. Beide kanten rekenen iets bovenop: de hub of de directe koppeling kost geld, en de eMSP moet ook bestaan.

### Hubs

In plaats van tientallen bilaterale koppelingen kunnen partijen via een **hub** koppelen:

| Hub | Rol |
|---|---|
| **Gireve** | Europese roaming-hub |
| **Hubject** | Europese hub, sterk in Plug & Charge |
| **e-clearing.net** | Europese neutrale hub |

Een hub is een technische en commerciële tussenpartij, geen liefdadigheidsinstelling: elke sessie via een hub kost commissie.

## Wat "300.000 laadpunten" betekent

U ziet die belofte overal. Wat er feitelijk staat: *een pas van een grote eMSP werkt op veel netwerken in Europa*. Dat is iets anders dan "u kunt overal laden", want:

- de dekking hangt af van de passen die ú heeft, niet van de CPO
- per netwerk kunnen tarieven en voorwaarden afwijken
- bij drukte of storingen geldt de dekking niet

Voor een vloot is het daarom meestal verstandiger om **directe accounts** te hebben bij de netwerken waar u veel laadt, in plaats van te leunen op één roamingpas.

## Wat Stroomlijnen doet

Dit is het eerlijke deel.

### Wat we hebben

- **OCPI 2.2.1** is geïmplementeerd
- Onze partij-identiteit **NL\*STM** is geregistreerd bij de Benelux IDRO (registratie IDRO/0274)
- Laadpunten kunnen onder OCPI worden aangeboden

### Wat we bewust niet doen

:::warning Roaming staat bij onze laadpunten uit
Roaming is technisch aanwezig maar **uitgeschakeld**. De reden is kosten: elke sessie via een hub of eMSP geeft commissie af, en dat geldt zowel voor sessies van derden bij ons als voor onze gebruikers elders. Voor de meeste van onze locaties — besloten of op afspraak — levert roaming vooral kosten op en weinig gebruik.

Op verzoek is een **directe bilaterale koppeling** met een specifieke partij mogelijk. Dat is maatwerk en geen selfservice.
:::

Dat betekent concreet:

- Een chauffeur met een pas van een andere aanbieder kan bij ons in de regel **niet** laden
- Onze gebruikers laden bij ons, niet "overal in Europa" met dezelfde pas
- Voor laden elders heeft u een account bij dat netwerk nodig

### Publicatie van laadpuntdata

Onder de Europese **AFIR**-verordening moeten publiek toegankelijke laadpunten worden aangemeld bij het nationale toegangspunt (in Nederland de **NDW**). Dat traject loopt; zodra het rond is, verschijnen onze publieke laadpunten in de gangbare kaarten en apps. Zie [Een laadplek vinden](/docs/locations/finding-charger).

## Veelgemaakte fouten bij het lezen van aanbiedingen

| Claim | Wat er meestal bedoeld wordt |
|---|---|
| "OCPI-roaming met 300.000 punten" | Er is een koppeling met een hub; de dekking hangt af van uw pas |
| "Plug & Charge in heel Europa" | Er is een certificaatvariant in voorbereiding, niet operationeel overal |
| "Open protocol, dus vrijheid" | OCPP/OCPI zijn open standaarden, maar contracten en certificaten kunnen alsnog binden |

## Verder lezen

- [OCPP-overzicht](/docs/technical/ocpp-overview)
- [Een laadplek vinden](/docs/locations/finding-charger)
- [Een CPO kiezen](/docs/pandeneigenaren/cpo-kiezen)
- [Koppelingen en data-export](/docs/technical/integration)
