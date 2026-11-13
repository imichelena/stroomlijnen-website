---
sidebar_position: 100
title: Veelgestelde vragen
description: Antwoorden op de vragen die we het vaakst krijgen over laden bij Stroomlijnen — techniek, kosten, roaming, Plug & Charge en vermogen.
keywords: [FAQ, veelgestelde vragen, laden, tarieven, roaming, Plug and Charge, netcongestie]
---

# Veelgestelde vragen

## Algemeen

### Wat is Stroomlijnen?
Een Nederlandse Charge Point Operator (CPO) en e-Mobility Service Provider (eMSP). We plaatsen laadinfrastructuur bij locaties met een grote elektriciteitsaansluiting — theaters, culturele instellingen, hotels en bedrijven — en beheren het vermogen op die locaties. Zie [Wat is Stroomlijnen?](/docs/getting-started/intro).

### Waarom juist bij theaters?
Theaters hebben een grote aansluiting die overdag grotendeels onbenut is, ruimte voor een vrachtwagen, en 's avonds een gebouwpiek — precies het profiel waarin laden past. Bovendien moet de culturele sector als eerste over op elektrisch vanwege de zero-emissiezones.

### Werken jullie alleen met theaters?
Nee. Dezelfde aanpak werkt voor hotels (laden als kamervoorziening) en bedrijven (wagenpark op eigen terrein, binnen de bestaande aansluiting).

### Kunnen personenauto's bij jullie laden?
Personenauto’s met CCS Combo 2 kunnen in aanmerking komen voor onze DC-laders; controleer voertuigcompatibiliteit en toegang op de locatie. Onze laadplekken zijn wel op bedrijfsvoertuigen ontworpen: ruimere vakken, hogere kabelhouders.

