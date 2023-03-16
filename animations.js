const animations = document.querySelectorAll(".chart");
const textAnimations = document.querySelectorAll(".text");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.5 }
);
animations.forEach((chart) => {
  observer.observe(chart);
});
textAnimations.forEach((text) => {
  observer.observe(text);
});
