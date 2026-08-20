import { useEffect, useState } from 'react'
import { portfolioConfig, profileImage } from '../data/portfolioConfig'

function Counter({ value, suffix, label }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (typeof value !== 'number') {
      setCurrent(value)
      return
    }

    const duration = 850
    const begin = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - begin) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [value])

  return (
    <article className="stat-card fade-up">
      <div className="stat-value">{current}{suffix}</div>
      <p className="text-sm text-slate-300 mt-2">{label}</p>
    </article>
  )
}

export default function Hero() {
  const { identity, stats } = portfolioConfig
  const [profileImageFailed, setProfileImageFailed] = useState(false)

  const techTags = [
    { label: 'Founder @ BluePeak Tech', style: { top: '8%', left: '-4%' } },
    { label: 'Software Engineer', style: { bottom: '18%', right: '-4%' } }
  ]

  return (
    <header id="home" className="section">
      <div className="hero-grid">
        <div className="fade-up">
          <p className="section-kicker">Software Engineer · Builder · Founder</p>
          <h1 className="hero-name">I build <span style={{ color: 'var(--accent)' }}>digital products</span> that solve real problems.</h1>
          <p className="text-2xl mt-4 font-bold">{identity.name}</p>
          <p className="text-lg text-slate-300 mt-1">{identity.fullTitle}</p>
          <p className="section-sub">
            Software Engineer, Full-Stack Developer and Founder of BluePeak Tech Solutions, building modern software, web applications and practical technology solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">Explore My Work -&gt;</a>
            <a href="#contact" className="btn-ghost">Let's Talk -&gt;</a>
          </div>

          <p className="mt-6 text-slate-300 text-sm">Founder @ {identity.founderOf}</p>
        </div>

        <div className="fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="hero-photo-wrap">
            {profileImageFailed ? (
              <div className="profile-photo-placeholder" role="img" aria-label="Francis Kariuki profile photo placeholder">
                <span>FK</span>
                <small>Add /images/francis-kariuki.jpg</small>
              </div>
            ) : (
              <img src={profileImage} alt={identity.name} onError={() => setProfileImageFailed(true)} />
            )}
            <div className="photo-overlay" />
            <div className="hero-grid-pattern" />
            {techTags.map((tag) => (
              <span key={tag.label} className="float-tag" style={tag.style}>{tag.label}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((item) => (
          <Counter key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
        ))}
      </div>
    </header>
  )
}
