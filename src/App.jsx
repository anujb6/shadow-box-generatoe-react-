import { useState } from "react";
import "./styles.css";

export default function App() {
  const [Horizontal, setHorizontal] = useState(10);
  const [Vertical, setVertical] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState("black")
  return (
    <>
    <h1>Box-shadow Generator</h1>
    <div className="App">
      <div className="controls">
        <label htmlFor="">Horizontal legth</label>
        <input
          type="range"
          value={Horizontal}
          min="-200"
          max="200"
          onChange={(e) => setHorizontal(e.target.value)}
        />

        <label htmlFor="">Vertical legth</label>
        <input
          type="range"
          value={Vertical}
          min="-200"
          max="200"
          onChange={(e) => setVertical(e.target.value)}
        />

        <label htmlFor="">Blur</label>
        <input
          type="range"
          value={Blur}
          min="0"
          max="200"
          onChange={(e) => setBlur(e.target.value)}
        />
        <label htmlFor="">Color</label>
        <input
          type="color"
          value={Color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="output">
        <div
          className="box"
          style={{ boxShadow: `${Horizontal}px ${Vertical}px ${Blur}px ${Color}` }}
        >
          <p>{Horizontal}px {Vertical}px {Blur}px {Color}</p>
        </div>
      </div>
    </div>
    </>
  );
}
