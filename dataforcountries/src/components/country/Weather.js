import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const Weather = ({ city }) => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    response.then(({ data }) =>
      setWeather({
        temp: data.main.temp,
        wind: data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      })
    );
  }, []);

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>temperature: {weather.temp}°C</p>
      <img src={weather.icon} alt="" />
      <p>wind: {weather.wind}m/s</p>
    </div>
  );
};

export default Weather;
