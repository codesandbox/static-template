// var titles = document.getElementsByClassName("title");

// // console.log(Array.isArray(titles));
// // console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function (item) {
//   console.log(item);
// });
// const wmf = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(wmf);

// var textbox = document.getElementById("add-book");
// textbox = document.querySelector("#add-book");
// console.log(textbox);

// var books = document.querySelector("#book-list li .name");
// // console.log(books);

// books = document.querySelectorAll("#book-list li .name");
// // console.log(books);

// var books = document.querySelectorAll("#book-list li .name");
// books.forEach(function (books) {
//   console.log(books);
// });

// books.forEach(function (book) {
//   console.log(book);
// });

// var books = document.querySelectorAll("#book-list li .name");

// books.forEach(function (item) {
//   item.textContent += "(book title)";
// });

// // Array.from(books).forEach(function (book) {
// //   console.log(book.textContent);
// // });

// document.getElementById("book - list");

// const bookList = document.querySelector("#book-list");
// bookList.innerHTML = "<h2>Books and more books...</h2>";
// bookList.innerHTML += "<p>This is how you add HTMl </p>";

const list = document.querySelector("#book-list ul");

list.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  addForm.querySelector('input[type="text"]').value = " ";
});

const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function (e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach(function (book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
