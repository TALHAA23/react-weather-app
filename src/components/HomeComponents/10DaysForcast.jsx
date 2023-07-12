export default function TenDaysForcast() {
  return (
    <>
      <div className="ten-days-forcast">
        <Forcast />
        <Forcast />
        <Forcast />
        <Forcast />
      </div>
    </>
  );
}

function Forcast() {
  return (
    <div className="forcast">
      <div className="forcast--details">
        <div>
          <h4 className="details--dayTitle">Today</h4>
          <p className="details--weatherText">Cloud and Sunny</p>
        </div>
        <p className="details--degree">
          3 <sup>°</sup>
        </p>
      </div>

      <div className="forcast--image">
        <img src="assets/Sun.png" />
      </div>
    </div>
  );
}
