import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AdaCompliancePage() {
  useEffect(() => {
    document.title = 'ADA Compliance – Coheus'
    window.scrollTo(0, 0)
    const main = document.querySelector('.main')
    if (main) main.scrollTo(0, 0)
    return () => { document.title = 'Coheus – Executive Intelligence for Mortgage Lenders' }
  }, [])

  return (
    <article className="page page--legal">
      <div className="page__content">
        <Link to="/" className="page__back">&larr; Back to Home</Link>
        <h1 className="page__title">ADA Compliance</h1>
        <p className="page__subtitle">Effective Date: January 1, 2025</p>

        <div className="page__body">
          <h2 className="page__section-title">Americans with Disabilities Act (ADA) Compliance</h2>
          <p>
            TVMA, Inc., trading as Teraverde ("Coheus"), is committed to complying with the Americans 
            with Disabilities Act (ADA) and ensuring that our digital services are accessible to 
            individuals with disabilities. We recognize that the ADA requires businesses to provide 
            equal access to their goods and services, and we extend this commitment to our online 
            presence and digital platform.
          </p>

          <h2 className="page__section-title">What is the ADA?</h2>
          <p>
            The Americans with Disabilities Act (ADA) is a federal civil rights law enacted in 1990 
            that prohibits discrimination against individuals with disabilities in all areas of public 
            life, including employment, education, transportation, and access to public and private 
            places and services. Title III of the ADA covers public accommodations and has been 
            interpreted by courts and the Department of Justice to include websites and digital platforms.
          </p>

          <h2 className="page__section-title">Our ADA Compliance Efforts</h2>
          <p>
            Coheus takes the following steps to ensure ADA compliance across our website and platform:
          </p>

          <h3>Website and Platform Accessibility</h3>
          <ul>
            <li>We design and develop our website and platform in alignment with the Web Content 
                Accessibility Guidelines (WCAG) 2.1, Level AA</li>
            <li>We provide alternative text for all meaningful images and graphics</li>
            <li>We ensure all interactive elements are accessible via keyboard navigation</li>
            <li>We maintain sufficient color contrast ratios throughout the interface</li>
            <li>We use semantic HTML and ARIA attributes for screen reader compatibility</li>
            <li>We provide accessible forms with clear labels and error messages</li>
            <li>We offer an on-site accessibility tool with multiple visual and audio aids</li>
          </ul>

          <h3>Communication Accessibility</h3>
          <ul>
            <li>We provide information in formats that accommodate different communication needs</li>
            <li>Our customer support team is trained to assist users with accessibility needs</li>
            <li>We offer multiple communication channels (email, phone, web) for accessibility inquiries</li>
          </ul>

          <h3>Continuous Improvement</h3>
          <ul>
            <li>We conduct periodic accessibility audits of our website and platform</li>
            <li>We incorporate accessibility testing into our quality assurance process</li>
            <li>We provide accessibility awareness training for our staff</li>
            <li>We monitor and respond to user feedback regarding accessibility barriers</li>
          </ul>

          <h2 className="page__section-title">Applicable Laws and Standards</h2>
          <p>
            Our accessibility efforts are guided by the following laws and standards:
          </p>
          <ul>
            <li><strong>Americans with Disabilities Act (ADA), 1990:</strong> Federal law prohibiting discrimination on the basis of disability</li>
            <li><strong>ADA Amendments Act (ADAAA), 2008:</strong> Broadened the definition of disability under the ADA</li>
            <li><strong>Section 508 of the Rehabilitation Act:</strong> Requires federal agencies and their contractors to make electronic information accessible; we voluntarily follow these standards</li>
            <li><strong>WCAG 2.1 Level AA:</strong> Internationally recognized guidelines for web content accessibility</li>
            <li><strong>Florida Statute Section 282.603:</strong> State-level requirements for accessibility of information technology</li>
          </ul>

          <h2 className="page__section-title">Accommodations and Assistance</h2>
          <p>
            If you need assistance accessing any content, feature, or functionality on our website or 
            platform, we are happy to help. We can provide information in alternative formats and 
            assist you with navigating our services. Accommodations may include:
          </p>
          <ul>
            <li>Providing content in alternative formats (large print, audio, etc.)</li>
            <li>Assisting with account setup and platform navigation</li>
            <li>Offering personalized walkthroughs of features and reports</li>
            <li>Connecting you with a support representative for direct assistance</li>
          </ul>

          <h2 className="page__section-title">Third-Party Content</h2>
          <p>
            While we strive to ensure accessibility across our entire platform, some content may be 
            provided by third parties and may not be fully within our control. We work with our partners 
            and vendors to encourage accessibility compliance and will make reasonable efforts to 
            provide accessible alternatives when third-party content presents barriers.
          </p>

          <h2 className="page__section-title">Reporting Accessibility Barriers</h2>
          <p>
            If you encounter an accessibility barrier on our website or platform, we want to know about it. 
            Please provide the following information when reporting an issue:
          </p>
          <ul>
            <li>The URL or location of the content</li>
            <li>A description of the accessibility barrier you experienced</li>
            <li>The assistive technology you were using (if applicable)</li>
            <li>Your preferred format for receiving a response</li>
          </ul>

          <h2 className="page__section-title">Contact Us</h2>
          <p>
            For ADA-related inquiries, accommodation requests, or to report accessibility barriers, 
            please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> accessibility@coheus.com</li>
            <li><strong>Address:</strong> 15205 Collier Blvd Suite 205, Naples, FL 34119</li>
            <li><strong>Phone:</strong> Contact us through the information provided on our website</li>
          </ul>
          <p>
            We aim to respond to all ADA-related inquiries within 5 business days and will work 
            diligently to resolve any reported accessibility issues.
          </p>

          <h2 className="page__section-title">External Resources</h2>
          <p>
            For more information about the ADA and digital accessibility:
          </p>
          <ul>
            <li><a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer">ADA.gov — Official ADA Website</a></li>
            <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">W3C Web Content Accessibility Guidelines (WCAG)</a></li>
            <li><a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer">Section508.gov — IT Accessibility</a></li>
          </ul>
        </div>
      </div>
    </article>
  )
}