### Hoeveel vermogen levert een lader?
Onze DC-lader is **120 kW**, configureerbaar als 1×120 kW of 2×60 kW, modulair uitbreidbaar tot 180 kW. Onze AC-lader is 30 kW. Zie [Onze laders](/docs/getting-started/intro#onze-laders).

### Leveren jullie ook 350 of 400 kW?
Niet als standaardproduct. Voor de meeste tourneedagen is 120 kW ruim voldoende (400 kWh in 10 uur = gemiddeld 40 kW). Bij grotere locaties schalen we op met extra units of modules. Getallen van 350–400 kW die u elders tegenkomt zijn meestal de som van meerdere units of een ander type installatie.

## Laden

### Hoe start ik een sessie?
Volg het display. Automatisch starten vereist een bruikbare EVCCID, een goedgekeurde registratie en geldige laadrechten. Gebruik een aangeboden en toegestane RFID- of QR-optie als alternatief. Zie [Uw eerste laadsessie](/docs/getting-started/first-session).

### Waarom start mijn sessie niet automatisch?
Controleer de EVCCID-aanmelding, afzonderlijke goedkeuring door de accounthouder, geldigheid van de toestemming en voertuigcommunicatie. Een VIN invoeren is geen oplossing voor ontbrekende herkenning. Zie [Probleemoplossing](/docs/plug-and-charge/troubleshooting).

### Mijn laadsessie stopt en herstart niet. Is dat een fout?
Nee. Als een sessie eindigt terwijl de kabel nog zit (accu vol, of op afstand gestopt), start er niet automatisch een nieuwe. Kabel eruit en opnieuw inpluggen, of expliciet starten.

### Waarom laadt mijn voertuig langzamer dan verwacht?
Koude accu, hoog laadniveau (boven ~80%), een maximum in het voertuig zelf, of weinig beschikbaar vermogen op de locatie op dat moment. Zie [Eerlijk traag](/docs/energie/ems#eerlijk-traag).

### Kan ik met een pas van een andere aanbieder laden?
In de regel niet: roaming staat bij onze laders bewust uit vanwege de kosten. Zie [Roaming](/docs/pandeneigenaren/cpo-roaming-uitgelegd).

## Plug & Charge

### Wat is Plug & Charge?
Inpluggen en laden zonder pas of app. Zie [Wat is Plug & Charge?](/docs/plug-and-charge/what-is-pnc).

### Werkt dat met ISO 15118-certificaten?
De huidige herkenning op ondersteunde DC-laders gebruikt **EVCCID: het MAC-adres van de voertuigcommunicatiecontroller**, niet het VIN en niet een ISO 15118-contractcertificaat. Die technieken zijn niet hetzelfde.

### Moet ik iets installeren in het voertuig?
Voor deze aanmeldprocedure vraagt u geen contractcertificaat aan. Gebruik een accountgebonden pas op het laadscherm en sluit pas aan als daarom wordt gevraagd; de lader leest de EVCCID uit. Het voertuig moet die herkenning wel ondersteunen. Zie [Instellen](/docs/plug-and-charge/setup-guide).

### Hoe lang duurt het voor een voertuig werkt?
Vanaf **Begin** op het laadscherm heeft de aanmelding 5 minuten. Het uitlezen kan tot 3 minuten duren, binnen die totale deadline. Vastleggen gebeurt automatisch na uitlezen; de accounthouder moet daarna afzonderlijk goedkeuren. Dit is geen belofte dat laden binnen die tijd mogelijk is.

## Kosten

### Wat kost laden?
Een vast tarief per kWh per locatie, vastgelegd in uw overeenkomst. Geen startkosten per sessie, geen tijdgebonden kosten. U vindt de tarieven in uw overeenkomst of vraagt ze op bij uw accountmanager — niet in deze kennisbank, omdat ze per locatie en per jaar verschillen.

### Hoe werkt de facturering?
Maandfacturen met sessiedetails, als PDF in het portaal. Zie [Facturering](/docs/klantportaal/invoicing).

### Kan ik subsidie krijgen?
Voor laadinfrastructuur bij bedrijven is er SPRILA (RVO). Let op: de aanvraag moet zijn ingediend **vóór** de opdracht bij een investering boven € 25.000. Zie [Subsidies](/docs/pandeneigenaren/subsidies).

## Vermogen en energie

### Wat is netcongestie en raakt dat mij?
Het stroomnet zit in veel gebieden vol, waardoor verzwaren lang duurt of niet kan. Daarom werken we met slimme sturing en waar nodig een batterij. Zie [Netcongestie](/docs/energie/netcongestie).

### Wat doet een EMS?
Het meet continu het verbruik van het gebouw, berekent de ruimte onder uw aansluiting en verdeelt die over de laadpunten. Zie [Wat doet een EMS?](/docs/energie/ems).

### Wat is een energiebudget?
Een afspraak over hoeveel een voertuig, persoon of afdeling mag laden — per dag, week of maand. Zie [Energiebudgetten](/docs/energie/energiebudget).

### Hebben jullie batterijen?
Ja, als buffer om meer te kunnen laden dan de aansluiting toestaat en om gebouwpieken af te vlakken. Zie [Batterijopslag](/docs/energie/ess).

### Kunnen jullie ook terugleveren aan het net (V2G)?
Niet vandaag. Bidirectioneel laden is toekomstige functionaliteit; we claimen het niet als iets wat nu kan.

## Portaal en data

### Waar log ik in?
Op [portal.stroomlijnen.nl](https://portal.stroomlijnen.nl). Er is geen zelfregistratie; toegang krijgt u tijdens de onboarding. Zie [Klantportaal](/docs/klantportaal/overview).

### Is er een app?
Chauffeurs kunnen starten met een QR-code. Er is geen Stroomlijnen-app in de app stores; als u die ergens genoemd ziet, klopt dat niet meer.

### Is er een API?
Geen openbare API met documentatie en selfservice-sleutels. U kunt wel CSV exporteren, en op aanvraag is een koppeling mogelijk. Zie [Koppelingen en data-export](/docs/technical/integration).

### Hoe lang worden mijn gegevens bewaard?
Sessiegegevens blijven beschikbaar voor uw administratie zolang u klant bent, en facturen worden bewaard conform de wettelijke bewaartermijn. Vraag bij vertrek een export aan.

## Storingen

### Hoe meld ik een storing?
Met locatie, nummer op de lader, tijdstip, kenteken en de tekst op het display — via uw accountmanager of [stroomlijnen.nl/contact](https://stroomlijnen.nl/contact). Zie [Storingen melden](/docs/locations/site-guide#storingen-melden).

### De lader staat offline. Kunnen jullie dat zien?
Ja, wij zien of een lader online is en welke fouten er zijn opgetreden. Een melding met tijdstip is daarom vaak genoeg om het op afstand op te lossen.

## Nog iets niet gevonden?

De pagina's hierboven dekken het meeste. Voor specifieke vragen: [stroomlijnen.nl/contact](https://stroomlijnen.nl/contact) of uw accountmanager.
