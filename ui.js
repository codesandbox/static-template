document.querySelector(".play").addEventListener("click", () => {
  let name = document.querySelector(".name").value.trim();
  initialize(name == '' ? 'unnamed' : name);
})