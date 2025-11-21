import React from 'react'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

const teal = '#0E7964'

export default function App() {
  const clinic = {
    name: 'UrgentCare Now - San Francisco',
    address: '123 Market St, San Francisco, CA 94103',
    phone: '(415) 555-0123',
    website: '#',
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Hero name={clinic.name} address={clinic.address} phone={clinic.phone} status="Open Now" />

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left 2/3 */}
          <div className="lg:col-span-2">
            <MainContent />
          </div>

          {/* Right 1/3 sticky */}
          <div>
            <Sidebar phone={clinic.phone} website={clinic.website} />
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 lg:hidden z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-safe">
          <div className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-t border-gray-200 rounded-t-2xl shadow-2xl p-3 grid grid-cols-2 gap-3">
            <a href={`tel:${clinic.phone}`} className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-medium text-gray-900 border border-gray-200">Call Now</a>
            <a href="https://maps.google.com/?q=Urgent+Care+San+Francisco" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-medium text-white" style={{ background: `linear-gradient(135deg, ${teal}, #11a386)` }}>Get Directions</a>
          </div>
        </div>
      </div>
    </div>
  )
}
