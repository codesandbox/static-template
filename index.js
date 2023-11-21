console.log("AISplash Dev Mode Activated 👨‍💻 ");
let grid = document.querySelector("#isotope-grid");
let template;
let tags;
let nextPage = 1;
let itemsPerPage = 10;
let isLoading = false;
let hasMorePages = true;
let path = window.location.pathname;
let randomizedPages = [];
let totalDocuments = 0;
let include_fields =
  "name,author,image,id,featured,randomFieldScore,authorImage,downloadCount";
let isImagePage = false;
let loader;

var iso = new Isotope(grid, {
  itemSelector: ".layout_item",
  layoutMode: "masonry",
  transitionDuration: 0 // Disable animation
});

var typesenseClient = new Typesense.Client({
  nodes: [
    {
      host: "60zorpqbfl8wagd2p-1.a1.typesense.net",
      port: "443",
      protocol: "https"
    }
  ],
  numRetries: 3,
  apiKey: "3qNdwom727nSxKp8TnFO11BkGHDN89LG",
  retryIntervalSeconds: 3,
  connectionTimeoutSeconds: 10
});

function updatePageInfo(newTitle, newUrl) {
  document.title = newTitle;
  window.history.replaceState({}, "", newUrl);
}

function getSearchParameters(searchQuery = "*", path, page) {
  if (path === "/") {
    return {
      q: "*",
      sort_by: "randomFieldScore:asc",
      page: page,
      per_page: itemsPerPage,
      include_fields: include_fields
    };
  } else {
    return {
      q: searchQuery,
      query_by: "categories,tags,name",
      sort_by: "randomFieldScore:asc",
      page: page,
      per_page: itemsPerPage,
      include_fields: include_fields
    };
  }

  // let params = {};
  // switch (path) {
  //   case "/image":
  //     break;
  //   case "/search":
  //     break;
  //   case "/category":
  //     break;
  //   case "//":
  //     params = {
  //       q: "food and drinks",
  //       query_by: "tags,categories,name",
  //       page: page,
  //       per_page: itemsPerPage,
  //       include_fields: "name,author,image,id"
  //     };
  //     return params;
  //   default:
  //     return {
  //       q: searchQuery,
  //       query_by: "categories,tags,name",
  //       prefix: false,
  //       page: page,
  //       per_page: itemsPerPage,
  //       include_fields: "name,author,image,id,randomFieldScore"
  //     };
  // }
}

// async function getImagesR(searchQuery, path, randomizedOrder = false) {
//   if (isLoading || !hasMorePages) {
//     return;
//   }

//   isLoading = true;
//   let pageToFetch = nextPage; // Default next page

//   // Initialize random page array if it's the first call in random mode
//   if (randomizedOrder && randomizedPages.length === 0) {
//     let searchParameters = getSearchParameters(searchQuery, path, 1); // Fetch first page to get total count
//     try {
//       const searchResults = await typesenseClient
//         .collections("images")
//         .documents()
//         .search({
//           q: "*",
//           per_page: 0
//         });

//       console.log(searchResults);

//       totalDocuments = searchResults.found;
//       const totalPages = Math.ceil(totalDocuments / itemsPerPage);
//       randomizedPages = Array.from(
//         { length: totalPages },
//         (_, index) => index + 1
//       );
//       randomizeArray(randomizedPages);
//     } catch (error) {
//       console.error("Error initializing random pages:", error);
//       isLoading = false;
//       return;
//     }
//   }

//   if (randomizedOrder && randomizedPages.length > 0) {
//     pageToFetch = randomizedPages.shift(); // Get a random page number
//   }

//   let searchParameters = getSearchParameters(searchQuery, path, pageToFetch);
//   try {
//     const searchResults = await typesenseClient
//       .collections("images")
//       .documents()
//       .search(searchParameters);

//     console.log(searchResults);
//     processBatch(searchResults.hits.map((hit) => hit.document));

//     // Check if there are more pages left to fetch in random order
//     hasMorePages = randomizedOrder
//       ? randomizedPages.length > 0
//       : pageToFetch * itemsPerPage < totalDocuments;

//     if (!hasMorePages) {
//       // No more pages to fetch, reset state
//       nextPage = 1;
//       randomizedPages = [];
//     }
//   } catch (error) {
//     console.error("Error fetching items:", error);
//   } finally {
//     isLoading = false;
//   }
// }

// // Function to randomize an array
// function randomizeArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

async function getImages(searchQuery, page = 1, path) {
  if (isLoading || !hasMorePages) {
    return;
  }

  isLoading = true;
  let searchParameters = getSearchParameters(searchQuery, path, page);
  try {
    const searchResults = await typesenseClient
      .collections("images")
      .documents()
      .search(searchParameters);
    processBatch(searchResults.hits.map((hit) => hit.document));
    hasMorePages = page * itemsPerPage < searchResults.found;
    if (hasMorePages) {
      nextPage = page + 1;
      // console.log("have more pages");
    } else {
      // console.log("no more pages");
      loader.style.display = "none";
      nextPage = 1; // Reset nextPage if there are no more pages to fetch
    }
  } catch (error) {
    console.error("Error fetching items:", error);
  } finally {
    isLoading = false;
  }
}

