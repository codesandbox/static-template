let movies = [
  {
    name: "Reach me out.",
    des: "Reach me out on LinkedIn : Abhinandan Joshi",
    Image: "src/lnn.jpeg"
  },
  {
    name: "Disney+ Hotstar Clone",
    des:
      "Hello there, I am Abhinandan Joshi, A first year B.Tech student of CSE at National Institute of Technology, Uttarakhand and here is my project of Clone of Disney+ Hostar using HTML, JavaScript & CSS.",
    Image: "src/abhi.png"
  },
  {
    name: "HTML",
    des:
      "HTML stands for Hyper Text Markup Language, It bascically provides a skeleton to this Clone",
    Image: "src/html.png"
  },
  {
    name: "CSS",
    des:
      "CSS stands for Cascading Style Sheets, I used CSS for the work of styling it.",
    Image: "src/css1.png"
  },
  {
    name: "JavaScript",
    des:
      "JavaScript is used for adding interactive behavior to the website,Here I used JavaScript for various animations and providing the exact same UI as Hotstar Website.",
    Image: "src/js1.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].Image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide(sliders);
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
