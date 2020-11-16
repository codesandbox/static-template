let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city for weather forecast");
city = city.toLocaleLowerCase();
city = city.trim();

if (city === "paris") {
  alert(`It is currently 19.7°C in ${city} with a humidity of 80%`);
} else {
  if (city === "moscow") {
    alert(`It is currently -5°C in ${city} with a humidity of 20%`);
  } else {
    if (city === "san fransisco") {
      alert(`It is currently 20.9°C in ${city} with a humidity of 100%`);
    } else {
      if (city === "tokyo") {
        alert(`It is currently 17.3°C in ${city} with a humidity of 50%`);
      } else {
        if (city === "lisbon") {
          alert(`It is currently 30.2°C in ${city} with a humidity of 20%`);
        } else {
          alert(
            `Sorry, we don't know the weather for ${city}, try going to https://www.google.com/search?q=weather+${city}`
          );
        }
      }
    }
  }
}
