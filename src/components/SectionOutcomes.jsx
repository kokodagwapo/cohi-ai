import { useEffect, useRef, useState } from 'react'

const outcomes = [
  {
    title: 'Margin intelligence',
    quote: 'Know where profit is won or lost—before the board asks.',
    text: 'Strategic visibility into pricing, spread, and operating discipline. Answer investor and board questions with confidence, not scrambling.',
  },
  {
    title: 'Pipeline early-warning',
    quote: 'See fallout and concentration risk before it hits the P&L.',
    text: 'Forward-looking signals on funded volume and pipeline slippage. Intervene when it matters—not after the quarter closes.',
  },
  {
    title: 'Speed to decision',
    quote: 'Act on intelligence in hours, not weeks.',
    text: 'Prioritized guidance at executive speed. Data that moves with the market so you can, too.',
  },
  {
    title: 'Your lane, your metrics',
    quote: 'What the CEO needs. What the CFO needs. No overlap, no noise.',
    text: 'Role-specific views for CEO, CFO, CLO, COO—the decisions you own, the risks you carry, the actions that move the needle.',
  },
  {
    title: 'Compliance without fire drills',
    quote: 'Buyback risk and agency exposure—staying ahead, not reacting.',
    text: 'TRID, ATR/QM, agency guidelines. Proactive monitoring so audit committee and investors sleep better.',
  },
  {
    title: 'Board and investor ready',
    quote: 'One source of truth. No competing narratives.',
    text: 'Export-ready briefings that align the room. Sales, ops, and finance on the same page—so the board gets clarity, not debate.',
  },
]

function useInView(threshold = 0.2) {
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
      { threshold, rootMargin: '0px 0px -120px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}

export default function SectionOutcomes() {
  const [sectionRef, inView] = useInView(0.2)

  return (
    <section
      ref={sectionRef}
      className={`section section-outcomes ${inView ? 'section-outcomes--visible' : ''}`}
      aria-labelledby="outcomes-title"
    >
      <h2 id="outcomes-title" className="section__title section__title--center">
        The Edge: Outcomes That Compound
      </h2>
      <p className="section__subtitle section__subtitle--center">
        Executive-grade intelligence for margin, risk, and speed. The clarity C-suite needs to act—and the confidence boards expect.
      </p>
      <div className="outcomes__grid">
        {outcomes.map(({ title, quote, text }, index) => (
          <article
            key={title}
            className="outcome-card"
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <h3 className="outcome-card__title">{title}</h3>
            <p className="outcome-card__quote">{quote}</p>
            <p className="outcome-card__text">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
