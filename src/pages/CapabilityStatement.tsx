import { Download, FileText, Shield, Users, ClipboardCheck, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

// Update this path when the final PDF (with footer removed) is ready
// Place the PDF in the /public folder of the project as capability-statement.pdf
const PDF_PATH = '/capability-statement.pdf'

export default function CapabilityStatement() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#0a2744] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#C9A84C]" />
            <span className="font-heading text-[#C9A84C] text-sm font-medium tracking-widest uppercase">
              Capability Statement
            </span>
          </div>
          <h1 className="font-heading font-bold text-5xl lg:text-6xl max-w-3xl leading-tight">
            Everything you need<br />
            <span className="text-[#C9A84C]">to make a decision.</span>
          </h1>
          <p className="text-white/70 text-xl mt-8 max-w-2xl leading-relaxed">
            Our capability statement covers who we are, what we do, the sectors we service, our compliance credentials, and how to get in touch. One document. Everything a procurement team or facility manager needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={PDF_PATH}
              download="Keystone_Facility_Services_Capability_Statement.pdf"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#a8873a] text-[#0a2744] font-heading font-semibold px-8 py-4 text-base transition-colors duration-200"
            >
              <Download size={18} />
              Download Capability Statement
            </a>
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-heading font-medium px-8 py-4 text-base transition-colors duration-200"
            >
              <FileText size={18} />
              View PDF
            </a>
          </div>
        </div>
        <div className="h-1 bg-[#C9A84C] mt-20" />
      </section>

      {/* At a glance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="gold-line mb-6" />
            <h2 className="font-heading font-bold text-4xl text-[#0a2744] mb-4">
              At a glance
            </h2>
            <p className="text-[#555555] text-lg max-w-2xl">
              The key facts procurement teams and facility managers ask for — before they ask for them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Compliance & Insurance',
                points: [
                  '$20,000,000 Public Liability (QBE)',
                  'Workers\' Compensation — QLD Compliant',
                  'Certificate of Currency available on request',
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
                  'Signed completion logs after every visit',
                  'Dedicated account manager — one contact',
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
                  'Retail & Hospitality',
                  'Industrial & Warehousing',
                  'Gyms & Fitness',
                  'Strata & Body Corporate',
                ],
              },
            ].map((block) => {
              const Icon = block.icon
              return (
                <div key={block.title} className="bg-[#f5f5f5] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon size={20} className="text-[#C9A84C]" />
                    <h3 className="font-heading font-semibold text-[#0a2744]">{block.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {block.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                        <span className="text-[#333333] text-sm">{p}</span>
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
      <section className="bg-[#0a2744] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="gold-line mb-6" />
              <h2 className="font-heading font-bold text-4xl mb-6">
                Ready to share with your team?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Download the full capability statement as a PDF. Formatted for sharing with procurement teams, facility managers, and body corporate committees.
              </p>
              <a
                href={PDF_PATH}
                download="Keystone_Facility_Services_Capability_Statement.pdf"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#a8873a] text-[#0a2744] font-heading font-semibold px-8 py-4 transition-colors duration-200"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
            <div className="border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Phone size={18} className="text-[#C9A84C]" />
                <h3 className="font-heading font-semibold text-white">Prefer to talk?</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                If you have questions about our capability or want to discuss a specific project, call us directly or request a site visit.
              </p>
              <div className="space-y-3">
                <a href="tel:0430789756" className="block font-heading font-semibold text-[#C9A84C] hover:text-[#d9bc74] text-lg transition-colors">
                  0430 789 756
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-heading transition-colors"
                >
                  Request a site visit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
