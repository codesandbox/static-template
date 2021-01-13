const mainWrapper = document.getElementById("main-wrapper");

const loading = document.querySelector(".loader");

let limit = 10;
let page = 1;

async function getPosts() {
  const response = await fetch(
    `http://www.pinkvilla.com/photo-gallery-feed-page?_limit=${limit}&_page=${page}`
  );
  const data = await response.json();
  return data;
}

async function showFeed() {
  const feeds = await getPosts();
  feeds.forEach((feed) => {
    const feedElement = document.createElement("div");
    feedElement.classList("albums");
    feedElement.innerHTML = `
    <div class="img-album">
      <img
      src=${feed.thumbnailUrl}
      alt=""
      />
    </div>
    <div class="album-info">
      <p class="album-body">
      ${feed.title}
      </p>
    </div>`;
    mainWrapper.appendChild(feedElement);
  });
}

function showLoading() {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");

    setTimeout(() => {
      page++;
      showFeed();
    }, 3000);
  }, 1000);
}

showFeed();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 6) {
    showLoading();
  }
});
