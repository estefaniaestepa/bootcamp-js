'use strict'

/*BOM (BROWSER OBJECT MODEL)*/

/*como ver que tamaño tiene la ventana*/
function getBom (){ /*para saber las propiedades de la venta*/
/* console.log(window.innerWidth); */ /*para saber la anchura de la ventana*/
/* console.log (window.innerHeight);  *//*utilizaremos el objeto window accedemos al objeto del navegador web para ver el innerHeight la altura de la ventana*/

console.log(screen.width); /* con esto tambien puedes ver el ancho y el alto de la pantalla, pero accede a propiedades que hay en el navegador y ya tienen el calculo de la pantalla*/
console.log(screen.height);
console.log(window.location.href);/*sacar la url en la que estamos y ver la url que hay cargada y .href te imprime la url*/
}

function redirect(url){ /*para reedirigirnos a otra parte, como parametro le pasamos una url en la consola indicaremos redirect("nombre de la pagina web"); */
window.location.href = url;
}


function abrirVentana(url){/*que nos abra una pequeña ventana del navegador y le pasamos una url en la consola indicaremos abrirVentana("nombre de la pagina web"); nos abre una pestaña nueva en el navegador */
window.open(url, "", "width=400, height=300"); /*como primer parametro podemos pasarle la url, como segundo nada y el tercero width y el heigth nos abre una venta de la web que le hemos indicado en la consola con el tañano que le hemos defiido*/
}

getBom();


