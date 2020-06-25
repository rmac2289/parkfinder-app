import React, { useState } from 'react';
import { Marker, InfoWindow} from "react-google-maps";
import './Map.css'

export default function MarkerWithInfoWindow(props) {
    const [isOpen, setIsOpen] = useState(false);

    const onToggleOpen = () => {
        setIsOpen(!isOpen)
    }
        return (
        <Marker
            icon={props.icon}
            position={props.position}
            onClick={onToggleOpen}>
            {isOpen && <InfoWindow onCloseClick={onToggleOpen}>
                <>
                <h3><a className="park-link" href={props.parkUrl} target="_blank" rel="noopener noreferrer">{props.nameContent}</a></h3>
                <p><strong>Hours:</strong> {props.pContent}</p>
                <img src={props.image} alt={props.alt} width="100"/>
                </>
            </InfoWindow>}
        </Marker>)
}
