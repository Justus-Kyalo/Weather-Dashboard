import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllCoordinates } from "../../Reducers/coordinates/coordinatesSlice";


const LocationMap = () => {
  const coordinates = useSelector(selectAllCoordinates);
  const position = { lat: coordinates[0].lat, lng: coordinates[0].lon };
  
  return (
    <APIProvider apiKey="AIzaSyBFDTdrEZ5Jvr2kb8PQuLjVZ7M0-ouS9Sk">
      <div style={{ height: "100%", padding: "0rem 1rem" }}>
        <Map
          zoom={7}
          center={position}
          
           style={{ borderRadius: "2rem"}}
           

        ></Map>
      </div>
    </APIProvider>
  );
};

export default LocationMap;
