import React from 'react';
import './Search.css';
import '@fortawesome/fontawesome-svg-core'
import Activities from '../Activities/Activities'
import ParkName from '../ParkName/ParkName'


export default function Search(){
    
    return (
        <form className="search-form">
            <ParkName />
            <Activities /> 
            <button type="submit" id="form-submit-button">
                Search
            </button>
        </form>
    )
}