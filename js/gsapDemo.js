gsap.fromTo(
  ".img__wrapper",
  { x: 100, opacity: 0.5 },
  { duration: 1, x: 0, opacity: 1 }
);

gsap.fromTo(
  ".animated-headline",
  { y: 100, opacity: 0 },
  { duration: 1, y: 0, opacity: 1 }
);
