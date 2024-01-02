'use strict'


/*DOM- Document Object Model*/


/*CONSEGUIR ELEMENTOS CON UN ID CONCRETO*/

function cambiaColor(color) { /*utilizaremos function para que el usuario introducta un .style + la funcion que queramos*/
caja.style.background = color; /*i vamos a la consola y llamamos la funcion cambiaColor("green"); y automaticamente cambia*/ 

}

/* var caja = document.getElementById("micaja"); */ /*ahora veremos el ejemplo con .query*/

var caja= document.querySelector ("#micaja");/*selector .querySelector y dentro () seleccionar el elemento pondremos #y el nombre del ID , si fuese una clase .nombre de la clase y sin nada cuando es una etiqueta*/
/*haremos lo lismo que con el .get en la consola llamaremos la funcion cambiaColor=("");

caja.innerHTML = ("TEXTO EN LA CAJA DESDE JS");/*para capturar el codigo de HTML pondremos .innerHTML. para cambiar el texto de JS le daremos un valor*/
caja.style.background = "red"; /*para cambiar los estilos*/
caja.style.padding = "20px"
caja.style.color = "white";
caja.className ="hola hola2"; /*para cambiar atributos de HTML*/

/* console.log(caja); */



/*CONSEGUIR ELEMENTOS POR SU ETIQUETA*/
var todosLosDivs = document.getElementsByTagName ('div');
console.log(todosLosDivs); /*nos sacara en la consola un array de elementos indicando la lista de todos los DIV que tenemos en nuestro HTML*/

/* var contenidoEnTexto= todosLosDivs [2] .textContent; */ /*para modificar cualquier elemento accederemos al array, seleccionamos al indice que queremos acceder [] y con el . podemos acceder a cualquiera de las propiedades .textContent es para sacar el contenido que tiene el DIV */
var contenidoEnTexto= todosLosDivs [2];
contenidoEnTexto.innerHTML ="Otro texto para el segundo elemento"; /*con esto modificariamos nuestro div*/
contenidoEnTexto.style.background= "red";/*inluso cambiarle los estilos, pero solo del elemento que estamos seleccionando*/
console.log (contenidoEnTexto); /*en la consola nos mostrara el texto de ese div*/



/*PARA RECORRER TODOS LOS DIV QUE TENEMOS EN HTML*/
var todosLosDivs = document.getElementsByTagName ('div');
var seccion= document.querySelector ("#miseccion");
var hr =document.createElement("hr");
seccion.append(hr); /*con esto ya nos haria una sepracion abajo*/
var valor;
for (valor in todosLosDivs){ /*vamos a recorrer los elementos que hayan en todos los DIV con el for in */
if(typeof todosLosDivs[valor].textContent == 'string'){ /*pondremos un if para que nos lo convierta todo en texto y no nos de un error*/
var parrafo=document.createElement ("p"); /*haremos una lista y la meteremos dentro del body podemos utilizar (.createElement) el para crear un elemento HTML desde JS y pondremos el nombre de la etiqueta o simplemente incrustar esos valores dentro de un DIV o de una etiqueta*/
var texto= document.createTextNode (todosLosDivs[valor].textContent); /*para capturar valor dentro de todos los DIV pondremos [] y coger el .textContent*/
parrafo.append(texto); /*meto el texto y que le llegue a parrafo con la funcion .append (.append significa añade despues y .prepend significa añade antes  )*/
document.querySelector ("#miseccion").append(parrafo);/*ahora meteremos cada uno de esos parrafos dentro de otra etiqueta, nos crearemos una etiqueta en HTML, en este caso es la etiqueta <sectiom></sectiom> con un id y esa etiqueta la podemos seleccionar con .querySelector con el .append añadimos el parrafo*/
}
}

seccion.append(hr); /*para que nos separe todo el elemento y nos ponga una linea*/


console.log(caja);




/*CONSEGUIR ELEMENTOS POR SU CLASE CSS*/
/*hemos creado en nuestro html class a nuestros div*/
/*ESTO ES MAS RECOMENDABLE PARA UTILIZAR EN CLASES*/

var div; /*primero definimos la variable*/
var divsRojos= document.getElementsByClassName('rojo');
var divsAmarillos= document.getElementsByClassName('amarillo');

divsAmarillos[0].style.background="yellow"; /*le podemos dar estilos poniendo la posicion del indice del div amarillo*/
/* divsRojos[0].style.background= "red"; */ /*esto solo midifica a los divs rojo, no podemos hacerlo en global por lo que tendremos que indicar el indice*/
/* divsRojos[1].style.background= "red"; */

for( div in divsRojos){/* tambien se puede hacer con el bucle for in. vamos a recorrer el div cob los divsrojos*/
if(divsRojos[div].className == "rojo"){ /*haremos un if para comprobar si es un div, si el .className es exactamente igual a rojo nos pondra el color rojo*/
  divsRojos[div].style.background= "red"; /*luego indicaremos los estilos al div*/
}
}


/*QUERY SELECTOR*/
/*ES SOLO RECOMENDABLE PARA ELEMENTOS QUE SOLO TENGAN UN DIV O UNA ETIQUETA, YA QUE SI TENEMOS VARIOS ELEMENTOS CON LA MISMA CLASE SOLO SACA EL DE 1*/
/*ES MEJOR PARA USAR PARA UN ID YA QUE ES UNICO*/
var id= document.querySelector("#encabezado"); /*con .querySelector para capturar la ID pondremos # y el nombre de la id*/
console.log (id); /*para comprobar si me saca un array del id*/

/* var claseRojo= document.querySelector(".rojo"); */ /*en este caso no seriviria ya que tengo dos elementos con la misma clase y solo me sacaria 1*/







