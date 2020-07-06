import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ParkList.css'
import { ParkNameContext } from '../ParkNameContext';
import parks from '../data';
import { ActivitiesContext } from '../ActivitiesContext';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function ParkList() {
    const history = useHistory()
    const [parkName] = useContext(ParkNameContext)
    const [activities] = useContext(ActivitiesContext);
    const activityList =  ["Hiking", "Boating", "Climbing", "Picnicking", "Skiing", "Swimming", "Off-Roading", "Camping","Biking","Fishing","Snorkeling","SCUBA Diving","Surfing","Geocaching","Wildlife Watching", "Horseback Riding","Museum Exhibits","Guided Tours"]

    const parksToDisplay = parks.data.filter((v) => {
       return v.fullName.toLowerCase().includes(parkName.toLowerCase())
    })
    
    const filterActivities = (parksData) => {
        for (let i=0; i < parksData.activities.length; i++){
            for (let j=0; j < activities.length; j++){
                if (parksData.activities[i].name === activities[j]){
                    return parksData
                }
            }
        }
    }
    // maps/filters to show parks matching ANY activities
    const activitiesList = parks.data.filter(filterActivities).map((v,i) => {
        return <li className="park-list-item" key={i + 400}>
            <Link to={`/park/${v.fullName}`}>{v.fullName}</Link>
            <p>{v.address}</p>
        </li>
    })
    // maps parksToDisplay to show parks matching park name
    const parkList = parksToDisplay.map((v,i) => {
        return <li className="park-list-item" key={i}>
            <Link to={`/park/${v.fullName}`}>{v.fullName}</Link>
            <p>{v.address}</p>
        </li>
    })
    return (
        <div className="park-list">
            <section className="park-list-section">
            <nav className="back-nav">
                <button onClick={() => history.goBack()}><FontAwesomeIcon id="back-arrow" icon={faArrowAltCircleLeft}/></button>
            </nav>
                <h1 id="park-list-header">search results</h1>
                {activities.length > 1 && <h3>searching for {activities.map((v,i) => <p key={i}>{v}</p>)}</h3>}
                <ul className="park-list-list">
                    {!parkList.length ? <p>Sorry, no parks match that search!</p>:activities.length > 0 && parkName !== '' ? activitiesList.concat(parkList):activities.length > 0 && parkName === '' ? activitiesList:parkList}
                </ul>
            </section>
        </div>
    )
}