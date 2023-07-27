// JavaScript code
let tabsComponents = document.querySelectorAll("[products='tab']");

function tabsfunction(tab) {
  let productTablinks = tab.querySelectorAll("[products='tablink']");
  let productTabContent = tab.querySelectorAll("[products='tab-content']");

  // Add click event listener to each tab link
  productTablinks.forEach((tablink, index) => {
    tablink.addEventListener("click", () => {
      // Remove "active" class from all tab links and tab contents
      productTablinks.forEach((tl) => tl.classList.remove("active"));
      productTabContent.forEach((tc) => tc.classList.remove("active"));

      // Add "active" class to the clicked tab link and its corresponding tab content
      tablink.classList.add("active");
      productTabContent[index].classList.add("active");
    });
  });
}

tabsComponents.forEach((tab) => {
  tabsfunction(tab);
});
