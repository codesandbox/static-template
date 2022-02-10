// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Bonjour, monde !";

// let iceCream = "chocolat";
// if (iceCream === "chocolat") {
//   alert("J'adore la glace au chocolat !");
// } else {
//   alert("Ooooh, mais j'aurais préféré au chocolat.");
// }

// document.querySelector("html").addEventListener("click", function () {
//   alert("Aïe, arrêtez de cliquer !!");
// });

let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/firefox-icon.png") {
    myImage.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Mozilla_Firefox_logo_2004.svg"
    );
  } else {
    myImage.setAttribute("src", "./images/firefox-icon.png");
  }
});
