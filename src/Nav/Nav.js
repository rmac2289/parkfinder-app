import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faMapSigns, faCompass, faCampground } from '@fortawesome/free-solid-svg-icons'
import { LoginContext } from '../Contexts/LoginContext';
import TokenService from '../services/TokenService'

export default function Nav(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    const logout = () => {
        TokenService.clearAuthToken();
        setLoggedIn(false)
    }
    return (
    <div className="nav">
        <ul className="nav-list">
        <li className="nav-list-item"><FontAwesomeIcon className="nav-icon" icon={faMapSigns} /></li>
        {!loggedIn 
        ? 
        <li className="nav-list-item"><Link id="login" className="nav-link" to="/login">Login</Link></li>
        :
        <li className="nav-list-item"><Link id="logout" onClick={logout} className="nav-link" to="/">Logout</Link></li>
        }
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