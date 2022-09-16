//start up code
let canvas = document.getElementsByTagName("canvas")[0];
let context = canvas.getContext("2d");
context.moveTo(10, 10);
context.lineTo(350, 350);
context.stroke(); // pixel coordinates start from the the top right
