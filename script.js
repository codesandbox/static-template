const message =
  "Thank you for submitting your message to the Royal Familyt of Colchis. Jason and his crew will respond shortly.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
