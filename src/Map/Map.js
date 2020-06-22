import React, { Component } from 'react';
import './Map.css';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from 'react-google-map';


export default class MapComponent extends Component {
    styles = [
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#C6E2FF"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#C5E3BF"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#D1D1B8"
                }
            ]
        }
    ]
    render(){
      
        return(
            <div>
            <ReactGoogleMapLoader 
        params={{
            key: "AIzaSyAxfWshVpL9zq7vBy4GJNbaiCesq-vXHvI",
            libraries: "places,geometry",
        }}
        render={googleMaps =>
            googleMaps && (
                <div className="map-container">
                    <ReactGoogleMap
                        
                        mapTypeId= 'terrain'
                        styles={this.styles}
                        googleMaps={googleMaps}
                        center={{lat: 36.9915, lng: -119.7889}}
                        zoom={6}
                        disableDefaultUI= {true}
                        zoomControl={true}
                    />
                </div>
            )
        }
    />
    </div>
        )
    }
}