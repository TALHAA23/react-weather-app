export default function Perception({ hourlyForecast }) {
  let renderCount = 0;

  return (
    <div className="rain-perception">
      <div className="rain-perception--title-and-icon">
        <div className="circle-with-icon">
          <img src="assets/icons/rainy-icon.svg" />
        </div>
        <p className="rain-perception--title-and-icon--title">Chance of rain</p>
      </div>
      <div className="rain-perception--graph">
        {hourlyForecast?.map((item) => {
          const forcastTime = new Date(item.time).getHours();
          if (forcastTime >= new Date().getHours() && renderCount <= 3) {
            renderCount++;
            return (
              <RainPerception
                key={item.time}
                time={forcastTime}
                chanceOfRain={item.chance_of_rain}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

function RainPerception({ time, chanceOfRain }) {
  const styles = { width: `${chanceOfRain}%` };

  return (
    <div className="graph--container">
      <div className="graph--container--time">{time}:00</div>
      <div className="graph--container--scale">
        <div
          className="graph--container--scale--color-scale"
          style={styles}
        ></div>
      </div>

      <div className="graph--container--percentage">{chanceOfRain}%</div>
    </div>
  );
}
