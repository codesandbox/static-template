window.addEventListener("load", function() {
  console.log("[loading-menu-accordion]", new Date());
});

document.querySelector("body").addEventListener("click", event => {
  document.querySelectorAll(".item-menu").forEach(item => {
    item.style.overflow = "hidden";
    item.querySelector(".sub-menu-left-nav").style.maxHeight = 0;
  });
});

document.querySelectorAll(".item-menu").forEach((item, idx, array) => {
  item.addEventListener("click", event => {
    array.forEach(el => {
      if (el.id !== item.id) {
        el.style.overflow = "hidden";
        el.querySelector(".sub-menu-left-nav").style.maxHeight = 0;
      }
    });
    setTimeout(() => {
      item.querySelector(".sub-menu-left-nav").style.maxHeight = "10em";
      item.style.overflow = "visible";
    }, 100);
  });
});
