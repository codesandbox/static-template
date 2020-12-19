let PageNumber = 7;
let NextNumber = 0;

document.getElementById("LeftButton").onclick = function () {
  DownNumber(PageNumber);
};

function DownNumber(PageNumber) {
  if (PageNumber === 1) {
    console.log("None");
  } else {
    this.NextNumber = this.PageNumber - 1;
  }
  return this.NextNumber;
}

document.getElementsByTagName("span")[1].innerHTML = DownNumber(PageNumber);

// document.getElementById("RightButton").onclick = function () {
//   UpNumber(PageNumber);
// };

// function UpNumber(PageNumber) {
//   if (PageNumber === 7) {
//     console.log("None");
//   } else {
//     PageNumber += 1;
//     console.log(PageNumber);
//   }
// }

// document.getElementsByTagName("span")[1].innerHTML = DownNumber(PageNumber);

//  페이지가 바뀌는 변수가 저장이 안됨
// console.log() 계속보면서 고쳐나가는 거밖엔 없을 듯
