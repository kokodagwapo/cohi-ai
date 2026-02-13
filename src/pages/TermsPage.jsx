import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Use – Coheus'
    return () => { document.title = 'Coheus – Executive Intelligence for Mortgage Lenders' }
  }, [])
  return (
    <article className="page page--legal">
      <div className="page__content">
        <Link to="/" className="page__back">← Back to Home</Link>
        <h1 className="page__title">Terms of Use</h1>
        <p className="page__subtitle">
          Last updated: {new Date().toLocaleDateString('en-US')}
        </p>
        <div className="page__body">
          <p>
            Welcome to Coheus. By accessing or using our services, you agree to these Terms of Use.
            Our mortgage intelligence platform and related services are provided for informational purposes
            and to support lending professionals in their decision-making.
          </p>
          <p>
            You may not use our services for any unlawful purpose or in any way that could damage,
            disable, or impair the platform. We reserve the right to modify these terms at any time;
            continued use after changes constitutes acceptance.
          </p>
          <p>
            AI-assisted insights are provided as decision support only. Final lending decisions remain
            your responsibility. For full terms, contact us at the details provided in the Contact section.
          </p>
        </div>
      </div>
    </article>
  )
}
