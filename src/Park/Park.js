import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Park.css'
import parks from '../data'
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Park(props) {
    let history = useHistory()
    const params = useParams();
    const filtered = parks.data.filter((value) => {
        return value.fullName === params.parkId
    })
    return (
        <div className="park">
            <section className="park-section">
            <nav className="back-nav">
                <button onClick={() => history.goBack()}><FontAwesomeIcon id="back-arrow" icon={faArrowAltCircleLeft}/></button>
            </nav>
                <h1 id="park-header"><a id="park-header" href={filtered[0].url} target="_blank" rel="noopener noreferrer">{params.parkId}</a></h1>
                <p className="address"><em>{filtered[0].address}</em></p>
                <div className="park-description">
    { filtered[0].description && <p>{parks.data[1].description}</p> }
                    <p><strong>Hours:</strong> {filtered[0].hours}</p>
    { filtered[0].weatherInfo && <p><strong>Weather Info:</strong> {filtered[0].weatherInfo}</p> }
                </div>
                <div className="park-activities">
                    <h3>Activities:</h3>
                    <ul>
                        
                        {filtered[0].activities[1] ? filtered[0].activities.map((value, index) => {
                            return <li key={index}>{value.name}</li>
                        }): <li>{filtered[0].activities[0].name}</li>}
                    </ul>
                </div>
                <div className="park-image">
                    {filtered[0].images.map((value, index) => {
                        return <img id="image" key={index} width="100%" src={value.url} alt={value.altText} />
                    })}
                </div>
            </section>
        </div>
    )
}