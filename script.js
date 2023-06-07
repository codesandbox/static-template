const btnDropdown = document.getElementById("menu");
const dropMenu = document.getElementById("dropdownMenu");
let isOpen = false;

btnDropdown.addEventListener("click", function () {
  if (isOpen) {
    dropMenu.style.animation = "animreverse 0.7s ease-out";
    setTimeout(function () {
      dropMenu.style.display = "none";
    }, 400);
  } else {
    dropMenu.style.animation = "anim 0.7s ease-in-out";
    dropMenu.style.display = "block";
  }
  isOpen = !isOpen;
});
