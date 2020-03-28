import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { google } = this.props;
    console.log(process.env.REACT_APP_GOOGLE_KEY);
    return (
      <div>
        <Map
          google={google}
          zoom={10}
          minZoom={2}
          maxZoom={15}
          initialCenter={{ lat: 40.712772, lng: -74.006058 }}
          disableDefaultUI={true}
        >
          <Marker position={{ lat: 40.712772, lng: -74.006058 }} />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY
})(GoogleMap);
