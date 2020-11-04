const gmail = document.getElementById("gmail");
const navLeft = document.getElementById("navLeft");
const all = document.getElementById("all");
const mobileImage = document.getElementById("mobileImage");

function myFunction(x) {
  if (x.matches) {
    document.body.style.position = "absolute";
    gmail.classList.add("hide");
    document.getElementById("googleText").style.width = "200px";
    document.getElementById("title").style.paddingTop = "60px";
    document.getElementById("images").classList.add("hide");
    document.getElementById("twoBtn").classList.add("hide");
    document.getElementById("languageTitle").classList.add("center");
    document.getElementById("footerNav").classList.add("hide");
    document.getElementById("footerBottomNav").classList.add("center");
  } else {
    navLeft.classList.add("hide");
    all.classList.add("hide");
    mobileImage.classList.add("hide");
    document.getElementById("extraIcons").classList.add("hide");
  }
}

var x = window.matchMedia("(max-width: 768px)");
myFunction(x);
x.addListener(myFunction);
