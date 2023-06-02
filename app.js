// const mobileToggleBtn = document.getElementById("mobileToggleBtn");
// const mobileNav = document.getElementById("mobileNav");

// mobileToggleBtn.addEventListener("click", () => {
//   mobileNav.classList.toggle("hidden");
// });

window.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "header.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("header").innerHTML = xhr.responseText;

      var mobileToggleBtn = document.getElementById("mobileToggleBtn");
      var mobileNav = document.getElementById("mobileNav");

      mobileToggleBtn.addEventListener("click", function () {
        mobileNav.classList.toggle("hidden");
      });
    }
  };
  xhr.send();
});
