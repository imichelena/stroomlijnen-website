---
sidebar_position: 7
title: Subsidies for charging infrastructure
description: SPRILA in 2026 — amounts, conditions, calculation method and the mistakes that cause applications to be rejected. Plus KIA and EIA.
keywords: [SPRILA, subsidy, RVO, charging infrastructure, battery, KIA, EIA, eHerkenning, AGVV]
---

# Subsidies for charging infrastructure

For charging infrastructure at businesses there is one scheme in the Netherlands that really matters: **SPRILA**. In addition, there are tax schemes (KIA, EIA) that ease the investment.

:::warning Always check the current version
Subsidy amounts and conditions change annually. The figures below reflect the position in **2026** and have been verified against the RVO sources listed at the bottom. Before an application, always check the current RVO page — and submit the application **before** you place the order.
:::

## SPRILA

SPRILA stands for the **Subsidieregeling Private Laadinfrastructuur bij bedrijven** (Private Charging Infrastructure at Businesses Subsidy Scheme), administered by RVO. The scheme subsidises charging stations (and, in combination with them, stationary batteries) at businesses, with the requirement that the charging infrastructure remains accessible to third parties for at least 24 months.

**Note the name:** it is therefore *not* a scheme for *public* charging infrastructure. If you come across that wording somewhere, the text is outdated.

### Amounts for charging stations (2026)

For AC, the capacity is determined by the maximum capacity of the **charging point**; for DC, by the **total capacity of the station**. The SME rate is double the large-enterprise rate.

| Category | Large enterprise | SME |
|---|---|---|
| AC ≥ 11 kW (1 charging point) | € 400 | € 800 |
| AC dual post 2× 11 kW | € 800 | € 1.600 |
| AC ≥ 43 kW | € 880 | € 1.760 |
| AC dual post 2× 43 kW | € 1.760 | € 3.520 |
| DC ≥ 20 kW | € 1.950 | € 3.900 |
| DC ≥ 50 kW | € 4.880 | € 9.760 |
| **DC ≥ 100 kW** | € 8.850 | **€ 17.700** |
| DC ≥ 150 kW | € 12.200 | € 24.400 |
| DC ≥ 220 kW | € 15.500 | € 31.000 |
| DC ≥ 350 kW | € 26.250 | € 52.500 |
| DC ≥ 550 kW | € 44.000 | € 88.000 |

:::note Our 120 kW charger falls in the DC ≥ 100 kW category
That means € 17.700 subsidy per station for SMEs — provided the total amount fits within the state aid ceiling. See the calculation method below.
:::

### Amounts for stationary battery

| Parameter | Value |
|---|---|
| Amount | **€ 85/kWh** (SME), € 60/kWh (large enterprise) |
| Maximum subsidised | **1,000 kWh** per charging space |
| C-rate (kW/kWh) | **≤ 0.5** |
| Discharge to charging stations | **≥ 70%** of discharged energy demonstrably to charging stations |
| Combination | Only eligible **together with** at least one eligible charging station |

### General conditions

| Condition | Value |
|---|---|
| Minimum subsidy amount | **€ 2.500 per location** — below that nothing is paid out |
| State aid ceiling (AGVV) | Maximum **40%** of eligible costs (SME), 20% large enterprise |
| Application before construction | Mandatory for an investment **above € 25.000** |
| Accessibility | ≥ 24 months after determination, for third parties |
| Application | **eHerkenning level 3**; SME statement for the SME rate |

:::warning Two things that often go wrong
1. **€ 25.000 is not the minimum amount** but the threshold above which you must apply *before the commission*. The minimum is **€ 2.500 subsidy per location**.
2. **DC is subsidised from 20 kW**, not from 100 kW. A 50 kW charger is therefore indeed eligible.
:::

### Calculation method

```
per station:  amount    = tier(power, category)
gross     = sum of all amounts (DC + AC)
headroom  = 0.40 × eligible investment costs          (SME)
subsidy   = min(gross, headroom)
if subsidy < € 2,500 per location  →  no subsidy
battery   = min(kWh, 1000) × € 85, provided C-rate ≤ 0.5 and ≥ 70% to charging points
```

The **state aid ceiling** is therefore usually the limiting factor, not the scale. Anyone installing six charging stations soon runs up against the 40% cap.

## Tax schemes

### KIA — small-scale investment allowance

A deduction on your total investments in business assets per calendar year, with a graduated scale. Charging infrastructure and batteries may fall under it. Conditions: at least € 450 per business asset.

The KIA reduces your profit and therefore your tax; it is not a subsidy you receive.

### EIA — energy investment allowance

The EIA gives an extra deduction for energy-saving business assets that appear on the year's **Energy List**. Whether your specific configuration is on it depends on the annual list — check that before purchase, not after.

## Provincial and municipal schemes

Some provinces and municipalities have additional schemes, for example for charging infrastructure at non-profit institutions. These are not bundled centrally and change often. Check the website of your province and municipality, or ask the local business association.

## Practical order

1. **Determine the configuration** (capacity, number, battery or not) on the basis of an analysis of your own data
2. **Check the current SPRILA conditions** on rvo.nl
3. **Submit the application** — before the commission, with eHerkenning level 3
4. **Wait for the decision** — only then order definitively
5. **Keep all invoices** — the accountability requires specification per item
6. **Arrange accessibility** — 24 months, and that must be demonstrable

## Sources

- SPRILA, purchase: [rvo.nl/subsidies-financiering/laadinfrastructuur/sprila-aanschaf](https://www.rvo.nl/subsidies-financiering/laadinfrastructuur/sprila-aanschaf)
- SPRILA, calculation examples: [rvo.nl/subsidies-financiering/laadinfrastructuur/rekenvoorbeelden-sprila](https://www.rvo.nl/subsidies-financiering/laadinfrastructuur/rekenvoorbeelden-sprila)
- KIA and EIA: [belastingdienst.nl](https://www.belastingdienst.nl) and [rvo.nl](https://www.rvo.nl)

## Further reading

- [Battery storage](/en/docs/energie/ess)
- [Revenue model](/en/docs/pandeneigenaren/verdienmodel)
- [From decision to first charging session](/en/docs/pandeneigenaren/installatie)
