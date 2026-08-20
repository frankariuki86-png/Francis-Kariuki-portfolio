import { useState } from 'react'
import { portfolioConfig, profileImage } from '../data/portfolioConfig'

export default function About() {
  const { identity } = portfolioConfig
  const [profileImageFailed, setProfileImageFailed] = useState(false)
  const [aboutExpanded, setAboutExpanded] = useState(false)

  const highlights = [
    {
      title: 'Education',
      lineOne: 'BSc Software Engineering',
      lineTwo: 'University of Eastern Africa, Baraton'
    },
    {
      title: 'Current Role',
      lineOne: 'Software Engineer',
      lineTwo: 'PrimeSoft Solutions'
    },
    {
      title: 'Founder',
      lineOne: 'BluePeak Tech Solutions',
      lineTwo: 'Technology Company'
    }
  ]

  return (
    <section id="about" className={`section about-section ${aboutExpanded ? 'about-expanded' : ''} fade-up`}>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="hero-photo-wrap max-w-none about-desktop-photo">
            {profileImageFailed ? (
              <div className="profile-photo-placeholder about-photo-placeholder" role="img" aria-label="Francis Kariuki profile photo placeholder">
                <span>FK</span>
                <small>Add /images/francis-kariuki.jpg</small>
              </div>
            ) : (
              <img src={profileImage} alt={identity.name} style={{ height: '460px' }} onError={() => setProfileImageFailed(true)} />
            )}
            <div className="photo-overlay" />
          </div>

        <div>
          <p className="section-kicker">About Francis</p>
          <h2 className="section-title">About Francis</h2>
          <p className="section-sub">
            I am a Software Engineer from the University of Eastern Africa, Baraton, passionate about building practical technology solutions that solve real problems.
          </p>
          <p className="section-sub mt-4">
            I currently work with PrimeSoft Solutions while also building products and providing technology services through BluePeak Tech Solutions, a technology company I founded.
          </p>
          <p className="section-sub mt-4">
            My experience combines software development, business systems, databases, IT infrastructure, graphic design and digital marketing.
          </p>

          <button type="button" className="btn-ghost about-more" onClick={() => setAboutExpanded((value) => !value)}>
            {aboutExpanded ? 'Show Less ↑' : 'Read More About Me →'}
          </button>

          <div className="about-mobile-photo hero-photo-wrap" aria-hidden="true">
            {profileImageFailed ? (
              <div className="profile-photo-placeholder about-photo-placeholder">
                <span>FK</span>
              </div>
            ) : (
              <img src={profileImage} alt="" onError={() => setProfileImageFailed(true)} />
            )}
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {highlights.map((item) => (
              <article key={item.title} className="panel p-4">
                <h3 className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold">{item.lineOne}</p>
                <p className="text-sm text-slate-400 mt-1">{item.lineTwo}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
