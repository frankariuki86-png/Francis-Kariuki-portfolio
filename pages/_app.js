import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import { useEffect } from 'react'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { portfolioConfig } from '../data/portfolioConfig'

function MyApp({ Component, pageProps }) {
  const { seo } = portfolioConfig

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
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <WhatsAppFloat />
    </>
  )
}

export default MyApp
