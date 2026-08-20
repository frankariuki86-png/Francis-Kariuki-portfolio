const Item = ({title, desc}) => (
  <div className="p-4 glass-card rounded-md">
    <h4 className="font-semibold">{title}</h4>
    <p className="mt-2 text-slate-600">{desc}</p>
  </div>
)

export default function WhyWorkWithMe(){
  return (
    <section id="why" className="mt-16 py-12">
      <h2 className="text-2xl font-semibold">Why Work With Me</h2>
      <div className="mt-4 section-banner">
        <img src="/images/why.svg" alt="Why work with me" />
        <div className="banner-overlay" />
        <div className="banner-title">Why choose me?</div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Item title="Problem Solver" desc="I focus on building practical solutions to real business problems." />
        <Item title="Full-Stack Capability" desc="I can work across frontend, backend, APIs and databases." />
        <Item title="Technical + Creative" desc="I combine software engineering with design and digital marketing." />
        <Item title="Business-Focused" desc="I understand both technology and real-world business needs." />
      </div>
    </section>
  )
}
