import Header from "./HomeComponents/Header";
import HourlyForecast from "./HomeComponents/HourlyForecast";
import WeatherVariable from "./HomeComponents/WeatherVariable";
import Perception from "./HomeComponents/Perception";
import Navigation from "./HomeComponents/Navigator";
import TenDaysForcast from "./HomeComponents/10DaysForcast";
import { useEffect, useState } from "react";
import getForcast from "../api/current-and-hourly";

export default function Home() {
  const [isTodayForcast, setIsTodayForcast] = useState(true);
  const [todayForecast, setTodayForecast] = useState({});
  const [weatherVariables, setWeatherVaribales] = useState({});

  useEffect(() => {
    (async () => {
      setTodayForecast(await getForcast());
    })();
  }, []);

  useEffect(
    () => todayForecast && setWeatherVaribales(todayForecast.weatherVariables),
    [todayForecast]
  );

  function changePage(isPageChange) {
    setIsTodayForcast(isPageChange);
  }

  return (
    <>
      <Header
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
            <WeatherVariable title="Rain chance" icon="rainy" value="TBD" />
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
        <TenDaysForcast />
      )}
    </>
  );
}
