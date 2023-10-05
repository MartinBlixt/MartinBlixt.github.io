let siffra=0

function plusClick(){
    //console.log("hek")

    siffra = siffra + 1
    document.getElementById("taltext").innerHTML=siffra
}

const minusknapp = document.getElementById("minus") 
minusknapp.addEventListener("click", minusClick) 

function minusClick(){
    siffra--
    document.getElementById("taltext").innerHTML=siffra
}