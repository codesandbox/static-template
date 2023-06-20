// import { bookTitle } from "index.js";
import { bookTitle } from "./catalog.js";
import { Library } from "./classes/library.js";
import { books } from "./data/data-books.js";

window.addEventListener("DOMContentLoaded", function () {
  let library = new Library();
  library.load(books);
  let book = library.findBookByTitle(bookTitle);

  function generateDetailsPage() {
    let title = document.getElementById("book-title");
    let articleTitle = document.querySelector("main h2 span");
    let figure = document.querySelector("#book-details figure");
    let details = document.querySelector("#book-details .infos");

    let h2 = document.createElement("h2");
    let cat = document.createElement("p");
    cat.classList.add("category");
    let author = document.createElement("p");
    author.classList.add("author");
    let summary = document.createElement("p");
    summary.classList.add("summary");

    title.textContent = book.title;
    articleTitle.textContent = book.title;
    figure.innerHTML = `<img src="../${book.cover}" alt="Couverture ${book.title}">`;

    h2.innerHTML = `${book.title}`;
    cat.innerHTML = `${book.category}`;
    author.innerHTML = `${book.author}`;
    summary.textContent = book.summary;

    details.appendChild(h2);
    details.appendChild(cat);
    details.appendChild(author);
    details.appendChild(summary);
  }

  function booksSuggestions() {
    let category = book.category;
    let catTitle = document.querySelector(".other-books h2 span");
    catTitle.textContent = category;
    let sameCat = library.findBooksByCategory(category);
    console.log(sameCat);
    let otherBooks = document.getElementsByClassName("other-books");

    if (sameCat.length > 0) {
      let suggestions = [];
      for (let suggestion of sameCat) {
        if (suggestion.title !== book.title) {
          let article = document.createElement("article");
          let figure = document.createElement("figure");
          let h2 = document.createElement("h2");
          let cat = document.createElement("p");
          cat.classList.add("category");
          let author = document.createElement("p");
          author.classList.add("author");
          let discoverBtn = document.createElement("button");
          discoverBtn.classList.add("discover");

          figure.innerHTML = `<img src="../${suggestion.cover}" alt="Couverture ${suggestion.title}">`;
          h2.innerHTML = `${suggestion.title}`;
          cat.innerHTML = `${suggestion.category}`;
          author.innerHTML = `${suggestion.author}`;
          discoverBtn.innerHTML = "Découvrir le livre";

          otherBooks.appendChild(article);
          article.appendChild(figure);
          article.appendChild(h2);
          article.appendChild(cat);
          article.appendChild(author);
          article.appendChild(discoverBtn);
        }
      }
    } else {
      otherBooks.style.display = "none";
    }
  }
  generateDetailsPage();
  booksSuggestions();
});
