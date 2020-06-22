import React, { useState } from 'react';
import './ParkName.css';


export default function ParkName(){
    const [parkName, setParkName] = useState('')
    const getParkName = (e) => {
        setParkName(e.target.value)
    }
    return (
        <div className="park-name">
             <input onChange={getParkName} id="park-name-input" type="text" placeholder="Park name..." value={parkName}/>
        </div>
    )
}