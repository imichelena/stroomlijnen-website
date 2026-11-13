---
sidebar_position: 2
title: Voertuigen en laadpassen
description: Voertuigadministratie, EVCCID-aanmelding op de lader, afzonderlijke goedkeuring en laadpassen beheren.
keywords: [voertuigen, VIN, kenteken, laadpas, RFID, kostenplaats, voertuiggroep]
---

# Voertuigen en laadpassen

Voor automatische herkenning zijn een vastgelegde voertuigidentifier en geldige toestemming nodig. Administratieve voertuiggegevens alleen zijn daarvoor niet voldoende.

## Een voertuig aanmelden voor automatische herkenning

Voertuigadministratie en automatische herkenning zijn niet hetzelfde. Een kenteken, merk/model of VIN kan administratieve informatie zijn; het VIN is niet de identifier voor onze huidige automatische herkenning.

De registratie voor herkenning gebeurt **op het laadscherm**, met een pas die aan het account is gekoppeld. De lader leest bij het aansluiten de **EVCCID (het MAC-adres van de voertuigcommunicatiecontroller)** uit en legt de koppeling vast. Zie [Automatische herkenning instellen](/docs/plug-and-charge/setup-guide) voor de volledige procedure, inclusief de optionele huur- en kentekenstappen. Een kenteken kan daar via RDW worden gecontroleerd; geen RDW-resultaat sluit aanmelden niet uit.

## Vastleggen en goedkeuren

De accounthouder moet afzonderlijk toestemming geven. Een melding dat het voertuig is toegevoegd is geen bevestiging dat het al automatisch mag laden. Wachten op goedkeuring, weigering en verlopen toestemming zijn verschillende situaties. Laat de accounthouder de registratie in het [Klantportaal](https://portal.stroomlijnen.nl) controleren; vraag uw accountmanager om uitleg over de beschikbare beheeropties.

Portalgegevens invoeren of een voertuigenlijst aanleveren vervangt het uitlezen op de lader en de goedkeuring niet. Ook na goedkeuring blijven voertuigcompatibiliteit en laadrechten van belang.

## Groepen en kostenplaatsen

Verdeel voertuigen in groepen om het overzicht te houden:

- **per afdeling** — operatie, sales, logistiek
- **per locatie** — als u meerdere vestigingen heeft
- **per type** — vrachtwagens, bestelbussen, personenauto's

Groepen zijn geen toegangscontrole: ze bepalen geen rechten, alleen indeling en rapportage. Rechten regelt u via [Team en rollen](/docs/klantportaal/team).

## Laadpassen

Laadpassen beheert u op dezelfde plek:

| Actie | Effect |
|---|---|
| Pas toevoegen | Pas wordt bruikbaar zodra hij bij ons bekend is |
| Pas aan voertuig koppelen | Sessies worden aan dat voertuig toegeschreven |
| Pas aan persoon koppelen | Sessies volgen de persoon, ongeacht het voertuig |
| Pas blokkeren | Direct geen nieuwe sessies meer |

Zie [RFID-passen](/docs/getting-started/rfid-cards) voor het volledige verhaal, inclusief aanvragen.

## Een voertuig uitfaseren

Bij verkoop of buitengebruikstelling:

1. Laat de toestemming voor automatische herkenning intrekken en controleer dit met de accounthouder of accountmanager.
2. Ga er niet van uit dat alleen administratieve gegevens verwijderen voldoende is.
3. Controleer gekoppelde passen afzonderlijk en laat die zo nodig blokkeren.

De sessiehistorie blijft bewaard voor uw administratie; u verliest geen historische gegevens door een voertuig te verwijderen.

## Wat u niet kunt instellen

We zijn hier eerlijk over, want de vorige documentatie suggereerde meer:

- **Geen laadvermogen per voertuig** — het vermogen wordt bepaald door het EMS en wat het voertuig vraagt
- **Geen SoC-doel per voertuig** — het voertuig bepaalt tot welk niveau het laadt
- **Geen laadvensters per voertuig in het portaal** — laadvensters en budgetten spreken we per locatie met u af

Wat u wél instelt: welke voertuigen meetellen, onder welke groep of kostenplaats, en welke passen actief zijn.

## Verder lezen

- [Automatische herkenning instellen](/docs/plug-and-charge/setup-guide)
- [RFID-passen](/docs/getting-started/rfid-cards)
- [Team en rollen](/docs/klantportaal/team)
- [Facturering](/docs/klantportaal/invoicing)
