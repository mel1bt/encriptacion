window.addEventListener("load",cargarPagina);
var selectOpcion = document.getElementById("opcionAlg");
   
var algoritmoCesar = document.getElementById("algoritmoCesar");
var algoritmoEnigma = document.getElementById("algoritmoEnigma");

function jsFunction(){
  var myselect = document.getElementById("selectOpt");
  if(myselect.options[myselect.selectedIndex].value = 'uno'){
      algoritmoCesar.style.display = "block";
  }
}

function cargarPagina(e){
    e.preventDefault();
    $(document).ready(function() {
    $('select').material_select();
    });
   
}

function irpagina(){
    document.location="enigma/index.html";
}


var botonCesar = document.getElementById("encCesar");
botonCesar.addEventListener("click", encriptarCesar)

var palabra = document.getElementById("palabra");
var resultado = document.getElementById("resultado");
var indice = document.getElementById("indice");
var newResultado = document.getElementById("respuesta1");

function encriptarCesar(e){
    e.preventDefault();
    var contendedor = document.createElement("div");
    contendedor.classList.add("row", "center");
    
    var texto = document.createElement("h5");
    texto.innerHTML="El texto encriptado es :";

    var respuesta = document.createElement("div");
    respuesta.innerHTML = encripCesar(palabra.value, Number(indice.value));
    
    var btnDesEncrip = document.createElement("button");
    btnDesEncrip.classList.add("btn", "waves-effect", "waves-light");
    btnDesEncrip.addEventListener("click", desencriptarCesar);
    btnDesEncrip.textContent= "Desencriptar";
    
    var iconBtn = document.createElement("i");
    iconBtn.classList.add("material-icons", "left");
    iconBtn.textContent = "fast_rewind";
    
    
    contendedor.appendChild(texto);
    contendedor.appendChild(respuesta);
    btnDesEncrip.appendChild(iconBtn);
    contendedor.appendChild(btnDesEncrip);
    newResultado.appendChild(contendedor);

}


function desencriptarCesar(e){
    e.preventDefault();
    var contenedor = document.createElement("div");
    contenedor.classList.add("row", "center");
    var resultDesencr = document.createElement("div");
    console.log(this.previousSibling.textContent);
    
    resultDesencr.innerHTML = desencripCesar(this.previousSibling.textContent, Number(indice.value));
    var texto = document.createElement("h5");
    texto.innerHTML= "El texto de desecriptado es:"
    contenedor.appendChild(texto);
    contenedor.appendChild(resultDesencr);
    console.log(this.parentNode.parentNode);
    this.parentNode.parentNode.appendChild(contenedor);
    
}
//PARA ENCRIPTAR ALGORITMO CESAR
function encripCesar (texto, index) {
    var resultado = "";
    for(var i = 0; i < texto.length; i++) {
        var textcaracter = texto.charCodeAt(i);
        if(textcaracter >= 97 && textcaracter <= 122) {
            resultado += String.fromCharCode((textcaracter - 97 + index) % 26 + 97);
        } else if(textcaracter >= 65 && textcaracter <= 90) {
            resultado += String.fromCharCode((textcaracter - 65 + index) % 26 + 65);
        } else {
            resultado += String.fromCharCode(textcaracter);
        }
    }
    return resultado;
}

//PARA DESENCRIPTAR ALGORITMO CESAR
var desencripCesar = function(resultado, index) {
    var texto = "";
    for(var i = 0; i < resultado.length; i++) {
        var resulCaracter = resultado.charCodeAt(i);
        if(resulCaracter >= 97 && resulCaracter <= 122) {
            texto += String.fromCharCode((resulCaracter - 97 - index + 26) % 26 + 97);
        } else if(resulCaracter >= 65 && resulCaracter <= 90) {
            texto += String.fromCharCode((resulCaracter - 65 - index + 26) % 26 + 65);
        } else {
            texto += String.fromCharCode(textcaracter);
        }
    }
    return texto;
}

//PARA DESENCRIPTAR ALGORITMO CESAR MODIFICADO

var botonCesarM = document.getElementById("encCesarM");
botonCesarM.onclick= encriptarCesar2;

