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
    <section className="relative w-full min-h-[360px] sm:min-h-[420px] mb-10">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to ensure legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Breadcrumbs */}
        <nav className="text-sm text-white/80 mb-4">
          <span className="cursor-pointer hover:text-white/95">Home</span>
          <span className="mx-2">›</span>
          <span className="cursor-pointer hover:text-white/95">California</span>
          <span className="mx-2">›</span>
          <span className="cursor-pointer hover:text-white/95">San Francisco</span>
          <span className="mx-2">›</span>
          <span className="text-white font-medium">{name}</span>
        </nav>

        {/* Hero card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-3xl">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">{name}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span
                  className={
                    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ' +
                    (isOpen ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' : 'bg-rose-50 text-rose-700 ring-1 ring-rose-200')
                  }
                >
                  <BadgeCheck size={14} /> {status}
                </span>
                <Rating />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-gray-700">
                <div className="inline-flex items-center gap-2"><MapPin size={18} className="text-gray-400" />{address}</div>
                <div className="hidden sm:block text-gray-300">|</div>
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 text-[15px] hover:text-gray-900">
                  <Phone size={18} className="text-gray-400" />{phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
