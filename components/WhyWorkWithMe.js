const Item = ({ index, title, desc }) => (
  <article className="panel p-5 fade-up">
    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">0{index}</div>
    <h4 className="mt-4 text-lg font-semibold">{title}</h4>
    <p className="mt-3 text-slate-300 text-sm leading-7">{desc}</p>
  </article>
)

export default function WhyWorkWithMe(){
  return (
    <section id="why" className="section fade-up">
      <p className="section-kicker">Why Work With Me</p>
      <h2 className="section-title">Why Work With Me</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Item index={1} title="Engineering Mindset" desc="I approach problems through structured software engineering." />
        <Item index={2} title="Practical Solutions" desc="I focus on useful technology rather than unnecessary complexity." />
        <Item index={3} title="Full-Stack Capability" desc="Frontend, backend, APIs and databases." />
        <Item index={4} title="Technical + Creative" desc="Engineering combined with design and digital communication." />
      </div>
    </section>
  )
}
