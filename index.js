const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const ragne = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const INNITIAL_COLOLR = "black";
const CANVAS_SIZE = 800;
const save = document.getElementById("jsSave");
const brushScale = document.getElementById("jsRangeValue");

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INNITIAL_COLOLR;
ctx.fillStyle = INNITIAL_COLOLR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function cahngColorClick(event) {
  let color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleColor(event) {
  const color = event.target.style.backgroundColorz;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
  brushScale.innerText = ctx.lineWidth.toFixed(1);
}

function hendleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  event.preventDefault();
}

function clickSaveButton() {
  const image = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS";
  link.click();
}

function brushSize() {
  brushScale = ctx.lineWidth;
}

function myFunction() {
  var colorValueChange = document.getElementById("jsColorValue").value;
  document.getElementById("showColorCode").innerHTML = colorValueChange;
  const color = colorValueChange;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
  canvas.addEventListener("click", handleColor);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", cahngColorClick)
);

if (ragne) {
  ragne.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", hendleModeClick);
}

if (save) {
  save.addEventListener("click", clickSaveButton);
}
