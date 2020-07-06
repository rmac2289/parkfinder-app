import React from 'react';
import './AddPark.css'

export default function AddPark() {
    const activities = ["Hiking", "Boating", "Climbing", "Picnicking", "Skiing", "Swimming", "Off-Roading", "Camping", "Biking", "Fishing", "Snorkeling", "SCUBA Diving", "Surfing", "Geocaching", "Wildlife Watching", "Horseback Riding", "Museum Exhibits", "Guided Tours"]
    const options = activities.sort().map((value, index) => {
        return <div key={index} className="add-park-select-container">
            <input id={`activity-option${index}`} className="activity-option" name={value} type="checkbox" value={value} />
            <label className="activity-label" name={value} htmlFor={`activity-option${index}`}>{value}</label>
            <div className="control-me"></div>
        </div>
    })
    return (
        <div className="add-park-form">
            <form className="add-park">
                <h1 id="add-park-header">Suggest a park</h1>
                <div className="input-container">
                    <label htmlFor="park-name">park name</label>
                    <input id="park-name" name="park-name" type="text" />

                </div>
                <div className="input-container">
                    <label htmlFor="location">location</label>
                    <input id="location" name="location" type="text" />

                </div>
                <div className="input-container">
                    <label htmlFor="hour">hours</label>
                    <input id="hours" name="hours" type="text" />
                </div>
                <div className="input-container">
                    <label htmlFor="description">description</label>
                    <textarea id="description" name="description" rows="3"/>
                </div>
                <div className="input-container">
                    <label htmlFor="options-container" className="add-park-label">
                        activities </label>
                    <div id="options-container" className="options-container">
                        {options}
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}