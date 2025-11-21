import React from 'react'
import { CheckCircle, Shield, Info, Star } from 'lucide-react'

const teal = '#0E7964'

function Section({ title, children, className='' }) {
  return (
    <section className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 ${className}`}>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </section>
  )
}

function ServicesGrid() {
  const services = ['On-site Lab Testing','X-rays','Rapid Strep','COVID-19 Testing','Flu Shots','Fracture Care','Physicals','Vaccinations']
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {services.map((s, i) => (
        <div key={i} className="flex items-start gap-3 min-w-0">
          <CheckCircle className="text-emerald-500" size={20} />
          <span className="text-gray-800">{s}</span>
        </div>
      ))}
    </div>
  )
}

function SymptomsTags() {
  const symptoms = ['Flu','Sprains','Cuts','Allergies','Rashes','Sore Throat','Ear Pain','UTI','Fever','Cough']
  return (
    <div className="flex flex-wrap gap-2">
      {symptoms.map((t) => (
        <span key={t} className="px-3 py-1.5 rounded-full text-sm bg-gray-100 text-gray-800 border border-gray-200">{t}</span>
      ))}
    </div>
  )
}

function InsuranceGrid() {
  const logos = Array.from({ length: 8 })
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {logos.map((_, i) => (
          <div key={i} className="aspect-[3/2] bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 text-sm">Logo</div>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-600">Self-pay and Credit Cards accepted.</p>
    </div>
  )
}

function Gallery() {
  const imgs = [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580281658629-47d33b38fa47?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571772805064-2074845b320d?q=80&w=1200&auto=format&fit=crop'
  ]
  return (
    <div className="-mx-6 sm:mx-0">
      <div className="overflow-x-auto px-1 sm:px-0">
        <div className="flex gap-4 min-w-max pr-2 snap-x snap-mandatory">
          {imgs.map((src, i) => (
            <img key={i} src={src} alt="Clinic" className="h-36 sm:h-48 w-64 sm:w-auto max-w-none rounded-xl object-cover snap-start shrink-0" />
          ))}
        </div>
      </div>
    </div>
  )
}

function Reviews() {
  const data = [
    { name: 'Alex M.', rating: 5, text: 'Quick check-in and friendly staff. In and out in 30 minutes.' },
    { name: 'Priya S.', rating: 5, text: 'Doctor was thorough and kind. Clean facility.' },
    { name: 'Jordan K.', rating: 4, text: 'Great care, slight wait but worth it.' },
  ]
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold text-gray-900">4.8</div>
          <div className="flex -ml-1">
            {Array.from({length:5}).map((_,i)=> (<Star key={i} className="text-yellow-400 fill-yellow-400" size={18}/>))}
          </div>
          <div className="text-sm text-gray-600">120 reviews</div>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2 text-xs text-gray-600">
          <div>5★ 70%</div>
          <div>4★ 20%</div>
          <div>3★ 6%</div>
          <div>2★ 3%</div>
          <div>1★ 1%</div>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {data.map((r, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium text-gray-900">{r.name}</div>
              <div className="flex -ml-1">{Array.from({length:r.rating}).map((_,i)=> (<Star key={i} className="text-yellow-400 fill-yellow-400" size={16}/>))}</div>
            </div>
            <p className="text-gray-700 text-sm">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function FAQ() {
  const items = [
    {q:'Do I need an appointment?', a:'Walk-ins are welcome. Appointments available for faster service.'},
    {q:'Do you offer COVID-19 testing?', a:'Yes, rapid antigen and PCR testing available.'},
    {q:'Which insurances do you accept?', a:'Most major plans accepted. See list above.'},
    {q:'Is parking available?', a:'Free parking in the adjacent lot.'},
  ]
  const [open, setOpen] = React.useState(null)
  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-white shadow-sm">
      {items.map((it, idx)=> (
        <div key={idx}>
          <button onClick={()=> setOpen(open===idx? null: idx)} className="w-full text-left px-6 py-4 flex items-center justify-between">
            <span className="font-medium text-gray-900">{it.q}</span>
            <span className="text-gray-400">{open===idx? '-' : '+'}</span>
          </button>
          {open===idx && <div className="px-6 pb-4 text-gray-700">{it.a}</div>}
        </div>
      ))}
    </div>
  )
}

function Nearby() {
  const places = [
    {name:'QuickCare Mission', dist:'0.6 mi'},
    {name:'CityMed Soma', dist:'1.1 mi'},
    {name:'Bay Urgent Care', dist:'1.9 mi'},
    {name:'CareNow Sunset', dist:'2.4 mi'},
  ]
  return (
    <div className="-mx-6 sm:mx-0">
      <div className="overflow-x-auto px-1 sm:px-0">
        <div className="flex gap-4 min-w-max snap-x snap-mandatory pr-2">
          {places.map((p, i)=> (
            <div key={i} className="min-w-[220px] bg-white rounded-2xl border border-gray-100 shadow-sm p-4 snap-start shrink-0">
              <div className="h-28 rounded-lg bg-gray-100 mb-3" />
              <div className="font-medium text-gray-900">{p.name}</div>
              <div className="text-sm text-gray-600">{p.dist} away</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function MainContent() {
  return (
    <div className="space-y-8 min-w-0">
      {/* About */}
      <Section title="About">
        <p className="text-gray-700 leading-relaxed">UrgentCare Now provides convenient, same-day care for non-life-threatening illnesses and injuries. Our board-certified providers offer a full range of services with on-site diagnostics to get you treated quickly and safely.</p>
      </Section>

      {/* Services & Symptoms */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Section title="Services">
          <ServicesGrid />
        </Section>
        <Section title="Symptoms Treated">
          <SymptomsTags />
        </Section>
      </div>

      {/* Insurance */}
      <Section title="Accepted Insurance">
        <InsuranceGrid />
      </Section>

      {/* Gallery */}
      <Section title="Photos">
        <Gallery />
      </Section>

      {/* Reviews */}
      <Section title="Reviews">
        <Reviews />
      </Section>

      {/* SEO/FAQ */}
      <Section title="Frequently Asked Questions">
        <FAQ />
      </Section>

      {/* Nearby alternatives */}
      <Section title="Other Clinics Nearby">
        <Nearby />
      </Section>

      {/* Hidden SEO schema placeholder */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        'name': 'UrgentCare Now',
        'url': 'https://example.com/urgentcare-now',
      }) }} />
    </div>
  )
}
