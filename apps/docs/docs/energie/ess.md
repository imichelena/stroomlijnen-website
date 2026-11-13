---
sidebar_position: 3
title: Batterijopslag als buffer (ESS)
description: Hoe een stationaire batterij laden mogelijk maakt dat de aansluiting niet kan leveren, wat de beperkingen zijn en waar u op moet letten.
keywords: [ESS, batterijopslag, peakshaving, buffer, netcongestie, C-waarde, SPRILA]
---

import { DayFlow } from '@site/src/components/EnergyVisuals';

# Batterijopslag als buffer (ESS)

Een **ESS (Energy Storage System)** is een stationaire batterij op uw locatie. Hij laadt wanneer er ruimte over is en levert wanneer het nodig is. Daarmee wordt de effectieve capaciteit van uw aansluiting groter zonder dat er een kabel de grond in hoeft.

## Wat het oplost

Een batterij helpt in drie verschillende situaties — en het is belangrijk ze niet te verwarren:

| Doel | Wat de batterij doet | Effect |
|---|---|---|
| **Piek afvlakken (peakshaving)** | Levert kort vermogen als het gebouw boven zijn contract dreigt te komen | U voorkomt overschrijding en boetes |
| **Laden mogelijk maken** | Levert vermogen aan de laders bovenop wat de aansluiting toestaat | U laadt sneller dan uw GTV toelaat |
| **Energie verplaatsen** | Laadt in goedkope uren, levert in dure uren | Lagere energiekosten |

Dat zijn drie verschillende businesscases met verschillende eisen aan de batterij. Een batterij die goed is in peakshaving is niet automatisch goed in "de hele vloot laden".

## De rekensom die telt

De bruikbare capaciteit is niet het getal op de datasheet. Twee verhoudingen bepalen wat u er echt aan heeft:

- **Capaciteit (kWh)** — hoeveel energie er in past. Bepaalt hoe *lang* de batterij kan bijdragen.
- **Vermogen (kW)** — hoe snel er energie in of uit kan. Bepaalt hoe *veel* de batterij kan bijdragen.
- **C-waarde (kW/kWh)** — de verhouding tussen die twee. Een batterij van 200 kWh met een C-waarde van 0,5 kan 100 kW leveren en is in twee uur leeg.

Vuistregel: **een lege batterij levert niets**. Elke berekening die uitgaat van "de batterij vult het gat wel" moet ook laten zien wanneer die batterij weer gevuld wordt — en of daar ruimte voor was.

:::warning Reken niet met de volledige capaciteit
Fabrikanten noemen graag de bruto capaciteit. In de praktijk gaan er procenten af voor levensduurbehoud, temperatuur en een veiligheidsreserve. Reken met de **bruikbare** capaciteit en met de laadcurve, niet met het ideaalplaatje.
:::

## Batterij plus slim aansturen

Een batterij zonder goede aansturing is een dure accu. De combinatie is wat werkt:

1. Het EMS meet continu wat het gebouw vraagt.
2. Zon en daluren worden gebruikt om de batterij te vullen.
3. Op piekmomenten levert de batterij bij — aan het gebouw of aan de laders.
4. Het geheel blijft binnen het GTV.

Dezelfde batterij doet dus meerdere diensten: hij vangt de gebouwpiek op, maakt laden mogelijk en verplaatst energie naar goedkope uren. Dat is precies de reden om de batterij niet als los product te verkopen maar als onderdeel van één systeem.

### Een werkdag met opslag

Volg drie momenten op een voorbeeldlocatie. Bekijk hoe opwek, laden en opslag elk een ander ritme hebben.

<DayFlow locale="nl" />

## Veiligheid en gebouwintegratie

Een batterij in een gebouw is een brandsafety-onderwerp, niet alleen een elektrotechnisch onderwerp. Waar u op moet letten:

- **Meerlaags veiligheidsontwerp** — celbewaking, ontkoppeling en fysieke scheiding horen alle drie aanwezig te zijn, niet slechts één ervan
- **Koppeling met de brandmeldinstallatie** — de laadinfrastructuur moet kunnen worden afgeschakeld door de bestaande brandmeldinstallatie
- **Opstelplaats** — ventilatie, bereikbaarheid voor de brandweer en afstand tot (brand)compartimenten
- **Documentatie voor de verzekeraar** — certificaten, conformiteitsverklaringen en het aansprakelijkheidsverhaal

Zie ook [Gemeente en verzekeraar](/docs/pandeneigenaren/gemeente-verzekeraar).

## Wat het kost en wat er gesubsidieerd wordt

Een batterij is de duurste component van het systeem. Er is wél subsidie op, maar met strikte voorwaarden. In 2026 geldt voor stationaire batterijen bij laadinfrastructuur (SPRILA):

- **€ 85 per kWh** voor MKB (€ 60 voor grootbedrijf)
- Maximaal **1.000 kWh** gesubsidieerd per laadplek
- C-waarde **≤ 0,5**
- Minimaal **70%** van de ontladen energie moet aantoonbaar naar de laadstations gaan
- Een batterij is alleen subsidiabel **samen met** minimaal één subsidiabel laadstation

Zie [Subsidies](/docs/pandeneigenaren/subsidies) voor de volledige regeling en de bronnen.

## Wanneer heeft u er een nodig?

Een batterij is zinvol als:

- de gewenste laadsnelheid structureel groter is dan de ruimte op uw aansluiting, **en** verzwaring niet op tijd kan
- u uw gebouwpiek wilt afvlakken om binnen het contract te blijven
- u veel eigen opwek hebt die u anders zou wegwerpen

Een batterij is **niet** zinvol als:

- u alleen wilt laden in de uren dat het gebouw toch niets gebruikt (dan is slim verdelen genoeg)
- de businesscase leunt op het volledige batterijvermogen continu beschikbaar hebben
- er niemand is die de batterij en het EMS samen beheert

## Verder lezen

- [Netcongestie](/docs/energie/netcongestie)
- [Wat doet een EMS?](/docs/energie/ems)
- [Subsidies](/docs/pandeneigenaren/subsidies)
- [Vermogensbeheer en netaansluiting](/docs/pandeneigenaren/vermogensbeheer)
