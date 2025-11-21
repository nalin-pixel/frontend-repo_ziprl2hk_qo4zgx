import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Create custom pin with optional pulsing animation (CSS-based)
function pulsingPin({ color = '#0E7964', border = '#ffffff', pulse = true } = {}) {
  const pulseStyle = pulse
    ? `<span class="absolute inline-block w-3 h-3 rounded-full" style="
          background:${color};
          opacity:.35;
          animation:pulse 1.8s cubic-bezier(0.4,0,0.2,1) infinite;
        "></span>`
    : ''

  return L.divIcon({
    className: '',
    html: `
      <style>
        @keyframes pulse { 0%{transform:scale(1);opacity:.45} 70%{transform:scale(2.25);opacity:0} 100%{transform:scale(2.25);opacity:0} }
      </style>
      <div style="position:relative; width: 18px; height: 18px;">
        ${pulseStyle}
        <span style="
          position:absolute; left:0; top:0;
          width: 18px; height: 18px; background: ${color};
          border: 2px solid ${border}; border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        "></span>
      </div>
    `,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10],
  })
}

// Simple dot for other clinics
function dotPin(color = '#9CA3AF', border = '#ffffff') {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        width: 14px; height: 14px; background: ${color};
        border: 2px solid ${border}; border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      "></div>
    `,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10],
  })
}

export default function TopMap({
  center = [37.7749, -122.4194],
  name = 'UrgentCare Now - San Francisco',
  address = '123 Market St, San Francisco, CA 94103',
  mobileOnly = true,
}) {
  const mainIcon = pulsingPin({ color: '#0E7964', pulse: true })
  const otherIcon = dotPin('#9CA3AF')
  const nearby = [
    [37.7769, -122.4174],
    [37.7732, -122.4215],
  ]

  return (
    <div className={mobileOnly ? 'lg:hidden' : ''}>
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
          {/* Main clinic (teal, pulsing) */}
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
    </div>
  )
}
