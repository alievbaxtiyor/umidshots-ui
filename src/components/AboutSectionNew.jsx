import React from 'react';
import './DarkPortfolio.css';
import heroImage from '../assets/images/hero.png';

export function AboutSectionNew() {
  return (
    <section className="about-section-dark">
      <div className="section-container">
        <div className="content-grid">
          {/* Left Side - Image */}
          <div className="about-image-side">
            <div className="about-image-wrapper">
              <div className="image-accent-bar"></div>
              <img
                src={heroImage}
                alt="Umidshots"
                className="about-image"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-content-side">
            <div className="section-header">
              <span className="greeting">Salom, men</span>
              <h2 className="name-large">UMIDSHOTS</h2>
              <h3 className="name-accent">ALIYEV UMID</h3>
            </div>

            <p className="about-description">
              Professional video editor va mobilograf. Har bir loyihani
              professional sifat va ijodiy yondoshuv bilan tayyorlayman.
              Video montaj, mobilografiya va kreativ kontentlar yaratish
              bo'yicha tajribaga egaman.
            </p>

            <div className="stats-row">
              <div className="stat-box">
                <div className="stat-divider"></div>
                <div className="stat-content">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Yillik tajriba</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-divider"></div>
                <div className="stat-content">
                  <span className="stat-number">300+</span>
                  <span className="stat-label">Video tayyorlandi</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-divider"></div>
                <div className="stat-content">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Brendlar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
