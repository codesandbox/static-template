onst mobileToggleBtn = document.getElementById("mobileToggleBtn");
const mobileNav = document.getElementById("mobileNav");

mobileToggleBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});
