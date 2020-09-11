/*********************************************************************
 ***
 *Original Author: Michelle Petit                                  *
 *Date Created:    September 6, 2020                               *
 *Version: 1                                                       *
 *Date Last Modified: September 9, 2020                            *
 *Modified by:  Michelle Petit                                     *
 *Modification log: added flowerbox, strict mode, and $ function   *
 *Modification Log: added task manager code & adjusted var and     *
 *                    function names to suit my application        *
 ***
 ******************************************************************** */

"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

//from chpt.9 lab

var books = [];
var sortDirection = "ASC";

var displayBookList = function () {
  var list = "";
  // if there are no tasks in tasks array, check storage
  if (books.length === 0) {
    // get tasks from storage or empty string if nothing in storage
    var storage = localStorage.getItem("books") || "";

    // if not empty, convert to array and store in global tasks variable
    if (storage.length > 0) {
      books = storage.split("|");
    }
  }

  // if there are tasks in array, sort and create tasks string
  if (books.length > 0) {
    //tasks.sort();
    if (sortDirection === "ASC") {
      books.sort();
    } else {
      books.reverse();
    }
    list = books.join("\n");
  }

  //display name
  var userEntryName = sessionStorage.userEntryName || "";
  $("name").firstChild.nodeValue = userEntryName;

  // display tasks string and set focus on task text box
  $("book_list").value = list;
  $("book").focus();
};

var addToBookList = function () {
  var book = $("book");
  if (book.value === "") {
    alert("Please enter a book.");
  } else {
    // add task to array and local storage
    books.push(book.value);
    localStorage.books = books.join("|");

    // clear task text box and re-display tasks
    book.value = "";
    displayBookList();
  }
};

var clearBookList = function () {
  books.length = 0;
  localStorage.books = "";
  $("book_list").value = "";
  $("book").focus();
};

var deleteBook = function () {
  var userEntryIndexNumber = parseInt(
    prompt(
      "Enter the index number of the book you want to delete \n (index starts at 0):"
    )
  );
  if (!isNaN(userEntryIndexNumber)) {
    books.splice(userEntryIndexNumber, 1);
    localStorage.books = books.join("|");
    displayBookList();
  }
};

var reverseBookOrder = function () {
  if (sortDirection === "ASC") {
    sortDirection = "DESC";
  } else {
    sortDirection = "ASC";
  }
  displayBookList();
};

var setName = function () {
  var userEntryName = prompt("Enter your name:");
  userEntryName += "'s ";
  sessionStorage.setItem("userEntryName", userEntryName);
  displayBookList();
};

var favoriteBooks = function (element) {
  var lower = element.toLowerCase();
  var index = lower.indexOf("favorite!");
  return index > -1 ? true : false;
};

var filterBooks = function () {
  var filtered = books.filter(favoriteBooks);
  $("book_list").value = filtered.join("\n");
};

window.onload = function () {
  $("add_book").onclick = addToBookList;
  $("clear_books").onclick = clearBookList;
  $("delete_book").onclick = deleteBook;
  $("reverse_order").onclick = reverseBookOrder;
  $("set_name").onclick = setName;
  $("favorite_books").onclick = filterBooks;
  displayBookList();
};
