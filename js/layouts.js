const desktop = window.matchMedia("(min-width:993px)");
const tablet = window.matchMedia("(max-width:992px) and (min-width:560px)");
const mobile = window.matchMedia("(max-width:559px)");

const allCols = document.querySelectorAll(".grid-column-demo");
const mobileCols = document.querySelectorAll(".mobile-span1");
const tabletCols = document.querySelectorAll(".tablet-span1");
const demoRow = document.querySelector(".grid-row-demo");
const gridOverlay = document.querySelector(".grid-overlay");

if (mobile.matches) {
  allCols.forEach((column) => column.remove());
  mobileCols.forEach((column) => demoRow.append(column));
} else if (tablet.matches) {
  allCols.forEach((column) => column.remove());
  tabletCols.forEach((column) => demoRow.append(column));
} else if (desktop.matches) {
  demoRow.remove();
  gridOverlay.append(demoRow);
  allCols.forEach((column) => demoRow.append(column));
}

mobile.addEventListener("change", () => {
  if (mobile.matches) {
    allCols.forEach((column) => column.remove());
    mobileCols.forEach((column) => demoRow.append(column));
  }
});

tablet.addEventListener("change", () => {
  if (tablet.matches) {
    allCols.forEach((column) => column.remove());
    tabletCols.forEach((column) => demoRow.append(column));
  }
});

desktop.addEventListener("change", () => {
  if (desktop.matches) {
    demoRow.remove();
    gridOverlay.append(demoRow);
    allCols.forEach((column) => demoRow.append(column));
  }
});

const hideShowToggle = document.querySelector(".grid-toggle");
const instructions = document.querySelector(".instructions");

hideShowToggle.addEventListener("click", () => {
  gridOverlay.classList.toggle("js-grid-overlay-hidden");
  instructions.classList.toggle("js-instructions-hidden");
});
