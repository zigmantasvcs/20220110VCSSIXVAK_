// rekomendacija js faile rašyti funkcijas, o jų iškvietimą html faile.

// funkcija, kuri negrąžina rezultato. Aprašymas/deklaravimas/define
function changeBackgroundColor(color, selector){
    // veiksmai
    console.log(color);
    document.querySelector(selector).style.backgroundColor = color;
}

// items - paduodamas masyvas is isores
// selector - paduodamas elemento selektorius is isores
function displayArrayInListElement(items, selector, clean){

    // || - arba operatorius
    // && - and operatorius
    if(selector != "ol" && selector != "ul"){
        console.log("Nurodytas netinkamas selektorius");
        return;
    }

    if(clean){
        document.querySelector(selector).innerHTML = "";
    }

    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        //console.log(element);
        document.querySelector(selector).innerHTML += "<li>" + item + "</li>";
    }

}