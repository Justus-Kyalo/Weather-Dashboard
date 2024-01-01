import { configureStore } from "@reduxjs/toolkit";
import coordinatesReducer from "../Reducers/coordinates/coordinatesSlice";
import currentWeatherReducer from "../Reducers/currentWeather/currentWeatherSlice";
import forecastWeatherReducer from "../Reducers/forecastWeather/forecastWeatherSlice";

export const store = configureStore({
  reducer: {
    coordinates: coordinatesReducer,
    currentWeather: currentWeatherReducer,
    forecastWeather: forecastWeatherReducer,
  },
});
