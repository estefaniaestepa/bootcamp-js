'use strict'

/*EVENTOS DEL RATON*/

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