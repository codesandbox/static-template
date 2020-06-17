const nav = document.querySelector(".main-content nav");
var topOfNav = nav.offsetTop;

const landingContent = document.querySelector(".landing-top");
const landingContent2 = document.querySelector(".arrow");
const [textRed, textGreen, textBlue] = [255, 255, 255];

const landingSection = document.querySelector(".landing");
const [backgroundRed, backgroundGreen, backgroundBlue] = [0, 7, 28];

var right = "fca";
var main = "impressions";
var left = "third space";
const previewContainer = document.querySelector(".main-preview");
const mainImageContainer = document.querySelector(".main-preview-image");
const rightPreview = document.querySelector("#sub-preview-2");
const rightTitle = document.querySelector("#sub-preview-2 h1");
const rightSubtitle = document.querySelector("#sub-preview-2 h2");
const leftPreview = document.querySelector("#sub-preview-1");
const leftTitle = document.querySelector("#sub-preview-1 h1");
const leftSubtitle = document.querySelector("#sub-preview-1 h2");
const mainTitle = document.querySelector(".main-preview-info h1");
const mainSubtitle = document.querySelector(".main-preview-info h2");
const mainImage = document.querySelector(".main-preview-image img");
const mainContainer = document.querySelector(".main-preview");
var timer;

//  LOAD AT TOP OF PAGE
window.onunload = function() {
  window.scrollTo(0, 0);
};

// STICKY NAV
window.addEventListener("scroll", function() {
  if (window.scrollY >= topOfNav) {
    nav.style.position = "sticky";
    nav.style.top = "0";
  } else {
    nav.style.position = "relative";
  }
});

//LANDING TEXT ANIMATION
function fade(item) {
  const text = document.querySelector(item);
  const strText = text.textContent;
  const splitText = strText.split("");

  text.textContent = "";
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
  }
}

fade(".landing-intro h1");
fade(".landing-intro h2:first-of-type");
fade(".landing-intro h2:last-of-type");

// LANDING TEXT POSITION
window.addEventListener("scroll", function() {
  if (window.scrollY < topOfNav * (3 / 5)) {
    landingContent.style.position = "fixed";
    landingContent2.style.opacity = "1";
  } else {
    landingContent.style.position = "absolute";
    landingContent.style.bottom = "0";
    landingContent2.style.opacity = "0";
  }
});

//LANDING TEXT COLOR
window.addEventListener("scroll", function() {
  const x = 1 + (window.scrollY || window.pageYOffset) / 150;
  const [r2, g2, b2] = [textRed / x, textGreen / x, textBlue / x].map(
    Math.round
  );
  landingContent.style.color = `rgb(${r2}, ${g2}, ${b2})`;
  landingContent2.style.color = `rgb(${r2}, ${g2}, ${b2})`;
});

