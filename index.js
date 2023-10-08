let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "Following the events of Avengers: Endgame, Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities — and their patience — in Marvel Studios’ The Falcon and The Winter Soldier.",
    image: "images/slider 2.png"
  },
  {
    name: "loki",
    des:
      "God of Mischief and brother to Thor, Loki's tricks and schemes wreak havoc across the realms. Loki, Prince of Asgard, Odinson, rightful heir of Jotunheim, and God of Mischief, is burdened with glorious purpose. His desire to be a king drives him to sow chaos in Asgard.",
    image: "images/slider 1.png"
  },
  {
    name: "wanda vision",
    des:
      "The series combines MCU action with riffs on classic sitcoms, and sees magic-wielding Sokovian Avenger Wanda Maximoff (Elizabeth Olsen) and the synthetic, thought-dead Avenger Vision (Paul Bettany) settling down for suburban life in the town of Westview. Naturally, not all is as it seems.",
    image: "images/slider 3.png"
  },
  {
    name: "luca",
    des:
      "Set in a beautiful seaside town on the Italian Riviera, Disney and Pixar's original feature film “Luca” is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
    image: "images/slider 5.png"
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
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.classname = "slider";
  content.classname = "slide-content";
  h1.classname = "movie-title";
  p.classname = "movie-des";

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

// video cards

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
let nxtBtns = [...document.querySelectorAll(".nxtBtns")];

cardContainers.forEach((items, i) => {
  let containerDimensions = items.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    items.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    items.scrollLeft -= containerWidth + 200;
  });
});
