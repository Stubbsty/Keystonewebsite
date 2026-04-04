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

    // Basic validation
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setErrorMsg('Please fill in all required fields.')
      setState('error')
      return
    }

    setState('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'noreply@keystonefacilityservices.com.au',
          to: 'tyler.stubbs@keystonefacilityservices.com.au',
          reply_to: form.email,
          subject: `Website Enquiry — ${form.firstName} ${form.lastName}${form.company ? ` (${form.company})` : ''}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
              <div style="background: #0a2744; padding: 24px; margin-bottom: 24px;">
                <p style="color: #C9A84C; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 8px;">New Website Enquiry</p>
                <h1 style="color: white; font-size: 22px; margin: 0;">Keystone Facility Services</h1>
              </div>
              <div style="padding: 0 24px 24px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #555; width: 140px;">Name</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; font-weight: 600; color: #333;">${form.firstName} ${form.lastName}</td>
                  </tr>
                  ${form.company ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #555;">Company</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; font-weight: 600; color: #333;">${form.company}</td>
                  </tr>` : ''}
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #555;">Email</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #333;"><a href="mailto:${form.email}" style="color: #C9A84C;">${form.email}</a></td>
                  </tr>
                  ${form.phone ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #555;">Phone</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #333;"><a href="tel:${form.phone}" style="color: #C9A84C;">${form.phone}</a></td>
                  </tr>` : ''}
                </table>
                <div style="margin-top: 24px;">
                  <p style="font-size: 12px; color: #555; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">Message</p>
                  <div style="background: #f5f5f5; padding: 16px; font-size: 14px; line-height: 1.7; color: #333; white-space: pre-wrap;">${form.message}</div>
                </div>
                <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="font-size: 12px; color: #aaa;">This enquiry was submitted via keystonefacilityservices.com.au. Reply directly to this email to respond to ${form.firstName}.</p>
                </div>
              </div>
            </div>
          `,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data?.message || 'Failed to send message.')
      }

      setState('success')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setErrorMsg('Something went wrong. Please try again or call us directly on 0430 789 756.')
      setState('error')
    }
  }

  const inputClass =
    'w-full bg-white border border-[#dddddd] text-[#333333] font-body text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 placeholder:text-[#aaaaaa]'

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#0a2744] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#C9A84C]" />
            <span className="font-heading text-[#C9A84C] text-sm font-medium tracking-widest uppercase">
              Contact
            </span>
          </div>
          <h1 className="font-heading font-bold text-5xl lg:text-6xl max-w-3xl leading-tight">
            Let's talk about<br />
            <span className="text-[#C9A84C]">your facility.</span>
          </h1>
          <p className="text-white/70 text-xl mt-8 max-w-2xl leading-relaxed">
            Book a free site visit, request a quote, or ask a question. We respond within one business day.
          </p>
        </div>
        <div className="h-1 bg-[#C9A84C] mt-20" />
      </section>

      {/* Contact section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Contact info */}
            <div className="lg:col-span-1">
              <span className="gold-line mb-6" />
              <h2 className="font-heading font-bold text-2xl text-[#0a2744] mb-8">
                Get in touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-[#0a2744] mb-1">Phone</p>
                    <a href="tel:0430789756" className="text-[#555555] text-sm hover:text-[#C9A84C] transition-colors">
                      0430 789 756
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-[#0a2744] mb-1">Email</p>
                    <a
                      href="mailto:tyler.stubbs@keystonefacilityservices.com.au"
                      className="text-[#555555] text-sm hover:text-[#C9A84C] transition-colors break-all"
                    >
                      tyler.stubbs@keystonefacilityservices.com.au
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f5f5f5] flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-[#0a2744] mb-1">Location</p>
                    <p className="text-[#555555] text-sm leading-relaxed">
                      Brisbane, QLD<br />
                      Servicing Far North QLD to Brisbane
                    </p>
                  </div>
                </div>
              </div>

              {/* Response promise */}
              <div className="mt-12 bg-[#f5f5f5] p-6 border-l-4 border-[#C9A84C]">
                <p className="font-heading font-semibold text-sm text-[#0a2744] mb-2">
                  Our response commitment
                </p>
                <p className="text-[#555555] text-sm leading-relaxed">
                  All enquiries are responded to within one business day. Site visit proposals are delivered within 48 hours of the visit.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {state === 'success' ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle size={56} className="text-[#C9A84C] mb-6" />
                  <h3 className="font-heading font-bold text-2xl text-[#0a2744] mb-4">
                    Message received.
                  </h3>
                  <p className="text-[#555555] text-base max-w-md leading-relaxed">
                    Thank you for getting in touch. We'll respond within one business day. If your matter is urgent, call us directly on{' '}
                    <a href="tel:0430789756" className="text-[#C9A84C] font-medium">
                      0430 789 756
                    </a>.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      rows={6}
                      className={inputClass}
                      placeholder="Tell us about your facility — site type, approximate size, frequency required, and anything else relevant."
                    />
                  </div>

                  {state === 'error' && errorMsg && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4">
                      <AlertCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                      <p className="text-red-700 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={state === 'submitting'}
                    className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#a8873a] disabled:opacity-60 text-[#0a2744] font-heading font-semibold px-10 py-4 text-base transition-colors duration-200"
                  >
                    {state === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-[#aaaaaa] text-xs">
                    Fields marked with <span className="text-[#C9A84C]">*</span> are required.
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
