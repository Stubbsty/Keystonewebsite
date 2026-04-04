import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const industries = [
  {
    id: 'medical',
    title: 'Medical & Allied Health',
    subtitle: 'For practice managers and facility directors.',
    description:
      'A cleaning failure in a medical environment isn\'t a minor inconvenience. It\'s a patient safety risk, a compliance issue, and a liability. Practice managers need a cleaner who understands that — one who uses the right products, follows documented protocols, and can produce the records when accreditation comes around.',
    whyKeystone: [
      'TGA-listed disinfectants as standard — no substitutions, no shortcuts',
      'Documented cleaning procedures specific to each clinical area',
      'Accreditation-ready audit trails after every visit',
      'WHS-compliant chemical handling with full SDS register',
      'Staff who understand infection control — not just cleaning',
    ],
    cta: 'Talk to us about your practice',
  },
  {
    id: 'offices',
    title: 'Commercial Offices',
    subtitle: 'For facility managers and operations teams.',
    description:
      'Office cleaning should require zero management from you. The space is ready when your team arrives, the standard is consistent, and there\'s someone to call if something isn\'t right. Most facility managers have spent too much time managing cleaners who were supposed to manage themselves. Keystone is built to take that off your plate entirely.',
    whyKeystone: [
      'Consistent teams — same staff every visit, familiar with your site',
      'Signed completion logs so you know the job was done',
      'Flexible scheduling around your business hours',
      'One account manager who knows your building and your standards',
      '30/60/90 day review program to keep standards on track',
    ],
    cta: 'Talk to us about your office',
  },
  {
    id: 'gyms',
    title: 'Gyms & Fitness',
    subtitle: 'For gym owners and centre managers.',
    description:
      'Members make a judgement about your gym within seconds of walking in. Cleanliness is part of the product — it affects retention, reviews, and referrals. High-touch surfaces, change rooms, and bathrooms in a gym carry real infection risk. Keystone builds programs that address that risk properly, scheduled around your hours so it never interrupts your members.',
    whyKeystone: [
      'High-frequency programs targeting equipment, change rooms, and bathrooms',
      'TGA-listed disinfectants for high-touch and high-risk surfaces',
      'Scheduling built around your opening hours and peak periods',
      'Consistent teams who know your facility and your standards',
      'The cleanliness standard your members expect and tell others about',
    ],
    cta: 'Talk to us about your gym',
  },
  {
    id: 'strata',
    title: 'Strata & Body Corporate',
    subtitle: 'For strata managers and body corporate committees.',
    description:
      'Managing cleaning across a strata portfolio means coordinating multiple buildings, reporting to committees, and maintaining consistent standards at every site. One relationship that doesn\'t work creates problems across the whole portfolio. Keystone gives strata managers a single point of accountability — one contract, one contact, consistent results across every building.',
    whyKeystone: [
      'One account manager for every site in your portfolio',
      'Coordinated scheduling across multiple buildings',
      'Regular reporting to body corporate committees',
      'Transparent variation policy — nothing happens without written approval',
      'Reactive cleaning for incidents available when needed',
    ],
    cta: 'Talk to us about your portfolio',
  },
  {
    id: 'retail',
    title: 'Retail & Hospitality',
    subtitle: 'For retail managers and venue operators.',
    description:
      'Every customer who walks into your space forms an impression before they interact with your product or your team. The standard of your environment communicates something about your brand. Keystone delivers retail and hospitality cleaning that maintains that standard — scheduled around trading hours, consistent in execution, and responsive when something needs attention.',
    whyKeystone: [
      'Daily and overnight programs scheduled around trading hours',
      'Consistent teams who know your space and your standards',
      'Floor care, surfaces, fixtures, and customer-facing areas',
      'Fast response to spills and reactive cleaning needs',
      'The presentation standard your customers notice',
    ],
    cta: 'Talk to us about your venue',
  },
  {
    id: 'industrial',
    title: 'Industrial & Warehousing',
    subtitle: 'For operations managers and HSE teams.',
    description:
      'Industrial cleaning is a safety issue before it\'s a cleanliness issue. Slip hazards, chemical residues, dust accumulation, and restricted access zones all require a program that\'s built around WHS compliance — not just cleaning. Keystone delivers documented, safety-first industrial programs with pre-shift hazard assessments and full audit trails.',
    whyKeystone: [
      'Pre-shift hazard assessment on every visit as standard',
      'WHS-compliant procedures for all industrial cleaning tasks',
      'Chemical and hazardous materials handling awareness',
      'Heavy-duty floor care and surface programs',
      'Full documentation for safety audits and compliance reviews',
    ],
    cta: 'Talk to us about your facility',
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
            Different industries have different standards, different risks, and different consequences when cleaning fails. Keystone builds programs around what your environment actually requires.
          </p>
        </div>
        <div className="h-1 bg-[#C9A84C]" />
      </section>

      {/* Industry nav */}
      <section className="bg-[#f5f5f5] border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="font-heading text-xs font-medium text-[#0a2744] border border-[#0a2744] px-4 py-2 hover:bg-[#0a2744] hover:text-white transition-colors duration-200"
              >
                {ind.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="pt-6 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((ind, index) => (
              <div
                key={ind.id}
                id={ind.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pb-16 ${
                  index < industries.length - 1 ? 'border-b border-[#dddddd]' : ''
                }`}
              >
                <div>
                  <p className="font-heading text-[#C9A84C] font-medium text-xs tracking-widest uppercase mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="font-heading font-semibold text-2xl text-[#0a2744] mb-1">
                    {ind.title}
                  </h2>
                  <p className="text-[#C9A84C] font-heading font-medium text-xs tracking-wide uppercase mb-5">
                    {ind.subtitle}
                  </p>
                  <p className="text-[#555555] text-sm leading-relaxed mb-6">
                    {ind.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#0a2744] hover:bg-[#0f3460] text-white font-heading font-semibold px-6 py-3 text-xs transition-colors duration-200"
                  >
                    {ind.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="bg-[#f5f5f5] p-6 border-l-4 border-[#C9A84C]">
                  <h3 className="font-heading font-semibold text-xs text-[#0a2744] tracking-widest uppercase mb-5">
                    Why Keystone for {ind.title}
                  </h3>
                  <ul className="space-y-3">
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
      <section className="bg-[#0a2744] border-t-4 border-[#C9A84C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-heading font-semibold text-2xl text-white mb-2">
                Don't see your industry listed?
              </h2>
              <p className="text-white/70 text-sm">
                Get in touch. If we can service it safely and to standard, we will.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#a8873a] text-[#0a2744] font-heading font-semibold px-7 py-3 text-sm transition-colors duration-200 whitespace-nowrap"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
