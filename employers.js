document.addEventListener("DOMContentLoaded", function () {
  let acc = document.querySelectorAll('[accordion="wrapper"]');

  if (acc.length > 0) {
    acc.forEach((accordion, index) => {
      const contentWrapper = accordion.querySelector('[accordion="content"]');
      const iconPlus = accordion.querySelector(".icon--plus");

      accordion.addEventListener("click", function () {
        // Check if the clicked accordion is already active
        const isActive = accordion.classList.contains("active");

        // Close all accordions
        acc.forEach((item) => {
          const contentWrapper = item.querySelector('[accordion="content"]');
          gsap.to(contentWrapper, {
            height: 0,
            duration: 0.3,
            ease: "ease-in"
          });
          item.classList.remove("active");
          item.querySelector(".icon--plus").classList.remove("active");
        });

        // If the clicked accordion was not active, open it
        if (!isActive) {
          const contentHeight = contentWrapper.scrollHeight;
          gsap.to(contentWrapper, {
            height: contentHeight,
            duration: 0.3,
            ease: "ease-in"
          });
          accordion.classList.add("active");
          iconPlus.classList.add("active");
        }
      });

      // Open the first accordion by default
      if (index === 0) {
        const contentHeight = contentWrapper.scrollHeight;
        gsap.set(contentWrapper, { height: contentHeight });
        accordion.classList.add("active");
        iconPlus.classList.add("active");
      }
    });
  }
});

// Get the left accordion wrapper
let accordionLeftTriggerWrapper = document.querySelector('[accordion="left"]');

// Get the right accordion wrapper
let accordionRightTargetWrapper = document.querySelector('[accordion="right"]');

// Get all the child elements of the left accordion
let accordionLeftChildren = accordionLeftTriggerWrapper.children;

// Get all the child elements of the right accordion
let accordionRightChildren = accordionRightTargetWrapper.children;

// Add click event listeners to the left accordion children
for (let i = 0; i < accordionLeftChildren.length; i++) {
  accordionLeftChildren[i].addEventListener("click", function () {
    // Trigger the click event on the corresponding child element in the right accordion
    accordionRightChildren[i].click();
  });
}
