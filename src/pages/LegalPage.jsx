import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function LegalPage() {
  useEffect(() => {
    document.title = 'Terms & Privacy – Coheus'
    return () => { document.title = 'Coheus – Executive Intelligence for Mortgage Lenders' }
  }, [])

  return (
    <article className="page page--legal">
      <div className="page__content">
        <Link to="/" className="page__back">← Back to Home</Link>
        <h1 className="page__title">Terms &amp; Privacy</h1>
        <p className="page__subtitle">
          Last updated: {new Date().toLocaleDateString('en-US')}
        </p>

        <div className="page__body">
          <h2 className="page__section-title">Terms of Use</h2>
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

        <div className="page__body">
          <h2 className="page__section-title">Privacy Policy</h2>
          <p>
            Coheus respects your privacy. We collect and process information necessary to provide
            our mortgage intelligence services, improve our platform, and communicate with you.
            We do not sell your personal information.
          </p>
          <p>
            Data we collect may include account information, usage analytics, and content you
            provide when using our services. We use industry-standard security measures to
            protect your data and comply with applicable regulations.
          </p>
          <p>
            You may request access to, correction of, or deletion of your personal data by
            contacting us. For inquiries about our privacy practices, see the Contact section.
          </p>
        </div>
      </div>
    </article>
  )
}
