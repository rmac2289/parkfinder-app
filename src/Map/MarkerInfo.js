import React, { useState } from 'react';
import { Marker, InfoWindow} from "react-google-maps";
import { Link } from 'react-router-dom';
import './Map.css';

export default function MarkerWithInfoWindow(props) {
    const [isOpen, setIsOpen] = useState(false);
    const onToggleOpen = (e) => {
        setIsOpen(!isOpen);
    }
        return (
        <Marker
            optimized={true}
            icon={props.icon}
            position={props.position}
            onClick={onToggleOpen}
            >
            {isOpen && <InfoWindow onCloseClick={onToggleOpen}>
                <>
                <h3><Link className="park-link" to={props.url}>{props.nameContent}</Link></h3>
                <p><strong>Hours:</strong> {props.hours}</p>
                <img src={props.image} alt={props.alt} width="100"/>
                </>
            </InfoWindow>}
        </Marker>
        )
}
