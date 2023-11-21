console.log("Raj is Working here in Search Page 👨‍💻 ");
var grid = document.querySelector("#isotope-grid");
var template;
var typesenseClient = new Typesense.Client({
  nodes: [
    {
      host: "60zorpqbfl8wagd2p-1.a1.typesense.net",
      port: "443",
      protocol: "https"
    }
  ],
  apiKey: "3qNdwom727nSxKp8TnFO11BkGHDN89LG",
  connectionTimeoutSeconds: 5
});

function updatePageInfo(newTitle, newUrl) {
  document.title = newTitle;
  window.history.replaceState({}, "", newUrl);
}

var nextPage = 1;
var isLoading = false;
var hasMorePages = true;

var iso = new Isotope(grid, {
  itemSelector: ".layout_item",
  layoutMode: "masonry",
  transitionDuration: 0 // Disable animation
});

function getImages(searchQuery, page = 1) {
  if (isLoading) {
    return;
  }
  isLoading = true;

  let searchParameters = {
    q: searchQuery,
    query_by: "categories,tags",
    page: page,
    per_page: 20,
    include_fields: "name,author,image,id"
  };

  typesenseClient
    .collections("images")
    .documents()
    .search(searchParameters)
    .then(function (searchResults) {
      processBatch(searchResults.hits.map((hit) => hit.document));
      nextPage++;
      isLoading = false;
    })
    .catch(function (error) {
      console.error("Error fetching items:", error);
      isLoading = false;
    });
}

async function getImagesMultiSearch(page = 1) {
  let searchRequests = {
    searches: [
      {
        collection: "images",
        q: "cat"
      },
      {
        collection: "images",
        q: "dog"
      }
    ]
  };

  let commonSearchParams = {
    query_by: "categories,tags",
    include_fields: "name,author,image,id,vector",
    page: page,
    per_page: 20
  };
  result = await typesenseClient.multiSearch.perform(
    searchRequests,
    commonSearchParams
  );

  console.log("Multi Search Result", result);
}

function renderIsotopeLayoutJS() {
  imagesLoaded(grid, function () {
    iso.on("arrangeComplete", function () {
      grid.style.display = "block"; // Show the grid after layout is complete
    });
    iso.reloadItems();
    iso.arrange();
    setTimeout(function () {
      iso.reloadItems();
      iso.arrange();
    }, 100);
  });
}

function processBatch(items) {
  console.log("Processing batch:", items.length);
  if (!template) {
    console.error("Template element not found");
    return;
  }

  const clonedItems = items
    .map((item) => {
      const clone = template.cloneNode(true);
      clone.setAttribute("ais-image-id", item.id);
      clone.setAttribute("ais-image-name", item.name);
      const imageElement = clone.querySelector(".layout_link img");
      const downloadButton = clone.querySelector(
        '[ais-element="image-download-button"]'
      );
      if (downloadButton) {
        downloadButton.setAttribute("ais-download-url", item.image);
        downloadButton.setAttribute("ais-download-filename", item.name);
      }
      if (imageElement) {
        imageElement.src = item.image;
        return clone;
      } else {
        console.error("Image element not found within the template");
        return null;
      }
    })
    .filter((item) => item !== null); // Filter out any nulls from errors

  if (clonedItems.length > 0) {
    imagesLoaded(clonedItems, function () {
      clonedItems.forEach((clone) => {
        grid.appendChild(clone);
      });
      Webflow.require("ix2").init(); // Initialize Webflow interactions
      iso.appended(clonedItems);
      iso.arrange(); // This line tells Isotope to update the layout
    });
  }
  iso.arrange(); // Assuming 'iso' is the Isotope instance managing 'grid'
  isLoading = false; // Reset isLoading after processing the batch
}

