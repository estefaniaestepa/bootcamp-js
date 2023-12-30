'use strict'

/* CONDICIONALES IF */

/* Si A es igual a B entonces haz algo */

/* var edad1= 30;
var edad2 = 12;

/* Si pasa esto */
/*  if(edad1 > edad2){
 console.log("edad1 es mayor que edad2"); /*   Ejecuta esto */
 /*  }else{
    console.log ("edad1 es inferior");
  } */
  

/*   OPERADORES RELACIONALES
  > MAYOR QUE  
  >= MAYOR O IGUAL
< MENOR QUE 
 <=MENOR O IGUAL
== COMPLETAMENTE IGUAL
!= DIFERENTE O DISTINTO) */

  var edad1 = 34;
  var nombre= 'David Suarez'

  if(edad >= 18){
console.log (nombre + "tiene" + edad+ "años es mayor de edad")

if(edad <=33){
  console.log('Todavía eres milenial');
}else if(edad => 70){
  console.log('eres anciano');
}else{
  console.log('ya no eres millenial');
}
  }else{
    (nombre + "tiene" + edad+ "años es menor de edad");
  }


 /*  Operadores logicos
  AND (Y): &&
  OR (O): ||
  NEGACION: ! */

  var year= 2018;

  /*NEGACION*/

  if(year !=2016){
    console.log("El año no es 2016 realmente es: "+ year);
  }

  /*AND*/

  if(year >= 2000 && year <= 2020){
 console.log("estamos en la era actual");
  }else{
    console.log ("estamos en la era post moderna")
  }


  /*OR*/

  if(year == 2008 ||( year >= 2018 && year ==2028)){
    console.log("el año acaba en 8");
  }else{
    console.log ("año no registrado");
  }