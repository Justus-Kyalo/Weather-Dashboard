import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import axios from "axios";

const forecastWeatherAdapter = createEntityAdapter();

const initialState = forecastWeatherAdapter.getInitialState({
  status: "idle",
});

export const fetchForecastWeather = createAsyncThunk(
  "forecastWeather/fetchForecastWeather",
  async (coordinates = { lat: 51.5073219, lon: -0.1276474 }) => {
    try {
      const apiKey = "aa57f8effc10b239859b1dfb9425a9be";
      const forecastApiUrl =
        "https://api.openweathermap.org/data/2.5/forecast?";
      const forecastRes = await axios.get(
        forecastApiUrl +
          `lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`
      );
      //console.log(forecastRes.data);
      return forecastRes.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const forecastWeatherSlice = createSlice({
  name: "forecastWeather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchForecastWeather.fulfilled, (state, action) => {
      state.status = "success";

      const loadedData = [{ id: nanoid(), ...action.payload }];

      forecastWeatherAdapter.upsertMany(state, loadedData);
    });
  },
});

export const { selectAll: selectForecastWeather } =
  forecastWeatherAdapter.getSelectors((state) => state.forecastWeather);

export const getForecastStatus = (state) => state.forecastWeather.status;
export default forecastWeatherSlice.reducer;
