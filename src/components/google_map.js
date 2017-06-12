import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.propps.lon
      }
    });
  }

  render() {
    // this.ref.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
