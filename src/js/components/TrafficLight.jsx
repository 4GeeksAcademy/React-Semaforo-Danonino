import React, { useState } from "react";
import Light from "./Light";
import "/workspaces/React-Semaforo-Danonino/src/styles/index.css";

function TrafficLight() {
  const [color, setColor] = useState("red");

  return (
    <div className="traffic-light">
      <div className="traffic-box">
        <Light color="red" active={color === "red"} onClick={() => setColor("red")} />
        <Light color="yellow" active={color === "yellow"} onClick={() => setColor("yellow")} />
        <Light color="green" active={color === "green"} onClick={() => setColor("green")} />
      </div>
    </div>
  );
}

export default TrafficLight;