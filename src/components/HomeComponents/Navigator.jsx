export default function Navigation({ changePage }) {
  return (
    <div className="navigation">
      <input
        type="radio"
        id="today"
        name="forcast"
        onClick={() => changePage(true)}
      />
      <label htmlFor="today">Today</label>

      <input
        type="radio"
        id="10days"
        name="forcast"
        onClick={() => changePage(false)}
      />
      <label htmlFor="10days">10 Days</label>
    </div>
  );
}
