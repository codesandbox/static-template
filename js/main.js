document.addEventListener("DOMContentLoaded", function () {
  // Animate elements on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeIn");
        } else {
          entry.target.classList.remove("animate__animated", "animate__fadeIn");
        }
      });
    },
    {
      threshold: 0.5
    }
  );

  const elementsToAnimate = document.querySelectorAll(
    ".card-custom, .header-custom, .footer-custom"
  );
  elementsToAnimate.forEach((element) => observer.observe(element));

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Collapse menu when nav link is clicked
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const navbarNav = document.querySelector("#navbarNav");
      const bsCollapse = new bootstrap.Collapse(navbarNav, { toggle: false });
      if (navbarNav.classList.contains("show")) {
        bsCollapse.hide();
      }
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      const headerHeight = document.querySelector(".navbar-custom")
        .offsetHeight;
      const scrollPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });
  });
});
