/* Comprobar si hay cookies */
function compruebaAceptaCookies() {
  if (localStorage.aceptaCookies === "true") {
    cookieconsent.style.display = "none";
  }
}

function cerrarCookies() {
  cookieconsent.style.display = "none";
}

function aceptarCookies() {
  localStorage.aceptaCookies = "true";
  cookieconsent.style.display = "none";
}

/* Solo cuando la web estÃ¡ cargada */
$(document).ready(function () {
  compruebaAceptaCookies();
  console.log("hola mundo");
});

/* Calculadora */

var nf = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

$("#rent-b2c").on("input", function () {
  var x = document.getElementById("rent-b2c").value;
  x = parseFloat(x);
  document.getElementById("protect-b2c").value = nf.format(x * 12);
  document.getElementById("cost-b2c").value = nf.format(x * 12 * 0.04084);
});

$(".input-comercial").on("input", function () {
  var x = document.getElementById("rent-comercial").value;
  x = parseFloat(x);
  document.getElementById("protect-comercial").value = nf.format(x * 12);
  document.getElementById("cost-comercial").value = nf.format(x * 12 * 0.04);
});
