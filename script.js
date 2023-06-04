let faqs = document.querySelector(".faq");
let answers = document.querySelector(".answer");

faqs.addEventListener("click", function () {
  answers.classList.toggle("active");
});
