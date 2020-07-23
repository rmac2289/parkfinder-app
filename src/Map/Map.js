import React, { useContext } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";
import Geocode from "react-geocode";
import apiKey from '../config';
import tree from '../images/icons8-evergreen-tree-48 copy.png';
import MarkerWithInfoWindow from './MarkerInfo';
import { ParkContext } from '../Contexts/ParkContext';

Geocode.setApiKey( apiKey );
Geocode.enableDebug();

function MapComponent(){
  const [park] = useContext(ParkContext);

  const center = {
    lat: 36.9915, lng: -119.7889
  };

  const refs = {};
  const storageData = JSON.parse(localStorage.getItem("data"))

  const onMapMounted = (ref) => {
    refs.map = ref;
  };
  return (
    <>
    {storageData.length > 0 &&
        <GoogleMap
          ref={onMapMounted}
          defaultZoom={6}
          center={center}
          mapTypeId='terrain'
        >
      {storageData.map((place, index) => 
          <MarkerWithInfoWindow 
          url={`/park/${place.fullName}`}
          parkUrl={place.url}
          nameContent={place.fullName} 
          hours={place.hours} 
          key={index} title={place.fullName} 
          position={{lat: parseFloat(place.latLng[0]), lng: parseFloat(place.latLng[1]) }} 
          icon={tree}
          image={place.images[0] ? place.images[0].url:place.images.url}
          alt={place.images[0] ? place.images[0].altText:place.images.altText} />
      )}
    </GoogleMap>}
    </>
  )
};

export default withScriptjs(withGoogleMap(MapComponent));