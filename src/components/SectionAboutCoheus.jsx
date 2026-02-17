import { useRef, useEffect, useState } from 'react'

const TOPTIERING_PANELS = [
  {
    id: 'gap',
    src: '/ugc/playbook/toptiering-gap.png',
    title: 'The 200+ BP Performance Gap',
    tagline: '$4.6M total revenue. 56 LOs. Only 7 in the Top Tier.',
    copy: 'Revenue by Loan Officer tells the real story: a massive spread between your best and worst producers. Without structured ranking, your top performers go unrecognized and compensation stays disconnected from actual results.',
    size: 'tall',
  },
  {
    id: 'overview',
    src: '/ugc/playbook/toptiering-overview.png',
    title: 'Rank Every LO in Real Time',
    tagline: 'One dashboard. Every metric that matters.',
    copy: 'TopTiering Comparison gives you the full picture—revenue, units, BPS—ranked high to low across every loan officer. Filter by time period, switch between branch and LO views, and see exactly who drives production and who needs support.',
    size: 'wide',
  },
  {
    id: 'coaching',
    src: '/ugc/playbook/toptiering-coaching.png',
    title: 'Drill Down to Every LO',
    tagline: 'Revenue, units, BPS—per loan officer, on mobile.',
    copy: 'Managers can pull up any loan officer\'s performance on their phone. See revenue contribution, unit volume, and basis points side by side. Spot gaps instantly and turn every 1:1 into a targeted coaching conversation backed by real data.',
    size: 'tall',
  },
  {
    id: 'compensation',
    src: '/ugc/playbook/toptiering-compensation.png',
    title: 'See the Tiers. Align the Comp.',
    tagline: 'Top Tier: $2.2M · Second Tier: $1.5M · Bottom Tier: $950K',
    copy: '7 Top Tier LOs produce $2.2M at $308K avg revenue and 41 avg units. 35 Bottom Tier LOs produce $950K at $27K avg. When you see the tiers clearly, compensation conversations shift from volume to value—retain top talent and reduce costly turnover.',
    size: 'wide',
  },
  {
    id: 'impact',
    src: '/ugc/playbook/toptiering-impact.png',
    title: 'Stop Looking in the Rear-View Mirror',
    tagline: '28 at-risk loans. $10.58M in volume. Predicted before it\'s lost.',
    copy: 'Fallout Predictions identify loans likely to withdraw or deny before margin is lost. See every at-risk loan with confidence scores, amounts, milestones, and the loan officer responsible—so you can act now instead of reporting losses later.',
    size: 'normal',
  },
]

function useMasonryInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setInView(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}

function MasonryCard({ panel, index }) {
  const [cardRef, cardInView] = useMasonryInView(0.12)
  const delay = index * 0.1

  return (
    <article
      ref={cardRef}
      className={`masonry-card masonry-card--${panel.size} ${cardInView ? 'masonry-card--visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
      data-panel-id={panel.id}
    >
      <div className="masonry-card__media">
        <img
          src={panel.src}
          alt=""
          className="masonry-card__img"
          loading="lazy"
        />
      </div>
      <div className="masonry-card__body">
        <h3 className="masonry-card__title">{panel.title}</h3>
        {panel.tagline && (
          <p className="masonry-card__tagline">{panel.tagline}</p>
        )}
        <p className="masonry-card__copy">{panel.copy}</p>
      </div>
    </article>
  )
}

export default function SectionAboutCoheus() {
  const [headerRef, headerInView] = useMasonryInView(0.15)
  const [quoteRef, quoteInView] = useMasonryInView(0.15)

  return (
    <section id="about-coheus" className="section masonry-section" aria-labelledby="about-coheus-title">
      <header ref={headerRef} className={`masonry-section__header ${headerInView ? 'masonry-section__header--visible' : ''}`}>
        <h2 id="about-coheus-title" className="section__title section__title--center">
          TopTiering
        </h2>
        <p className="masonry-section__lead">
          A structured framework for ranking and coaching loan officer performance—so lenders can align compensation to results and invest where it matters.
        </p>
      </header>

      <div className="masonry-grid">
        {TOPTIERING_PANELS.map((panel, i) => (
          <MasonryCard key={panel.id} panel={panel} index={i} />
        ))}
      </div>

      <blockquote ref={quoteRef} className={`masonry-section__quote ${quoteInView ? 'masonry-section__quote--visible' : ''}`}>
        &ldquo;You can&rsquo;t manage what you can&rsquo;t measure. TopTiering turns loan officer data into actionable intelligence.&rdquo;
        <cite>— The Coheus Philosophy</cite>
      </blockquote>

      <div className="masonry-section__cta-wrap">
        <button
          type="button"
          className="cta masonry-section__cta"
          onClick={() => document.getElementById('cohi-in-action')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          Explore the Platform
        </button>
      </div>
    </section>
  )
}
