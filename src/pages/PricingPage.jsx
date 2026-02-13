import { Link } from 'react-router-dom'

export default function PricingPage() {
  return (
    <article className="page">
      <div className="section">
        <h1 className="page__title">Pricing &amp; Buy</h1>
        <p className="section__subtitle">
          Clear pricing and frictionless purchase. SaaS-ready: account creation, secure checkout, digital contract, and payment processing.
        </p>
        <figure className="page__visual">
          <img src="/brand/brand-10.png" alt="Cost-to-originate and rate advantage example" className="page__visual-img" loading="lazy" />
        </figure>
        <div className="pricing-placeholder">
          <p className="section__subtitle">
            Pricing tiers and what’s included will be configured here. Add-ons (if applicable) and a clear <strong>Buy Now / Request Contract</strong> path.
          </p>
          <Link to="/sign-in" className="cta">Get Started / Request Contract</Link>
        </div>
      </div>
    </article>
  )
}
