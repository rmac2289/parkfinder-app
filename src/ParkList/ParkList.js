import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ParkList.css'
import { ParkNameContext } from '../ParkNameContext';
import parks from '../data';
import { ActivitiesContext } from '../ActivitiesContext';

export default function ParkList() {
    
    const [parkName] = useContext(ParkNameContext)
    const [activities] = useContext(ActivitiesContext);
    
    const parksToDisplay = parks.data.filter((v) => v.fullName.toLowerCase().includes(parkName))
    
    const parkList = parksToDisplay.map((v,i) => {
        return <li className="park-list-item" key={i}>
            <Link to={`/park/${v.fullName}`}>{v.fullName}</Link>
            <p>{v.address}</p>
        </li>
    })
    return (
        <div className="park-list">
            <section className="park-list-section">
                <h1 id="park-list-header">search results</h1>
                {activities.length > 0 && <h3>searching for {activities.map((v,i) => <p key={i}>{v}</p>)}</h3>}
                <ul className="park-list-list">
                    {parkList}
                </ul>
            </section>
        </div>
    )
}