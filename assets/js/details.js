import { newTitle } from "./index.js";
import { listBooks } from "./data/data-books.js";
import { Library } from "./classes/Library.js";

window.addEventListener("DOMContentLoaded", function () {
  let library = new Library();
  library.load(listBooks);

  let newBook = library.findBookByTitle(newTitle);
  // console.log(newBook);
  let bookTitle = document.querySelector("header section:nth-of-type(2) h2");
  let bookTitleTwo = document.querySelector("main h3 span");
  bookTitle.innerHTML = newBook.title;
  bookTitleTwo.innerHTML = newBook.title;

  let img = document.querySelector("main .book-in-display figure img");
  img.setAttribute("src", "../" + newBook.image);

  let titleOfBook = document.querySelector("main .book-in-display section h3");
  titleOfBook.innerHTML = newBook.title;

  let category = document.querySelector(".book-in-display section .category");
  category.innerHTML = newBook.category;

  let author = document.querySelector(
    ".book-in-display section p:nth-of-type(2)"
  );
  author.innerHTML = newBook.author;

  let resume = document.querySelector(".book-in-display .resume");
  resume.innerHTML = newBook.resume;

  let categoryOfBook = document.querySelector(".list-of-books h3 span");
  categoryOfBook.innerHTML = newBook.category;

  function displayBooks() {
    let listOfCat = newBook.category;
    let otherBooks = library.findBookByCategory(listOfCat);
    console.log(otherBooks);
    let section = document.getElementById("list-of-books");
    let suggestions = document.getElementById("suggestions");

    if (otherBooks.length > 1) {
      for (let i = 0; i < 3; i++) {
        if (otherBooks[i].title !== newBook.title) {
          let article = document.createElement("article");
          let cover = document.createElement("img");
          cover.setAttribute("src", "../" + otherBooks[i].image);
          // cover.src = library.shelf[i].image;

          let title = document.createElement("h4");
          title.textContent = otherBooks[i].title;

          let catagory = document.createElement("p");
          catagory.classList.add("category");
          catagory.textContent = otherBooks[i].category;

          let author = document.createElement("p");
          author.textContent = otherBooks[i].author;

          let btn = document.createElement("button");
          btn.innerHTML = "Découvrir le livre";

          article.appendChild(cover);
          article.appendChild(title);
          article.appendChild(catagory);
          article.appendChild(author);
          article.appendChild(btn);

          suggestions.appendChild(article);
          // section.appendChild(article);
        }
      }
    } else {
      section.style.display = "none";
    }
  }
  displayBooks();
});
