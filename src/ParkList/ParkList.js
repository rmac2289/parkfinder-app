import React, { useContext } from 'react';
import './ParkList.css'
import { ParkNameContext } from '../ParkNameContext';
import parks from '../data';
import { ActivitiesContext } from '../ActivitiesContext';

export default function ParkList() {
    const [parkName] = useContext(ParkNameContext)
    const [activities] = useContext(ActivitiesContext);
    console.log(activities)
    
    return (
        <div className="park-list">
            <section className="park-list-section">
                <h1 id="park-list-header">park list</h1>
                <ul className="park-list-list">
                    <li className="park-list-item">
                        Park 1
                    </li>
                    <li className="park-list-item">
                        Park 2
                    </li>
                </ul>
            </section>
        </div>
    )
}