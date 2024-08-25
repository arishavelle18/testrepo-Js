const weatherForm = document.getElementById("weatherForm");
weatherForm.addEventListener("submit", showweatherDetails);

function showweatherDetails(event) {
  event.preventDefault();
  const city = document.getElementById("city").value;
  const apiKey = "adc65537bb1aeedf5ae4c8094257b933";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      console.log(data);
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
     <p>Temperature: ${data.main.temp} &#8451;</p>
     <p>Weather: ${data.weather[0].description}</p>`;
      document.getElementById("city").value = "";
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

const weatherFormLongLat = document.getElementById("weatherFormLongLat");
weatherFormLongLat.addEventListener("submit", showweatherDetailsLongLat);

function showweatherDetailsLongLat(event) {
  event.preventDefault();
  const longitude = parseFloat(document.getElementById("longitude").value);
  const latitude = parseFloat(document.getElementById("latitude").value);
  console.log(longitude, latitude);
  const apiKey = "adc65537bb1aeedf5ae4c8094257b933";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      console.log(data);
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
     <p>Temperature: ${data.main.temp} &#8451;</p>
     <p>Weather: ${data.weather[0].description}</p>`;
      document.getElementById("longitude").value = "";
      document.getElementById("latitude").value = "";
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}
