'use client'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { personalInfo, navLinks } from '@/data/profile'

export default function Footer() {
  const handleNav = (href: string) => {
    const id = href.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0f172a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-[#ff4d4f] flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(255,77,79,0.4)]">
                BM
              </span>
              <div>
                <p className="text-white font-bold">{personalInfo.name}</p>
                <p className="text-gray-400 text-sm">{personalInfo.title}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building scalable web applications and business systems with clean architecture and modern technologies.
            </p>
            <div className="flex gap-3">
              {[
                { href: personalInfo.github, icon: GithubIcon, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#ff4d4f] hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Quick Navigation</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="text-gray-400 hover:text-[#ff4d4f] text-sm transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#ff4d4f] flex-shrink-0" />
                {personalInfo.location}
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#ff4d4f] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#ff4d4f] flex-shrink-0" />
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#ff4d4f] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#ff4d4f] flex-shrink-0" />
                  {personalInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. Made with{' '}
            <Heart className="w-3.5 h-3.5 text-[#ff4d4f] fill-current mx-0.5" />
            in Cairo, Egypt.
          </p>
          <p className="text-gray-600 text-xs">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