// LANDING BACKGROUND COLOR
window.addEventListener("scroll", function() {
  const y = 1 + (window.scrollY || window.pageYOffset) / 5;
  const [r, g, b] = [
    backgroundRed + y,
    backgroundGreen + y,
    backgroundBlue + y
  ].map(Math.round);
  landingSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

//  SUBTITLE FADE IN
function fadeOnScroll(fadeItem) {
  const item = document.querySelector(fadeItem);

  item.style.opacity = "0";
  item.style.webkitTransform = "translateX(-30px)";
  item.style.transition = "all 0.75s ease-in-out";

  var signalHeight = item.offsetTop - window.innerHeight * (2 / 3);

  window.addEventListener("scroll", function() {
    if (window.scrollY >= signalHeight) {
      item.style.webkitTransform = "translateX(0px)";
      item.style.opacity = "1";
    }
  });
}
fadeOnScroll("#landing-bold-subtitle");
fadeOnScroll("#landing-small-subtitle");

// DESKTOP PROJECT PREVIEW
function animatePreview() {
  mainImageContainer.style.transformOrigin = "top";
  mainImageContainer.style.webkitTransform = "scaleY(0)";
  mainImageContainer.style.transition =
    "all 1s cubic-bezier(0.22, 0.61, 0.36, 1) 0s";

  var signalHeight2 = previewContainer.offsetTop - window.innerHeight * (2 / 3);

  window.addEventListener("scroll", function() {
    if (window.scrollY >= signalHeight2) {
      mainImageContainer.style.webkitTransform = "scaleY(1)";
    }
  });
}

animatePreview();

function fcaMain() {
  mainTitle.innerText = "Fiat Chrysler AI Concept";
  mainSubtitle.innerText = "UX Internship, Research, AI";
  mainImage.setAttribute("src", "media/fca.jpg");
  mainContainer.style.backgroundColor = "rgba(185, 222, 177, 0.3)";
  main = "fca";
}

function impressionsMain() {
  mainTitle.innerText = "Impressions";
  mainSubtitle.innerText = "UI/UX, Service Design";
  mainImage.setAttribute("src", "media/impressions.jpg");
  mainContainer.style.backgroundColor = "rgba(234, 219, 241, 0.3)";
  main = "impressions";
}

function thirdSpaceMain() {
  mainTitle.innerText = "The Third Space";
  mainSubtitle.innerText = "Generative Research, Product Concept, UI/UX";
  mainImage.setAttribute("src", "media/acclimate.jpg");
  mainContainer.style.backgroundColor = "rgba(201, 215, 248, 0.3)";
  main = "third space";
}

rightPreview.addEventListener("click", function() {
  rightTitle.classList.remove("left-fade");
  rightSubtitle.classList.remove("left-fade");
  void rightTitle.offsetWidth;
  void rightSubtitle.offsetWidth;
  rightTitle.classList.add("left-fade");
  rightSubtitle.classList.add("left-fade");
  timer = setTimeout(rightPreviewAnimation, 300);
  function rightPreviewAnimation() {
    mainImageContainer.classList.remove("roll-in");
    mainTitle.classList.remove("fade-text");
    mainSubtitle.classList.remove("fade-text");
    void mainImageContainer.offsetWidth;
    void mainTitle.offsetWidth;
    void mainSubtitle.offsetWidth;
    if (main === "impressions" && right === "fca") {
      fcaMain();
      rightTitle.innerText = "Impressions";
      rightSubtitle.innerText = "UI/UX, Service Design";
      right = "impressions";
    } else if (main === "third space" && right === "fca") {
      fcaMain();
      rightTitle.innerText = "The Third Space";
      rightSubtitle.innerText = "Generative Research, Product Concept, UI/UX";
      right = "third space";
    } else if (main === "third space" && right === "impressions") {
      impressionsMain();
      rightTitle.innerText = "The Third Space";
      rightSubtitle.innerText = "Generative Research, Product Concept, UI/UX";
      right = "third space";
    } else if (main === "fca" && right === "impressions") {
      impressionsMain();
      rightTitle.innerText = "Fiat Chrysler AI Concept";
      rightSubtitle.innerText = "UX Internship, Research, AI";
      right = "fca";
    } else if (main === "fca" && right === "third space") {
      thirdSpaceMain();
      rightTitle.innerText = "Fiat Chrysler AI Concept";
      rightSubtitle.innerText = "UX Internship, Research, AI";
      right = "fca";
    } else if (main === "impressions" && right === "third space") {
      thirdSpaceMain();
      rightTitle.innerText = "Impressions";
      rightSubtitle.innerText = "UI/UX, Service Design";
      right = "impressions";
    }
    mainTitle.classList.add("fade-text");
    mainSubtitle.classList.add("fade-text");
    mainImageContainer.classList.add("roll-in");
  }
});

leftPreview.addEventListener("click", function() {
  leftTitle.classList.remove("right-fade");
  leftSubtitle.classList.remove("right-fade");
  void leftTitle.offsetWidth;
  void leftSubtitle.offsetWidth;
  leftTitle.classList.add("right-fade");
  leftSubtitle.classList.add("right-fade");
  timer = setTimeout(leftPreviewAnimation, 300);
  function leftPreviewAnimation() {
    mainImageContainer.classList.remove("roll-in");
    mainTitle.classList.remove("fade-text");
    mainSubtitle.classList.remove("fade-text");
    void mainImageContainer.offsetWidth;
    void mainTitle.offsetWidth;
    void mainSubtitle.offsetWidth;
    if (main === "impressions" && left === "fca") {
      fcaMain();
      leftTitle.innerText = "Impressions";
      leftSubtitle.innerText = "UI/UX, Service Design";
      left = "impressions";
    } else if (main === "third space" && left === "fca") {
      fcaMain();
      leftTitle.innerText = "The Third Space";
      leftSubtitle.innerText = "Generative Research, Product Concept, UI/UX";
      left = "third space";
    } else if (main === "third space" && left === "impressions") {
      impressionsMain();
      leftTitle.innerText = "The Third Space";
      leftSubtitle.innerText = "Generative Research, Product Concept, UI/UX";
      left = "third space";
    } else if (main === "fca" && left === "impressions") {
      impressionsMain();
      leftTitle.innerText = "Fiat Chrysler AI Concept";
      leftSubtitle.innerText = "UX Internship, Research, AI";
      left = "fca";
    } else if (main === "fca" && left === "third space") {
      thirdSpaceMain();
      leftTitle.innerText = "Fiat Chrysler AI Concept";
      leftSubtitle.innerText = "UX Internship, Research, AI";
      left = "fca";
    } else if (main === "impressions" && left === "third space") {
      thirdSpaceMain();
      leftTitle.innerText = "Impressions";
      leftSubtitle.innerText = "UI/UX, Service Design";
      left = "impressions";
    }
    mainTitle.classList.add("fade-text");
    mainSubtitle.classList.add("fade-text");
    mainImageContainer.classList.add("roll-in");
  }
});
