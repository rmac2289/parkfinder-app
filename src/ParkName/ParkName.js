import React from "react";
import "./ParkName.css";

export default function ParkName(props) {
  return (
    <div className="park-name">
      <input
        onChange={props.getName}
        id="park-name-input"
        type="text"
        placeholder="Park name..."
        value={props.parkName}
      />
    </div>
  );
}
