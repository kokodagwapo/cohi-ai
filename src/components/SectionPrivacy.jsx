export default function SectionPrivacy() {
  return (
    <section className="section" id="privacy" aria-labelledby="privacy-heading">
      <div className="section__content">
        <h2 id="privacy-heading" className="section__title">Privacy Policy</h2>
        <p className="section__subtitle">
          Last updated: {new Date().toLocaleDateString('en-US')}
        </p>
        <div className="section-legal__body">
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
    </section>
  )
}
