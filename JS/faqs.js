"use strict";

// the event handler for the click event of each h2 element
const toggle = (evt) => {
  const aElement = evt.currentTarget; // get the clicked a element
  const h2Element = aElement.parentElement; // get the parent h2 element
  const divElement = h2Element.nextElementSibling; // get h2's sibling div

  //h2Element.classList.toggle("minus");
  if (h2Element.hasAttribute("class")) {
    h2Element.removeAttribute("class");
  } else {
    h2Element.className = "minus";
  }
  //divElement.classList.toggle("open");
  if (divElement.hasAttribute("class")) {
    divElement.removeAttribute("class");
  } else {
    divElement.className = "open";
  }

  evt.preventDefault(); // cancel default action of h2 tag's <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
  // get the h2 tags
  const h2Elements = faqs.querySelectorAll("#faqs a");

  // attach event handler for each h2 tag
  for (let h2Element of h2Elements) {
    h2Element.addEventListener("click", toggle);
  }
  // set focus on first h2 tag's <a> tag
  h2Elements[0].firstChild.focus();
});
