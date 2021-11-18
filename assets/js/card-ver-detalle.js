//inicializar ver detalle plan btn
function verDetalleBtn() {
  const triggerArr = document.querySelectorAll(".movil-trigger");

  var detalles = Array.from(triggerArr);
  detalles.map((item) => {
    item.addEventListener("click", () => {
      const boxInfo = item.parentNode.previousElementSibling;
      console.log(boxInfo);
      boxInfo.classList.toggle(".movil-box-hide");
      const btnMasInfo = item.parentNode.childNodes[1];
      btnMasInfo.classList.toggle(".hide-item-mas");
    });
  });
}
setTimeout(verDetalleBtn, 2000);
