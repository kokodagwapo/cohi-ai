import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy – Coheus'
    return () => { document.title = 'Coheus – Executive Intelligence for Mortgage Lenders' }
  }, [])
  return (
    <article className="page page--legal">
      <div className="page__content">
        <Link to="/" className="page__back">← Back to Home</Link>
        <h1 className="page__title">Privacy Policy</h1>
        <p className="page__subtitle">
          Last updated: {new Date().toLocaleDateString('en-US')}
        </p>
        <div className="page__body">
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
