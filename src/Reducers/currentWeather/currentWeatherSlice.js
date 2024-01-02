import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import axios from "axios";

const currentWeatherAdapter = createEntityAdapter();

const initialState = currentWeatherAdapter.getInitialState({ status: "idle" });

export const fetchCurrentWeather = createAsyncThunk(
  "currentWeather/fetchCurrentWeather",
  async (city ) => {
    try {
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
      const apiKey = "aa57f8effc10b239859b1dfb9425a9be";

      const response = await axios.get(apiUrl + city + `&appid=${apiKey}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
      state.status = "success";

      const loadedData = [{ id: action.payload }, { ...action.payload }];
      currentWeatherAdapter.upsertMany(state, loadedData);
    });
  },
});

export const { selectAll: selectCurrentWeather } =
  currentWeatherAdapter.getSelectors((state) => state.currentWeather);

export const getCurrentStatus = (state) => state.currentWeather.status;

export default currentWeatherSlice.reducer;
