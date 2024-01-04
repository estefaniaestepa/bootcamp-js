'use strict'

/* window.addEventListener ('load', function(){
console.log ("DOM cargado!"); */

var formulario = document.querySelector ("#formulario");

formulario.addEventListener('submit', function(){
console.log("Evento submit capturado");
});

/* }); */