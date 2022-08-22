function prueba() {
  alert("mensaje del boton");
}
/*window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav li a").forEach(function (btn) {
    btn.addEventListener("click", function () {
      alert("Aqui iriamos a la pagina correspondiente");
    });
  });
});*/

window.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#robbu-whatsapp-button")
    .addEventListener("click", function () {
      alert("Aqui se genera la llamada a Whatsapp");
    });
});
