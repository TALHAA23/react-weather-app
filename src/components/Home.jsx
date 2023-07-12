import Header from "./HomeComponents/Header";
import HourlyForecast from "./HomeComponents/HourlyForecast";
import WeatherVariable from "./HomeComponents/WeatherVariable";
import Perception from "./HomeComponents/Perception";
import Navigation from "./HomeComponents/Navigator";
import TenDaysForcast from "./HomeComponents/10DaysForcast";
import { useState } from "react";

export default function Home() {
  const [isTodayForcast, setIsTodayForcast] = useState(true);

  function changePage(isPageChange) {
    setIsTodayForcast(isPageChange);
  }

  return (
    <>
      <Header />
      <Navigation changePage={changePage} />
      {isTodayForcast ? (
        <main>
          <div className="weather-varibales-container">
            <WeatherVariable title="Wind speed" icon="air" value="TBD" />
            <WeatherVariable title="Rain chance" icon="rainy" value="TBD" />
            <WeatherVariable title="Pressue" icon="waves" value="TBD" />
            <WeatherVariable title="UV index" icon="uv" value="TBD" />
          </div>
          <HourlyForecast />
          <div className="weather-varibales-container">
            <WeatherVariable title="Sunrise" icon="sun" value="TBD" />
            <WeatherVariable title="Sunset" icon="moon" value="TBD" />
          </div>

          <Perception />
        </main>
      ) : (
        <TenDaysForcast />
      )}
    </>
  );
}
