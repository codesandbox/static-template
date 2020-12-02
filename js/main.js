const searchButton = document.getElementById("search-button");
const closeModal = document.getElementById("close-button");
const closeModal2 = document.getElementById("close-button2");
const submitButton = document.getElementById("submit-button");
const allston = document.getElementById("allston");
const ctown = document.getElementById("ctown");
const cambridge = document.getElementById("cambridge");
const teashopOnly = document.getElementById("tea-shop-only");
const cafe = document.getElementById("cafe");
const rest = document.getElementById("restaurant");
const coffee = document.getElementById("coffee");
const cheese = document.getElementById("cheese");
const fruit = document.getElementById("fruitshakes");

searchButton.addEventListener("click", function () {
  document.getElementById("results-text").classList.remove("open");
  document.getElementById("modal-main").classList.add("open");
  document.getElementById("modal-text").classList.remove("hide");
  document.getElementById("search-form").reset();
  // submitButton.classList.remove("hide");
  submitButton.style.display = "flex";
});

closeModal.addEventListener("click", function () {
  document.getElementById("modal-main").classList.remove("open");
});

closeModal2.addEventListener("click", function () {
  document.getElementById("modal-main").classList.remove("open");
});

submitButton.addEventListener("click", function () {
  console.log(this);
  this.style.display = "none";
  document.getElementById("results-text").classList.add("open");
  document.getElementById("modal-text").classList.add("hide");
  document.body.style.backgroundImage =
    "url(../img/bobafriends_lineedit-01.jpg)";

  document.getElementById("option-1").classList.add("hide");
  document.getElementById("option-2").classList.add("hide");
  document.getElementById("option-3").classList.add("hide");
  document.getElementById("option-4").classList.add("hide");
  document.getElementById("option-5").classList.add("hide");
  document.getElementById("option-6").classList.add("hide");
  document.getElementById("option-7").classList.add("hide");
  document.getElementById("option-8").classList.add("hide");
  document.getElementById("option-11").classList.add("hide");
  document.getElementById("option-13").classList.add("hide");
  document.getElementById("option-14").classList.add("hide");
  document.getElementById("option-17").classList.add("hide");
  document.getElementById("option-19").classList.add("hide");
  document.getElementById("option-20").classList.add("hide");
  document.getElementById("option-25").classList.add("hide");
  document.getElementById("option-26").classList.add("hide");

  if (
    allston.checked === true &&
    teashopOnly.checked === true &&
    coffee.checked === true
  ) {
    console.log("first option is checked");
    document.getElementById("option-1").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    teashopOnly.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-2").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    teashopOnly.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-3").classList.remove("hide");
  } else if (
    allston.checked === true &&
    cafe.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-4").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    cafe.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-5").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    cafe.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-6").classList.remove("hide");
  } else if (
    allston.checked === true &&
    rest.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-7").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    rest.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    rest.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    allston.checked === true &&
    teashopOnly.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    teashopOnly.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-11").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    teashopOnly.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    allston.checked === true &&
    teashopOnly.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-13").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    teashopOnly.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-14").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    teashopOnly.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    allston.checked === true &&
    cafe.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    cafe.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-17").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    cafe.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    allston.checked === true &&
    cafe.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-19").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    cafe.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-20").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    cafe.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    allston.checked === true &&
    rest.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    rest.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    rest.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    allston.checked === true &&
    rest.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-25").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    rest.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-26").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    rest.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  }
});

// searchButton.addEventListener("click", function () {
//   document.getElementById("modal-main").reset();

// else (
// if (nearbyArea === allston && foodChoices === cafe && typesTea === teaonly) {
// }
