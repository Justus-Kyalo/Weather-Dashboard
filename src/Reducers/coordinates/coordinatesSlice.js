import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import axios from "axios";

const coordinatesAdapter = createEntityAdapter();

const initialState = coordinatesAdapter.getInitialState({ status: "idle" });

export const fetchCoordinates = createAsyncThunk(
  "coordinates/fetchCoordinates",
  async (city = "Nairobi") => {
    const apiKey = "aa57f8effc10b239859b1dfb9425a9be";

    const geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=`;
    const limit = 1;
    try {
      const geoApiResponse = await axios.get(
        geoApiUrl + city + `&limit=${limit}` + `&appid=${apiKey}`
      );
      console.log(geoApiResponse.data[0]);
      return {
        lat: geoApiResponse.data[0].lat,
        lon: geoApiResponse.data[0].lon,
      };
    } catch (err) {
      return err.message;
    }
  }
);
export const coordinatesSlice = createSlice({
  name: "coordinates",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCoordinates.fulfilled, (state, action) => {
      state.status = "success";
      const loadedData = [{ id: nanoid(), ...action.payload }];
      console.log(loadedData);
      coordinatesAdapter.upsertMany(state, loadedData);
    });
  },
});

export const { selectAll: selectAllCoordinates } =
  coordinatesAdapter.getSelectors((state) => state.coordinates);

export const getCoordinatesStatus = (state) => state.coordinates.status;

export default coordinatesSlice.reducer;
