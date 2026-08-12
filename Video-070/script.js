
function bgColor(){

    let ran =Math.random()
    let color="orange";
    if (ran<=.33){
        color ="red";
    }
    else if(ran<.66){
        color ="green";
    }
    else{
        color ="blue";
    }
    console.log(color);
    return color;
}
function textColor(){

    let ran =Math.random()
    let color="orange";
    if (ran<=.33){
        color ="black";
    }
    else if(ran<.66){
        color ="rgb(234, 18, 140)";
    }
    else{
        color ="white";
    }
    console.log(color);
    return color;
}

document.querySelectorAll(".box").forEach(e=>{e.style.backgroundColor=bgColor()});

document.querySelectorAll(".box").forEach(e=>{e.style.color=textColor()})


ranColor()