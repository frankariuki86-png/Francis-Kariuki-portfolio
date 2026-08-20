import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // reveal elements with .fade-up when they enter the viewport
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animate')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Francis Kariuki — Software Engineer</title>
        <meta name="description" content="Francis Kariuki — Software Engineer & Technology Solutions Specialist" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
