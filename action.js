let num1;
let num2;
let pari;

function doStuff() {
  let sum = num1 + num2;

  if (sum / 2 == 0) {
    pari = true;
  } else {
    pari = false;
  }
}
function getData() {
  num1 = document.querySelector("#num1");
  num2 = document.querySelector("#num2");
}
function printResult(val) {
  if (val == 1) {
    console.log("ok");
  } else {
    console.log("oh sh1t");
  }
}
function action() {
  getData();
  doStuff();
  if (pari == true) {
    printResult(1);
  } else {
    printResult(2);
  }
}
