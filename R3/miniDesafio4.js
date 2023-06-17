// Minidesafio #4 : A partir de la caja de código usada más arriba, ¿Que tengo que hacer para
// que las 2 veces aparezca el mismo nombre?¿Te animás a modificarlo?

let usuario = prompt("Ingresa tu nombre");
function dipliPersonalizado2() {
  let saludo = "Hola " + usuario;
  alert(saludo);
}
dipliPersonalizado2(usuario);
alert(usuario);
