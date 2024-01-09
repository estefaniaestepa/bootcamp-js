'use strict'

/* window.addEventListener('load'), function({ */  /* DE ESTA MANERA CUANDO LA PAGINA ESTE CARGADA ES CUANDO SE VAN A EJECUTAR TODOS LOS ELEMETOS DEL JS QUE ACCEDE AL DOM Y A LOS ELEMENTOS DE HTML */

/* EVENTOS DEL RATON */

var boton =document.querySelector ("#boton"); /*capturar o seleccionar un boton y recogemos con el elemento el id*/


/*crearemos en nuestro html una etiqueta button y le daremos la propiedad onClick donde le pondremos un alert que aparezca cada vez que el usuario clike ese boton
  <p>
    <button id="boton" onclick ="alert('Hola me has presionado')">Presioname</button>
  </p>
  esta es la manera clasica */


  function cambiarColor(){ /*funcion para cambiarle el color del boton*/
  console.log ("me has dado click");
  var bg= boton.style.background; /*crearemos una variable*/

  if(bg =="green"){ /*le pondriamos el if para que el color se fuese alternando cuando le demos click al boton*/
  boton.style.background= "red"; 
}else{
  boton.style.background= "green";
}

boton.style.padding= "10px"; 
boton.style.border= "1px solid #ccc"; /*estos son estilos del boton que estarian siempre de manera global*/

return true;
  }
  /*primero ejecutaremos la funcion en HTML <button id="boton" onclick ="cambiarColor()";>Presioname</button> 
  y despues definimos la funcion en JS y la llamos en HTML con el <script src="js/30-eventos.js"></script> */




  /*EJEMPLO DE LA MEJOR FORMA DE USO DE DARLE FUNCION A ETIQUETAS DE HTML*/

  var boton =document.querySelector ("#boton"); 

  /*evento click*/

  boton.addEventListener('click', function(){
    cambiarColor();
    console.log(this);
    this.style.border= "10px solid black";
  });


  /*mouse over
  cuando pasas por encima de algo te lo cambia de color*/

  boton.addEventListener('mouseover', function(){ /*con el evento .addEventListener utilizamos 'mouseover' y hacemos la funcion a modo de callback*/
    boton.style.background= "#yellow"; 
  })



  /*mouseout*/
  /*es lo mismo que mouse over, pero este captura o lanza el evento cuando sales de pasar por encima del cursor del raton*/
  boton.addEventListener('mouseout', function(){ /*con el evento .addEventListener utilizamos 'mouseover' y hacemos la funcion a modo de callback*/
  boton.style.background= "#ccc"; 
})



/*Focus*/
var input = document.querySelector("#campo_nombre"); /*primero tenemos que capturar o seleccionar el campo*/

input.addEventListener('focus', function(){ /*estamos capturando el evento 'focus'* del campo input con un id #campo_nombre*/
console.log ("[focus] Estas dentro del input"); /* podemeos indicar al evento que se esta lanzando haremos console log para probar cada uno de nuestros eventos, esto aparece en la consola*/

});



/*Blur*/
input.addEventListener('blur', function(){ /*es igual que el focus solamente cuando salimos del foco*/
console.log ("[blur] Estas fuera del input"); /*podemeos indicar al evento que se esta lanzando haremos console log para probar cada uno de nuestros eventos, esto aparece en la consola*/

});



/*Keydown*/
input.addEventListener('keydown', function(event){ /*el keydown sucede cuando estas pulsando una tecla a function le pasamos el parametro event*/
console.log ("[keydown]Pulsando esta tecla ", string.fromCharCode(event.keyCode)); /*  podemos sacar la tecla que es lo concatenaremos string.fromCharCode esto sirve para capturar cosas del teclado y capturamos lo que sale en el evento(event.keyCode) con esto sabemos que tecla estamos pulsando, todas las teclas que pulsamos en el input aparecen en consola  */

});



/*Keypress*/
input.addEventListener('keypress', function(event){ /*el keypress sucede cuando ees cuando presiono una tecla*/
console.log ("[keypress]Tecla presionada ", string.fromCharCode(event.keyCode));

});



/*Keyup*/
input.addEventListener('keyup', function(event){ /*el keyup nps permite capturar el evento cuando levantamos el dedo de la tecla*/
console.log ("[keyup]Tecla soltada ", string.fromCharCode(event.keyCode));

});

/* }); */ /*el final del losd EN LOAD*/

