import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const values = [
  {
    title: 'Reliability',
    description: 'We show up when we say we will. Every visit, every time. If something goes wrong, we own it and fix it — the same day.',
  },
  {
    title: 'Precision',
    description: 'Clean is not a feeling. It is a standard. Documented procedures govern every environment we work in, and QA inspections verify every result.',
  },
  {
    title: 'Professionalism',
    description: 'From the quote to the contract to the shift log — every interaction reflects a business that takes what it does seriously.',
  },
  {
    title: 'Accountability',
    description: 'Signed completion logs, QA reports, and a client portal mean you always know what was done, when, and by whom. Nothing is left to memory.',
  },
  {
    title: 'Integrity',
    description: 'We act the same way whether the client is watching or not. That\'s not a value statement — it\'s the standard our systems are built to enforce.',
  },
]

const credentials = [
  '$20,000,000 public liability insurance (QBE)',
  'Police-checked staff on every site',
  'WHS Management System — documented and maintained',
  'ABN 60 640 710 845 — registered and GST compliant',
  'Certificate of Currency available on request',
  'Tender-ready compliance documentation',
  '22-volume Operations Manual governing all service delivery',
  'Formal QA inspection framework with documented reporting',
]

export default function About() {
  <div className="pt-20">
      {/* Page header */}
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
              About Us
            </span>
          </div>
          <h1 className="font-heading font-semibold text-4xl lg:text-5xl leading-tight">
            Built different.<br />
            <span className="text-[#C9A84C]">On purpose.</span>
          </h1>
        </div>
        <div className="h-1 bg-[#C9A84C]" />
      </section>

      {/* Founder story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="gold-line mb-6" />
              <h2 className="font-heading font-bold text-4xl text-[#0a2744] mb-8">
                Why Keystone was built
              </h2>
              <div className="space-y-6 text-[#555555] text-lg leading-relaxed">
                <p>
                  Keystone Facility Services was built with one goal: give Queensland businesses a cleaning partner that operates with the discipline and documentation of a large facility services company, without losing the direct accountability of an owner-operated business.
                </p>
                <p>
                  The problem we kept seeing was straightforward. Businesses were stuck between two bad options — faceless national providers who treated every site like a number, or small operators who couldn't deliver consistent, documented, compliant service delivery.
                </p>
                <p>
                  Keystone exists in that gap. We built the systems, the documentation, and the QA framework from the ground up so that every client — whether they're a single-site medical practice or a multi-site strata portfolio — gets the same structured, accountable service.
                </p>
                <p>
                  Every job is tracked. Every visit is verified. Nothing is left to memory or assumption.
                </p>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-10 border-l-4 border-[#C9A84C]">
              <p className="font-heading font-semibold text-xl text-[#0a2744] mb-2">Tyler Stubbs</p>
              <p className="text-[#C9A84C] font-medium text-sm mb-8">Operations Director, Keystone Facility Services</p>
              <blockquote className="text-[#555555] text-lg leading-relaxed italic">
                "The standard of your facility reflects directly on your brand. We built Keystone to protect that standard — every visit, every time, with full documentation to prove it."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="gold-line mb-6" />
            <h2 className="font-heading font-bold text-4xl text-[#0a2744] mb-6">
              The Keystone difference
            </h2>
            <p className="text-[#555555] text-lg max-w-2xl">
              Most cleaning companies offer reliability. We built systems to prove it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#dddddd]">
            {[
              {
                title: 'Real-time client portal',
                desc: 'Service history, communications, and signed completion logs — always accessible.',
              },
              {
                title: 'Formal QA inspections',
                desc: 'Documented quality assessments with written reporting after every clean.',
              },
              {
                title: 'Dedicated account manager',
                desc: 'One point of contact. They know your site, your standards, and your preferences.',
              },
              {
                title: 'Variation works policy',
                desc: 'No surprise invoicing. Any work outside scope is agreed in writing before it happens.',
              },
              {
                title: '30/60/90 day review program',
                desc: 'Structured client reviews at 30, 60, and 90 days to ensure the service is tracking to standard.',
              },
              {
                title: 'Subcontractor vetting',
                desc: 'All subcontractors are vetted, insured, and managed under the same Keystone standards.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8">
                <h3 className="font-heading font-semibold text-base text-[#0a2744] mb-3">{item.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="gold-line mb-6" />
            <h2 className="font-heading font-bold text-4xl mb-6">
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value) => (
              <div key={value.title} className="border-t border-white/20 pt-8">
                <h3 className="font-heading font-semibold text-[#C9A84C] text-lg mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-line mb-6" />
              <h2 className="font-heading font-bold text-4xl text-[#0a2744] mb-6">
                Compliance & credentials
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed mb-10">
                Keystone is built for clients where compliance is non-negotiable. Every document is in order. Every certificate is current. Tender-ready from day one.
              </p>
              <ul className="space-y-4">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                    <span className="text-[#333333] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0a2744] text-white p-10">
              <h3 className="font-heading font-semibold text-xl mb-2">Download our Capability Statement</h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                Everything a facility manager or procurement team needs — services, compliance, sectors, and contact details in a single document.
              </p>
              <Link
                to="/capability-statement"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#a8873a] text-[#0a2744] font-heading font-semibold px-6 py-3 text-sm transition-colors duration-200"
              >
                View Capability Statement
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C9A84C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-bold text-3xl text-[#0a2744] mb-3">
                See it for yourself.
              </h2>
              <p className="text-[#0a2744]/70 text-lg">
                Book a free site visit and we'll show you exactly how the Keystone system works for your facility.
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
