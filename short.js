document.addEventListener("DOMContentLoaded", function () {});
const grid = document.querySelector(".collection-list.masonry.w-dyn-items");
const searcInput = document.querySelector('[data-name="Job Search"]');
const gridItemsArray = Array.from(grid.querySelectorAll(".masonry-item"));
const filterEmptyMessage = document.querySelector(".c-filter_empty");
let checkboxes = document.querySelectorAll(
  '#search-form input[type="checkbox"]'
);
let currentFilter;
let searchValue = "";
const cardObjects = [];
getCardsContent();

console.log(cardObjects);

let nonPremiumCards = [];
let premiumCards = [];

gridItemsArray.forEach((item) => {
  const element = item.querySelector(".job-post-premium-badge");
  const displayStyle = window
    .getComputedStyle(element)
    .getPropertyValue("display");

  if (displayStyle === "none") {
    nonPremiumCards.push(item);
  } else {
    premiumCards.push(item);
  }
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(premiumCards);
shuffleArray(nonPremiumCards);
const shuffledGridItems = [...premiumCards, ...nonPremiumCards];

grid.innerHTML = "";

shuffledGridItems.forEach((item) => {
  grid.appendChild(item);
});

let iso = new Isotope(grid, {
  itemSelector: ".masonry-item",
  masonry: {
    gutter: 0
  }
});

searcInput.addEventListener("input", (e) => {
  searchValue = e.target.value.trim().toLowerCase();

  // Iterate through the cardObjects and add the "show" class to matching cards
  cardObjects.forEach((card, index) => {
    const cardText = Object.values(card).join(" ").toLowerCase(); // Concatenate all card text and make it lowercase
    const cardElement = gridItemsArray[index];

    if (searchValue.length >= 2 && cardText.includes(searchValue)) {
      cardElement.classList.add("show");
    } else {
      cardElement.classList.remove("show");
    }
  });

  changeFilter();
});

function changeFilter() {
  let filters = [];
  let groups = {}; // Create an object to store filters by group

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      let value = checkbox.getAttribute("data-value");
      let group = hasParentWithId(checkbox, "kategorie-dropdown")
        ? "kategorie"
        : "standort";

      // Check if the group exists in the groups object
      if (!groups[group]) {
        groups[group] = [];
      }

      groups[group].push(`[data-${group}="${value}"]`);
    }
  });

  // Join filters of the same group with a comma, and different groups with a space
  for (let group in groups) {
    filters.push(groups[group].join(", "));
  }

  if (searchValue.length >= 2) {
    filters.push(".show"); // Add the "show" class filter
  }

  if (filters.length > 0) {
    currentFilter = filters.join(""); // Join filters with a space
  } else {
    currentFilter = "*";
  }

  console.log(currentFilter);
  // Apply the filter to Isotope
  iso.arrange({
    filter: currentFilter
  });

  // Check if there are any matching items
  const matchingItems = grid.querySelectorAll(currentFilter);

  // Toggle the visibility of the "filter_empty" message
  if (matchingItems.length === 0) {
    filterEmptyMessage.style.display = "block"; // Show the message
  } else {
    filterEmptyMessage.style.display = "none"; // Hide the message
  }
}

changeFilter();

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    changeFilter();
  });
});

function hasParentWithId(element, parentId) {
  let parent = element.parentElement;

  while (parent) {
    if (parent.id === parentId) {
      return true;
    }
    parent = parent.parentElement;
  }

  return false;
}
function getCardsContent() {
  gridItemsArray.forEach((gridItem) => {
    const contentDiv = gridItem.querySelector(".job-content");

    function extractTextContent(selector) {
      const element = contentDiv.querySelector(selector);
      return element ? element.textContent : "";
    }

    const jobCard = {
      jobTitle: extractTextContent(".word-breaking"),
      companyName: extractTextContent(".heading-style-h6")
    };

    cardObjects.push(jobCard);
  });
}
