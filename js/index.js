const clearBtn = document.querySelector(".clear-btn");
const leapNextBtn = document.querySelector(".leap-next-btn");
const leapBackBtn = document.querySelector(".leap-back-btn");

const pondText = document.querySelector(".pond-text");
const frogText = document.querySelector(".frog-text");

const pond = document.querySelector(".pond");
const frog = document.querySelector(".frog-wrapper");

const setAttrs = (el, value = "") => {
  el.setAttribute("style", value);
};

const getElmsCenterPosition = (elms) => {
  const rect = elms.getBoundingClientRect();
  return (
    {
      left: rect.left + (rect.right - rect.left) / 2,
      top: rect.top + (rect.bottom - rect.top) / 2
    } || {}
  );
};

const trim = (str) => {
  return str.replace(/\s*/g, "");
};

const pondCenter = getElmsCenterPosition(pond);

clearBtn.addEventListener("click", () => {
  pondText.value = "";
  frogText.value = "";
  setAttrs(pond, "");
  setAttrs(frog, "");
});

leapBackBtn.addEventListener("click", () => {
  setAttrs(pond, "");
  setAttrs(frog, "");
});

leapNextBtn.addEventListener("click", () => {
  try {
    setAttrs(pond, trim(pondText.value));
    setAttrs(frog, trim(frogText.value));
    const frogCenter = getElmsCenterPosition(frog);
    const { left, top } = frogCenter;
    if (left === pondCenter.left && top === pondCenter.top) {
      alert("小哇：谢谢你！");
    } else {
      alert("小哇：你要谋杀我吗！");
    }
  } catch (e) {
    setAttrs(pond, "");
    setAttrs(frog, "");
    alert(e);
  }
});
