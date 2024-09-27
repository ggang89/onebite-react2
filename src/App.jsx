import { useState } from "react";

const Bulb = ({ light }) => {
  return (
    <div>
      {light === "on" ? (
      <h1 style={{color:'orange'}}>ON</h1>
      ):(<h1 style={{color:"gray"}}>OFF</h1>)}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("off");

  return (
    <>
      <div>
        <h1><Bulb light={light } /></h1>
        <button
          onClick={() => {
            setLight(light === "on" ? "off" : "on");
          }}
        >
          {light === "off" ? "켜기" : "끄기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
