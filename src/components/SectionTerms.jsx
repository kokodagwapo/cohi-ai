export default function SectionTerms() {
  return (
    <section className="section section--alt" id="terms" aria-labelledby="terms-heading">
      <div className="section__content">
        <h2 id="terms-heading" className="section__title">Terms of Use</h2>
        <p className="section__subtitle">
          Last updated: {new Date().toLocaleDateString('en-US')}
        </p>
        <div className="section-legal__body">
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
    </section>
  )
}
