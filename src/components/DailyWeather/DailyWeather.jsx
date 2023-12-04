import React from "react";
import "./DailyWeather.css";
const DailyWeather = ({ data }) => {
  return (
    <div className="Dailyweather">
      <div className="current-weather">
        <div>
          <h4>{data.location.name}</h4>
          <p>{data.location.country}</p>
        </div>
        <div>
          <h4>{data.current.temp_c}</h4>
          <p>Temperature</p>
        </div>
        <div>
          <h4>{data.current.humidity}%</h4>
          <p>Humididty</p>
        </div>
        <div>
          <h4>{data.current.wind_kph}</h4>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default DailyWeather;
