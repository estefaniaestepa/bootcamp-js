'use strict'

/* FETCH (AJAX)  Y PETICIONES A SERVICIOS / APIS REST */
/* FETCH (es un sustito del AJAX, es decir es un metodo que hace peticiones AJAX, peticiones asincronas a un servidor) */

var div_usuarios =document.querySelector("#usuarios");

var usuarios = []; /* la variariable la inicializamos para que sea un array */
fetch('https://reqres.in/api/users') /* recibe una url que escupa un json y esto es una promesa */
.then(data => data.json()) /* en la promesa tenemos el metodo .then que recoge datos con un primer elemento que tiene funcion de callback que va a recibir un parametro data y lo va a convertir en json */
  .then(users => { /* volvemos a ejecutar .then llamamos a data con una funcion de callback */
    usuarios = users.data;/*recogemos data que estan todos los usuarios, va a ser el array de todos los usuarios*/
console.log(usuarios);

usuarios.map((user, i) =>{ /* para mostrar la info de los usuarios con la funcion .map y una funcion de callback le pasamos usuarios y indice  */
let nombre= document.createElement('h3'); /*mostraremos toda la info de los uruarios*/

nombre.innerHTML = i + " . " + user.first_name + " " + user.last_name;

div_usuarios.appendChild(nombre); /* ya nos aparece en la web nuestros usuarios, esta info sale desde un servicio rest*/

document.querySelector(".loading").style.display = 'none'; /*para ocultar la clase loading creada en nuestro HTML una vez de hayan cargado los datos*/

});
  });

/*   LA FUNCION FLECHA TAMBIEN SE PUEDE HACER DE ESTA MANERA 

  var usuarios = [];

  fetch('https://reqres.in/api/users') 
  .then (function(data){
return data.json()
  });
  .then(users => { 
    usuarios = users.data;
    console.log(usuarios);
  }); */