'use strict'

window.addEventListener('load', function(){

/*TIMERS*/

/* var tiempo= setTimeout(function(){}); */ /* esto lo que hará que ejecutara la funcion de los 3 segundos cambio de tamaño una sola vez */
function intervalo(){
var tiempo= setInterval(function(){/*set interval nos permite ejecutar una funcion de callbak cada x seg.*/
console.log("Set interval ejecutado");

var encabezado= document.querySelector("h1"); /*cuantos menos accesos al Dom tengamos mejor, por lo que es aconsejable poner.querySelector una sola vez*/ 
if(encabezado.style.fontSize == "50px"){ /*para cambiar el tamaño de un elemento, esto lo cambiara con el primer h1 que encuentre*/
encabezado.style.fontSize = "20px";
}else{
    encabezado.style.fontSize = "50px";

}/*de esta manera el encabezado estara parpadenado cada 3 segundos y cambiara de tamaño*/
},3000);/*como segundo parametro a la funcion setInterval le indicamos el tiempo, 3000 milisegundos es cada 3 segundos y se ejecuta en la consola*/
return tiempo;
}

var tiempo = intervalo; /*crearemos una variable tiempo que eso va a invocar al intervalo, esto va a devolverme el setInterval*/
var stop= document.querySelector ("#stop"); /*cuando se indique el ID stop para la funcion de setInterval de cambiar de tamaño*/
    
stop.addEventListener ("click", function(){
    alert ("Has parado el intervalo en bucle"); /*cuando le demos al boton de stop y en el alert aceptar parará el intervalo del bucle*/
    clearInterval (tiempo); /*a esta funcion como parametro le tenemos que poner la variable que tiene setInterval*/
});
var start= document.querySelector ("#start");
    start.addEventListener ("click", function(){
    alert ("Has iniciado el intervalo en bucle");
    intervalo();
});
});