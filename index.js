let movies = [
  {
    name: "Loki",
    des: "Hi i am Loki",
    image: "images/slider 1.PNG"
  },
  {
    name: "The Falcon and the Winter Soldier",
    des: "The Falcon and the Winter Soldier",
    image: "images/slider 2.PNG"
  },
  {
    name: "Wanda Vision",
    des:
      "Some random description about how Wanda and Vision come together to save this universe from the evil clutches of the most feared villian of our time.",
    image: "images/slider 3.PNG"
  },
  {
    name: "Raya and the Last Dragon",
    des: "No idea what this is",
    image: "images/slider 4.PNG"
  },
  {
    name: "Luca",
    des: "Some animated movie",
    image: "images/slider 5.PNG"
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

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft =
      "calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length -2)}px)";
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

const videoCards= [...document.querySelectorAll('.video-card')];

videoCards.forEach(item =>{
  item.addEventListener('mouseover'.length()=>{
    let video = item.children[1];
    video.play()
  })
  item.addEventListener('mouseleave',()=>{
    let video = item.children[1];
    video.pause()
  })
})

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((items,i)=>{
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener('click',()=>{
    item.scrollLeft += containerWidth -200;
  })
  preBtns[i].addEventListener('click',()=>{
    item.scrollLeft -= containerWidth +200;
  });
});