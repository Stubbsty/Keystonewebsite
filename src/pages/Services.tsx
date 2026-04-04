import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'commercial-offices',
    title: 'Commercial Offices',
    tagline: 'Consistent. Documented. Zero disruption.',
    description:
      'Professional workplaces need cleaning that happens without being noticed — and evidence that it was done right. Keystone delivers structured programs with signed completion logs, QA reporting, and consistent teams who know your site.',
    points: [
      'Daily, nightly, and periodic programs available',
      'Consistent team assigned to your site',
      'Signed completion logs after every visit',
      'Formal QA inspection reporting',
      'Consumables management included where required',
    ],
  },
  {
    id: 'medical-healthcare',
    title: 'Medical & Healthcare',
    tagline: 'Accreditation-ready. Infection control compliant.',
    description:
      'Medical environments demand more than clean — they demand documented, protocol-driven cleaning that holds up to accreditation scrutiny. Keystone uses TGA-listed disinfectants, trained staff, and documented procedures for every healthcare environment.',
    points: [
      'TGA-listed disinfectants as standard',
      'Infection control protocols for high-risk areas',
      'Documented cleaning procedures per room type',
      'Accreditation-ready audit trails',
      'WHS-compliant chemical handling and storage',
    ],
  },
  {
    id: 'strata-body-corporate',
    title: 'Strata & Body Corporate',
    tagline: 'One relationship. Multiple sites. Full accountability.',
    description:
      'Strata managers need a cleaning partner who can coordinate across multiple buildings, communicate clearly with body corporate committees, and maintain consistent standards across every common area — all under a single accountable contract.',
    points: [
      'Common areas, lifts, lobbies, and car parks',
      'Single point of contact for multiple sites',
      'Coordinated scheduling across buildings',
      'Regular reporting to body corporate committees',
      'Reactive cleaning available for incidents',
    ],
  },
  {
    id: 'gyms-fitness',
    title: 'Gyms & Fitness',
    tagline: 'High-frequency. High-touch. Hygiene-first.',
    description:
      'Gyms carry higher infection risk than most commercial environments. Keystone builds high-frequency cleaning programs targeting equipment surfaces, change rooms, bathrooms, and flooring — maintaining the hygiene standard members expect.',
    points: [
      'High-touch surface disinfection programs',
      'Change room and bathroom deep-clean protocols',
      'Equipment wipe-down and floor care programs',
      'Scheduling around opening hours and peak times',
      'TGA-listed products for high-risk surfaces',
    ],
  },
  {
    id: 'retail-hospitality',
    title: 'Retail & Hospitality',
    tagline: 'Customer-facing. Brand-reflecting.',
    description:
      'The standard of your retail space or hospitality venue is visible to every customer who walks through the door. Keystone delivers daily or overnight programs that maintain the presentation your brand demands, without disrupting trading hours.',
    points: [
      'Daily and overnight programs available',
      'Scheduled around trading hours',
      'Floor care, fixtures, and customer areas',
      'Glass, surfaces, and entry points',
      'Consistent teams — same staff, same standards',
    ],
  },
  {
    id: 'industrial-warehousing',
    title: 'Industrial & Warehousing',
    tagline: 'Heavy-duty. Safety-focused. WHS-compliant.',
    description:
      'Industrial and warehouse environments require cleaning programs built around safety — slip hazards, chemical spills, dust accumulation, and access restrictions. Keystone delivers documented, WHS-compliant programs for large-format facilities.',
    points: [
      'Pre-shift hazard assessment as standard',
      'WHS-compliant procedures and documentation',
      'Chemical and materials handling protocols',
      'Floor care and heavy-duty cleaning capability',
      'Documented audit trails for compliance',
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
            Every environment is different. Every Keystone program is built around the specific requirements of your site — not a one-size-fits-all template.
          </p>
        </div>
        <div className="h-1 bg-[#C9A84C]" />
      </section>

      {/* Services list */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-16 ${
                  index < services.length - 1 ? 'border-b border-[#dddddd]' : ''
                }`}
              >
                <div>
                  <p className="font-heading text-[#C9A84C] font-medium text-sm tracking-widest uppercase mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="font-heading font-bold text-3xl text-[#0a2744] mb-3">
                    {service.title}
                  </h2>
                  <p className="font-heading text-[#555555] text-lg font-medium mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-[#555555] text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="bg-[#f5f5f5] p-8">
                  <h3 className="font-heading font-semibold text-sm text-[#0a2744] tracking-widest uppercase mb-6">
                    What's included
                  </h3>
                  <ul className="space-y-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
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

      {/* Also offer */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="gold-line mb-6" />
            <h2 className="font-heading font-bold text-3xl text-[#0a2744]">
              Additional services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'End of Lease / Builders Clean',
              'Post-Event & Recovery Cleans',
              'Medical-Grade Disinfection',
              'Periodic Deep Cleaning',
            ].map((item) => (
              <div key={item} className="bg-white p-6 border-l-4 border-[#C9A84C]">
                <p className="font-heading font-semibold text-sm text-[#0a2744]">{item}</p>
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
                Not sure which service fits your site?
              </h2>
              <p className="text-[#0a2744]/70 text-lg">
                Book a free site visit and we'll assess your facility and recommend the right program.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#0a2744] hover:bg-[#0f3460] text-white font-heading font-semibold px-8 py-4 transition-colors duration-200"
            >
              Book a Site Visit
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
