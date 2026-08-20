export default function Experience() {
  const entries = [
    {
      company: 'PrimeSoft Solutions',
      role: 'Software Engineer / IT & Systems Specialist',
      points: [
        'Software systems development and support',
        'ERP/POS environments and integrations',
        'Database systems implementation',
        'System rollout and user onboarding',
        'Troubleshooting and performance optimization',
        'Technical support for business operations'
      ]
    },
    {
      company: 'BluePeak Tech Solutions',
      role: 'Founder & Technology Solutions Specialist',
      points: [
        'Web development and digital product delivery',
        'Custom software development projects',
        'Graphic design and branding work',
        'Social media management and content planning',
        'Networking and office setup',
        'Computer support and maintenance',
        'CCTV and access control installations',
        'Business technology solution consulting'
      ]
    }
  ]

  return (
    <section id="experience" className="section fade-up">
      <p className="section-kicker">Experience</p>
      <h2 className="section-title">Experience Timeline</h2>
      <p className="section-sub">Hands-on software engineering and technology services across enterprise and entrepreneurial environments.</p>

      <div className="timeline">
        {entries.map((entry) => (
          <article key={entry.company} className="timeline-item fade-up">
            <h3 className="text-xl font-bold">{entry.company}</h3>
            <p className="text-slate-300 mt-1">{entry.role}</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-300 experience-points">
              {entry.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
