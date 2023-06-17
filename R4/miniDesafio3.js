// Minidesafío #3 :
// En el ejemplo anterior utilizamos una estructura if dentro de otra (estructuras if anidadas), se te ocurre otra forma de resolverlo?
// Pista: podés ayudarte pensado qué valores podría tomar la variable "vidas" al momento de hacer las comparaciones, y utilizar tantas sentencias if
// como creas necesarias (podés o no utilizar
//   estructuras anidadas).

function estadoJuego(vidas) {
  let mensaje = "";
  if (vidas < 1) {
    mensaje = "Juego terminado";
  } else if (vidas === 1) {
    mensaje = "Te quda la ultima vida!!";
  }
  return mensaje;
}

let vidas = 1;
let estado = estadoJuego(vidas);
if (estado !== "") {
  alert(estado);
}
