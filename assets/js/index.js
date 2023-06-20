import { listBooks } from "../js/data/data-books.js";
// import { Book } from "../js/classes/Book.js";
import { Library } from "../js/classes/Library.js";

window.addEventListener("DOMContentLoaded", function () {
  let library = new Library();
  library.load(listBooks);

  function dynamicList(number, url) {
    let section = document.getElementById("list-of-books");

    for (let i = 0; i < number; i++) {
      let article = document.createElement("article");
      let cover = document.createElement("img");
      cover.setAttribute("src", url + library.shelf[i].image);
      // cover.src = library.shelf[i].image;

      let title = document.createElement("h4");
      title.textContent = library.shelf[i].title;

      let catagory = document.createElement("p");
      catagory.classList.add("category");
      catagory.textContent = library.shelf[i].category;

      let author = document.createElement("p");
      author.textContent = library.shelf[i].author;

      let btn = document.createElement("button");
      btn.innerHTML = "Découvrir le livre";

      article.appendChild(cover);
      article.appendChild(title);
      article.appendChild(catagory);
      article.appendChild(author);
      article.appendChild(btn);

      section.appendChild(article);
    }
    // console.log(library.shelf);
    // console.log(library.getCategories());
  }

  if (window.location.pathname === "/index.html") {
    dynamicList(5, "");
  } else if (window.location.pathname === "/livre/index.html") {
    dynamicList(library.shelf.length, "../");
  }

  let categories = document.querySelectorAll("main aside ul li");
  let bookByCat = document.querySelectorAll("main .list-of-books article");

  for (let categorie of categories) {
    categorie.addEventListener("click", function (event) {
      let filters = event.target.textContent;
      event.target.classList.toggle("selected");
      // console.log(filters);
      // let bookList = library.findBookByCategory(filters);
      // console.log(bookList);

      for (let book of bookByCat) {
        let bookCategory = book.querySelector("p.category").textContent;

        if (bookCategory === filters) {
          book.classList.toggle("active");
        } else if (bookCategory !== filters) {
          book.classList.toggle("inactive");
        }
      }
    });
  }

  function getBookTitle() {
    let discoverBtn = document.querySelectorAll(
      "main .list-of-books article button"
    );

    for (let i = 0; i < discoverBtn.length; i++) {
      discoverBtn[i].addEventListener("click", function (event) {
        let title = library.shelf[i].title;
        sessionStorage.setItem("title", title);
        // let newTitle = sessionStorage.getItem("title");
        // console.log(newTitle);
        window.location.assign("https://lncd2j.csb.app/livre/details.html");
      });
    }
  }

  getBookTitle();
});

let newTitle = sessionStorage.getItem("title");
console.log(newTitle);
export { newTitle };
