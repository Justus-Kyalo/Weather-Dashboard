import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { fetchCoordinates } from "../../Reducers/coordinates/coordinatesSlice";
import { useState } from "react";
import { fetchCurrentWeather } from "../../Reducers/currentWeather/currentWeatherSlice";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const onSearch = (e) => {
    e.preventDefault();
    dispatch(fetchCoordinates(city));
    dispatch(fetchCurrentWeather(city));
  };

  return (
    <div className="SearchBar">
      <form
        onSubmit={(e) => {
          onSearch(e);
        }}
      >
        <input
          type="text"
          placeholder="Search City"
          className="search-input"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button type="submit" className="icon-btn">
          <i className="ri-search-line"></i>
        </button>
      </form>
      <select name="language" id="language">
        <option value="">ENG</option>
      </select>

      <div>
        <input type="checkbox" id="check" className="check" />
        <label htmlFor="check" className="toggle-temp">
          <i className="ri-celsius-line"></i>{" "}
          <i className="ri-fahrenheit-line"></i>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
