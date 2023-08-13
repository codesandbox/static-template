const movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excess",
    image: "falcon.webp"
  },

  {
    name: "Loki",
    des:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excess",
    image: "loki.webp"
  },

  {
    name: "wanda vision",
    des:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excess",
    image: "wanda.webp"
  },

  {
    name: "Raya and the last Dragon",
    des:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excess",
    image: "raya.webp"
  },

  {
    name: "Luca",
    des:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excess",
    image: "luca.webp"
  }
];

const carousel = document.querySelector(".caraousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // Remove the previous images
  const previousSlide = carousel.querySelector(".slider");
  if (previousSlide) {
    carousel.removeChild(previousSlide);
  }

  // Create DOM Elements for the new slide
  let slide = document.createElement("div");
  slide.className = "slider";

  var imgElement = document.createElement("img");
  imgElement.src = movies[slideIndex].image;
  imgElement.className = "slide-image";

  let content = document.createElement("div");
  content.className = "slide-content";

  let h1 = document.createElement("h1");
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  h1.className = "movie-title";

  let p = document.createElement("p");
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  p.className = "movie-des";

  content.appendChild(h1);
  content.appendChild(p);

  slide.appendChild(imgElement);
  slide.appendChild(content);

  carousel.appendChild(slide);

  slideIndex++;

  // Adjusting the slider position
  sliders.push(slide);
  if (slide.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
setInterval(() => {
  createSlide();
}, 3000);

//video cards
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

//card sliders

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
