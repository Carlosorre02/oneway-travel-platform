import { MapContainer, TileLayer, Polyline, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { Star } from 'lucide-react';

function numberedMarker(stop) {
  return L.divIcon({
    className: 'numbered-marker',
    html: `<span>${stop.id}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });
}

export default function InteractiveMap({ stops }) {
  const positions = stops.map((stop) => [stop.lat, stop.lng]);

  return (
    <div className="map-shell">
      <MapContainer center={[41.8957, 12.4778]} zoom={14} scrollWheelZoom className="map-container">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Polyline positions={positions} pathOptions={{ color: '#ff7a18', weight: 6, opacity: 0.95, lineJoin: 'round' }} />
        <Polyline positions={positions} pathOptions={{ color: '#ffd0a4', weight: 2, opacity: 0.9 }} />
        {stops.map((stop) => (
          <Marker key={stop.id} position={[stop.lat, stop.lng]} icon={numberedMarker(stop)}>
            <Tooltip direction="top" offset={[0, -18]} opacity={1}>{stop.name}</Tooltip>
            <Popup className="stop-popup" maxWidth={320}>
              <article>
                <img src={stop.image} alt={stop.name} />
                <div className="popup-content">
                  <span className="popup-kicker">Tappa {stop.id} · {stop.time}</span>
                  <h3>{stop.name}</h3>
                  <p className="popup-category">{stop.category}</p>
                  <p>{stop.description}</p>
                  <div className="popup-meta">
                    <span><Star size={15} fill="currentColor" /> {stop.rating}</span>
                    <span>{stop.price}</span>
                  </div>
                </div>
              </article>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="map-overlay top">Mappa live · Roma centro</div>
      <div className="map-overlay bottom">Clicca sui marker per dettagli, rating e consigli</div>
    </div>
  );
}
