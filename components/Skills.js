const Category = ({title, items}) => (
  <div className="p-4 glass-card rounded-md">
    <h4 className="font-semibold">{title}</h4>
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map(i => <span key={i} className="tech-badge">{i}</span>)}
    </div>
  </div>
)

export default function Skills(){
  return (
    <section id="skills" className="mt-16 py-12">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 section-banner">
        <img src="/images/skills.svg" alt="Coding skills" />
        <div className="banner-overlay" />
        <div className="banner-title">Core Technical Skills</div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Category title="Software Development" items={["HTML","CSS","JavaScript","React.js","Node.js","Express.js","Vite","Tailwind CSS","REST APIs","Git & GitHub"]} />
        <Category title="Databases" items={["MySQL","PostgreSQL","SQL","Database Design","Supabase"]} />
        <Category title="IT & Networking" items={["Computer Repair","Troubleshooting","Windows Installation","Printer Configuration","Networking","Wi-Fi","Router Configuration","CCTV","Access Control","Office Setup"]} />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Category title="Creative & Digital" items={["Graphic Design","Poster Design","Branding","Photo Editing","Social Media Management","Content Creation"]} />
      </div>
    </section>
  )
}
