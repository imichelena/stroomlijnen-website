---
sidebar_position: 3
title: Welke voertuigen kunnen dit?
description: Waar compatibiliteit van afhangt, hoe u het voor uw voertuig controleert, en waarom wij geen vaste merkenlijst publiceren.
keywords: [compatibiliteit, CCS2, ISO 15118, Plug and Charge voertuigen, EVCCID, merken]
---

# Welke voertuigen kunnen dit?

**Kunnen laden** en **automatisch herkend worden** zijn verschillende vragen. Een passende stekker is geen garantie voor automatische herkenning of voor een geslaagde laadsessie.

## Laden met een kabel

Voor onze DC-laders is CCS Combo 2 de relevante aansluiting. Controleer ook de elektrische specificaties, voertuigondersteuning en toegang op de locatie. Voor AC-laden met Type 2 gelden andere voorwaarden; de hier beschreven DC-aanmelding bewijst geen AC-compatibiliteit.

## Automatische herkenning

De huidige herkenning gebruikt **EVCCID: het MAC-adres van de voertuigcommunicatiecontroller**, niet het VIN. Voor gebruik moet:

- de lader de functie ondersteunen;
- het voertuig een bruikbare, bij volgend gebruik herkenbare EVCCID leveren;
- die identifier via de [aanmeldprocedure](/docs/plug-and-charge/setup-guide) aan het juiste account zijn gekoppeld;
- de accounthouder afzonderlijk toestemming hebben gegeven en die toestemming nog geldig zijn.

Een CCS-aansluiting, een ingevuld VIN of een vermelding dat het voertuig ISO 15118 ondersteunt bewijst niet dat deze MAC-gebaseerde herkenning werkt. Certificaatgebaseerde Plug & Charge is een andere techniek.

## Per voertuig controleren

Voertuiguitvoering en software kunnen het gedrag beïnvloeden. Daarom staat hier geen universele merkenlijst of garantie voor alle moderne EV's. Controleer het concrete voertuig op een geschikte lader: lukt het uitlezen tijdens de aanmelding, is de registratie bevestigd en werkt herkenning bij later aansluiten na goedkeuring?

Bij vragen geeft u merk, model, bouwjaar, kenteken, locatie en de schermmelding door aan uw accountmanager. Een VIN kan nuttige voertuigmetadata zijn, maar vervangt deze test of de EVCCID-registratie niet. Er is geen vaste doorlooptijd voor zo'n onderzoek toegezegd.

## Als automatisch starten niet lukt

Volg de instructies op de lader. Gebruik een aangeboden en toegestane RFID- of QR-optie als die beschikbaar is. Die alternatieven garanderen geen start bij een communicatieprobleem, laadstoring of ontbrekende laadrechten.

## Verder lezen

- [Wat is Plug & Charge?](/docs/plug-and-charge/what-is-pnc)
- [Instellen](/docs/plug-and-charge/setup-guide)
- [Probleemoplossing](/docs/plug-and-charge/troubleshooting)
