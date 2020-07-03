import React from 'react';
import { useParams } from 'react-router-dom';
import './Park.css'
import parks from '../data'

export default function Park(props) {
    const params = useParams();
    const filtered = parks.data.filter((value) => {
        return value.fullName === params.parkId
    })
    console.log(filtered)
    return (
        <div className="park">
            <section className="park-section">
                <h1 id="park-header"><a id="park-header" href={filtered[0].url}>{params.parkId}</a></h1>
                <p className="address"><em>{filtered[0].address}</em></p>
                <div className="park-description">
    { filtered[0].description && <p>{parks.data[1].description}</p> }
                    <p><strong>Hours:</strong> {filtered[0].hours}</p>
    { filtered[0].weatherInfo && <p><strong>Weather Info:</strong> {filtered[0].weatherInfo}</p> }
                </div>
                <div className="park-activities">
                    <h3>Activities:</h3>
                    <ul>
                        
                        {filtered[0].activities.map((value, index) => {
                            return <li key={index}>{value.name}</li>
                        })}
                    </ul>
                </div>
                <div className="park-image">
                    {filtered[0].images.length > 1 ? filtered[0].images.map((value, index) => {
                        return <img key={index} height="200" width="200" src={value.url} alt={value.altText} />
                    }): <img height="200" width="200" src={filtered[0].images.url} alt={filtered[0].images.altText} />}
                   
                </div>
            </section>
        </div>
    )
}