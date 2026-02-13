import { useRef, useEffect, useState } from 'react'

const STORYBOARD_PANELS = [
  {
    id: 'opening',
    src: '/ugc/playbook/moneyball-mortgage-mismo.png',
    title: 'Moneyball®, Mortgage, and MISMO®',
    tagline: 'The Power of (Harmonized) Data',
    copy: 'Baseball proved it: data beats intuition. Moving beyond volume to data-driven profitability.',
  },
  {
    id: 'data-gap',
    src: '/ugc/playbook/data-gap.png',
    title: 'The Data Gap',
    tagline: '',
    copy: 'Interpretation gaps across parties and states. Focus on "Does this loan close?" instead of quality. Loan docs, narrative addenda, appraisal notes—disorganized, subjective, hard to measure.',
  },
  {
    id: 'tale',
    src: '/ugc/playbook/tale-of-two-industries.png',
    title: 'A Tale of Two Industries',
    tagline: 'MLB has Statcast-quality data. Mortgage? Not yet.',
    copy: 'Baseball: data complete, coaching defined, comp tied to winning. Mortgage: data not Statcast quality, coaching undefined, comp tied to volume. Coheus changes that.',
  },
  {
    id: 'philosophy',
    src: '/ugc/playbook/philosophy-of-efficiency.png',
    title: 'The Philosophy of Efficiency',
    tagline: '',
    copy: 'Traditional: Buying players (volume)—acquiring talent and loans at any cost. Moneyball: Buying wins (outcome)—optimizing efficiency and specific results.',
  },
  {
    id: 'data-to-coaching',
    src: '/ugc/playbook/data-to-coaching.png',
    title: 'From Data to Coaching',
    tagline: 'You cannot coach what you cannot measure.',
    copy: 'Narrative addenda (subjective) → machine-readable consistency (objective) → analyzable for quality, compliance, and performance.',
  },
  {
    id: 'efficiency-hierarchy',
    src: '/ugc/playbook/efficiency-hierarchy.png',
    title: 'The Efficiency Hierarchy',
    tagline: '',
    copy: 'Top tier: efficient winners. Median: the pack. Bottom: expensive non-winners. Cleveland Guardians ($1.13M/win), Milwaukee Brewers ($1.14M/win)—low payroll, high wins.',
  },
  {
    id: 'blue-tier',
    src: '/ugc/playbook/blue-tier-efficient.png',
    title: 'Blue Tier: The Efficient Winners',
    tagline: '',
    copy: 'High volume (payroll) isn\'t required for the best outcome. Optimized behaviors win.',
  },
  {
    id: 'green-tier',
    src: '/ugc/playbook/green-tier-expensive.png',
    title: 'Green Tier: Expensive Non-Winners',
    tagline: '',
    copy: 'Burning cash. High compensation without data-driven coaching results in inefficiency.',
  },
  {
    id: 'scorecard',
    src: '/ugc/playbook/scorecard-spending-winning.png',
    title: 'The 2025 Scorecard: Spending vs. Winning',
    tagline: '',
    copy: 'Dodgers, Brewers, Yankees, Guardians—Cost Per Win reveals who buys wins vs. who buys players.',
  },
  {
    id: 'technology',
    src: '/ugc/playbook/technology-of-truth.png',
    title: 'The Technology of Truth',
    tagline: 'Hawk-Eye-based optical camera system',
    copy: 'Seven terabytes per game. 17 petabytes per season. Pitch metrics, batted ball, route efficiency—precise, standardized, immutable.',
  },
  {
    id: 'statcast',
    src: '/ugc/playbook/statcast-ecosystem.png',
    title: 'MoneyBall® 2.0: The Statcast Ecosystem',
    tagline: '',
    copy: 'Pitch metrics, batted ball, route efficiency, positioning heat maps. Mortgage\'s Statcast is MISMO.',
  },
  {
    id: 'mismo',
    src: '/ugc/playbook/mismo-statcast.png',
    title: 'MISMO®: The Statcast of Mortgage',
    tagline: 'Mortgage Industry Standards Maintenance Organization',
    copy: 'Turn every loan, document, and appraisal into structured, validated fields. Machine-readable, consistent, analyzable at scale.',
  },
  {
    id: 'winning-strategy',
    src: '/ugc/playbook/winning-strategy.png',
    title: 'The Winning Strategy',
    tagline: '',
    copy: 'Move from Green Tier (High Cost) to Blue Tier (Efficient Winner). Adopt MISMO standards. Don\'t just buy players. Buy wins.',
  },
]

function useInView(threshold = 0.15) {
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
      { threshold, rootMargin: '0px 0px -80px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}

function StoryboardPanel({ panel, index }) {
  const [panelRef, panelInView] = useInView(0.2)
  const align = index % 2 === 0 ? 'left' : 'right'
  return (
    <article
      ref={panelRef}
      className={`section-about-coheus__panel section-about-coheus__panel--${align} ${panelInView ? 'section-about-coheus__panel--visible' : ''}`}
      data-panel-id={panel.id}
    >
      <div className="section-about-coheus__panel-media">
        <div className="section-about-coheus__panel-frame">
          <img
            src={panel.src}
            alt=""
            className="section-about-coheus__panel-img"
            loading="lazy"
          />
        </div>
      </div>
      <div className="section-about-coheus__panel-content">
        <h3 className="section-about-coheus__panel-title">{panel.title}</h3>
        {panel.tagline && (
          <p className="section-about-coheus__panel-tagline">{panel.tagline}</p>
        )}
        <p className="section-about-coheus__panel-copy">{panel.copy}</p>
      </div>
    </article>
  )
}

export default function SectionAboutCoheus() {
  const [headerRef, headerInView] = useInView(0.15)
  const [quoteRef, quoteInView] = useInView(0.15)

  return (
    <section id="about-coheus" className="section section-about-coheus section-about-coheus--storyboard" aria-labelledby="about-coheus-title">
      <div className="section-about-coheus__inner">
        <header ref={headerRef} className={`section-about-coheus__header ${headerInView ? 'section-about-coheus__header--visible' : ''}`}>
          <h2 id="about-coheus-title" className="section__title section__title--center">
            The Playbook
          </h2>
          <p className="section-about-coheus__header-lead">
            From data chaos to coaching clarity. A storyboard of how harmonized data changes the game.
          </p>
        </header>

        <div className="section-about-coheus__storyboard">
          {STORYBOARD_PANELS.map((panel, i) => (
            <StoryboardPanel key={panel.id} panel={panel} index={i} />
          ))}
        </div>

        <blockquote ref={quoteRef} className={`section-about-coheus__quote ${quoteInView ? 'section-about-coheus__quote--visible' : ''}`}>
          &ldquo;The goal shouldn&rsquo;t be to buy players. What you want to buy is wins. To buy wins, you buy runs.&rdquo;
          <cite>— Peter Brand</cite>
        </blockquote>

        <div className="section-about-coheus__cta-wrap">
          <button
            type="button"
            className="cta section-about-coheus__cta"
            onClick={() => document.getElementById('cohi-in-action')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            See the Stats
          </button>
        </div>
      </div>
    </section>
  )
}
