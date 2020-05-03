const DEBOUNCE_TIMEOUT_MS = 100;

const resultsList = document.getElementById("autocomplete-results");
const input = document.getElementById("autocomplete-input");

const dropdownArrow = document.querySelector(".autocomplete__dropdown-arrow");

let currentListItemFocused = -1;

const colors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Cyan",
  "Violet",
  "Black",
  "White"
];

let filteredResults = [...colors];

let isDropDownOpen = false;

function openDropdown() {
  isDropDownOpen = true;
  resultsList.classList.add("visible");
  dropdownArrow.classList.add("expanded");
  input.setAttribute("aria-expanded", "true");
}

function closeDropdown() {
  isDropDownOpen = false;
  resultsList.classList.remove("visible");
  dropdownArrow.classList.remove("expanded");
  input.setAttribute("aria-expanded", "false");
}

function outsideClickListener(event) {
  const dropdownClicked = [input, ...resultsList.childNodes].includes(
    event.target
  );

  if (!dropdownClicked) {
    closeDropdown();
  }
}

document.addEventListener("click", outsideClickListener);

input.addEventListener("click", () => {
  openDropdown();
});

function setResults(results) {
  if (Array.isArray(results) && results.length > 0) {
    const innerListItems = results
      .map(
        item =>
          `<li class="autocomplete-item" role="listitem" tabindex="0">${item}</li>`
      )
      .join("");
    resultsList.innerHTML = innerListItems;
  }
}

resultsList.addEventListener("mousedown", event => {
  if ([...resultsList.childNodes].includes(event.target)) {
    const selectedValue = event.target.innerText;
    input.value = selectedValue;
    closeDropdown();
  }
});

function handleKeyboardEvents(event) {
  const listItems = resultsList.childNodes;
  let itemToFocus = null;

  // Prevent defaitt if needed
  if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
    event.preventDefault();
  }

  switch (event.key) {
    case "ArrowDown":
      if (currentListItemFocused < listItems.length - 1) {
        openDropdown();
        currentListItemFocused = currentListItemFocused + 1;
        itemToFocus = listItems.item(currentListItemFocused);
        itemToFocus.focus();
      }
      break;
    case "ArrowUp":
      if (currentListItemFocused > 0) {
        currentListItemFocused = currentListItemFocused - 1;
        itemToFocus = listItems.item(currentListItemFocused);
        itemToFocus.focus();
      }
      break;
    case "Home":
      if (currentListItemFocused > 0) {
        currentListItemFocused = 0;
        itemToFocus = listItems.item(currentListItemFocused);
        itemToFocus.focus();
      }
      break;
    case "End":
      if (currentListItemFocused < listItems.length - 1) {
        currentListItemFocused = listItems.length - 1;
        itemToFocus = listItems.item(currentListItemFocused);
        itemToFocus.focus();
      }
      break;
    case "Enter":
      if (!isDropDownOpen) {
        openDropdown();
      } else {
        if (listItems[currentListItemFocused].innerText) {
          input.value = listItems[currentListItemFocused].innerText;
          closeDropdown();
          input.focus();
        }
      }
      break;
    case "Escape":
      if (isDropDownOpen) {
        closeDropdown();
      }
      break;
    default:
      break;
  }
}

input.addEventListener("keydown", handleKeyboardEvents);
resultsList.addEventListener("keydown", handleKeyboardEvents);

setResults(colors);

let bounce = undefined;
function debounce(callback) {
  clearTimeout(bounce);
  bounce = setTimeout(() => {
    callback();
  }, [DEBOUNCE_TIMEOUT_MS]);
}

function filter(value) {
  if (value) {
    const regexToFilterBy = new RegExp(`^${value}.*`, "gi");
    filteredResults = colors.filter(color => regexToFilterBy.test(color));
  } else {
    filteredResults = [...colors];
  }
  setResults(filteredResults);
}

input.addEventListener("input", event => {
  const value = event.target.value;

  debounce(() => {
    filter(value);
    if (!isDropDownOpen) {
      openDropdown();
    }
  });
});
