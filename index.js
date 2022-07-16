const form = document.querySelector('form');
const search = document.getElementById('search');
const weather = document.getElementById('weather');
const body = document.querySelector('body');
const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';

const getWeather = async (city) => {
  // 2. adding the cityname value dynamically to the API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  // 3. calling the API
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  // 4. showing the dynamic data on screen
  // add a default
  showWeather(data);
};

const showWeather = (data) => {
  console.log('inside showWeather', data);
  if (data.cod >= '400') {
    weather.innerHTML = `<h2>Oops! City not found!</h2>`;
    return;
  }
  weather.innerHTML = `        
        <div>
        <img
          src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
          alt="weather"
        />
      </div>
      <div>
        <h2>${data.main.temp} ℃</h2>
        <h4>${data.weather[0].main}</h4>
      </div>
      `;
};

body.onload = () => {
  weather.innerHTML = `        
        <div>
        <img
          src="https://openweathermap.org/img/wn/50n@2x.png"
          alt="weather"
        />
      </div>
      <div>
        <h2>32 ℃</h2>
        <h4>Haze</h4>
      </div>
      `;
};

form.addEventListener('submit', function (event) {
  // 1. to get the user input from that search box
  console.log('city name: ', search.value); // fetch the user input

  // get the weather details of the city name given by user
  getWeather(search.value); // cityname
  event.preventDefault();
});