import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: 'What areas do you service?',
    answer:
      'Keystone services commercial sites across Queensland — from Far North Queensland through to Brisbane. If you\'re unsure whether your site falls within our area, contact us and we\'ll confirm.',
  },
  {
    question: 'Are you insured?',
    answer:
      'Yes. Keystone holds $20,000,000 in public liability insurance through QBE, plus QLD-compliant workers\' compensation cover. A Certificate of Currency is available on request — just ask.',
  },
  {
    question: 'Are your staff police-checked?',
    answer:
      'All Keystone staff and subcontractors operating on client sites are police-checked. This applies to everyone — no exceptions, regardless of site type.',
  },
  {
    question: 'What is the minimum contract term?',
    answer:
      'Our standard service agreements are 12 months. This allows us to assign a consistent team to your site, build familiarity with your requirements, and deliver structured, accountable service. We don\'t offer week-to-week arrangements — our model is built on relationships, not transactions.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Every quote is tailored to your site. There\'s no rate card because no two sites are the same. Pricing is based on site size, service frequency, scope of works, and any specialist requirements. We visit your site before quoting so the proposal reflects what\'s actually needed — not an estimate padded for safety.',
  },
  {
    question: 'What happens if I\'m not happy with a clean?',
    answer:
      'Contact us within 48 hours. We\'ll investigate, and where the concern is valid, we arrange a re-clean at no charge. Our QA reports document what was completed on each visit, so any issue can be assessed quickly and resolved without argument.',
  },
  {
    question: 'What is a QA inspection?',
    answer:
      'A QA inspection is a formal review of the cleaning standard at your site. It\'s conducted by a supervisor — not the cleaning technician — and the results are documented in a written report. You receive a copy. It\'s not a checkbox — it\'s a documented record that the standard was met.',
  },
  {
    question: 'Can you clean outside of business hours?',
    answer:
      'Yes — most of our clients prefer it. After-hours or early-morning cleaning means no disruption to your operations. Scheduling is confirmed during the site assessment and locked into your service agreement.',
  },
  {
    question: 'Do you use subcontractors?',
    answer:
      'Keystone may engage vetted subcontractors, particularly for regional or multi-site work. All subcontractors are required to meet Keystone\'s standards for insurance, conduct, and service quality. We remain fully accountable to you regardless of who\'s on the ground.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'Cancellations more than 48 hours out — no charge. Between 24 and 48 hours — 50% of the scheduled visit value. Under 24 hours, or where access isn\'t provided — 100% of the visit value. These fees reflect the labour we\'ve already committed to your job.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Book a free site visit using our contact form. We\'ll visit your facility, assess what\'s needed, and have a proposal back to you within 48 hours. No obligation.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#dddddd]">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-heading font-semibold text-[#0a2744] text-sm pr-4">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#C9A84C] shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-[#555555] text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
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
              FAQ
            </span>
          </div>
          <h1 className="font-heading font-semibold text-4xl lg:text-5xl max-w-3xl leading-tight mb-6">
            Questions we get<br />
            <span className="text-[#C9A84C]">before the first call.</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            The questions facility managers, practice managers, and gym owners ask before they engage a new cleaning partner. Answered directly.
          </p>
        </div>
        <div className="h-1 bg-[#C9A84C]" />
      </section>

      {/* FAQ list */}
      <section className="pt-6 pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-[#dddddd]">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-10 bg-[#f5f5f5] p-8 border-l-4 border-[#C9A84C]">
            <h3 className="font-heading font-semibold text-base text-[#0a2744] mb-2">
              Still have a question?
            </h3>
            <p className="text-[#555555] text-sm leading-relaxed mb-5">
              Call us directly or send a message. We respond within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0430789756"
                className="inline-flex items-center justify-center gap-2 bg-[#0a2744] hover:bg-[#0f3460] text-white font-heading font-semibold px-6 py-3 text-sm transition-colors duration-200"
              >
                Call 0430 789 756
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#0a2744] text-[#0a2744] hover:bg-[#0a2744] hover:text-white font-heading font-semibold px-6 py-3 text-sm transition-colors duration-200"
              >
                Send a Message
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
                Ready to get started?
              </h2>
              <p className="text-white/70 text-sm">
                Book a free site visit. No obligation. Proposal within 48 hours.
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
