function clearScreen() {
  document.getElementById("result").value = "";
}
function delterm() {
  let input = "";
  document.getElementById("result").value = input.substr(0, input.length - 1);
}

function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  var a = document.getElementById("result").value;
  var b = eval(a);
  document.getElementById("result").value = b;
}
