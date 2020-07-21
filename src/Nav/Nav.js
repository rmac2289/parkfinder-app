import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faMapSigns, faCompass, faCampground, faMountain } from '@fortawesome/free-solid-svg-icons';
import { LoginContext } from '../Contexts/LoginContext';
import TokenService from '../services/TokenService';
import { RedirectContext } from '../Contexts/RedirectContext';

export default function Nav(){
    const [redirect, setRedirect] = useContext(RedirectContext);
    const [loggedIn, setLoggedIn] = useContext(LoginContext);

    // handle logout click
    const logout = () => {
        TokenService.clearAuthToken();
        setLoggedIn(false)
    };
    // set state for redirect on login
    const setRedirectState = () => {
        setRedirect('addpark')
    };
    const loginClick = () => {
        setRedirect(null);
    };
    return (
    <div className="nav">
        <ul className="nav-list">
        <li className="nav-list-item"><FontAwesomeIcon className="nav-icon" icon={faMapSigns} /></li>
        {!loggedIn 
        ? 
        <li className="nav-list-item"><Link onClick={loginClick} id="login" className="nav-link" to="/login">Login</Link></li>
        :
        <li className="nav-list-item"><Link id="logout" onClick={logout} className="nav-link" to="/">Logout</Link></li>
        }
        <li className="nav-list-item"><FontAwesomeIcon className="nav-icon" icon={faCampground} /></li>
        <li className="nav-list-item"><Link className="nav-link" to="/signup">Signup</Link></li>
        <li className="nav-list-item"><FontAwesomeIcon className="nav-icon" icon={faTree} /></li>
        <li className="nav-list-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-list-item"><FontAwesomeIcon className="nav-icon" icon={faCompass} /></li>
        <li className="nav-list-item"><Link onClick={setRedirectState} className="nav-link" to="/addpark">Suggest a Park</Link></li>
        <li className="nav-list-item"><FontAwesomeIcon className="nav-icon" icon={faMountain} /></li>

        </ul>
    </div>
    )
};