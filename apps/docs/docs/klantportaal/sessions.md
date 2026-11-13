---
sidebar_position: 3
title: Sessies
description: Laadsessies bekijken, filteren, begrijpen en exporteren — inclusief de vermogenscurve en wat de cijfers wel en niet zeggen.
keywords: [laadsessies, sessiehistorie, export, CSV, vermogenscurve, energie per sessie]
---

# Sessies

Elke laadsessie wordt vastgelegd: wanneer, waar, hoeveel energie, tegen welk tarief en hoe er is geauthenticeerd.

## Actieve sessies

Bovenaan ziet u wat er nu laadt:

- welk voertuig
- op welke locatie en welk laadpunt
- sinds wanneer
- hoeveel kWh er tot nu toe is geleverd
- het actuele vermogen

Het vermogen wordt met een interval bijgewerkt, niet continu. Een scherm dat "60 kW" toont terwijl het voertuig net terugregelt, loopt dus even achter. Voor een exact beeld gebruikt u de vermogenscurve achteraf.

## Sessiehistorie

Filter op:

- **periode** (dag, week, maand, aangepast bereik)
- **voertuig** of voertuiggroep
- **locatie**
- **wijze van authenticatie** (automatische herkenning, pas, QR)

## Wat een sessie bevat

| Veld | Betekenis |
|---|---|
| Start en einde | Tijdstip, inclusief tijdzone |
| Duur | Van aansluiten tot stop |
| Energie | Geleverde kWh |
| Maximaal vermogen | De hoogste piek tijdens de sessie |
| Gemiddeld vermogen | Energie gedeeld door tijd — meestal het eerlijkste getal |
| Tarief en kosten | Welk tarief gold en wat het kostte |
| Wijze van authenticatie | Hoe de sessie is gestart |
| Laadpunt | Locatie en EVSE-ID |

:::note SoC ontbreekt vaak
De accustatus (SoC) wordt lang niet door alle voertuigen doorgegeven. Staat er niets, dan deelde het voertuig het niet — dat is geen fout in onze administratie.
:::

## De vermogenscurve lezen

Een DC-sessie ziet er meestal zo uit:

1. **Start** — het vermogen loopt op terwijl voertuig en lader onderhandelen
2. **Plateau** — het maximum dat het voertuig aankan, of het maximum dat de locatie toelaat
3. **Afloop** — boven roughly 60–80% SoC zakt het vermogen geleidelijk in
4. **Einde** — bij het doel of bij handmatig stoppen

Een "dip" midden in het plateau is meestal het EMS dat het vermogen terugneemt omdat het gebouw het nodig had. Dat is zichtbaar in de curve en te herleiden in het portaal.

## Exporteren

Elke gefilterde weergave is te downloaden als **CSV**. Gebruik dat voor:

- kosten toewijzen aan kostenplaatsen
- analyse in Excel of een BI-tool
- controle van de factuur

Zie [Koppelingen en data-export](/docs/technical/integration) voor structurele integratie.

## Verder lezen

- [Facturering](/docs/klantportaal/invoicing)
- [Energiebudgetten en reserveringen](/docs/energie/energiebudget)
- [Wat doet een EMS?](/docs/energie/ems)
