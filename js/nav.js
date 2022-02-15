const toggle = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

/* Toggle mobile menu */
function toggleMenu() {
  navbarLinks.classList.toggle("active");
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);

