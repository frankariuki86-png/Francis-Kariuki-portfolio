export default function About() {
  return (
    <section id="about" className="mt-16 py-12">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <div className="mt-4 section-banner">
            <img src="/images/about.svg" alt="Developer workspace" />
            <div className="banner-overlay" />
            <div className="banner-title">About Francis Kariuki</div>
          </div>
          <p className="mt-3 text-slate-700">I am a Software Engineer from the University of Eastern Africa, Baraton and the founder of BluePeak Tech Solutions. I deliver practical, business-focused technology products and services.</p>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
            <li>Full-stack web development</li>
            <li>Software and system development</li>
            <li>ERP / POS systems</li>
            <li>Database systems</li>
            <li>IT support and troubleshooting</li>
            <li>Networking</li>
            <li>Graphic design</li>
            <li>Social media management</li>
            <li>Business technology solutions</li>
          </ul>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="mt-2 text-slate-600">Founder — BluePeak Tech Solutions</p>
          <p className="mt-1 text-slate-600">BSc Software Engineering — University of Eastern Africa, Baraton</p>
          <p className="mt-3 text-slate-600">Current: PrimeSoft Solutions — Software Engineer</p>
        </div>
      </div>
    </section>
  )
}
