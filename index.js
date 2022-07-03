let movies = [
  {
    name: "falcon and the winter soldier",
    des: "lorem ",
    image: "images/slider 2.PNG"
  },
  {
    name: "loki",
    des: "lorem ",
    image: "images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des: "lorem ",
    image: "images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    des: "lorem ",
    image: "images/slider 4.PNG"
  },
  {
    name: "luca",
    des: "lorem ",
    image: "images/slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  //create DOM Elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classname
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

let cardContainers1 = [...document.querySelectorAll(".card-container1")];
let preBtns1 = [...document.querySelectorAll(".pre-btn1")];
let nxtBtns1 = [...document.querySelectorAll(".nxt-btn1")];

cardContainers1.forEach((item, i) => {
  let containerDimensions1 = item.getBoundingClientRect();
  let containerWidth1 = containerDimensions1.width;

  nxtBtns1[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth1 - 200;
  });

  preBtns1[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth1 + 200;
  });
});
