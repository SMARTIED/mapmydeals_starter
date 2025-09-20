import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dummyDeals from "../data/dummyDeals";

export default function MapView() {
  const center = [-33.9249, 18.4241];

  return (
    <div className="h-[70vh]">
      <MapContainer center={center} zoom={13} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="http://osm.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dummyDeals.map((deal) => (
          <Marker key={deal.id} position={deal.coords}>
            <Popup>
              <strong>{deal.title}</strong>
              <br />R {deal.price} — {deal.store}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
