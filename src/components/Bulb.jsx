import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("off");
  return (
    <>
      <div>
        {light === "on" ? (
          <h1 style={{ color: "orange" }}>ON</h1>
        ) : (
          <h1 style={{ color: "gray" }}>OFF</h1>
        )}
      </div>
      <button
        onClick={() => {
          setLight(light === "on" ? "off" : "on");
        }}
      >
        {light === "off" ? "켜기" : "끄기"}
      </button>
    </>
  );
};
export default Bulb;