(function () {
  var prevScrollPosition = window.scrollY || window.pageYOffset;
  window.addEventListener("scroll", function () {
    var windowHeight = window.innerHeight;
    var gridHeight = grid.offsetHeight;
    var scrollPosition = window.scrollY || window.pageYOffset;
    var bottomOffset = 2000; // Distance from the bottom of the grid to the trigger point
    var triggerHeight = grid.offsetTop + gridHeight - bottomOffset;
    if (
      scrollPosition > prevScrollPosition &&
      scrollPosition + windowHeight > triggerHeight // to check if user is scrolling in bottom onl
    ) {
      getImages(getSearchQueryParam(), nextPage);
    }
    prevScrollPosition = scrollPosition; // Update the previous scroll position
  });
})();

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

  let initialPageTitle = document.title;
  let initialPageUrl = window.location.href;

  let tl = gsap.timeline({
    paused: true,
    onReverseComplete: () => {
      updatePageInfo(initialPageTitle, initialPageUrl);
      enableScroll();
    },
    onComplete: () => {
      disableScroll();
    }
  });
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
    var item = e.target.closest('[ais-element="list-item"]');

    itemName = item.getAttribute("ais-image-name");
    itemId = item.getAttribute("ais-image-id");

    if (item && !e.target.closest('[ais-element="image-download-button"]')) {
      var authorName = item.querySelector(
        '[ais-element="listitem-author-name"]'
      ).textContent;
      var authorImage = item.querySelector(
        '[ais-element="listitem-author-image"]'
      ).src;
      var itemimage = item.querySelector('[ais-element="item-image"]').src;
      document.querySelector(
        '[ais-element="modal-author-name"]'
      ).textContent = authorName;
      document.querySelector(
        '[ais-element="modal-author-image"]'
      ).src = authorImage;
      document.querySelector(
        '[ais-element="modal-main-image"]'
      ).src = itemimage;
      document
        .querySelector('[ais-element="modal-image-download-button"]')
        .setAttribute("ais-download-url", itemimage);
      document
        .querySelector('[ais-element="modal-image-download-button"]')
        .setAttribute("ais-download-filename", itemId);
      updatePageInfo("aisplash | " + itemName, `/image?id=${itemId}`);
      tl.play();
      keepFocusWithinLightbox();
      initializeGSAPAnimations();
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
      tl.reverse();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      tl.reverse();
    }
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

function getSearchQueryParam() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const searchQuery = urlParams.get("query");
  return searchQuery || "*";
}

document.addEventListener("click", function (e) {
  // let downloadButton = e.target.closest(
  //   '[ais-element="image-download-button"]'
  // );
  let downloadButton = e.target.closest(
    '[ais-element="image-download-button"], [ais-element="modal-image-download-button"],[ais-element="main-image-download-button"]'
  );
  if (downloadButton) {
    e.preventDefault();
    e.stopPropagation();
    fetch(downloadButton.getAttribute("ais-download-url"))
      .then((response) => response.blob()) // Convert the data to a Blob
      .then((blob) => {
        // Create a new anchor element
        let a = document.createElement("a");
        // Convert the Blob to a data URL
        let url = window.URL.createObjectURL(blob);
        // Set the download attribute with the desired file name
        a.download =
          downloadButton.getAttribute("ais-download-filename") + ".jpeg";
        a.href = url;
        a.click();
        window.URL.revokeObjectURL(url);
        enableScroll();
      });
  }
});

async function getMainImageData() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const imageId = urlParams.get("id");
  console.log(imageId);
  try {
    if (imageId) {
      const res = await typesenseClient
        .collections("images")
        .documents(imageId)
        .retrieve();
      console.log(res);
      updateMainImageDataIntoDom(res);
    }
  } catch (error) {
    console.error("something went wrong ", error);
    if (error.httpStatus === 401) {
      console.error(
        "Unauthorized: Check if your API key is valid and has the right permissions."
      );
    }
  }
}

function updateMainImageDataIntoDom(data) {
  mainImage = document.querySelector('[ais-element="main-image"]');
  mainAuthorImage = document.querySelector('[ais-element="main-author-image"]');
  mainAuthorName = document.querySelector('[ais-element="main-author-name"]');
  mainImageDownloadButton = document.querySelector(
    '[ais-element="main-image-download-button"]'
  );

  mainImage.src = data.image;
  mainAuthorName.textContent = data.author;

  if (mainImageDownloadButton) {
    mainImageDownloadButton.setAttribute("ais-download-url", data.image);
    mainImageDownloadButton.setAttribute("ais-download-filename", data.name);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  template = document.querySelector('[ais-element="list-item"]');
  document.querySelector('[ais-element="list-item"]').remove();
  getImagesMultiSearch();
  renderIsotopeLayoutJS();
  getImages(getSearchQueryParam(), nextPage);
  getMainImageData();
  initModal();
});
