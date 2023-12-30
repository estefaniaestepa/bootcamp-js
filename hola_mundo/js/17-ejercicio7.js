'use strict'

/*TABLA DE MULTIPLICAR DE UN NUMERO INTRODUCIDO POR PANTALLA*/

var numero = parseInt(prompt("¿De que numero quieres la tabla?", 1)); /*el pompt nos pregunta de que numero queremos la tabla y por defecto le ponemos el 1*/

/*como hacemos para multiplicar el numero que hemos introducido por todos sus numeros del 1 al 10, esto lo hacemos con el for*/
/*el for tiene tres partes:
1.la variable o el contador inicial en este caso es a 1 y le decimos mientras que i sea igual o menor a 10 que el bucle siga iterando y iremos incrementando el valor de i*/
/*de esta manera podemos hacer un document.write para mostrarlo directamente en la web y no en un console.log o en un alert*/
/*concatenar algo significa poner esto por ejemplo (1+'x '+numero) poner algo entre +''+*/
/*por ejemplo 2x5 es igual a= y le concatenamos el resultado de la multiplicacion i*number la variable*/

document.write("<h1>Tabla del " + numero + "</h1>"); /*podmeos ponerle un encabezado y le concatenamos la variante para que nos ponga el titulo del numero que queramos*/

for (var i = 1; i <= 10; i++) {
  document.write(i + 'x' + numero + '=' + (i * numero) + '<br>'); /*para que se vea mejor la pagina le podemos concatenar un br para que haga un salto de linea*/
}

/*TODAS LAS TABLAS DE MULTIPLICAR*/
/*si quisieramos hacer la tabla de todos los numeros y no de uno solo*/
/*simplemente tendriamos que hacer un for por encima del que tenemos y anidar un codigo*/

for (var c = 1; c <= 10; c++) { /*de esta manera estamos recorriendo todas las tablas del 1 al 10*/ /*cambiaremos el nombre de i a c*/


  document.write("<h1>Tabla del " + c + "</h1>"); /* y luego estamos volviendo a recorrer todo del 1 al 10 y entonces estamos recorriendo el numero de la tabla que yo quiero actualemte que es la c*/
  for (var i = 1; i <= 10; i++) {  /*con el numero del contador de esa multiplicacion concreta en este caso es el i */
    document.write(c + 'x' + c + '=' + (i * c) + '<br>');
  }
}
