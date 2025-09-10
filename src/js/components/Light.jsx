import React from "react";

function Light({ color, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`light ${color} ${active ? "on" : ""}`}
    />
  );
}

export default Light;