export default function SectionContact() {
  return (
    <section className="section section-contact section--alt" aria-labelledby="contact-heading">
      <div className="section__content">
        <h2 id="contact-heading" className="section__title section__title--center">
          We'd love to work with you
        </h2>
        <p className="section-contact__lead">
          Get in touch. We're here to help you see the full picture.
        </p>
        <p className="section-contact__company">Teraverde Management Advisors, LLC</p>
        <div className="section-contact__grid">
          <a href="mailto:hi@coheus.com" className="section-contact__card">
            <span className="section-contact__icon" aria-hidden="true">✉</span>
            <span className="section-contact__label">Email</span>
            <span className="section-contact__value">hi@coheus.com</span>
          </a>
          <a href="tel:+18553748862" className="section-contact__card">
            <span className="section-contact__icon" aria-hidden="true">☎</span>
            <span className="section-contact__label">Phone</span>
            <span className="section-contact__value">(855) 374-8862</span>
          </a>
          <a
            href="https://maps.google.com/?q=9072+Siesta+Bay+Drive+Naples+FL+34120"
            target="_blank"
            rel="noopener noreferrer"
            className="section-contact__card section-contact__card--address"
          >
            <span className="section-contact__icon" aria-hidden="true">📍</span>
            <span className="section-contact__label">Office</span>
            <address className="section-contact__value section-contact__address">
              9072 Siesta Bay Drive<br />
              Naples, FL 34120
            </address>
          </a>
        </div>
      </div>
    </section>
  )
}
