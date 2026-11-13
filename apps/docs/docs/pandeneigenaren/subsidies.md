---
sidebar_position: 7
title: Subsidies voor laadinfrastructuur
description: SPRILA in 2026 — bedragen, voorwaarden, rekenmethodiek en de fouten waardoor aanvragen worden afgewezen. Plus KIA en EIA.
keywords: [SPRILA, subsidie, RVO, laadinfrastructuur, batterij, KIA, EIA, eHerkenning, AGVV]
---

# Subsidies voor laadinfrastructuur

Voor laadinfrastructuur bij bedrijven is er in Nederland één regeling die er echt toe doet: **SPRILA**. Daarnaast zijn er fiscale regelingen (KIA, EIA) die de investering verlichten.

:::warning Controleer altijd de actuele versie
Subsidiebedragen en voorwaarden veranderen jaarlijks. De cijfers hieronder zijn de stand van **2026** en geverifieerd tegen de RVO-bronnen die onderaan staan. Controleer vóór een aanvraag altijd de actuele RVO-pagina — en dien de aanvraag in **vóórdat** u de opdracht geeft.
:::

## SPRILA

SPRILA staat voor de **Subsidieregeling Private Laadinfrastructuur bij bedrijven**, uitgevoerd door RVO. De regeling subsidieert laadstations (en in combinatie daarmee stationaire batterijen) bij bedrijven, met de eis dat de laadinfrastructuur ten minste 24 maanden voor derden toegankelijk blijft.

**Let op de naam:** het is dus géén regeling voor *publieke* laadinfrastructuur. Komt u die formulering ergens tegen, dan is de tekst verouderd.

### Bedragen laadstations (2026)

Het vermogen wordt bij AC bepaald door het maximumvermogen van het **laadpunt**, bij DC door het **totale vermogen van het station**. MKB-tarief is het dubbele van grootbedrijf.

| Categorie | Grootbedrijf | MKB |
|---|---|---|
| AC ≥ 11 kW (1 laadpunt) | € 400 | € 800 |
| AC duopaal 2× 11 kW | € 800 | € 1.600 |
| AC ≥ 43 kW | € 880 | € 1.760 |
| AC duopaal 2× 43 kW | € 1.760 | € 3.520 |
| DC ≥ 20 kW | € 1.950 | € 3.900 |
| DC ≥ 50 kW | € 4.880 | € 9.760 |
| **DC ≥ 100 kW** | € 8.850 | **€ 17.700** |
| DC ≥ 150 kW | € 12.200 | € 24.400 |
| DC ≥ 220 kW | € 15.500 | € 31.000 |
| DC ≥ 350 kW | € 26.250 | € 52.500 |
| DC ≥ 550 kW | € 44.000 | € 88.000 |

:::note Onze 120 kW-lader valt in de categorie DC ≥ 100 kW
Dat betekent € 17.700 subsidie per station voor MKB — mits het totaalbedrag binnen de staatssteunruimte past. Zie de rekenmethodiek hieronder.
:::

### Bedragen stationaire batterij

| Parameter | Waarde |
|---|---|
| Bedrag | **€ 85/kWh** (MKB), € 60/kWh (grootbedrijf) |
| Maximum gesubsidieerd | **1.000 kWh** per laadplek |
| C-waarde (kW/kWh) | **≤ 0,5** |
| Ontlading naar laadstations | **≥ 70%** van de ontladen energie aantoonbaar naar laadstations |
| Combinatie | Alleen subsidiabel **samen met** minimaal één subsidiabel laadstation |

### Algemene voorwaarden

| Voorwaarde | Waarde |
|---|---|
| Minimum subsidiebedrag | **€ 2.500 per locatie** — daaronder wordt niets uitgekeerd |
| Staatssteunruimte (AGVV) | Maximaal **40%** van de subsidiabele kosten (MKB), 20% grootbedrijf |
| Aanvraag vóór aanleg | Verplicht bij een investering **boven € 25.000** |
| Toegankelijkheid | ≥ 24 maanden na vaststelling, voor derden |
| Aanvraag | **eHerkenning niveau 3**; mkb-verklaring voor het MKB-tarief |

