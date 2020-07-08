import React, { useContext } from 'react';
import './Activities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core'
import { ActivityContext, ActivitiesContext } from '../Contexts/ActivitiesContext';


export default function Activities(){
    const [activities, setActivities] = useContext(ActivitiesContext)
    const [showActivities, setShowActivities] = useContext(ActivityContext)
    const getActivity = (e) => {
        !activities.includes(e.target.value) &&
        setActivities([...activities, e.target.value])
        if(activities.includes(e.target.value)){
            const targetIndex = activities.indexOf(e.target.value);
            if (activities.length === 1){
                setActivities([])
            } else {
            activities.splice(targetIndex,1);
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
    const activityList =  ["Hiking", "Boating", "Climbing", "Picnicking", "Skiing", "Swimming", "Off-Roading", "Camping","Biking","Fishing","Snorkeling","SCUBA Diving","Surfing","Geocaching","Wildlife Watching", "Horseback Riding","Museum Exhibits","Guided Tours"]
    const options = activityList.sort().map((value,index) => {
        return <div key={index} className="select-container control-me">
        <input id={`activity-option${index}`} className="activity-option" name={value} type="checkbox" value={value} defaultChecked={activities.includes(value)} />
        <label className="activity-label" name={value} htmlFor={`activity-option${index}`}>{value}</label>
        <div className="control-me"></div>
        </div>
    })
    return (
            <div className={showActivities ? "activity-container margin":"activity-container"}>
    <button id='activity-button' onClick={showMenu}>Activities {!showActivities ? <FontAwesomeIcon id="chevron-down" icon={faChevronDown}/>: <FontAwesomeIcon id="chevron-up" icon={faChevronUp}/>}</button>
              {showActivities &&
                <div onChange={getActivity} className="activity-select" value={activities}>
                 {options}
                </div>}
            </div>
    )
}