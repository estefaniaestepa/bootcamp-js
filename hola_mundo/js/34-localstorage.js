'use strict'

/* localStorage */

/*comprobar si el localStorage existe o esta disponible*/

if(typeof(Storage) !== 'undefined'){
console.log ("Localstorage disponible");
}else{
  console.log ("Incompatible con Localstorage");
}

/*guardar datos en el navegador localStorage en string*/
localStorage.setItem("titulo", "Curso de Symfony");


/*recuperar elemento y meterlo en mi pagina web*/
document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");


/*guardar objetos*/
var usuario= {
  nombre: "Estefania Estepa",
  email: "estefaniaestepaalcon@gmail.com",
  web: "estefaniaweb.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario)); /*para pasar objetos a un local storage es necesario cambiarlos a string por lo que le pondremos la funcion JSON.stringify*/

/*recuperar objetos*/
var userjs= JSON.parse(localStorage.getItem("usuario"));
console.log (userjs);
document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);

/*borrar datos*/
localStorage.removeItem("usuario");

/* localStorage.clear(); vacia todo el localStorage */