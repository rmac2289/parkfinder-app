/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import './Main.css';
import Header from '../Header/Header'
import Search from '../Search/Search'
import MapComponent from '../Map/Map'
import apiKey from '../config';
import { LoginContext } from '../Contexts/LoginContext';
import TokenService from '../services/TokenService';
import { ParkContext } from '../Contexts/ParkContext';
import ParkApiService from '../services/ParkApiService';

export default function Main(){
   // eslint-disable-next-line no-unused-vars
   const [loggedIn, setLoggedIn] = useContext(LoginContext);

   useEffect(() => {
       if (TokenService.hasAuthToken()){
           return setLoggedIn(true)
       }
   });
   // eslint-disable-next-line no-unused-vars
   const [park, setPark] = useContext(ParkContext);
  useEffect(() => {
    ParkApiService.getParks()
          .then(data => setPark(data))
          .catch((error) => { console.error('Error:', error) });
      },[setPark]);
      
    return (
    <div className="main">
        <Header />
        <section className="main-section">
            <Search />        
           <MapComponent 
           googleMapURL= {`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
           loadingElement={<div style={{ height: `100%` }} />}
           mapElement={ <div style={{ height: `100%`, opacity: `0.92`, borderRadius: `10px`, backgroundColor: `hsla(0, 0%, 0%, 0)` }} />}
           containerElement={<div style={{ height: `500px`, width: `80%`, paddingBottom: `50px`, marginLeft: `auto`, marginRight: `auto` }} />}/>
        </section >
    </div>
    )
}