import React, { useState } from 'react';
import "./weather.css";
import searchIcon from '../search-icon.jpg';

const WeatherForm = ({ getWeather }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(location);
  };

  return (
    <div className="background-image">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <input
            type="search"
            placeholder="Enter city name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
      </form>
    </div>
  );
};

export default WeatherForm;
