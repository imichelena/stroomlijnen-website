---
sidebar_position: 8
title: AC- en DC-laders uitgelegd
description: Het verschil tussen wisselstroom en gelijkstroom laden, wat het betekent voor laadtijd en kosten, en hoe u kiest.
keywords: [AC lader, DC lader, wisselstroom, gelijkstroom, CCS2, Type 2, laadvermogen, MCS]
---

# AC- en DC-laders uitgelegd

Er zijn twee manieren om een elektrisch voertuig te laden, en het verschil zit op één plek: **waar de omzetting van wisselstroom naar gelijkstroom gebeurt.**

## Het principe

Het net levert **wisselstroom (AC)**. Een batterij slaat **gelijkstroom (DC)** op. Ergens moet dus worden omgezet.

- **AC-laden** — de omzetting gebeurt **in het voertuig**, in de boordlader (OBC)
- **DC-laden** — de omzetting gebeurt **in de lader**; het voertuig krijgt direct gelijkstroom

Daaruit volgt alles wat verder verschillend is.

## Vergelijking

| Kenmerk | AC-lader | DC-lader |
|---|---|---|
| Waar de omzetting zit | In het voertuig (boordlader) | In de laadpaal |
| Vermogen | 3,7–43 kW | 20 kW tot 350+ kW |
| Wat de snelheid bepaalt | De **boordlader** van het voertuig | De **lader** én wat het voertuig aankan |
| Laadtijd (truck, 300 kWh bruikbaar) | ca. 8–80 uur, afhankelijk van de OBC | ca. 1–5 uur, afhankelijk van voertuig en lader |
| Aanschafprijs laadpunt | Enkele honderden tot enkele duizenden euro's | Vanaf circa € 10.000 tot ver boven € 50.000 |
| Installatie | Relatief eenvoudig | Zwaarder: bekabeling, beveiliging, netcapaciteit |
| Connector (Europa) | Type 2 | CCS Combo 2 |
| Geschikt voor nacht-/verblijfladen | Ja | Ja |
| Geschikt voor snel bijladen | Nee | Ja |

:::note De prijsrange is enorm — en dat is informatie
Voor een 60 kW DC-lader bestaan offertes van rond de € 50.000 (Europees, inclusief installatie en service) en inkoopprijzen van enkele duizenden euro's (directe import uit Azië, exclusief transport, inklaring en inbedrijfname). Dat verschil is geen "afzetterij": het zit in marge, certificering, service, garantie en wie het risico draagt als er iets stukgaat. Vergelijk dus nooit alleen het getal op de offerte.
:::

## De boordlader is de bottleneck bij AC

Dit verrast veel mensen. Een AC-laadpunt van 22 kW levert geen 22 kW aan een voertuig met een 11 kW boordlader — het levert 11 kW. De paal past zich aan het voertuig aan, niet andersom.

| OBC-vermogen | Tijd voor 60 kWh (theoretisch) |
|---|---|
| 3,7 kW | ~16 uur |
| 7,4 kW | ~8 uur |
| 11 kW | ~5,5 uur |
| 22 kW | ~2,75 uur |

In de praktijk komt daar tijd bij: laadverliezen, een laadcurve die afvlakt, en de temperatuur van de accu.

## AC is niet "slecht"

AC-laden is langzamer maar heeft echte voordelen:

- **goedkoper** in aanschaf en installatie
- **lichter voor het net** — minder piekvermogen nodig
- **beter voor de accu** bij langdurig stilstaan
- **meer laadpunten voor hetzelfde vermogen** — met 30 kW kun je drie AC-punten van 11 kW plaatsen in plaats van één DC-punt

Voor een hotelgast die een nacht blijft, is AC prima. Voor een vrachtwagen die om 23:00 weg moet, is het dat niet.

## DC is niet altijd sneller

Twee dingen bepalen de werkelijke laadsnelheid bij DC:

1. **Het maximum van het voertuig** — een truck met 150 kW maximum laadt niet sneller op een 350 kW-lader
2. **De laadcurve** — boven 60–80% SoC zakt het vermogen bij vrijwel elk voertuig in

Een 120 kW-lader is voor veel tourneedagen ruim voldoende: 400 kWh in 10 uur vraagt gemiddeld 40 kW.

## Hoe u kiest

| Situatie | Aanbeveling |
|---|---|
| Voertuig staat een nacht of werkdag stil | **AC** (of lichte DC), 11–30 kW |
| Voertuig staat 4–10 uur en moet daarna vol zijn | **DC**, 50–120 kW |
| Voertuig staat kort en moet snel door | **DC**, 150 kW+ |
| Veel voertuigen tegelijk, beperkt vermogen | **Meerdere AC-punten met slimme verdeling**, of DC met energiebeheer |
| Bestelbussen van een vloot | Vaak **AC** 's nachts, met één DC voor uitzonderingen |

Belangrijker dan AC of DC: **hoeveel vermogen is er op welk moment beschikbaar**. Zie [Netcongestie](/docs/energie/netcongestie) en [Vermogensbeheer](/docs/pandeneigenaren/vermogensbeheer).

## Wat er nog aankomt: MCS

Voor de zwaarste vrachtwagens (40 ton, grote accupakketten) wordt **MCS (Megawatt Charging System)** de volgende standaard, met vermogens tot 3,75 MW. Uitrol langs Europese corridors is gaande maar nog beperkt, en het vraagt aanzienlijk meer van de netaansluiting dan CCS.

Voor een theater of hotel is MCS voorlopig niet relevant; voor een logistieke hub langs een corridor kan het dat op termijn wel zijn. Zie [CharIN](https://www.charin.global) voor de standaard.

## Verder lezen

- [Vermogensbeheer](/docs/pandeneigenaren/vermogensbeheer)
- [Netcongestie](/docs/energie/netcongestie)
- [Wat doet een EMS?](/docs/energie/ems)
- [OCPP-overzicht](/docs/technical/ocpp-overview)
