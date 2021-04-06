import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "50vh",
    width: "80%",
  };
  const defaultCenter = {
    lat: 40.7664872304385,
    lng: -73.3085163526681,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyChQY4homTSW3vo4qhYHCxRLtkfCb1hOTQ">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};
export default MapContainer;
