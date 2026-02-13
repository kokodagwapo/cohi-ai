import { Link } from 'react-router-dom'

export default function DemoPage() {
  return (
    <article className="page">
      <div className="section">
        <h1 className="page__title">Interactive Demo — Cohi Chat</h1>
        <p className="section__subtitle">
          Experience Cohi with sample lender data. No sales pressure—see the value in minutes.
        </p>
        <figure className="page__visual">
          <img src="/brand/brand-23.png" alt="Cohi insights desktop demo view" className="page__visual-img" loading="lazy" />
        </figure>
        <div className="demo-placeholder">
          <p className="demo-placeholder__text">
            <strong>Cohi Chat experience</strong> will be embedded here. Pre-loaded sample data and guided prompts (e.g., “What should I worry about today?”) let you explore executive briefings and intelligence.
          </p>
          <p className="demo-placeholder__disclaimer">
            Sample / simulated data. For production use, sign up or contact sales.
          </p>
          <Link to="/sign-in" className="cta">Get Started</Link>
        </div>
      </div>
    </article>
  )
}
