---
sidebar_position: 2
title: Wat doet een EMS?
description: Hoe een energiebeheersysteem het vermogen op een locatie meet, begroot en verdeelt over laden en gebouw — en wat u daarvan merkt.
keywords: [EMS, energiebeheersysteem, slim laden, loadmanagement, power budget, vermogensverdeling]
---

import { ControlArchitecture } from '@site/src/components/EnergyVisuals';

# Wat doet een EMS?

Een **EMS (energiebeheersysteem)** is de laag tussen uw meter en uw laadpunten. Het meet continu wat het gebouw verbruikt, berekent hoeveel er nog over is, en verdeelt dat over de voertuigen die staan te laden.

Zonder EMS is laden een gok. Met EMS is het een begroting.

## Eerst het overzicht

De regelaar verdeelt het laadbudget. Het elektrische vermogen loopt door de kabels en de verdeler, niet door de software.

<ControlArchitecture locale="nl" />

## De kern: één budget, continu gemeten

Het systeem werkt met één getal dat steeds opnieuw wordt bepaald:

```
ruimte = plafond − gemeten afname + wat de batterij kan bijdragen
```

Een paar eigenschappen die daarbij belangrijk zijn:

- **Per fase, niet alleen totaal.** Uw aansluiting is een zekering per fase. Een netjes gebalanceerd totaal kan alsnog één fase laten doorslaan. Daarom is de **krapste fase** bepalend.
- **Uit meting, niet uit een spreadsheet.** Het plafond komt van de meter, niet uit een aanname over wat het gebouw "meestal" doet.
- **Met een houdbaarheidsdatum.** Elke toekenning geldt kort en moet opnieuw worden bevestigd. Een oude meting is geen toestemming.
- **Eén eigenaar per getal.** Er is precies één component die bepaalt hoeveel een laadpunt mag trekken. Twee systemen die allebei een limiet zetten, is vragen om problemen.

## Toelaten versus begrenzen

Dit onderscheid verklaart de meeste verwarring bij gebruikers:

| | **Toelating** (bij inpluggen) | **Begrenzen** (doorlopend) |
|---|---|---|
| Wanneer | Eén keer, als de sessie begint | Continu, elke seconde |
| Vraag | Kan deze sessie überhaupt worden bediend? | Hoeveel vermogen mag er nu naartoe? |
| Bij te weinig ruimte | De sessie start niet | De sessie gaat langzamer, maar stopt niet |

Een sessie die is toegelaten wordt **niet** halverwege afgekapt omdat het gebouw druk wordt. Het vermogen gaat omlaag en de verwachte eindtijd schuift op. Dat is bewust: een chauffeur die om 15:00 begint en om 23:00 weg moet, heeft meer aan een sessie die langzamer loopt dan aan een sessie die om 20:00 stopt.

## Eerlijk traag

Als het laden langzamer gaat dan u verwacht, is dat meestal geen storing. De volgorde van oorzaken is:

1. **De accu is koud of al ver vol** — boven ongeveer 80% loopt de laadsnelheid bij elk voertuig terug.
2. **Het voertuig beperkt zelf** — veel trucks hebben een maximum dat lager is dan wat de lader kan leveren.
3. **De locatie heeft op dat moment weinig ruimte** — het gebouw gebruikt het vermogen (airco, keuken, voorstelling) en het laden krijgt de rest.
4. **Er laden meer voertuigen tegelijk** — het beschikbare vermogen wordt verdeeld.

Alleen punt 3 en 4 zijn "ons" en ook die zijn geen fout: ze zijn het systeem dat doet wat het moet doen. Wat u wél mag verwachten is dat u het kunt zien: in het Klantportaal staat per sessie wat het vermogen was en waarom het werd begrensd.

:::note Wat we niet doen
We laten een sessie niet stilvallen zonder dat u het weet. Als het vermogen omlaag moet, schuift de verwachte eindtijd op en blijft de sessie lopen. Stoppen doen we alleen als het echt niet anders kan (bijvoorbeeld bij een noodstop of een storing).
:::

## Als er iets mis is met de meting

Een EMS dat blijft doorrekenen op een oude meting is gevaarlijker dan een EMS dat stopt. Daarom gelden deze regels:

| Situatie | Wat het systeem doet |
|---|---|
| Meter geeft kort geen data | Laatste goede budget aanhouden, verhogingen blokkeren |
| Meter blijft weg | Verhogingen op nul, huidige limieten blijven staan |
| Verificatie valt uit | Transport bevriest op de laatst goede waarde en er gaat een melding uit |
| Cloud of internet weg | De aansturing op locatie loopt door; sessies blijven werken en worden later verwerkt |
| Opslag of logging stuk | Nieuwe sessies worden geweigerd in plaats van "blind" gestart |

