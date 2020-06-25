import React from 'react';
import './Park.css'
import parks from '../data'

export default function LoginForm() {
    return (
        <div className="park">
            <section className="park-section">
                <h1 id="park-header"><a id="park-header" href={parks.data[1].url}>{parks.data[1].fullName}</a></h1>
                <p className="address"><em>{parks.data[1].address}</em></p>
                <div className="park-description">
                    <p>{parks.data[1].description}</p>
                    <p><strong>Hours:</strong> {parks.data[1].hours}</p>
                    <p><strong>Weather Info:</strong> {parks.data[1].weatherInfo}</p>
                </div>
                <div className="park-activities">
                    <h3>Activities:</h3>
                    <ul>
                        
                        {Object.values(parks.data[1].activities).map((value) => {
                            return <li>{value.name}</li>
                        })}
                    </ul>
                </div>
                <div className="park-image">
                    {parks.data[1].images.map((value) => {
                        return <img height="200" width="200" src={value.url} alt={value.altText} />
                    })}
                   
                </div>
            </section>
        </div>
    )
}