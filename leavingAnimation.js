window.onload = function () {
  const mainContent = document.querySelector(".landing");

  mainContent.style.opacity = "0%";

  window.BeforeUnloadEvent = function () {
    mainContent.style.opacity = "100%";
  };

  setTimeout(() => {
    mainContent.style.opacity = "100%";
    mainContent.style.transition = "500ms";
  }, 500);

  const anchors = document.querySelectorAll(".menu a");
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let targer = e.target.href;
      mainContent.style.opacity = "0%";

      setTimeout(() => {
        window.location.href = targer;
      }, 500);
    });
  }
};
