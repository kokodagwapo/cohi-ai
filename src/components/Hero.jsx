import CohiHeadlineTicker from './cohi/CohiHeadlineTicker'

export default function Hero() {
  const scrollToContent = () => {
    const el = document.getElementById('cohi-in-action')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero hero--fullscreen hero--image-bg" aria-labelledby="hero-title">
      <div className="hero__background-overlay"></div>

      <div className="hero__grid">
        <div className="hero__header-group">
          <h1 id="hero-title" className="hero__title hero__title--typing">
            <CohiHeadlineTicker />
          </h1>
        </div>

        <div className="hero__scene-container">
          {/* SVG Glow Lines Layer */}
          <div className="hero__glow-lines">
            <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Lines from left cards to laptop */}
              <path d="M280 120 C 400 120, 500 250, 600 280" stroke="url(#gradient-glow)" strokeWidth="2" strokeOpacity="0.6" className="path-glow" />
              <path d="M280 350 C 400 350, 500 300, 600 320" stroke="url(#gradient-glow)" strokeWidth="2" strokeOpacity="0.6" className="path-glow" />
              <path d="M280 500 C 400 500, 500 350, 600 360" stroke="url(#gradient-glow)" strokeWidth="2" strokeOpacity="0.6" className="path-glow" />

              <defs>
                <linearGradient id="gradient-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffcd4b" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ffcd4b" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ffcd4b" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Left Cards Stack */}
          <div className="hero__side-cards hero__side-cards--left">
            <div className="hero__floating-card hero__floating-card--urgent glass-panel">
              <p className="hero__card-main-text">
                20 loans totaling $7.55M flagged at-risk for late closing within 10 business days.
              </p>
              <p className="hero__card-detail-text">
                20 of 246 total loans in pipeline. Estimated exposure: $7.55M requiring immediate review.
              </p>
            </div>

            <div className="hero__floating-card hero__floating-card--attention glass-panel">
              <p className="hero__card-main-text">
                Conditions per active loan averaged 32.8, above the 5-condition threshold.
              </p>
              <p className="hero__card-detail-text">
                Prior average: 18.4 conditions per loan. Current threshold: 5 per loan.
              </p>
            </div>

            <div className="hero__floating-card hero__floating-card--working glass-panel">
              <p className="hero__card-main-text">
                135 of 246 loans converted to funded status this period. Average cycle time dropped to 32 days, with revenue on track at $400K across 106 active pipeline loans.
              </p>
            </div>
          </div>

          {/* Right Assets Layer */}
          <div className="hero__main-assets">
            {/* Top Right Info Card */}
            <div className="hero__info-card glass-panel">
              <div className="hero__info-card-content">
                <p>Loan condition count averaged 32.8 per active file, surpassing the 5-condition review threshold.</p>
              </div>
            </div>

            {/* Laptop Scene */}
            <div className="hero__laptop-wrap">
              <div className="hero__device-laptop">
                <div className="hero__laptop-screen">
                  <img
                    src="/hero-laptop-content.png"
                    alt="Cohi Insights Dashboard"
                    className="hero__laptop-image"
                  />
                </div>
                <div className="hero__laptop-base"></div>
              </div>

              {/* Gauge Floating Card */}
              <div className="hero__gauge-card glass-panel">
                <div className="hero__gauge-header">
                  <span>+</span> 📈 <strong>Pull-Through Tracker</strong>
                </div>
                <div className="hero__gauge-body">
                  <div className="hero__gauge-labels">
                    <div className="label-item"><span className="dot blue"></span> Funded</div>
                    <div className="label-item"><span className="dot gray"></span> Stalled</div>
                  </div>
                  <div className="hero__gauge-visual">
                    <div className="gauge-circle">
                      <span className="gauge-val">135 / 246</span>
                    </div>
                  </div>
                </div>
                <div className="hero__gauge-footer">
                  Monthly Target: 150 Loans
                </div>
              </div>
            </div>

            <div className="hero__phone-wrap">
              <img
                src="/brand/hero-phone-screen.png"
                alt="Cohi Insights Mobile"
                className="hero__phone-image"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hero__scroll-hint"
          onClick={scrollToContent}
          aria-label="Scroll to content"
        >
          <span className="hero__scroll-hint-icon" aria-hidden="true" />
          <span className="hero__scroll-hint-text">Explore</span>
        </button>
      </div>
    </section>
  )
}
