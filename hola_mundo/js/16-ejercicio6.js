'use strict'

/* SI UN NUMERO ES PAR O IMPAR:
1. VENTANA QUE NOS PIDA EL NUMERO-VENTANA PROMPT
2. SI NO ES VALIDO QUE NOS PIDA DE NUEVO EL NUMERO*/

var number = parseInt(prompt('Introduce un numero', 0));

while (isNaN(number)) { /* isnan-mientras que sea una letra o algo va a estar dando vueltas el biucle*/
  var number = parseInt(prompt('Introduce un numero', 0)); /*vamos a coger la asigancion de la variable para que nos repita tantas veces como sea necesario mientras no sea un número valido*/
}

if(number % 2 == 0){  /* si el numero al dividirlo entre 2 da 0.*/
alert("el numero es par");

}else{
  alert("es un numero impar");
}
