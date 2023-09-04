document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  const countryCode = document.getElementById("countryCode").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const phoneError = document.getElementById("phoneError");
  const phoneInput = document.getElementById("phoneNumber");

  // Input validation: Check if the phone number contains only digits and has exactly 10 digits
  if (!/^\d{10}$/.test(phoneNumber)) {
    phoneInput.setCustomValidity("Please enter a valid 10-digit phone number.");
    phoneError.textContent = phoneInput.validationMessage;
    return;
  }

  // If validation passes, clear the error message and redirect to WhatsApp API
  phoneInput.setCustomValidity("");
  phoneError.textContent = "";
  redirectToWhatsApp(countryCode, phoneNumber);
});

function redirectToWhatsApp(countryCode, phoneNumber) {
  const apiURL = "https://api.whatsapp.com/send?phone=";
  const fullURL = apiURL + encodeURIComponent(countryCode + phoneNumber);
  window.location.href = fullURL;
}
