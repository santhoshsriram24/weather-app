# Weather App

A sleek and responsive weather application built with HTML, CSS, and JavaScript that provides real-time weather information. This app fetches data from the OpenWeatherMap API to display current conditions, hourly forecasts, and daily weather predictions with a beautiful, user-friendly interface.

## Overview
The Weather App offers a modern, card-based design with a dynamic background that enhances the user experience. It displays essential weather information including:
- Temperature in Celsius
- Weather conditions with descriptive icons
- Hourly forecast for the next 3 hours
- 3-day weather prediction
- Responsive design that works on both desktop and mobile devices

## Features
- Current weather conditions
- Hourly forecast
- Daily forecast
- Beautiful background image

## Setup
1. Clone the repository:
   ```
   git clone https://github.com/santhoshsriram24/weather-app.git
   ```
2. Open the project folder in VS Code or your preferred editor.
3. Replace the OpenWeatherMap API key in `script.js` with your own key.

## Usage
- Open `index.html` in your browser, or use a local server (recommended for API requests).
- The app will display weather information for the default city. You can modify the city in `script.js`.

## Technologies Used
- HTML5
- CSS3 (with Flexbox for layout)
- JavaScript (ES6+)
- OpenWeatherMap API
- Dynamic background images

## API Configuration
The app uses the OpenWeatherMap API to fetch weather data. To use your own API key:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your API key from your account dashboard
3. Replace the API key in `script.js`:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

## Future Enhancements
- Search functionality for different cities
- Temperature unit conversion (Celsius/Fahrenheit)
- More detailed weather information
- Weather alerts and notifications

## License
This project is open-source and available for educational purposes.

