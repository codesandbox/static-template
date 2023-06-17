// Dipli quiere saber cuánto valdría la sumatoria de sus amigos. Es decir, si tiene 5 amigos, entonces debemos hacer el siguiente cálculo:
// 1+2+3+4+5 y mostrarlo.

function sumatoria(amigos) {
  let acumuladorAmigos = 0;
  for (i = 0; i <= amigos; i++) {
    acumuladorAmigos = acumuladorAmigos + i;
  }
  return acumuladorAmigos;
}

let amigos = prompt("Dipli, cuántos amigos y amigas tenes?");
let resultado = sumatoria(amigos);
alert(resultado);
