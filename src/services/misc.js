import {
  faCloudRain,
  faCloudSun,
  faSmog,
  faSun,
  faCloudShowersHeavy,
  faMoon,
  faWind,
  faBolt,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

export const getWeatherIcon = (v) => {
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

export const compare = (a, b) => {
  const nameA = a.fullName.toUpperCase();
  const nameB = b.fullName.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
};
