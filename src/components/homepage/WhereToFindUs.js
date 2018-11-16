import React, { Component } from 'react';
import GoogleMap from '../GoogleMap';


class WhereToFindUs extends Component {
  render() {
    return (
      <section>
        <div className={this.props.colWidths}>
          <div className="region region-content-2-2">
            <div className="block block-block">
              <h2 >Where to Find Us</h2>
              <div className="content">
                <GoogleMap id="map_canvas" height={this.props.height} width="100%" />
                <div><a href="https://goo.gl/maps/x6aitfUS8ZU2">Bannockburn Presbyterian Church</a></div>
                <div>10am Sundays</div>
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
