'use strict'

/* PRUEBA CON VAR */

var numero = 40;
console.log(numero); /* si le hago el HTMLFormControlsCollection.log antes el valor es 40 */

if(true){
var numero = 50;

console.log(numero); /* si le hago un if despues el valor es 50 */
}

console.log(numero); /* el valor va a ser 50 */

/* PRUEBA CON LET */

var texto ="Curso JS";
console.log(texto);/*  el valor es el mismo "" */

if(true){
 ler texto ="Curso Laravel 5"; /* la logica dice que vamos a actualizar el valor de la variable como ha pasado arriba */
  console.log(texto); /* el valor  de texto es laravel 5. PERO REALMENTE LET ACTUA A NIVEL DE BLOQUE */
  } 
  
  console.log(texto);/*  el valor va a ser JS "" */