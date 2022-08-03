//let movies= [
//{ name:"falcon and the winter soilder",
//des:
//"This a animatory film about the dinasour with a world class animation.Must Watch"
//image: "images/slider1.png"
//},
//{ name:"falcon and the winter soilder",
//des:
//"This a animatory film about the dinasour with a world class animation.Must Watch"
//image: "images/slider2.png"
//},
//{ name:"falcon and the winter soilder",
//des:
//"This a animatory film about the dinasour with a world class animation.Must Watch"
//image: "images/slider3.png"
//},
//{ name:"falcon and the winter soilder",
//des:
//"This a animatory film about the dinasour with a world class animation.Must Watch"
//image: "images/slider4.png"
//},
//{ name:"falcon and the winter soilder",
//des:
//"This a animatory film about the dinasour with a world class animation.Must Watch"
//image:"images/slider6.png"
//},

//]

//video cards
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders
