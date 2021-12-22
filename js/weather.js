const API_KEY = "ee354e1ed8d24d6ba83990083a6e5b0b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  //   console.log(lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      // console.log(data.name, data.weather[0].main);
    });
}
function onGeoError() {
  alert("현 위치를 찾을 수 없습니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
