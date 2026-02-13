export default function SectionOneView() {
  const benefits = [
    { title: 'Profit and performance intelligence', text: 'Coheus connects data, market context, and operations into one executive system.' },
    { title: 'Always-on Cohi intelligence', text: 'Continuous analysis, daily executive briefings, and forward-looking control.' },
    { title: 'Mortgage-native by design', text: 'Built for lending workflows with agency and compliance awareness from day one.' },
    { title: 'TopTiering insights', text: 'Clear visibility into top, middle, and bottom performance across sales and operations.' },
    { title: 'Secure and enterprise-ready', text: 'Designed for high-trust environments with disciplined access and governance.' },
    { title: 'Fast time to value', text: 'Get from connection to executive insight quickly, without heavy implementation drag.' },
  ]

  return (
    <section id="one-view" className="section section--alt section--with-pattern" aria-labelledby="one-view-title">
      <h2 id="one-view-title" className="section__title">
        What makes Coheus different
      </h2>
      <p className="section__subtitle section__subtitle--center">
        A fintech-grade, SaaS-ready intelligence platform built for confidence, clarity, and speed.
      </p>
      <ul className="one-view__list">
        {benefits.map(({ title, text }) => (
          <li key={title} className="one-view__item">
            <h3 className="one-view__item-title">{title}</h3>
            <p className="one-view__item-text">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
