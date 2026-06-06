import React from 'react'

export default function StackCard({ stack, index = 0 }) {
  const delay = `${index * 80}ms`
  return (
    <article
      className="stack-card reveal"
      style={{ borderColor: stack.color, ['--delay']: delay }}
      data-index={index}
    >
      <header className="card-head">
        <h4>{stack.name}</h4>
        <span className="duration">{stack.duration}</span>
      </header>
      <p className="level">{stack.level}</p>
      <ul className="milestones">
        {stack.milestones.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </article>
  )
}
