import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Services from '../components/Services'
import DigitalMarketing from '../components/DigitalMarketing'
import Gallery from '../components/Gallery'
import TechStack from '../components/TechStack'
import WhyWorkWithMe from '../components/WhyWorkWithMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="page-shell">
      <main className="container py-10 md:py-14">
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Skills />
        <DigitalMarketing />
        <Gallery />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
