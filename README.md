Clone Nintendo

const Page = document.getElementById("PageCount");

const Down = document.querySelector("body > center > span.LeftButton > strong");
const Up = document.querySelector("body > center > span.RightButton > strong");

const BASE_COUNT = 1;
const FULL_COUNT = 8;

var current_count = Number(Page.innerText); // 1

function DownCount() {
if (current_count === BASE_COUNT) {
// 1이면 8로
current_count = FULL_COUNT;
Page.innerHTML = current_count;
} else {
current_count -= 1;
Page.innerHTML = current_count;
}
}

function UpCount() {
if (current_count === FULL_COUNT) {
// 8이면 1로
current_count = BASE_COUNT;
Page.innerHTML = current_count;
} else {
current_count += 1;
Page.innerHTML = current_count;
}
}

function init() {
Page.innerHTML = BASE_COUNT;
Down.addEventListener("click", DownCount);
Up.addEventListener("click", UpCount);
}

init();

// 2. main image
