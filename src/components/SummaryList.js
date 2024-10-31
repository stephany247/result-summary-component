import data from "../data.js";

function SummaryList() {
    const summaryItems = data.map(data =>
        <li key={data.id} style={{ color: data.color, background: data.background }}>
        <div className="items">
          <img src={data.icon} alt={`${data.category} icon`} style={{ marginRight: "8px" }} />
          <b>{data.category}</b>
        </div>
        <p>
      <span className="points">{data.score}</span>
      <span className="score">&nbsp; / 100</span>
    </p>
      </li>
      
    )
    return (
      <div className="summary inner-container">
        <h1>Summary</h1>
        <ul>{summaryItems}</ul>
        <button>Continue</button>
      </div>
    );
  }
export default SummaryList;