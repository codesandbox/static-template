function validarSiNumero(numero) {
  if (!/^([0-9])*$/.test(numero))
    alert("El valor " + numero + " no es un número");
}
