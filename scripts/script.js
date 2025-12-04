// JavaScript Document
console.log("hi");
// alle functies hebben ()

const burger=document.querySelector("header nav button")
// const is een doosje dat niet veranderd je hrbt rrn constant daar blijvrn waardes het zelfde 

// led kan ook 
// en bij led kan de waren veranderen en bij console niet
// achter const logische naam opslag
// dan een = document om ergens naartoe te verwijzen om het te verwijzen naar const
// .querySelector zoekt in mijn document en selecteer dus die gaat een document ui yhtml pakken
// wat geel is dan is het een functie dus () toevoegen

console.log(burger);

// functie schrijven in jc moet je beginnen met het woord function

function openMenu(item){
//cameocase betekend eerste woord in kleine letters en tweede woord eerste letter hoofdletter maar woorden aan elkaar
// in de () moet je item zetten dat is een placeholder voor de latere variabele
// item moet later burger worden omdat dat de placeholder is voor de funtie van openmenu


console.log("je hebt me geklikt");
//functie aanroepen en wat je gebruikt als waarde is de constante zodat je weet waar je die uitvoerd

}




burger.addEventListener("click", openMenu)
//.add voegt een event/gebeurtenis toe aan je constante/element dus in ons geval de burger

