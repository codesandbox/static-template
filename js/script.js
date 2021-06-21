button1.onclick = function miles(mult) {
  document.getElementById("answer1").innerHTML = mult / 1000;
  console.log("miles");
};
button2.onclick = function yards(mult) {
  document.getElementById("answer2").innerHTML = mult / 1.0936;
  console.log("yards");
};
button3.onclick = function inches(mult) {
  document.getElementById("answer2").innerHTML = mult / 0.3937;
  console.log("inches");
};
