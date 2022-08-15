"use strict";

let boton = document.querySelectorAll(".btn");
function mostrar() {
  for (var i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click", function (e) {
      let el = this.nextElementSibling;
      el.classList.toggle("mostrar");
    });
  }
}
