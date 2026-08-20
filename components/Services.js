function ServiceIcon({ title }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  }

  if (title === 'Web Development') return <svg {...common}><path d="M4 5h16v10H4z" /><path d="M4 9h16" /><path d="M8 19h8" /></svg>
  if (title === 'Software Development') return <svg {...common}><path d="m9 18 6-12" /><path d="M7 6h10" /><path d="M7 18h10" /></svg>
  if (title === 'ERP & POS') return <svg {...common}><path d="M4 6h16v12H4z" /><path d="M4 10h16" /><path d="M9 18v-8" /></svg>
  if (title === 'IT Support') return <svg {...common}><path d="M7 16h10" /><path d="M9 8h6" /><path d="M6 5h12v12H6z" /></svg>
  if (title === 'Networking') return <svg {...common}><path d="M4 18c2-4 6-6 8-6s6 2 8 6" /><path d="M8 12c1.2-2 2.8-3 4-3s2.8 1 4 3" /><path d="M11 6h2" /></svg>
  if (title === 'CCTV & Access Control') return <svg {...common}><path d="M4 12c1.8-3.5 5.1-6 8-6s6.2 2.5 8 6c-1.8 3.5-5.1 6-8 6s-6.2-2.5-8-6z" /><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /></svg>
  if (title === 'Graphic Design') return <svg {...common}><path d="M4 18c4-3 7-8 16-12" /><path d="M7 8l2 2" /><path d="M16 4l4 4" /></svg>
  if (title === 'Social Media Management') return <svg {...common}><path d="M5 6h14v10H9l-4 4V6z" /><path d="M9 10h6" /><path d="M9 13h4" /></svg>
  return <svg {...common}><path d="M6 7h12v10H6z" /><path d="M10 11h4" /><path d="M12 9v4" /></svg>
}

const Card = ({ index, title, desc }) => (
  <article className="service-card fade-up">
    <div className="service-topline">
      <div className="service-number">{String(index).padStart(2, '0')}</div>
      <div className="service-icon"><ServiceIcon title={title} /></div>
    </div>
    <h4 className="mt-5 text-lg font-semibold">{title}</h4>
    <p className="mt-3 text-slate-300 leading-7 text-sm">{desc}</p>
    <div className="mt-5 text-sm font-semibold text-[#7de2b2]">→</div>
  </article>
)

const services = [
  { title: 'Web Development', desc: 'Modern responsive websites and web applications.' },
  { title: 'Software Development', desc: 'Custom software and business systems.' },
  { title: 'ERP & POS', desc: 'Sales, inventory, payments and business management systems.' },
  { title: 'IT Support', desc: 'Computer repair, installation and troubleshooting.' },
  { title: 'Networking', desc: 'Wi-Fi, routers, network configuration and office networking.' },
  { title: 'CCTV & Access Control', desc: 'Security system installation and configuration.' },
  { title: 'Graphic Design', desc: 'Posters, branding, certificates and marketing materials.' },
  { title: 'Social Media Management', desc: 'Facebook page management, content creation and digital campaigns.' },
  { title: 'Printer Configuration', desc: 'Printer setup, sharing and reliable office printing support.' },
  { title: 'Windows Installation', desc: 'Operating system installation, setup and essential configuration.' },
  { title: 'Online Services', desc: 'eCitizen, HELB, KUCCPS, passport services and CV creation.' }
]

export default function Services() {
  return (
    <section id="services" className="section fade-up">
      <p className="section-kicker">Services</p>
      <h2 className="section-title">What I Can Help You Build</h2>
      <p className="section-sub">Flexible engagement from software and IT infrastructure to branding and digital operations.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <Card key={service.title} index={index + 1} title={service.title} desc={service.desc} />
        ))}
      </div>
    </section>
  )
}
