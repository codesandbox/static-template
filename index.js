const sidePanel = document.getElementById("side-panel");

document.getElementById("toggle-panel").addEventListener("click", function () {
  sidePanel.classList.toggle("active");
});
// JavaScript to make the chatbot interactive
const chatbotImage = document.getElementById("chatbot-image");
const chatbox = document.getElementById("chatbox");

chatbotImage.addEventListener("click", () => {
  chatbotImage.style.display = "none";
  chatbox.style.display = "block";
  chatbox.classList.add("active");
});

const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

yesButton.addEventListener("click", () => {
  alert("Great! How can I assist you?");
});

noButton.addEventListener("click", () => {
  chatbotImage.style.display = "block";
  chatbox.style.display = "none";
  chatbox.classList.remove("active");
});

const footer = document.querySelector(".footer");
const showFooterThreshold = 50;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const contentHeight = document.body.scrollHeight;

  if (scrollPosition + windowHeight >= contentHeight - showFooterThreshold) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
});
