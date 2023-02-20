function toggleListView() {
  // select the elements to add the class to
  const newsList = document.querySelector(".news_list");
  const newsCards = document.querySelectorAll(".news_card");
  const newsDescription = document.querySelectorAll(".news-description");

  // add the "list-view" class to the selected elements
  newsList.classList.toggle("list-view");
  newsCards.forEach(function (newsCards) {
    newsCards.classList.toggle("list-view");
  });
  newsDescription.forEach(function (newsDescription) {
    newsDescription.classList.toggle("list-view");
  });
}

// add an event listener to the button to call the toggleListView function when the button is pressed
const button = document.querySelector("#toggle");
button.addEventListener("click", toggleListView);
