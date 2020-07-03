import React, { useState } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";
import Geocode from "react-geocode";
import SearchBox from "react-google-maps/lib/components/places/SearchBox"
import apiKey from '../config';
import _ from 'lodash';
import parks from '../data.js'
import tree from '../images/icons8-evergreen-tree-48 copy.png'
import beach from '../images/icons8-beach-umbrella-48.png'
import MarkerWithInfoWindow from './MarkerInfo';


Geocode.setApiKey( apiKey );
Geocode.enableDebug();

function MapComponent(){
  const [bounds, setBounds] = useState(null);
  const [center, setCenter] = useState({
    lat: 36.9915, lng: -119.7889
  });

  const [markers, setMarkers] = useState([]);

  const styles = {
    marginRight: `10px`,
    border: `1px solid transparent`,
    background: `rgb(255,255,255,0.95)`,
    color: `rgb(65, 79, 71)`,
    paddingLeft: `1%`,
    width: `300px`,
    height: `32px`,
    marginTop: `15px`,
    borderRadius: `3px`,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    outline: `none`,
    position: `relative`,
    textOverflow: `ellipses`,
  }

  const refs = {};
  
  const onMapMounted = (ref) => {
    refs.map = ref;
  }
  
  const onBoundsChanged = () => {
    setBounds(refs.map.getBounds());
    setCenter(refs.map.getCenter());
  }
  const onSearchBoxMounted = (ref) => {
    refs.searchBox = ref;
  }
  const onPlacesChanged = () => {
    const places = refs.searchBox.getPlaces();
    const bounds = window.google.maps.LatLngBounds();
    console.log(bounds)
      places.forEach(place => {
        if (place.geometry.viewport){
          bounds.union(place.geometry.viewport)
        } else {
          bounds.extend(place.geometry.location)
        }
      });
      const nextMarkers = places.map(place => ({
        position: place.geometry.locations
      }));
      const nextCenter = _.get(nextMarkers, '0.position', center);
      setCenter(nextCenter);
      setMarkers(nextMarkers);
  }
  return (
        <GoogleMap
          ref={onMapMounted}
          defaultZoom={6}
          center={center}
          mapTypeId='terrain'
        >
      <SearchBox
          ref={onSearchBoxMounted}
          bounds={bounds}
          controlPosition={window.google.maps.ControlPosition.TOP_RIGHT}
          onPlacesChanged={onPlacesChanged}
      >
        <input
          type="text"
          placeholder="location search.."
          style={styles}
        />
      </SearchBox>
      {parks.data.map((place, index) => 
          <MarkerWithInfoWindow 
          url={`/park/${place.fullName}`}
          parkUrl={place.url}
          nameContent={place.fullName} 
          hours={place.hours} 
          key={index} title={place.fullName} 
          position={{lat: parseFloat(place.latLng[0]), lng: parseFloat(place.latLng[1]) }} 
          icon={place.fullName.includes('Beach') ? beach:tree}
          image={place.images[0] ? place.images[0].url:place.images.url}
          alt={place.images[0] ? place.images[0].altText:place.images.altText} />
      )}
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(MapComponent));