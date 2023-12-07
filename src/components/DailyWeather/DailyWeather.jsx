import React from "react";
import "./DailyWeather.css";
import { IoIosPartlySunny } from "react-icons/io";
const DailyWeather = ({ data }) => {
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  return (
    <div className="DailyWeather">
      <div className="current-weather">
        <div className="weather-image">
          <img src={`${data.weather[0].main.toLowerCase()}.png`} alt="" />
        </div>
        <div>
          <h3>{data.name}</h3>
          <p>{regionNames.of(data.sys.country)}</p>
        </div>
        <div>
          <h3>{data.main.temp}&deg;</h3>
          <p>Temperature</p>
        </div>
        <div>
          <h3>
            {data.main.humidity}
            <span className="units">%</span>{" "}
          </h3>
          <p>Humididty</p>
        </div>
        <div>
          <h3>
            {data.wind.speed}
            <span className="units">km/h</span>
          </h3>
          <p>Wind Speed</p>
        </div>
      </div>
      <div className="daily-forecast">
        <div>
          <p>09 am</p>
          <div className="icons">
            <IoIosPartlySunny />
          </div>
          <p>17</p>
        </div>
      </div>
    </div>
  );
};

export default DailyWeather;
