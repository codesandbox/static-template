// 禁止浏览器后退
history.pushState(null, null, document.URL);
window.addEventListener("popstate", function () {
  history.pushState(null, null, document.URL);
});

// 禁止右键菜单
document.addEventListener("contextmenu", function (e) {
  console.log("1");
  e.preventDefault();
});

let MouseX1 = document.getElementById("MouseX1");
let MouseX2 = document.getElementById("MouseX2");
let MouseBody = document.getElementById("MouseBody");
let MouseLeft = document.getElementById("MouseLeft");
let MouseRight = document.getElementById("MouseRight");
let MouseWheelBack = document.getElementById("MouseWheelBack");
let MouseWheel = document.getElementById("MouseWheel");
let info = document.getElementById("info");

// document.onclick = function (){
//   MouseLeft.style.opacity = 1;
//   console.log('鼠标单击');
// }

document.onmousemove = function (even) {
  info.innerText = even.clientX + "\n" + even.clientY;
};

document.onmousedown = function (even) {
  // MouseLeft.style.opacity = 1;
  console.log(even);
  switch (even.button) {
    case 0:
      MouseLeft.style.opacity = 1;
      // console.log("鼠标按下0");
      break;
    case 1:
      MouseWheel.classList.add("down");
      MouseWheel.style.height = "56px";
      MouseWheel.style.top = "40px";
      // MouseWheel.style.transform = 'scale(1,0.95)';
      // MouseWheelTran.style.transform = 'scale(1,0.95)';

      // console.log("鼠标按下1");
      break;
    case 2:
      MouseRight.style.opacity = 1;
      // console.log("鼠标按下2");
      break;
    case 3:
      MouseX2.classList.add("down");
      // console.log("鼠标按下3");
      break;
    case 4:
      MouseX1.classList.add("down");
      // console.log("鼠标按下4");
      break;
  }
};

document.onmouseup = function (even) {
  // MouseLeft.style.opacity = 0;
  console.log(even);
  switch (even.button) {
    case 0:
      MouseLeft.style.opacity = 0;
      // console.log("鼠标松开0");
      break;
    case 1:
      MouseWheel.classList.remove("down");
      MouseWheel.style.height = "58px";
      MouseWheel.style.top = "39px";
      // MouseWheel.style.transform = 'scale(1,1)';
      // MouseWheelTran.style.transform = 'scale(1,1)';
      // console.log("鼠标松开1");
      break;
    case 2:
      MouseRight.style.opacity = 0;
      // console.log("鼠标松开2");
      break;
    case 4:
      MouseX1.classList.remove("down");
      // console.log("鼠标按下4");
      break;
    case 3:
      MouseX2.classList.remove("down");
      // console.log("鼠标按下3");
      break;
  }
};

// document.ondblclick = function (){
//   MouseLeft.style.opacity = 1;
//   console.log('鼠标双击');
// }

document.contextmenu = function () {
  MouseLeft.style.opacity = 1;
  console.log("右键菜单");
};

// 滚轮
document.onmousewheel = function (even) {
  console.log(even);
  if (even.deltaY > 0) {
    MouseWheelTran.classList.remove("back");
    MouseWheelTran.classList.add("front");
    setTimeout(() => MouseWheelTran.classList.remove("front"), 200);
  } else {
    MouseWheelTran.classList.remove("front");
    MouseWheelTran.classList.add("back");
    setTimeout(() => MouseWheelTran.classList.remove("back"), 200);
  }
};

function DeleteMWheel() {
  MouseWheelTran.classList.remove("front", "back");
}
