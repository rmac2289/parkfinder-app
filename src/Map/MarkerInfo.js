import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import { Link } from "react-router-dom";
import "./Map.css";

export default function MarkerWithInfoWindow({
  url,
  icon,
  position,
  nameContent,
  hours,
  image,
  alt,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // toggle info window open/closed
  const onToggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Marker
      optimized={true}
      icon={icon}
      position={position}
      onClick={onToggleOpen}
    >
      {isOpen && (
        <InfoWindow onCloseClick={onToggleOpen}>
          <>
            <h3>
              <Link className="park-link" to={url}>
                {nameContent}
              </Link>
            </h3>
            <p>
              <strong>Hours:</strong> {hours}
            </p>
            <img src={image} alt={alt} width="100" />
          </>
        </InfoWindow>
      )}
    </Marker>
  );
}
