import "./Home.css";
import SideNav from "../SideNav/SideNav";
import Profile from "../Profile/Profile";
import DailyWeather from "../DailyWeather/DailyWeather";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentWeather,
  getCurrentStatus,
} from "../../Reducers/currentWeather/currentWeatherSlice";
import {
  fetchForecastWeather,
  selectForecastWeather,
} from "../../Reducers/forecastWeather/forecastWeatherSlice";
import { getForecastStatus } from "../../Reducers/forecastWeather/forecastWeatherSlice";
import {} from "../../Reducers/currentWeather/currentWeatherSlice";
import { memo, useEffect } from "react";
import {
  getCoordinatesStatus,
  selectAllCoordinates,
} from "../../Reducers/coordinates/coordinatesSlice";
import SearchBar from "../SearchBar/SearchBar";
import LocationMap from "../LocationMap/LocationMap";
import HumidityGraph from "../Overview/HumidityGraph";

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
  }, [coordinates, dispatch]);
  return (
    <main>
      <section>
        <SideNav />
      </section>
      <section className="main-section">
        <section className="first-row">
          <div>
            <Profile />
          </div>
          <div>
            <SearchBar />
          </div>
        </section>

        <section className="second-row">
          <div>
            {currentStatus === "success" && forecastStatus === "success" ? (
              <DailyWeather data={data[1]} forecast={forecast} />
            ) : (
              <p>...</p>
            )}
          </div>
          <div>
            {coordStatus === "success" ? <LocationMap /> : <p>loading ...</p>}
          </div>
        </section>
        <section className="third-row">
          <div>
            {" "}
            {forecastStatus === "success" ? (
              <HumidityGraph forecast={forecast} />
            ) : (
              <p>...</p>
            )}
          </div>
        </section>
      </section>
    </main>
  );
};

export default memo(Home);
