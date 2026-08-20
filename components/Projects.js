const ProjectCard = ({title, desc, tags = [], comingSoon=false}) => (
  <div className={`project-card p-6 ${comingSoon ? 'border border-dashed border-slate-200 bg-slate-50' : ''}`}>
    <div className="project-hero rounded-md">{comingSoon ? <div className="text-center">Coming Soon</div> : <div className="text-slate-400">Screenshot</div>}</div>
    <h4 className="mt-4 font-semibold text-slate-900">{title}</h4>
    <p className="mt-2 text-slate-600">{desc}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map(t => <span key={t} className="tech-badge">{t}</span>)}
    </div>
  </div>
)

export default function Projects(){
  return (
    <section id="projects" className="mt-16 py-12">
      <div className="section-title">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
      </div>
      <div className="mt-4 section-banner">
        <img src="/images/projects.svg" alt="Project showcase" />
        <div className="banner-overlay" />
        <div className="banner-title">Selected Work & Case Studies</div>
      </div>

      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
        <ProjectCard title="BluePeak Tech Solutions Website" desc="Company website demonstrating web development, branding and digital business presentation." tags={["React","JavaScript","Tailwind"]} />
        <ProjectCard title="Wynse TTI Website" desc="Institutional website project for business and educational clients." tags={["React","HTML","CSS"]} />
        <ProjectCard title="Bulk SMS Web Application" desc="A web-based SMS management platform for sending and managing bulk messages." tags={["Node.js","Express","Databases"]} />
        <ProjectCard title="Employee Performance & Evaluation System" desc="Employee management, performance evaluation, analytics, reporting and administration." tags={["React","Node.js","PostgreSQL"]} />
        <ProjectCard comingSoon={true} title="ERP & POS System — Coming Soon" desc="Business management platform for sales, inventory, payments and reporting." tags={["ERP","POS","Business"]} />
        <ProjectCard comingSoon={true} title="Expense Tracker & Finance Platform — Coming Soon" desc="Modern finance platform to track income, expenses and transactions." tags={["Finance","Analytics"]} />
      </div>
    </section>
  )
}
