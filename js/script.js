const menuOpenIcon = document.querySelector(".hamburger-icon");
const sideMenuCloseIcon = document.querySelector(".hamburger-icon-close");
const sideMenu = document.querySelector(".side-menu");
const openIconTop = document.querySelector(".hamburger-icon div:first-of-type");
const openIconBottom = document.querySelector(
  ".hamburger-icon div:last-of-type"
);
const desktopMenu = document.querySelector(".desktop-menu");
var openNav = false;
var isMobile;
var winWidth;

// MENU OPEN/CLOSE
function openAnimation() {
  //opening animation for desktop nav
  openIconTop.style.webkitTransform = "rotate(-45deg) translateY(6px)";
  openIconBottom.style.webkitTransform = "rotate(45deg) translateY(-6px)";
  desktopMenu.style.webkitTransform = "scaleX(1)";
  desktopMenu.style.opacity = "1";
}

function closeAnimation() {
  //closing animation for desktop nav
  openIconTop.style.webkitTransform = "rotate(0deg) translateY(0px)";
  openIconBottom.style.webkitTransform = "rotate(0deg) translateY(0px)";
  desktopMenu.style.webkitTransform = "scaleX(0)";
  desktopMenu.style.opacity = "0";
}

var desktopFunction = function() {
  //eventlistener function for desktop nav
  if (openNav === false) {
    openAnimation();
    openNav = true;
  } else if (openNav === true) {
    closeAnimation();
    openNav = false;
  }
};

var mobileOpenFunction = function() {
  //eventlistener function for opening mobile nav
  sideMenu.classList.add("side-menu-open");
  openNav = true;
};

var mobileCloseFunction = function() {
  //eventlistener function for closing mobile nav
  sideMenu.classList.remove("side-menu-open");
  openNav = false;
};

window.onload = function() {
  //determines which nav is functioning on load of page
  winWidth = window.innerWidth;
  if (winWidth <= 800) {
    //if mobile width, then mobile nav functions
    isMobile = true;
    sideMenu.style.display = "block";
    menuOpenIcon.addEventListener("click", mobileOpenFunction);
    sideMenuCloseIcon.addEventListener("click", mobileCloseFunction);
  } else if (winWidth > 800) {
    //if desktop width, then desktop nav functions
    isMobile = false;
    desktopMenu.style.display = "flex";
    menuOpenIcon.addEventListener("click", desktopFunction);
  }
};

window.onresize = function() {
  //determines which nav is functioning on resize of page
  winWidth = window.innerWidth;
  if (winWidth <= 800) {
    //if mobile width
    if (isMobile === false) {
      //and previous nav was desktop
      isMobile = true;
      desktopMenu.style.display = "none"; //reverse desktop nav functions
      menuOpenIcon.removeEventListener("click", desktopFunction);
      closeAnimation();
      openNav = false;
      sideMenu.style.display = "block"; //add mobile nav functions
      menuOpenIcon.addEventListener("click", mobileOpenFunction);
      sideMenuCloseIcon.addEventListener("click", mobileCloseFunction);
    }
  } else if (winWidth > 800) {
    //if desktop width
    if (isMobile === true) {
      //and previous nav was mobile
      isMobile = false;
      sideMenu.style.display = "none"; //reverse mobile nav functions
      menuOpenIcon.removeEventListener("click", mobileOpenFunction);
      sideMenuCloseIcon.removeEventListener("click", mobileCloseFunction);
      sideMenu.classList.remove("side-menu-open");
      openNav = false;
      desktopMenu.style.display = "flex"; //add desktop nav functions
      menuOpenIcon.addEventListener("click", desktopFunction);
    }
  }
};
