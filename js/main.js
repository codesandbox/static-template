// Source

// https://webdesign.tutsplus.com/tutorials/building-an-admin-dashboard-layout-with-css-and-a-touch-of-javascript--cms-33964

const html = document.documentElement;
// const body = document.body;
const switchInput = document.querySelector(".switch input");
const switchLabel = document.querySelector(".switch label");
const switchLabelText = switchLabel.querySelector("span:last-child");
const lightModeClass = "light-mode";

/*TOGGLE LIGHT/DARK MODE*/
if (localStorage.getItem("dark-mode") === "false") {
  html.classList.add(lightModeClass);
  switchInput.checked = false;
  switchLabelText.textContent = "Light";
}

switchInput.addEventListener("input", function () {
  html.classList.toggle(lightModeClass);
  if (html.classList.contains(lightModeClass)) {
    switchLabelText.textContent = "Light";
    localStorage.setItem("dark-mode", "false");
  } else {
    switchLabelText.textContent = "Dark";
    localStorage.setItem("dark-mode", "true");
  }
});
