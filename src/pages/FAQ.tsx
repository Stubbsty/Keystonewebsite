import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: 'What areas do you service?',
    answer:
      'Keystone services commercial sites across Queensland, from Far North Queensland through to Brisbane. If you are unsure whether your site falls within our service area, contact us and we will confirm.',
  },
  {
    question: 'Are you insured?',
    answer:
      'Yes. Keystone holds $20,000,000 in public liability insurance through QBE, plus workers\' compensation cover that is QLD compliant. A Certificate of Currency is available on request — simply contact us and we will provide it.',
  },
  {
    question: 'Are your staff police-checked?',
    answer:
      'All Keystone staff and subcontractors operating on client sites are police-checked. This is a non-negotiable requirement for all personnel, regardless of site type.',
  },
  {
    question: 'What is the minimum contract term?',
    answer:
      'Our standard service agreements are 12 months. This allows us to assign a consistent team to your site, build familiarity with your requirements, and deliver the structured, accountable service Keystone is built on. We do not offer week-to-week arrangements — our model is built on relationships, not transactions.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Every quote is tailored to your specific site — there is no standard rate card. Pricing is based on site size, service frequency, scope of works, and any specialist requirements. We conduct a free site visit before quoting so that the proposal is accurate, not an estimate with hidden adjustments later.',
  },
  {
    question: 'What happens if I am not happy with a clean?',
    answer:
      'Contact us within 48 hours of the service. We will investigate, and where the concern is valid, we will arrange a re-clean at no charge. Our QA inspection reports provide documented evidence of what was completed on each visit, which means any issue can be assessed and addressed quickly.',
  },
  {
    question: 'What is a QA inspection and how often does it happen?',
    answer:
      'A QA (quality assurance) inspection is a formal review of the cleaning standard at your site. It is conducted by a supervisor — not the cleaning technician — and the results are documented in a written report. The frequency varies by contract, but regular QA inspections are included in all Keystone service agreements. You receive a copy of every report.',
  },
  {
    question: 'Can I get cleaning outside of business hours?',
    answer:
      'Yes. The majority of our commercial clients prefer after-hours or early-morning cleaning so that the service does not disrupt their operations. Scheduling is confirmed during the site assessment and built into your service agreement.',
  },
  {
    question: 'Do you use subcontractors?',
    answer:
      'Keystone may engage vetted subcontractors to deliver services, particularly across regional or multi-site portfolios. All subcontractors are required to meet Keystone\'s standards for insurance, conduct, and service quality. We remain fully accountable to you regardless of who delivers the service on the ground.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'Cancellations made more than 48 hours before a scheduled service attract no charge. Cancellations between 24 and 48 hours attract 50% of the scheduled visit value. Cancellations under 24 hours, or where access is not provided at the agreed time, attract 100% of the visit value. These fees reflect the labour costs already committed by Keystone in preparing for the service.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'The simplest way is to book a free site visit using our contact form. We will visit your site, assess the scope of works, and provide a tailored proposal within 48 hours. There is no obligation.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#dddddd]">
      <button
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-heading font-semibold text-[#0a2744] text-base pr-4">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-[#C9A84C] shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-6 pr-8">
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
            Answers to the questions facility managers and operations teams ask before engaging a new cleaning partner.
          </p>
        </div>
        <div className="h-1 bg-[#C9A84C]" />
      </section>

      {/* FAQ list */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-[#dddddd]">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Didn't find answer */}
          <div className="mt-16 bg-[#f5f5f5] p-10 border-l-4 border-[#C9A84C]">
            <h3 className="font-heading font-semibold text-xl text-[#0a2744] mb-3">
              Didn't find what you were looking for?
            </h3>
            <p className="text-[#555555] text-sm leading-relaxed mb-6">
              Call us directly or send a message and we'll get back to you within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
      <section className="bg-[#C9A84C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-bold text-3xl text-[#0a2744] mb-3">
                Ready to get started?
              </h2>
              <p className="text-[#0a2744]/70 text-lg">
                Book a free site visit. No obligation. Tailored proposal within 48 hours.
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
