// Check if the page was loaded for the first time in this session
let isNewSession = sessionStorage.getItem("isNewSession") === null;

if (isNewSession) {
  // Get the visit count from local storage, or set it to 0 if it doesn't exist
  let visitCount = localStorage.getItem("visitCount");
  if (!visitCount) {
    visitCount = 0;
  }

  // Increment the visit count and save it to local storage
  visitCount++;
  localStorage.setItem("visitCount", visitCount);

  // Display the visit count on the page
  document.getElementById("visit-count").textContent = visitCount;

  // Log the current visit count to the console
  console.log(`Current visit count: ${visitCount}`);

  // Set the session flag to prevent incrementing the count on page refresh
  sessionStorage.setItem("isNewSession", false);
} else {
  // Get the visit count from local storage and display it on the page
  let visitCount = localStorage.getItem("visitCount");
  document.getElementById("visit-count").textContent = visitCount;

  // Log the current visit count to the console
  console.log(`Current visit count: ${visitCount}`);
}

// Get the client IP address and log it to the console
const ipRequest = new XMLHttpRequest();

ipRequest.addEventListener("load", function () {
  console.log(`Client IP address: ${this.responseText}`);
});

ipRequest.open("GET", "https://api.ipify.org", true);

ipRequest.send();

// Fade out the visit count after 5 seconds
setTimeout(function () {
  let fadeEffect = setInterval(function () {
    if (!document.getElementById("page-visit-count").style.opacity) {
      document.getElementById("page-visit-count").style.opacity = 1;
    }
    if (document.getElementById("page-visit-count").style.opacity > 0) {
      document.getElementById("page-visit-count").style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
      document.getElementById("page-visit-count").style.display = "none";
    }
  }, 50);
}, 5000);
