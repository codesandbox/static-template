//    changing value from input text to input range
function changeaAmount() {
  document.getElementById("slideAmount").value = document.getElementById(
    "txtAmount"
  ).value;
}
function changeaYear() {
  document.getElementById("slideYear").value = document.getElementById(
    "txtYear"
  ).value;
}
function changeaInterest() {
  document.getElementById("slideInterest").value = document.getElementById(
    "txtInterest"
  ).value;
}
//    changing value from input text to input range

function changeAmount() {
  document.getElementById("txtAmount").value = document.getElementById(
    "slideAmount"
  ).value;
}
function changeYear() {
  document.getElementById("txtYear").value = document.getElementById(
    "slideYear"
  ).value;
}
function changeInterest() {
  document.getElementById("txtInterest").value = document.getElementById(
    "slideInterest"
  ).value;
}
function calculate() {
  var a = document.getElementById("txtAmount").value;
  var b = document.getElementById("txtYear").value;
  var c = document.getElementById("txtInterest").value;
  var d = (a * (c * 0.01)) / b;
  var total = (a / b + d) / b;
  var monthly = (total / 12) * b;
  monthly = Math.round(monthly);
  document.getElementById("pr").innerHTML = "Your Monthly EMI is " + monthly;
}
