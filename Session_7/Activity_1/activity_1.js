"use strict";
const count = document.querySelector("#count");
const dec = document.querySelector("#dec");
const inc = document.querySelector("#inc");

function subcounter() {
  count.innerHTML--;
}

function addcounter() {
  count.innerHTML++;
}
dec.addEventListener("click", subcounter);
inc.addEventListener("click", addcounter);
