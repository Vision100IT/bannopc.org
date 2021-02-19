import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { mapsKey } from '../../lib/config';

export default function Map({ id, height, mapWidth, location, disableUI }) {
  return (
    <LoadScript id="script-loader" googleMapsApiKey={mapsKey}>
      <GoogleMap
        id={id}
        mapContainerStyle={{
          height,
          width: mapWidth
        }}
        zoom={14}
        center={{
          lat: location.lat,
          lng: location.lng
        }}
        options={{
          disableDefaultUI: disableUI
        }}
      >
        <Marker
          position={{
            lat: location.lat,
            lng: location.lng
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}

Map.propTypes = {
  location: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  mapWidth: PropTypes.number
};
