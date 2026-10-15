import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  firstName: string
  lastName: string
  company: string
  phone: string
  email: string
  message: string
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  company: '',
  phone: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setErrorMsg('Please fill in all required fields.')
      setState('error')
      return
    }

    setState('submitting')
    setErrorMsg('')

    try {
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          company: form.company,
          phone: form.phone,
          email: form.email,
          message: form.message,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Failed to send message.')
      }

      setState('success')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setErrorMsg('Something went wrong. Please try again or call us on 0430 789 756.')
      setState('error')
    }
  }

  const inputClass =
    'w-full bg-white border border-[#dddddd] text-[#333333] font-body text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 placeholder:text-[#aaaaaa]'

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
              Contact
            </span>
          </div>
          <h1 className="font-heading font-semibold text-4xl lg:text-5xl max-w-3xl leading-tight mb-6">
            Let's talk about<br />
            <span className="text-[#C9A84C]">your facility.</span>
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            Book a free site visit, request a quote, or ask a question. We respond within one business day — usually faster.
          </p>
        </div>
        <div className="h-1 bg-[#C9A84C]" />
      </section>

      {/* Contact section */}
      <section className="pt-6 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <div className="lg:col-span-1">
              <span className="gold-line mb-4" />
              <h2 className="font-heading font-semibold text-xl text-[#0a2744] mb-6">
                Get in touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#f5f5f5] flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-xs text-[#0a2744] uppercase tracking-wide mb-1">Phone</p>
                    <a href="tel:0430789756" className="text-[#555555] text-sm hover:text-[#C9A84C] transition-colors">
                      0430 789 756
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#f5f5f5] flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-xs text-[#0a2744] uppercase tracking-wide mb-1">Email</p>
                    <a
                      href="mailto:tyler.stubbs@keystonefacilityservices.com.au"
                      className="text-[#555555] text-sm hover:text-[#C9A84C] transition-colors"
                    >
                      tyler.stubbs@keystonefacilityservices.com.au
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#f5f5f5] flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-xs text-[#0a2744] uppercase tracking-wide mb-1">Location</p>
                    <p className="text-[#555555] text-sm leading-relaxed">
                      Brisbane, QLD<br />
                      Servicing Far North QLD to Brisbane
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#f5f5f5] p-5 border-l-4 border-[#C9A84C]">
                <p className="font-heading font-semibold text-xs text-[#0a2744] mb-2">
                  What happens next
                </p>
                <p className="text-[#555555] text-xs leading-relaxed">
                  We respond within one business day. If you're after a quote, we'll book a free site visit and have a proposal back to you within 48 hours.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {state === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={48} className="text-[#C9A84C] mb-5" />
                  <h3 className="font-heading font-semibold text-xl text-[#0a2744] mb-3">
                    Message received.
                  </h3>
                  <p className="text-[#555555] text-sm max-w-md leading-relaxed">
                    We'll be in touch within one business day. If it's urgent, call us directly on{' '}
                    <a href="tel:0430789756" className="text-[#C9A84C] font-medium">
                      0430 789 756
                    </a>.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading text-xs font-semibold text-[#0a2744] tracking-widest uppercase mb-2">
                        First Name <span className="text-[#C9A84C]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="block font-heading text-xs font-semibold text-[#0a2744] tracking-widest uppercase mb-2">
                        Last Name <span className="text-[#C9A84C]">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-heading text-xs font-semibold text-[#0a2744] tracking-widest uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Smith & Associates Pty Ltd"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading text-xs font-semibold text-[#0a2744] tracking-widest uppercase mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="0400 000 000"
                      />
                    </div>
                    <div>
                      <label className="block font-heading text-xs font-semibold text-[#0a2744] tracking-widest uppercase mb-2">
                        Email <span className="text-[#C9A84C]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="jane@company.com.au"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-heading text-xs font-semibold text-[#0a2744] tracking-widest uppercase mb-2">
                      Message <span className="text-[#C9A84C]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={inputClass}
                      placeholder="Tell us about your facility — site type, size, frequency needed, and anything else relevant."
                    />
                  </div>

                  {state === 'error' && errorMsg && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4">
                      <AlertCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                      <p className="text-red-700 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={state === 'submitting'}
                    className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#a8873a] disabled:opacity-60 text-[#0a2744] font-heading font-semibold px-8 py-3 text-sm transition-colors duration-200"
                  >
                    {state === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-[#aaaaaa] text-xs">
                    Fields marked <span className="text-[#C9A84C]">*</span> are required.
                    Your information is handled in accordance with our{' '}
                    <a href="/privacy-policy" className="underline hover:text-[#555555] transition-colors">
                      Privacy Policy
                    </a>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
