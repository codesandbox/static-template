localStorage.getItem("lang") || localStorage.setItem("lang", "en");

const translations = {
  en: {
    "app-title": "My Appy Apperson",
    lead: "Welcome to my little spot on the interwebs!"
  },
  ru: {
    "app-title": "Приложение",
    lead: "Добро пожаловать!"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  translateApp();
});

document.getElementById("ul").addEventListener("click", (e) => {
  localStorage.setItem("lang", e.target.innerText);
  translateApp();
});

function translateApp() {
  document.querySelectorAll("[data-i18n]").forEach(translateItem);
}

function translateItem(item) {
  const locale = localStorage.getItem("lang");
  const key = item.getAttribute("data-i18n");
  item.innerText = translations[locale][key];
}
