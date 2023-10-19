import "../index.css";
import "leaflet/dist/leaflet.css";
import React, {useContext} from "react";
import {Context} from "../App";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import appartement from "../json/appartements.json";

function Map() {
  const [locationVisible, setLocationVisible] = useContext(Context);

  function createIcon(id){
    return new Icon({
      iconUrl: require("../assets/images/mapPin.png"),
      iconSize: [40, 40],
      id: id
    });
  } 

  function filtreObjetMarker(map) {
    const markerTab=[];
    const appartVisible = [];
    map.eachLayer(function (marker) {
      if (typeof marker.getLatLng === "function") {
        if (map.getBounds().contains(marker.getLatLng())) {
          if(marker?.options?.icon?.options) {
            markerTab.push(marker);
          }
        }
      } 
    });

    // console.log("appartement.",markerTab)
    appartement.forEach(appart => {
      markerTab.forEach(marker => {
        if (marker.options.icon.options.id === appart.id) {
          appartVisible.push(appart);
        }
      })
    });
    console.log("Liste appart: ", appartVisible);
    // console.log(markerTab);
    setLocationVisible(appartVisible);
    console.log ("Locations:", locationVisible);
  }

  function ManageEvents() {
    const map = useMapEvents({
      zoomend() {
        filtreObjetMarker(map);
      },
      moveend() {
        filtreObjetMarker(map);
      },
    });
  }

  return (
    <MapContainer center={[43.3025, -0.3612]} zoom={9} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {appartement.map((item) => (
        <Marker key={item.id + "A"} position={item.coord} icon={createIcon(item.id)} >
          <Popup>{item.name}</Popup>
        </Marker>
      ))}
      <ManageEvents />
    </MapContainer>
  );
}

export default Map;
