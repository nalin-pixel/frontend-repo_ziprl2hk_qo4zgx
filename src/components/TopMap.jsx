import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Create simple colored pin icons using divIcon for easy color differentiation
function coloredPin(color = '#0E7964', border = '#ffffff') {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        width: 18px;
        height: 18px;
        background: ${color};
        border: 2px solid ${border};
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      "></div>
    `,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10],
  })
}

export default function TopMap({
  center = [37.7749, -122.4194],
  name = 'UrgentCare Now - San Francisco',
  address = '123 Market St, San Francisco, CA 94103',
}) {
  const mainIcon = coloredPin('#0E7964')
  const otherIcon = coloredPin('#9CA3AF')
  const nearby = [
    [37.7769, -122.4174],
    [37.7732, -122.4215],
  ]

  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: 220 }}>
      <MapContainer center={center} zoom={16} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Other nearby clinics (grey) */}
        {nearby.map((pos, idx) => (
          <Marker position={pos} key={idx} icon={otherIcon}>
            <Popup>Nearby Clinic</Popup>
          </Marker>
        ))}
        {/* Main clinic (teal) */}
        <Marker position={center} icon={mainIcon}>
          <Popup>
            <div className="text-sm">
              <div className="font-semibold">{name}</div>
              <div className="text-gray-600">{address}</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
