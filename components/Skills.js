import { useEffect, useState } from 'react'

const descriptions = {
  Development: 'Frontend and backend application development',
  Databases: 'Structured data and application storage',
  Tools: 'Version control and service integration',
  'IT & Infrastructure': 'Networks, devices and technical operations'
}

const Category = ({ index, title, items }) => (
  <article className="skills-category fade-up">
    <div className="skills-category-heading">
      <span className="skills-category-number">{String(index).padStart(2, '0')}</span>
      <h3 className="skills-category-title">{title}</h3>
    </div>
    <p className="skills-category-description">{descriptions[title]}</p>
    <div className="skills-tool-grid">
      {items.map((item) => (
        <div key={item} className="skills-tool-card">
          <span className="skills-tool-icon" aria-hidden="true">◆</span>
          <span className="skills-tool-name">{item}</span>
          <span className="skills-tool-description">Technology &amp; tools</span>
        </div>
      ))}
    </div>
  </article>
)

export default function Skills(){
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const updateViewport = () => setIsMobile(mediaQuery.matches)
    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)
    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])
  const categories = [
    {
      title: 'Development',
      items: ['React.js', 'Next.js', 'JavaScript', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'SQL', 'Supabase', 'DB2']
    },
    {
      title: 'Tools',
      items: ['Git', 'GitHub', 'REST APIs']
    },
    {
      title: 'IT & Infrastructure',
      items: ['Networking', 'Wi-Fi', 'Routers', 'CCTV', 'Access Control', 'Computer Repair', 'Printer Configuration']
    }
  ]

  return (
    <section id="skills" className={`section skills-section ${showAll ? 'skills-expanded' : ''} fade-up`}>
      <p className="section-kicker">Tools I Build With</p>
      <h2 className="section-title">Tools I Build With</h2>
      <p className="section-sub">A balanced stack across software engineering, data systems and IT operations.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {(isMobile && !showAll ? categories.slice(0, 1) : categories).map((category, index) => (
          <Category key={category.title} index={index + 1} title={category.title} items={category.items} />
        ))}
      </div>
      <button type="button" className="btn-ghost content-more skills-more" onClick={() => setShowAll((value) => !value)}>
        {showAll ? 'Show Less ↑' : 'See More Technologies ↓'}
      </button>
    </section>
  )
}
