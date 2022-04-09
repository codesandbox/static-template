const body = document.querySelector("body");
const filmResume = document.querySelectorAll(".resume-item");
const filmYear = document.querySelectorAll(".years h2");
const image = document.querySelectorAll(".images .image");
const frontBar = document.querySelector(".front-bar");
const progressBarCircle = document.querySelectorAll(".progress-bar .circle");
const buttonPrec = document.querySelector(".buttons button");
const buttonNext = document.querySelector(".btn-next");

let index = 0;

const translateX = (element, index) => {
  element.forEach((elementItem) => {
    elementItem.style.transform = `translate(calc(-100%*${index}) , 0%)`;
  });
};

const fadeInOutRight = (element, index) => {
  element[index].classList.remove("fade-in-left", "fade-out-left");
  element[index + 1].classList.remove("fade-in-left", "fade-out-left");
  element[index].classList.add("fade-out-right");
  element[index + 1].classList.add("fade-in-right");
};

const fadeInOutLeft = (element, index) => {
  element[index].classList.remove("fade-in-right", "fade-out-right");
  element[index].classList.add("fade-in-left");
  element[index + 1].classList.add("fade-out-left");
};

buttonNext.addEventListener("click", () => {
  if (index < 5) {
    frontBar.style.width = `calc(${20 * index}% + 20%)`;
    translateX(image, index);
    fadeInOutRight(filmResume, index);
    fadeInOutRight(filmYear, index);
    index = index + 1;
    progressBarCircle[index].dataset.activeCircle = "1";
    body.style.backgroundImage = `url('images/sw${index}.jpg')`;
  }
});

buttonPrec.addEventListener("click", () => {
  if (index > 0) {
    frontBar.style.width = `calc(${20 * index}% - 20%)`;
    progressBarCircle[index].dataset.activeCircle = "0";
    index = index - 1;
    body.style.backgroundImage = `url('images/sw${index}.jpg')`;
    translateX(image, index);
    fadeInOutLeft(filmResume, index);
    fadeInOutLeft(filmYear, index);
  }
});
