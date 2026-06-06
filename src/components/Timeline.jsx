import React from 'react'

const phases = [
  { id: 1, title: 'Introduction', desc: 'Setting up the enterprise-grade environment and understanding basic primitives.' },
  { id: 2, title: 'Core Concepts', desc: 'Deep dive into memory management, async patterns, and architectural layers.' },
  { id: 3, title: 'Advanced Patterns', desc: 'Implementing design patterns, dependency injection, and advanced caching strategies.' },
  { id: 4, title: 'Capstone Project', desc: 'Build and deploy a production-ready system with full CI/CD and observability.' }
]

export default function Timeline() {
  return (
    <section className="timeline container">
      <h2>Learning Pathway</h2>
      <p className="muted">Your curated route to seniority. Each step is designed to challenge your mental models.</p>

      <div className="timeline-wrap">
        <div className="line" />

        {phases.map((p, i) => (
          <div
            key={p.id}
            className={`phase reveal ${i % 2 === 0 ? 'ph1' : 'ph2'} ${p.id === phases.length ? 'final' : ''}`}
            style={{ ['--delay']: `${i * 120}ms` }}
            data-index={i}
          >
            <div className="bubble">{p.id === phases.length ? 'Final' : `Phase ${String(p.id).padStart(2, '0')}`}</div>
            <div className="card-box">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
