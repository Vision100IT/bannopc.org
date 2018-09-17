/* eslint-disable */
import React, { Component } from 'react';


class GoogleMap extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id={this.props.id} className="google-map" style={{ maxHeight: this.props.height, maxWidth: this.props.mapWidth }}></div>
        );
    }
}

export default GoogleMap;
