import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a2744] text-white">
      <div className="h-1 bg-[#C9A84C]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="font-heading font-semibold text-sm text-white tracking-widest uppercase">Keystone</p>
              <p className="font-heading text-xs text-[#C9A84C] tracking-widest uppercase">Facility Services</p>
            </div>
            <p className="text-white/60 text-xs leading-relaxed">
              A managed commercial cleaning system — not just a cleaning service. Every job tracked, verified, and fully accountable.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-xs tracking-widest uppercase text-[#C9A84C] mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Industries', href: '/industries' },
                { label: 'Capability Statement', href: '/capability-statement' },
                { label: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/60 hover:text-[#C9A84C] text-xs transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-xs tracking-widest uppercase text-[#C9A84C] mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Commercial Offices',
                'Medical & Healthcare',
                'Strata & Body Corporate',
                'Gyms & Fitness',
                'Retail & Hospitality',
                'Industrial & Warehousing',
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-white/60 hover:text-[#C9A84C] text-xs transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-xs tracking-widest uppercase text-[#C9A84C] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <a href="tel:0430789756" className="text-white/60 hover:text-white text-xs transition-colors">
                  0430 789 756
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <a href="mailto:tyler.stubbs@keystonefacilityservices.com.au" className="text-white/60 hover:text-white text-xs transition-colors">
                  tyler.stubbs@keystonefacilityservices.com.au
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span className="text-white/60 text-xs">
                  Brisbane, QLD · Far North QLD to Brisbane
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Keystone Facility Services · Stubbs Capital Pty Ltd · ABN 60 640 710 845
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
