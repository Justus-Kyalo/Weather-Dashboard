import "./Home.css";
import SideNav from "../SideNav/SideNav";
import Profile from "../Profile/Profile";
import DailyWeather from "../DailyWeather/DailyWeather";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrentWeather,
  selectCurrentWeather,
} from "../../Reducers/currentWeather/currentWeatherSlice";
import {
  fetchForecastWeather,
  selectForecastWeather,
} from "../../Reducers/forecastWeather/forecastWeatherSlice";
import { getForecastStatus } from "../../Reducers/forecastWeather/forecastWeatherSlice";
import { getCurrentStatus } from "../../Reducers/currentWeather/currentWeatherSlice";
import { useEffect, useState } from "react";
import {
  getCoordinatesStatus,
  selectAllCoordinates,
} from "../../Reducers/coordinates/coordinatesSlice";

const Home = () => {
  const data = useSelector(selectCurrentWeather);
  const forecast = useSelector(selectForecastWeather);
  const forecastStatus = useSelector(getForecastStatus);
  const currentStatus = useSelector(getCurrentStatus);
  const coordStatus = useSelector(getCoordinatesStatus);

  const dispatch = useDispatch();

  const coordinates = useSelector(selectAllCoordinates);
  useEffect(() => {
    if (coordStatus === "success") {
      dispatch(
        fetchForecastWeather({
          lat: coordinates[0].lat,
          lon: coordinates[0].lon,
        })
      );
    }
  }, [coordinates]);
  return (
    <main>
      <section>
        <SideNav />
      </section>
      <section className="main-section">
        <section className="left-section">
          <div>
            <Profile />
          </div>
          <div>
            {currentStatus === "success" && forecastStatus === "success" ? (
              <DailyWeather data={data[1]} forecast={forecast} />
            ) : (
              <p>...</p>
            )}
          </div>
        </section>
        <section className="right-section"></section>
      </section>
    </main>
  );
};

export default Home;
