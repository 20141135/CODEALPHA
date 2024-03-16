import React from 'react';
import "./weather.css";
const WeatherDisplay = ({ weather }) => {
  return (
    <div>
      <div className='display'>
      <h2>{weather.name}</h2>
      <h4>{weather.weather[0].description}</h4>
      <h4>Temperature: {weather.main.temp}°C</h4>
      <h4>Humidity: {weather.main.humidity}%</h4>
      </div>
    </div>
  );
};

export default WeatherDisplay;
