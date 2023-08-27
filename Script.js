const button = document.getElementById("btnCambiarColor");
let isColor = true;

button.addEventListener("click", () => {
  document.body.style.backgroundColor = isColor ? "#FF5733" : "#33FF57";
  isColor = !isColor;
});
