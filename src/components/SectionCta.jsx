import { Link } from 'react-router-dom'

export default function SectionCta() {
  return (
    <section id="clarity" className="section section--alt section-cta" aria-labelledby="section-cta-title">
      <h2 id="section-cta-title" className="section__title section__title--center">
        Self-experience Cohi in under 5 minutes
      </h2>
      <p className="section__lead">
        Explore guided prompts, review a sample executive briefing, and see how Cohi turns complex lending operations into clear executive actions.
      </p>
      <div className="section-cta__actions">
        <Link to="/demo" className="cta section-cta__btn">Experience Cohi</Link>
        <Link to="/demo" className="cta cta--secondary section-cta__btn">View Executive Briefing Demo</Link>
      </div>
    </section>
  )
}
