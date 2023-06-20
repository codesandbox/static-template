import { Book } from "./book.js";

class Library {
  #shelf;

  constructor() {
    this.#shelf = [];
  }

  //GETTERS
  get shelf() {
    return this.#shelf;
  }

  //SETTERS
  set shelf(newShelf) {
    this.#shelf = newShelf;
  }

  //METHODES
  load(bookList) {
    for (let book of bookList) {
      let newBook = new Book(
        book.title,
        book.author,
        book.category,
        book.summary,
        book.cover
      );
      this.#shelf.push(newBook);
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
    let bookList = [];
    for (let i = 0; i < this.#shelf.length; i++) {
      if (this.#shelf[i].author === author) {
        bookList.push(this.#shelf[i]);
      }
    }
    return bookList;
  }

  findBooksByCategory(category) {
    let bookList = [];
    for (let i = 0; i < this.#shelf.length; i++) {
      if (this.#shelf[i].category === category) {
        bookList.push(this.#shelf[i]);
      }
    }
    return bookList;
  }

  getCategories() {
    let categories = [];
    for (let i = 0; i < this.#shelf.length; i++) {
      if (!categories.includes(this.#shelf[i].category)) {
        categories.push(this.#shelf[i].category);
      }
    }
    return categories;
  }
}

export { Library };
