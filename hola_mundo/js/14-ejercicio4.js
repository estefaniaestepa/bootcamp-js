'use strict'

/*MOSTRAR TODOS LOS NUMEROS IMPARES QUE HAY ENTRE DOS NUMEROS INTRODUCIDOS POR EL USUARIO*/

var numero1= parseInt(prompt("introduce el primer numero",0)); /*estas variables ya nos consiguen estos dos números*/
var numero2= parseInt(prompt("introduce el segundo numero",0));

while(numero1 < numero2){ /*con esto hariamos para recorrer y nostrar todos los numeros que hay entre el numero1 y numero2*/
    numero1++; /*esto es el operador de incremento para que se vaya reduciendo y llegue a un momento que sean iguales y no entre más a iterar dentro del bucle*/

    if(numero1%2 !=0){
        console.log("El" +numero1+ "es impar");
    }
}
/* como comprobamos si el numero por el que estamos pasando en este momento por el bucle es impar, tendriamos que hacer un if
y dentro de if haremos una operacion:
si numero1(el resto de numero1)%2(dividido entre dos )!= (es diferente a 0)
si el resto de dividir numero1 a cero, entonces en un numero impar*/

/* nos mostrará en la pantalla todos los numeors impares*/