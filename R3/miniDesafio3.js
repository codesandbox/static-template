// Minidesafio #3 : A partir de la caja de código usada más arriba, ¿Comó podemos hacer para
// que Dipli ademas se despida de nosotros?¿Te animás a modificarlo?

let usuario = prompt("Ingresa tu nombre");
function dipliPersonalizado() {
  let saludo = "Hola " + usuario;
  alert(saludo);
  let despedida = "Adiós " + usuario;
  alert(despedida);
}
dipliPersonalizado();
