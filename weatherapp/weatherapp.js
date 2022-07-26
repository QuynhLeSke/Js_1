"use strict";

import { uiManager } from "./uiManager.js";
import "../node_modules/dotenv/config.js";

const searchBar = document.querySelector("input");
const form = document.querySelector("form");
const toggle = document.querySelector("input.toggle");
let metricWeather;
let imperialWeather;
let currentWeather;

class WeatherObject {
  constructor(
    location,
    temp,
    feelsLike,
    humidity,
    weatherDescription,
    weatherMain,
    icon
  ) {
    this.location = location;
    this.temp = temp.toFixed();
    this.feelsLike = feelsLike.toFixed();
    this.humidity = humidity;
    this.weatherMain = weatherMain;
    this.weatherDescription = weatherDescription;
    this.icon = icon;
  }
}

async function makeApiCall(cityName) {
  const metricResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.SECRET_API_KEY}&units=metric`,
    { mode: "cors" }
  );
  const metricData = await metricResponse.json();

  const imperialResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.SECRET_API_KEY}&units=imperial`,
    { mode: "cors" }
  );
  const imperialData = await imperialResponse.json();

  if (metricData.cod === "404") {
    return false;
  }
  console.log(metricData);

  metricWeather = new WeatherObject(
    `${metricData.name}, ${metricData.sys.country}`,
    metricData.main.temp,
    metricData.main.feels_like,
    metricData.main.humidity,
    metricData.weather[0].description,
    metricData.weather[0].main,
    metricData.weather[0].icon
  );

  imperialWeather = new WeatherObject(
    `${imperialData.name}, ${imperialData.sys.country}`,
    imperialData.main.temp,
    imperialData.main.feels_like,
    imperialData.main.humidity,
    imperialData.weather[0].description,
    imperialData.weather[0].main,
    imperialData.weather[0].icon
  );
  return true;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  uiManager.startLoading();

  makeApiCall(searchBar.value, "C").then((result) => {
    searchBar.value = "";
    uiManager.endLoading();
    if (result === false) {
      console.log("not found");
      uiManager.notFoundError();
      return;
    }
    currentWeather = metricWeather;
    uiManager.updateCard(currentWeather);
  });
});

toggle.addEventListener("click", () => {
  if (currentWeather === metricWeather) {
    currentWeather = imperialWeather;
  } else {
    currentWeather = metricWeather;
  }
  uiManager.updateCard(currentWeather);
});
