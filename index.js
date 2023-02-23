const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const colorInput = document.getElementById("color");

xInput.addEventListener("input", (e) => {
  object.x = parseInt(e.target.value);
  draw();
});

yInput.addEventListener("input", (e) => {
  object.y = parseInt(e.target.value);
  draw();
});

widthInput.addEventListener("input", (e) => {
  object.width = parseInt(e.target.value);
  draw();
});

heightInput.addEventListener("input", (e) => {
  object.height = parseInt(e.target.value);
  draw();
});

colorInput.addEventListener("input", (e) => {
  object.color = e.target.value;
  draw();
});

// Define the draw function
function draw() {
  // Get the canvas element and its 2D context
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the object with the updated properties
  ctx.fillStyle = object.color;
  ctx.fillRect(object.x, object.y, object.width, object.height);
}

// Define the object to draw
const object = {
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  color: "#ff0000"
};

// Call the draw function to draw the initial object
draw();

// const object = {
//   x: 400,
//   y: 300,
//   width: 100,
//   height: 100,
//   color: "#FF0000"
// };
// function drawObject(ctx, obj) {
//   ctx.fillStyle = obj.color;
//   ctx.fillRect(
//     obj.x - obj.width / 2,
//     obj.y - obj.height / 2,
//     obj.width,
//     obj.height
//   );
// }
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// canvas.addEventListener("mousedown", (e) => {
//   const rect = canvas.getBoundingClientRect();
//   const mouseX = e.clientX - rect.left;
//   const mouseY = e.clientY - rect.top;

//   // Check if the mouse is within the object's bounds
//   if (
//     mouseX >= object.x - object.width / 2 &&
//     mouseX <= object.x + object.width / 2 &&
//     mouseY >= object.y - object.height / 2 &&
//     mouseY <= object.y + object.height / 2
//   ) {
//     canvas.addEventListener("mousemove", onMouseMove);
//     canvas.addEventListener("mouseup", onMouseUp);
//   }
// });

// function onMouseMove(e) {
//   const rect = canvas.getBoundingClientRect();
//   object.x = e.clientX - rect.left;
//   object.y = e.clientY - rect.top;
//   draw();
// }

// function onMouseUp() {
//   canvas.removeEventListener("mousemove", onMouseMove);
//   canvas.removeEventListener("mouseup", onMouseUp);
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawObject(ctx, object);
// }

// draw();
