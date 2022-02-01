// var titles = document.getElementsByClassName("title");

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEash(function (item) {
//   console.log(item);
// });

// const wmf = document.querySelector("#add-book");
// console.log(wmf);
// -------------------------------------------------------------
// var books = document.querySelectorAll("#book-list li .name");
// books.forEach(function (item) {
//   item.textContent += " (book title)";
// });

// --------------------------------------------------------------
// const bookList = document.getElementById("book-list");
// // bookList.innerHTML = "<h2>Books and more books...</h2>";
// bookList.innerHTML += "<p>This is how you add HTML</p>";

// var btns = document.querySelectorAll("#book-list .delete");

// -----------------------------------------------------------------
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   });
// });
// const link = document.querySelector("#page-banner a");
// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("navigation to ", e.target.textContent, " was prevented");
// });

// -----------------------------------------------------------------
const list = document.querySelector("#book-list ul");

// delete books
list.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//add books
const addForm = document.forms["add-book"];

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add content
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  // add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  //clear text
  addForm.querySelector('input[type="text"]').value = " ";
});

// hide books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function (e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// filter books
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach(function (book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
