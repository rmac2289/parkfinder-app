import React, { useState, useEffect, useRef } from 'react';
import './Location.css';
import apiKey from '../config.js'


let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const location = addressObject.formatted_address;
  updateQuery(location);
  console.log(addressObject);
}

function Location() {
  const [location, setLocation] = useState("");
  const autoCompleteRef = useRef(null);

  const getLocation = (e) => {
    setLocation(e.target.value)
}
  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`,
      () => handleScriptLoad(setLocation, autoCompleteRef)
    );
  }, []);

  return (
    <div className="location">
    <input ref={autoCompleteRef} onChange={getLocation} id="location-input" type="text" placeholder="Location..." value={location}/>
</div>
  );
}

export default Location;


/* export default function Location(){
    const [location, setLocation] = useState('')
    const getLocation = (e) => {
        setLocation(e.target.value)
    }
    return (
        <div className="location">
             <input onChange={getLocation} id="location-input" type="text" placeholder="Location..." value={location}/>
        </div>
    )
} */