Dat laatste klinkt streng, maar het is de enige manier om achteraf te kunnen aantonen wat er is gebeurd. Elke limiet, elke weigering en elke begrenzing wordt vastgelegd met een reden.

## Wat u ervan merkt

- **Geen doorslaande zekeringen** doordat het plafond uit een live meting komt
- **Eerlijke verwachtingen** — een lagere laadsnelheid met een kloppende eindtijd in plaats van een stille stop
- **Bewijs achteraf** — per sessie is te herleiden waarom er werd begrensd
- **Doorladen zonder internet** — de lus zit op locatie, niet in de cloud

## EMS en de GACS-verplichting

**Energiemanagement gaat over de prestaties van het gebouw, niet alleen over laden.** Een gebouwautomatiserings- en controlesysteem (GACS) leest de klimaat- en energie-installaties van een gebouw uit en stuurt deze aan. RVO noemt de samenwerking met batterijopslag, zonnepanelen en laadpalen expliciet als vereiste functie.

Het Stroomlijnen EMS coördineert de elektrische energiestromen en het beschikbare laadvermogen op locatie, rekening houdend met aangesloten opwek en batterijopslag. Dit sluit aan bij de energiecoördinatiefuncties van een GACS. **Daarmee staat niet automatisch vast dat het hele gebouw aan de GACS-eisen voldoet.** De aangesloten apparatuur, daadwerkelijk gebruikte functies en koppeling met verwarming, koeling en andere gebouwsystemen moeten per gebouw worden beoordeeld.

### Wanneer geldt de verplichting?

Volgens de [GACS-uitleg van RVO](https://www.rvo.nl/onderwerpen/wetten-en-regels-gebouwen/epbd-iii/systeemeisen-technische-bouwsystemen/gacs):

- Sinds **1 januari 2026** moeten utiliteitsgebouwen die onder de regeling vallen en verwarmings- en/of airconditioningssystemen van **meer dan 290 kW** hebben, beschikken over een GACS.
- Vanaf **1 januari 2030** wordt de grens **meer dan 70 kW**.
- Deze grenzen gaan over het relevante verwarmings- of koelvermogen, niet over laadvermogen, batterijcapaciteit of de elektrische netaansluiting. Gebruiksfunctie, systeemgrenzen en uitzonderingen zijn van belang; raadpleeg de voorwaarden van RVO.

### Wat moet aantoonbaar zijn?

RVO noemt permanente controle, registratie, analyse en bijsturing van energiegebruik; toetsing van de energie-efficiëntie van het gebouw en opsporing van rendementsverliezen met informatie over verbeteringen voor de beheerder; communicatie met aangesloten technische bouwsystemen; en samenwerking met andere energiegerelateerde apparatuur.

Een GACS mag bestaan uit onderdelen van verschillende leveranciers. Een EMS kan dus een onderdeel zijn, maar vervangt niet automatisch alle vereiste gebouwautomatiseringsfuncties. RVO geeft ook aan dat extra investering bij een bestaand EMS mogelijk niet nodig is **als de functies aan de eisen voldoen en daadwerkelijk worden gebruikt**.

Voor bestaande gebouwen noemt RVO minimaal **klasse C**, met **klasse B voor de technische beheer- en analysefuncties van hoofdstuk 7**, volgens NEN-EN-ISO 52120-1. Voor nieuwe utiliteitsgebouwen gelden volgens deze uitleg sinds **29 mei 2026** **klasse B** en **klasse A voor hoofdstuk 7**. Dit zijn eisen aan de gebouwsystemen, **geen toegekende classificaties van ons EMS**.

Gebruik de checklist van RVO met een technisch deskundige beoordelaar, leg de resultaten vast en breng ontbrekende functies in kaart. Wij stellen niet dat alleen het installeren van ons EMS aan de GACS-verplichting voldoet.

**Officiële bron:** [RVO — Gebouwautomatiserings- en controlesysteem (GACS)](https://www.rvo.nl/onderwerpen/wetten-en-regels-gebouwen/epbd-iii/systeemeisen-technische-bouwsystemen/gacs).

## Verder lezen

- [Netcongestie](/docs/energie/netcongestie)
- [Batterijopslag als buffer](/docs/energie/ess)
- [Energiebudgetten en reserveringen](/docs/energie/energiebudget)
- [Vermogensbeheer en netaansluiting](/docs/pandeneigenaren/vermogensbeheer)
