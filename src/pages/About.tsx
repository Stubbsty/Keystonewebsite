import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const values = [
  {
    title: 'Reliability',
    description: 'We show up when we say we will. If something goes wrong, we own it and fix it — the same day. No excuses, no deflection.',
  },
  {
    title: 'Precision',
    description: 'Clean is not a feeling. It is a standard. Documented procedures govern every environment we work in, and QA inspections verify every result.',
  },
  {
    title: 'Accountability',
    description: 'Signed completion logs, QA reports, and a client portal mean you always know what was done, when, and by whom. Nothing is left to memory.',
  },
  {
    title: 'Accessibility',
    description: 'When something needs attention, you should be able to reach someone who can actually fix it. One contact. Direct line. Always.',
  },
  {
    title: 'Integrity',
    description: 'We act the same way whether the client is watching or not. That\'s not a value statement — it\'s what our systems are built to enforce.',
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
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#C9A84C]" />
            <span className="font-heading text-[#C9A84C] text-xs font-medium tracking-widest uppercase">
              About Us
            </span>
          </div>
          <h1 className="font-heading font-semibold text-4xl lg:text-5xl leading-tight mb-6">
            Built different.<br />
            <span className="text-[#C9A84C]">On purpose.</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            Keystone wasn't built to be another cleaning company. It was built to be the one that actually operates the way a cleaning company should.
          </p>
        </div>
        <div className="h-1 bg-[#C9A84C]" />
      </section>

      {/* Founder story */}
      <section className="pt-6 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="gold-line mb-6" />
              <h2 className="font-heading font-semibold text-2xl lg:text-3xl text-[#0a2744] mb-6">
                Why Keystone exists
              </h2>
             <div className="space-y-5 text-[#555555] text-sm leading-relaxed">
  <p>
    Keystone was built around a clear standard — the systems and documentation of a large facility services company, combined with the direct accountability of an owner-operated business. Every client gets both.
  </p>
  <p>
    We built the QA framework, the operational structure, and the client portal from the ground up — so that nothing relies on memory, nothing gets missed, and there's always someone accountable when you need answers.
  </p>
  <p>
    Every job is tracked. Every visit is verified. Every client has one point of contact who knows their site.
  </p>
</div>
            </div>
            <div className="bg-[#f5f5f5] p-8 border-l-4 border-[#C9A84C]">
              <p className="font-heading font-semibold text-base text-[#0a2744] mb-1">Tyler Stubbs</p>
              <p className="text-[#C9A84C] font-heading font-medium text-xs tracking-wide uppercase mb-6">Operations Director, Keystone Facility Services</p>
              <blockquote className="text-[#555555] text-sm leading-relaxed italic">
                "The standard of your facility reflects directly on your brand. We built Keystone to protect that standard — every visit, every time, with the documentation to prove it was done right."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="pt-4 pb-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="gold-line mb-4" />
            <h2 className="font-heading font-semibold text-2xl lg:text-3xl text-[#0a2744] mb-3">
              How we operate differently
            </h2>
            <p className="text-[#555555] text-sm max-w-2xl">
              These aren't promises. They're processes we built into how Keystone runs from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#dddddd]">
            {[
              {
                title: 'Real-time client portal',
                desc: 'Your service history, signed completion logs, and communications — accessible any time, not just when you ask for them.',
              },
              {
                title: 'Formal QA inspections',
                desc: 'A supervisor reviews the work after every clean. Written report provided. Not a checkbox — a documented standard.',
              },
              {
                title: 'Dedicated account manager',
                desc: 'One contact who knows your site, your standards, and your preferences. You\'re not starting from scratch every time you call.',
              },
              {
                title: 'Variation works policy',
                desc: 'Nothing outside the agreed scope happens without written approval first. No surprises on your invoice.',
              },
              {
                title: '30/60/90 day review program',
                desc: 'We check in at 30, 60, and 90 days to make sure the service is meeting the standard — not just at the start.',
              },
              {
                title: 'Subcontractor standards',
                desc: 'Every subcontractor operating under Keystone is vetted, insured, and held to the same standards as our direct staff.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6">
                <h3 className="font-heading font-semibold text-sm text-[#0a2744] mb-2">{item.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pt-4 pb-10 bg-[#0a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="gold-line mb-4" />
            <h2 className="font-heading font-semibold text-2xl lg:text-3xl mb-3">
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="border-t border-white/20 pt-6">
                <h3 className="font-heading font-semibold text-[#C9A84C] text-sm mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="pt-4 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-line mb-4" />
              <h2 className="font-heading font-semibold text-2xl lg:text-3xl text-[#0a2744] mb-4">
                Compliance & credentials
              </h2>
              <p className="text-[#555555] text-sm leading-relaxed mb-8">
                We built Keystone for clients where compliance isn't optional. Every document is current. Every certificate is in order. If you're evaluating us for a tender or a contract — it's all here.
              </p>
              <ul className="space-y-3">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                    <span className="text-[#333333] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0a2744] text-white p-8">
              <h3 className="font-heading font-semibold text-lg mb-2">Need the full picture?</h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Our capability statement covers everything — services, sectors, compliance, insurance, and contact details. One document, ready to share.
              </p>
              <Link
                to="/capability-statement"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#a8873a] text-[#0a2744] font-heading font-semibold px-6 py-3 text-sm transition-colors duration-200"
              >
                Download Capability Statement
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a2744] border-t-4 border-[#C9A84C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-heading font-semibold text-2xl text-white mb-2">
                See how it works for your facility.
              </h2>
              <p className="text-white/70 text-sm">
                Book a free site visit. We'll assess your site and show you exactly what a Keystone program looks like in practice.
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
