---
sidebar_position: 1
title: Wat is Plug & Charge?
description: Inpluggen en laden zonder pas of app — wat Plug & Charge is, welke twee varianten er zijn, en wat Stroomlijnen vandaag levert.
keywords: [Plug and Charge, automatische herkenning, inpluggen, laden zonder pas, EVCCID]
---

# Wat is Plug & Charge?

Automatische herkenning kan laden zonder pas of app bij iedere volgende sessie mogelijk maken. Daarvoor moeten herkenning én autorisatie slagen. Alleen een kabel aansluiten garandeert geen start.

## Twee verschillende technieken

| | Automatische voertuigherkenning bij Stroomlijnen | ISO 15118-contractcertificaten |
|---|---|---|
| Identiteit | EVCCID: het MAC-adres van de voertuigcommunicatiecontroller | Een contractcertificaat in het voertuig |
| Aanmelden | Met een accountgebonden pas op het laadscherm; de lader leest de EVCCID uit | Certificaatvoorziening via de ondersteunde contract- en voertuigketen |
| Toestemming | Afzonderlijke goedkeuring door de accounthouder en geldige laadrechten | Verificatie van certificaat en contractautorisatie |
| Andere operators | Registratie geeft geen automatisch recht bij andere operators | Alleen bij compatibele systemen met passende vertrouwens- en contractafspraken |

## Wat Stroomlijnen gebruikt

De huidige herkenning op ondersteunde DC-laders gebruikt **EVCCID/MAC, niet het VIN** en niet een ISO 15118-contractcertificaat. Kenteken en voertuiggegevens helpen bij de administratie; zij vervangen het uitlezen van de EVCCID niet.

De chauffeur meldt het voertuig aan op het laadscherm met een pas die bij het account hoort. De accounthouder keurt het voertuig afzonderlijk goed. Zie [Instellen](/docs/plug-and-charge/setup-guide) voor de stappen. Registratie in het portaal alleen is geen activering.

## Wat dit wel en niet bewijst

Een MAC-adres is een identifier, **geen cryptografisch bewijs van een contract of voertuigidentiteit**. Verwar herkenning daarom niet met certificaatauthenticatie of een garantie tegen nabootsing. De koppeling aan het account en de toestemming bepalen of er geladen mag worden. Wie een goedgekeurd voertuig gebruikt, kan daarmee toegang tot laden op dat account hebben.

Laat bij verkoop, verhuur of ongewenst gebruik de toestemming controleren of intrekken en controleer gekoppelde passen afzonderlijk. Een huurregistratie kan een einddatum hebben.

## Voorwaarden en beperkingen

- De lader moet deze herkennings- en aanmeldfunctie ondersteunen.
- Het voertuig moet een bruikbare EVCCID leveren; een CCS-aansluiting alleen bewijst dat niet.
- De registratie moet aan het juiste account gekoppeld en goedgekeurd zijn; geweigerde of verlopen toestemming is niet voldoende.
- Voertuig, lader en locatie moeten laden toestaan. Een geregistreerd voertuig start niet onder alle omstandigheden.

Raadpleeg [Compatibiliteit](/docs/plug-and-charge/compatible-vehicles) en volg de instructies op het display. Een aangeboden pas- of QR-optie kan een alternatief zijn, maar omzeilt geen laadstoring of ontbrekende rechten.

## Verder lezen

- [Instellen](/docs/plug-and-charge/setup-guide)
- [Probleemoplossing](/docs/plug-and-charge/troubleshooting)
- [ISO 15118 verdieping](/docs/technical/iso-15118)
