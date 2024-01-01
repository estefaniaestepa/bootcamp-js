'use strict'

/* UNA CALCULADORA
-PIDA DOS NUMEROS POR PANTALLA
- SI METEMOS MAL LOS NUMEROS QUE NOS LOS VUELVA A PEDIR
-MUESTRE EN EL BODY(EL CUERPO) DE LA PAGINA EN UNA ALERTA Y POR LA CONSOLA EL RESULTADO(SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR) ESAS DOS CIFRAS*/

var numero1 = parseInt(prompt('Introduce un numero', 0));
var numero2 = parseInt(prompt('Introduce un numero', 0));

/*tendriamos que comprobar si esos numeros nos vienen con un numero realmente y si estan correctos para esto haremos un while*/

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) { /*mientras que el numero1 sea <0 (menor a 0) || (o) el numero2 <o (menor a 0) || (o) isNaN (una letra) el numero1 || (o) isNanN (not a numbrer, sea una letra)el numero2*/
  numero1 = parseInt(prompt('Introduce un numero', 0));
  numero2 = parseInt(prompt('Introduce un numero', 0)); /* mientras que esto pase volveremos a pedir al usuario que introducza los numeros. En este caso como no estamos defiendo la variable por primera vez si no que estamos asignadole un valor le quitaremos la palabra reservada var*/
}

/* por ultimo creariamos una variable resultado aqui haremos un string que estaremos utilizando para luego mostrarlo en el cuerpo de la pagina, en la alerta y en la consola */

var resultado = ("La suma es: " +(numero1+numero2)+"<br>"+ 
"La resta es:" +(numero1-numero2)+ "<br> "+
"La multiplicacion es: " +(numero1*numero2)+"<br>"+
 "La division es:" +(numero1/numero2)+"<br>");

 
 /*crearemos 2 variables resultado y en una de ellas modificaremos el salto de linea*/
var resultadoCMD = ("La suma es: " +(numero1+numero2)+"\n"+ /*volveremos a copiar con \n para que nos haga el salto de linea en la alerta*/
"La resta es:" +(numero1-numero2)+ "\n"+  
"La multiplicacion es: " +(numero1*numero2)+"\n"+
 "La division es:" +(numero1/numero2)+"\n");

 document.write(resultado) ; /*para que nos escriba el resultado*/
 alert (resultadoCMD);/*queremos que nos lo muestre en una alerta*/ /*Nos va a dar un problema y es que estamos utilizando br y esto hace un salto de linea en HTML pero para mostrar un salto de linea en cualquier consola o lenguaje de programacion tendriamos que utilizar el \n */
console.log (resultadoCMD); /*si hacemos un console.log y le ponemos como parametro la funcion CMD nos lo pondrá por la consola correctamente*/

