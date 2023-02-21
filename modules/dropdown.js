modules.dropdown = {
  dropdown: null,
  openDropdown: function (element, options) {
    modules.dropdown.closeDropdown();
    let dropdown = createElement("dropdown", "div", "body", {});
    modules.dropdown.dropdown = dropdown;
    let arrow = createElement("dropdownArrow", "div", dropdown, {
      position: "absolute",
      top: "18px",
      left: "50%",
      transform: "translate(-50%, -50%) rotate(45deg)"
    });
    let buttonHolder = createElement("buttonHolder", "div", dropdown);
    dropdown.id = "dropdown";
    dropdown.style.transformOrigin = "top center";
    for (let i in options) {
      let thisButton = createElement("dropdownButton", "button", buttonHolder);
      thisButton.textContent = options[i][0];
      thisButton.style.setProperty(
        "--themeColorSec",
        options[i][1] || "var(--themeColorSec)"
      );
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
      rect.left +
      window.scrollX -
      (dropdown.clientWidth - element.clientWidth) / 2 +
      "px";
    dropdown.style.top = rect.top + window.scrollY + rect.height + 8 + "px";
    dropdownRect = dropdown.getBoundingClientRect();
    if (
      dropdownRect.top + window.scrollY + dropdown.clientHeight >
      window.innerHeight
    ) {
      dropdown.style.top = "unset";
      dropdown.style.bottom = "8px";
      arrow.remove();
    }
    if (
      dropdownRect.left + window.scrollX + dropdown.clientWidth >
      window.innerWidth
    ) {
      dropdown.style.right = "8px";
      dropdown.style.left = "unset";
      arrow.style.left = "75%";
    }
    // check if the box moves out of the dropdown
    if (dropdownRect.right - dropdown.clientWidth < 0) {
      dropdown.style.left = "8px";
      dropdown.style.right = "unset";
      arrow.style.left =
        rect.left + window.scrollX + element.clientWidth / 2 + "px";
    }
    //await sleep(1);
    dropdown.style.opacity = 1;
    dropdown.style.transform = "scale(1)";
  },
  closeDropdown: async function () {
    let dropdown = modules.dropdown.dropdown;
    modules.dropdown.dropdown = null;
    if (dropdown == null) {
      return;
    }
    if (dropdown.hasAttribute("closing") === true) {
      return;
    }
    dropdown.style.transform = "scale(0.9)";
    dropdown.style.opacity = 0;
    await sleep(150);
    dropdown.remove();
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
