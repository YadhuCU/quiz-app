export default function Result() {
  return (
    <div className="card text-center">
      <div className="circle">
        <h1>
          20/
          <span
            style={{
              fontSize: "1.8rem",
            }}
          >
            50
          </span>
        </h1>
      </div>
      <ul role="list">
        <li>
          Total questions: <span className="ml-auto">10</span>
        </li>
        <li>
          Correct answers: <span className="ml-auto">10</span>
        </li>
      </ul>
      <div>
        <button className="btn">Play again</button>
      </div>
    </div>
  );
}
