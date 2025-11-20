# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Ana Broos

  #### Je startniveau:
  Blauw, geen ervaring met coderen.
  
  #### Mijn verwachtingen
  Ik nieuw met al deze codes, maar wil stap voor stap beter worden met HTML, CSS en JS.

  #### Je focus:
  responsive Ik kies voor **helemaal responsive**.  
Dat betekent dat ik mijn website goed wil laten werken van kleine telefoons tot grote schermen.
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
Ik ga twee pagina’s van de **Jellycat** website namaken.  
**Originele website:** [https://www.jellycat.com](https://www.jellycat.com)

Ik kies voor:  
1. **Homepage** – met hero, categorieën en promobanners in een kerstthema.  
2. **Productpagina Bashful Bunny with Christmas Tree** – met foto, prijs, beschrijving en Call To Action knop.  

De Jellycat-website is vriendelijk en rustig, met veel witruimte en een duidelijke structuur.  
Ik kan hiermee goed oefenen met responsive design, semantische HTML en een kleine micro-interactie.

  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepage  
<img src="readme-images/jellycat - homepage.jpg" width="375px" alt="Jellycat homepage small screen">

  #### Screenshot(s) van de tweede pagina (small screen):
  Bashful Bunny with Christmas Tree  
<img src="readme-images/jellycat-product.jpg" width="375px" alt="Jellycat Bashful Bunny small screen"> 
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

De toegankelijkheidstest is uitgevoerd op de homepage van Jellycat (jellycat.com) op 13 november 2025. De test is uitgevoerd in Google Chrome op desktop en mobiel op safari, waarbij de WCAG-checklist als leidraad is gebruikt.

  ### Bevindingen homepage
  Tijdens het testen van de toegankelijkheid van de **Jellycat-homepage** kwamen de volgende punten naar voren:

  #### Positieve punten
  - De homepage bevat duidelijke afbeeldingen en overzichtelijke navigatie.
  - De website werkt goed op verschillende schermformaten (desktop, tablet, mobiel).
  - De meeste tekst heeft voldoende kleurcontrast en is goed leesbaar.
  - De focusvolgorde is grotendeels logisch opgebouwd.
  - Er is geen automatisch geluid of video aanwezig, wat rustiger is voor gebruikers.

  #### Verbeterpunten
  - De focus styling (kleuren die aangeven waar je bent) is soms zwak, waardoor toetsenbordnavigatie (met tab door een website) minder duidelijk is.
  - Er is geen skip to content-link aanwezig.
  - Sommige banners of afbeeldingen hebben ontbrekende of onduidelijke alt-teksten.
  - De headingstructuur wijkt af van WCAG-richtlijnen (niveaus worden soms overgeslagen).
  - Kleine elementen zoals iconen hebben soms te weinig contrast.
  - Er wordt geen ondersteuning geboden voor dark mode of high-contrast weergave.
  - De animaties/carrousels kunnen niet worden gepauzeerd en reageren niet op prefers reduced motion.

#### Mobiel
  - Geen horizontale scroll (goed).
  - Alle hero-banners passen goed op mobiel.
  - Het menu is makkelijk te bedienen.
  - Sommige kleine elementen blijven lastig aan te tikken met een duim (wishlist, filters).

  #### Media
  - Geen video’s of audio aanwezig dus niet van toepassing.

  ### Samenvatting
   De homepage van Jellycat is visueel aantrekkelijk en grotendeels functioneel, maar mist een aantal belangrijke WCAG-richtlijnen. Vooral de focus-weergave, headingstructuur, alt-teksten en animatie-instellingen kunnen verbeterd worden.  
   Over het algemeen is de pagina redelijk toegankelijk, maar niet volledig WCAG-conform.


### Bevindingen productpagina
  De toegankelijkheidstest is ook uitgevoerd op de productpagina "Bashful Bunny with Christmas Tree" op 13 november 2025.  
  De test is uitgevoerd in Google Chrome op desktop en op safari op mobiel, met behulp van de WCAG-checklist.
  Tijdens het testen van de toegankelijkheid van de **Jellycat-productpagina** (https://eu.jellycat.com/bashful-bunny-with-christmas-tree/) wamen de volgende punten naar voren:

  #### Positieve punten
  - De productpagina heeft duidelijke afbeeldingen van hoge kwaliteit.
  - Veel afbeeldingen bevatten alt-teksten die beschrijvend genoeg zijn voor screenreaders.
  - De pagina is overzichtelijk opgebouwd met een duidelijke producttitel (h1) bovenaan.
  - De pagina werkt goed responsive op verschillende schermformaten, inclusief mobiel.
  - De tekst is over het algemeen goed leesbaar door voldoende kleurcontrast.
  - Belangrijke knoppen (zoals "Add to Bag") zijn goed zichtbaar en makkelijk te vinden.

  #### Verbeterpunten
  - De focus styling  (kleuren die aangeven waar je bent) is niet overal even duidelijk, waardoor toetsenbordnavigatie (met tab door een website) soms lastig zichtbaar is.
  - Er is geen skip to content link aanwezig op de pagina zoals op de hoofdpagina.
  - Niet alle iconen (bijv. wishlist hartje) hebben een correcte of duidelijke alt-tekst.
  - De headingstructuur kan beter: sommige visuele koppen zijn geen echte HTML-headings.
  - Kleine iconen hebben soms te weinig contrast op een lichte achtergrond.
  - De site ondersteunt geen dark mode of high-contrast instellingen.
  - Animaties reageren niet op prefers reduced motion en kunnen niet worden gepauzeerd.
  - Sommige interactieve elementen zijn te klein op mobiel, waardoor mis-taps kunnen ontstaan.

  #### Mobiel
  - De pagina schaalt goed mee op mobiel.
  - Er is geen horizontale scroll (goed).
  - Productfoto’s en knoppen zijn goed zichtbaar.
  - Kleine iconen zoals wishlist blijven moeilijk te raken met een duim.

  #### Media
  - Er zijn geen video's of audio op deze pagina, dus dit onderdeel is niet van toepassing.

  ### Samenvatting
  De productpagina van Jellycat is visueel duidelijk en redelijk toegankelijk, maar voldoet nog niet aan alle WCAG-richtlijnen.  
  Vooral de focus-styling, alt-teksten, headingstructuur en ondersteuning voor toegankelijkheidsvoorkeuren kunnen verbeterd worden.  
  Over het algemeen is de pagina toegankelijk voor de meeste gebruikers, maar nog niet volledig WCAG-conform.

</details>






## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/layout html1.jpg" width="375px" alt="breakdown 1 van de hele pagina">
<br>
  <img src="readme-images/layout html2.jpg" width="375px" alt="breakdown 2 van de hele pagina">
<br>
  <img src="readme-images/layout html3.jpg" width="375px" alt="breakdown 3 van de hele pagina">
<br>
  <img src="readme-images/layout html4.jpg" width="375px" alt="breakdown 4 van de hele pagina">
<br>
  <img src="readme-images/layout html5.jpg" width="375px" alt="breakdown 5 van de hele pagina">
<br>
  <img src="readme-images/layout html6.jpg" width="375px" alt="breakdown 6 van de hele pagina">


  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  **Week 2 – Werkgroep 3, 4 & 5**

## Werkgroep 3 – **CSS Grid & Media Queries**

Tijdens de derde werkgroep heb ik geleerd hoe ik CSS Grid kan gebruiken om layouts te maken die flexibel en overzichtelijk zijn. Ik weet nu hoe ik rijen en kolommen definieer, hoe ik grid gebruik en hoe je elementen op het grid positioneert. Ook heb ik kennisgemaakt met media queries, waarmee ik layouts kan aanpassen aan verschillende schermformaten zoals mobiel, tablet en desktop responsive kan maken. 
**Dit heb ik geoefend met: Gird garden.**

## Werkgroep 4 – **Flexbox**

In de vierde werkgroep heb ik gewerkt met Flexbox. Ik heb geleerd hoe je elementen horizontaal en verticaal kunt uitlijnen, hoe je ruimte verdeelt en hoe je flex-direction, justify-content en align-items gebruikt. Flexbox helpt vooral bij het bouwen van kleinere componenten en responsive onderdelen binnen een pagina.
 **Hierbij heb ik vooral gebuik gemaakt van :Flexbox Froggy**

## Werkgroep 5 – **JavaScript 3-stap**

Deze les heb ik helaas gemist en ga ik mij nog later in verdiepen


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. **Home page van Jellycat**: De homepage waar ik de toegangkelijkheidstest op heb gedaan https://eu.jellycat.com/ (*13 november 2025*)
  2. **Product pagina**: De productpagina waar ik de toegangkelijkheidstest op heb gedaan https://eu.jellycat.com/bashful-bunny-with-christmas-tree/ (*13 november 2025*)
  3. **Chat GPT**: Om te vragen hoe je in de read me woorden bold en cursief maakt en hoe je de koppen groter kunt maken https://chatgpt.com/ (*13 november 2025*)

</details>