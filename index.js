let val = 1;
let draw = "true";
const drawfn = () => {
  val = 0;
  let ele = document.getElementById("workspace");
  let elem = document.createElement("span");
  if (draw === "true") elem.classList.add("dot");
  else elem.classList.add("whitedot");
  let xcor = event.clientX;
  let ycor = event.clientY;
  elem.style.left = `${xcor}px`;
  elem.style.top = `${ycor}px`;
  ele.appendChild(elem);
};
function erasefn() {
  if (draw === "false") return;
  else {
    let ele = document.getElementById("drawele");
    ele.removeAttribute("disabled");
    let elem = document.getElementById("eraser");
    elem.setAttribute("disabled", "true");
    draw = "false";
  }
}
function drew() {
  if (draw === "true") return;
  else {
    let ele = document.getElementById("eraser");
    ele.removeAttribute("disabled");
    let elem = document.getElementById("drawele");
    elem.setAttribute("disabled", "true");
    draw = "true";
  }
}
function myFunction() {
  //console.log(val);
  if (val === 0) {
    let ele = document.getElementById("workspace");
    let elem = document.createElement("span");
    if (draw === "true") elem.classList.add("dot");
    else elem.classList.add("whitedot");
    let xcor = event.clientX;
    let ycor = event.clientY;
    elem.style.left = `${xcor}px`;
    elem.style.top = `${ycor}px`;
    ele.appendChild(elem);
  }
}
function myfn() {
  val = 1;
}
let element = document.getElementById("workspace");
element.addEventListener("mousemove", myFunction);
element.addEventListener("mouseup", myfn);
function fn() {
  let e = document.getElementById("workspace");
  e.innerHTML = "";
}
