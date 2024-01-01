import "./DailyWeather.css";
import { IoIosPartlySunny, IoIosSunny } from "react-icons/io";
import { FaCloudRain } from "react-icons/fa6";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";
import { IoThunderstorm } from "react-icons/io5";
import { TbMist } from "react-icons/tb";
import { getForecastStatus } from "../../Reducers/forecastWeather/forecastWeatherSlice";
import { getCurrentStatus } from "../../Reducers/currentWeather/currentWeatherSlice";

const DailyWeather = ({ data, forecast }) => {
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  const forecastArr = forecast[0].list;


  const fixFn = (obj) => {
    const weather = obj.weather[0].main;

    if (weather === "Rain") {
      return <FaCloudRain />;
    }
    if (weather === "Clear") {
      return <IoIosSunny />;
    }
    if (weather === "Drizzle") {
      return <IoIosPartlySunny />;
    }
    if (weather === "Clouds") {
      return <BsFillCloudSunFill />;
    }
    if (weather === "Snow") {
      return <FaRegSnowflake />;
    }
    if (weather === "Thunderstorm") {
      return <IoThunderstorm />;
    }
    if (weather === "Mist") {
      return <TbMist />;
    }

    return null;
  };

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

      <div className="forecast">
        <div className="daily-forecast">
          {forecastArr.map((obj, index) => {
            const time = new Date(obj.dt_txt).toLocaleTimeString([], {
              hour: "2-digit",
              hour12: true,
            });
            return (
              <div key={index}>
                <p>{time}</p>
                <div className="icons">{fixFn(obj)}</div>
                <p>{(obj.main.temp - 273.15).toFixed(2)}&deg;</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  
};

export default DailyWeather;
