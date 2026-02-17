import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Use – Coheus'
    window.scrollTo(0, 0)
    const main = document.querySelector('.main')
    if (main) main.scrollTo(0, 0)
    return () => { document.title = 'Coheus – Executive Intelligence for Mortgage Lenders' }
  }, [])

  return (
    <article className="page page--legal">
      <div className="page__content">
        <Link to="/" className="page__back">&larr; Back to Home</Link>
        <h1 className="page__title">Terms of Use</h1>
        <p className="page__subtitle">Effective Date: January 1, 2025</p>

        <div className="page__body">
          <h2 className="page__section-title">1. Acceptance of Terms</h2>
          <p>
            Welcome to Coheus, an executive intelligence platform operated by TVMA, Inc., trading as 
            Teraverde ("Coheus," "we," "our," or "us"). By accessing or using our website, platform, 
            or any related services (collectively, the "Services"), you agree to be bound by these 
            Terms of Use. If you do not agree, do not use the Services.
          </p>

          <h2 className="page__section-title">2. Description of Services</h2>
          <p>
            Coheus provides AI-powered mortgage intelligence tools designed for lending executives and 
            professionals. Our Services include:
          </p>
          <ul>
            <li>Executive briefings and daily intelligence reports</li>
            <li>Loan pipeline analytics, performance dashboards, and trend analysis</li>
            <li>AI-generated insights and recommendations for mortgage operations</li>
            <li>Data visualization, reporting, and operational benchmarking tools</li>
          </ul>

          <h2 className="page__section-title">3. Eligibility and Account Registration</h2>
          <p>
            You must be at least 18 years old and authorized to enter into legally binding agreements 
            to use our Services. When creating an account, you agree to:
          </p>
          <ul>
            <li>Provide accurate, current, and complete registration information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your login credentials confidential and secure</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Accept responsibility for all activity that occurs under your account</li>
          </ul>

          <h2 className="page__section-title">4. Permitted Use</h2>
          <p>You agree to use the Services only for lawful purposes and in accordance with these Terms. You may not:</p>
          <ul>
            <li>Use the Services for any fraudulent, deceptive, or unlawful activity</li>
            <li>Attempt to gain unauthorized access to any part of the platform, other accounts, or connected systems</li>
            <li>Interfere with or disrupt the Services, servers, or networks</li>
            <li>Reverse engineer, decompile, or disassemble any portion of the platform</li>
            <li>Scrape, harvest, or collect data from the platform without authorization</li>
            <li>Upload malicious code, viruses, or harmful content</li>
            <li>Violate any applicable local, state, national, or international law or regulation</li>
          </ul>

          <h2 className="page__section-title">5. AI-Generated Content and Insights</h2>
          <p>
            Our platform uses artificial intelligence to generate insights, analytics, and recommendations. 
            You acknowledge and agree that:
          </p>
          <ul>
            <li>AI-generated content is provided as decision support only and does not constitute professional financial, legal, or lending advice</li>
            <li>AI systems may produce inaccurate, incomplete, or outdated information</li>
            <li>You are solely responsible for verifying AI-generated insights before making business decisions</li>
            <li>Final lending, staffing, and operational decisions remain your responsibility</li>
            <li>Coheus is not liable for decisions made based on AI-generated content</li>
          </ul>

          <h2 className="page__section-title">6. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the Services — including text, graphics, logos, 
            icons, images, software, algorithms, and the overall design — are owned by Coheus or our 
            licensors and are protected by copyright, trademark, patent, and other intellectual property laws.
          </p>
          <p>
            You are granted a limited, non-exclusive, non-transferable, revocable license to access and 
            use the Services for your internal business purposes. You may not reproduce, distribute, 
            modify, create derivative works of, or publicly display any content from the Services 
            without our prior written consent.
          </p>

          <h2 className="page__section-title">7. User Data and Content</h2>
          <p>
            You retain ownership of any data, content, or materials you upload to or create within the 
            platform ("User Content"). By using the Services, you grant Coheus a non-exclusive, 
            worldwide license to use, process, and analyze your User Content solely for the purpose 
            of providing and improving the Services.
          </p>
          <p>
            You represent and warrant that you have all necessary rights to share User Content with us 
            and that your User Content does not violate any third-party rights or applicable laws.
          </p>

          <h2 className="page__section-title">8. Payment and Subscription Terms</h2>
          <p>
            Certain Services require a paid subscription. By subscribing, you agree to:
          </p>
          <ul>
            <li>Pay all applicable fees as described at the time of purchase</li>
            <li>Provide valid and current payment information</li>
            <li>Accept automatic renewal of your subscription unless cancelled before the renewal date</li>
            <li>Understand that fees are non-refundable except as required by law or stated in a separate agreement</li>
          </ul>
          <p>
            We reserve the right to change pricing with reasonable advance notice. Continued use 
            after a pricing change constitutes acceptance of the new terms.
          </p>

          <h2 className="page__section-title">9. Confidentiality</h2>
          <p>
            Each party agrees to maintain the confidentiality of the other party's proprietary and 
            confidential information. This includes, but is not limited to, business data, algorithms, 
            trade secrets, customer lists, and financial information disclosed during the course of 
            using the Services.
          </p>

          <h2 className="page__section-title">10. Disclaimers</h2>
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
            EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, 
            FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, OR NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that the Services will be uninterrupted, error-free, or completely secure. 
            Results and insights generated by our platform may vary based on the data provided and 
            market conditions.
          </p>

          <h2 className="page__section-title">11. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, COHEUS AND ITS OFFICERS, DIRECTORS, EMPLOYEES, 
            AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR 
            PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES ARISING FROM 
            YOUR USE OF THE SERVICES.
          </p>
          <p>
            Our total liability for any claim arising from or related to these Terms or the Services 
            shall not exceed the amount you paid to Coheus in the twelve (12) months preceding the claim.
          </p>

          <h2 className="page__section-title">12. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Coheus and its affiliates from any claims, 
            losses, damages, liabilities, costs, and expenses (including reasonable attorney fees) arising 
            from your use of the Services, violation of these Terms, or infringement of any third-party rights.
          </p>

          <h2 className="page__section-title">13. Termination</h2>
          <p>
            We may suspend or terminate your access to the Services at any time, with or without cause 
            and with or without notice. You may terminate your account at any time by contacting us. 
            Upon termination, your right to use the Services ceases immediately, though certain 
            provisions of these Terms (including Limitation of Liability and Indemnification) survive.
          </p>

          <h2 className="page__section-title">14. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the State of Florida, 
            without regard to its conflict of law provisions. Any disputes arising from these Terms or 
            the Services shall be resolved through binding arbitration in Naples, Florida, in accordance 
            with the rules of the American Arbitration Association.
          </p>

          <h2 className="page__section-title">15. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be posted on this page 
            with an updated effective date. Your continued use of the Services after any modifications 
            constitutes acceptance of the revised Terms. We encourage you to review these Terms periodically.
          </p>

          <h2 className="page__section-title">16. Contact Information</h2>
          <p>
            For questions about these Terms of Use, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> legal@coheus.com</li>
            <li><strong>Address:</strong> 15205 Collier Blvd Suite 205, Naples, FL 34119</li>
          </ul>
        </div>
      </div>
    </article>
  )
}
