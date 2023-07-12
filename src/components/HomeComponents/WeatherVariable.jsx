export default function WeatherVariable(props) {
  return (
    <div className="weather-variable">
      <div className="circle-with-icon">
        <img src={`assets/icons/${props.icon}-icon.svg`} />
      </div>

      <div className="weather-variable--value-and-title">
        <p className="weather-variable--value-and-title--title">
          {props.title}
        </p>
        <p className="weather-variable--value-and-title--value">
          <b>{props.value}</b>
        </p>
      </div>
    </div>
  );
}
