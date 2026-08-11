console.log("Business Name Generator");

function noise() {
    let random = Math.random();
    if (random <= 0.33) {
        return 1;
    } else if (random <= 0.66) {
        return 2;
    } else {
        return 3;
    }
}

function adjective() {
    const objad = {
        n1: "Crazy",
        n2: "Amazing",
        n3: "Fire"
    };
    let ad = objad[`n${noise()}`];
    console.log(ad);
    return ad;
}

function shopName() {
    const objsn = {
        n1: "Engine",
        n2: "Foods",
        n3: "Garments"
    };
    let ad = objsn[`n${noise()}`];
    console.log(ad);
    return ad;
}

function anotherWorld() {
    const objaw = {
        n1: "Brows",
        n2: "Limited",
        n3: "Hub"
    };
    let ad = objaw[`n${noise()}`];
    console.log(ad);
    return ad;
}



function generate() {

    try{
    let a = `${adjective()} ${shopName()} ${anotherWorld()}`;
    String(a);
    console.log(a);
    document.getElementById("display").value=a;}
    catch{
        document.getElementById("display").value="Error!";
    }
}

// generate();
// adjective();
// shopName();
// anotherWorld();