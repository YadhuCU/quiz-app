import { useState } from "react";

import "./App.css";
import Game from "./component/Game";
import Result from "./component/Result";

function App() {
  return (
    <>
      <div className="container">
        <Game />
      </div>
      <svg className="svg">
        <clipPath id="bg-md" clipPathUnits="objectBoundingBox">
          <path d="M0,0.517 L0.056,0.474 C0.111,0.432,0.222,0.344,0.333,0.237 C0.444,0.129,0.556,0,0.667,0.043 C0.778,0.085,0.889,0.303,0.944,0.409 L1,0.517 L1,1 L0.944,1 C0.889,1,0.778,1,0.667,1 C0.556,1,0.444,1,0.333,1 C0.222,1,0.111,1,0.056,1 L0,1"></path>
        </clipPath>
        <clipPath id="bg-sm" clipPathUnits="objectBoundingBox">
          <path d="M0,0.25 L0.083,0.271 C0.167,0.293,0.333,0.332,0.5,0.458 C0.667,0.582,0.833,0.793,0.917,0.896 L1,1 L1,1 L0.917,1 C0.833,1,0.667,1,0.5,1 C0.333,1,0.167,1,0.083,1 L0,1"></path>
        </clipPath>
      </svg>
    </>
  );
}

export default App;
