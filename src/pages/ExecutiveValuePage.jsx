import { Link } from 'react-router-dom'

const roles = [
  {
    title: 'CEO / President',
    problems: 'Strategic clarity, margin pressure, competitive positioning.',
    decisions: 'Where to invest, how to differentiate, what to fix first.',
    risks: 'Blind spots in pipeline, fallout, and operational variance.',
  },
  {
    title: 'Chief Lending Officer (CLO)',
    problems: 'Production visibility, channel performance, pull-through.',
    decisions: 'Pricing, capacity, and where to coach or reallocate.',
    risks: 'Fallout leakage, margin erosion, compliance exposure.',
  },
  {
    title: 'CFO',
    problems: 'Profitability by segment, cost to originate, forecasting.',
    decisions: 'Resource allocation, pricing strategy, and risk tolerance.',
    risks: 'Toxic assets, margin compression, inaccurate forecasts.',
  },
  {
    title: 'COO / Head of Operations',
    problems: 'Cycle time, capacity, and operational consistency.',
    decisions: 'Staffing, process changes, and where to automate.',
    risks: 'Bottlenecks, burnout in top performers, quality drift.',
  },
]

export default function ExecutiveValuePage() {
  return (
    <article className="page">
      <div className="section">
        <h1 className="page__title">Executive Value</h1>
        <p className="section__subtitle">
          Role-based relevance. What Cohi solves, what decisions improve, what risks are reduced—for each seat at the table.
        </p>
        <figure className="page__visual">
          <img src="/brand/brand-19.png" alt="TopTiering 20/30/50 executive framework" className="page__visual-img" loading="lazy" />
        </figure>
        <div className="exec-value__grid">
          {roles.map((r) => (
            <section key={r.title} className="exec-value__card">
              <h2 className="exec-value__card-title">{r.title}</h2>
              <p><strong>Problems Cohi solves:</strong> {r.problems}</p>
              <p><strong>Decisions that improve:</strong> {r.decisions}</p>
              <p><strong>Risks reduced:</strong> {r.risks}</p>
            </section>
          ))}
        </div>
      </div>
      <div className="section section--alt">
        <Link to="/demo" className="cta">Experience Cohi</Link>
        <Link to="/pricing" className="page__link" style={{ marginLeft: '1rem' }}>Pricing &amp; Buy</Link>
      </div>
    </article>
  )
}
