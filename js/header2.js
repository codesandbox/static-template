/**
 * Step 1: Are we at the breakpoint?
 *  */

// What is our breakpoint?
const breakpoint = window.matchMedia("(max-width:1132px)");
// returns true or false

/**
 * Step 2: If we are at breakpoint, do something, if not do something else
 *
 * */

const megaMenuBehavior = (breakpoint) => {
  // Let's definte the elements we are going to use
  const openers = document.querySelectorAll(".js-mega-menu-openers");
  const megaMenus = document.querySelectorAll(".mega-menu");

  // -------------------------------
  /**
   * Helper functions
   */

  //  MOBILE HELPERS
  const showAndHideMegaMenuClick = (target) => {
    if (target.classList.contains("js-mega-menu-active")) {
      target.classList.remove("js-mega-menu-active");
    } else {
      target.classList.add("js-mega-menu-active");
    }
  };

  //DESKTOP HELPERS
  const showMegaMenuHover = (target) => {
    megaMenus.forEach((megaMenu) => {
      megaMenu.classList.remove("js-mega-menu-active");
    });
    target.classList.toggle("js-mega-menu-active");
  };

  const hideMegaMenuHover = (target) => {
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

  //Check if the menu is hovered

  let megaMenuHovered = false;

  const checkIfMenuIsHovered = (target) => {
    target.addEventListener("mouseenter", () => {
      megaMenuHovered = true;
    });
    target.addEventListener("mouseleave", () => {
      megaMenuHovered = false;
    });
  };

  const megaMenuAndOpenersCouple = {
    // MegaMenus and Openers
    product: {
      opener: openers[0],
      megaMenu: megaMenus[0]
    },
    whyGetAccept: {
      opener: openers[1],
      megaMenu: megaMenus[1]
    },
    ressources: {
      opener: openers[2],
      megaMenu: megaMenus[2]
    },
    // Helper Functions
    functions: {
      megaMenuClick: {
        megaMenuClickProduct: showAndHideMegaMenuClick(this.product.megaMenu),
        megaMenuClickWhyGetAccept: showAndHideMegaMenuClick(
          this.whyGetAccept.megaMenu
        ),
        megaMenuClickRessources: showAndHideMegaMenuClick(
          this.ressources.megaMenu
        )
      },
      megaMenuHover: {
        megaMenuMouseEnterProduct: showMegaMenuHover(this.product.megaMenu),
        megaMenuMouseEnterWhyGetAccept: showMegaMenuHover(
          this.whyGetAccept.megaMenu
        ),
        megaMenuMouseEnterRessources: showMegaMenuHover(
          this.ressources.megaMenu
        )
      },
      megaMenuExit: {
        megaMenuMouseExitProduct: hideMegaMenuHover(this.product.megaMenu),
        megaMenuMouseExitWhyGetAccept: hideMegaMenuHover(
          this.whyGetAccept.megaMenu
        ),
        megaMenuMouseExitRessources: hideMegaMenuHover(this.ressources.megaMenu)
      }
    }
  };

  // // Declaring the eventhandler functions
  // const megaMenuClick = () => {
  //   showAndHideMegaMenuClick(target);
  // };
  // const megaMenuMouseEnter = () => {
  //   showMegaMenuHover(target);
  // };
  // const megaMenuMouseExit = () => {
  //   hideMegaMenuHover(target);
  // };

  //----------------------------------

  /**
   *
   * Write the two mega menu behavior
   */

  const megaMenuBehaviorMobile = () => {
    //Add Listener
    megaMenuAndOpenersCouple.product.opener.addEventListener(
      "click",
      megaMenuAndOpenersCouple.functions.megaMenuClick.megaMenuClickProduct
    );
    megaMenuAndOpenersCouple.whyGetAccept.opener.addEventListener(
      "click",
      megaMenuAndOpenersCouple.functions.megaMenuClick.megaMenuClickProduct
    );
    megaMenuAndOpenersCouple.ressources.opener.addEventListener(
      "click",
      megaMenuAndOpenersCouple.functions.megaMenuClick.megaMenuClickProduct
    );
  };

  if (breakpoint.matches) {
    for (let i = 0; i <= 2; i++) {
      megaMenuAndOpenersCouple[i].opener.removeEventListener(
        "mouseenter",
        megaMenuMouseEnter
      );
      megaMenuAndOpenersCouple[i].opener.removeEventListener(
        "mouseleave",
        megaMenuMouseExit
      );
      megaMenuAndOpenersCouple[i].opener.removeEventListener(
        "click",
        megaMenuClick
      );
    }
    // We are before the breakpoint and should have a mobile/tablet behavior
    for (let i = 0; i <= 2; i++) {
      megaMenuBehaviorMobile(
        megaMenuAndOpenersCouple[i].opener,
        megaMenuAndOpenersCouple[i].megaMenu
      );
    }
  } else {
    // We are after the breakpoint and should have a dekstop/laptop behavior
    openers.forEach((opener) => {
      let identifier = opener.getAttribute("data-opens");
      let target = [...megaMenus].find(
        (megaMenu) => megaMenu.getAttribute("data-mega-menu") === identifier
      );
      megaMenuBehaviorDesktop(opener, target);
    });
  }
};

// Step 3: If the user resize the screen we should change our beahvior as well

breakpoint.addEventListener("change", () => {
  megaMenuBehavior(breakpoint);
});

megaMenuBehavior(breakpoint);

// Mobile menu toggleling

const mobileMenuToggle = document.querySelector(".js-mobile-menu__toggle");
const headerNav = document.querySelector(".header__nav");

mobileMenuToggle.addEventListener("click", () => {
  headerNav.classList.toggle("js-mobile-menu-active");
});
