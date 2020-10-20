const form = document.querySelector(".add");
const list = document.querySelector(".list-group");
const searchInput = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo.toLowerCase()}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += html;
};

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = event.target.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    form.reset();
  }
});

const filterTodos = (term) => {
  [...list.children].filter((todo) => {
    return !todo.textContent.includes(term)
      ? todo.classList.replace("d-flex", "d-none")
      : todo.classList.replace("d-none", "d-flex");
  });
};

searchInput.addEventListener("keyup", () => {
  const term = searchInput.value.trim().toLowerCase();
  filterTodos(term);
});