async function getImagesMultiSearch(tags, page) {
  if (isLoading || !hasMorePages) {
    return;
  }

  isLoading = true;
  const tagFilters = tags.map((tag) => `tags:=${tag}`).join(" || ");
  let searchParameters = {
    q: "*", // Use wildcard to match all documents
    query_by: "tags",
    filter_by: tagFilters,
    page: page,
    per_page: itemsPerPage,
    include_fields: include_fields
  };

  try {
    const result = await typesenseClient
      .collections("images")
      .documents()
      .search(searchParameters);
    processBatch(result.hits.map((hit) => hit.document));
    hasMorePages = page * itemsPerPage < result.found;
    if (hasMorePages) {
      nextPage = page + 1;
      // console.log("have more pages");
    } else {
      // console.log("no more pages");
      loader.style.display = "none";
      nextPage = 1; // Reset nextPage if there are no more pages to fetch
    }
  } catch (error) {
    console.error("Error fetching images:", error);
  } finally {
    isLoading = false;
  }
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

function getThumbnail(url, width = 400) {
  return `${cleanUrl(url)}?auto=compress&w=${width}`;
}

function getMainThumbnail(url) {
  return `${cleanUrl(url)}?auto=compress`;
}

function getAuthorImageThumbnail(url) {
  return `${cleanUrl(url)}?w=96`;
}

function cleanUrl(url) {
  const parsedUrl = new URL(url);
  return `${parsedUrl.protocol}//${parsedUrl.host}${parsedUrl.pathname}`;
}

function processBatch(items) {
  if (!template) {
    console.error("Template element not found");
    return;
  }

  const clonedItems = items
    .map((item) => {
      const clone = template.cloneNode(true);
      clone.setAttribute("ais-image-id", item.id);
      clone.setAttribute("ais-image-name", item.name);
      clone.setAttribute("ais-image-downloadCount", item.downloadCount ?? 0);
      const imageElement = clone.querySelector(".layout_link img");
      const authorName = clone.querySelector(
        '[ais-element="listitem-author-name"]'
      );
      const authorImage = clone.querySelector(
        '[ais-element="listitem-author-image"]'
      );
      const downloadButton = clone.querySelector(
        '[ais-element="image-download-button"]'
      );

      if (authorName) {
        authorName.textContent = item.author;
      }
      if (authorImage && item.authorImage) {
        authorImage.src = getAuthorImageThumbnail(item.authorImage);
      }
      if (downloadButton) {
        downloadButton.setAttribute("ais-download-url", cleanUrl(item.image));
        downloadButton.setAttribute("ais-download-filename", item.name);
        downloadButton.setAttribute("ais-download-imageid", item.id);
      }
      if (imageElement) {
        imageElement.src = getThumbnail(item.image);
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
}

function initInfiniteScroll() {
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
      if (path.startsWith("/category/")) {
        getImages(getCategoryfromPageHeading(), nextPage);
      }
      switch (window.location.pathname) {
        case "/image":
          if (isImagePage) {
            if (nextPage == 3) {
              hasMorePages = false;
              loader.style.display = "none";
            }
            getImagesMultiSearch(tags, nextPage);
          } else {
            getImages(getSearchQueryParam(), nextPage, "/");
          }
          break;
        case "/search":
          getImages(getSearchQueryParam(), nextPage);
          break;
        case "/":
          getImages(getSearchQueryParam(), nextPage, "/");
          // getImagesR(getSearchQueryParam(), nextPage, true);
          break;
        default:
          break;
      }
    }
    prevScrollPosition = scrollPosition; // Update the previous scroll position
  });
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

  let initialPageTitle = document.title;
  let initialPageUrl = window.location.href;

  let tl = gsap.timeline({
    paused: true,
    onReverseComplete: () => {
      lightboxModal.focus();
      updatePageInfo(initialPageTitle, initialPageUrl);
    },
    onComplete: () => {
      lightboxModal.focus();
    }
  });
  tl.set("body", { overflow: "hidden" });

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

    if (item && !e.target.closest('[ais-element="image-download-button"]')) {
      itemName = item.getAttribute("ais-image-name");
      itemId = item.getAttribute("ais-image-id");
      downloadCount = item.getAttribute("ais-image-downloadcount");
      if (
        "ontouchstart" in window ||
        navigator.maxTouchPoints ||
        window.matchMedia("(max-width: 991px)").matches
      ) {
        var item = e.target.closest('[ais-element="list-item"]');
        if (
          item &&
          !e.target.closest('[ais-element="image-download-button"]')
        ) {
          var itemId = item.getAttribute("ais-image-id");
          window.location.href = `/image?id=${itemId}`;
          return;
        }
      }

      var authorName = item.querySelector(
        '[ais-element="listitem-author-name"]'
      ).textContent;
      var authorImage = item.querySelector(
        '[ais-element="listitem-author-image"]'
      ).src;

      var itemimage = item.querySelector('[ais-element="item-image"]').src;

      document.querySelector(
        '[ais-element="modal-download-count"]'
      ).textContent = `${downloadCount} Downloads`;

      document.querySelector(
        '[ais-element="modal-author-name"]'
      ).textContent = authorName;
      document.querySelector(
        '[ais-element="modal-author-image"]'
      ).src = authorImage;
      document.querySelector(
        '[ais-element="modal-main-image"]'
      ).src = getMainThumbnail(itemimage);
      document
        .querySelector('[ais-element="modal-image-download-button"]')
        .setAttribute("ais-download-url", cleanUrl(itemimage));
      document
        .querySelector('[ais-element="modal-image-download-button"]')
        .setAttribute("ais-download-filename", itemName);
      document
        .querySelector('[ais-element="modal-image-download-button"]')
        .setAttribute("ais-download-imageid", itemId);
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
          downloadButton.getAttribute("ais-download-filename") || "aisplash";
        logDownloadCount(downloadButton.getAttribute("ais-download-imageid"));
        a.href = url;
        a.click();
        window.URL.revokeObjectURL(url);
        // console.log(downloadButton.getAttribute("ais-download-imageid"));
      });
  }
});

