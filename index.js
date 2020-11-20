function swapTheme() {
  let x = document.getElementById("app");
  let y = document.getElementById("swap");
  console.log("clicked");
  x.classList.toggle("night");
  y.classList.toggle("button_night");
}
swapTheme();
