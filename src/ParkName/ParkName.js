import React from "react";
import "./ParkName.css";

export default function ParkName({ getName, parkName }) {
  return (
    <div className="park-name">
      <input
        onChange={getName}
        id="park-name-input"
        type="text"
        placeholder="Park name..."
        value={parkName}
      />
    </div>
  );
}
