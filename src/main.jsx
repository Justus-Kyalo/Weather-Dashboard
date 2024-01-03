import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { fetchCoordinates } from "./Reducers/coordinates/coordinatesSlice.js";
import { fetchCurrentWeather } from "./Reducers/currentWeather/currentWeatherSlice.js";

store.dispatch(fetchCoordinates("nairobi"));
store.dispatch(fetchCurrentWeather("nairobi"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
