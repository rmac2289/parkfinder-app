import React, { useState, useContext } from 'react';
import './Search.css';
import '@fortawesome/fontawesome-svg-core'
import Activities from '../Activities/Activities'
import ParkName from '../ParkName/ParkName'

export default function Search(){
    
    const [parkName, setParkName] = useState('');

    const getParkName = (e) => {
        setParkName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <ParkName getName={getParkName} parkName={parkName} />
            <Activities /> 
            <button type="submit" id="form-submit-button">
                Search
            </button>
        </form>
    )
}