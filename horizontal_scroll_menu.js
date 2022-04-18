let currentScrollPosition = 0;
let scrollAmout = 320;

const sCont = document.querySelector(".storys-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");

btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
  currentScrollPosition += val * scrollAmout;

  if (currentScrollPosition >= 0) {
    currentScrollPosition = 0;
    btnScrollLeft.style.opacity = "0";
  } else {
    btnScrollLeft.style.opacity = "1";
  }
  if (currentScrollPosition <= maxScroll) {
    currentScrollPosition = maxScroll;
    btnScrollRight.style.opacity = "0";
  } else {
    btnScrollRight.style.opacity = "1";
  }

  sCont.style.left = currentScrollPosition + "px";
}
