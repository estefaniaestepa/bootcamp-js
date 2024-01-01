'use strict'

/*ARRAYS, ARREGLOS, MATRICES*/

/* var nombre= "Estefania Estepa";
var nombres= ["Estefania Estepa", "Juan Lopez", "Manolo Garcia", "Victor Robles", "Jose Martin", 52, true];

var lenguajes = new Array ("PHP", "JS", "Go", "Java");

console.log(nombres[2]);
console.log(lenguajes);
console.log(nombres[2]); */



/*ARRAYS AVANZADOS*/

var nombre= "Estefania Estepa";
var nombres= ["Estefania Estepa", "Juan Lopez", "Manolo Garcia", "Victor Robles", "Jose Martin", 52, true];

var lenguajes = new Array ("PHP", "JS", "Go", "Java");

/* console.log(nombres.length); */ /*muestra en la consola el numero de elementos que tiene un array*/
/* alert (nombres[elemento]); */ /*para indicar un numero y si ponemos un numero que no existe nos devuelve un error*/

/* var elemento = parseInt(prompt("Que elemento del array quieres??", 0));
if(elemento >=nombres.length){                                       /*para que nos devuelva un error si introducimos un elemento que no tenemos en el alert*/
/* alert("Introduce el numero correcto menor que "+nombres.length) */
/* }else{ */                                                        /*y si no, si el dato está bien nos muestre*/
/*   alert ("El usuario seleccionado es: " + nombres[elemento]);
} */

document.write("<h1>Lenguajes de programacion del 2018</h1>");

document.write ("<ul>");                                                  /*haremos una lista
/* for(var i= 0; i< lenguajes.length; i++ ){ */                          /*crearemos una variable de iniciacion y le indicaremos que emìeza desde 0 y tiene que ser menor al .length que es el numero total de elementos*/
/*   document.write ("<li>"+lenguajes[0]+"</li>"); */                   /*concatenaremos el li para los elementos de la lista y lenguajes indicaremos desde donde empieza la lista*/
/* } */ /*ESTO ES PARA RECORRER UN ARRAY DE MANERA CLASICA*/

lenguajes.forEach((elemento,indice, arreglo )=>{

  console.log(arreglo); /*nos coge el metodo .forEach de la variable original*/
  document.write ("<li>"+indice+" - "+elemento+ "</li>"); /*el indice numera, elemento muestra la lista*/
} );

document.write ("</ul>");


/*HEMOS VISTO QUE SE PUEDEN ORDENAR ARREGLOS CON EL .forEach AHORA VEREMOS CON EL FOR IN  */
/* document.write ("<ul>");   
for(var lenguaje in lenguajes){ 
  document.write ("<li>"+lenguajes[lenguaje]+ "</li>");
}
document.write ("</ul>"); */

/*creamos una nueva variable que será el indice y le decimos in a la variable que queremos (+lenguajes[lenguaje]+), esta concatenacion sería de la variable lenguajes cogeme su indica lenguaje*/



/*BUSQUEDAS EN UN ARRAY*/

/* var busqueda = lenguajes.find(function(lenguaje){ 
return lenguaje =="PHP";
}); */

/*el metodo .fine tiene una function de callback dentro y le pasaremos lenguaje como parametro*/
/*el return es para que haga la comparativa entre la variable que le estamos pasando y la busqueda que queremos hacer*/


/*veremos como reducirlo con la funcion <=*/

/* var busqueda = lenguajes.find(lenguaje => lenguaje =="PHP"); */




/*veremos como reducirlo con la funcion <=*/
/* var busqueda = lenguajes.findIndex(lenguaje => lenguaje =="PHP"); */ /*nos busca el indice donde se encuentra el elemento que queremos buscar*/





/*ENCONTRAR VALORES DENTRO DE LOS ARRAYS DE NUEMEROS CON EL METODO .some*/

/* var precios = [10, 20 ,50 , 80, 12];
var busqueda = precios.some(precios => precios >=20);

console.log (precios); */