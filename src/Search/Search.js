import React from 'react';
import './Search.css';
import '@fortawesome/fontawesome-svg-core'
import Activities from '../Activities/Activities'
import Location from '../Location/Location'
import ParkName from '../ParkName/ParkName'


export default function Search(){
    
    return (
        <form className="search-form">
            <ParkName />
            <Location />
            <Activities /> 
        </form>
    )
}