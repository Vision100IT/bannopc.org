import React from 'react';
import PropTypes from 'prop-types';
import Map from '../models/google-map';

export default function WhereToFindUs({
  churchDetails: { churchName, streetAddress, city, state, latitude, longitude }
}) {
  return (
    <section>
      <h2>Where to Find Us</h2>

      <Map
        location={{ lat: latitude, lng: longitude }}
        height="360px"
        mapWidth="100%"
      />
      <p><a href="https://goo.gl/maps/x6aitfUS8ZU2">{churchName}</a><br />
      10am Sundays<br />
        {streetAddress}<br />
        {city}, {state}
      </p>
    </section>
  );
}

WhereToFindUs.propTypes = {
  churchDetails: PropTypes.object.isRequired,
  churchName: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};
