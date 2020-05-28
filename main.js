const newTodo = document.querySelector(".newtodo");
const addTodo = document.querySelector(".addtodo");
const listTodos = document.querySelector(".todosList");
const todos = [];

todosRefresh = function() {
  listTodos.innerHTML = "";
  todos.forEach(item => {
    listTodos.innerHTML += `
        <li class="todoItem">${item}</li>
        `;
  });
};

todosRefresh();

addTodo.addEventListener("click", e => {
  e.preventDefault;
  todos.push(newTodo.value);
  todosRefresh();
  newTodo.value = "";
  newTodo.focus();
});
