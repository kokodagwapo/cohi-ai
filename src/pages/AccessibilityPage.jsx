import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AccessibilityPage() {
  useEffect(() => {
    document.title = 'Accessibility Statement – Coheus'
    window.scrollTo(0, 0)
    const main = document.querySelector('.main')
    if (main) main.scrollTo(0, 0)
    return () => { document.title = 'Coheus – Executive Intelligence for Mortgage Lenders' }
  }, [])

  return (
    <article className="page page--legal">
      <div className="page__content">
        <Link to="/" className="page__back">&larr; Back to Home</Link>
        <h1 className="page__title">Accessibility Statement</h1>
        <p className="page__subtitle">Effective Date: January 1, 2025</p>

        <div className="page__body">
          <h2 className="page__section-title">Our Commitment</h2>
          <p>
            TVMA, Inc., trading as Teraverde ("Coheus"), is committed to ensuring that our website 
            and executive intelligence platform are accessible to all users, including people with 
            disabilities. We believe that every mortgage professional deserves equal access to the 
            tools and insights that drive better lending decisions.
          </p>

          <h2 className="page__section-title">Accessibility Standards</h2>
          <p>
            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. 
            These guidelines are developed by the World Wide Web Consortium (W3C) and are widely regarded 
            as the international standard for web accessibility. Our ongoing accessibility efforts include:
          </p>
          <ul>
            <li><strong>Perceivable:</strong> Content is presented in ways that all users can perceive, including text alternatives for images, captions for multimedia, and sufficient color contrast</li>
            <li><strong>Operable:</strong> All functionality is available via keyboard navigation, with no time-limited interactions and clear, consistent navigation structures</li>
            <li><strong>Understandable:</strong> Content is readable and predictable, with input assistance to help users avoid and correct mistakes</li>
            <li><strong>Robust:</strong> Content is compatible with current and future assistive technologies, including screen readers, magnifiers, and voice recognition software</li>
          </ul>

          <h2 className="page__section-title">Accessibility Features</h2>
          <p>Our website and platform include the following accessibility features:</p>
          <ul>
            <li><strong>Text Size Controls:</strong> Adjustable text sizing for improved readability</li>
            <li><strong>High Contrast Mode:</strong> Enhanced color contrast for users with low vision</li>
            <li><strong>Readable Font:</strong> Dyslexia-friendly font option for improved reading comfort</li>
            <li><strong>Link Highlighting:</strong> Visual emphasis on interactive links for easier identification</li>
            <li><strong>Text Spacing:</strong> Adjustable letter and word spacing for improved readability</li>
            <li><strong>Reading Guide:</strong> A visual guide that follows your cursor to help track lines of text</li>
            <li><strong>Listen to Page:</strong> AI-powered text-to-speech that reads page content aloud</li>
            <li><strong>Keyboard Navigation:</strong> Full keyboard access to all interactive elements</li>
            <li><strong>ARIA Labels:</strong> Semantic markup and ARIA attributes for screen reader compatibility</li>
            <li><strong>Skip Navigation:</strong> Quick access links for keyboard users to bypass repetitive content</li>
            <li><strong>Responsive Design:</strong> Optimized layout for all screen sizes and devices</li>
            <li><strong>Pinch-to-Zoom:</strong> Full zoom support on mobile devices for better reading</li>
          </ul>

          <h2 className="page__section-title">Assistive Technology Compatibility</h2>
          <p>
            Our platform is designed to be compatible with commonly used assistive technologies, including:
          </p>
          <ul>
            <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
            <li>Screen magnification software (ZoomText, Windows Magnifier)</li>
            <li>Voice recognition software (Dragon NaturallySpeaking)</li>
            <li>Alternative input devices (switch controls, eye-tracking devices)</li>
            <li>Browser-based accessibility extensions and plugins</li>
          </ul>

          <h2 className="page__section-title">Supported Browsers</h2>
          <p>
            For the best accessibility experience, we recommend using the latest versions of:
          </p>
          <ul>
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Apple Safari</li>
            <li>Microsoft Edge</li>
          </ul>

          <h2 className="page__section-title">Ongoing Efforts</h2>
          <p>
            Accessibility is an ongoing effort at Coheus. We are committed to continuously improving 
            the accessibility of our platform through:
          </p>
          <ul>
            <li>Regular accessibility audits and testing with assistive technologies</li>
            <li>Training our development team on accessibility best practices</li>
            <li>Incorporating accessibility into our design and development process from the start</li>
            <li>Engaging with users who have disabilities to gather feedback and identify areas for improvement</li>
            <li>Staying current with evolving accessibility standards and guidelines</li>
          </ul>

          <h2 className="page__section-title">Known Limitations</h2>
          <p>
            While we strive for full accessibility, some areas may have limitations:
          </p>
          <ul>
            <li>Some older PDF documents may not be fully accessible; we are working to remediate these</li>
            <li>Certain complex data visualizations may have limited screen reader support; we provide text alternatives where possible</li>
            <li>Third-party content or integrations may not fully conform to our accessibility standards</li>
          </ul>

          <h2 className="page__section-title">Feedback and Contact</h2>
          <p>
            We welcome your feedback on the accessibility of our platform. If you encounter accessibility 
            barriers or have suggestions for improvement, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> accessibility@coheus.com</li>
            <li><strong>Address:</strong> 15205 Collier Blvd Suite 205, Naples, FL 34119</li>
            <li><strong>Phone:</strong> Contact us through the information provided on our website</li>
          </ul>
          <p>
            When reporting an issue, please include the URL of the page, a description of the problem, 
            the assistive technology you are using (if applicable), and your preferred method of contact. 
            We aim to respond to accessibility feedback within 5 business days.
          </p>

          <h2 className="page__section-title">Formal Complaints</h2>
          <p>
            If you are not satisfied with our response to your accessibility concern, you may file a 
            complaint with the U.S. Department of Justice, Civil Rights Division, or the appropriate 
            regulatory authority in your jurisdiction.
          </p>
        </div>
      </div>
    </article>
  )
}
