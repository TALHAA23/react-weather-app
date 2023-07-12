export default function Perception() {
  return (
    <div className="rain-perception">
      <div className="rain-perception--title-and-icon">
        <div className="circle-with-icon">
          <img src="assets/icons/rainy-icon.svg" />
        </div>
        <p className="rain-perception--title-and-icon--title">Chance of rain</p>
      </div>
      <div className="rain-perception--graph">
        <RainPerception />
        <RainPerception />
        <RainPerception />
      </div>
    </div>
  );
}

function RainPerception() {
  return (
    <div className="graph--container">
      <div className="graph--container--time">4 PM</div>
      <div className="graph--container--scale">
        <div className="graph--container--scale--color-scale"></div>
      </div>

      <div className="graph--container--percentage">48%</div>
    </div>
  );
}
