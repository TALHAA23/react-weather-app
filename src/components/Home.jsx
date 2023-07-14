import Header from "./HomeComponents/Header";
import HourlyForecast from "./HomeComponents/HourlyForecast";
import WeatherVariable from "./HomeComponents/WeatherVariable";
import Perception from "./HomeComponents/Perception";
import Navigation from "./HomeComponents/Navigator";
import FiveDaysForcast from "./HomeComponents/5DaysForcast";
import { useEffect, useState } from "react";
import getCurrentWeather from "../api/current-and-hourly";
import fiveDaysforecast from "../api/5-days-forecast";

export default function Home() {
  const [isBadRequest, setIsBadRequest] = useState(false);
  const [isTodayForcast, setIsTodayForcast] = useState(true);
  const [todayForecast, setTodayForecast] = useState({});
  const [forecast, setForcast] = useState([]);
  const [weatherVariables, setWeatherVaribales] = useState({});
  const [searchParams, setSearchParams] = useState("peshawar");

  useEffect(() => {
    (async () => {
      try {
        setTodayForecast(await getCurrentWeather(searchParams));
        isBadRequest && setIsBadRequest(false);
      } catch (e) {
        setIsBadRequest(true);
      }
    })();
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      try {
        setForcast(await fiveDaysforecast(searchParams));
        isBadRequest && setIsBadRequest(false);
      } catch (e) {
        setIsBadRequest(true);
      }
    })();
  }, [searchParams]);

  useEffect(
    () => todayForecast && setWeatherVaribales(todayForecast.weatherVariables),
    [todayForecast]
  );

  function changePage(isPageChange) {
    setIsTodayForcast(isPageChange);
  }

  function handleSubmit(searchParams) {
    searchParams && setSearchParams(searchParams);
  }

  return (
    <>
      {isBadRequest && (
        <h2>
          Bad Request try checking network connection or search with other
          keywords
        </h2>
      )}
      <Header
        handleSubmit={handleSubmit}
        currentWeather={todayForecast.currentWeather}
        location={todayForecast.location}
      />
      <Navigation changePage={changePage} />
      {isTodayForcast ? (
        <main>
          <div className="weather-varibales-container">
            <WeatherVariable
              title="Wind speed"
              icon="air"
              value={weatherVariables?.wind}
            />
            <WeatherVariable
              title="Rain Perceiption"
              icon="rainy"
              value={weatherVariables?.perceiption_in_mm}
            />
            <WeatherVariable
              title="Pressue"
              icon="waves"
              value={weatherVariables?.pressue}
            />
            <WeatherVariable
              title="UV index"
              icon="uv"
              value={weatherVariables?.uv}
            />
          </div>

          <HourlyForecast hourlyForecast={todayForecast?.hourlyForcast} />

          <div className="weather-varibales-container">
            <WeatherVariable
              title="Sunrise"
              icon="sun"
              value={weatherVariables?.sunrise}
            />
            <WeatherVariable
              title="Sunset"
              icon="moon"
              value={weatherVariables?.sunset}
            />
          </div>

          <Perception hourlyForecast={todayForecast?.hourlyForcast} />
        </main>
      ) : (
        <FiveDaysForcast forecast={forecast} />
      )}
    </>
  );
}
