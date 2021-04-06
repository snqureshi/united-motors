import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "50vh",
    width: "80%",
  };
  const defaultCenter = {
    lat: 40.7664872304385,
    lng: -73.3085163526681,
  };

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 41.3954,
        lng: 2.162,
      },
    },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyChQY4homTSW3vo4qhYHCxRLtkfCb1hOTQ">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {locations.map((item) => {
          return <Marker key={item.name} position={item.location} />;
        })}
      </GoogleMap>
    </LoadScript>
  );
};
export default MapContainer;
