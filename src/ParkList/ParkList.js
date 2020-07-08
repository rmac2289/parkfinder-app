import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ParkList.css'
import { ParkNameContext } from '../Contexts/ParkNameContext';
import parks from '../data';
import { ActivitiesContext } from '../Contexts/ActivitiesContext';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faTree } from '@fortawesome/free-solid-svg-icons';

export default function ParkList() {
    const history = useHistory()
    const [parkName, setParkName] = useContext(ParkNameContext)
    const [activities, setActivities] = useContext(ActivitiesContext);

    const parksToDisplay = parks.data.filter((v) => {
       return v.fullName.toLowerCase().includes(parkName.toLowerCase())
    })

    // function for activity filter
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
             <FontAwesomeIcon id="tree-icon" icon={faTree}/>
            <Link className="park-list-link" to={`/park/${v.fullName}`}>{v.fullName}</Link>
         
        </li>
    })

    // maps parksToDisplay to show parks matching park name
    const parkList = parksToDisplay.map((v,i) => {
        return <li className="park-list-item" key={i}>
            <FontAwesomeIcon id="tree-icon" icon={faTree}/>
            <Link className="park-list-link" to={`/park/${v.fullName}`}>{v.fullName}</Link>
          
        </li>
    })
    return (
        <div className="park-list">
            <section className="park-list-section">
            <nav className="back-nav">
                <button onClick={() => {
                    setActivities([]);
                    setParkName('');
                    history.goBack();
                }}>
                 <FontAwesomeIcon id="back-arrow" icon={faArrowAltCircleLeft}/></button>
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