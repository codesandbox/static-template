const btns = document.querySelectorAll(".review-btns p");
const review = document.querySelector(".review");
const submit = document.querySelector(".submit-btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("clicked");
    });
    btn.classList.add("clicked");
    if (btn.classList.contains("clicked")) {
      review.textContent = "You selected " + btn.textContent + " out of 5";
    }
  });
});

submit.addEventListener("click", () => {
  const main_container = document.querySelector(".main");
  const review_container = document.querySelector(".modal");

  main_container.style.display = "none";
  review_container.style.display = "flex";
});
