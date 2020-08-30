import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import Header from "../Header/Header";
import Search from "../Search/Search";
import MapComponent from "../Map/Map";
import apiKey from "../config";
import { LoginContext } from "../Contexts/LoginContext";
import TokenService from "../services/TokenService";
import { ParkContext } from "../Contexts/ParkContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
// import Demo from '../Demo/Demo';

export default function Main() {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [park] = useContext(ParkContext);
  const [loaded, setLoaded] = useState(null);
  // const [showDemo, setShowDemo] = useState(false);
  // set login state if user has token
  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      return setLoggedIn(true);
    }
  });
  useEffect(() => {
    setLoaded(true);
  }, []);
  /* toggle demo window
   const getDemo = () => {
    setShowDemo(!showDemo)
};*/
  return (
    <div className="main">
      {/*<button id="demo-button" onClick={getDemo}>demo</button>
        {showDemo &&
        <Demo/>}*/}
      <Header />
      <section className="main-section">
        <Search />
        {loaded && park ? (
          <MapComponent
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            mapElement={
              <div
                style={{
                  height: `100%`,
                  opacity: `0.92`,
                  borderRadius: `10px`,
                  backgroundColor: `hsla(0, 0%, 0%, 0)`,
                }}
              />
            }
            containerElement={
              <div
                style={
                  window.innerWidth < 500
                    ? {
                        height: `500px`,
                        width: `100%`,
                        paddingBottom: `50px`,
                        marginLeft: `auto`,
                        marginRight: `auto`,
                      }
                    : {
                        height: `500px`,
                        width: `80%`,
                        paddingBottom: `50px`,
                        marginLeft: `auto`,
                        marginRight: `auto`,
                      }
                }
              />
            }
          />
        ) : (
          <div className="loading-container">
            <FontAwesomeIcon id="globe" icon={faGlobeAmericas} size="2x" />
          </div>
        )}
      </section>
    </div>
  );
}
