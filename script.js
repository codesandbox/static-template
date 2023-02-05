let modalCola = document.getElementById("infoModalCola");
let btnCola = document.getElementById("buttonModalCola");
let closeCola = document.getElementById("closeCola");
btnCola.onclick = function () {
  modalCola.style.display = "block";
};
closeCola.onclick = function () {
  modalCola.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modalCola) {
    modalCola.style.display = "none";
  }
};

let modalZero = document.getElementById("infoModalZero");
let btnZero = document.getElementById("buttonModalZero");
let closeZero = document.getElementById("closeZero");
btnZero.onclick = function () {
  modalZero.style.display = "block";
};
closeZero.onclick = function () {
  modalZero.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modalZero) {
    modalZero.style.display = "none";
  }
};

let modalFancy = document.getElementById("infoModalFancy");
let btnFancy = document.getElementById("buttonModalFancy");
let closeFancy = document.getElementById("closeFancy");
btnFancy.onclick = function () {
  modalFancy.style.display = "block";
};
closeFancy.onclick = function () {
  modalFancy.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modalFancy) {
    modalFancy.style.display = "none";
  }
};

let modalStreet = document.getElementById("infoModalStreet");
let btnStreet = document.getElementById("buttonModalStreet");
let closeStreet = document.getElementById("closeStreet");
btnStreet.onclick = function () {
  modalStreet.style.display = "block";
};
closeStreet.onclick = function () {
  modalStreet.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modalStreet) {
    modalStreet.style.display = "none";
  }
};
let modalOchakovsky = document.getElementById("infoModalOchakovsky");
let btnOchakovsky = document.getElementById("buttonModalOchakovsky");
let closeOchakovsky = document.getElementById("closeOchakovsky");
btnOchakovsky.onclick = function () {
  modalOchakovsky.style.display = "block";
};
closeOchakovsky.onclick = function () {
  modalOchakovsky.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modalStreet) {
    modalOchakovsky.style.display = "none";
  }
};
let modalSemSekret = document.getElementById("infoModalSemSekret");
let btnSemSekret = document.getElementById("buttonModalSemSekret");
let closeSemSekret = document.getElementById("closeSemSekret");
btnSemSekret.onclick = function () {
  modalSemSekret.style.display = "block";
};
closeSemSekret.onclick = function () {
  modalSemSekret.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modalStreet) {
    modalSemSekret.style.display = "none";
  }
};
