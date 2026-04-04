import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'commercial-offices',
    title: 'Commercial Offices',
    tagline: 'Consistent. Documented. Zero disruption.',
    description:
      'Office cleaning should happen invisibly. Your team arrives to a clean workplace — no evidence of the process, just the result. Keystone delivers structured programs with consistent teams, signed completion logs, and QA reporting, so you\'re not managing the cleaner on top of everything else.',
    points: [
      'Daily, nightly, and periodic programs available',
      'Consistent team assigned to your site — no strangers',
      'Signed completion logs after every visit',
      'Formal QA inspection reporting',
      'Consumables management included where required',
    ],
  },
  {
    id: 'medical-healthcare',
    title: 'Medical & Healthcare',
    tagline: 'Infection control. Accreditation ready. No shortcuts.',
    description:
      'Medical environments don\'t have room for a cleaning failure. A missed protocol isn\'t just a quality issue — it\'s a patient safety risk and a compliance problem. Keystone uses TGA-listed disinfectants, trained staff, and documented procedures for every clinical environment, so your cleaning holds up to scrutiny.',
    points: [
      'TGA-listed disinfectants as standard — no substitutions',
      'Infection control protocols for high-risk areas',
      'Documented cleaning procedures per room type',
      'Accreditation-ready audit trails',
      'WHS-compliant chemical handling and SDS register',
    ],
  },
  {
    id: 'gyms-fitness',
    title: 'Gyms & Fitness',
    tagline: 'High-touch. High-frequency. Members notice.',
    description:
      'Cleanliness is part of the product in a gym. Members form an opinion the moment they walk in. Keystone builds high-frequency programs targeting the surfaces that matter most — equipment, change rooms, bathrooms, and floors — scheduled around your opening hours so it never disrupts operations.',
    points: [
      'High-frequency programs for high-traffic surfaces',
      'Scheduled around opening hours and peak usage',
      'TGA-listed disinfectants for equipment and surfaces',
      'Change room and bathroom deep-clean protocols',
      'Consistent standard your members will notice',
    ],
  },
  {
    id: 'strata-body-corporate',
    title: 'Strata & Body Corporate',
    tagline: 'One contact. Multiple sites. Full accountability.',
    description:
      'Managing cleaning across multiple buildings means coordinating schedules, communicating with committees, and maintaining consistent standards at every site. Keystone handles all of it under a single contract, with one account manager across every building in your portfolio.',
    points: [
      'Common areas, lifts, lobbies, and car parks',
      'Single point of contact for all sites',
      'Coordinated scheduling across buildings',
      'Regular reporting to body corporate committees',
      'Reactive cleaning available for incidents',
    ],
  },
  {
    id: 'retail-hospitality',
    title: 'Retail & Hospitality',
    tagline: 'Your space reflects your brand. We protect that.',
    description:
      'The standard of your retail or hospitality environment communicates something to every customer before a word is spoken. Keystone delivers daily or overnight programs that maintain your presentation standard and fit around your trading hours — no disruption, no excuses.',
    points: [
      'Daily and overnight scheduling around trading hours',
      'Floor care, fixtures, and customer-facing areas',
      'Glass, surfaces, and entry point programs',
      'Consistent teams who know your space',
      'Fast response to spills and reactive incidents',
    ],
  },
  {
    id: 'industrial-warehousing',
    title: 'Industrial & Warehousing',
    tagline: 'Safety-first. WHS-compliant. Fully documented.',
    description:
      'Industrial environments combine heavy cleaning demands with serious safety obligations. Slip hazards, chemical residues, and restricted zones all require a program that\'s built around safety first. Keystone delivers WHS-compliant industrial cleaning with pre-shift hazard assessments and full documentation.',
    points: [
      'Pre-shift hazard assessment on every visit',
      'WHS-compliant procedures for all industrial tasks',
      'Chemical and hazardous materials awareness',
      'Heavy-duty floor care and surface programs',
      'Full documentation for safety and compliance audits',
    ],
  },
]

export default function Services() {
  return (
    <div className="pt-20">

      {/* Header */}
      <section className="bg-[#0a2744] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#C9A84C]" />
            <span className="font-heading text-[#C9A84C] text-xs font-medium tracking-widest uppercase">
              Services
            </span>
          </div>
          <h1 className="font-heading font-semibold text-4xl lg:text-5xl max-w-3xl leading-tight mb-6">
            Purpose-built for your<br />
            <span className="text-[#C9A84C]">environment.</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            Every site is different. Every Keystone program is built around what your environment actually requires — not a template applied regardless of context.
          </p>
        </div>
        <div className="h-1 bg-[#C9A84C]" />
      </section>

      {/* Services list */}
      <section className="pt-6 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pb-12 ${
                  index < services.length - 1 ? 'border-b border-[#dddddd]' : ''
                }`}
              >
                <div>
                  <p className="font-heading text-[#C9A84C] font-medium text-xs tracking-widest uppercase mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="font-heading font-semibold text-2xl text-[#0a2744] mb-2">
                    {service.title}
                  </h2>
                  <p className="font-heading text-[#555555] text-sm font-medium mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-[#555555] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="bg-[#f5f5f5] p-6">
                  <h3 className="font-heading font-semibold text-xs text-[#0a2744] tracking-widest uppercase mb-4">
                    What's included
                  </h3>
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                        <span className="text-[#333333] text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="pt-4 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="gold-line mb-4" />
            <h2 className="font-heading font-semibold text-2xl text-[#0a2744]">
              Additional services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'End of Lease / Builders Clean',
              'Post-Event & Recovery Cleans',
              'Medical-Grade Disinfection',
              'Periodic Deep Cleaning',
            ].map((item) => (
              <div key={item} className="bg-white p-5 border-l-4 border-[#C9A84C]">
                <p className="font-heading font-semibold text-sm text-[#0a2744]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a2744] border-t-4 border-[#C9A84C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-heading font-semibold text-2xl text-white mb-2">
                Not sure which service fits your site?
              </h2>
              <p className="text-white/70 text-sm">
                Book a free site visit. We'll assess your facility and tell you exactly what's needed — no obligation.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#a8873a] text-[#0a2744] font-heading font-semibold px-7 py-3 text-sm transition-colors duration-200 whitespace-nowrap"
            >
              Book a Site Visit
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
