import React from 'react';
import './ParkList.css'


export default function LoginForm() {
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