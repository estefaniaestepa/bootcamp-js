'use strict'

/*PROGRAMA QUE:
1-PIDA 6 NUMEROS POR PANTALLA Y LOS META EN UN ARRAY
2- TIENE QUE MOSTRAR TODOS LOS ELEMENTOS DEL ARRAY EN EL CUERPO DE LA PAGINA Y EN LA CONSOLA
3- TENEMOS QUE SACAR EL ARRAY ORDENADO Y MOSTRALO
4- INVERTIR SU ORDEN Y MOSTRALO
5- MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY
6- BUSQUEDA DE UN VALOR INTRODUCIDO POR EL USUARIO Y QUE NO DIGA SI ESTA EN EL ARRAY Y QUE NOS DIGA SU POSICION*/



/*VAMOS A VER OTRO EJEMPLO DE COMO PODRÍAMOS HHABERLO HECHO PARA QUE NOS PIDA LOS NUMEROS Y SALGAN EN CONSOLA*/

/* var numeros = new Array (6 ); de esta manera tenemos un array con 6 posiciones
for (var i= 0; i <= 5; i++){
  numeros [i]= parseInt(prompt("Introduce un número", 0)); 
}
console.log(numeros);  */

/*mostrar la lista ordenada en pantalla*/
function mostrarArray(elementos, textoCustom= ""){  /*esta funcion va a recibir un array que se llamara elementos, para hacer una funcion generica*//*el textoCustom lo hemos puesto que por defecto venga vacio y lo concatenaremos abajo*/

document.write("<h1>Mostrar el contenido del Array"+textoCustom+"</h1>");
document.write ("<ul>");    /*para que me lo muestre en una lista desordenada*/
numeros.forEach((elemento, index)=>{       /* esto tiene una funcion de callback dentro en la cual puedo coger el elemento(seria el array) y el indice. Luego utiliaremos la funcion de flecha, enctonces el callback lo tenemos definido como una funcion anonima fe flecha*/
document.write("<li>" +elemento+ "</li>");     /*lo meteremos dentro de la etiqueta strong concatenando el numero*/
});
document.write ("</ul>");
}

/*pedir 6 numeros*/
var numeros = [];

for (var i= 0; i <= 5; i++){ /* tiene 3 partes: el contador, la condicion y la iteracion y cuenta de numeros */
numeros.push(parseInt(prompt("Introduce un número", 0))); /* el prompt es la ventanita, vamos a poner el array de numeros y la posicion que estemos iterando en este momento vamos a estar pidiendole un prompt. El parseInt es para que nos lo convierta en numero */
}


/*mostrar en el cuerpo de la pagina*/
/*es el trozo de código que hemos subido arriba en la function*/
mostrarArray(numeros); /*aqui le podríamos añadir el textoCustom en el caso que queramos*/


/*mostrar el array por la consola*/
console.log(numeros);


/*ordenar y mostralo*/
numeros.sort(function(a, b ){return a-b}); /*ordenar de forma numerica esto es en orden ascendente*/ /*para ponerlo en orden descendente seria b-a*/
mostrarArray(numeros,' ordenado '); /*esto me lo ordena de forma alfabetica, si queremos que nos lo ordene de forma numerica iremos a la funcion sort que es una funcion de callback*/


/*invertir su orden y mostrarlo*/
numeros.reverse();
mostrarArray(numeros,' revertido '); /*y lo muestro con la invocacion a la funcion con el textCustom revertido*/


/*mostrar cuantos elementos tiene un array -contar elementos o indice*/
document.write("<h1>El array tiene : "+numeros.length+ " elementos</h1><hr>");


/*busqueda de un valor y que nos diga si esta y la posicion*/
var busqueda =parseInt(prompt("Busca un número", 0)); /*lo meteremos dentro de una variable*/
var posicion= numeros.findIndex(numero => numero == busqueda); /*vamos hacer un findIndex (necesitamos sacar el indice) de nuestro array que es numeros y tiene una funcion de callback*//*le pondremos una variable y haremos un if*/

if(posicion && posicion !=-1){ /*si buscado da true y buscado es diferente pues entonces que nos muestre lo que le hemos indicado en document.write*/
document.write ("<h1> ENCONTRADO </h1><hr>");
document.write ("<h1>Posición de la busqueda: " +posicion+ "</h1><hr>");/*para saber en que podicion esta*/
}else{ /*en el caso de que no que nos diga que no lo ha encontrado*/
document.write ("<h1>NO ENCONTRADO </h1><hr>");
}
