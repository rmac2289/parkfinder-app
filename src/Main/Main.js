import React, { useContext, useEffect } from 'react';
import './Main.css';
import Header from '../Header/Header'
import Search from '../Search/Search'
import MapComponent from '../Map/Map'
import apiKey from '../config';
import { LoginContext } from '../Contexts/LoginContext';
import TokenService from '../services/TokenService';

export default function Main(){
   const [loggedIn, setLoggedIn] = useContext(LoginContext);

   useEffect(() => {
       if (TokenService.hasAuthToken()){
           return setLoggedIn(true)
       }
   })
    return (
    <div className="main">
        <Header />
        <section className="main-section">
            <Search />        
           <MapComponent 
           googleMapURL= {`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
           loadingElement={<div style={{ height: `100%` }} />}
           mapElement={ <div style={{ height: `100%`, opacity: `0.92`, borderRadius: `10px`, backgroundColor: `hsla(0, 0%, 0%, 0)` }} />}
           containerElement={<div style={{ height: `450px`, width: `80%`, paddingBottom: `50px`, marginLeft: `auto`, marginRight: `auto` }} />}/>
        </section >
    </div>
    )
}