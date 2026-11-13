---
sidebar_position: 1
title: ElaadNL en open standaarden
description: Waarom we de standaarden van ElaadNL en de Open Charge Alliance volgen, en wat dat in de praktijk betekent.
keywords: [ElaadNL, OCPP, OCPI, ISO 15118, standaarden, interoperabiliteit, Open Charge Alliance]
---

# ElaadNL en open standaarden

De laadsector draait op open standaarden. Wij volgen die standaarden en de richtlijnen die in Nederland door [ElaadNL](https://elaad.nl) en internationaal door de **Open Charge Alliance** worden onderhouden — niet omdat het verplicht is, maar omdat het de enige manier is om niet vast te lopen in een eigen ecosysteem.

:::note Over "partnerschap"
Wij zijn geen deelnemer aan ElaadNL-programma's en hebben geen formele partnerschapsovereenkomst met ElaadNL. Wat we doen is hun **publicaties en standaarden volgen** en onze implementaties daaraan toetsen. De vorige versie van deze pagina suggereerde meer dan dat; dat is gecorrigeerd.
:::

## Wat ElaadNL doet

ElaadNL is het Nederlandse kenniscentrum voor laadinfrastructuur, opgericht door de netbeheerders. Het werk dat voor ons relevant is:

- **Interoperabiliteitstests** — vaststellen of laders, voertuigen en backend-systemen samenwerken
- **Protocolkennis** — bijdragen aan en uitleg over OCPP, OCPI en ISO 15118
- **Netimpactonderzoek** — wat massaal laden met het net doet, en hoe je dat spreidt
- **Kennisdeling** — publicaties en de jaarlijkse Kennisdag

## Welke standaarden wij volgen

| Standaard | Waarvoor | Onze implementatie |
|---|---|---|
| **OCPP 2.0.1** | Lader ↔ backend | Onze DC-laders |
| **OCPP 1.6J** | Lader ↔ backend | Onze AC-laders |
| **OCPI 2.2.1** | CPO ↔ eMSP (roaming) | Aanwezig; bij laders bewust uit, zie [roaming](/docs/pandeneigenaren/cpo-roaming-uitgelegd) |
| **ISO 15118** | Voertuig ↔ lader (o.a. Plug & Charge) | Voertuigherkenning in gebruik; certificaatvariant in ontwikkeling |
| **IEC 61851** | Veiligheid en signalering op de kabel | Basis van elke CCS-verbinding |
| **IEC 62196** | Connectoren (Type 2, CCS) | Standaard op al onze laadpunten |

## Waarom standaarden alleen niet genoeg zijn

Een veelgehoorde aanname is dat "open standaard" automatisch interoperabiliteit betekent. In de praktijk niet:

- Twee partijen kunnen beide OCPP-compliant zijn en toch verschillen in wat zeimplementeren.
- De standaard beschrijft berichten, niet het gedrag in randgevallen (wat gebeurt er als een sessie eindigt terwijl de stekker nog zit?).
- Beveiliging is grotendeels buiten de standaard geregeld.

Daarom testen we elke combinatie van lader, firmware en voertuig voordat we iets in bedrijf nemen, en werken we met een eigen testopstelling naast de productieomgeving.

## Netbewust laden en GACS

ElaadNL onderzoekt al jaren hoe laden het net beïnvloedt en hoe je dat spreidt. Die kennis landt in Nederland onder meer in **GACS** (Generic Adaptive Charging Specification), een specificatie waarmee een netbeheerder of aggregator signalen kan afgeven over beschikbare netcapaciteit.

Onze energiebeheersystemen zijn in staat om op zulke signalen te reageren — het is dezelfde logica als het per-fase budget dat we al gebruiken. Zie [Wat doet een EMS?](/docs/energie/ems).

## Verder lezen

- [OCPP-overzicht](/docs/technical/ocpp-overview)
- [ISO 15118 verdieping](/docs/technical/iso-15118)
- [Roaming uitgelegd](/docs/pandeneigenaren/cpo-roaming-uitgelegd)
- [Netcongestie](/docs/energie/netcongestie)
