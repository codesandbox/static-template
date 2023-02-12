"use strict";

const form = document.getElementById("newsletter-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const confirmEmail = form.elements["confirm-email"].value;
  const firstName = form.elements["first-name"].value;

  if (email !== confirmEmail) {
    alert("Emails do not match. Please enter the same email in both fields.");
  } else if (!email || !confirmEmail || !firstName) {
    alert("Please fill out all fields before submitting.");
  } else {
    window.location.href = "confirmation.html";
  }
});
