export default function FiveDaysForcast({ forecast }) {
  return (
    <>
      <div className="ten-days-forcast">
        {forecast.map((item) => (
          <Forcast key={item.day} {...item} />
        ))}
      </div>
    </>
  );
}

function Forcast({ day, weatherText, maxDegree, minDegree, icon }) {
  return (
    <div className="forcast">
      <div className="forcast--details">
        <div>
          <h4 className="details--dayTitle">{day}</h4>
          <p className="details--weatherText">{weatherText}</p>
        </div>
        <div>
          <p className="details--degree">
            {maxDegree} <sup>°</sup>
          </p>
          <p className="details--degree">
            {minDegree} <sup>°</sup>
          </p>
        </div>
      </div>

      <div className="forcast--image">
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      </div>
    </div>
  );
}

function distinct(value, index, array) {
  console.log(value);
  return array.indexOf(value.day) === index;
}
