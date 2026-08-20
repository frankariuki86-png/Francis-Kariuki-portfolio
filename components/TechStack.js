import { portfolioConfig } from '../data/portfolioConfig'

export default function TechStack(){
  const { images } = portfolioConfig

  return (
    <section id="what-i-do" className="section section-compact technology-focus fade-up">
      <div className="technology-focus-copy">
        <p className="section-kicker">Technology / What I Do</p>
        <h2 className="section-title">Technology Meets Creativity</h2>
        <p className="section-sub text-lg">
          My work sits at the intersection of software engineering, technology infrastructure and creative digital solutions.
        </p>
        <div className="technology-pillars">
          <div><strong>Build</strong><span>Software &amp; Web Applications</span></div>
          <div><strong>Connect</strong><span>IT, Networking &amp; Infrastructure</span></div>
          <div><strong>Create</strong><span>Design &amp; Digital Media</span></div>
        </div>
      </div>
      <div className="technology-focus-visual">
        <img
          src={images.technologyWorkspace}
          alt="Modern software development workspace with laptop and monitor"
          loading="lazy"
          onError={(event) => { event.currentTarget.src = images.technologyWorkspaceLocal }}
        />
        <span className="technology-visual-label">Build useful things</span>
      </div>
    </section>
  )
}
