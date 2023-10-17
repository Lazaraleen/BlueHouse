import "../index.css";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import {Marker} from "react-leaflet";
import {Popup} from "react-leaflet";
import {Icon} from "leaflet";

function Map() {
    const customIcon = new Icon({
        iconUrl: require("../assets/images/mapPin.png"),
        iconSize: [40, 40]
    })
  return (
    <MapContainer center={[43.3025, -0.3612]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[43.30254481174815, -0.36121328213112874]} icon={customIcon}>
        <Popup>
          TEST
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
