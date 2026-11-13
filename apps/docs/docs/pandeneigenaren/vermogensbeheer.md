---
sidebar_position: 6
title: Vermogensbeheer en netaansluiting
description: Aansluitvermogen, gecontracteerd vermogen, per-fase plafonds, peakshaving en wanneer netverzwaring echt nodig is.
keywords: [aansluitvermogen, GTV, gecontracteerd vermogen, peakshaving, loadmanagement, verzwaring, kVA]
---

# Vermogensbeheer en netaansluiting

Voordat u laadpunten plaatst, moet u weten hoeveel vermogen u heeft en wie het gebruikt. Deze pagina legt de begrippen uit en de rekenfouten die vaak worden gemaakt.

## Twee getallen, één misverstand

**Aansluitvermogen** is het fysieke maximum dat uw aansluiting aankan: kabels, zekeringen, trafostation. **Gecontracteerd transportvermogen (GTV)** is wat u met de netbeheerder heeft afgesproken en waarvoor u betaalt. Het GTV is meestal lager.

:::warning kVA is geen "kW per fase"
Aansluitingen worden uitgedrukt in **kVA** over **drie fasen samen**. Een aansluiting van 400 kVA is dus geen 400 kW per fase — dat zou 1.200 kW zijn, wat niemand heeft. Reken bij benadering met het totaal, en houd rekening met de arbeidsfactor van uw installatie.
:::

| Begrip | Betekenis | Beïnvloedbaar? |
|---|---|---|
| Aansluitvermogen | Fysiek maximum | Alleen met een netverzwaring |
| GTV | Wat u contractueel mag afnemen | Ja, met de netbeheerder |
| Actueel verbruik | Wat er nu afgenomen wordt | Ja, door gedrag en sturing |

## Per fase, niet alleen totaal

Dit is de tweede veelgemaakte fout. Uw aansluiting bestaat uit **drie zekeringen**. Een netjes gebalanceerd totaal kan alsnog één fase laten doorslaan als de belasting scheef is verdeeld.

Daarom werkt een goede sturing met een **per-fase plafond**: de krapste fase bepaalt wat er nog bij kan. Een laadpunt op één fase aansluiten terwijl die fase al zwaar belast is, is vragen om problemen — ook als het totaal ruim lijkt.

## Hoeveel ruimte heeft u?

De enige betrouwbare manier: kijken naar uw **kwartierwaarden** over een langere periode.

```
GTV                270 kW
Gemeten avondpiek  220 kW   →  50 kW ruimte
Gemeten overdag     40 kW   →  230 kW ruimte
```

Let op wat hier staat: de ruimte is er **op bepaalde momenten**, niet altijd. Een laadpunt dat continu 150 kW vraagt op deze aansluiting is 's avonds een probleem. Een laadpunt dat gestuurd wordt, laadt overdag snel en 's avonds langzaam — en dan kan het wel.

## Wat een lader vraagt

| Type | Vermogen | Aandeel van een 270 kW GTV |
|---|---|---|
| AC-lader, enkelfasig | 3,7–7,4 kW | 1–3% |
| AC-lader, driefasig | 11–30 kW | 4–11% |
| DC-lader (onze standaard) | 120 kW (2×60) | tot 44% |
| DC bij uitbreiding | tot 180 kW | tot 67% |

Een DC-lader trekt niet continu zijn maximum: het vermogen volgt de laadcurve van het voertuig en zakt boven de 60–80% SoC sterk in. Toch moet u met het maximum rekenen zolang de sessie loopt.

## De oplossing: sturen in plaats van verzwaren

**Peakshaving / loadmanagement** past het laadvermogen continu aan op basis van wat er op dat moment over is:

1. Het systeem meet het gebouwverbruik, per fase
2. Het berekent de resterende ruimte onder het plafond
3. De laadpunten krijgen precies dat
4. Stijgt het gebouwverbruik (publiek komt binnen, keuken start), dan gaat het laden omlaag
5. Daalt het weer, dan gaat het laden omhoog

Het resultaat: u overschrijdt uw GTV niet, u laadt zo snel als kan, en er is geen handmatige actie nodig. Zie [Wat doet een EMS?](/docs/energie/ems).

## Wanneer is verzwaring écht nodig?

Zelden voor een eerste laadpunt. Verzwaring wordt relevant als:

- u structureel meer wilt laden dan er ruimte is, ook met sturing
- u gegarandeerd vermogen wilt afgeven aan derden (contractueel)
- u meerdere zware laadpunten tegelijk wilt laten draaien zonder batterij

:::note Wachttijden
Verzwaring aanvragen betekent een studie en een wachtrij bij de netbeheerder. In drukke gebieden loopt dat van maanden tot meerdere jaren, en soms is er nog geen datum. Reken er niet op als plan-A. Een batterij kan de wachttijd overbruggen — zie [Batterijopslag](/docs/energie/ess).
:::

## Batterij als buffer

Een ESS verandert de rekensom: het systeem kan meer leveren dan de aansluiting toestaat, doordat de batterij bijspringt op piekmomenten en zich in rustige uren weer vult.

| | Zonder batterij | Met batterij |
|---|---|---|
| Overdag beschikbaar | 230 kW | 230 kW + buffer |
| 's Avonds beschikbaar | 50 kW | 50 kW + buffer |
| Voorwaarde | — | De batterij moet gevuld zijn; reken met de bruikbare capaciteit, niet met de datasheet |

## Verder lezen

- [Netcongestie](/docs/energie/netcongestie)
- [Batterijopslag](/docs/energie/ess)
- [Wat doet een EMS?](/docs/energie/ems)
- [Energiebudgetten en reserveringen](/docs/energie/energiebudget)
