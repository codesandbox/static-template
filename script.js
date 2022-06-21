let p01 = document.getElementById("prices01");
let hc = document.getElementById("hc01");
function open() {
  if (p01.style.display == "none") {
    p01.style.display = "block";
  } else {
    p01.style.display = "none";
  }
}
hc01.addEventListener("click", open);
