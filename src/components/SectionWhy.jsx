import { Link } from 'react-router-dom'

const PILLARS = [
  {
    title: 'Executive briefing',
    text: 'A daily leadership view of revenue, risk, and momentum so the C-suite starts aligned.',
  },
  {
    title: 'Pipeline and fallout watch',
    text: 'Forward-looking visibility into fallout projections, stalled files, and at-risk exposure.',
  },
  {
    title: 'Performance movement',
    text: 'TopTiering insights reveal who drives results, where coaching is needed, and where standards must rise.',
  },
  {
    title: 'Market and margin context',
    text: 'Rate and market intelligence aligned to your operation so leadership can protect spread and profitability.',
  },
]

export default function SectionWhy() {
  return (
    <section id="why" className="section section--alt section-why" aria-labelledby="section-why-title">
      <h2 id="section-why-title" className="section__title section__title--center">
        What Cohi tells you every day
      </h2>
      <p className="section__lead">
        Executive-level clarity without clutter. No jargon. Just what matters now, what is changing, and where to act first.
      </p>
      <div className="section-why__grid">
        {PILLARS.map(({ title, text }) => (
          <article key={title} className="section-why__card">
            <h3 className="section-why__card-title">{title}</h3>
            <p className="section-why__card-text">{text}</p>
          </article>
        ))}
      </div>
      <p className="section-why__cta-wrap">
        <Link to="/demo" className="cta section-why__cta">Experience Cohi</Link>
      </p>
    </section>
  )
}
