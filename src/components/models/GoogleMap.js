import React from 'react';
import PropTypes from 'prop-types';
import {GoogleMap, Marker} from '@react-google-maps/api';

export default function Map({id, height, mapWidth, location, disableUI}) {
  return (
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
  );
}

Map.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  mapWidth: PropTypes.number
};
