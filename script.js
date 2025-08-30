// script.js

// Replace with your OpenWeatherMap API key
const apiKey = "8cacd3dacde28103ed22e52d68c76333";

// Default city
const city = "Mumbai";

// Fetch current weather data
async function getCurrentWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Weather data fetch failed');
    const data = await response.json();

    // Update HTML elements
    document.getElementById("city").textContent = data.name;
    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (error) {
    console.error('Error fetching current weather:', error);
  }
}

// Fetch forecast data
async function getForecast() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Forecast data fetch failed');
    const data = await response.json();

    // Update hourly forecast
    const hourlyElements = document.querySelectorAll('.hour');
    for (let i = 0; i < hourlyElements.length; i++) {
      const forecast = data.list[i];
      const hour = new Date(forecast.dt * 1000).getHours();
      const temp = Math.round(forecast.main.temp);
      const icon = forecast.weather[0].icon;

      hourlyElements[i].querySelector('p:first-child').textContent = `${hour}:00`;
      hourlyElements[i].querySelector('img').src = `https://openweathermap.org/img/wn/${icon}.png`;
      hourlyElements[i].querySelector('p:last-child').textContent = `${temp}°C`;
    }

    // Update daily forecast
    const dailyElements = document.querySelectorAll('.day');
    const dailyData = data.list.filter((item, index) => index % 8 === 0);
    for (let i = 0; i < dailyElements.length; i++) {
      const forecast = dailyData[i];
      if (forecast) {
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = Math.round(forecast.main.temp);
        const icon = forecast.weather[0].icon;

        dailyElements[i].querySelector('p:first-child').textContent = day;
        dailyElements[i].querySelector('img').src = `https://openweathermap.org/img/wn/${icon}.png`;
        dailyElements[i].querySelector('p:last-child').textContent = `${temp}°C`;
      }
    }
  } catch (error) {
    console.error('Error fetching forecast:', error);
  }
}

// Initialize weather data
async function initWeather() {
  console.log('Starting weather initialization...');
  try {
    await getCurrentWeather();
    console.log('Current weather loaded');
    await getForecast();
    console.log('Forecast loaded');
  } catch (error) {
    console.error('Failed to initialize weather:', error);
    document.getElementById("city").textContent = "Error loading weather";
    document.getElementById("temperature").textContent = "--°C";
    document.getElementById("description").textContent = "Please check console for errors";
  }
}

// Call function when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing weather...');
  initWeather();
});
