import React, { useState } from 'react';
import './Activities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core'


export default function Activities(){
    const [activity, setActivity] = useState([])
    const [showActivities, setShowActivities] = useState(false)
    const getActivity = (e) => {
        !activity.includes(e.target.value) &&
        setActivity([...activity, e.target.value])
        if(activity.includes(e.target.value)){
            const targetIndex = activity.indexOf(e.target.value);
            if (activity.length === 1){
                setActivity([])
            } else {
            activity.splice(targetIndex,1);
            }
        }
    }
    const showMenu = (e) => {
        e.preventDefault();
        if (showActivities){
            setShowActivities(false);
            document.removeEventListener('click', closeMenu)
        }
        if (!showActivities){
        setShowActivities(true);
        document.addEventListener('click', closeMenu);
        }
    }
    const closeMenu = (e) => {
        document.removeEventListener('click', closeMenu)
    }
    const activities =  ["Hiking", "Boating", "Climbing", "Picnicking", "Skiing", "Swimming", "Off-Roading", "Camping","Biking","Fishing","Snorkeling","SCUBA Diving","Surfing","Geocaching","Wildlife Watching", "Horseback Riding","Museum Exhibits","Guided Tours"]
    const options = activities.sort().map((value,index) => {
        return <div key={index} className="select-container control-me">
        <input id={`activity-option${index}`} className="activity-option" name={value} type="checkbox" value={value} defaultChecked={activity.includes(value)} />
        <label className="activity-label" name={value} htmlFor={`activity-option${index}`}>{value}</label>
        <div className="control-me"></div>
        </div>
    })
    return (
            <div className="activity-container">
    <button id='activity-button' onClick={showMenu}>Activities {!showActivities ? <FontAwesomeIcon id="chevron-down" icon={faChevronDown}/>: <FontAwesomeIcon id="chevron-up" icon={faChevronUp}/>}</button>
              {showActivities &&
                <div onChange={getActivity} className="activity-select" value={activity}>
                 {options}
                </div>}
            </div>
    )
}