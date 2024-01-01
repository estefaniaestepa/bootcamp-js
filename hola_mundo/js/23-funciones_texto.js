'use strict'

/*TRANSFORMACION DE TEXTO*/

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




/*METODOS DE BUSQUEDA DENTRO DE UN STRING-UNA CADENA DE TEXTO*/

var numero= 444;
var texto1= "Bienvenido al cuerso de JavaScript curso 2024";
var texto2= "Es muy buen curso";

var busqueda=  texto1.indexOf("curso"); /* .indexOf para buscar una palabra, nos saca la primera conincidencia de la palabra el numero*/
var busqueda=  texto1.lastIndexOf("curso");  /* .lastIndexOf para buscar una palabra, nos saca la ultima conincidencia de la palabra el numero*/
var busqueda=  texto1.search ("curso"); /* .search nos devuelve lo mismo donde aparece la primera palabra que estamos buscando*/
var busqueda=  texto1.match (/curso/gi); /*  o (/curso/g) */ /*.match con la palabra "" nos devuelve un array con la primera coincidencia .match con la palabra entre / /gi nos hace una busqueda global*/
var busqueda=  texto1.substr (14, 25); /*para buscar trozos de texto y me lo hace desde el caracter que le indico el numero de letras que le ponga en adelante*/
var busqueda=  texto1.charAt (44); /*para sacar una letra en concreto la buscaremos indicando el numero de su posicion*/
var busqueda=  texto1.startsWith("Bienvenido"); /*para buscar un texto en especifico, nos dira si ese texto es true si es la palabra del inicio del string o false cuanquier otra palabra del string*/
var busqueda=  texto1.replace("JavaScript", "Symfony"); /* nos permite reemplazar un tecto por otro, en el segundo parametro de esta funcion le indicaremos el texto o palabra que que queremos que cambio*/
var busqueda=  texto1.slice(14); /*separa el string a partir del numero que le indiquemos y lo anterior no lo saca en la consola, es decir corta lo anterior*/
var busqueda=  texto1.slice(14, 25); /* solo saca las palabras que estan dentro de ese rango las de antes y las de despues no aparecen en consola*/
var busqueda=  texto1.split(" "); /*nos saca las palabras y las mete en un array para tener una coleccion de palabras*/
var busqueda=  texto1.trim( ); /*podemos hacer un trim en base a una variable y nos quitara los espacios que tengamos por delante y por detras de la variable*/

console.log(busqueda);