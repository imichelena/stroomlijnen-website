---
sidebar_position: 2
title: Uw eerste laadsessie
description: Stapsgewijze uitleg van een laadsessie bij een Stroomlijnen-lader — van aankomst tot ontkoppelen, inclusief wat er mis kan gaan.
keywords: [eerste laadsessie, CCS2, RFID, Plug and Charge, laden vrachtwagen]
---

# Uw eerste laadsessie

Of u vlootbeheerder bent die alles inricht of chauffeur die voor het eerst bij de lader staat: hier staat wat er gebeurt.

## Voordat u aankomt

### Als vlootbeheerder

1. **Registreer uw organisatie** — via [stroomlijnen.nl](https://stroomlijnen.nl) of uw accountmanager. U krijgt toegang tot het [Klantportaal](/docs/klantportaal/overview).
2. **Regel de voertuigaanmelding** voor automatische herkenning: met een accountgebonden pas op het laadscherm wordt de EVCCID (het MAC-adres van de voertuigcommunicatiecontroller) uitgelezen. Laat de accounthouder daarna afzonderlijk goedkeuren. Een VIN invoeren is geen activering. Zie [Instellen](/docs/plug-and-charge/setup-guide).
3. **Kies hoe er geauthenticeerd wordt:**
   - **Automatische voertuigherkenning** — bij ondersteunde voertuigen met een geldige, goedgekeurde registratie kan herkenning bij het inpluggen de pas vervangen (zie [Plug & Charge](/docs/plug-and-charge/what-is-pnc))
   - **RFID-pas** — zie [RFID-passen](/docs/getting-started/rfid-cards)
   - **QR-code in de app** — voor incidenteel gebruik
4. **Informeer uw chauffeurs** over de locatie, de toegang en het laadtarief.

### Als chauffeur

- Zorg dat u weet **hoe u mag starten**: automatisch bij inpluggen, of met een pas of QR-code
- Controleer het **accuniveau** en plan de laadtijd
- Weet waar de **laadplek** is en of er een slagboom of hek is

## Bij de lader

Deze stappen zijn voor een gewone laadsessie. **Een nieuw voertuig aanmelden?** Open eerst de [aanmeldprocedure](/docs/plug-and-charge/setup-guide) en sluit pas aan wanneer die daarom vraagt.

### Stap 1 — Parkeren en aansluiten

1. Rijd naar een vrije laadplek.
2. Zet het voertuig uit (sommige trucks vereisen dat, andere niet — zie de merkinstructie).
3. Open de laadklep en sluit de **CCS Combo 2**-kabel aan. De stekker past maar op één manier; niet forceren.

### Stap 2 — Authenticeren

**Automatische herkenning:** wacht op de displaymelding. De lader controleert de EVCCID en toestemming; alleen een bekende registratie garandeert geen start. Bij wachten op goedkeuring, weigering of verlopen toestemming moet de accounthouder dit controleren.

**RFID-pas:** pas tegen de lezer houden en wachten op bevestiging op het display.

**QR-code (app):** QR scannen op het display en de sessie starten in de app.

### Stap 3 — Laden volgen

Het display toont het actuele vermogen (kW) en de geleverde energie (kWh). U ziet dezelfde sessie terug in het Klantportaal.

Hoe snel het gaat hangt af van vier dingen:

1. het **vermogen van de lader** (bij ons 120 kW per unit, gedeeld als er twee voertuigen laden)
2. wat het **voertuig** aankan
3. de **accutemperatuur** en het **laadniveau** (boven ~80% loopt de snelheid sterk terug)
4. het **vermogen dat op dat moment beschikbaar is** op de locatie — het EMS knijpt het laden terug als het gebouw het vermogen zelf nodig heeft

Dat laatste is geen storing. Zie [Waarom laadt mijn voertuig langzamer dan verwacht?](/docs/energie/ems#eerlijk-traag).

### Stap 4 — Ontkoppelen

1. **Stop de sessie** — pas opnieuw tikken, of stoppen in de app, of de stopknop op de lader.
2. **Wacht** tot de lader bevestigt dat de connector ontgrendeld is.
3. Kabel eruit, terug in de houder, laadklep dicht.

:::caution
De connector is vergrendeld zolang de sessie loopt. Trek nooit aan de kabel tijdens het laden — stop eerst.
:::

:::note Sessie stopt, voertuig blijft staan
Als een sessie eindigt terwijl de kabel nog aangesloten zit (accu vol, of op afstand gestopt), start er **niet** automatisch een nieuwe sessie. U moet de kabel eruit halen en opnieuw inpluggen, of expliciet starten met pas of QR. Zo voorkom je dat een auto urenlang opnieuw gaat laden zonder dat iemand het weet.
:::

## Wat als er iets misgaat?

| Probleem | Wat te doen |
|---|---|
| Pas wordt niet herkend | Controleer in het Klantportaal of de pas actief is. Houd de pas langer of dichter bij de lezer. |
| Automatische herkenning start niet | Is de EVCCID vastgelegd en is de toestemming van de accounthouder geldig? Zie [Probleemoplossing](/docs/plug-and-charge/troubleshooting). |
| Lader toont een foutmelding | Noteer de melding en het lader-ID (op het apparaat) en meld het. Zie [Storingen melden](/docs/locations/site-guide#storingen-melden). |
| Laden gaat langzaam | Meestal normaal: koude accu, hoog laadniveau, of weinig ruimte op de aansluiting op dat moment. |
| Kabel komt niet los | Sessie is nog niet volledig gestopt. Stop opnieuw en wacht op de ontgrendeling. |
| Sessie stopt steeds opnieuw | Sessie-einde terwijl de stekker nog zit → kabel eruit en opnieuw inpluggen. |

## Volgende stappen

- [RFID-passen](/docs/getting-started/rfid-cards)
- [Plug & Charge instellen](/docs/plug-and-charge/setup-guide)
- [Uw facturen begrijpen](/docs/klantportaal/invoicing)
