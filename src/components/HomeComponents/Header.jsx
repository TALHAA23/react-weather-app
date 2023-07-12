import { memo } from "react";
import DateAndTime from "../../Date/monthDate_timeFormat";

function Header() {
  return (
    <div className="header">
      <div className="header--name--searchIcon">
        <h2>Islamabad, Pakistan</h2>
        {/* <input type="search" id="search" /> */}
        <label htmlFor="search">
          <img src="/assets/search-dark.svg" />
        </label>
      </div>

      <div className="header--weather">
        <div className="weather--celsius">
          <h1 className="celsius--degree">3</h1>

          <h4 className="celsius--feelLike">
            <sup>°</sup>{" "}
            <span>
              Feels like 4 <sup>°</sup>{" "}
            </span>
          </h4>
        </div>

        <div className="weather--icon">
          <img src="assets/Sun.png" alt="sun" />
          <h2>Cloudy</h2>
        </div>
      </div>

      <div className="header--data-and-time">
        <div>{DateAndTime}</div>
      </div>
    </div>
  );
}

export default memo(Header);