var palabra2 = document.getElementById("palabraM");
//var resultado = document.getElementById("resultadoM");
var indice2 = document.getElementById("indiceM");
var newResultado2 = document.getElementById("newResultadoM");

function encriptarCesar2(e){
    e.preventDefault();
    var contendedor2 = document.createElement("div");
    contendedor2.classList.add("row", "center");
    
    var texto2 = document.createElement("h5");
    texto2.innerHTML="El texto encriptado es :";
    
    var respuesta2 = document.createElement("div");
    respuesta2.innerHTML = encripCesar2(palabra2.value, Number(indice2.value));
    
    var btnDesEncrip2 = document.createElement("button");
    btnDesEncrip2.classList.add("btn", "waves-effect", "waves-light");
    btnDesEncrip2.addEventListener("click", desencriptarCesar2);
    btnDesEncrip2.textContent= "Desencriptar";
    
    var iconBtn2 = document.createElement("i");
    iconBtn2.classList.add("material-icons", "left");
    iconBtn2.textContent = "fast_rewind";
    
    
    contendedor2.appendChild(texto2);
    contendedor2.appendChild(respuesta2);
    btnDesEncrip2.appendChild(iconBtn2);
    contendedor2.appendChild(btnDesEncrip2);
    newResultado2.appendChild(contendedor2);
}

function desencriptarCesar2(e){
    e.preventDefault();
    var contenedor2 = document.createElement("div");
    contenedor2.classList.add("row", "center");
    var resultDesencr2 = document.createElement("div");
    console.log(this.previousSibling.textContent);
    
    resultDesencr2.innerHTML = desencripCesar2(this.previousSibling.textContent, Number(indice2.value));
    var texto2 = document.createElement("h5");
    texto2.innerHTML= "El texto de desecriptado es:"
    contenedor2.appendChild(texto2);
    contenedor2.appendChild(resultDesencr2);
    this.parentNode.parentNode.appendChild(contenedor2);
   
    
}

function encripCesar2 (texto, index) {
    var nuevaPalabra=""
    var resultado = "";
    /*
    texto = texto.replace("a","o");
    texto = texto.replace("e","i");
    texto = texto.replace("i","u");
    texto = texto.replace("o","e");
    texto = texto.replace("u","a");*/
    
    texto = texto.replace("a","1");
    texto = texto.replace("e","2");
    texto = texto.replace("i","3");
    texto = texto.replace("o","4");
    texto = texto.replace("u","5");
    
     texto = texto.replace("1","o");
    texto = texto.replace("2","i");
    texto = texto.replace("3","u");
    texto = texto.replace("4","e");
    texto = texto.replace("5","a");
    
    for(var i = 0; i < texto.length; i++) {
        var textcaracter = texto.charCodeAt(i);
        if(textcaracter >= 97 && textcaracter <= 122) {
            resultado += String.fromCharCode((textcaracter - 97 + index) % 26 + 97);
        } else if(textcaracter >= 65 && textcaracter <= 90) {
            resultado += String.fromCharCode((textcaracter - 65 + index) % 26 + 65);
        } else {
            resultado += String.fromCharCode(textcaracter);
        }
    }
    return resultado;
}

function desencripCesar2(resultado, index) {
    var texto = "";
    for(var i = 0; i < resultado.length; i++) {
        var resulCaracter = resultado.charCodeAt(i);
        if(resulCaracter >= 97 && resulCaracter <= 122) {
            texto += String.fromCharCode((resulCaracter - 97 - index + 26) % 26 + 97);
        } else if(resulCaracter >= 65 && resulCaracter <= 90) {
            texto += String.fromCharCode((resulCaracter - 65 - index + 26) % 26 + 65);
        } else {
            texto += String.fromCharCode(textcaracter);
        }
    }
    texto = texto.replace("o","1");
    texto = texto.replace("i","2");
    texto = texto.replace("u","3");
    texto = texto.replace("e","4");
    texto = texto.replace("a","5");
    
     texto = texto.replace("1","a");
    texto = texto.replace("2","e");
    texto = texto.replace("3","i");
    texto = texto.replace("4","o");
    texto = texto.replace("5","u");
    return texto;
}




























