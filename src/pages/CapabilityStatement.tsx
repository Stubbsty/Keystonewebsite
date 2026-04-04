import { Download, FileText, Shield, Users, ClipboardCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const PDF_PATH = '/Keystone_Capability_Statement.pdf'

export default function CapabilityStatement() {
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
              Capability Statement
            </span>
          </div>
          <h1 className="font-heading font-semibold text-4xl lg:text-5xl max-w-3xl leading-tight mb-6">
            Everything you need<br />
            <span className="text-[#C9A84C]">to make a decision.</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            Our capability statement covers who we are, what we do, the sectors we service, our compliance credentials, and how to get in touch. One document — ready to share with your team or procurement process.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={PDF_PATH}
              download="Keystone_Facility_Services_Capability_Statement.pdf"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#a8873a] text-[#0a2744] font-heading font-semibold px-7 py-3 text-sm transition-colors duration-200"
            >
              <Download size={16} />
              Download PDF
            </a>
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-heading font-medium px-7 py-3 text-sm transition-colors duration-200"
            >
              <FileText size={16} />
              View PDF
            </a>
          </div>
        </div>
        <div className="h-1 bg-[#C9A84C]" />
      </section>

      {/* At a glance */}
      <section className="pt-6 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="gold-line mb-4" />
            <h2 className="font-heading font-semibold text-2xl lg:text-3xl text-[#0a2744] mb-3">
              At a glance
            </h2>
            <p className="text-[#555555] text-sm max-w-xl">
              The key facts procurement teams and facility managers ask for — before they ask for them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Compliance & Insurance',
                points: [
                  '$20,000,000 Public Liability (QBE)',
                  "Workers' Compensation — QLD Compliant",
                  'Certificate of Currency on request',
                  'ABN & GST Registered',
                  'Police-checked staff — all personnel',
                  'WHS Policy — documented',
                ],
              },
              {
                icon: ClipboardCheck,
                title: 'Service Delivery',
                points: [
                  'Formal QA inspections with documented reporting',
                  'Signed completion logs every visit',
                  'Dedicated account manager',
                  'Real-time client portal',
                  'Variation works policy — no surprise invoicing',
                  '30/60/90 day client review program',
                ],
              },
              {
                icon: Users,
                title: 'Sectors We Service',
                points: [
                  'Commercial Offices',
                  'Medical & Healthcare',
                  'Gyms & Fitness',
                  'Strata & Body Corporate',
                  'Retail & Hospitality',
                  'Industrial & Warehousing',
                ],
              },
            ].map((block) => {
              const Icon = block.icon
              return (
                <div key={block.title} className="bg-[#f5f5f5] p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <Icon size={18} className="text-[#C9A84C]" />
                    <h3 className="font-heading font-semibold text-sm text-[#0a2744]">{block.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {block.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0" />
                        <span className="text-[#333333] text-xs leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-[#0a2744] border-t-4 border-[#C9A84C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="gold-line mb-4" />
              <h2 className="font-heading font-semibold text-2xl text-white mb-3">
                Ready to share with your team?
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Download the full capability statement as a PDF. Formatted for sharing with procurement teams, facility managers, and body corporate committees.
              </p>
              <a
                href={PDF_PATH}
                download="Keystone_Facility_Services_Capability_Statement.pdf"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#a8873a] text-[#0a2744] font-heading font-semibold px-7 py-3 text-sm transition-colors duration-200"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
            <div className="border border-white/20 p-6">
              <h3 className="font-heading font-semibold text-sm text-white mb-3">Prefer to talk first?</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Call us directly or book a free site visit. We'll walk your facility and show you exactly how a Keystone program works in practice.
              </p>
              <div className="space-y-3">
                <a href="tel:0430789756" className="block font-heading font-semibold text-[#C9A84C] hover:text-[#d9bc74] text-base transition-colors">
                  0430 789 756
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-heading transition-colors"
                >
                  Book a site visit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
