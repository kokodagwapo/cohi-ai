const UGC_ITEMS = [
  { src: '/brand/cohi-insights-desktop.png', title: 'Cohi Insights', caption: 'AI-curated executive briefings by urgency—Critical, Needs Attention, What\'s Working, Context & Trends. See what moves the needle before it shows up in P&L.' },
  { src: '/brand/brand-12.png', title: 'Revenue by LO: The Pareto', caption: 'Identify who carries the load—e.g., 9 loan officers carrying 44. Top/Second/Bottom tier breakdown reveals hidden value and concentration risk.' },
  { src: '/brand/brand-14.png', title: 'Daily Briefing', caption: 'Revenue insights and pipeline alerts on one screen; MBA market data and refinance activity on the other. Intelligence before the first call.' },
  { src: '/brand/fallout-loan-detail.png', title: 'Fallout & Closing Intelligence', caption: 'Track loans at risk of falling out, monitor closing timelines, and surface pipeline slippage early. Intervene when it matters—not after the quarter closes.' },
]

export default function SectionUgc() {
  return (
    <section id="cohi-in-action" className="section section--alt ugc-section" aria-labelledby="ugc-section-title">
      <h2 id="ugc-section-title" className="section__title section__title--center">
        The Platform: Intelligence That Pays
      </h2>
      <p className="section__subtitle section__subtitle--center">
        Mortgage-native metrics that separate winners from the field—briefings, TopTiering, and pipeline visibility built for lenders who demand precision.
      </p>
      <div className="ugc-section__grid">
        {UGC_ITEMS.map(({ src, title, caption }) => (
          <figure key={src} className="ugc-section__card">
            <div className="ugc-section__frame">
              <img
                src={src}
                alt=""
                className="ugc-section__img"
                loading="lazy"
              />
            </div>
            <figcaption className="ugc-section__caption">
              <span className="ugc-section__caption-title">{title}</span>
              <span className="ugc-section__caption-text">{caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
