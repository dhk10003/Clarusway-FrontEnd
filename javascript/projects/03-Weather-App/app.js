// Get the weather data from the API based on the city name

const getWeatherData = async (cityName) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bbeb8946dae1256938a7c6124898816e&units=metric`;
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response.data.cod === "404") {
      document.querySelector(
        "#msg"
      ).innerHTML = `<p>${error.response.data.message}</p>`;
    }
  }
};

// Store the weather ID in an array to prevent duplicate data
let weatherID = [];

// Display the weather data in HTML
const WeatherHTML = (data) => {
  const displayContainer = document.querySelector("#displayContainer");
  const html = `<div class="weatherBox">
    <h4>${data.name} - ${data.sys.country}</h4>
    <h1>${Math.round(data.main.temp)} &#8451;</h1>
    <img src="http://openweathermap.org/img/wn/${
      data.weather[0].icon
    }@2x.png" alt="" class="svgImg">
    <h5>${data.weather[0].description}</h5>
   </div>`;
  displayContainer.innerHTML += html;
};

const DisplayWeather = async (cityName) => {
  const data = await getWeatherData(cityName);
  if (weatherID.includes(data.sys.id)) {
    document.querySelector(
      "#msg"
    ).innerHTML = `<p>You already know the weather for ${data.name}, please search for another city</p>`;
    return;
  }
  weatherID.push(data.sys.id);
  WeatherHTML(data);
  document.querySelector("#city").value = "";
};

// Event listener for the form
document.querySelector("form").addEventListener("submit", (e) => {
  if (document.querySelector("#city").value === "") {
    e.preventDefault();
    document.querySelector("#msg").innerHTML =
      "<p>Please enter a city name</p>";
    return;
  }

  document.querySelector("#msg").innerHTML = "";
  e.preventDefault();
  const cityName = document.querySelector("#city").value;
  DisplayWeather(cityName);
});
