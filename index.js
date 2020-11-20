const createArr = () => {
  let arr = [];
  for (let i = 1; i <= 75; i++) {
    arr.push(i);
  }
  return arr;
};
const rouletteStart = () => {
  let out;
  dom.startBtn.classList.add("shuffle");
  dom.resetBtn.classList.add("shuffle");
  music.play();
  roulette = setInterval(changeNum, 100);
  setTimeout(() => {
    clearInterval(roulette);
    out = Number(dom.showNumber.textContent);
    console.log("stop");
    dom.startBtn.classList.remove("shuffle");
    dom.resetBtn.classList.remove("shuffle");
    outNum.push(out);
    // keyをセット
    localStorage.setItem("outNum", outNum);

    numArr.splice(numArr.indexOf(out), 1);
    outNumCheck();
    // 読み上げ音声
    speakNumber(out);

    console.log(out);
    console.log(numArr);
  }, 5000);
};
const bingoReset = () => {
  let numberList = Array.from(dom.numberList.children);
  numArr = createArr();
  outNum = [];
  // keyを初期化
  localStorage.setItem("outNum", outNum);
  numberList.forEach((el, i) => {
    dom.numberList.children[i].classList.remove("out");
  });
  console.log(numArr);
  console.log(dom.numberList.children);
};
const speakNumber = (text) => {
  setTimeout(() => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }, 1000);
};
const changeNum = () => {
  console.log(numArr.length);
  dom.showNumber.textContent =
    numArr[Math.floor(Math.random() * numArr.length)];
};
const outNumCheck = () => {
  outNum.forEach((el) => {
    dom.numberList.children[el - 1].classList.add("out");
  });
};

let roulette;
let numArr = createArr();
// keyを取得
let outNum = localStorage.getItem("outNum")
  ? localStorage
      .getItem("outNum")
      .split(",")
      .map((el) => Number(el))
  : [];
let music = new Audio("audio/m1-v3.mp3");
const dom = {
  showNumber: document.querySelector(".show-number span"),
  numberList: document.querySelector(".number-list"),
  resetBtn: document.querySelector(".reset"),
  startBtn: document.querySelector(".start")
};
outNumCheck();
dom.startBtn.addEventListener("click", rouletteStart);
dom.resetBtn.addEventListener("click", bingoReset);
