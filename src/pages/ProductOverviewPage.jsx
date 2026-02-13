import { Link } from 'react-router-dom'

export default function ProductOverviewPage() {
  return (
    <article className="page">
      <div className="section">
        <h1 className="page__title">Coheus Overview</h1>
        <p className="section__subtitle">
          Coheus is the Profit &amp; Performance Intelligence Platform for mortgage lenders. It connects your data, market context, and operations into one place—so executives see the full picture and act with confidence.
        </p>
        <figure className="page__visual">
          <img src="/brand/brand-03.png" alt="Coheus company scorecard view" className="page__visual-img" loading="lazy" />
        </figure>
        <ul className="page__list">
          <li>Unified dashboards across pipeline, production, and risk</li>
          <li>Forward-looking projections and exports</li>
          <li>Modular views that fit your workflow</li>
          <li>Mortgage-native: built for lending, not retrofitted</li>
        </ul>
        <p className="section__subtitle" style={{ marginBottom: 0 }}>
          Clean UI, flexible configuration, and enterprise-grade security. Visuals and modular dashboard previews are available in the full product experience.
        </p>
      </div>
      <div className="section section--alt">
        <h2 className="section__title">Explore product</h2>
        <nav className="page__links">
          <Link to="/product/cohi" className="page__link">Cohi Intelligence</Link>
          <Link to="/product/how-it-works" className="page__link">How It Works</Link>
          <Link to="/demo" className="cta">Experience Cohi</Link>
        </nav>
      </div>
    </article>
  )
}
