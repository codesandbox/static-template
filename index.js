function dis(val) {
  document.getElementById("input").value += val;
}
function solve() {
  let x = document.getElementById("input").value;
  let y = eval(x);
  document.getElementById("input").value = y;
}
function clr() {
  document.getElementById("input").value = "";
}
