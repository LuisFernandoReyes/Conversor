var opTemp1 = document.getElementById("Conver1");
var opTemp2 = document.getElementById("Conver2");
var resultado1 = document.getElementById("resultado1");
var resultado2 = document.getElementById("resultado2");
var frase = document.getElementById("frase");

function gradosF() {
    var temp = parseFloat(document.getElementById("temp").value);
    if (!isNaN(temp)) {
        gF = (temp * 1.8) + 32;
        resultado1.value = gF;
        color(gF);
    }
}
function color(grados) {
    gf = grados;
    switch (true) {
        case (gF >= 14 && gF < 32):
            frase.style.backgroundColor = "#5DADE2";
            frase.value = "Temperatura baja";
            break;
        case (gF >= 32 && gF < 68):
            frase.style.backgroundColor = "#229954";
            frase.value = "Temperatura adecuada";
            break;
        case (gF >= 68 && gF < 96):
            frase.style.backgroundColor = "red";
            frase.value = "Temperatura alta";
            break;
        default:
            frase.style.backgroundColor = "";
            frase.value = "Temperatura desconocida";
            break;
    }
}

function gradosC() {
    var temp = parseFloat(document.getElementById("temp").value);
    if (!isNaN(temp)) {
        gC = (temp - 32) / 1.8;
        resultado2.value = gC;
        console.log(temp);
    }
}

opTemp1.addEventListener("click", gradosF)
opTemp2.addEventListener("click", gradosC)