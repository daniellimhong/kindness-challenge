import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import styled from "styled-components";

const mapStyle = {
  height: "50%",
  width: "100vw",
  position: "absolute",
};

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { google } = this.props;
    return (
        <Map
          google={google}
          zoom={11}
          style={mapStyle}
          minZoom={5}
          maxZoom={15}
          initialCenter={{ lat: 40.712772, lng: -74.006058 }}
          disableDefaultUI={true}
        >
          <Marker position={{ lat: 40.712772, lng: -74.006058 }} />
        </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY
})(GoogleMap);
