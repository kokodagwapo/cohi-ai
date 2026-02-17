import { useRef, useEffect, useState } from 'react'

const TOPTIERING_PANELS = [
  {
    id: 'gap',
    src: '/ugc/playbook/toptiering-gap.png',
    title: 'The 200+ BP Performance Gap',
    tagline: '$4.6M total revenue. 56 LOs. Only 7 in the Top Tier.',
    copy: 'Revenue by Loan Officer tells the real story: a massive spread between your best and worst producers. Without structured ranking, your top performers go unrecognized and compensation stays disconnected from actual results.',
  },
  {
    id: 'overview',
    src: '/ugc/playbook/toptiering-overview.png',
    title: 'Rank Every LO in Real Time',
    tagline: 'One dashboard. Every metric that matters.',
    copy: 'TopTiering Comparison gives you the full picture—revenue, units, BPS—ranked high to low across every loan officer. Filter by time period, switch between branch and LO views, and see exactly who drives production and who needs support.',
  },
  {
    id: 'coaching',
    src: '/ugc/playbook/toptiering-coaching.png',
    title: 'Drill Down to Every LO',
    tagline: 'Revenue, units, BPS—per loan officer, on mobile.',
    copy: 'Managers can pull up any loan officer\'s performance on their phone. See revenue contribution, unit volume, and basis points side by side. Spot gaps instantly and turn every 1:1 into a targeted coaching conversation backed by real data.',
  },
  {
    id: 'compensation',
    src: '/ugc/playbook/toptiering-compensation.png',
    title: 'See the Tiers. Align the Comp.',
    tagline: 'Top Tier: $2.2M · Second Tier: $1.5M · Bottom Tier: $950K',
    copy: '7 Top Tier LOs produce $2.2M at $308K avg revenue and 41 avg units. 35 Bottom Tier LOs produce $950K at $27K avg. When you see the tiers clearly, compensation conversations shift from volume to value—retain top talent and reduce costly turnover.',
  },
  {
    id: 'impact',
    src: '/ugc/playbook/toptiering-impact.png',
    title: 'Stop Looking in the Rear-View Mirror',
    tagline: '28 at-risk loans. $10.58M in volume. Predicted before it\'s lost.',
    copy: 'Fallout Predictions identify loans likely to withdraw or deny before margin is lost. See every at-risk loan with confidence scores, amounts, milestones, and the loan officer responsible—so you can act now instead of reporting losses later.',
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
        <div className="section-about-coheus__storyboard">
          {TOPTIERING_PANELS.map((panel, i) => (
            <StoryboardPanel key={panel.id} panel={panel} index={i} />
          ))}
        </div>

        <blockquote ref={quoteRef} className={`section-about-coheus__quote ${quoteInView ? 'section-about-coheus__quote--visible' : ''}`}>
          &ldquo;You can&rsquo;t manage what you can&rsquo;t measure. TopTiering turns loan officer data into actionable intelligence.&rdquo;
          <cite>— The Coheus Philosophy</cite>
        </blockquote>

        <div className="section-about-coheus__cta-wrap">
          <button
            type="button"
            className="cta section-about-coheus__cta"
            onClick={() => document.getElementById('cohi-in-action')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            Explore the Platform
          </button>
        </div>
      </div>
    </section>
  )
}
