//set classes for profession company and category on each element
$(".masonry-item").each(function () {
  $(this).addClass($(this).attr("data-beruf").replace(" / ", "_"));
  $(this).addClass($(this).attr("data-unternehmen").replace(" / ", "_"));
  $(this).addClass(
    $(this).attr("data-kategorie").replace(" / ", "_").replace("ä", "ae")
  );
  $(this).addClass($(this).attr("data-standort").replace(" / ", "_"));
});
$("label input").each(function () {
  $(this).val($(this).attr("data-value"));
});

// quick search regex
var qsRegex;
var buttonFilter;
var selectFilter;
var locations = [
  "Steyr-Stadt",
  "Steyr-Land",
  "Linz-Stadt",
  "Linz-Land",
  "Wels-Stadt",
  "Wels-Land",
  "Urfahr-Umgebung",
  "Ried",
  "Perg",
  "Grieskirchen",
  "Gmunden",
  "Kirchdorf",
  "Vöcklabruck",
  "Mühlviertel",
  "Amstetten",
  "Andere"
];
var categories = [
  "Kaufmaennisch",
  "Logistik",
  "IT_EDV",
  "Technik-Handwerk",
  "Tourismus",
  "Gastronomie",
  "Gesundheitswesen",
  "Sonstige"
];

var $container = $(".masonry").isotope({
  itemSelector: ".masonry-item",
  filter: function () {
    var $this = $(this);
    //console.log($this.text());
    var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
    var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
    return searchResult && buttonResult;
  }
});

var $checkboxes = $("label input");
$checkboxes.change(function () {
  setCustomFilter();
});

var $quicksearch = $("#job-search").keyup(
  debounce(function () {
    setCustomFilter();
  })
);

function setCustomFilter() {
  var searchValue = $("#job-search").val().trim();
  qsRegex = searchValue ? new RegExp(searchValue, "gi") : null;
  console.log(qsRegex);
  $(".masonry-item").removeClass("show");

  var categoryFilters = [];
  var locationFilters = [];
  $checkboxes.filter(":checked").each(function () {
    var value = this.value;
    if (categories.includes(value)) {
      categoryFilters.push("." + value);
    } else if (locations.includes(value)) {
      locationFilters.push("." + value);
    }
  });

  var filter = "";
  if (categoryFilters.length > 0 || locationFilters.length > 0) {
    if (categoryFilters.length > 0 && locationFilters.length > 0) {
      for (var i = 0; i < locationFilters.length; i++) {
        for (var j = 0; j < categoryFilters.length; j++) {
          var combinedFilter = locationFilters[i] + categoryFilters[j];
          filter += (filter === "" ? "" : ", ") + combinedFilter;
        }
      }
    } else if (categoryFilters.length > 0) {
      filter = categoryFilters.join(", ");
    } else if (locationFilters.length > 0) {
      filter = locationFilters.join(", ");
    }
  }

  console.log(filter);
  buttonFilter = filter;
  $container.isotope();
}

function debounce(fn, threshold) {
  var timeout;
  return function debounced() {
    if (timeout) {
      clearTimeout(timeout);
    }

    function delayed() {
      fn();
      timeout = null;
    }
    timeout = setTimeout(delayed, threshold || 100);
  };
}

// standardmäßig das "empty content" element auf unsichtbar setzen
$('[no-output="empty"]').css("display", "none");

// handler der das "empty content" element sichtbar oder unsichtbar macht
$container.on("arrangeComplete", function (event, filteredItems) {
  if (filteredItems.length === 0) {
    $('[no-output="empty"]').css("display", "block");
  } else {
    $('[no-output="empty"]').css("display", "none");
  }
});

$(document).ready(function () {
  // Get all elements that has the "attr-select-field" attribute
  $("[attr-select-field]").each(function (index) {
    // Get the current color
    let selectedColor = $(this).css("color");
    // Get the placeholder color
    let placeholderselectedColor = $(this).attr("attr-select-field");
    // Update the current color to match the placeholder color
    $(this).css("color", placeholderselectedColor);
    // Verify whenever the select value changes
    $(this).change(function () {
      // If the value is empty set the color to be he pleceholder color
      if ($(this).val().length <= 0) {
        $(this).css("color", placeholderselectedColor);
      }
      // If the value isn't empty the color should be the selected color
      else {
        $(this).css("color", selectedColor);
      }
    });
  });
});

// Isotope-Initialisierung mit Sortierfunktion
$container.isotope({
  itemSelector: ".masonry-item",
  filter: function () {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
    var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
    return searchResult && buttonResult;
  },
  getSortData: {
    premium: function (itemElem) {
      return $(itemElem.element).hasClass("job-card-premium") ? -1 : 1;
    }
  },
  sortBy: "premium"
});

// Add delay to ensure that the sorting is complete.
setTimeout(function () {
  // Karten mischen
  $container.isotope("shuffle");
}, 100);
