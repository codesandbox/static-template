modules.dropdown = {
  dropdown: null,
  openDropdown: function (element, options) {
    let dropdown = createElement("dropdown", "div", "body", {});
    modules.dropdown.dropdown = dropdown;
    let arrow = createElement("dropdownArrow", "div", dropdown, {
      position: "absolute",
      top: "0%",
      left: "50%",
      transform: "translate(-50%, -50%) rotate(45deg)"
    });
    let buttonHolder = createElement("buttonHolder", "div", dropdown);
    modules.dropdown.dropdown.style.opacity = 1;
    dropdown.id = "dropdown";
    dropdown.style.transformOrigin = "top center";
    for (let i in options) {
      let thisButton = createElement("dropdownButton", "button", buttonHolder);
      thisButton.textContent = options[i][0];
      thisButton.style.background = options[i][1];
      if (i === 0) {
        thisButton.focus();
      }
      thisButton.addEventListener("click", function () {
        modules.dropdown.closeDropdown();
        if (typeof options[i][2] === "function") {
          options[i][2]();
        }
      });
    }
    let rect = element.getBoundingClientRect();
    let dropdownRect = dropdown.getBoundingClientRect();
    dropdown.style.left =
      rect.left - (dropdown.clientWidth - element.clientWidth) / 2 + "px";
    if (dropdown.top + dropdown.height > window.innerHeight) {
      dropdown.style.top = rect.top - dropdown.clientHeight - 8 + "px";
      arrow.style.top = "100%";
    } else {
      dropdown.style.top = rect.top + rect.height + 8 + "px";
    }
    dropdownRect = dropdown.getBoundingClientRect();
    if (dropdownRect.left + dropdown.clientWidth > window.innerWidth) {
      dropdown.style.right = "8px";
      dropdown.style.left = "unset";
      arrow.style.left = rect.left + element.clientWidth / 2 - 8 + "px";
    }
    if (dropdownRect.right - dropdown.clientWidth < 0) {
      dropdown.style.left = "8px";
      dropdown.style.right = "unset";
      arrow.style.left = rect.left + element.clientWidth / 2 - 8 + "px";
    }
  },
  closeDropdown: function () {
    if (modules.dropdown.dropdown == null) {
      return;
    }
    if (modules.dropdown.dropdown.hasAttribute("closing") === true) {
      return;
    }
    modules.dropdown.dropdown.style.transform = "scale(0.9)";
    modules.dropdown.dropdown.style.opacity = 0;
    modules.dropdown.dropdown.remove();
  }
};

window.addEventListener("scroll", modules.dropdown.closeDropdown);
window.addEventListener("resize", modules.dropdown.closeDropdown);
window.addEventListener("mousedown", function (e) {
  if (e.target.closest(".dropdown") == null) {
    modules.dropdown.closeDropdown();
  }
});

// (await getModule("dropdown")).openDropdown(findI("dropdownButtonInvite"), [["Block Item", "var(--themeColor)", function(a) { console.log(a); }], ["Block Item", "var(--themeColor)", function(a) { console.log(a); }], ["Block Item", "var(--themeColor)", function(a) { console.log(a); }]]);

/*
let dropdown = findI("dropdown");
    if (dropdown == null) {
      return;
    }
    if (dropdown.hasAttribute("closing") == true) {
      return;
    }
    dropdown.style.transform = "scale(0.9)";
    dropdown.style.opacity = 0;
    dropdown.remove();
    window.addEventListener("mousedown", function (e) {
      if (e.target.closest(".dropdown") == null) {
        modules.dropdown.dropdown.closeDropdown();
      }
    });
    window.addEventListener("scroll", modules.dropdown.dropdown.closeDropdown);
    window.addEventListener("resize", modules.dropdown.dropdown.closeDropdown);
*/

/*
modules.dropdown = async function(element, anchor, buttons) {
  closeDropdown();
  lastOpenElement = element;
  let rect = element.getBoundingClientRect();
  let dropdown = createElement("dropdown", "div", "body", { top: rect.top + "px" });
  dropdown.id = "dropdown";
  if (anchor == "left") {
    dropdown.style.right = window.innerWidth - rect.left - 12 + "px";
    dropdown.style.transformOrigin = "top right";
  } else {
    dropdown.style.left = rect.right + 4 + "px";
    dropdown.style.transformOrigin = "top left";
  }
  for (let i in buttons) {
    let thisButton = createElement("dropdownButton", "button", dropdown);
    thisButton.textContent = buttons[i][0];
    thisButton.style.background = buttons[i][1];
    if (i == 0) {
      thisButton.focus();
    }
    thisButton.addEventListener("click", function() {
      closeDropdown()
      if (typeof buttons[i][2] == "function") {
        buttons[i][2]();
      }
    });
  }
  dropdown.style.transform = "scale(1)";
  dropdown.style.opacity = 1;
  setTimeout(function () {
    let dropdownRect = dropdown.getBoundingClientRect();
    if (dropdownRect.left + dropdownRect.width > window.innerWidth) {
      dropdown.style.right = "8px";
      dropdown.style.left = null;
      dropdown.style.transformOrigin = "center";
    }
    if (dropdownRect.top + dropdownRect.height > window.innerHeight) {
      dropdown.style.bottom = "8px";
      dropdown.style.top = null;
      dropdown.style.transformOrigin = "center";
    }
    if (dropdownRect.right - dropdownRect.width < 0) {
      dropdown.style.left = "8px";
      dropdown.style.right = null;
      dropdown.style.transformOrigin = "center";
    }
  }, 2);
}

async function closeDropdown() {
  let dropdown = findI("dropdown");
  if (dropdown == null) {
    return;
  }
  if (dropdown.hasAttribute("closing") == true) {
    return;
  }
  dropdown.style.transform = "scale(0.9)";
  dropdown.style.opacity = 0;
  await sleep(200);
  dropdown.remove();
}

window.addEventListener("mousedown", function(e) {
  if (e.target.closest(".dropdown") == null) {
    closeDropdown();
  }
});
window.addEventListener("scroll", closeDropdown);
window.addEventListener("resize", closeDropdown);
*/
