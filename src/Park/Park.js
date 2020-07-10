import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import './Park.css'
import parks from '../data'
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faCompass } from '@fortawesome/free-solid-svg-icons';
import { RedirectContext } from '../Contexts/RedirectContext';
import { FullParkNameContext } from '../Contexts/ParkNameContext';

export default function Park(props) {
    const [redirect, setRedirect] = useContext(RedirectContext);
    const [fullParkName, setFullParkName] = useContext(FullParkNameContext)
    const history = useHistory();
    const params = useParams();
    const [hovering, setHovering] = useState(false);
    const isHovering = () => {
        return setHovering(true);
    };
    const isntHovering = () => {
        return setHovering(false);
    };
    const filtered = parks.data.filter((value) => {
        return value.fullName === params.parkId
    });
    
    useEffect(() => {
        window.scrollTo(0,0);
        setFullParkName(params.parkId)
    });
    const setRedirectState = () => {
        setRedirect('commentlist');
    };
    return (
        <div className="park">
            <section className="park-section">
            <nav className="back-nav">
                <button onClick={() => history.goBack()}><FontAwesomeIcon onMouseLeave={isntHovering} onMouseEnter={isHovering} id="back-arrow" icon={faArrowAltCircleLeft}/>{hovering && <span id="back-span">go back</span>}</button>
                <Link className="comments-link sb1 sb2" onClick={setRedirectState} to="/commentlist">user comments</Link>

            </nav>
                <h1 id="park-header"><a id="park-header" href={filtered[0].url} target="_blank" rel="noopener noreferrer">{params.parkId}</a></h1>
                
                <div className="park-description">
    { filtered[0].description && <p>{filtered[0].description}</p> }
                    <p className="hours"><strong>Hours:</strong> {filtered[0].hours}</p>
    { filtered[0].weatherInfo && <p className="weather-info"><strong>Weather Info:</strong> {filtered[0].weatherInfo}</p> }

                </div>
                <iframe src={filtered[0].map} width="96%" height="300" frameBorder="0" title="embedded" 
                style={{ 
                    margin: `2%`,
                    marginTop: `40px`, 
                    borderRadius: `5px`, 
                    border: 0,
                    background: `rgb(255,255,255,0.95)`,
                    color: `rgb(65, 79, 71)`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    outline: `none`,
                    position: `relative`,
                    textOverflow: `ellipses` }} 
                allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                <div className="park-activities">
                    <h3>Activities:</h3>
                    <ul className="activities-list">
                        
                        {filtered[0].activities[1] ? filtered[0].activities.map((value, index) => {
                            return <li key={index}><FontAwesomeIcon id="compass-list" icon={faCompass}/>{value.name}</li>
                        }): <li><FontAwesomeIcon icon={faCompass}/>{filtered[0].activities[0].name}</li>}
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