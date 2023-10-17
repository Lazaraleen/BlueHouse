import "../index.css";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import {Marker} from "react-leaflet";
import {Popup} from "react-leaflet";
import {Icon} from "leaflet";
import appartement from '../json/appartements.json';

function Map() {
    const customIcon = new Icon({
        iconUrl: require("../assets/images/mapPin.png"),
        iconSize: [40, 40]
    })
  return (
    <MapContainer center={[43.3025, -0.3612]} zoom={9} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {appartement.map((item) => (
        <Marker key={item.id+"A"} position={item.coord} icon={customIcon}>
          <Popup>
          {item.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
