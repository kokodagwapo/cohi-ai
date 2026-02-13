const UGC_ITEMS = [
  { src: '/brand/brand-24.png', title: 'Executive Briefing', caption: 'AI-curated insights by urgency—Critical, Needs Attention, What\'s Working, Context & Trends. See what moves the needle before it shows up in P&L.' },
  { src: '/brand/brand-12.png', title: 'Revenue by LO: The Pareto', caption: 'Identify who carries the load—e.g., 9 loan officers carrying 44. Top/Second/Bottom tier breakdown reveals hidden value and concentration risk.' },
  { src: '/brand/brand-05.png', title: 'TopTiering Scorecard', caption: 'Define winning with custom weights (Units, Revenue, Pull Through). Rank LOs into tiers and spot who\'s beating—or lagging—the spread.' },
  { src: '/brand/brand-03.png', title: 'Company Scorecard', caption: 'Macro view: total loans, volume, revenue, credit pull, cycle time, volume by branch. Alerts surface process gaps before they hit margin.' },
  { src: '/brand/brand-14.png', title: 'Daily Briefing & Market News', caption: 'Revenue insights and pipeline alerts on one screen; MBA market data and refinance activity on the other. Intelligence before the first call.' },
  { src: '/brand/brand-09.png', title: 'TopTiering Comparison & Workbench', caption: 'Compare branch revenue tiers, spot performance gaps, and analyze cohorts. Desktop + mobile—your edge wherever you are.' },
]

export default function SectionUgc() {
  return (
    <section id="cohi-in-action" className="section section--alt ugc-section" aria-labelledby="ugc-section-title">
      <h2 id="ugc-section-title" className="section__title section__title--center">
        The Stats: Intelligence That Pays
      </h2>
      <p className="section__subtitle section__subtitle--center">
        Mortgage-native metrics that separate winners from the field—briefings, TopTiering, and pipeline visibility built for lenders who play the percentages.
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
