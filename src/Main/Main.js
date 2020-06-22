import React from 'react';
import './Main.css';
import Header from '../Header/Header'
import Search from '../Search/Search'
// import MapComponent from '../Map/Map'


export default function Main(){
    return (
    <div className="main">
        <Header />
        <section className="main-section">
            <Search />          
           {/* <MapComponent />*/}
        </section >
    </div>
    )
}