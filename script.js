const myBtn = document.querySelector("#myBtn");
const moreCards = document.querySelector(".more-cards");

myBtn.addEventListener("click", function () {
  //   if (myBtn.innerText.includes("Show more...")) {
  //     moreCards.classList.remove("dis");
  //     myBtn.innerText = "Show less";
  //   } else {
  //     moreCards.classList.add("dis");
  //     myBtn.innerText = "Show more...";
  //   }
  // });

  if (myBtn.innerText.includes("Show more...")) {
    moreCards.style.display = "inline";
    myBtn.innerText = "Show less";
  } else {
    moreCards.style.display = "none";
    myBtn.innerText = "Show more...";
  }
});
