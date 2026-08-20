import { useState } from 'react'
import { portfolioConfig } from '../data/portfolioConfig'

function DashboardPreview({ project }) {
  const isFinance = project.key === 'finance'
  const isPeople = project.key === 'employeeEvaluation'
  const dashboardTitle = isPeople ? 'Performance overview' : isFinance ? 'Financial overview' : 'Messaging overview'
  const dashboardLabel = isPeople ? 'EMPLOYEE ANALYTICS' : isFinance ? 'FINANCE ANALYTICS' : 'SMS CAMPAIGNS'

  return (
    <div className={`dashboard-preview ${isFinance ? 'finance-preview' : ''}`} data-replaceable-image={project.image}>
      <>
          <div className="dashboard-sidebar">
            <span className="dashboard-logo">{isPeople ? 'PEOPLE' : isFinance ? 'FINANCE' : 'SMS'}</span>
            <i /><i /><i /><i />
          </div>
          <div className="dashboard-main">
            <div className="dashboard-toolbar"><span /><span /><span /></div>
            <div className="dashboard-heading"><b>{dashboardTitle}</b><em>{dashboardLabel}</em></div>
            <div className="dashboard-metrics"><span /><span /><span /></div>
            <div className="dashboard-chart"><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="dashboard-table"><span /><span /><span /><span /></div>
          </div>
      </>
    </div>
  )
}

function ProjectPreview({ project, imageSrc }) {
  const [imageFailed, setImageFailed] = useState(false)
  const livePreview = project.previewUrl && !project.previewType

  return (
    <a href={project.href} target="_blank" rel="noreferrer" className="browser-mockup project-media-link" aria-label={project.title}>
      <div className="browser-toolbar">
        <span className="browser-dots"><i /><i /><i /></span>
        <span className="browser-address">{project.previewUrl || project.href}</span>
        <span className="browser-controls">•••</span>
      </div>
      <div className="browser-viewport">
        {livePreview ? <iframe src={project.previewUrl} title={`${project.title} live preview`} loading="lazy" /> : project.previewType === 'dashboard' ? <DashboardPreview project={project} /> : (
          !imageFailed && imageSrc ? <img src={imageSrc} alt={project.title} onError={() => setImageFailed(true)} /> : <DashboardPreview project={project} />
        )}
        <div className="gallery-overlay"><span className="text-sm font-semibold">View Project ↗</span></div>
      </div>
    </a>
  )
}

const ProjectCard = ({ project, imageSrc }) => (
  <article className={`editorial-project ${project.featured ? 'featured-project' : ''} ${project.order % 2 === 1 ? 'image-right' : 'image-left'} fade-up`}>
    <span className="project-number project-row-number">{String(project.order).padStart(2, '0')}</span>
    <div className="project-preview-column">
      <ProjectPreview project={project} imageSrc={imageSrc} />
    </div>

    <div className="editorial-copy project-copy-column">
      <span className="badge">{project.category}</span>
      {project.comingSoon && <span className="project-status">COMING SOON <small>Currently in Development</small></span>}
      <h3 className="mt-3 text-3xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-4 text-slate-300 text-sm md:text-base leading-7">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => <span key={item} className="tech-badge">{item}</span>)}
      </div>

      <a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="inline-flex mt-6 btn-ghost">
        {project.ctaLabel} ↗
      </a>
    </div>
  </article>
)

export default function Projects(){
  const { projects, images } = portfolioConfig
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="section fade-up">
      <div>
        <p className="section-kicker">Featured Projects</p>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-sub">A selection of software, websites and digital products I've designed and developed.</p>
      </div>

      <div className="projects-list mt-8">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.key}
            project={{ ...project, order: index + 1 }}
            imageSrc={images.projects[project.key]}
          />
        ))}
      </div>
      <button type="button" className="btn-ghost projects-more" onClick={() => setShowAll((value) => !value)}>
        {showAll ? 'Show Featured Projects ↑' : 'View All Projects →'}
      </button>
    </section>
  )
}
