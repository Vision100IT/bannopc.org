/* eslint-disable */
import React, { Component } from 'react';


class WhereToFindUs extends Component {
  render() {
    return (
      <section>
        <div className="col-md-12 col-xs-12">
          <div className="region region-content-2-2">
            <div className="block block-block">
              <h2 >Where to Find Us</h2>
              <div className="content">
                <div id="map_canvas" className="google-map" style={{maxHeight:"270px"}}></div>
                <div><a href="https://goo.gl/maps/x6aitfUS8ZU2">Bannockburn Presbyterian Church</a></div>
                <div>18 Moore Street</div>
                <div>Bannockburn, Victoria</div>  </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default WhereToFindUs;
