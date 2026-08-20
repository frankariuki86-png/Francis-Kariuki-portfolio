const logos = ["React","JavaScript","Node.js","Express","HTML5","CSS3","Tailwind CSS","Vite","PostgreSQL","MySQL","Supabase","Git","GitHub"]

export default function TechStack(){
  return (
    <section id="tech" className="mt-16 py-12">
      <h2 className="text-2xl font-semibold">Technology Stack</h2>
      <div className="mt-4 section-banner">
        <img src="/images/tech.svg" alt="Tech stack" />
        <div className="banner-overlay" />
        <div className="banner-title">Technology Stack</div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {logos.map(l => <div key={l} className="p-2 bg-slate-50 rounded-lg border text-slate-700 text-sm">{l}</div>)}
      </div>
    </section>
  )
}
