'use strict'



var texto= "Hola mundo soy una variable global";
var numero= 12;

function holaMundo (texto){
  var hola_mundo= "texto dentro de funcion";
  console.log(texto);
  console.log( typeof numero.toString());
  console.log(hola_mundo);
}

  holaMundo (texto);

/*   console.log(hola_mundo);  no se puede hacer porque la variable esta dentro de la funcion y no es global, se podria hacer si la variable esta fuera de la funcion*/ 


/*COMO CONVERTIR UN NUMERO A UN STRING, utilizando el metodo .toString() */