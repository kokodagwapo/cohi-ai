import { Link } from 'react-router-dom'

export default function SectionWhyCoheus() {
  return (
    <section id="why-coheus" className="section section--alt" aria-labelledby="why-coheus-title">
      <h2 id="why-coheus-title" className="section__title">
        What makes Coheus different
      </h2>
      <p className="section__subtitle">
        In a compressed market, the gap between top and bottom performers is the difference between dominance and bankruptcy. You cannot spend your way out of inefficiency — you need the right intelligence.
      </p>
      <h3 className="section__small-title">What Cohi tells you every day</h3>
      <p className="section__subtitle">
        Always-on insights. Daily executive briefings. Fallout projections and risk signals. TopTiering insights for sales and ops. Mortgage-native intelligence—FNMA, FHLMC, FHA, VA, TRID, ATR/QM, and market context.
      </p>
      <h3 className="section__small-title">Executive outcomes</h3>
      <p className="section__subtitle">
        Margin clarity. Fallout visibility. Speed to act. Built for the C-suite—CEO, CLO, CFO, COO—with one view and your priorities.
      </p>
      <p className="section__subtitle" style={{ marginBottom: 0 }}>
        <Link to="/demo" className="section__link">Experience Cohi</Link>
        {' · '}
        <Link to="/executive-value" className="section__link">Executive Value</Link>
      </p>
    </section>
  )
}
