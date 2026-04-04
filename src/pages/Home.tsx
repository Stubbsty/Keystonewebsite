import { Link } from 'react-router-dom'
import { ArrowRight, Shield, ClipboardCheck, Users, Clock, ChevronRight } from 'lucide-react'

const services = [
  {
    title: 'Commercial Offices',
    description: 'Structured cleaning programs that maintain productive, professional environments with consistent results and minimal disruption.',
  },
  {
    title: 'Medical & Healthcare',
    description: 'TGA-listed disinfectants, infection control protocols, and accreditation-ready documentation for the highest-compliance environments.',
  },
  {
    title: 'Strata & Body Corporate',
    description: 'One relationship, multiple sites. Coordinated cleaning across common areas, lifts, and shared facilities under a single accountable contract.',
  },
  {
    title: 'Gyms & Fitness',
    description: 'High-frequency hygiene programs built for high-touch surfaces, change rooms, and the demanding standards of health-focused environments.',
  },
  {
    title: 'Retail & Hospitality',
    description: 'Customer-facing spaces maintained to a standard that reflects your brand. Daily or overnight programs tailored to trading hours.',
  },
  {
    title: 'Industrial & Warehousing',
    description: 'Heavy-duty, safety-focused cleaning programs for large-format facilities. WHS-compliant processes and documented audit trails.',
  },
]

const differentiators = [
  {
    icon: ClipboardCheck,
    title: 'QA Inspections Every Visit',
    description: 'Formal quality assessments with documented reporting after every clean. Not just a checklist — a verified record.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    description: 'One point of contact, always. No call centres, no rotating staff. You know who to call and they know your site.',
  },
  {
    icon: Shield,
    title: '$20M Public Liability',
    description: 'Fully insured with police-checked staff. Tender-ready compliance documentation available on request.',
  },
  {
    icon: Clock,
    title: '24-Hour Response Time',
    description: 'Issues raised are addressed within 24 hours. Re-cleans arranged at no charge where standards are not met.',
  },
]

export default function Home() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-[#0a2744] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#C9A84C]" />
              <span className="font-heading text-[#C9A84C] text-xs font-medium tracking-widest uppercase">
                Commercial Cleaning · Queensland
              </span>
            </div>
            <h1 className="font-heading font-semibold text-4xl lg:text-5xl leading-tight mb-6">
              Your Facility.<br />
              <span className="text-[#C9A84C]">Our Responsibility.</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
              Keystone is a managed cleaning system — not just a cleaning service. Every job is tracked, verified, and fully accountable. Servicing Far North QLD to Brisbane.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#a8873a] text-[#0a2744] font-heading font-semibold px-7 py-3 text-sm transition-colors duration-200"
              >
                Book a Free Site Visit
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/capability-statement"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-heading font-medium px-7 py-3 text-sm transition-colors duration-200"
              >
                Download Capability Statement
              </Link>
            </div>
          </div>
        </div>
        <div className="h-1 bg-[#C9A84C]" />
      </section>

      {/* Trust bar */}
      <section className="bg-[#f5f5f5] border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4">
            {[
              '$20M Public Liability Insurance',
              'Police-Checked Staff',
              'ABN 60 640 710 845',
              'Far North QLD to Brisbane',
              'QA Reports Every Clean',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                <span className="font-heading text-[#0a2744] font-medium text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="pt-4 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="gold-line mb-4" />
            <h2 className="font-heading font-semibold text-2xl lg:text-3xl text-[#0a2744] mb-3">
              What We Clean
            </h2>
            <p className="text-[#555555] text-sm max-w-xl">
              Purpose-built cleaning programs for environments where reliability and compliance are non-negotiable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#f5f5f5] p-6 border-l-4 border-[#C9A84C] hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="font-heading font-semibold text-sm text-[#0a2744] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-[#C9A84C] hover:text-[#a8873a] transition-colors"
            >
              View all services
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Keystone */}
      <section className="pt-10 pb-10 bg-[#0a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="gold-line mb-4" />
            <h2 className="font-heading font-semibold text-2xl lg:text-3xl mb-3">
              Why Keystone?
            </h2>
            <p className="text-white/70 text-sm max-w-xl">
              We built the systems that other cleaning companies don't have. That's the difference between a cleaner showing up and a managed facility service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="border-t border-white/20 pt-6">
                  <Icon size={24} className="text-[#C9A84C] mb-4" />
                  <h3 className="font-heading font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="pt-4 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="gold-line mb-4" />
              <h2 className="font-heading font-semibold text-2xl lg:text-3xl text-[#0a2744] mb-4">
                Built for businesses that can't afford to get it wrong.
              </h2>
              <p className="text-[#555555] text-sm leading-relaxed mb-4">
                Keystone was built from the ground up with one goal: give Queensland businesses a cleaning partner that operates with the discipline and documentation of a large facility services company, without losing the direct accountability of an owner-operated business.
              </p>
              <p className="text-[#555555] text-sm leading-relaxed mb-6">
                Our clients are medical practices, professional offices, strata managers, and multi-site businesses. They value reliability and compliance over price alone — and they stay because we deliver.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-[#C9A84C] hover:text-[#a8873a] transition-colors"
              >
                Our story
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '$20M', label: 'Public Liability Insurance' },
                { stat: '22', label: 'Volume Operations Manual' },
                { stat: '24hr', label: 'Response Guarantee' },
                { stat: '100%', label: 'Documented QA Process' },
              ].map((item) => (
                <div key={item.stat} className="bg-[#f5f5f5] p-6 text-center">
                  <div className="font-heading font-bold text-3xl text-[#C9A84C] mb-1">
                    {item.stat}
                  </div>
                  <div className="font-heading text-xs text-[#0a2744] font-medium leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0a2744] border-t-4 border-[#C9A84C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-heading font-semibold text-2xl text-white mb-2">
                Ready for a cleaning service you can actually rely on?
              </h2>
              <p className="text-white/70 text-sm">
                Book a free site visit. No obligation. We'll walk your site and provide a tailored proposal within 48 hours.
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
