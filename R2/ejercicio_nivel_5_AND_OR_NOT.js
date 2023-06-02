let esMiembroPremium =
  prompt("¿Es usted miembro premium? (responda sí o no)").toLowerCase() ===
  "sí";
let totalCompra = Number(prompt("Ingrese el total de su compra:"));
let tieneCodigoDescuento =
  prompt(
    "¿Tiene algún código de descuento? (responda sí o no)"
  ).toLowerCase() === "sí";

let puedeAplicarDescuento =
  (esMiembroPremium && totalCompra >= 100) || tieneCodigoDescuento;

if (puedeAplicarDescuento) {
  alert("¡Felicitaciones! Puede aplicar el código de descuento.");
} else {
  alert(
    "Lo siento, no cumple con los requisitos para aplicar el código de descuento."
  );
}

//El codigo toLowerCase() convierte la cadena de texto a minuscula.
// Esto permite que el código sea insensible a las mayúsculas y minúsculas,
// y se asegura de que la respuesta del usuario sea comparada correctamente.
