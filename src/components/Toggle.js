import React from "react";
import React, { useState } from "react";

function Toggle() {
  return <button>OFF</button>;
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";
  return <button onClick={handleClick} style={{ backgroundColor: color }}>
    {isOn ? "ON" : "OFF"}

  </button>;
}

export default Toggle;

