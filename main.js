let on = document.getElementById("on");
let off = document.getElementById("off");
let wish = document.getElementById("wish");
let addCart = document.getElementById("addCart");

let wishCount = 0;
wish.addEventListener("click", () => {
  if (wishCount == 0) {
    off.classList.add("inactive");
    off.classList.remove("active");
    on.classList.add("active");
    on.classList.remove("inactive");
    wish.classList.add("activeWish");
    wish.classList.remove("inactiveWish");
    wishCount = 1;
  } else {
    off.classList.add("active");
    off.classList.remove("inactive");
    on.classList.add("inactive");
    on.classList.remove("active");
    wish.classList.add("inactiveWish");
    wish.classList.remove("activeWish");
    wishCount = 0;
  }
});
