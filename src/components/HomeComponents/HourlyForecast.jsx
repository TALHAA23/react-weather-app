export default function HourlyForecast({ hourlyForecast }) {
  return (
    <div className="hourlyForcast">
      <div className="hourlyForcast--title">
        <div className="circle-with-icon">
          <img src="assets/icons/clock-icon.svg" alt="" />
        </div>
        <p className="title--text">Hourly forcast</p>
      </div>
      <div className="hourlyForcast--forcast-wrapper">
        {hourlyForecast?.map((item) => (
          <Forcast
            key={item.time}
            hour={item.time}
            celsius={item.temp_c}
            icon={item.condition.icon}
          />
        ))}
      </div>
    </div>
  );
}

export function Forcast({ hour, celsius, icon }) {
  return (
    <div className="forcast-wrapper--forcast">
      <p className="forcast--text">{`${new Date(hour).getHours()}:00`}</p>
      <img src={icon} className="forcast--icon" />
      <p className="forcast--temperature">
        {celsius} <sup>°</sup>
      </p>
    </div>
  );
}
