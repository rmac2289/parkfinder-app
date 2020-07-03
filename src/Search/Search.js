import React, { useContext } from 'react';
import './Search.css';
import Activities from '../Activities/Activities'
import ParkName from '../ParkName/ParkName'
import { ActivityContext } from '../ActivitiesContext';
import { ParkNameContext } from '../ParkNameContext';

export default function Search(){
    const [showActivities] = useContext(ActivityContext);
    const [parkName, setParkName] = useContext(ParkNameContext)

    const getParkName = (e) => {
        setParkName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <form className={showActivities ? "search-form margin-bottom":"search-form"} onSubmit={handleSubmit}>
            <ParkName getName={getParkName} parkName={parkName} />
            <Activities id="activities"/> 
            <button type="submit" id="form-submit-button">
                Search
            </button>
        </form>
    )
}