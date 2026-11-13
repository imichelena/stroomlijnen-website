---
sidebar_position: 4
title: Automatische herkenning instellen
description: Voertuig aanmelden op het laadscherm met een accountgebonden pas, EVCCID uitlezen en afzonderlijke goedkeuring.
keywords: [automatische herkenning instellen, EVCCID, voertuig aanmelden, koppelen]
---

# Automatische herkenning instellen

Stroomlijnen gebruikt bij ondersteunde DC-laders **EVCCID: het MAC-adres van de voertuigcommunicatiecontroller**. De lader leest dit bij het aansluiten uit. Een VIN of kenteken invoeren in het portaal activeert deze herkenning niet. Dit is geen authenticatie met ISO 15118-contractcertificaten.

## Voorbereiden

Gebruik een lader die de aanmeldfunctie aanbiedt en neem een **pas mee die aan uw account is gekoppeld**. Houd het kenteken en, bij huur, de einddatum bij de hand. Laat de laadkabel nog los: sluit pas aan wanneer het scherm daarom vraagt.

:::note Schermversies
De schermteksten en beschikbare stappen kunnen per softwareversie en configuratie verschillen. Volg het scherm op uw lader.
:::

## Aanmelden op het laadscherm

1. Kies in het menu **“Wilt u een nieuw voertuig toevoegen?”**. Op het welkomstscherm **“Voertuig toevoegen”** kiest u **“Begin”**.
2. Druk op **“Houd uw pas bij de lezer”** om de kaartlezer te activeren. **Houd daarna de pas bij de lezer.** Alleen dit scherm openen activeert de lezer niet. Na herkenning van een bekende pas gaat de aanmelding verder. Bij een onbekende pas gebruikt u een pas die aan uw account gekoppeld is. Na **“Opnieuw proberen”** drukt u opnieuw op de knop om de lezer te activeren.
3. Als **“Is dit een huurvoertuig?”** verschijnt, kies **“Ja”** of **“Nee”**. Bij Ja stelt u onder **“Tot wanneer?”** de einddatum in met de dag-, maand- en jaarknoppen. Kies **“Doorgaan”**. Deze stap hangt af van de configuratie.
4. Als **“Voer het kenteken in”** verschijnt, voer het kenteken in en kies **“Kenteken opzoeken”**. Controleer bij **“Klopt dit voertuig?”** merk, model en kleur. Kies **“Bevestigen”** als het klopt, of **“Wijzigen”** om het kenteken te corrigeren. Zonder RDW-resultaat kunt u met **“Doorgaan”** verder; de registratie krijgt dan geen RDW-bevestiging. Ook deze stap hangt af van de configuratie.
5. Sluit het voertuig **pas aan bij “Sluit nu uw voertuig aan.”** De lader wacht op de EVCCID en legt de gegevens na ontvangst automatisch vast. Er is geen afzonderlijk toestemmingsvakje of laatste akkoordknop in deze aanmeldprocedure.
6. Lees het resultaat. **“Klaar!”** met **“Uw voertuig is toegevoegd aan uw account.”** bevestigt het vastleggen. Het scherm kan ook melden dat het voertuig al geregistreerd was. Een verzonden bevestigingsmail wordt alleen gemeld als die is verzonden; een mailfout kan betekenen dat het voertuig **wel** is vastgelegd. Bij **“Niet gelukt”** is de aanmelding niet als geslaagd bevestigd: volg de melding en gebruik zo nodig **“Opnieuw proberen”** of **“Terug naar menu”**.

## Twee tijdslimieten

Vanaf **Begin** heeft de hele aanmelding **5 minuten**, dus inclusief het lezen van de pas en invoeren van gegevens. In de laatste minuut verschijnt een waarschuwing. Het uitlezen na aansluiten kan **tot 3 minuten** duren, maar alleen binnen de resterende totale tijd: dit zijn geen drie extra minuten. Bij verstreken tijd begint u opnieuw. Dit is niet de timer voor het starten van een gewone laadsessie.

**Terug** of de homeknop op eerdere stappen breekt de poging af; daarmee bladert u niet terug door ingevulde stappen.

## Vastgelegd is nog niet goedgekeurd

De accounthouder moet het voertuig afzonderlijk goedkeuren. Een geslaagde aanmelding of bevestigingsmail is **geen bewijs dat automatisch laden al is toegestaan**. De lader kan aangeven dat goedkeuring nog wordt afgewacht, geweigerd is of verlopen is. Laat de accounthouder dit via het [Klantportaal](https://portal.stroomlijnen.nl) controleren; vraag uw accountmanager om hulp als de beheeropties niet duidelijk zijn.

Na goedkeuring kunt u op een geschikte lader controleren of herkenning en autorisatie slagen. Een start blijft afhankelijk van voertuigcommunicatie, geldige toestemming en de laadvoorwaarden op de locatie. Volg het display; gebruik alleen een aangeboden en toegestane pas- of QR-optie als alternatief.

## Verder lezen

- [Wat is Plug & Charge?](/docs/plug-and-charge/what-is-pnc)
- [Compatibiliteit](/docs/plug-and-charge/compatible-vehicles)
- [Probleemoplossing](/docs/plug-and-charge/troubleshooting)
