const API_KEY = "cc12f8c820de4be74748258c510803ea";
const weatherContainer = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  weatherContainer.innerText = `? / ?℃`;
  city.innerText = `unknown`;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
