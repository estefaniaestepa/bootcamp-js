'use strict'

/*transformacion de textos*/

var numero= 444;
var texto1= "Bienvenido al cuerso de JavaScript";
var texto2= "Es muy buen curso";

var dato = numero.toString(); /*lo convierte en texto*/
    dato = texto1.toUpperCase(); /*lo convierte mayuscula*/
    dato = texto2.toLowerCase(); /*lo convierte en minuscula*/
console.log (dato);



/*calcular la longitud que tiene un texto*/

var nombre ="Estefania Estepa";
    nombre=["Hola", "Hola"]; /*en la consola nos sale 2 por las palabras, la propiedad .length sirve para contrar*/
console.log (nombre.length); /*cuenta las letras que tiene el texto*/
 

/*concatenar - unir textos*/

/* var textoTotal= texto1 + " " + texto2;

console.log(textoTotal); */


var textoTotal= texto1.concat ( " " +texto2);

console.log(textoTotal); 