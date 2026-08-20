export default function Footer(){
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold">Francis Kariuki</div>
          <div className="text-sm text-slate-600">Software Engineer & Technology Solutions Specialist</div>
          <div className="text-sm text-slate-600">Founder — BluePeak Tech Solutions</div>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="mailto:frankariuki86@gmail.com" className="text-slate-600">frankariuki86@gmail.com</a>
          <a href="https://wa.me/254711768878" className="text-slate-600">+254 711 768 878</a>
          <div className="flex items-center gap-2">
            <a href="#" aria-label="Facebook" className="text-slate-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3v7.03C18.34 21.19 22 17.06 22 12.07z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-slate-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm6.4-.9a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.45 20.45h-3.554v-5.569c0-1.328-.026-3.035-1.85-3.035-1.853 0-2.136 1.445-2.136 2.939v5.665H9.353V9h3.414v1.561h.049c.476-.9 1.636-1.85 3.366-1.85 3.6 0 4.266 2.369 4.266 5.455v6.785zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.94 20.45H3.735V9H6.94v11.45z"/></svg>
            </a>
            <a href="https://wa.me/254711768878" aria-label="WhatsApp" className="text-slate-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.86 11.86 0 0012 0C5.373 0 .03 5.344.03 11.97c0 2.108.55 4.166 1.6 5.996L0 24l6.2-1.62A11.93 11.93 0 0012 23.94c6.627 0 11.97-5.344 11.97-11.97 0-3.2-1.246-6.197-3.45-8.49zM12 21.5c-1.31 0-2.6-.34-3.73-.98l-.27-.16-3.68.96.99-3.59-.17-.28A8.34 8.34 0 013.7 12c0-4.6 3.74-8.34 8.34-8.34 4.6 0 8.34 3.74 8.34 8.34 0 4.6-3.74 8.34-8.34 8.34z"/><path d="M17.18 14.45c-.24-.12-1.41-.7-1.63-.78-.22-.08-.39-.12-.56.12-.17.24-.67.78-.81.94-.14.17-.28.19-.52.06-.24-.12-1-0.37-1.9-1.17-.7-.62-1.17-1.39-1.31-1.63-.14-.24-.015-.37.105-.49.11-.11.24-.29.36-.44.12-.17.16-.28.25-.46.08-.17.04-.33-.02-.45-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43l-.48-.01c-.17 0-.45.06-.69.33-.24.27-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.12.17 1.85 2.86 4.49 3.9 3.14 1.24 3.14.83 3.71.78.12-.02.99-.4 1.13-.79.14-.38.14-.7.1-.79-.04-.09-.18-.13-.42-.24z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
