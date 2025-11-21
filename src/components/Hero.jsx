import React from 'react'
import Spline from '@splinetool/react-spline'
import { Star, MapPin, Phone, BadgeCheck } from 'lucide-react'

const teal = '#0E7964'

function Rating({ value = 4.8, count = 120 }) {
  const fullStars = Math.floor(value)
  const half = value - fullStars >= 0.5
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <Star
      key={i}
      size={18}
      className={
        'drop-shadow-sm ' + (i < fullStars ? 'fill-yellow-400 text-yellow-400' : half && i === fullStars ? 'text-yellow-400' : 'text-gray-300')
      }
    />
  ))
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <div className="flex items-center -ml-0.5">{stars}</div>
      <span className="font-medium text-gray-800">{value.toFixed(1)}</span>
      <span className="text-gray-500">({count} Reviews)</span>
    </div>
  )
}

export default function Hero({ name, address, phone, status = 'Open Now' }) {
  const isOpen = status.toLowerCase().includes('open')
  return (
    <section className="relative w-full min-h-[260px] sm:min-h-[400px] mb-8">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to ensure legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-16 pb-6 sm:pb-10">
        {/* Breadcrumbs at the very top */}
        <nav className="text-xs sm:text-sm text-white/85 mb-3 sm:mb-4">
          <span className="cursor-pointer hover:text-white/95">Home</span>
          <span className="mx-2">›</span>
          <span className="cursor-pointer hover:text-white/95">California</span>
          <span className="mx-2">›</span>
          <span className="cursor-pointer hover:text-white/95">San Francisco</span>
          <span className="mx-2">›</span>
          <span className="text-white font-medium">{name}</span>
        </nav>

        {/* Hero card - tightened spacing on mobile so About is visible sooner */}
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 max-w-3xl">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-4xl font-semibold text-gray-900 tracking-tight truncate">{name}</h1>
              <div className="mt-2 sm:mt-3"><Rating /></div>

              {/* Contact row with status badge to the right of the phone number */}
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-700">
                <div className="inline-flex items-center gap-2 min-w-0"><MapPin size={18} className="text-gray-400" /><span className="truncate">{address}</span></div>
                <div className="hidden sm:block text-gray-300">|</div>
                <div className="inline-flex items-center gap-2 flex-wrap">
                  <a href={`tel:${phone}`} className="inline-flex items-center gap-2 text-[15px] hover:text-gray-900">
                    <Phone size={18} className="text-gray-400" />{phone}
                  </a>
                  <span
                    className={
                      'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ' +
                      (isOpen ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' : 'bg-rose-50 text-rose-700 ring-1 ring-rose-200')
                    }
                  >
                    <BadgeCheck size={14} /> {status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
