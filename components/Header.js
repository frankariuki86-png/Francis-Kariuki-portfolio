import { useState, useEffect } from 'react'
import { portfolioConfig } from '../data/portfolioConfig'

export default function Header(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { identity } = portfolioConfig

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav-shell ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="font-black tracking-[0.2em] text-sm">FK.</div>
          <div className="hidden sm:block text-sm text-slate-300">Francis Kariuki</div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="nav-cta">Let's Talk ↗</a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="font-black tracking-[0.2em] text-sm">FK.</div>
              <div className="text-sm text-slate-300">Francis Kariuki</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {links.map(link => (
              <a key={link.label} href={link.href} className="nav-link text-lg" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta inline-flex mt-3" onClick={() => setOpen(false)}>
              Let's Talk ↗
            </a>
          </nav>
        </div>
      </div>
    </nav>
  )
}
