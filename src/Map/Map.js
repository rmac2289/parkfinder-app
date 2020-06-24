import React, { useState, useEffect } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow, InfoBox } from "react-google-maps";
import Geocode from "react-geocode";
import { withProps, lifecycle, compose, withStateHandlers, withState } from 'recompose';
import SearchBox from "react-google-maps/lib/components/places/SearchBox"
import apiKey from '../config';
import _ from 'lodash';
import parks from '../data.js'
import tree from '../images/icons8-evergreen-tree-48 copy.png'
import beach from '../images/icons8-beach-umbrella-48.png'


Geocode.setApiKey( apiKey );
Geocode.enableDebug();

function MapComponent(){
  const [isOpen, setIsOpen] = useState(false);
  const [bounds, setBounds] = useState(null);
  const [center, setCenter] = useState({
    lat: 36.9915, lng: -119.7889
  });
  const [markers, setMarkers] = useState([]);

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
  const onToggleOpen = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div style={{ height: `100%` }}>
      <div style={{ height: `400px`, width: `75%`, marginLeft: `auto`, marginRight: `auto` }}>
        <div style={{ height: `100%`, opacity: `0.92`, borderRadius: `10px`, backgroundColor: `hsla(0, 0%, 0%, 0)` }}>
        <GoogleMap
          ref={onMapMounted}
          defaultZoom={6}
          center={center}
          mapTypeId='terrain'
        >
      <SearchBox
          ref={onSearchBoxMounted}
          bounds={bounds}
          controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={onPlacesChanged}
      >
        <input
          type="text"
          placeholder="location search.."
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            background: `rgb(255,255,255,0.9)`,
            width: `300px`,
            height: `32px`,
            marginTop: `15px`,
            paddingLeft: `1%`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
        />
      </SearchBox>
      {parks.data.map((place, index) => 
        <Marker opacity={.95} key={index} onClick={onToggleOpen} title={place.fullName} position={{lat: parseFloat(place.latLng[0]), lng: parseFloat(place.latLng[1]) }} icon={place.fullName.includes('Beach') ? beach:tree} />
      )}
    </GoogleMap>
        </div>
      </div>
    </div>
  )
}

/* const MapComponent = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
    withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px`, width: `75%`, marginLeft: `auto`, marginRight: `auto` }} />,
      mapElement: <div style={{ height: `100%`, opacity: `0.92`, borderRadius: `10px`, backgroundColor: `hsla(0, 0%, 0%, 0)` }} />,
    }),
    lifecycle({
      UNSAFE_componentWillMount() {
        
        const refs = {}
  
        this.setState({
          bounds: null,
          center: {
            lat: 36.9915, lng: -119.7889
          },
          markers: [],
          onMapMounted: ref => {
            refs.map = ref;
          },
          onBoundsChanged: () => {
            this.setState({
              bounds: refs.map.getBounds(),
              center: refs.map.getCenter(),
            })
          },
          onSearchBoxMounted: ref => {
            refs.searchBox = ref;
          },
          onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();
            const bounds = window.google.maps.LatLngBounds();
  
            places.forEach(place => {
              if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport)
              } else {
                bounds.extend(place.geometry.location)
              }
            });
            const nextMarkers = places.map(place => ({
              position: place.geometry.location,
            }));
            const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
            this.setState({
              center: nextCenter,
              markers: nextMarkers,
            });
            // refs.map.fitBounds(bounds);
          },
        })
      },
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={6}
      center={props.center}
      mapTypeId='terrain'
    >
      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          type="text"
          placeholder="location search.."
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            background: `rgb(255,255,255,0.9)`,
            width: `300px`,
            height: `32px`,
            marginTop: `15px`,
            paddingLeft: `1%`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
        />
      </SearchBox>
      {parks.data.map((place, index) => 
        <Marker opacity={.95} key={index} title={place.fullName} position={{lat: parseFloat(place.latLng[0]), lng: parseFloat(place.latLng[1]) }} icon={place.fullName.includes('Beach') ? beach:tree} />
      )}
    </GoogleMap>
  ); 

export default MapComponent */
export default withScriptjs(withGoogleMap(MapComponent));