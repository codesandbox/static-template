// Los años biciestos son aquellos en los que el año tiene un día más (366).
// I) te parece que la función infoAnio está mostrando bien la infomación? Si no está bien, te proponemos corregirla para que se comporte adecuadamente.
// II) Si ahora además, necesitamos saber si el año ingresado, cuando no es biciesto, es un número par o impar, te animás a sumar esa nueva información?
// Por ejemplo:
// - si ingreso año 2022 con 365 dias debería mostrarme:
// "El año 2022 no es biciesto y es par."
// - Pero si ingreso el año 2020 debería mostrar:
// "El año 2020 es biciesto."

//dato adicional: ¿Cómo se sabe si un año es bisiesto o no?
//Cualquier año divisible por 4 es un año bisiesto: por ejemplo, 1988, 1992 y 1996 son años bisiestos

//funcion que nos brinda información de un año
function infoAnio(anio) {
  if (anio % 2 === 0) {
    if (anio % 4 === 0) {
      return alert(`El año ${anio} es biciesto`);
    } else {
      return alert(`El año ${anio} no es biciesto y es par`);
    }
  }
}
let anio = Number(prompt("Ingresá un año:"));

infoAnio(anio);
