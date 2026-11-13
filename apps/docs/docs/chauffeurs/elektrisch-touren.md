---
sidebar_position: 1
title: Elektrisch touren — wat je moet weten
description: Praktische gids voor chauffeurs die met een elektrisch voertuig op tournee gaan. Van rijbereik tot laadbeheer onderweg.
keywords: [elektrisch touren, chauffeur, range, OBC, laadstrategie, snellader, vrachtwagen, bestelwagen]
---

# Elektrisch touren — wat je moet weten

Een praktische gids voor chauffeurs die met een elektrisch voertuig op tournee gaan. De kernregel is eenvoudig: **laad als je stilstaat, niet als je rijdt**.

---

## Het voertuig

### Range bepaalt alles

Het rijbereik (range) van je voertuig bepaalt of je van A naar B kunt zonder tussenstop. Enkele vuistregels voor Nederland:

- **Personenwagen met groot accupakket** (bijv. 77+ kWh): vanuit Utrecht kom je naar vrijwel alle theaters op en terug binnen één lading
- **Bestelwagen**: dit is met de meeste modellen vrijwel onmogelijk op één lading — laden onderweg is onvermijdelijk
- **Vrachtwagen**: afhankelijk van route en lading, maar laden in het theater is cruciaal

### WLTP-range vs. werkelijkheid

De officiële WLTP-range is gebaseerd op gemengd gebruik en is geen goede maatstaf voor constant snelwegrijden.

| Snelheid | Verbruik t.o.v. WLTP | Effectieve range |
|---|---|---|
| 90 km/h | ~100% | WLTP-range haalbaar |
| 100 km/h | ~110% | ~10% minder range |
| 120 km/h | ~150% | ~30% minder range |

**Praktijkvoorbeeld (Kia e-Soul, WLTP 452 km):**
- Bij 90 km/h: ~450 km haalbaar
- Bij 120 km/h: ~300 km in de praktijk
- Vuistregel bij gemiddeld 100 km/h: reken op ~330 km

Temperatuur en wind verlagen de range verder. Reken altijd met een marge.

### De OBC — on board charger

De **OBC (On Board Charger)** is de ingebouwde lader van het voertuig. Deze bepaalt hoe snel je aan een gewone AC-laadpaal kunt laden. Het is het langzaamste onderdeel in de keten.

| OBC-vermogen | Tijd om 60 kWh vol te laden |
|---|---|
| 3 kW | ~20 uur |
| 7 kW | ~8,5 uur |
| 11 kW | ~5,5 uur |
| 22 kW | ~2,75 uur |

:::warning
Een OBC van 11 kW laadt maximaal op 11 kW, ook als de laadpaal meer kan leveren. De OBC is de beperkende factor bij AC-laden.
:::

Vrijwel alle voertuigen met een B-rijbewijs (personenwagens, bestelwagens) hebben een beperkte OBC — dit was al zo bij diesel (krachtstroom voor opbouw), maar bij elektrisch is het des te relevanter.

---

## Laders

### AC-laders (openbare palen, thuislader)

AC-laders leveren wisselstroom aan het voertuig — de OBC zet dit om naar DC voor de batterij.

- **Vermogen:** 3,7–22 kW (afhankelijk van paal én OBC)
- **Locaties:** openbare laadpalen op straat, bij bedrijven, in theaters
- **Prijs:** relatief laag — reken indicatief op €0,30–€0,50/kWh, sterk afhankelijk van netwerk en betaalmethode
- **Nadeel:** langzaam, en steeds meer palen beperken het laadvermogen tijdens avondcongestie (16:00–22:00 uur) of leveren dan helemaal niets

:::warning Avondpiek
Op veel plekken is het net tussen ruwweg 16:00 en 22:00 het zwaarst belast. Sommige openbare laadpalen verlagen dan het laadvermogen, en bij een enkele paal stopt het laden tijdelijk. Reken er dus niet blind op dat je 's ochtends een volle accu hebt: controleer de laadsessie voordat je gaat slapen, of kies een paal waar je zekerheid over hebt.
:::

:::note Laadpaalklevers
Bij veel laadpalen gelden inmiddels boetes als je blijft staan nadat de accu vol is. Zet een melding in je app.
:::

### DC-laders (snelladers)

DC-laders zetten de stroom zelf om en laden direct op de batterij — zonder OBC. Veel sneller.

