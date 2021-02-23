const HOURHAND = document.getElementById("hour");
const MINUTEHAND = document.getElementById("minute");
const SECONDHAND = document.getElementById("second");

const date = new Date();

let sc = date.getSeconds();
let min = date.getMinutes();
let hr = date.getHours();

let hourPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let minPosition = (min * 360) / 60 + (sc * (360 / 60)) / 60;
let secPosition = (sc * 360) / 60;

const func = () => {
  hourPosition = hourPosition + 3 / 360;
  minPosition = minPosition + 6 / 60;
  secPosition = secPosition + 6;

  HOURHAND.style.transform = `rotate(${hourPosition}deg)`;
  MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
  SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
};

setInterval(func, 1000);
