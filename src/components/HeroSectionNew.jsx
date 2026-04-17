import React from 'react';
import './HeroStyles.css';
import heroImage from '../assets/images/hero-removebg-preview_cleanup.png';

export function HeroSection() {
  return (
    <section className="hero-section-white">
      {/* Logo - Fixed at top */}
      <div className="hero-logo">
        UMIDSHOTS
      </div>

      <div className="hero-container-white">
        {/* Main Content with Large Text */}
        <div className="hero-main-content">
          {/* Large PORTFOLIO Text with Gradient */}
          <h1 className="hero-portfolio-text">
            PORTFOLIO
          </h1>

          {/* Profile Image Centered */}
          <div className="hero-profile-wrapper">
            <img
              src={heroImage}
              alt="Umidshots - Professional Video Editor"
              className="hero-profile-image"
            />
          </div>
        </div>

        {/* Bottom Role Text */}
        <div className="hero-bottom-role">
          <span className="role-slash">//</span>
          <div className="role-text">
            <h2>Video Editor</h2>
            <h3>Visual Designer</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