:::warning Twee dingen die vaak misgaan
1. **€ 25.000 is niet het minimumbedrag** maar de drempel waarboven u *vóór de opdracht* moet aanvragen. Het minimum is **€ 2.500 subsidie per locatie**.
2. **DC wordt gesubsidieerd vanaf 20 kW**, niet vanaf 100 kW. Een 50 kW-lader is dus wél subsidiabel.
:::

### Rekenmethodiek

```
per station:  bedrag = staffel(vermogen, categorie)
bruto         = som van alle bedragen (DC + AC)
ruimte        = 0,40 × subsidiabele investeringskosten   (MKB)
subsidie      = min(bruto, ruimte)
indien subsidie < € 2.500 per locatie  →  geen subsidie
batterij      = min(kWh, 1000) × € 85, mits C-waarde ≤ 0,5 en ≥ 70% naar laadstations
```

De **staatssteungrens** is dus meestal de beperkende factor, niet de staffel. Wie zes laadstations plaatst, zit al snel tegen het 40%-plafond aan.

## Fiscale regelingen

### KIA — kleinschaligheidsinvesteringsaftrek

Een aftrek over uw totale investeringen in bedrijfsmiddelen per kalenderjaar, met een staffel. Laadinfrastructuur en batterijen kunnen daaronder vallen. Voorwaarden: per bedrijfsmiddel minimaal € 450.

De KIA verlaagt uw winst en daarmee uw belasting; het is geen subsidie die u ontvangt.

### EIA — energie-investeringsaftrek

De EIA geeft extra aftrek voor energiebesparende bedrijfsmiddelen die op de **Energielijst** van het jaar staan. Of uw specifieke configuratie erop staat, hangt af van het jaarbestand — controleer dat vóór aanschaf, niet erna.

## Provinciale en gemeentelijke regelingen

Sommige provincies en gemeenten hebben aanvullende regelingen, bijvoorbeeld voor laadinfrastructuur bij maatschappelijke instellingen. Deze zijn niet centraal gebundeld en veranderen vaak. Kijk op de site van uw provincie en gemeente, of vraag het de lokale ondernemersvereniging.

## Praktische volgorde

1. **Bepaal de configuratie** (vermogen, aantal, wel/geen batterij) op basis van een analyse van uw eigen data
2. **Controleer de actuele SPRILA-voorwaarden** op rvo.nl
3. **Dien de aanvraag in** — vóór de opdracht, met eHerkenning niveau 3
4. **Wacht op de beschikking** — pas daarna definitief bestellen
5. **Bewaar alle facturen** — de verantwoording vraagt om specificatie per post
6. **Regel de toegankelijkheid** — 24 maanden, en dat moet aantoonbaar zijn

## Bronnen

- SPRILA, aanschaf: [rvo.nl/subsidies-financiering/laadinfrastructuur/sprila-aanschaf](https://www.rvo.nl/subsidies-financiering/laadinfrastructuur/sprila-aanschaf)
- SPRILA, rekenvoorbeelden: [rvo.nl/subsidies-financiering/laadinfrastructuur/rekenvoorbeelden-sprila](https://www.rvo.nl/subsidies-financiering/laadinfrastructuur/rekenvoorbeelden-sprila)
- KIA en EIA: [belastingdienst.nl](https://www.belastingdienst.nl) en [rvo.nl](https://www.rvo.nl)

## Verder lezen

- [Batterijopslag](/docs/energie/ess)
- [Verdienmodel](/docs/pandeneigenaren/verdienmodel)
- [Van beslissing tot eerste laadsessie](/docs/pandeneigenaren/installatie)
