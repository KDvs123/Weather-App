# Weather App

Welcome to the Weather App, a dynamic and user-friendly web application designed to provide real-time weather information, including temperature, humidity, wind speed, and more. Utilizing the OpenWeatherMap API, this app allows users to search for weather details by city. It supports both metric (Celsius) and imperial (Fahrenheit) units to cater to a global audience.

## Getting Started

This section will guide you on how to set up the Weather App on your local machine for development and personal use.

### Prerequisites

- A modern web browser capable of running HTML5, CSS3, and JavaScript.
- An API key from [OpenWeatherMap](https://openweathermap.org/api).

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourgithubusername/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Open `app.js` and replace `"your_api_key"` with your actual OpenWeatherMap API key:
   ```javascript
   const API_KEY = "your_api_key";
   ```

4. Open `index.html` in your web browser to run the app.

### Features

- **City Search**: Easily search for any city to get current weather information.
- **Temperature Units**: Switch between Celsius (°C) and Fahrenheit (°F) units.
- **Weather Details**: View detailed weather information, including real feel, humidity, wind speed, and atmospheric pressure.
- **Responsive Design**: Crafted to provide an optimal viewing experience across a wide range of devices.

## Built With

- HTML5 - For structuring the web content.
- CSS3 - For styling and responsive design.
- JavaScript - For dynamic content and API requests.
- [Font Awesome](https://fontawesome.com/) - For icons.
- [OpenWeatherMap API](https://openweathermap.org/api) - For fetching weather data.

## Usage

1. Enter a city name in the search box and press enter or click the magnifying glass icon.
2. The app will display current weather information for the specified city.
3. Click on the °C or °F buttons to toggle between temperature units.
