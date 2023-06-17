// Minidesafio #5 : A partir de la caja de código usada más arriba, ¿Si los parámetros de la
// función al momento de llamarla tiene otro nombre,funciona?¿Te animás a modificarlo?

let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
function dipliPersonalizado(nombre, apellido) {
  let saludo = "Hola " + nombre + " " + apellido + " soy Dipli";
  alert(saludo);
}
dipliPersonalizado(nombre, apellido);
dipliPersonalizado(apellido, nombre);

//no funciona si le ingresamos parametros con nombre distintos a las funciones
