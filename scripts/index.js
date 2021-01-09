const navButton = document.querySelector(".navbutton");

const navFunction = () => {
  const navigation = document.getElementById("navigation");
  if (navigation.style.display === "flex") {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "flex";
  }
  return false;
};
navButton.addEventListener("click", navFunction);
