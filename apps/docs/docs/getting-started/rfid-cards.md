---
sidebar_position: 3
title: RFID-passen
description: Hoe laadpassen bij Stroomlijnen werken, hoe u ze aanvraagt, aan een voertuig of persoon koppelt en weer blokkeert.
keywords: [RFID-pas, laadpas, NL*STM, pas aanvragen, pas blokkeren, Klantportaal]
---

# RFID-passen

Een RFID-pas is de eenvoudigste terugvaloptie: tikken en laden. Bij Stroomlijnen gebruikt u een pas vooral als **reserve** naast automatische voertuigherkenning, of voor voertuigen die (nog) niet automatisch herkend kunnen worden.

## Hoe het werkt

Elke pas heeft een unieke identificatie (de **UID**). Bij het tikken:

1. De lader leest de UID.
2. De lader vraagt via OCPP aan onze backend of deze pas mag laden.
3. Onze backend controleert of de pas actief is en bij welke organisatie hij hoort.
4. Is de pas geldig, dan start de sessie en wordt de energie op dat account geboekt.

De pas is een **betaalmiddel, geen sleutel**: hij zegt alleen *wie* er laadt, niet *of* het voertuig mag laden. De kosten komen op de factuur van de organisatie waar de pas bij hoort.

## Een pas aanvragen

Passen vraagt u aan via het [Klantportaal](/docs/klantportaal/overview) of via uw accountmanager. U geeft aan hoeveel passen u nodig heeft en waar ze naartoe moeten. Wij sturen ze vervolgens op.

Heeft u nog geen toegang tot het portaal? Vraag uw accountmanager om de eerste passen bij de onboarding mee te leveren.

:::note Aantallen en kosten
De voorwaarden rond aantallen, kosten en vervanging staan in uw overeenkomst — die verschillen per pakket. Er staan hier bewust geen bedragen, omdat ze per klant en per jaar kunnen afwijken. Uw actuele voorwaarden vindt u in het Klantportaal onder **Account**.
:::

## Een pas koppelen

Een pas is pas bruikbaar als hij bekend is bij ons **en** gekoppeld is aan uw organisatie.

1. Open in het Klantportaal het onderdeel voor laadpassen (uw accountmanager wijst u waar dat staat).
2. Controleer of de nieuwe pas in de lijst staat (dit kan even duren na levering).
3. Koppel de pas aan een **voertuig** of aan een **persoon**:
   - **Aan een voertuig** — de sessie wordt altijd aan dat voertuig toegeschreven. Handig als één auto door meerdere mensen wordt gereden.
   - **Aan een persoon** — de sessie volgt de persoon, ongeacht in welke auto hij of zij rijdt.
4. Test de pas bij een lader.

Door passen consequent toe te wijzen, klopt uw rapportage: u ziet per voertuig of per persoon wat er geladen is.

## Een pas blokkeren

Bij verlies, diefstal of vertrek van een medewerker:

1. Open in het Klantportaal het overzicht van laadpassen.
2. Zoek de pas en zet hem op **geblokkeerd**.

Een geblokkeerde pas kan niet meer starten. Wat al geladen is vóór het blokkeren, blijft gewoon op de factuur staan.

:::warning Blokkeer bij verlies altijd meteen
Tot het moment van blokkeren kan iedereen met de pas laden op uw account. Blokkeren is direct en onomkeerbaar in de zin dat u de pas opnieuw moet aanmelden als hij teruggevonden wordt — dat is precies de bedoeling.
:::

## Pas of automatische herkenning?

| | RFID-pas | Automatische voertuigherkenning |
|---|---|---|
| Nodig bij de lader | Pas tikken | Niets doen |
| Wat het identificeert | De pas (en dus de persoon of het voertuig waaraan hij hangt) | Het voertuig zelf |
| Kwijt te raken | Ja | Nee |
| Werkt bij andermans laadnet | Alleen als er een roamingkoppeling is (bij ons standaard uit, zie [roaming](/docs/pandeneigenaren/cpo-roaming-uitgelegd)) | Nee, alleen bij ons |
| Geschikt als terugvaloptie | Ja, altijd | Nee, als het voertuig niet herkend wordt is er niets |

**Advies:** gebruik automatische herkenning waar het kan en houd een pas per voertuig of per chauffeur als terugvaloptie. Zo hoeft niemand te wachten als de herkenning een keer niet lukt.

## Volgende stappen

- [Plug & Charge instellen](/docs/plug-and-charge/setup-guide)
- [Voertuigen beheren](/docs/klantportaal/vehicles)
- [Uw facturen begrijpen](/docs/klantportaal/invoicing)
