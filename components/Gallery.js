export default function Gallery(){
  return (
    <section id="gallery" className="mt-16 py-12">
      <h2 className="text-2xl font-semibold">Graphic Design Showcase</h2>
      <div className="mt-4 section-banner">
        <img src="/images/gallery.svg" alt="Design showcase" />
        <div className="banner-overlay" />
        <div className="banner-title">Graphic Design Showcase</div>
      </div>
      <p className="mt-2 text-slate-600">A gallery for posters, social media graphics, branding and marketing materials. Upload examples to replace placeholders.</p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({length:8}).map((_,i) => (
          <div key={i} className="h-36 overflow-hidden rounded-md"><img src={`/images/art${i+1}.svg`} alt={`Artwork ${i+1}`} className="w-full h-full object-cover"/></div>
        ))}
      </div>
    </section>
  )
}
