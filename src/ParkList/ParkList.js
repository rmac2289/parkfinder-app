import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./ParkList.css";
import { ParkNameContext } from "../Contexts/ParkNameContext";
import { ActivitiesContext } from "../Contexts/ActivitiesContext";
import "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { ParkContext } from "../Contexts/ParkContext";

export default function ParkList() {
  const storageData = JSON.parse(localStorage.getItem("data"));
  const [park] = useContext(ParkContext);
  const history = useHistory();
  const [parkName, setParkName] = useContext(ParkNameContext);
  const [activities, setActivities] = useContext(ActivitiesContext);
  const [hovering, setHovering] = useState(false);
  // sort function to alphabetize park list
  function compare(a, b) {
    const nameA = a.fullName.toUpperCase();
    const nameB = b.fullName.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
  // hover functions to set state for 'go back' tooltip
  const isHovering = () => {
    return setHovering(true);
  };
  const isntHovering = () => {
    return setHovering(false);
  };
  // function for activity filter
  const checker = (parksData) =>
    activities.every((v) => parksData.activities.includes(v));

  // maps/filters to show parks matching ANY activities
  const activitiesList = storageData
    .sort(compare)
    .filter(checker)
    .map((v, i) => {
      return (
        <li className="park-list-item" key={i + 400}>
          <FontAwesomeIcon id="tree-icon" icon={faTree} />
          <Link className="park-list-link" to={`/park/${v.fullName}`}>
            {v.fullName}
          </Link>
        </li>
      );
    });
  const parksToDisplay = storageData.filter((v) => {
    return v.fullName.toLowerCase().includes(parkName.toLowerCase());
  });
  // maps parksToDisplay to show parks matching park name
  const parkList = parksToDisplay.map((v, i) => {
    return (
      <li className="park-list-item" key={i}>
        <FontAwesomeIcon id="tree-icon" icon={faTree} />
        <Link className="park-list-link" to={`/park/${v.fullName}`}>
          {v.fullName}
        </Link>
      </li>
    );
  });
  return (
    <div className="park-list">
      <section className="park-list-section">
        <nav className="back-nav">
          <button
            onClick={() => {
              setActivities([]);
              setParkName("");
              history.goBack();
            }}
          >
            <FontAwesomeIcon
              onMouseLeave={isntHovering}
              onMouseEnter={isHovering}
              id="back-arrow"
              icon={faArrowAltCircleLeft}
            />
            {hovering && <span id="back-span">go back</span>}
          </button>
        </nav>
        <h1 id="park-list-header">search results</h1>
        <p id="park-list-header-p">
          <em>click on the park for more details (listed a-z)</em>
        </p>
        {activities.length > 1 && (
          <div className="searched-activity-box">
            <h3 className="searched-activity-header">selected activities:</h3>
            <div className="searched-activity-container">
              {activities.map((v, i) => (
                <p className="searched-activity" key={i}>
                  {v}
                </p>
              ))}
            </div>
          </div>
        )}
        <ul className="park-list-list">
          {!parkList.length ? (
            <p>Sorry, no parks match that search!</p>
          ) : activities.length > 0 && parkName !== "" ? (
            activitiesList.concat(parkList)
          ) : activities.length > 0 && parkName === "" ? (
            activitiesList
          ) : (
            parkList
          )}
        </ul>
      </section>
    </div>
  );
}
