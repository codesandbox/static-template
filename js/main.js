const searchButton = document.getElementById("search-button");
const closeModal = document.getElementById("close-button");
const submitButton = document.getElementById("submit-button");

searchButton.addEventListener("click", function () {
  document.getElementById("modal-main").classList.toggle("open");
});

closeModal.addEventListener("click", function () {
  document.getElementById("modal-main").classList.toggle("open");
});

submitButton.addEventListener("click", function () {
  document.getElementById("results-text").classList.toggle("open");
  document.getElementById("modal-text").classList.toggle("hide");
  document.body.style.backgroundImage = "url(../img/bobafriends-02.jpg)";
});
