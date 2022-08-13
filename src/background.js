const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const url = `img/${chosenImage}`;
const urlV = `url('${url}')`;

document.body.style.background = urlV;
