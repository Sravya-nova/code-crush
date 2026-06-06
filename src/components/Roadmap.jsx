import React from 'react'
import StackCard from './StackCard'

export default function Roadmap({ items }) {
  return (
    <section id="roadmap" className="paths container">
      <h2 className="reveal" style={{ ['--delay']: '120ms' }}>Choose Your Path</h2>
      <p className="muted reveal" style={{ ['--delay']: '180ms' }}>Select a domain to begin your architectural journey.</p>

      <div className="periods" aria-hidden>
        <button className="period active">2 Weeks</button>
        <button className="period">1 Month</button>
        <button className="period">3 Months</button>
      </div>

      <div className="cards">
        {items.map((s, i) => (
          <StackCard key={s.id} stack={s} index={i} />
        ))}
      </div>
    </section>
  )
}
