const billAmt = document.querySelector(".billAmt");
const cashAmt = document.querySelector(".cashAmt");

const billDiv = document.querySelector(".bill-div");
const cashDiv = document.querySelector(".cash-div");

const nxtBtn = document.querySelector(".nextBtn");
const calcBtn = document.querySelector(".calcBtn");

const returnDiv = document.querySelector(".return");

const table = document.querySelector(".table");

const arrNotes = [1, 5, 10, 20, 100, 500, 2000];

hideReturn();

function nxtOnClick() {
  if (Number(billAmt.value) > 0) {
    billDiv.style.display = "none";
    cashDiv.style.display = "block";
  } else {
    showReturn("Enter A Valid Bill Amount");
    billDiv.style.display = "none";
    table.style.display = "none";
    cashDiv.style.display = "none";
  }
}
function calcOnClick() {
  let bill = Number(billAmt.value);
  let cash = Number(cashAmt.value);
  let change = cash - bill;
  if (bill < 1) {
    showReturn("Enter A Valid Cash Amount");
  }

  table.style.display = "block";
}
function showReturn(text) {
  returnDiv.style.display = "block";
  returnDiv.innerHTML = text;
  table.style.display = "none";
}
function hideReturn() {
  returnDiv.style.display = "none";
  table.style.display = "none";
  cashDiv.style.display = "none";
}
