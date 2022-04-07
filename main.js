const filmResume = document.querySelectorAll(".resume-item");
const filmYear = document.querySelectorAll(".years h2");
const image = document.querySelectorAll(".images .image");
const frontBar = document.querySelector(".front-bar");
const buttonPrec = document.querySelector(".buttons button");
const buttonNext = document.querySelector(".btn-next");
let index = 0;

const translateX = (element, index) => {
  element.forEach((elementItem) => {
    elementItem.style.transform = `translate(calc(-100%*${index}) , 0%)`;
  });
};

buttonNext.addEventListener("click", () => {
  if (index < 5) {
    frontBar.style.transition = `width 2s ease`;
    frontBar.style.width = `calc(${20 * index}% + 20%)`;
    index = index + 1;
    translateX(image, index);
    translateX(filmResume, index);
    translateX(filmYear, index);
    filmResume[index].dataset.fadeIn = "1";
    filmYear[index].dataset.fadeIn = "1";
  }
});

buttonPrec.addEventListener("click", () => {
  if (index > 0) {
    frontBar.style.width = `calc(${20 * index}% - 20%)`;
    index = index - 1;
    translateX(image, index);
    translateX(filmResume, index);
    translateX(filmYear, index);
  }
});
