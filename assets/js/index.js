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

  displayBooks(library.shelf, 5, "");

  function getBookTitle() {
    let discoverBtn = document.getElementsByClassName("discover");

    for (let i = 0; i < 5; i++) {
      discoverBtn[i].addEventListener("click", function () {
        let bookTitle = library.shelf[i].title;
        sessionStorage.setItem("bookTitle", bookTitle);
        console.log(bookTitle);
      });
    }
  }
  getBookTitle();
});
