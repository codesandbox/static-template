function fomratDate(date) {
  // Set Local Time //
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let currentTime = `${currentHour}:${currentMinutes}`;

  let time = document.querySelector("#local-time");
  time.innerHTML = currentTime;

  //Set Local Date
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentDay = date.getDate();
  let currentMonth = months[date.getMonth()];
  let currentYear = date.getFullYear();
  let descriptor = "st,th";

  if (currentDay === 1) {
    descriptor = "st";
  } else {
    if (currentDay === 2) {
      descriptor = "nd";
    } else {
      if (currentDay === 3) {
        descriptor = "rd";
      }
      descriptor = "th";
    }
  }

  return `${currentDay}${descriptor} ${currentMonth} ${currentYear}`;
}

let localDate = document.querySelector("#date");
let now = new Date();
localDate.innerHTML = fomratDate(now);

//Display correct weekdays

//Display City
function searchCity(event) {
  event.preventDefault();

  let inputCity = document.querySelector("#input-city");
  let newCity = document.querySelector("h1");
  newCity.innerHTML = `${inputCity.value}`;
}

let form = document.querySelector("#new-city");
form.addEventListener("submit", searchCity);

//Display Temp

function celsiusTemp(event) {
  event.preventDefault();
  let newTemp = document.querySelector("#currentTemp");
  newTemp.innerHTML = temperature;
}

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", celsiusTemp);

function farenheightTemp(event) {
  event.preventDefault();
  let newTemp = document.querySelector("#currentTemp");
  newTemp.innerHTML = (temperature * 9) / 5 + 32;
}

let currentTemp = document.querySelector("#currentTemp");
let temperature = currentTemp.innerHTML;
let farenheight = document.querySelector("#farenheight-link");
farenheight.addEventListener("click", farenheightTemp);
