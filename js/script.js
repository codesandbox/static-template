document.addEventListener("DOMContentLoaded", function hideBanner() {
  localStorage.setItem("HIDE_PHISHING_BANNER", "true");
});

// const nav_menu = document.getElementById("nav-menu");

// function menuToggle() {
//   if (nav_menu.style.display === "flex") {
//     nav_menu.style.display = "none";
//   } else {
//     nav_menu.style.display = "flex";
//   }
// }
let page = document.getElementsByClassName("page")[0];

var myVar = setTimeout(myTimer, 500);
function myTimer() {
  page.style.opacity = "1";
}

function hide() {
  page.style.transition = "0s";
  page.style.opacity = "0";
}

function show() {
  page.style.transition = "0.5s";
  page.style.opacity = "1";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const body = document.querySelector("body");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  hide();
  modal.style.display = "block";
  modal.style.opacity = "1";
  body.classList.add("modal-open");
};

span.onclick = function () {
  modal.style.display = "none";
  modal.style.opacity = "0";
  body.classList.remove("modal-open");
  show();
};
