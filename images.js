console.log("Raj is Working here 👨‍💻 ");
var grid = document.querySelector("#isotope-grid");

var nextPage = 2;
var isLoading = false;
var hasMorePages = true;

var iso = new Isotope(grid, {
  itemSelector: ".layout_item",
  layoutMode: "masonry",
  transitionDuration: 0 // Disable animation
});

function renderIsotopeLayoutJS() {
  imagesLoaded(grid, function () {
    iso.on("arrangeComplete", function () {
      setTimeout(function () {
        grid.style.display = "block"; // Show the grid after layout is complete
      }, 10);
    });
    iso.reloadItems();
    iso.arrange();

    setTimeout(function () {
      iso.reloadItems();
      iso.arrange();
    }, 100);
  });
}

/// ISOTOP Related Funcs

function fetchPage(url, callback) {
  console.log("Fetching page:", url);
  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(text, "text/html");
      var newItems = doc.querySelectorAll("#isotope-grid .layout_item");
      if (newItems.length > 0) {
        newItems.forEach((item) => {
          var img = item.querySelector("img");
          item.style.width = img.getAttribute("width") + "px";
          item.style.height = img.getAttribute("height") + "px";
        });
        callback(Array.from(newItems));
        var newRequestURL = doc
          .querySelector('[data-custom="next-button"]')
          .getAttribute("href");
        if (newRequestURL) {
          document
            .getElementById("next-button")
            .setAttribute("href", newRequestURL);
        } else {
          hasMorePages = false; // Stop further requests when no more pages
        }
      } else {
        hasMorePages = false; // Stop further requests when no more pages
      }
    });
}

function processBatch(items) {
  console.log("Processing batch:", items.length);
  if (items.length > 0) {
    imagesLoaded(items, function () {
      items.forEach((item) => grid.appendChild(item));
      iso.appended(items);
      iso.arrange(); // This line tells Isotope to update the layout
    });
  }
  iso.arrange(); // Assuming 'iso' is the Isotope instance managing 'grid'
  isLoading = false; // Reset isLoading after processing the batch
}

function loadMoreItems() {
  if (hasMorePages && !isLoading) {
    console.log("Has more pages and not loading");
    isLoading = true;
    var requestURL = document
      .getElementById("next-button")
      .getAttribute("href");
    if (requestURL) {
      console.log("Next page URL:", requestURL);
      fetchPage(requestURL, function (newItems) {
        processBatch(newItems);
        nextPage = nextPage + 1;
      });
    } else {
      isLoading = false;
      hasMorePages = false; // Stop further requests when no more pages
    }
  }
}

window.addEventListener("resize", function () {
  iso.arrange(); // Assuming 'iso' is the Isotope instance managing 'grid'
});

$("#search-input").on("keyup", function () {
  var searchText = $(this).val().toLowerCase();
  $grid.isotope({
    filter: function () {
      return $(this).attr("data-title").toLowerCase().includes(searchText);
    }
  });
});

///  ISOTOP Related Funcs ENDDD

// MODAL Codes START

