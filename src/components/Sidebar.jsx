import React, { useState } from 'react'
import { Phone, Globe, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

const teal = '#0E7964'

function HoursAccordion() {
  const [open, setOpen] = useState(false)
  const todayIndex = new Date().getDay() // 0-6 Sun-Sat
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const hours = {
    Sun: '9:00 AM - 5:00 PM',
    Mon: '8:00 AM - 8:00 PM',
    Tue: '8:00 AM - 8:00 PM',
    Wed: '8:00 AM - 8:00 PM',
    Thu: '8:00 AM - 8:00 PM',
    Fri: '8:00 AM - 8:00 PM',
    Sat: '9:00 AM - 6:00 PM',
  }
  const today = days[todayIndex]

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4">
        <div className="text-left">
          <div className="text-sm text-gray-500">Today</div>
          <div className="text-base font-semibold text-gray-900">{today} — {hours[today]}</div>
        </div>
        {open ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {open && (
        <div className="px-4 pb-4">
          {days.map((d) => (
            <div key={d} className="flex items-center justify-between py-2 text-sm">
              <span className={d===today ? 'font-medium text-gray-900' : 'text-gray-600'}>{d}</span>
              <span className="text-gray-700">{hours[d]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function TelehealthCard() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="text-xs uppercase tracking-wide text-gray-500">Can't wait?</div>
      <div className="mt-1 text-xl font-semibold text-gray-900">See a doctor online in minutes</div>
      <p className="mt-2 text-sm text-gray-600">Board-certified clinicians 24/7. Insurance accepted. Powered by PlushCare.</p>
      <a
        href="#telehealth"
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-white font-medium"
        style={{ background: `linear-gradient(135deg, ${teal}, #11a386)` }}
      >Start Telehealth Visit</a>
    </div>
  )
}

export default function Sidebar({ phone="(415) 555-0123", website="#", mapSrc }) {
  return (
    <aside className="lg:sticky lg:top-6 space-y-5">
      {/* Map card */}
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <div className="aspect-[4/3]">
          <iframe
            title="map"
            src={mapSrc || 'https://www.google.com/maps?q=Urgent+Care+San+Francisco&output=embed'}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="p-4">
          <a
            href="https://maps.google.com/?q=Urgent+Care+San+Francisco"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-white font-medium"
            style={{ background: `linear-gradient(135deg, ${teal}, #11a386)` }}
          >
            Get Directions <ExternalLink size={16} className="opacity-90" />
          </a>
        </div>
      </div>

      {/* Telehealth card */}
      <TelehealthCard />

      {/* Hours */}
      <HoursAccordion />

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 space-y-3">
        <a href={`tel:${phone}`} className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-gray-900 font-medium border border-gray-200 hover:bg-gray-50">
          <Phone size={18} /> Call Now
        </a>
        <a href={website} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-white font-medium" style={{ background: `linear-gradient(135deg, ${teal}, #11a386)` }}>
          <Globe size={18} /> Visit Website
        </a>
      </div>
    </aside>
  )
}
