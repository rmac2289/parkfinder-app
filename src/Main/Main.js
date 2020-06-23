import React from 'react';
import './Main.css';
import Header from '../Header/Header'
import Search from '../Search/Search'
import MapComponent from '../Map/Map'
import apiKey from '../config'


export default function Main(){
    return (
    <div className="main">
        <Header />
        <section className="main-section">
            <Search />          
           <MapComponent 
           isMarkerShown
           googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry,drawing,places`}
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `400px` }} />}
           mapElement={<div style={{ height: `100%` }} />}
         />
        </section >
    </div>
    )
}