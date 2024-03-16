import React, { useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line
import moment from 'moment';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getWeather = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=20a3e7892f9e3e9fb7e36c2b79f44c79&units=metric`
      );

      // Check if the response contains data
      if (response.data) {
        setWeather(response.data);

        setErrorMessage(''); // Clear any previous error messages
      } else {
        setErrorMessage('City not found. Please enter a valid city.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
      setErrorMessage('City not found. Please enter a valid city.');
    }
  };

  return (
    <div className="App">
      <div className='container'>
        <h1>Weather Dashboard</h1>
        <WeatherForm getWeather={getWeather} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {weather && <WeatherDisplay weather={weather} />}
      </div>
    </div>
  );
}

export default App;
