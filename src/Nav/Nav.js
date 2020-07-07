import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faMapSigns, faCompass, faCampground } from '@fortawesome/free-solid-svg-icons'

export default function Nav(){
    return (
    <div className="nav">
        <ul className="nav-list">
        <li className="nav-list-item"><FontAwesomeIcon className="nav-icon" icon={faMapSigns} /></li>
        <li className="nav-list-item"><Link className="nav-link" to="/login">Login</Link></li>
        <li className="nav-list-item"><FontAwesomeIcon className="nav-icon" icon={faCampground} /></li>
        <li className="nav-list-item"><Link className="nav-link" to="/signup">Signup</Link></li>
        <li className="nav-list-item"><FontAwesomeIcon className="nav-icon" icon={faTree} /></li>
        <li className="nav-list-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-list-item"><FontAwesomeIcon className="nav-icon" icon={faCompass} /></li>
        <li className="nav-list-item"><Link className="nav-link" to="/addpark">Suggest a Park</Link></li>
        <li className="nav-list-item"><FontAwesomeIcon className="nav-icon" icon={faMapSigns} /></li>

        </ul>
    </div>
    )
}