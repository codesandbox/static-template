// Excelente! Ahora que tenemos una buena idea de cómo usar repetitivas, veamos que se le ocurrió a Dipli.
// Dipli nos pide que armemos una cadena de texto con los nombres de algunas de las mascotas que el recuerda. ¿Cómo podemos plantear este minidesafío?

function armarCadenaMascotas(mascotas) {
  let acumuladorNombres = "";
  let unNombre;
  for (let i = 0; i < mascotas; i++) {
    //completar aquí
    unNombre = prompt("Dipli, decime el nombre de la mascota Nro. " + (i + 1));
    acumuladorNombres += " , " + unNombre;
  }
  return acumuladorNombres;
}

let mascotas = prompt("Dipli, cuántas mascotas tuviste?");
let resultado = armarCadenaMascotas(mascotas);
alert("Las mascotas de dipli son: " + resultado);
