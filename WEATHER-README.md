# Weather Dashboard

A modern, fully-featured weather dashboard application that provides real-time weather information for any location worldwide. Built with vanilla HTML, CSS, and JavaScript using the OpenWeatherMap API.

## 🌟 Features

### Current Weather Display
- 🌡️ **Real-time Temperature** - Current temperature with "feels like" value
- 🎨 **Weather Icons** - Visual weather condition indicators using emojis
- 💧 **Detailed Metrics**:
  - Humidity percentage
  - Wind speed
  - Atmospheric pressure
  - UV Index
  - Visibility distance
  - Dew point

### Forecasts
- ⏰ **24-Hour Hourly Forecast** - Temperature and conditions for the next 24 hours
- 📅 **7-Day Weather Forecast** - Daily high/low temperatures and conditions

### Additional Information
- 🌅 **Sunrise & Sunset Times** - Exact times for solar events
- 💨 **Air Quality Index (AQI)** - Air pollution levels and status
- ☁️ **Cloud Coverage** - Percentage of cloud cover
- 🌧️ **Rain Probability** - Chance of precipitation

### User Experience
- 🔍 **Smart Search** - Search for any city worldwide
- 📍 **Geolocation** - Get weather for your current location
- 💡 **Autocomplete** - City suggestions as you type
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- ⚡ **Real-time Updates** - Last updated timestamp
- 🎯 **Smooth Animations** - Modern transition effects

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with gradients and animations
- **JavaScript (ES6+)** - Async/await, Fetch API
- **OpenWeatherMap API** - Real-time weather data
- **Geolocation API** - User location access

## 📦 Installation

### Method 1: Direct File Usage
1. Download `weather-dashboard.html`, `weather-styles.css`, and `weather-script.js`
2. Place all files in the same directory
3. Open `weather-dashboard.html` in your browser

### Method 2: GitHub Pages
```bash
git clone https://github.com/mohitchauhan44475-hash/Mohit-Chauhan-.git
cd Mohit-Chauhan-
# Open weather-dashboard.html in browser
```

## 🚀 Quick Start

1. **Search for a City**: Type any city name in the search box and click "Search"
2. **Use Your Location**: Click the 📍 button to get weather for your current location
3. **View Forecasts**: Scroll down to see hourly and 7-day forecasts
4. **Check Details**: View comprehensive weather information including air quality

## 🔑 API Key

The dashboard uses a free OpenWeatherMap API key. For production use, get your own API key:

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Replace the API key in `weather-script.js`:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

## 📊 API Endpoints Used

1. **Geocoding API** - Convert city names to coordinates
2. **Weather API** - Current weather data
3. **Forecast API** - 5-day weather forecast
4. **Air Pollution API** - Air quality index data

## 🎨 Color Scheme

- **Primary Gradient**: Purple to Blue (`#667eea` to `#764ba2`)
- **Accent Color**: Purple Blue (`#667eea`)
- **Background**: White cards on gradient background
- **Text**: Dark gray and white for contrast

## 📱 Responsive Design

- **Desktop**: Full grid layouts with multiple columns
- **Tablet**: Optimized grid for medium screens
- **Mobile**: Single column layouts, touch-friendly buttons

## 🔄 Auto-Refresh

The app loads with the default location (London) on page load. You can:
- Search for a new city
- Use your geolocation
- See real-time updates

## 📋 Data Displayed

### Current Weather Section
- Location (City, Country)
- Current temperature (°C)
- Weather condition with emoji
- Feels like temperature
- Humidity, wind speed, pressure
- Visibility, UV index, dew point

### Forecasts
- Hourly forecast for next 24 hours
- 7-day daily forecast with high/low temps

### Additional Info
- Sunrise & sunset times
- Air quality index (AQI) with status
- Cloud cover percentage
- Rain probability

## 🌍 Supported Locations

The dashboard supports any city worldwide:
- Major cities (London, New York, Tokyo)
- Small towns and villages
- Multiple cities with same name (uses country code)

## 🎯 Future Enhancements

- 📲 Weather alerts and notifications
- 🗺️ Interactive weather map
- 📈 Historical weather data
- 🌙 Dark mode toggle
- 🎤 Voice search
- 💾 Favorites/bookmarks
- 📊 Weather trends
- 🔔 Severe weather warnings

## 🐛 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Developer

**Mohit Chauhan**
- Phone: [9817920533](tel:+919817920533)
- Email: [mohitchauhan44475@gmail.com](mailto:mohitchauhan44475@gmail.com)

## 🙏 Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Built with vanilla JavaScript (no frameworks)
- Responsive design principles

---

**Built with ❤️ for weather enthusiasts** - *Always know what to expect*
