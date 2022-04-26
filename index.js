const inputEl = document.getElementById("debounce");

const log = (e) => {
  console.log("key pressed", e.target.value);
};
let id;
function debounce(e) {
  clearTimeout(id);
  id = setTimeout(() => {
    log(e);
  }, 300);
}

inputEl.addEventListener("keyup", debounce);
