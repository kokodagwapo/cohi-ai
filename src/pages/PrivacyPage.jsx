import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy – Coheus'
    window.scrollTo(0, 0)
    const main = document.querySelector('.main')
    if (main) main.scrollTo(0, 0)
    return () => { document.title = 'Coheus – Executive Intelligence for Mortgage Lenders' }
  }, [])

  return (
    <article className="page page--legal">
      <div className="page__content">
        <Link to="/" className="page__back">&larr; Back to Home</Link>
        <h1 className="page__title">Privacy Policy</h1>
        <p className="page__subtitle">Effective Date: January 1, 2025</p>

        <div className="page__body">
          <h2 className="page__section-title">1. Introduction</h2>
          <p>
            TVMA, Inc., trading as Teraverde ("Coheus," "we," "our," or "us"), is committed to protecting 
            the privacy of our users. This Privacy Policy describes how we collect, use, disclose, and 
            safeguard your information when you visit our website and use our executive intelligence 
            platform for mortgage lenders.
          </p>
          <p>
            By accessing or using our services, you consent to the practices described in this policy. 
            If you do not agree, please discontinue use of our services.
          </p>

          <h2 className="page__section-title">2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <ul>
            <li>Name, email address, phone number, and job title</li>
            <li>Company name and business address</li>
            <li>Account credentials (username and encrypted password)</li>
            <li>Billing and payment information</li>
          </ul>
          <h3>Usage and Technical Data</h3>
          <ul>
            <li>Browser type, operating system, and device information</li>
            <li>IP address and approximate geographic location</li>
            <li>Pages visited, features used, and time spent on the platform</li>
            <li>Referring URLs and search terms</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
          <h3>Mortgage and Business Data</h3>
          <ul>
            <li>Loan pipeline data, performance metrics, and operational analytics uploaded or connected to the platform</li>
            <li>Custom reports, dashboards, and configuration preferences</li>
          </ul>

          <h2 className="page__section-title">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our mortgage intelligence platform</li>
            <li>Generate AI-powered insights, briefings, and analytics reports</li>
            <li>Personalize your experience and deliver relevant content</li>
            <li>Process transactions and manage your account</li>
            <li>Communicate with you about product updates, support, and marketing (with opt-out options)</li>
            <li>Monitor and analyze usage trends to improve our services</li>
            <li>Detect, prevent, and address security issues or fraud</li>
            <li>Comply with legal obligations and enforce our terms</li>
          </ul>

          <h2 className="page__section-title">4. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your data with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating the platform, processing payments, hosting data, and providing analytics</li>
            <li><strong>Business Partners:</strong> With your consent, to provide integrated services</li>
            <li><strong>Legal Requirements:</strong> When required by law, subpoena, or legal process</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>Safety and Security:</strong> To protect the rights, property, or safety of Coheus, our users, or others</li>
          </ul>

          <h2 className="page__section-title">5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information, including:
          </p>
          <ul>
            <li>Encryption of data in transit (TLS/SSL) and at rest (AES-256)</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Role-based access controls and multi-factor authentication</li>
            <li>SOC 2-aligned security practices</li>
            <li>Continuous monitoring for unauthorized access</li>
          </ul>
          <p>
            While we strive to protect your data, no method of electronic storage or transmission 
            is 100% secure. We cannot guarantee absolute security.
          </p>

          <h2 className="page__section-title">6. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies, web beacons, and similar technologies to enhance your experience, 
            analyze usage patterns, and deliver targeted content. You can manage cookie preferences 
            through your browser settings. Disabling cookies may affect platform functionality.
          </p>

          <h2 className="page__section-title">7. Your Rights and Choices</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of marketing communications</li>
            <li>Restrict or object to certain processing activities</li>
            <li>Request data portability</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <strong>privacy@coheus.com</strong> or 
            write to us at 15205 Collier Blvd Suite 205, Naples, FL 34119.
          </p>

          <h2 className="page__section-title">8. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is active or as needed 
            to provide services. We may also retain data as necessary to comply with legal obligations, 
            resolve disputes, and enforce agreements. When data is no longer needed, it is securely 
            deleted or anonymized.
          </p>

          <h2 className="page__section-title">9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly 
            collect personal information from children. If we become aware that a child has provided 
            us with personal data, we will take steps to delete such information.
          </p>

          <h2 className="page__section-title">10. Third-Party Links</h2>
          <p>
            Our platform may contain links to third-party websites or services. We are not responsible 
            for the privacy practices of these external sites. We encourage you to review their 
            privacy policies before providing any personal information.
          </p>

          <h2 className="page__section-title">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page 
            with an updated effective date. We encourage you to review this policy periodically. 
            Continued use of our services after changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="page__section-title">12. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> privacy@coheus.com</li>
            <li><strong>Address:</strong> 15205 Collier Blvd Suite 205, Naples, FL 34119</li>
            <li><strong>Phone:</strong> Contact us through the information provided on our website</li>
          </ul>
        </div>
      </div>
    </article>
  )
}
