import { Link } from 'react-router-dom'

const steps = [
  { title: 'Connect your data', text: 'Secure, mortgage-native integration with your systems.' },
  { title: 'Cohi analyzes continuously', text: 'Always-on intelligence surfaces what matters.' },
  { title: 'Executives receive daily intelligence', text: 'Briefings and insights tailored to your priorities.' },
  { title: 'Teams act earlier and smarter', text: 'Reduce fallout, protect margin, and move faster.' },
]

export default function HowItWorksPage() {
  return (
    <article className="page">
      <div className="section">
        <h1 className="page__title">How It Works</h1>
        <p className="section__subtitle">
          Trust and speed matter. Here’s the flow from connection to value.
        </p>
        <figure className="page__visual">
          <img src="/brand/brand-13.png" alt="Operational trends and processor output example" className="page__visual-img" loading="lazy" />
        </figure>
        <ol className="how-it-works__steps">
          {steps.map(({ title, text }, i) => (
            <li key={i} className="how-it-works__step">
              <span className="how-it-works__num">{i + 1}</span>
              <div>
                <h3 className="how-it-works__step-title">{title}</h3>
                <p className="how-it-works__step-text">{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="section__subtitle">
          <strong>Secure.</strong> Mortgage-native. <strong>Fast time to value.</strong>
        </p>
      </div>
      <div className="section section--alt">
        <Link to="/demo" className="cta">Experience Cohi</Link>
        <Link to="/pricing" className="page__link" style={{ marginLeft: '1rem' }}>Pricing &amp; Buy</Link>
      </div>
    </article>
  )
}
