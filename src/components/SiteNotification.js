/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Popup from 'reactjs-popup';


class SiteNotification extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      this.props.showNotification ? (<section className="site-notification">
        <Popup modal defaultOpen={true} closeOnDocumentClick={false} onClose={() => this.props.onClose()}>
          {close => (
            <div className="notification-popup">
              <span>
                <a className="close" onClick={close}>
                  Close &times;
        </a>
                {this.props.content}

                <div className="header"><h3>Welcome to Bannockburn Presbyterian</h3></div>

                <h5 className="text-center">
                  <p>At Bannockburn, we want to remain socially and spiritually connected, however we do recognise the prudence of physical distancing and the need to flatten the curve of the spread of COVID-19.</p>
                  <br/>
                  <p>In this time of changing restrictions we're currently meeting outdoors @ 9am but this could change in the current climate so please contact us here and we'd love to let you know what's going on this Sunday!</p>
                </h5>
              </span>
            </div>
          )}
        </Popup >
      </section >) : ''
    );
  }
}

export default SiteNotification;
