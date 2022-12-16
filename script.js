let flag = true;
console.log(!flag);
let boton = document.querySelector("button");
let parrafo = document.querySelector("#normas");
boton.onclick = function () {
  if (flag) {
    parrafo.textContent =
      "Recuerden que, tienen que utilizar nombres de elementos SIGNIFICATIVOS de forma obligatoria. Entregar un archivo .zip que de nombre tenga su apellido (Ej: Rojas.zip), en la tarea de classroom, el cual contenga los documentos HTML, CSS Y JS. Pueden utilizar los videos subidos a classroom en el caso que necesiten ayuda. ";
    flag = false;
    boton.textContent = "Ocultar reglas para entregar";
  } else {
    parrafo.textContent = "";
    flag = true;
    boton.textContent = "Mostrar reglas para entregar";
  }
};

let c = 0;
while (c < 10) {
  c++;
}

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
