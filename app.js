// Variables
var contenedor = document.querySelector('.texto-right') 
var img_muñeco = document.querySelector('.munieco') 
var parrafoSalida = document.querySelector('.ocultar')
var resultado = document.querySelector('.texto-salida')
// Funciones

//Función encriptar
function Encriptado () {
    let mensaje = document.getElementById('entrada-texto').value;
    console.log(mensaje);
    resultado.textContent = mensaje.replace(/e/gi, "ele").replace(/i/gi, "ipk").replace(/a/gi, "ayl").replace(/o/gi, "oxw").replace(/u/gi, "uhs");
    ocultar();
    return

}


// Función desencriptar
function Desencriptado() {
    let mensaje = document.getElementById('entrada-texto').value;
    console.log(mensaje);
    resultado.textContent = mensaje.replace(/ele/gi, "e").replace(/ipk/gi, "i").replace(/ayl/gi, "a").replace(/oxw/gi, "o").replace(/uhs/gi, "u");
    ocultar();
    return
}


// Función reiniciar
function Reiniciar() {
        document.querySelector('#entrada-texto').value ='';
        contenedor.classList.remove('ocultar');
        img_muñeco.classList.remove('ocultar');
        parrafoSalida.classList.add('ocultar');
        resultado.textContent= '';
}

function ocultar(){
    contenedor.classList.add('ocultar');
    img_muñeco.classList.add('ocultar');
    parrafoSalida.classList.add('textoSalida')
    



}

function copiar() {
    var contenido = document.querySelector('.texto-salida').textContent
    navigator.clipboard.writeText(contenido);
       
}