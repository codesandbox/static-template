let redbutton = document.getElementById("red");
let greenbutton = document.getElementById("green");
let bluebutton = document.getElementById("blue");
redbutton.addEventListener("click", makered);
greenbutton.addEventListener("click", makegreen);
bluebutton.addEventListener("click", makeblue);



function makered() {
let colortext = document.getElementById("text");
colortext.style.color = "red";
}
function makegreen() {
let colortext = document.getElementById("text");
colortext.style.color = "green";
}
function makeblue() {
let colortext = document.getElementById("text");
colortext.style.color = "blue";
}