function initModal() {
  let lightbox = document.querySelector("[tr-ajaxmodal-element='lightbox']");
  let lightboxClose = document.querySelector(
    "[tr-ajaxmodal-element='lightbox-close']"
  );
  lightboxClose.setAttribute("aria-label", "Close Modal");
  let lightboxModal = document.querySelector(
    "[tr-ajaxmodal-element='lightbox-modal']"
  );
  let cmsLink = "[tr-ajaxmodal-element='cms-link']";
  let initialPageTitle = document.title;
  let initialPageUrl = window.location.href;
  function updatePageInfo(newTitle, newUrl) {
    console.log("Updating Page Info", newTitle, newUrl);
    document.title = newTitle;
    window.history.replaceState({}, "", newUrl);
    lightboxModal.innerHTML = "";
  }

  let tl = gsap.timeline({
    paused: true,
    onReverseComplete: () => {
      console.log("resvere Call");
      lightboxClose.focus();
      updatePageInfo(initialPageTitle, initialPageUrl);
      enableScroll();
    },
    onComplete: () => {
      lightboxClose.focus();
      disableScroll();
    }
  });

  // tl.set("body", { overflow: "hidden" });

  tl.set(lightbox, {
    display: "block",
    onComplete: () => (lightboxModal.scrollTop = 0)
  });
  tl.from(lightbox, { opacity: 0, duration: 0.2 });
  tl.from(lightboxModal, { y: "5em", duration: 0.2 }, "<");

  function keepFocusWithinLightbox() {
    let focusableChildren = lightbox.querySelectorAll(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    let lastFocusableChild = focusableChildren[focusableChildren.length - 1];
    lastFocusableChild.addEventListener("focusout", function () {
      lightboxClose.focus();
    });
  }

  document.addEventListener("click", function (e) {
    console.log("cms Link Clicked");
    let clickedElement = e.target.closest(cmsLink);
    console.log(e);
    if (clickedElement) {
      console.log(clickedElement);
      e.preventDefault();
      let linkUrl = clickedElement.getAttribute("href");
      fetch(linkUrl)
        .then((response) => response.text())
        .then((text) => {
          let parser = new DOMParser();
          let doc = parser.parseFromString(text, "text/html");
          let cmsPageContent = "[tr-ajaxmodal-element='cms-page-content']";
          let cmsContent = doc.querySelector(cmsPageContent);
          let cmsTitle = doc.querySelector("title").textContent;
          let cmsUrl = window.location.origin + linkUrl;
          updatePageInfo(cmsTitle, cmsUrl);
          lightboxModal.appendChild(cmsContent);
          tl.play();
          keepFocusWithinLightbox();
          initializeGSAPAnimations();
        });
    }
  });

  lightboxClose.addEventListener("click", function () {
    tl.reverse();
  });

  lightbox.addEventListener("click", function (e) {
    if (
      e.target !== lightbox &&
      !e.target.closest("[tr-ajaxmodal-element='lightbox-modal']")
    ) {
      console.log("clicked outside");
      tl.reverse();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") tl.reverse();
  });
}
// Modal Codes END

function initializeGSAPAnimations() {
  // Get all the ".layout_link" elements
  const layoutLinks = document.querySelectorAll(".layout_link");

  // Add click event listener to each ".layout_link"
  layoutLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Get the associated ".modal_component"
      const modalComponent = document.querySelector(".modal_component");

      // GSAP animation to show the modal
      gsap.to(modalComponent, {
        duration: 0,
        y: 0,
        onStart: function () {
          modalComponent.style.display = "block";
        }
      });
    });
  });

  // Get the ".modal_background-overlay" and ".modal_close-button" elements
  const closeModalTriggers = document.querySelectorAll(
    ".modal_background-overlay, .modal_close-button"
  );

  // Add click event listener to both triggers
  closeModalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      // Get the associated ".modal_component"
      const modalComponent = document.querySelector(".modal_component");

      // GSAP animation to hide the modal
      gsap.to(modalComponent, {
        duration: 0,
        y: "100%",
        onComplete: function () {
          modalComponent.style.display = "none";
        }
      });
    });
  });
}

function preventScroll(event) {
  event.preventDefault();
}

function disableScroll() {
  document.addEventListener("wheel", preventScroll, { passive: false });
}

function enableScroll() {
  document.removeEventListener("wheel", preventScroll, { passive: false });
}

/// init function calls here

document.addEventListener("DOMContentLoaded", () => {
  renderIsotopeLayoutJS();
  initModal();
});

document.addEventListener("click", function (e) {
  // Check if the clicked element or its parent has the class 'js--download'
  let downloadButton = e.target.closest(".js--download");
  if (downloadButton) {
    e.preventDefault(); // Prevent the default behavior of the <a> element

    // Get the data-image and data-name attributes from the nested p element
    let imageDiv = downloadButton.querySelector(".hide p");
    let imageUrl = imageDiv.getAttribute("data-image");
    let imageName = imageDiv.getAttribute("data-name");

    // Fetch the image data
    fetch(imageUrl)
      .then((response) => response.blob()) // Convert the data to a Blob
      .then((blob) => {
        // Create a new anchor element
        let a = document.createElement("a");

        // Convert the Blob to a data URL
        let url = window.URL.createObjectURL(blob);

        // Set the download attribute with the desired file name
        a.download = imageName + ".jpeg";

        // Set the href to the data URL and trigger the download
        a.href = url;
        a.click();

        // Clean up by revoking the object URL
        window.URL.revokeObjectURL(url);
      });
  }
});
