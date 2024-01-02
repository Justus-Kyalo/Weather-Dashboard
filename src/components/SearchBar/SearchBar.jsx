import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <form action="">
        <input type="text" placeholder="Search City" className="search-input" />
        <button className="icon-btn">
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
