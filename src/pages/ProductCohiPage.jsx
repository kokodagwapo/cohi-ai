import { Link } from 'react-router-dom'

export default function ProductCohiPage() {
  return (
    <article className="page">
      <div className="section">
        <h1 className="page__title">Cohi Intelligence</h1>
        <p className="section__subtitle">
          Cohi is the always-on AI intelligence at the center of Coheus—calm authority, not hype. It delivers what executives need to lead from the front.
        </p>
        <figure className="page__visual page__visual--mobile">
          <img src="/brand/brand-21.png" alt="Cohi insights mobile interface" className="page__visual-img" loading="lazy" />
        </figure>
        <ul className="page__list">
          <li><strong>Daily executive briefings</strong> — Curated insights with reasoning, before coffee</li>
          <li><strong>Fallout projections and risk signals</strong> — Early visibility into at-risk exposure</li>
          <li><strong>TopTiering insights</strong> — For sales and operations performance</li>
          <li><strong>Agency &amp; compliance knowledge</strong> — FNMA, FHLMC, FHA, VA, TRID, ATR/QM</li>
          <li><strong>Market intelligence</strong> — Optimal Blue rates and market context</li>
        </ul>
        <p className="section__subtitle" style={{ marginBottom: 0 }}>
          Mortgage-native. Built for clarity, confidence, and speed.
        </p>
      </div>
      <div className="section section--alt">
        <Link to="/demo" className="cta">Experience Cohi</Link>
      </div>
    </article>
  )
}
