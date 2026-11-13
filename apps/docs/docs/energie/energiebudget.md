---
sidebar_position: 4
title: Energiebudgetten en reserveringen
description: Hoe u bepaalt wie hoeveel mag laden, hoe reserveringen werken en waarom een gereserveerde sessie anders wordt behandeld dan een spontane.
keywords: [energiebudget, reservering, laadbudget, reserveren, prioriteit, laadvenster, toelating]
---

# Energiebudgetten en reserveringen

Slim verdelen lost het technische probleem op: blijven binnen het vermogen dat er is. Maar er is een tweede vraag die net zo belangrijk is: **wie krijgt dat vermogen?**

Daarvoor bestaan energiebudgetten en reserveringen.

## Een budget is een afspraak, geen instelling

Een **energiebudget** legt vast hoeveel een voertuig, persoon of afdeling mag laden — per dag, per week of per maand. Bijvoorbeeld:

- een gast van een hotel: een laadbedrag inbegrepen bij de kamer
- een medewerker: genoeg voor woon-werkverkeer (ruwweg 10 kWh per 50 km)
- een afdeling: een maandmaximum dat bij de kostenplaats hoort

Het budget wordt gekoppeld aan de identiteit die het voertuig bij het inpluggen kenbaar maakt (meestal het voertuig zelf). Zo hoeft niemand een tegoed te "activeren": het voertuig wordt herkend en het budget is bekend.

:::tip Waarom een budget beter werkt dan een limiet per sessie
Een limiet per sessie zegt niets over gedrag over een maand. Een budget over een langere periode verdeelt schaarse ruimte eerlijk en maakt kosten voorspelbaar — ook als iemand elke dag laadt.
:::

## Twee soorten sessies

Dit onderscheid is de kern van het systeem:

| | **Gecontracteerd** | **Opportunistisch** |
|---|---|---|
| Wat er is afgesproken | Energie **en** een tijd waarop het klaar moet zijn | "Laad zoveel als kan" |
| Wordt gereserveerd | Ja, capaciteit wordt gereserveerd | Nee |
| Bij schaarste | Gaat voor | Wacht of laadt langzamer |
| Wat u krijgt | Een onderbouwde belofte | Een inspanning |

Een **gecontracteerde** sessie is er voor het geval waarin "ongeveer" niet genoeg is: de vrachtwagen moet om 23:00 weg, punt. Een **opportunistische** sessie is voor de auto die er toch staat en mag laden zolang er ruimte is.

## Reserveren: capaciteit vrijhouden

Een reservering reserveert geen laadpaal, maar **vermogen in de tijd**. Dat heeft een paar consequenties die mensen verrassen:

- **Een reservering kost ruimte, ook als er niets gebeurt.** Zodra een blok gereserveerd is, kan een opportunistische sessie er niet meer bij.
- **Er wordt pessimistisch gerekend.** De haalbaarheid wordt getoetst tegen een ongunstige laadcurve, niet tegen het mooiste scenario.
- **U krijgt een uitkomst, geen ja/nee.** Bij het plannen van een gecontracteerde sessie hoort een resultaat met haalbaarheid, laadsnelheid, verwachte eindtijd, het slechtste geval en de speling in kWh.

```
{ haalbaar, snelheid_kw, klaar_om, slechtste_geval, speling_kwh, reden }
```

Is iets niet haalbaar, dan hoort u dat **vóór** de sessie begint — niet om 22:30 als de vrachtwagen nog niet vol is.

## Laadvensters

Een laadvenster beperkt *wanneer* er geladen mag worden, niet *hoeveel*. Handig voor:

- laden buiten de gebouwpiek (bijvoorbeeld pas na 21:00)
- laden in daluren
- een vast venster per dagdeel, zodat tien auto's niet allemaal om 09:00 tegelijk beginnen

Dat laatste is de belangrijkste praktische toepassing: als iedereen tegelijk aankomt en allemaal tegelijk het volle vermogen wil, moet iedereen wachten. Met gespreide vensters laadt iedereen op tijd met minder vermogen per stuk.

## Prioriteit bij schaarste

Als het vermogen écht niet voor iedereen genoeg is, bepaalt prioriteit wie eerst gaat. Stel dit bewust in:

- **Operationeel kritisch** — het voertuig dat de dienst moet rijden
- **Gecontracteerd** — voertuigen met een afgesproken vertrektijd
- **Opportunistisch** — de rest

Zonder expliciete prioriteit verdeelt het systeem eerlijk, wat meestal goed uitpakt maar niet altijd de operationele realiteit volgt.

## Wat u zelf instelt, en wat niet

U stelt in: budgetten, vensters, prioriteiten, gewenste laadtijden.

U kunt **niet** instellen: meer vermogen dan er is. Een override is een *wens* ("laad dit voertuig bij voorkeur met 60 kW"), geen garantie. Het systeem zal nooit een limiet opheffen die nodig is om de aansluiting te beschermen — ook niet als een gebruiker dat vraagt.

## Verder lezen

- [Wat doet een EMS?](/docs/energie/ems)
- [Netcongestie](/docs/energie/netcongestie)
- [Plug & Charge](/docs/plug-and-charge/what-is-pnc)
- [Sessies bekijken](/docs/klantportaal/sessions)
