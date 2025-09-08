import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "/workspaces/React-Semaforo-Danonino/src/styles/index.css"

function TrafficLight() {
  const [color, setColor] = useState("red");

  return (
    <div className="traffic-light">
      <div className="traffic-box">
        <div
          onClick={() => setColor("red")}
          className={`light red ${color === "red" ? "on" : "none"}`}
        />
        <div
          onClick={() => setColor("yellow")}
          className={`light yellow ${color === "yellow" ? "on" : "none"}`}
        />
        <div
          onClick={() => setColor("green")}
          className={`light green ${color === "green" ? "on" : "none"}`}
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);

export default TrafficLight;