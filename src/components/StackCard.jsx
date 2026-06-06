import React from 'react'

export default function StackCard({ stack, index = 0 }) {
  const delay = `${index * 80}ms`
  const isHighlight = stack.id === 'system-design' || stack.name.toLowerCase().includes('system')

  return (
    <article
      className={`stack-card reveal ${isHighlight ? 'highlight' : ''}`}
      style={{ ['--delay']: delay }}
      data-index={index}
    >
      <header className="card-head">
        <div className="icon-box" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor"/></svg>
        </div>
        <div style={{flex:1}}>
          <h4>{stack.name}</h4>
          <div className="meta">{stack.milestones.length} lessons • {stack.level.split(' ')[0]}</div>
        </div>
        <span className="duration">{stack.duration}</span>
      </header>
      <p className="level">{stack.level}</p>
      <ul className="milestones">
        {stack.milestones.slice(0,3).map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </article>
  )
}
