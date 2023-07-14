import { memo, useEffect, useRef, useState } from "react";
import DateAndTime from "../../Date/monthDate_timeFormat";

function Header({ currentWeather, location, handleSubmit }) {
  if (!currentWeather) return;
  const [isSearchBarVisable, setIsSearchBarVisable] = useState(false);
  const searchParams = useRef();

  const backgroundURL = {
    backgroundImage: `url('../assets/background/${chooseBackgoundImage(
      currentWeather.condition.text
    )}.jpg'), url('../assets/background/defaultBackground.jpg')`,
  };

  return (
    <div className="header" style={backgroundURL}>
      <form
        className="header--name--searchIcon"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(searchParams.current.value);
          setIsSearchBarVisable(false);
          searchParams.current.value = "";
        }}
      >
        <h2>{location}</h2>
        <input
          ref={searchParams}
          className={`header--search-bar ${
            isSearchBarVisable ? "header--search-bar--visable" : ""
          }`}
          type="search"
          id="search"
        />

        <button
          type={isSearchBarVisable ? "button" : "submit"}
          className="header--form-submit"
          onClick={() => setIsSearchBarVisable(!isSearchBarVisable)}
        >
          <img src="/assets/search-dark.svg" />
        </button>
      </form>

      <div className="header--weather">
        <div className="weather--celsius">
          <h1 className="celsius--degree">{currentWeather.temp_c}</h1>

          <h4 className="celsius--feelLike">
            <sup>°</sup>{" "}
            <span>
              Feels like {currentWeather.feelslike_c} <sup>°</sup>{" "}
            </span>
          </h4>
        </div>

        <div className="weather--icon">
          <img src={currentWeather.condition.icon} alt="sun" />
          <h2>{currentWeather.condition.text}</h2>
        </div>
      </div>

      <div className="header--data-and-time">
        <div>{DateAndTime}</div>
      </div>
    </div>
  );
}

export default memo(Header);

function chooseBackgoundImage(condition) {
  const images = ["rain", "cloud", "thunder", "fog", "mist", "overcast", "sun"];

  let backgound = null;

  images.forEach((image) => {
    if (condition.toLowerCase().includes(image)) backgound = image;
  });

  return backgound;
}
