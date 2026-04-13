import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title">Welcome to My Portfolio</h2>
        <p className="hero-subtitle">Full Stack Developer | React Enthusiast | Creative Problem Solver</p>
        <button className="hero-btn">View My Work</button>
      </div>
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>
    </section>
  );
}

export default Hero;
