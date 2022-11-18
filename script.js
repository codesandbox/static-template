let teorico = document.querySelector("#botonTeorico");
let formulario = document.querySelector("#formu");
let consignas = document.querySelector("#parrafoConsignas");

teorico.onclick = function () {
  formulario.src = " ";
  formulario.width = "0px";
  formulario.height = "0px";
  consignas.textContent = " ";
};

/* 
1) Diseñar un sitio web que muestre información acerca de un auto en particular: 
  a) Empresa que lo fabrica, modelo de Auto, fecha de comercialización.
  b) Caracteristicas tecnicas del auto elegido.
  c) Foto del auto elegido. 
  d) Video de la conducción del auto. 
  e) Añadir logo de la empresa. 
  f) Editar el documento con css. 

2) Agregar botones que cambien la imagen del auto, para mostrar los distintos colores disponibles (al menos 4 fotos)

3) Cargar en un arreglo, el nombre de 5 modelos de autos utilizando un prompt y mostrarlos en la consola. 

4) Crear un algoritmo que busque un modelo especifico de auto en un arreglo y lo muestre en consola.
El nombre a buscar, debe ser ingresado por un prompt

5) Crear una función que cargue varios nombres de auto, y que el usuario decida cuando deja de cargar o no.



*/
