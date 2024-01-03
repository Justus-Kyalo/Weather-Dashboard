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
    <APIProvider apiKey="AIzaSyBB4BnYFDObEhUZMIIRT29QvHNqYjk68pQ">
      <div style={{ height: "100%" }}>
        <Map zoom={7} center={position} mapId="6aa074c361cf4ee0"></Map>
      </div>
    </APIProvider>
  );
};

export default LocationMap;
