'user scrip'

/*UTILIZANDO UN BUCLE MOSTRAR LA MEDIA Y LA SUMA DE LOS NUMEROS INTRODUCIDOS, HASTA INTRODUCIR UN NÚMERO NEGATIVO Y AHI MOSTRAR EL RESULTADO */

var suma = 0; /*crearemos dos variables*/
var contador = 0;

/*que bucle podemos utilizar para ejecutar un bloque de codigo antes de evaluar ninguna condicion y que ese bloque de codigo nos pida una informacion a nosotros como usuario, nos saque un prompt
para esto el bucle que debemos utilizar es el do while*/
do { 
    var numero = parseInt(prompt('introduce numeros hasta que metas uno en negativo', 0));
if(isNaN(numero)){/* tendriamos que comprobar con un isNaN, si no es un número lo que introduce el usuario, el valor de numero seria igual a 0*/
numero =0;
}else if(numero>= 0){ /*y si no, */
suma = suma + numero;/*en el caso que numero sea igual o mayor a 0, el valor que ya tuviera suma más numero*/
contador++; /* para sumerle 1 al contador*/
} /*suma+=numero*/
console.log(suma);
console.log(contador);
} while (numero >=0);/*lo unico que tenemos que saber es si el numero es mayor o igual a 0, solo en este caso se va a ejecuitar el contenido del do*/
/* primero dentro del do while crearemos una variable numero y pediremos un prompt para pedir el numero al usuario, y tendriamos que convertirlo a un entero parseInt en lugar de un string/texto*/

alert("la suma de todos los numeros es:" + suma);
alert("la media de todos los números es :" + (suma/contador));/*para hacer la division la metemos entre parentesis suma(suma total de todos los numeros/contador (los numeros que hemos introducido)de esta forma sale una media aproximada)*/