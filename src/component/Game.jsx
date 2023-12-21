export default function Game() {
  return (
    <div className="card">
      <div className="qst-sign">
        <div className="outer-bar">
          <div className="inner-bar"></div>
        </div>
        <span>6/20</span>
      </div>
      <p className="qst">What is beggest continent ?</p>
      <div className="option-container">
        <div className="option">
          <div className="outer-circle"></div>
          <p>Asia</p>
        </div>
        <div className="option">
          <div className="outer-circle">
            <div className="inner-circle"></div>
          </div>
          Asia
        </div>
        <div className="option">
          <div className="outer-circle">
            <div className="inner-circle"></div>
          </div>
          Asia
        </div>
        <div className="option">
          <div className="outer-circle">
            <div className="inner-circle"></div>
          </div>
          Asia
        </div>
        <div className="next-box">
          <button className="btn">Next</button>
        </div>
      </div>
    </div>
  );
}
