import React from 'react'

export default function Hero() {
  return (
    <header className="hero-landing">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="brand">Code Crush</div>
          <nav className="nav">
            <a href="#pathways">Pathways</a>
            <a href="#topics">Topics</a>
            <a href="#leaderboard">Leaderboard</a>
            <a href="#docs">Docs</a>
          </nav>
          <div className="actions">
            <button className="btn ghost">Login</button>
            <button className="btn primary">Start Learning</button>
          </div>
        </div>
      </div>

      <div className="hero-inner container">
        <div className="hero-copy reveal" style={{ ['--delay']: '80ms' }}>
          <span className="tag">v2.0 — now live</span>
          <h1>
            Master Development
            <br />
            <strong>Through Focused</strong>
            <br />
            <em className="accent">Pathways</em>
          </h1>
          <p className="hero-desc">Ditch the tutorial hell. Code Crush provides an immersive, high-intensity environment to master modern engineering patterns through curriculum-driven roadmaps and interactive challenges.</p>
          <div className="hero-ctas">
            <button className="btn primary">Enter the Flow State</button>
            <button className="btn outline">Explore Roadmaps</button>
          </div>
        </div>
        <div className="hero-art reveal" aria-hidden="true" style={{ ['--delay']: '240ms' }}>
          <div className="spotlight" />
        </div>
      </div>
    </header>
  )
}
