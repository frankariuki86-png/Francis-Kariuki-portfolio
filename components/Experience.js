export default function Experience() {
  return (
    <section id="experience" className="mt-16 py-12">
      <h2 className="text-2xl font-semibold">Professional Experience</h2>
      <div className="mt-4 section-banner">
        <img src="/images/experience.svg" alt="Team collaboration" />
        <div className="banner-overlay" />
        <div className="banner-title">Professional Experience</div>
      </div>

      <div className="mt-6 space-y-6">
        <article className="glass-card p-6">
          <h3 className="text-lg font-semibold">PrimeSoft Solutions</h3>
          <p className="text-slate-600">Software Engineer / IT & Systems Specialist</p>
          <ul className="mt-3 text-slate-600 list-disc list-inside">
            <li>Worked on software systems, ERP/POS environments and database implementations.</li>
            <li>Provided troubleshooting, implementation and technical support for business systems.</li>
          </ul>
        </article>

        <article className="glass-card p-6">
          <h3 className="text-lg font-semibold">BluePeak Tech Solutions</h3>
          <p className="text-slate-600">Founder & Technology Solutions Specialist</p>
          <ul className="mt-3 text-slate-600 list-disc list-inside">
            <li>Founded BluePeak Tech Solutions to provide web development, software, design and digital services.</li>
            <li>Services include networking, computer support, CCTV and access control, and social media management.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
