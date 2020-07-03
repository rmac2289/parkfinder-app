import React from 'react';
import './AddPark.css'
import Activities from '../Activities/Activities'

export default function AddPark() {
    const activities =  ["Hiking", "Boating", "Climbing", "Picnicking", "Skiing", "Swimming", "Off-Roading", "Camping","Biking","Fishing","Snorkeling","SCUBA Diving","Surfing","Geocaching","Wildlife Watching", "Horseback Riding","Museum Exhibits","Guided Tours"]
    const options = activities.sort().map((value,index) => {
        return <div key={index} className="select-container control-me">
        <input id={`activity-option${index}`} className="activity-option" name={value} type="checkbox" value={value}  />
        <label className="activity-label" name={value} htmlFor={`activity-option${index}`}>{value}</label>
        <div className="control-me"></div>
        </div>
    })
    return (
        <div className="add-park-form">
            <form className="add-park">
                <h1 id="add-park-header">add a park!</h1>
                <div className="input-container">
                    <label htmlFor="park-name" className="add-park-label">park name</label>
                <input id="park-name" name="park-name" type="text" />
                    
                </div>
                <div className="input-container">
                    <label htmlFor="location" className="add-park-label">location</label>
                <input id="location" name="location" type="text" />
                   
                </div>
                <div className="input-container">
                    <label htmlFor="hour" className="add-park-label">hours</label>
                <input id="hours" name="hours" type="text" /> 
                </div>
                <div className="input-container">
                    <label htmlFor="description" className="add-park-label">description</label>
                <textarea id="description" name="description" /> 
                </div>
                <div className="input-container">
                <Activities />
                </div>
                <div className="button-container">
                <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}