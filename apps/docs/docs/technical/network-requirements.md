---
sidebar_position: 3
title: Netwerkvereisten voor een laadlocatie
description: Wat een laadpunt nodig heeft aan internet, firewall, DNS en tijd — en hoe u een offline lader herkent en oplost.
keywords: [netwerkvereisten, firewall, VLAN, DHCP, DNS, NTP, laadpaal offline, connectiviteit]
---

# Netwerkvereisten voor een laadlocatie

Een laadpunt heeft een internetverbinding nodig om te communiceren met ons beheersysteem. Het verbruikt weinig, maar het moet **betrouwbaar** zijn: een lader die offline staat kan geen pas autoriseren en geen sessie factureren.

## Connectiviteit

- **Bandbreedte:** ruim voldoende met 1 Mbps per lader; 10 Mbps gedeeld voor een tiental laders is comfortabel
- **Latentie:** minder dan 200 ms naar onze backend is prima
- **Protocol:** WebSocket over TLS (`wss://`)
- **Uitgaand only** — de lader initieert zelf de verbinding; er hoeven **geen inkomende poorten** open

:::note Over 4G
Sommige laders hebben een eigen 4G-modem, andere niet. Reken er niet op tenzij het expliciet is afgesproken en de SIM actief is. Een 4G-verbinding is bruikbaar voor OCPP-verkeer maar ongeschikt voor firmware-updates.
:::

## Firewall

Staat er een firewall tussen het laadnetwerk en internet, dan moet het volgende **uitgaand** zijn toegestaan:

| Bestemming | Poort | Protocol | Waarvoor |
|---|---|---|---|
| `ocpp.stroomlijnen.nl` | 443 | TCP (WSS) | OCPP-verbinding met de backend |
| NTP-server (onze of een publieke pool) | 123 | UDP | Tijdsynchronisatie |
| Firmware-/updatelocatie | 443 | TCP (HTTPS) | Alleen nodig tijdens een update |

Exacte hostnamen en een testendpoint krijgt u bij de inbedrijfname. Wijzigt er iets aan de netwerkinrichting, meld het dan vóór de wijziging — een firewallaanpassing is de meest voorkomende oorzaak van een "spontaan offline" geraakte lader.

## Netwerkisolatie

Plaats laders bij voorkeur op een **eigen VLAN**, gescheiden van het kantoornetwerk:

- het laadverkeer mengt zich niet met bedrijfsverkeer
- firewallregels blijven overzichtelijk
- het aanvalsoppervlak is kleiner
- u kunt QoS toepassen als de uplink gedeeld is

Dit is geen luxe: laadinfrastructuur is kritieke infrastructuur, en een compromis op een laptop mag nooit direct bij de laders kunnen.

## IP-adressering en DNS

- **DHCP** heeft de voorkeur; statisch kan als de netwerkbeheerder dat eist
- **IPv4** is nodig voor de verbinding met de backend
- **IPv6** wordt intern gebruikt op de laadkabel (ISO 15118), niet voor de backend-koppeling
- **DNS** moet werken: geef een resolver mee via DHCP, of configureer er een statisch (een publieke resolver als terugval is verstandig)

## Tijd

Nauwkeurige tijd is geen detail:

- certificaatcontrole hangt op geldigheidsdatums
- meetwaarden en facturatie hangen op tijdstempels
- logbestanden zijn waardeloos zonder kloppende tijd

Zorg voor NTP. Wijkt de klok van een lader ver, dan zie je dat terug als sessies die op de verkeerde dag geboekt staan of autorisaties die onverklaarbaar falen.

## Wat er werkelijk over de lijn gaat

| Activiteit | Omvang | Frequentie |
|---|---|---|
| Heartbeat | ~1 KB | Elke paar minuten |
| Autorisatie | ~2 KB | Per sessie |
| Meterwaarden | ~1 KB | Elke 15 seconden tot enkele minuten |
| Start/stop | ~3 KB | Per gebeurtenis |
| Firmware-update | tientallen tot honderden MB's | Zeldzaam |

Een lader die staat te wachten verstuurt vrijwel niets. De verbinding is klein maar **continu** — een firewall die langlevende WebSockets na een tijdje kapt, veroorzaakt precies het soort "hij valt elke paar uur weg" dat moeilijk te vinden is.

## Lader staat offline — wat nu?

1. Controleer de **link** op de lader en de switchpoort (LED's).
2. Controleer of DHCP een adres uitdeelt (DHCP-log).
3. Test **DNS** vanuit hetzelfde subnet — kan de lader onze hostname vinden?
4. Test of **443 uitgaand** open is naar `ocpp.stroomlijnen.nl`.
5. Controleer of er recent iets aan de firewall of het VLAN is veranderd.
6. Pas daarna de lader herstarten.

Meld een lader die langer dan een paar minuten offline staat; wij zien het aan onze kant ook en kunnen vaak op afstand vaststellen of het aan de verbinding of aan de lader ligt.

## Verder lezen

- [OCPP-overzicht](/docs/technical/ocpp-overview)
- [Locatiegids](/docs/locations/site-guide)
- [Storingen melden](/docs/locations/site-guide#storingen-melden)
