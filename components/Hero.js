export default function Hero() {
  return (
    <header className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="fade-up">
        <p className="text-sm text-slate-500">Hello, I’m</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Francis Kariuki</h1>
        <p className="mt-2 text-lg text-slate-700">Software Engineer & Technology Solutions Specialist</p>

        <p className="mt-6 max-w-xl text-slate-600">I build practical software, digital products and technology solutions that solve real-world problems. I specialize in software development, web applications, IT solutions, digital design and business technology.</p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-ghost">Let's Work Together</a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="hero-profile">
          <img src="/profile.svg" alt="Francis Kariuki" />
        </div>
      </div>
    </header>
  )
}
