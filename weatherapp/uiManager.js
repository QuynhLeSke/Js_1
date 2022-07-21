const uiManager = (function uiManager() {
  // buffer DOM
  const weatherCard = document.querySelector("div.weather-card");

  const errorCard = document.querySelector("div.error-card");
  const loader = document.querySelector("div.loader");
  const location = document.querySelector(".location");
  const currTemperature = document.querySelector(".curr-temperature");
  const icon = document.querySelector("img.weather-icon");
  const feelsLike = document.querySelector(".feels-like");
  const weatherDescription = document.querySelector(".weather-conditions");

  function updateCard(weatherObj) {
    errorCard.classList.add("hide");
    weatherCard.classList.remove("hide");
    location.textContent = weatherObj.location;
    currTemperature.textContent = `${weatherObj.temp}°`;
    feelsLike.textContent = `Feels like ${weatherObj.feelsLike}°`;
    weatherDescription.textContent = weatherObj.weatherDescription;
  }

  function notFoundError() {
    weatherCard.classList.add("hide");
    errorCard.classList.remove("hide");
  }

  function startLoading() {
    weatherCard.classList.add("hide");
    errorCard.classList.add("hide");
    loader.classList.remove("hide");
  }

  function endLoading() {
    loader.classList.add("hide");
  }
  return { updateCard, notFoundError, startLoading, endLoading };
})();

export { uiManager };
