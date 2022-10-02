//Calling the elements below the prices section.//
let p01 = document.getElementById("prices01");
let p02 = document.getElementById("prices02");
let p03 = document.getElementById("prices03");
let p04 = document.getElementById("prices04");
let p05 = document.getElementById("prices05");
//the buttons//
let hc01 = document.getElementById("hc01");
let hc02 = document.getElementById("hc02");
let hc03 = document.getElementById("hc03");
let hc04 = document.getElementById("hc04");
let hc05 = document.getElementById("hc05");

//toggle logic
function open01() {
  if (p01.style.display == "none") {
    p01.style.display = "block";
  } else {
    p01.style.display = "none";
  }
}

function open02() {
  if (p02.style.display == "none") {
    p02.style.display = "block";
  } else {
    p02.style.display = "none";
  }
}

function open03() {
  if (p03.style.display == "none") {
    p03.style.display = "block";
  } else {
    p03.style.display = "none";
  }
}

function open04() {
  if (p04.style.display == "none") {
    p04.style.display = "block";
  } else {
    p04.style.display = "none";
  }
}

function open05() {
  if (p05.style.display == "none") {
    p05.style.display = "block";
  } else {
    p05.style.display = "none";
  }
}

hc01.addEventListener("click", open01);
hc02.addEventListener("click", open02);
hc03.addEventListener("click", open03);
hc04.addEventListener("click", open04);
hc05.addEventListener("click", open05);
