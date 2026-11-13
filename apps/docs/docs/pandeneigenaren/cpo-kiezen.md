---
sidebar_position: 4
title: Een CPO kiezen
description: Waar u op moet letten bij het kiezen van een Charge Point Operator — de vragen die het verschil maken, en de antwoorden die u zou moeten wantrouwen.
keywords: [CPO kiezen, OCPP, vendor lock-in, SLA, contractvorm, aanbesteding]
---

# Een CPO kiezen

Een **CPO (Charge Point Operator)** beheert uw laadinfrastructuur operationeel: autorisatie, meting, facturering, monitoring en storingsdienst. U sluit vaak een contract voor meerdere jaren, dus de keuze is niet omkeerbaar zonder kosten.

Deze pagina is bewust niet "waarom wij de beste zijn". Het is een checklist waarmee u elke aanbieder kunt beoordelen.

## De zeven vragen die het verschil maken

### 1. Is de laadinfrastructuur écht overdraagbaar?

Iedereen zegt "OCPP, dus geen vendor lock-in". Vraag door:

- **Welke OCPP-versie** draait de lader, en is die firmware-updatebaar?
- **Krijg ik bij vertrek de configuratie mee** — netwerkinstellingen, laadprofielen, sleutels?
- **Wie is eigenaar van de hardware** en wat gebeurt er bij een geschil?
- **Zijn er functies die alleen via de leverancier werken** (bijvoorbeeld eigen app, eigen poorten, eigen authenticatie)? Dat is lock-in, ook met OCPP.

:::note OCPP 2.0.1 is geen eis
Een veelgemaakte fout in checklists: "eist u OCPP 2.0.1". Voor veel toepassingen is **1.6J** volstrekt toereikend, en veel bestaande installaties draaien erop. 2.0.1 is beter op het gebied van apparaatmodel, Plug & Charge-certificaten en beveiliging, maar het is geen voorwaarde voor een werkende installatie. Vraag liever: *werkt het, en kan ik er later mee door?*
:::

### 2. Wie bepaalt het vermogen?

Dit is de vraag die bijna niemand stelt en die het vaakst problemen geeft.

- **Zit de vermogenssturing in de cloud of op locatie?** In de cloud betekent: geen internet, geen sturing.
- **Wat gebeurt er als de verbinding wegvalt?** Blijft de installatie binnen uw aansluiting, of valt alles uit?
- **Meet het systeem per fase?** Zo niet, dan kan één fase alsnog doorslaan.
- **Wie is de enige partij die een limiet zet?** Twee systemen die allebei sturen, is een storing in wording.

### 3. Wat is de SLA echt?

Iedereen belooft 97% beschikbaarheid. Vraag:

- **Waar is die 97% op gebaseerd** — theorie of gemeten cijfers?
- **Wat is de responstijd** bij een storing, en geldt dat 24/7?
- **Wat gebeurt er als de SLA niet wordt gehaald** — is er compensatie, of alleen een excuus?
- **Hoe snel is een defecte module vervangen?** Bij modulaire laders is dat uren in plaats van dagen, mits er onderdelen op voorraad zijn.

### 4. Roaming: wat gebeurt er werkelijk?

Roaming klinkt als een voordeel ("300.000 laadpunten!"). Vraag:

- **Via welke hub of welke directe koppelingen** loopt het?
- **Wat kost het** — roaming geeft een commissie af aan de hub en de eMSP, en die zit in het tarief of in de marge van de eigenaar.
- **Is het aan of uit** op de laadpunten, en kan het per locatie?

Bij ons staat roaming bewust **uit** omdat de kosten niet opwegen tegen het gebruik; op verzoek is een directe koppeling mogelijk. Zie [Roaming uitgelegd](/docs/pandeneigenaren/cpo-roaming-uitgelegd).

### 5. Wie doet de elektrotechniek?

Een veelgemaakte aanname is dat de CPO alles installeert. Vraag expliciet:

- **Wat doet de CPO en wat moet ik zelf regelen** (installateur, meterkast, vergunning)?
- **Wie is aansprakelijk** bij schade door de installatie?
- **Wie onderhoudt de kabel en de aansluiting** na oplevering?

### 6. Wat gebeurt er bij faillissement?

Onaangenaam maar relevant:

- Blijft de laadinfrastructuur werken zonder de leverancier?
- Wie heeft de data, en kunt u die exporteren?
- Is er een escrow of overdrachtsafspraak?

### 7. Past de financiering bij de businesscase?

- **Wie investeert** — u, de CPO, of een derde?
- **Hoe wordt de investering terugverdiend** — per kWh, vast bedrag, of een combinatie?
- **Is subsidie onderdeel van het model** en wie vraagt die aan?

## Vragen die u zou moeten wantrouwen

Rode vlaggen in een gesprek:

| Uitspraak | Waarom het een signaal is |
|---|---|
| "Onze laders halen 400 kW" | Vraag naar het model en het typeplaatje. Vaak is het de som van meerdere units. |
| "Plug & Charge werkt overal" | Vraag welke variant: voertuigidentiteit of contractcertificaat. |
| "U hoeft niets te doen" | Er is altijd iets dat de locatie moet doen: elektra, toegang, toestemming. |
| "Roaming is gratis" | Commissies worden ergens betaald. |
| "100% beschikbaarheid" | Bestaat niet. Vraag naar gemeten cijfers. |
| "Geen vendor lock-in, want OCPP" | OCPP voorkomt lock-in niet automatisch. Zie vraag 1. |

## Een goede aanbesteding in één pagina

1. Vraag een **analyse op uw eigen kwartierdata**, niet een standaardpakket
2. Vraag de **configuratie en de aannames** schriftelijk
3. Vraag **twee referenties** van vergelijkbare locaties, en bel ze
4. Vraag de **conceptovereenkomst** op vóór de offerte definitief wordt
5. Laat de **subsidievoorwaarden** apart bevestigen (aanvraag vóór opdracht!)
6. Leg vast **wie wat doet** bij installatie, onderhoud en storing

## Verder lezen

- [Roaming uitgelegd](/docs/pandeneigenaren/cpo-roaming-uitgelegd)
- [Vermogensbeheer](/docs/pandeneigenaren/vermogensbeheer)
- [Van beslissing tot eerste laadsessie](/docs/pandeneigenaren/installatie)
- [Netwerkvereisten](/docs/technical/network-requirements)
