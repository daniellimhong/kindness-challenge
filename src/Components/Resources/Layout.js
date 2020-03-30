import React, { Component, useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
<<<<<<< HEAD
import Geocode from 'react-geocode';
import styled from "styled-components";
=======
>>>>>>> 827e47ab9f4dad9404043acaa374c3c39beb3762

const mapStyle = {
  height: "400px",
  width: "100vw"
};

const containerStyle = {
  position: "relative"
};

const GoogleMap = props => {
<<<<<<< HEAD
  const { google, filteredResource, resources, category } = props;
  const {REACT_APP_GOOGLE_KEY} = process.env;

  Geocode.setApiKey(REACT_APP_GOOGLE_KEY);

  // const [coordinates, setCoordinates] = useState([null, null])
  const [promises, setPromises] = useState([]);


  // useEffect(() => {
  //   let effectMarkers = handlePromise(promises);
  //   console.log(effectMarkers);
  // }, [])


  //* mapped area code
  let mapLat;
  let mapLng;

  // const handlePromise = async (arr) => {
  //   return await Promise.all(arr).then(res => res);
  // }

  const mappedMarkers = resources.map( async resource => {
    const { address, id } = resource;
    console.log(address);

    await Geocode.fromAddress(address)
    .then(res => {
      const { lat, lng } = res.results[0].geometry.location;
      mapLat = lat;
      mapLng = lng;
      console.log(mapLat)
    })
    .catch(error => {
      console.log(error)
    })

    // console.log(mapLat)

    return <Marker 
      key={id} 
      position={{ lat: mapLat, lng: mapLng }}
      />
  })
  

=======
  const { google } = props;
>>>>>>> 827e47ab9f4dad9404043acaa374c3c39beb3762
  return (
    <Map
      google={google}
      zoom={11}
      containerStyle={containerStyle}
      style={mapStyle}
      minZoom={5}
      maxZoom={15}
      initialCenter={{ lat: 40.712772, lng: -74.006058 }}
      disableDefaultUI={true}
    >
<<<<<<< HEAD
      {/* <Marker position={{ lat: 40.712772, lng: -74.006058 }} />
      <Marker position={{ lat: 40.6912654, lng: -73.982912 }} /> */}

      {/* {category === 'all' 
        ? resources.map(resource => {
          const { address } = resource;
          fetch(`https://us1.locationiq.com/v1/search.php?key=${REACT_APP_LOCATIONIQ_KEY}&q=${address}format=json`)
          .then()
          return <Marker />
        })

        :
    
        } */}

      {/* {actuallyMappedMarkers} */}
      

=======
      <Marker position={{ lat: 40.712772, lng: -74.006058 }} />
>>>>>>> 827e47ab9f4dad9404043acaa374c3c39beb3762
    </Map>
  );
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY
})(GoogleMap);
