/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import "./Park.css";
import "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCloudRain,
  faCompass,
  faCloudSun,
  faSmog,
  faSun,
  faCloudShowersHeavy,
  faCloudMoonRain,
  faCloudMoon,
  faMoon,
  faWind,
  faBolt,
  faCloud,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import { RedirectContext } from "../Contexts/RedirectContext";
import { FullParkNameContext } from "../Contexts/ParkNameContext";
import { ParkContext } from "../Contexts/ParkContext";

export default function Park() {
  const [redirect, setRedirect] = useContext(RedirectContext);
  const [fullParkName, setFullParkName] = useContext(FullParkNameContext);
  const history = useHistory();
  const params = useParams();
  const [park] = useContext(ParkContext);
  const [hovering, setHovering] = useState(false);
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  // sets state for 'go back' tooltip
  const isHovering = () => {
    return setHovering(true);
  };
  const isntHovering = () => {
    return setHovering(false);
  };
  const storageData = JSON.parse(localStorage.getItem("data"));

  const filtered = storageData.filter((value) => {
    return value.fullName === params.parkId;
  });

  const filterFunc = (value) => {
    if (value.fullName === params.parkId) {
      return value.latLng;
    }
  };

  // scroll to top on page mount and set park name state
  useEffect(() => {
    window.scrollTo(0, 0);
    setFullParkName(params.parkId);
  }, [params.parkId, setFullParkName]);

  useEffect(() => {
    async function getWeather() {
      const latLngFilter = storageData.filter(filterFunc);
      const lat = latLngFilter[0].latLng[0];
      const long = latLngFilter[0].latLng[1];
      const weatherUrl = `https://api.weather.gov/points/${lat},${long}`;
      await fetch(weatherUrl)
        .then((res) => res.json())
        .then(async (data) => {
          return await fetch(data.properties.forecast)
            .then((res) => res.json())
            .then((data) => {
              if (data.periods) {
                setWeather(data.periods);
              } else {
                setWeather(data.properties.periods);
              }
            })
            .catch((error) => setError(error.message));
        });
    }
    getWeather();
  }, []);
  // set state for redirect after log in
  const setRedirectState = () => {
    setRedirect("commentlist");
  };
  const getWeatherIcon = (v) => {
    return v.shortForecast === "Partly Cloudy"
      ? faCloudSun
      : v.shortForecast === "Sunny"
      ? faSun
      : v.shortForecast === "Mostly Sunny"
      ? faCloudSun
      : v.shortForecast === "Mostly Clear"
      ? faMoon
      : v.shortForecast === "Mostly Cloudy"
      ? faCloud
      : v.shortForecast === "Clear"
      ? faMoon
      : v.shortForecast.includes("Thunderstorms")
      ? faBolt
      : v.shortForecast.includes("Fog")
      ? faSmog
      : v.shortForecast.includes("Showers" || "Rain")
      ? faCloudShowersHeavy
      : v.shortForecast.includes("Wind")
      ? faWind
      : v.shortForecast.includes("Drizzle")
      ? faCloudRain
      : faSun;
  };
  return (
    <>
      {storageData.length > 0 ? (
        <div className="park">
          <section className="park-section">
            <nav className="back-nav">
              <button onClick={() => history.goBack()}>
                <FontAwesomeIcon
                  onMouseLeave={isntHovering}
                  onMouseEnter={isHovering}
                  id="back-arrow"
                  icon={faArrowAltCircleLeft}
                />
                {hovering && <span id="back-span">go back</span>}
              </button>
              <Link
                className="comments-link sb1 sb2"
                onClick={setRedirectState}
                to="/commentlist"
              >
                user comments
              </Link>
            </nav>
            <h1 id="park-header">
              <a
                id="park-header"
                href={filtered[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {params.parkId}
              </a>
            </h1>

            <div className="park-description">
              {filtered[0].description && <p>{filtered[0].description}</p>}
              <p className="hours">
                <strong>Hours:</strong> {filtered[0].hours}
              </p>
              {filtered[0].weatherInfo && (
                <p className="weather-info">
                  <strong>Weather Info:</strong> {filtered[0].weatherInfo}
                </p>
              )}
            </div>
            <div className="iframe-box">
              <iframe
                src={filtered[0].map}
                width="96%"
                height="300"
                frameBorder="0"
                title="embedded"
                style={{
                  margin: `2%`,
                  marginTop: `40px`,
                  borderRadius: `5px`,
                  border: 0,
                  background: `rgb(255,255,255,0.95)`,
                  color: `rgb(65, 79, 71)`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  outline: `none`,
                  position: `relative`,
                  textOverflow: `ellipses`,
                }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="park-activities">
              <h3 className="activities-header">Activities</h3>
              <ul className="activities-list">
                {filtered[0].activities[1] ? (
                  filtered[0].activities.map((value, index) => {
                    return (
                      <li className="activities-list-item" key={index}>
                        <FontAwesomeIcon id="compass-list" icon={faCompass} />
                        {value}
                      </li>
                    );
                  })
                ) : (
                  <li>
                    <FontAwesomeIcon icon={faCompass} />
                    {filtered[0].activities[0]}
                  </li>
                )}
              </ul>
            </div>
            <div className="weather">
              <h3 className="weather-header">
                Weather <FontAwesomeIcon icon={faCloudSun} />
              </h3>
              {error !== null ? (
                <h3 className="weather-error">
                  Hmm, something went wrong. Please refresh or try again later.
                </h3>
              ) : (
                <ul className="weather-list">
                  {weather.length !== 0 ? (
                    weather.map((v, i) => {
                      return (
                        <li className="weather-list-item" key={i}>
                          <h4 className="weather-name">{v.name}</h4>
                          <div className="weather-p-box">
                            <p className="weather-p">
                              {v.temperature}&#176;F
                              <FontAwesomeIcon
                                id="weather-icon"
                                icon={getWeatherIcon(v)}
                              />
                            </p>
                            <p className="forecast">{v.shortForecast}</p>
                          </div>
                        </li>
                      );
                    })
                  ) : (
                    <h1 className="loading-weather">
                      <FontAwesomeIcon id="sun" icon={faSun} />
                      <FontAwesomeIcon id="cloud" icon={faCloudSun} />
                      <FontAwesomeIcon
                        id="showers"
                        icon={faCloudShowersHeavy}
                      />
                      <FontAwesomeIcon id="moon" icon={faMoon} />
                      <FontAwesomeIcon id="fog" icon={faSmog} />
                      <FontAwesomeIcon id="bolt" icon={faBolt} />
                    </h1>
                  )}
                </ul>
              )}
            </div>
            <div className="park-image">
              {filtered[0].images.map((value, index) => {
                return (
                  <img
                    id="image"
                    key={index}
                    width="100%"
                    src={value.url}
                    alt={value.altText}
                  />
                );
              })}
            </div>
          </section>
        </div>
      ) : (
        <h3>loading...</h3>
      )}
    </>
  );
}
