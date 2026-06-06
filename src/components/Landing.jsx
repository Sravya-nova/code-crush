import React, { useEffect } from 'react'
import Hero from './Hero'
import Roadmap from './Roadmap'
import Timeline from './Timeline'
import Footer from './Footer'
import roadmap from '../data/roadmap'
import initReveal from '../utils/reveal'

export default function Landing() {
  useEffect(() => {
    initReveal()
  }, [])
  return (
    <div className="landing">
      <Hero />
      <main className="container">
        <section className="intro">
          <h2>Learn your favorite tech stack with a clear roadmap</h2>
          <p>Choose a stack, follow milestones, and track a suggested time period.</p>
        </section>

        <Roadmap items={roadmap} />

        <Timeline />

        <section className="cta container">
          <div className="cta-panel reveal" style={{ ['--delay']: '420ms' }}>
            <div>
              <h3>Ready to Crush Your Limits?</h3>
              <p className="muted">Join 50,000+ developers mastering the future of technology. Get instant access to all pathways, interactive labs, and our exclusive developer community.</p>
            </div>
            <div className="cta-actions">
              <button className="btn primary">Get Started for Free</button>
              <button className="btn outline">Compare Plans</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
