/* submit page reload preventer */

let form = document.querySelector(".contactsForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

/* message confirmation */

document.querySelector(".submit").onclick = function () {
  const h1 = document.querySelector(".sent");
  h1.style.opacity = "100%";

  setTimeout(() => {
    h1.style.opacity = "0%";
  }, 5000);
};
