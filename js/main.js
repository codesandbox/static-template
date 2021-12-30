import { namesOne, namesTwo } from "./names.js";

const initializeApp = () => {
  document.getElementById("submit-form").addEventListener("submit", (event) => {
    event.preventDefault();
    // clear out suggestions
    clearSuggestions();
    // generate names
    // display names
  });
};

document.addEventListener("DOMContentLoaded", initializeApp);

const clearSuggestions = () => {
  const display = document.getElementsById("suggestion-section");
  if (!display.classList.contains("hiddden"))
    display.classList.toggle("hidden");
  const list = document.querySelector(".suggestion-secton ol");
  list.innerHTML = "";
};
