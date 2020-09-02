const api = {
  key: "49d7be186c5442eb98081927f31ad770",
  baseurl: "https://api.openweathermap.org/data/2.5/"
};
const search = document.getElementById("search");

const setQuery = (el) => {
  if (el.keyCode === 13) {
    getResults(search.value);
    console.log(search.value);
  }
};

const getResults = (query) => {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
};

const displayResults = (weather) => {
  let city = document.querySelector(".city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".current .temperature");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>*C</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".high-low");
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
    weather.main.temp_max
  )}°c`;
};

search.addEventListener("keypress", setQuery);

const dateBuilder = (d) => {
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
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[d.getDay()];
  let month = months[d.getMonth()];
  let tarikh = d.getDate();
  let year = d.getFullYear();

  return `${day} ${tarikh} ${month} ${year} `;
};
