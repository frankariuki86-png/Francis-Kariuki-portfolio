import { portfolioConfig, buildWhatsAppLink } from '../data/portfolioConfig'

export default function Footer(){
  const { identity, contact, social } = portfolioConfig

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ]

  const socials = [
    { key: 'github', label: 'GitHub', href: social.github },
    { key: 'linkedin', label: 'LinkedIn', href: social.linkedin },
    { key: 'facebook', label: 'Facebook', href: social.facebook },
    { key: 'instagram', label: 'Instagram', href: social.instagram }
  ].filter((item) => Boolean(item.href))

  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container py-10 grid md:grid-cols-3 gap-8 items-start">
        <div className="footer-identity">
          <div className="footer-logo">FK.</div>
          <div className="footer-name">{identity.name}</div>
          <div className="footer-role">{identity.fullTitle}</div>
          <div className="footer-founder">Founder — {identity.founderOf}</div>
          <div className="footer-tagline">Building technology. Solving problems. Creating impact.</div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="footer-link">{item.label}</a>
          ))}
        </div>

        <div>
          <a href={`mailto:${contact.email}`} className="footer-link block">{contact.email}</a>
          <a href={buildWhatsAppLink(contact.whatsappNumber, contact.whatsappMessage)} target="_blank" rel="noreferrer" className="footer-link block mt-2">{contact.phoneDisplay}</a>

          <div className="mt-4 flex flex-wrap gap-2">
            {socials.map((item) => (
              <a key={item.key} href={item.href} target="_blank" rel="noreferrer" className="footer-social" aria-label={item.label}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container pb-7 text-sm text-slate-400">&copy; 2026 Francis Kariuki</div>
    </footer>
  )
}
