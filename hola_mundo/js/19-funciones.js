'use strict'

/*FUNCIONES 
UNA FUNCION ES UNA AGRUPACION REUTILIZABLE DE UN CONJUNTO DE INSTRUCCIONES, QUE PODEMOS HACERLO TANTAS VECES COMO QUERAMOS Y SE ENCARGA DE HACER ALGO*/



function calculadora() {  /*defino la funcion*/


  console.log("Hola soy la calculadora!!");  /*conjunto de instrucciones a ejecutar */
  console.log("Si soy yo!!");

  return "Hola soy la calculadora!!";
}

/* console.log(calculadora(),calculadora(),calculadora()); */

/* calculadora (); /*esto es invocar o llamar a la funcion*/
/* calculadora ();
calculadora ();  */
var resultado = calculadora();


console.log(resultado);




/*PARAMETROS*/

/* function calculadora (){ 
console.log ("Suma:"+(10+15));
console.log ("Resta:"+(10-15));
console.log ("Multiplicacion:"+(10*15));
console.log ("Division:"+(10/15));
}

calculadora (); 
calculadora ();  */

/* ************************************************************************ */

/* function calculadora(numero1, numero2) {

  console.log("Suma:" + (numero1 + numero2));
  console.log("Resta:" + (numero1 - numero2));
  console.log("Multiplicacion:" + (numero1 * numero2));
  console.log("Division:" + (numero1 / numero2));
  console.log("**********************************************************");
} */

/* calculadora(12, 8);  /*quitaremos estas dos invocaciones para hacer el bucle*/
/* calculadora(98, 2); */

/* for (var i = 1; i <=10; i++){

calculadora(i,8);
console.log (i);
} */


/*PARAMETROS OPCIONALES*/

/* function calculadora(numero1, numero2, mostrar =false) {

  if(mostrar == false){ 
  console.log("Suma:" + (numero1 + numero2));
  console.log("Resta:" + (numero1 - numero2));
  console.log("Multiplicacion:" + (numero1 * numero2));
  console.log("Division:" + (numero1 / numero2));
/*   console.log(mostrar); */
/*   console.log("**********************************************************");
}else{
  document.write("Suma:" + (numero1 + numero2)+ "<br>");
  document.write("Resta:" + (numero1 - numero2)+ "<br>");
  document.write("Multiplicacion:" + (numero1 * numero2)+ "<br>");
  document.write("Division:" + (numero1 / numero2));
  document.write("**********************************************************"); 
}
} */

/* calculadora(1, 4);
calculadora(2, 5, true); */

/*FUNCIONES DENTRO DE OTRAS*/
function porConsola(numero1, numero2) {
  console.log("Suma:" + (numero1 + numero2));
  console.log("Resta:" + (numero1 - numero2));
  console.log("Multiplicacion:" + (numero1 * numero2));
  console.log("Division:" + (numero1 / numero2));
  console.log(mostrar);
  console.log("**********************************************************");
}

function porPantalla(numero1, numero2) {
  document.write("Suma:" + (numero1 + numero2) + "<br>");
  document.write("Resta:" + (numero1 - numero2) + "<br>");
  document.write("Multiplicacion:" + (numero1 * numero2) + "<br>");
  document.write("Division:" + (numero1 / numero2));
  document.write("**********************************************************");
}

function calculadora(numero1, numero2, mostrar = false) {

  if (mostrar == false) {
porConsola(numero1, numero2);
  } else {
    porpantalla (numero1, numero2);
  }
  return "true";
} 

calculadora(1, 4);
calculadora(2, 5, true); 