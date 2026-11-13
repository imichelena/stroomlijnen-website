---
sidebar_position: 4
title: Koppelingen en data-export
description: Hoe u laadgegevens uit het Klantportaal haalt, wat er met CSV kan en welke koppelingen (OCPI, API) op aanvraag mogelijk zijn.
keywords: [API, koppeling, export, CSV, OCPI, integratie, boekhouding, ERP]
---

# Koppelingen en data-export

Uw laadgegevens zijn van u. Er zijn drie niveaus waarop u ze kunt gebruiken, van simpel naar technisch.

## 1. Exporteren uit het Klantportaal

Het eenvoudigste en voor de meeste organisaties toereikende antwoord:

- **Sessies** — filter op periode, voertuig of locatie en download als **CSV**
- **Facturen** — downloaden als PDF, met de sessiedetails erbij
- **Tarieven** — inzien per locatie en per tarief

Dat dekt boekhouding, kostenplaatsen en de meeste rapportagevragen. Zie [Sessies](/docs/klantportaal/sessions) en [Facturering](/docs/klantportaal/invoicing).

## 2. Koppelingen op aanvraag

Voor structurele integratie met een ERP, vlootmanagementsysteem of boekhoudpakket zijn er mogelijkheden, maar die zijn **maatwerk en geen selfservice**:

| Koppeling | Waarvoor | Status |
|---|---|---|
| **OCPI** (CPO ↔ eMSP) | Roaming: dat een andere eMSP bij ons kan laden, of wij bij hen | Technisch aanwezig (OCPI 2.2.1); bij onze laders bewust uit, op verzoek bilateraal aan te zetten |
| **OCPI publicatie** | Uw laadpunten zichtbaar maken in publieke kaarten en databanken | In voorbereiding |
| **Maatwerk-API** | Uw systeem leest sessies of schrijft voertuigen | Op aanvraag, per klant |

:::warning Geen openbare API met publieke documentatie
Er bestaat op dit moment **geen** openbare REST-API met documentatie, sleutels en snelheidslimieten die u zelf kunt aanzetten. Als u die elders heeft zien staan: dat klopt niet meer. Vraag een koppeling aan via uw accountmanager; we bespreken dan wat er nodig is en of het past.
:::

## 3. Wat OCPI wel en niet is

OCPI is het protocol voor **roaming** tussen partijen, niet voor "geef mij mijn data". Het is geen vervanging voor een export of een rapportagekoppeling. Zie [Roaming uitgelegd](/docs/pandeneigenaren/cpo-roaming-uitgelegd).

## Wat u van een export kunt verwachten

Een sessie-export bevat per sessie in ieder geval:

- datum en tijd van start en einde
- locatie en laadpunt (EVSE-ID)
- voertuig (kenteken en/of VIN, voor zover bekend)
- geleverde energie in kWh
- gebruikt tarief en kosten
- wijze van authenticatie (automatische herkenning, pas, QR)

Wat er **niet** in staat: gegevens die het voertuig niet deelt. Deaccu-status (SoC) wordt lang niet door alle voertuigen doorgegeven; als die ontbreekt is dat geen fout in de export.

## Verder lezen

- [Sessies](/docs/klantportaal/sessions)
- [Facturering](/docs/klantportaal/invoicing)
- [Roaming uitgelegd](/docs/pandeneigenaren/cpo-roaming-uitgelegd)
