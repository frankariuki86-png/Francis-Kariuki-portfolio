import { portfolioConfig } from '../data/portfolioConfig'

export default function DigitalMarketing(){
  const thumbnails = portfolioConfig.images.graphicDesign.filter((item) => item.category === 'Social Media' || item.category === 'Posters').slice(0, 4)

  return (
    <section id="digital-marketing" className="section fade-up">
      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        <div>
          <p className="section-kicker">Digital Marketing</p>
          <h2 className="section-title">Digital Marketing &amp; Social Media</h2>
          <p className="section-sub">
            I manage and create content for multiple Facebook pages, combining graphic design, captions, content planning and social media management.
          </p>

          <div className="marketing-stats">
            <div><strong>5+</strong><span>Facebook Pages Managed</span></div>
            <div><strong>Content</strong><span>Creation &amp; Management</span></div>
            <div><strong>Design</strong><span>Social Media Graphics</span></div>
          </div>
        </div>

        <article className="panel p-5 fade-up social-mockup">
          <div className="grid grid-cols-2 gap-3 h-full">
            {thumbnails.map((thumb) => (
              <div key={thumb.src} className="feature-card overflow-hidden p-0">
                <img src={thumb.src} alt={thumb.title} className="w-full h-36 object-cover" />
              </div>
            ))}
            <div className="feature-card col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Management</p>
              <p className="mt-2 text-base font-semibold">Page Operations for Multiple Facebook Pages</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
