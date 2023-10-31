document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelector(".job-collection-list");
  const gridItemsArray = Array.from(document.querySelectorAll(".job-item"));

  let checkboxes = document.querySelectorAll(
    '.job-section input[type="checkbox"]'
  );
  let currentFilter;

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
    itemSelector: ".job-item",
    masonry: {
      gutter: 20
    }
  });

  function changeFilter() {
    let filters = [];
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        let value = checkbox.getAttribute("data-value");
        console.log(value);

        filters.push(value);
      }
    });

    // Construct the filter based on data attributes
    if (filters.length > 0) {
      currentFilter = function (item) {
        console.log(item);
        for (let i = 0; i < filters.length; i++) {
          let filterValue = filters[i];

          if (
            item.getAttribute("data-kategorie") === filterValue ||
            item.getAttribute("data-standort") === filterValue
          ) {
            return true;
          }
        }
        return false;
      };
    } else {
      currentFilter = "*"; // Always return a filter string
    }
    // Apply the filter to Isotope
    iso.arrange({ filter: currentFilter });
  }

  function clearAll() {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });

    currentFilter = "*";
    iso.arrange({ filter: currentFilter });
  }

  changeFilter();

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      changeFilter();
    });
  });

  /*
  document.getElementById("clear-filters").addEventListener("click", function () {
    clearAll();
  });
  */
});
