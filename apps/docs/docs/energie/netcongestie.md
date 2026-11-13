---
sidebar_position: 1
title: Netcongestie — waarom vermogen het echte probleem is
description: Wat netcongestie is, wat gecontracteerd transportvermogen (GTV) betekent, waarom verzwaren jaren kan duren, en wat u er zonder wachten aan kunt doen.
keywords: [netcongestie, GTV, gecontracteerd vermogen, aansluitvermogen, verzwaren, wachttijd, capaciteit]
---

import { CapacityExplorer } from '@site/src/components/EnergyVisuals';

# Netcongestie — waarom vermogen het echte probleem is

Bijna iedereen die laadpunten wil plaatsen, begint bij de laders. De echte vraag is een andere: **hoeveel vermogen mag er op dit moment door mijn aansluiting, en wie gebruikt dat?**

In grote delen van Nederland is het antwoord op die vraag het knelpunt. Dat heet netcongestie.

## Drie getallen die u uit elkaar moet houden

| Begrip | Wat het is | Waar het vandaan komt |
|---|---|---|
| **Aansluitvermogen** | Het fysieke maximum dat uw aansluiting aankan, bepaald door kabels en het trafostation | Netbeheerder |
| **Gecontracteerd transportvermogen (GTV)** | Het vermogen waarvoor u een contract heeft en waarvoor u betaalt | Uw contract met de netbeheerder |
| **Actueel verbruik** | Wat er op dit moment daadwerkelijk wordt afgenomen | Uw meter |

Het GTV is meestal **lager** dan het aansluitvermogen. En het is het enige getal dat telt voor de vraag of u iets *mag* aansluiten: boven uw GTV afnemen levert een overschrijding op, en bij herhaling een boete of een verplichting om te verzwaren.

:::warning kVA is niet "kW per fase"
Een aansluiting wordt uitgedrukt in **kVA** (schijnbaar vermogen), verdeeld over drie fasen. Een aansluiting van 400 kVA betekent dus niet 400 kW per fase. Reken bij benadering met een totaal van ongeveer 400 kW over de drie fasen samen, en houd rekening met de arbeidsfactor van uw apparatuur. Wie hier "per fase" leest, komt een factor drie te hoog uit.
:::

## Waarom verzwaren geen optie is

In veel regio's staat het net vol. Verzwaring aanvragen betekent een studie, een wachtrij en vaak een nieuw trafostation. Wachttijden lopen in de praktijk van **maanden tot meerdere jaren**, afhankelijk van regio en omvang — en in de drukste gebieden is er simpelweg nog geen datum.

Dat betekent niet dat er niets kan. Het betekent dat u moet werken met het vermogen dat er **al** is.

## De ruimte die u al heeft

De crux: uw GTV is gedimensioneerd op uw **piek**, niet op uw gemiddelde. Bij een theater is die piek 's avonds — publiek binnen, airco aan, voorstelling draait. Overdag is het verbruik vaak een fractie daarvan.

```
GTV                270 kW
Avondverbruik      220 kW   →  50 kW ruimte
Overdag             40 kW   →  230 kW ruimte
```

Precies in dat overdagse gat past een vrachtwagen die 8–10 uur bij het laaddok staat. U hoeft dus geen vermogen bij te kopen; u moet het **op het juiste moment** beschikbaar maken.

En dat is de hele reden dat een EMS bestaat: dat gat continu meten en het laden er binnen houden. Zie [Wat doet een EMS?](/docs/energie/ems).

### Bekijk hoe de ruimte meebeweegt

Verander het gebouwverbruik in dit voorbeeld. De lader krijgt alleen het vermogen dat binnen het ingestelde plafond past.

<CapacityExplorer locale="nl" />

## Vier manieren om met een vol net om te gaan

| Aanpak | Wat het doet | Wanneer zinvol |
|---|---|---|
| **Slim verdelen (EMS)** | Laadt alleen met het vermogen dat op dat moment over is | Altijd — dit is de basis |
| **Bufferen (batterij/ESS)** | Vult zich in rustige uren en levert op piekmomenten | Als de gewenste laadsnelheid groter is dan de ruimte op de aansluiting |
| **Verschuiven in de tijd** | Laden in daluren of buiten de gebouwpiek plannen | Als het voertuig lang genoeg stilstaat |
| **Verzwaren** | Meer vermogen contracteren | Als het structureel nodig is en de wachttijd acceptabel |

In de praktijk combineert u de eerste drie; de vierde is het laatste redmiddel. Zie ook [Batterijopslag als buffer](/docs/energie/ess) en [Energiebudgetten en reserveringen](/docs/energie/energiebudget).

## Wat dit betekent voor een laadpunt bij u

Een paar conclusies die vaak verrassend zijn:

- **Een zware lader is niet automatisch beter.** Een 120 kW-lader die continu 120 kW trekt op een aansluiting waar 50 kW over is, is een probleem. Met een EMS is diezelfde lader nuttig: hij pakt wat er is.
- **De gemiddelde laadsnelheid is wat telt**, niet de piek. 400 kWh over 10 uur is gemiddeld 40 kW.
- **Uw eigen opwek helpt, maar niet altijd.** Zon levert overdag en zakt 's avonds weg — net wanneer de gebouwpiek komt. Reken zonneproductie niet mee als gegarandeerd vermogen.
- **De meter is de bron van waarheid.** Elke berekening die niet op uw eigen kwartierdata is gebaseerd, is een schatting.

## Verder lezen

- [Wat doet een EMS?](/docs/energie/ems)
- [Batterijopslag als buffer (ESS)](/docs/energie/ess)
- [Energiebudgetten en reserveringen](/docs/energie/energiebudget)
- [Vermogensbeheer en netaansluiting](/docs/pandeneigenaren/vermogensbeheer)
