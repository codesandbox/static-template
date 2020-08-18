const isElementInViewport = (element) => {
  const rectangle = element.getBoundingClientRect();
  return (
    rectangle.top >= 0 &&
    rectangle.left >= 0 &&
    rectangle.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rectangle.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

const showElements = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    if (isElementInViewport(elements[i])) {
      elements[i].classList.add("in-view");
    }
  }
};

// On appelle notre fonction pour qu'elle s'éxécute
window.onload = () => {
  const elements = document.querySelectorAll(".timeline ul li");
  showElements(elements);

  window.addEventListener("resize", () => showElements(elements));
  window.addEventListener("scroll", () => showElements(elements));
};
