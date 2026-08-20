import { useEffect, useMemo, useState } from 'react'
import { portfolioConfig } from '../data/portfolioConfig'

export default function Gallery(){
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeImage, setActiveImage] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const images = portfolioConfig.images.graphicDesign

  const categories = ['All', 'Branding', 'Posters', 'Social Media', 'Certificates', 'Campaign Designs']

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return images
    return images.filter((item) => item.category === activeCategory)
  }, [activeCategory, images])
  const visibleImages = filteredImages

  const activeIndex = activeImage ? filteredImages.findIndex((item) => item.src === activeImage.src) : -1
  const showPrevious = () => {
    if (activeIndex < 0) return
    setActiveImage(filteredImages[(activeIndex - 1 + filteredImages.length) % filteredImages.length])
  }
  const showNext = () => {
    if (activeIndex < 0) return
    setActiveImage(filteredImages[(activeIndex + 1) % filteredImages.length])
  }

  useEffect(() => {
    if (!activeImage) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImage(null)
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <section id="gallery" className={`section gallery-section ${showAll ? 'gallery-expanded' : ''} fade-up`}>
      <p className="section-kicker">Creative Work</p>
      <h2 className="section-title">Creative Work</h2>
      <p className="section-sub">Design, branding and digital content created for businesses, organizations and social media.</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? 'btn-primary' : 'btn-ghost'}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-masonry editorial-gallery">
        {visibleImages.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className={`gallery-card ${index > 3 ? 'mobile-art-hidden' : ''} ${item.category === 'Branding' ? 'tall' : ''} ${item.category === 'Certificates' ? 'wide' : ''}`}
            onClick={() => setActiveImage(item)}
          >
            <img src={item.src} alt={`${item.title}, ${item.category}`} loading="lazy" />
            <span className="gallery-overlay text-left">
              <span className="text-sm font-semibold">{item.title}</span>
              <span className="text-sm text-slate-300">{item.category} · View ↗</span>
            </span>
          </button>
        ))}
      </div>

      {activeCategory === 'All' && images.length > 6 && (
        <button type="button" className="btn-ghost content-more" onClick={() => setShowAll((value) => !value)}>
          {showAll ? 'Show Less ↑' : 'View All Creative Work ↓'}
        </button>
      )}

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveImage(null)}>
          <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
              <div className="lightbox-toolbar">
                <span>{activeImage.title}</span>
                <button type="button" onClick={() => setActiveImage(null)} className="lightbox-close" aria-label="Close artwork preview">×</button>
              </div>
              <img src={activeImage.src} alt={`${activeImage.title}, ${activeImage.category}`} />
              <div className="lightbox-controls">
                <button type="button" onClick={showPrevious} className="btn-ghost" aria-label="Previous artwork">← Previous</button>
                <span>{activeIndex + 1} / {filteredImages.length}</span>
                <button type="button" onClick={showNext} className="btn-ghost" aria-label="Next artwork">Next →</button>
              </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
