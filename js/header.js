//Mega menus

let megaMenuHovered = false;

const megaMenus = document.querySelectorAll(".mega-menu");
console.log(megaMenus);
const megaMenusOpeners = document.querySelectorAll(".js-mega-menu-openers");
console.log(megaMenusOpeners);

//Check if menu is hovered

// Check if the window size matches the media query

const breakpointSmallWindow = window.matchMedia("(max-width:1132px)");
const breakpointTablet = window.matchMedia("(max-width:992px)");
const breakpointIpad = window.matchMedia("(max-width:768px)");
const breakpointMobile = window.matchMedia("(max-width:480px)");

// Define the mega menu behavior

const megaMenuBehavior = (breakpointSmallWindow, opener, target) => {
  if (breakpointSmallWindow.matches) {
    console.log("Mobile");
    opener.removeEventListener("mouseover", () => {
      showMegaMenuOnHover(target);
    });
    opener.removeEventListener("mouseleave", () => {
      hideMegaMenuOnHoverExit(target);
    });
    megaMenuBehaviorMobile(opener, target);
  } else {
    console.log("Desktop");
    opener.removeEventListener("click", () => {
      showMegaMenuOnClick(target);
    });
    megaMenuBehaviorDesktop(opener, target);
  }
};

const showMegaMenuOnHover = (target) => {
  const otherMegaMenus = [...megaMenus].filter(
    (megaMenu) => megaMenu !== target
  );
  otherMegaMenus.forEach((megaMenu) =>
    megaMenu.classList.remove("js-mega-menu-active")
  );
  target.classList.toggle("js-mega-menu-active");
};

const hideMegaMenuOnHoverExit = (target) => {
  //Wait for a little bit
  setTimeout(() => {
    checkIfMenuIsHovered(target);
    if (
      megaMenuHovered === false &&
      target.classList.contains("js-mega-menu-active")
    ) {
      target.classList.toggle("js-mega-menu-active");
    } else if (target.classList.contains("js-mega-menu-active")) {
      target.addEventListener("mouseleave", () => {
        target.classList.toggle("js-mega-menu-active");
      });
    }
  }, 400);
};

const showMegaMenuOnClick = (target) => {
  const otherMegaMenus = [...megaMenus].filter(
    (megaMenu) => megaMenu !== target
  );
  otherMegaMenus.forEach((megaMenu) =>
    megaMenu.classList.remove("js-mega-menu-active")
  );
  target.classList.toggle("js-mega-menu-active");
};

const megaMenuBehaviorDesktop = (opener, target) => {
  opener.addEventListener("mouseenter", () => {
    showMegaMenuOnHover(target);
  });

  opener.addEventListener("mouseleave", () => {
    hideMegaMenuOnHoverExit(target);
  });
};

const megaMenuBehaviorMobile = (opener, target) => {
  opener.addEventListener("click", () => {
    showMegaMenuOnClick(target);
  });
};

//Check if menu is hovered

const checkIfMenuIsHovered = (target) => {
  target.addEventListener("mouseenter", () => {
    megaMenuHovered = true;
    // console.log(megaMenuHovered)
  });
  target.addEventListener("mouseleave", () => {
    megaMenuHovered = false;
    // console.log(megaMenuHovered)
  });
};

megaMenusOpeners.forEach((opener) => {
  let identifier = opener.getAttribute("data-opens");
  let target = [...megaMenus].find(
    (megaMenu) => megaMenu.getAttribute("data-mega-menu") === identifier
  );
  megaMenuBehavior(breakpointSmallWindow, opener, target);
});

// Mobile menu toggleling

const mobileMenuToggle = document.querySelector(".js-mobile-menu__toggle");
const mobileMenuToggleIcon = document.querySelector(
  ".js-mobile-menu__toggle i"
);
const mobileMenuLogo = document.querySelector(".logo__mobile-nav");
const headerNav = document.querySelector(".header__nav");

mobileMenuToggle.addEventListener("click", () => {
  headerNav.classList.toggle("js-mobile-menu-active");
  mobileMenuToggleIcon.classList.toggle("js-mobile-menu-icon-white");
  mobileMenuLogo.classList.toggle("js-logo__mobile-nav-active");
});
