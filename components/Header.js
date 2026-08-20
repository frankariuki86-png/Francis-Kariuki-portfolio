import { useState, useEffect } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className="py-4 border-b nav-sticky">
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/favicon.svg" alt="logo" style={{width:34,height:34}}/>
          <span className="text-lg font-semibold">Francis Kariuki</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#about" className="hover:text-slate-900 transition">About</a>
          <a href="#projects" className="hover:text-slate-900 transition">Projects</a>
          <a href="#services" className="hover:text-slate-900 transition">Services</a>
          <a href="#contact" className="inline-flex items-center px-3 py-2 btn-primary">Contact</a>
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
              <img src="/favicon.svg" alt="logo" style={{width:34,height:34}}/>
              <span className="font-semibold">Francis Kariuki</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" className="btn-primary inline-block text-center" onClick={() => setOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>
    </nav>
  )
}
