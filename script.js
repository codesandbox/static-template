const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

document.onclick = function (e) {
  if (
    e.target.id !== "header" &&
    e.target.id !== "navbar" &&
    e.target.id !== "toggle"
  ) {
    toggle.classList.remove("active");
    navbar.classList.remove("active");
  }
};

toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
};
