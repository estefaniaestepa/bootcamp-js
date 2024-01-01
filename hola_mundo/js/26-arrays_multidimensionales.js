'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas =['La verdad Duele', 'La Vida es Bella', 'Gran Torino'];

var cine= [categorias, peliculas]; /*array multidimensional, tiene varios arrays, categoria es la dimension 0 y peliculas 1*/

/* console.log(cine[0][1]); */ /*indicaremos el primer elemento 0 para acceder a la primera categoria y luego el numero que queremos dentro de la lita de categorias*/
/* console.log(cine[1][2]);  *//*esto es lo mismo pero para la categoria de peliculas*/

/* ESTO ES UNA MANERA DE AÑADIR ELEMENTOS A UN ARRAY*/

/* peliculas.push = ("Batman") ; */ /*.push para añadir elementos al array*/
/* console.log (peliculas); */ /*podmeos comprobar si se ha añadido el elemento*/

/*OTRA MANERA DE AÑADIR ELEMENTOS*/
var elemento =" ";

do{
 elemento =prompt ("Introduce tu pelicula :");
  peliculas.push = (elemento) ;
}while (elemento !="ACABAR")
console.log (peliculas); /*en la pestañita que nos aparece iremos añadiendo hasta que le digamos ACABAR y nos mostrara el array con las peliculas que hemos añadido*/



/*forma de eliminar elementos con .pop*/
peliculas.pop (); /*de esta manera eliminamos el ultimo elemento, en este caso es en la pestañita la palabra ACABAR que no queremos que aparezca*/
peliculas.pop (); 
peliculas.pop (); /*si hacemos .pop varias veces ira eliminando y no los añadira*/

/* forma de elemininar elementos con undenided*/
peliculas[0] = undefined; /*con esto ponemos en undefined una propiedad de mi array en este caso la 0, el primer elemento que añadimos a la pestañita*/



/*forma de eliminar un elemento en concreto, */

 var indice = peliculas.indexOf('Gran Torino') ;/*crearemos un avariable y indicaremos .indexOf para buscar el elemento que queremos eliminar del array y pondremos el nombre del elemento*/

console.log (indice); /*nos sacara el numero donde esta ese elemento*/

if (indice > -1 ){
  peliculas.splice (inice, 1); /*splice nos permite eliminar en base a un indice tantos elementos como queramos y le tenemos que indicar el nº de elementos */
}


/*CONVERTIR ARRAYS A TEXTO*/
var peliculas_string = peliculas.join (); /* con esto convertimos el array de peliculas a un string seprado por comas, pero este metodo no solo sirve llamando a la variable si no que tenemos que crear una nueva*/
console.log (peliculas_string);



/*convertir arrays a string con el metodo .split*/
var cadena ="texto1, texto2, texto3";
var cadena_array=  cadena.split(", "); /*.split(", ") indicamos que cada elemento que vaya separado por coma y espacio me lo convierta todo a texto*/

console.log (cadena_array); /*en este caso nos mostara que tenemos un array y inicialmente lo hemos definido como texto*/




/*ORDENAR ARREGLOS*/
/* var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas =['La verdad Duele', 'La Vida es Bella', 'Gran Torino']; aqui tenemos estos arrays ordenados de una forma en concreto  */
/* peliculas.sort (); nos va a permitir ordenar el array de forma alfabeticamente o numericamente */
/* peliculas.reverse (); para dar la vuelta al array, hacerlo con el orden inverso  */

/* console.log (peliculas); */


