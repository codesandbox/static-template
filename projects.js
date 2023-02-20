function toggleListView() {
  // select the elements to add the class to
  const projectsGrid = document.querySelector(".projects_grid");
  const projectCards = document.querySelectorAll(".project_card");
  const projectCardArrows = document.querySelectorAll(".project_card-arrow");
  const projectYears = document.querySelectorAll(".project-year");
  const projectTitleTexts = document.querySelectorAll(".project-title-text");
  const projectCardImgs = document.querySelectorAll(".project_card-img");
  const projectDetailWrap = document.querySelectorAll(".project-deets_wrapper");

  // add the "list-view" class to the selected elements
  projectsGrid.classList.toggle("list-view");
  projectCards.forEach(function (projectCard) {
    projectCard.classList.toggle("list-view");
  });
  projectCardArrows.forEach(function (projectCardArrow) {
    projectCardArrow.classList.toggle("list-view");
  });
  projectYears.forEach(function (projectYear) {
    projectYear.classList.toggle("list-view");
  });
  projectTitleTexts.forEach(function (projectTitleText) {
    projectTitleText.classList.toggle("list-view");
  });
  projectCardImgs.forEach(function (projectCardImg) {
    projectCardImg.classList.toggle("list-view");
  });
  projectDetailWrap.forEach(function (projectDetailWrap) {
    projectDetailWrap.classList.toggle("list-view");
  });
}

// add an event listener to the button to call the toggleListView function when the button is pressed
const button = document.querySelector("#toggle");
button.addEventListener("click", toggleListView);
