const body = document.body;
const input = document.querySelector('input[type="text"]');
const overlay = document.querySelector(".overlay");

function showFloter() {
  body.classList.add("show-floter");
}

function closeFloter() {
  if (body.classList.contains("show-floter")) {
    body.classList.remove("show-floter");
  }
}

// Eventlistner
input.addEventListener("focusin", showFloter);
input.addEventListener("focusout", closeFloter);
overlay.addEventListener("click", closeFloter);

// =====================================
const bookmarkList = document.querySelector(".bookmark-list");
const bookmarkForm = document.querySelector(".bookmark-form");
const bookmarkInput = bookmarkForm.querySelector("input[type=text]");
const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

fillBookmarkList(bookmarks);

function createBookmark(e) {
  e.preventDefault();

  // Add a new bookmark to a new bookmark
  const title = bookmarkInput.value;
  const bookmark = {
    title: title
  };

  bookmarks.push(bookmark);
  StoreBookmark(bookmarks);
  bookmarkForm.reset();
}

function fillBookmarkList(bookmarks = []) {
  const bookmarkHtml = bookmarks
    .map((bookmark, i) => {
      return `
        <a href="#" class="bookmark" data-id="${i}">
          <div class="img"></div>
          <div class="title">${bookmark.title}</div>
          <span class="remove"><i class="ri-close-fill"></i></span>
        </a>
    `;
    })
    .join("");

  bookmarkList.innerHTML = bookmarkHtml;
}

function removeBookmark(e) {
  if (!e.target.matches("i")) return;
  const index = e.target.parentNode.parentNode.dataset.id;
  bookmarks.splice(index, 1);
  fillBookmarkList(bookmarks);
  StoreBookmark(bookmarks);
}

// create fun for localStorage
function StoreBookmark(bookmarks = []) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

bookmarkForm.addEventListener("submit", createBookmark);
bookmarkList.addEventListener("click", removeBookmark);
