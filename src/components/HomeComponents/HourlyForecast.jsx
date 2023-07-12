export default function HourlyForecast() {
  console.log("re-render");
  return (
    <div className="hourlyForcast">
      <div className="hourlyForcast--title">
        <div className="circle-with-icon">
          <img src="assets/icons/clock-icon.svg" alt="" />
        </div>
        <p className="title--text">Hourly forcast</p>
      </div>
      <div className="hourlyForcast--forcast-wrapper">
        <Forcast />
        <Forcast />
      </div>
    </div>
  );
}

function Forcast() {
  return (
    <div className="forcast-wrapper--forcast">
      <p className="forcast--text">Now</p>
      <img src="/assets/Sun.png" className="forcast--icon" />
      <p className="forcast--temperature">
        10 <sup>°</sup>
      </p>
    </div>
  );
}
