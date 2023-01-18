function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$(".logo-ato-footer").on("click", function () {
  scrollToTop();
  return false;
});

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  markers: false
});
const toTop = gsap.utils.toArray(".to-top");
const lastAnimated = gsap.utils.toArray(".disappear");

const path = window.location.pathname;
let tlnav2;
let tlnav3;

let tlnav = gsap.timeline({
  scrollTrigger: {
    trigger: $(".general-nav"),
    start: "top top",
    end: "bottom -30%",
    scrub: 2
  }
});

if (path !== "/") {
  tlnav2 = gsap.timeline({
    scrollTrigger: {
      //trigger: $(".simple-text-section.with-images-animation"),
      trigger: $(".page-wrapper"),
      start: "bottom 50%",
      end: "bottom top",
      scrub: 1,
      markers: false
    }
  });

  tlnav3 = gsap.timeline({
    scrollTrigger: {
      //trigger: $(".simple-text-section.with-images-animation"),
      trigger: $(".page-wrapper"),
      start: "bottom top",
      scrub: 1,
      markers: false
    }
  });
} else {
  tlnav2 = gsap.timeline({
    scrollTrigger: {
      //trigger: $(".simple-text-section.with-images-animation"),
      trigger: $(".simple-text-section.with-images-animation"),
      start: "bottom -50%",
      end: "bottom -100%",
      scrub: 1,
      markers: false
    }
  });

  tlnav3 = gsap.timeline({
    scrollTrigger: {
      //trigger: $(".simple-text-section.with-images-animation"),
      trigger: $(".simple-text-section.with-images-animation"),
      start: "bottom -99%",
      scrub: 1,
      markers: false
    }
  });
}
tlnav.to($(".nav-element-center"), {
  left: "3%",
  opacity: "0",
  ease: "power1.inOut"
});

tlnav.to(
  $(".navlinks.animated"),
  {
    top: "6em",
    ease: "power1.inOut"
  },
  "<0.1"
);

tlnav.fromTo(
  $(".nav-element-left"),
  {
    opacity: 0,
    display: "none",
    ease: "power1.inOut"
  },
  {
    opacity: 1,
    display: "block",
    ease: "power1.inOut"
  },
  "<0.30"
);

/*
let tlnav3 = gsap.timeline({
  scrollTrigger: {
    //trigger: $(".simple-text-section.with-images-animation"),
    trigger: $(".page-wrapper"),
    start: "bottom -200vh",
    scrub: 1,
    markers: false
  }
});
*/

tlnav2.to($(".general-nav"), {
  opacity: 0,
  display: "none",
  ease: "Power1.inOut"
});

tlnav2.to($(".footer-credits"), {
  opacity: "1",
  bottom: "0"
});

tlnav3.to($(".nav-content.right.last-animated"), {
  display: "none"
});

tlnav3.to($(".logo-ato-footer"), {
  opacity: "1",
  ease: "Power1.inOut"
});

/*
tlnav3.fromTo(
  $(".nav-element-center"),
  {
    top: "10em",
    opacity: "0",
    left: "45%"
  },
  {
    top: "3em",
    opacity: "1",
    left: "45%"
  }
);
*/
