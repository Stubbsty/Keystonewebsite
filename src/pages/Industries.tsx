import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const industries = [
  {
    id: 'medical',
    title: 'Medical & Allied Health',
    subtitle: 'For practice managers and facility directors.',
    description:
      'Medical practices, dental clinics, physiotherapy studios, and allied health facilities operate under strict infection control requirements. A cleaning failure is not just a quality issue — it is a compliance and patient safety risk. Keystone builds programs that match your accreditation requirements, using TGA-listed disinfectants and documented procedures for every room type.',
    whyKeystone: [
      'Familiar with accreditation frameworks (RACGP, ACHS)',
      'TGA-listed disinfectants as standard — no substitutions',
      'Documented cleaning procedures per clinical area',
      'WHS-compliant chemical handling with full SDS register',
      'Audit-ready documentation on every visit',
    ],
    cta: 'Medical-grade cleaning for your practice',
  },
  {
    id: 'offices',
    title: 'Commercial Offices',
    subtitle: 'For facility managers and operations teams.',
    description:
      'Office cleaning should happen invisibly — the space is ready when your team arrives, the standard is consistent, and there are no surprises. Keystone manages the whole program: scheduling, staff, quality assurance, and reporting. You get a clean office and a documented record, without having to manage the process yourself.',
    whyKeystone: [
      'Consistent teams — same staff, familiar with your site',
      'Flexible scheduling around business hours',
      'Signed completion logs every visit',
      'Consumables management included where required',
      '30/60/90 day review program for ongoing alignment',
    ],
    cta: 'A cleaning program that runs itself',
  },
  {
    id: 'strata',
    title: 'Strata & Body Corporate',
    subtitle: 'For strata managers and body corporate committees.',
    description:
      'Managing the cleaning of common areas across multiple buildings requires coordination, clear communication, and a provider who understands the strata context. Keystone delivers a single point of contact for multiple sites, regular reporting to committees, and consistent standards across every building.',
    whyKeystone: [
      'One account manager for all sites in a portfolio',
      'Coordinated scheduling across multiple buildings',
      'Regular reporting to body corporate committees',
      'Transparent variation policy — no surprise costs',
      'Reactive cleaning for incidents available',
    ],
    cta: 'Managing your strata portfolio',
  },
  {
    id: 'gyms',
    title: 'Gyms & Fitness',
    subtitle: 'For gym owners and centre managers.',
    description:
      'Gyms carry higher surface contamination risk than most commercial environments. Members notice cleanliness — it directly affects retention and reputation. Keystone designs high-frequency programs targeting the highest-risk surfaces: equipment, change rooms, bathrooms, and floors.',
    whyKeystone: [
      'High-frequency programs for high-traffic surfaces',
      'Scheduling around opening hours and peak usage',
      'TGA-listed disinfectants for equipment and surfaces',
      'Change room and bathroom deep-clean protocols',
      'Visible cleanliness standards members notice',
    ],
    cta: 'Hygiene programs for fitness environments',
  },
  {
    id: 'retail',
    title: 'Retail & Hospitality',
    subtitle: 'For retail managers and venue operators.',
    description:
      'Customer-facing environments are judged instantly. The standard of your space communicates your brand before a single product is seen or word is spoken. Keystone delivers retail and hospitality cleaning that fits your trading hours, maintains your presentation standard, and never creates a reason for a customer to leave.',
    whyKeystone: [
      'Daily and overnight scheduling around trading hours',
      'Entrance, floor, fixture, and surface programs',
      'Consistent teams who know your space',
      'Fast response to spills and reactive incidents',
      'High-presentation standards as the baseline',
    ],
    cta: 'Presentation cleaning for customer spaces',
  },
  {
    id: 'industrial',
    title: 'Industrial & Warehousing',
    subtitle: 'For operations managers and HSE teams.',
    description:
      'Industrial environments combine heavy cleaning demands with serious safety requirements. Slip hazards, chemical residues, dust accumulation, and restricted access zones all require a cleaning program that is safety-first and fully documented. Keystone delivers WHS-compliant industrial cleaning with pre-shift hazard assessments and documented audit trails.',
    whyKeystone: [
      'Pre-shift hazard assessment on every visit',
      'WHS-compliant procedures for all industrial tasks',
      'Chemical and hazardous materials awareness',
      'Heavy-duty floor care and surface programs',
      'Full documentation for safety audits',
    ],
    cta: 'Safety-focused industrial cleaning',
  },
]

export default function Industries() {
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
              Industries
            </span>
          </div>
          <h1 className="font-heading font-semibold text-4xl lg:text-5xl max-w-3xl leading-tight mb-6">
            Built for your<br />
            <span className="text-[#C9A84C]">industry.</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            Different industries have different standards. Keystone builds programs around what your environment actually requires — not a generic template.
          </p>
        </div>
        <div className="h-1 bg-[#C9A84C]" />
      </section>

      {/* Industry grid nav */}
      <section className="bg-[#f5f5f5] border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="font-heading text-sm font-medium text-[#0a2744] border border-[#0a2744] px-4 py-2 hover:bg-[#0a2744] hover:text-white transition-colors duration-200"
              >
                {ind.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {industries.map((ind, index) => (
              <div
                key={ind.id}
                id={ind.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-24 ${
                  index < industries.length - 1 ? 'border-b border-[#dddddd]' : ''
                }`}
              >
                <div>
                  <p className="font-heading text-[#C9A84C] font-medium text-sm tracking-widest uppercase mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="font-heading font-bold text-3xl text-[#0a2744] mb-2">
                    {ind.title}
                  </h2>
                  <p className="text-[#C9A84C] font-heading font-medium text-sm mb-6">
                    {ind.subtitle}
                  </p>
                  <p className="text-[#555555] text-base leading-relaxed">
                    {ind.description}
                  </p>
                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#0a2744] hover:bg-[#0f3460] text-white font-heading font-semibold px-6 py-3 text-sm transition-colors duration-200"
                    >
                      {ind.cta}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] p-8 border-l-4 border-[#C9A84C]">
                  <h3 className="font-heading font-semibold text-sm text-[#0a2744] tracking-widest uppercase mb-6">
                    Why Keystone for {ind.title}
                  </h3>
                  <ul className="space-y-4">
                    {ind.whyKeystone.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
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

      {/* CTA */}
      <section className="bg-[#C9A84C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-bold text-3xl text-[#0a2744] mb-3">
                Don't see your industry listed?
              </h2>
              <p className="text-[#0a2744]/70 text-lg">
                Get in touch. If we can service it safely and to standard, we will.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#0a2744] hover:bg-[#0f3460] text-white font-heading font-semibold px-8 py-4 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
