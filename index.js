const slideBox = document.querySelector(".slide_box");
const slideList = document.querySelector(".slide_list");
const slideContents = document.querySelectorAll(".slide_content"); // contents들 0~7개로 총 8개임
const slideBtnPrev = document.querySelector(".slide_button_prev");
const slideBtnNext = document.querySelector(".slide_button_next");
const slideWidth = 1400;
const slideSpeed = 300;
const slideLength = slideContents.length;

slideList.style.width = slideWidth * slideLength + "px"; // 1400*8 = 11200px

function NextImg() {
  slideList.style.transform = "translateX(1400px)";
  console.log("nextbtn");
}

function PrevImg() {
  slideList.style.transform = "translateX(-1400px)";
  console.log("prevbtn");
}

function init() {
  slideBtnNext.addEventListener("click", NextImg);
  slideBtnPrev.addEventListener("click", PrevImg);
}

init();

//https://im-developer.tistory.com/97 참고
