import React from 'react';
import './AboutSection.css';
import aboutImage from '../assets/images/hero-removebg-preview_cleanup.png';

export function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Top Section - Profile and Intro */}
        <div className="about-top">
          {/* Profile Image */}
          <div className="about-image-wrapper">
            <img
              src={aboutImage}
              alt="Umidshots - Video Editor"
              className="about-image"
            />
          </div>

          {/* Intro Text */}
          <div className="about-intro">
            <h1 className="about-name">
              <span className="about-greeting">Hi, iam</span> <span className="name-with-line">ALIYEV</span><br />
              <span className="highlight">UMID</span>
            </h1>

            <p className="about-description">
              Passionate creator specializing in Video Editing, Videography,
              Photography and Graphic Design. With over three years of professional
              experience, I turn ideas into meaningful visual stories through thoughtful
              execution and creative precision. I continue to explore new concepts,
              refine my craft, and push creative boundaries to deliver impactful work.
            </p>

            {/* Stats */}
            <div className="about-stats">
              <div className="stat-item">
                <h3 className="stat-number">3+ years</h3>
                <p className="stat-label">Experience</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">300+ Videos</h3>
                <p className="stat-label">Completed</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">30+ Brands</h3>
                <p className="stat-label">Collaborated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Education & Experience */}
        <div className="about-bottom">
          {/* Education */}
          <div className="about-column">
            <h2>EDUCATION</h2>

            <div className="timeline-item">
              <h3 className="timeline-title">DIPLOMA IN MULTIMEDIA DESIGN</h3>
              <div className="timeline-subtitle">
                <span>Etudemy Digital Academy</span>
                <span className="timeline-year">2023</span>
              </div>
            </div>

            <div className="timeline-item">
              <h3 className="timeline-title">DIPLOMA IN DIGITAL MARKETING</h3>
              <div className="timeline-subtitle">
                <span>Etudemy Digital Academy</span>
                <span className="timeline-year">2023</span>
              </div>
            </div>

            <div className="timeline-item">
              <h3 className="timeline-title">HIGHER SECONDARY EDUCATION</h3>
              <div className="timeline-subtitle">
                <span>HSE Board of Examination</span>
                <span className="timeline-year">2022</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="about-column">
            <h2>EXPERIENCE</h2>

            <div className="timeline-item">
              <h3 className="timeline-title">VIDEO EDITOR CUM VIDEOGRAPHER</h3>
              <div className="timeline-subtitle">
                <span>Finquo Versity, Calicut</span>
                <span className="timeline-year">2025</span>
              </div>
            </div>

            <div className="timeline-item">
              <h3 className="timeline-title">VIDEO EDITOR</h3>
              <div className="timeline-subtitle">
                <span>Brand Packt, Ernakulam</span>
                <span className="timeline-year">2024</span>
              </div>
            </div>

            <div className="timeline-item">
              <h3 className="timeline-title">VIDEO EDITOR & SMM</h3>
              <div className="timeline-subtitle">
                <span>Trend Factory, Perintalmanna</span>
                <span className="timeline-year">2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
