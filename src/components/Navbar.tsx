import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LOGO_URL = '/Keystone_logo.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-[#C9A84C] ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={LOGO_URL}
              alt="Keystone Facility Services"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-heading text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-[#C9A84C]'
                    : 'text-[#0a2744] hover:text-[#C9A84C]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 bg-[#0a2744] hover:bg-[#0f3460] text-white font-heading font-semibold text-sm px-5 py-2.5 transition-colors duration-200"
            >
              Request a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-[#0a2744] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#dddddd]">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-heading text-sm font-medium tracking-wide py-2 border-b border-[#dddddd] ${
                  location.pathname === link.href
                    ? 'text-[#C9A84C]'
                    : 'text-[#0a2744]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 bg-[#0a2744] hover:bg-[#0f3460] text-white font-heading font-semibold text-sm px-5 py-3 text-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
