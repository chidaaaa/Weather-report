const form = document.querySelector("form");
const cityInput = document.querySelector("#city");
const locationElement = document.querySelector("#location");
const temperatureElement = document.querySelector("#temperature");
const descriptionElement = document.querySelector("#description");

const API_KEY = "16bd8c3c9e6ff2d6ee75068e7ea8160c";

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const city = cityInput.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      locationElement.innerHTML = data.name;
      temperatureElement.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      descriptionElement.innerHTML = data.weather[0].description;
    });
});
