import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionUgc from '../components/SectionUgc'
import SectionOutcomes from '../components/SectionOutcomes'
import SectionAboutCoheus from '../components/SectionAboutCoheus'
import SectionContact from '../components/SectionContact'

export default function HomePage() {
  const { state, hash } = useLocation()

  useEffect(() => {
    const targetId = state?.scrollTo || (hash ? hash.slice(1) : null)
    if (targetId) {
      const el = document.getElementById(targetId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [state, hash])

  return (
    <>
      <div className="snap-section" id="hero">
        <Hero />
      </div>
      <div className="snap-section" id="cohi-in-action">
        <SectionUgc />
      </div>
      <div className="snap-section" id="outcomes">
        <SectionOutcomes />
      </div>
      <div className="snap-section" id="about-coheus">
        <SectionAboutCoheus />
      </div>
      <div className="snap-section" id="contact">
        <SectionContact />
      </div>
    </>
  )
}
