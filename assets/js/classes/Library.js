import { listBooks } from "../data/data-books.js";
import { Book } from "./Book.js";

class Library {
  #shelf;

  constructor(shelf) {
    this.#shelf = [];
  }

  get shelf() {
    return this.#shelf;
  }
  set shelf(shelf) {
    this.#shelf = shelf;
  }

  load(bookList) {
    let newList;
    for (let i = 0; i < listBooks.length; i++) {
      newList = new Book(
        bookList[i].title,
        bookList[i].category,
        bookList[i].author,
        bookList[i].resume,
        bookList[i].image
      );

      this.#shelf.push(newList);
    }
  }

  addBook(book) {
    this.#shelf.push(book);
  }

  removeBook(book) {
    for (let i = 0; i < this.#shelf.length; i++) {
      if (
        this.#shelf[i].title === book.title &&
        this.#shelf[i].author === book.author
      ) {
        this.#shelf.splice(i, 1);
      }
    }
  }

  findBookByTitle(title) {
    for (let i = 0; i < this.#shelf.length; i++) {
      if (this.#shelf[i].title === title) {
        return this.#shelf[i];
      }
    }
  }

  findBookByAuthor(author) {
    for (let i = 0; i < this.#shelf.length; i++) {
      if (this.#shelf[i].author === author) {
        return this.#shelf[i];
      }
    }
  }

  findBookByCategory(category) {
    let listOfBooks = [];

    for (let i = 0; i < this.#shelf.length; i++) {
      if (this.#shelf[i].category === category) {
        listOfBooks.push(this.#shelf[i]);
      }
    }
    return listOfBooks;
  }

  getCategories() {
    let listOfCat = [];
    for (let i = 0; i < this.#shelf.length; i++) {
      listOfCat.push(this.#shelf[i].category);
    }
    return listOfCat;
  }
}

export { Library };
