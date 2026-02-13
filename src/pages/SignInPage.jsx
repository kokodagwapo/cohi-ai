import { Link } from 'react-router-dom'

export default function SignInPage() {
  return (
    <article className="page">
      <div className="section sign-in-page">
        <h1 className="page__title">Sign In / Get Started</h1>
        <p className="section__subtitle">
          Secure authentication. Sign in to your account or create one to start your journey to executive intelligence.
        </p>
        <figure className="page__visual">
          <img src="/brand/brand-09.png" alt="Mobile command center preview" className="page__visual-img" loading="lazy" />
        </figure>
        <div className="sign-in-placeholder">
          <p className="section__subtitle">
            Sign-in and account-creation flows will be integrated here (e.g., SSO, email/password). Role selection and onboarding next steps follow.
          </p>
          <Link to="/demo" className="cta">Experience Cohi Demo</Link>
        </div>
      </div>
    </article>
  )
}