- **Vermogen:** 20–350+ kW
- **Prijs:** fors hoger dan AC — publieke snelladers zitten indicatief tussen €0,50 en €0,90/kWh, afhankelijk van netwerk en of je met een pas van een derde partij betaalt
- **Locaties voor personenwagens/bestelwagens:** Fastned, Shell Recharge, Allego, etc.
- **Locaties voor vrachtwagens:** een groeiend aantal vrachtwagenlaadpleinen in Nederland — te vinden via [Chargemap](https://chargemap.com) of [Truckcharging van Volvo](https://truckscharging.com)

:::warning Reguliere snelladers zijn meestal geen optie voor een vrachtwagen
De meeste publieke snelladers zijn ontworpen voor personenauto's: krappe vakken, lage kabelhouders en geen doorrijdmogelijkheid. Met een vrachtwagen kom je er fysiek vaak niet bij, ook als het formeel niet verboden is. Reken op speciale vrachtwagenlaadpleinen en check vooraf of je er met jouw combinatie terecht kunt.
:::

### Eigen lader meenemen

Een eigen lader meenemen (mobiele laadkabel of wallbox) is een slimme optie — je weet dan zeker dat je kunt laden als er een krachtstroompunt beschikbaar is.

**Let op bij krachtstroomaansluitingen:**
- Een 32A kabel/stekker kan dat vermogen alleen in de piek aan, maar slechts **25A continu** (netto ~15 kW continu laden)
- Een 63A kabel geeft de dubbele capaciteit (~30 kW continu)
- Kabellengte en dikte bepalen of je het volle vermogen kunt halen — zware kabels over grote afstand verliezen vermogen

Niet alle laad- en losgebieden bij theaters hebben krachtstroom in de buurt. Controleer dit vooraf.

---

## Rijgedrag

### Regeneratief remmen

De meeste elektrische voertuigen kunnen energie terugwinnen bij het remmen (regeneratief remmen). De motor werkt als dynamo en laadt de accu bij het afremmen.

- Je kunt **niet meer uitrollen** — het voertuig remt zodra je gas loslaat
- Dit is even wennen, maar levert significant rijbereik op bij elke afrit of snelheidsvermindering
- Je remmen slijten nauwelijks

**Tip:** Leer rijden met één pedaal. Bij elke afrit of file win je gratis range.

---

## Laadstrategie onderweg

De ideale strategie voor een tourende chauffeur:

```
Thuisbasis       → Volle accu vertrekken
        ↓
Theater/locatie  → Laden tijdens opbouw/voorstelling/afbouw
        ↓
Thuisbasis       → Eventueel bijladen thuis
```

Als de range voor de enkele reis niet toereikend is:

- Kies een voertuig met **hoge DC-laadsnelheid (>100 kW)** — dat maakt een snellaadstop van 15 minuten mogelijk i.p.v. 45 minuten
- Zoek snelladers op de route via [Chargemap](https://chargemap.com), [ABRP](https://abetterrouteplanner.com) of [PlugShare](https://www.plugshare.com)

---

## Vrachtwagens: speciale aandachtspunten

Voor vrachtwagens gelden extra beperkingen:

- **Rijdenwet:** combineren van laden met technikerwerk is wettelijk problematisch als de chauffeur moet wachten bij de lader. Bij theaters die niet kunnen laden is een **dedicated chauffeur** nodig.
- **Reguliere snelladers zijn fysiek meestal onbruikbaar** — zoek vrachtwagenlaadpleinen
- **Laden in het theater**: niet altijd mogelijk en niet overal is er een aansluiting in de buurt van het laaddok

---

## Conclusies op een rij

- **Laad als je stilstaat** — thuis en in het theater. Laden onderweg telt op bij je werkdag.
- **Range > laadsnelheid** als je overal kunt laden op locatie
- **Laadsnelheid > range** als je tussenstops onderweg niet kunt vermijden — dan wil je >100 kW DC
- **Avondcongestie** (16:00–22:00): openbare palen kunnen verrassend weinig leveren
- **Eigen lader meenemen** is slim — onafhankelijk van beschikbare infrastructuur
- **Snelladers zijn duur** — gebruik ze alleen als het echt nodig is
- **Vrachtwagens**: zoek laadpleinen, niet reguliere snelladers
- **Vrachtwagen + geen theater-lader** = dedicated chauffeur nodig (rijdenwet)
