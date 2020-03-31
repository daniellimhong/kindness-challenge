import React, { Component, useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Geocode from "react-geocode";
import styled from "styled-components";
import { resourcesData } from "../../data";
const mapStyle = {
  height: "400px",
  width: "100vw"
};
const containerStyle = {
  position: "relative"
};
const GoogleMap = props => {
  const { google, filteredResources, resources, category } = props;

  const { REACT_APP_GOOGLE_KEY } = process.env;
  Geocode.setApiKey(REACT_APP_GOOGLE_KEY);

  const [markers, setMarkers] = useState([]);

  let mapLat;
  let mapLng;

  useEffect(() => {
    const promiseCoordinates = async () => {
      //! Render Markers based on Category
      if (category === "all") {
        return setMarkers(
          await Promise.all(
            resources.map(async resource => {
              const { address, id } = resource;
              console.log(address);
              await Geocode.fromAddress(address)
                .then(res => {
                  const { lat, lng } = res.results[0].geometry.location;
                  mapLat = lat;
                  mapLng = lng;
                  console.log(mapLat);
                })
                .catch(error => {
                  console.log(error);
                });
              return <Marker key={id} position={{ lat: mapLat, lng: mapLng }} />;
            })
          )
        );
      } else {
        return setMarkers(
          await Promise.all(
            filteredResources.map(async resource => {
              const { address, id } = resource;
              console.log(address);
              await Geocode.fromAddress(address)
                .then(res => {
                  const { lat, lng } = res.results[0].geometry.location;
                  mapLat = lat;
                  mapLng = lng;
                  console.log(mapLat);
                })
                .catch(error => {
                  console.log(error);
                });
              return <Marker key={id} position={{ lat: mapLat, lng: mapLng }} />;
            })
          )
        );
      }

    };
    promiseCoordinates();
  }, [category, resources]);

  console.log("mappedMarkers", markers);
  return (
    <Map
      google={google}
      zoom={13}
      containerStyle={containerStyle}
      style={mapStyle}
      minZoom={5}
      maxZoom={15}
      initialCenter={{ lat: 40.712772, lng: -74.006058 }}
      disableDefaultUI={true}
    >
      {markers}
    </Map>
  );
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY
})(GoogleMap);
