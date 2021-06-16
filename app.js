let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "20px";
  }
  lastScrollTop = scrollTop;
});