async function logDownloadCount(id) {
  if (!isStaging) {
    return;
  }
  var data = JSON.stringify({
    id: id,
    fieldName: "downloadCount"
  });

  try {
    const response = await fetch(
      "https://ai-splash.bueno-preview.art/api/increment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json" // Set the correct Content-Type for JSON
        },
        mode: "cors",
        body: data
      }
    );
    const result = await response.json();
    console.log("success log", result);
  } catch (error) {
    console.log("error", error);
  }
}

async function getMainImageData() {
  isImagePage = true;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const imageId = urlParams.get("id");

  if (!imageId) {
    window.location.replace("/");
  }

  try {
    if (imageId) {
      const res = await typesenseClient
        .collections("images")
        .documents(imageId)
        .retrieve();
      console.log("Main image data", res);
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
  mainImageDownloadCount = document.querySelector(
    '[ais-element="main-image-download-count"]'
  );

  mainImage.src = getMainThumbnail(data.image);
  mainAuthorName.textContent = data.author;
  if (mainImageDownloadCount) {
    mainImageDownloadCount.textContent = `${
      data.downloadCount ? data.downloadCount : 0
    } Downloads`;
  }

  if (data.authorImage) {
    mainAuthorImage.src = getAuthorImageThumbnail(data.authorImage);
  }
  if (mainImageDownloadButton) {
    mainImageDownloadButton.setAttribute(
      "ais-download-url",
      cleanUrl(data.image)
    );
    mainImageDownloadButton.setAttribute("ais-download-filename", data.name);
    mainImageDownloadButton.setAttribute("ais-download-imageid", data.id);
  }

  mainImageSection = document.querySelector(
    '[ais-element="main-image-section"]'
  );
  similarImageSection = document.querySelector(
    '[ais-element="similar-image-section"]'
  );
  mainImageSection.classList.remove("hide");
  similarImageSection.classList.remove("hide");
  tags = data.tags;
  getImagesMultiSearch(tags, nextPage);
}
function initialize() {
  console.log("init in dev mode");
  template = document.querySelector('[ais-element="list-item"]');
  loader = document.querySelector('[ais-element="loader"]');
  document.querySelector('[ais-element="list-item"]').remove();
  getDataByRoute();
  renderIsotopeLayoutJS();
  initInfiniteScroll();
  initModal();
  // ... rest of your initialization code
}

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("init");
//   template = document.querySelector('[ais-element="list-item"]');
//   loader = document.querySelector('[ais-element="loader"]');
//   document.querySelector('[ais-element="list-item"]').remove();
//   getDataByRoute();
//   renderIsotopeLayoutJS();
//   initInfiniteScroll();
//   initModal();
// });

function getCategoryfromPageHeading() {
  categoryHeading = document.querySelector('[ais-element="category-heading"]');
  return categoryHeading.textContent || "*";
}

function getDataByRoute() {
  if (path.startsWith("/category/")) {
    getImages(getCategoryfromPageHeading(), nextPage);
    return; // Return early since we've already handled this case
  }
  switch (path) {
    case "/image":
      getMainImageData();
      break;
    case "/search":
      getImages(getSearchQueryParam(), nextPage);
      break;
    case "/":
      getImages(getSearchQueryParam(), nextPage, "/");
      // getImagesR(getSearchQueryParam(), nextPage, true);
      break;
    default:
      break;
  }
}

document.addEventListener("click", function (event) {
  if (event.target.closest('[ais-element="share-button"]')) {
    const pageUrl = window.location.href;
    const tweetContent = encodeURIComponent(
      "Check out this image from aisplash, by @mushoai " + pageUrl
    );
    const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${tweetContent}`;
    window.open(twitterIntentUrl, "_blank");
  }
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}
