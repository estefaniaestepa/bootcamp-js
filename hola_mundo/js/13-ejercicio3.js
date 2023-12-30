'use strict'

/* HACER UN PROGRAMA QUE MUESTRE TODOS LOS NUMEROS ENTRE DOS NUMEROS INTRODUCIDOS POR EL USUARIO*/

var numero1 = parseInt(prompt('Introduce el primer numero',0)); /*como en los anteriores un parseInt para convertirlo a numero y un prompt para que aparezca la ventana*/
var numero2 = parseInt(prompt('Introduce el segundo numero',0));

/*tenemos que mostrar todos los numeros que hay entre el numero 1 y numero 2, lo haremos con un bucle for*/


document.write("<h1>De"+numero1+"a"+numero2+"estan estos numeros:</h1>")/*  nos permite añadir texto en el body de la pagina */
for(var i =numero1;i <=numero2; i++){ /*la variable que inicia el for o contador sea el numero 1, el for va a empezar a correr desde el numero que hayamos introducido en la variable1*/
/* mientras que i sea menor o igual a numero2, i++ (ve sumando al contador)*/
document.write(i+"<br>");/*mostraremos el numero i que es el que se va incrementando y le concatenaremos un ber*/
}

/* CON ESTO NOS MUESTRA TODOS LOS NUMEROS QUE HAY EN PANTALLA*/