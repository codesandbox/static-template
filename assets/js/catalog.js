import { Library } from "./classes/library.js";
import { books } from "./data/data-books.js";

window.addEventListener("DOMContentLoaded", function () {
  let library = new Library();
  library.load(books);
  console.log(library.shelf);

  let librarySection = document.querySelector(".library");

  function displayBooks(list, nb, coverURL) {
    for (let i = 0; i < nb; i++) {
      let article = document.createElement("article");
      let figure = document.createElement("figure");
      let h2 = document.createElement("h2");
      let cat = document.createElement("p");
      cat.classList.add("category");
      let author = document.createElement("p");
      author.classList.add("author");
      let discoverBtn = document.createElement("button");
      discoverBtn.classList.add("discover");

      figure.innerHTML = `<img src="${
        coverURL + list[i].cover
      }" alt="Couverture ${list[i].title}">`;
      h2.innerHTML = `${list[i].title}`;
      cat.innerHTML = `${list[i].category}`;
      author.innerHTML = `${list[i].author}`;
      discoverBtn.innerHTML = "Découvrir le livre";

      librarySection.appendChild(article);
      article.appendChild(figure);
      article.appendChild(h2);
      article.appendChild(cat);
      article.appendChild(author);
      article.appendChild(discoverBtn);
    }
  }

  displayBooks(library.shelf, library.shelf.length, "../");

  function createFilters() {
    let categories = library.getCategories();
    console.log(categories);

    let filters = document.getElementById("filters");

    for (let cat of categories) {
      let li = document.createElement("li");
      let link = document.createElement("a");
      // link.setAttribute("href","#");
      let aText = document.createTextNode(cat);
      link.appendChild(aText);
      li.appendChild(link);
      filters.appendChild(li);
    }
  }

  function booksByCategory() {
    let filters = document.querySelectorAll("#filters li a");
    for (let filter of filters) {
      filter.addEventListener("click", function (event) {
        let category = event.target.textContent;
        let bookList = library.findBookByCategory(category);
        console.log(bookList);
        let librarySection = document.querySelector(".library");
        librarySection.innerHTML = "";
        displayBooks(bookList, bookList.length, "../");
      });
    }
  }

  function getBookTitle() {
    let discoverBtn = document.getElementsByClassName("discover");

    for (let i = 0; i < library.shelf.length; i++) {
      discoverBtn[i].addEventListener("click", function () {
        let bookTitle = library.shelf[i].title;
        sessionStorage.setItem("bookTitle", bookTitle);
        window.location.assign("https://j62k78.csb.app/livres/details.html");
      });
    }
  }
  createFilters();
  booksByCategory();
  getBookTitle();
});

let bookTitle = sessionStorage.getItem("bookTitle");
console.log(bookTitle);

export { bookTitle };
