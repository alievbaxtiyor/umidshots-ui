import React from 'react';
import './DarkPortfolio.css';
import heroImage from '../assets/images/hero.png';

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Top Labels */}
        <div className="hero-labels">
          <span className="label-left">VIDEO EDITOR</span>
          <span className="label-right">PORTFOLIO</span>
        </div>

        {/* Main Content */}
        <div className="hero-content">
          {/* Large Text Background */}
          <h1 className="hero-large-text">
            UMIDSHOTS
          </h1>

          {/* Profile Image */}
          <div className="hero-image-wrapper">
            <img
              src={heroImage}
              alt="Umidshots - Professional Video Editor"
              className="hero-image"
            />
          </div>

          {/* Bottom Info */}
          <div className="hero-info">
            <div className="arrow-accent">↗</div>
            <div className="hero-title">
              <h2>Mobilograf</h2>
              <h3>Video Muharrir</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
