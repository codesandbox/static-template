const minLoadingTime = 1000;

const startTime = new Date().getTime();

const readyState = setInterval(function () {
  if (document.readyState === "complete") {
    // clear the interval
    clearInterval(readyState);

    const endTime = new Date().getTime();
    const elapsed = endTime - startTime;

    if (elapsed > minLoadingTime) {
      document
        .getElementsByClassName("loader-wrapper")[0]
        .classList.add("fadeOutSlow");
    } else {
      setTimeout(() => {
        document
          .getElementsByClassName("loader-wrapper")[0]
          .classList.add("fadeOutSlow");
      }, minLoadingTime - elapsed);
    }
  }
}, 100);