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
  const [center, setCenter] = useState({
    lat: 36.9915, lng: -119.7889
  });

  const refs = {};
  
  const onMapMounted = (ref) => {
    refs.map = ref;
  }
  return (
        <GoogleMap
          ref={onMapMounted}
          defaultZoom={6}
          center={center}
          mapTypeId='terrain'
        >
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