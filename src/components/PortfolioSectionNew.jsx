import React from 'react';
import './DarkPortfolio.css';

export function PortfolioSectionNew() {
  const categories = [
    {
      number: '1.',
      title: 'PRESENTATION VIDEOS',
      description: 'Professional taqdimot videolari'
    },
    {
      number: '2.',
      title: 'MOTION GRAPHICS',
      description: 'Animatsiyali grafik dizayn'
    },
    {
      number: '3.',
      title: 'WIDESCREEN VIDEOS',
      description: 'Keng ekran video kontentlar'
    },
    {
      number: '4.',
      title: 'SOCIAL MEDIA REELS',
      description: 'Ijtimoiy tarmoqlar uchun reels'
    }
  ];

  return (
    <section className="portfolio-section-new">
      <div className="section-container">
        {/* Section Header */}
        <div className="portfolio-header">
          <div className="header-top">
            <span className="portfolio-year">PORTFOLIO 2026</span>
            <span className="portfolio-subtitle">SELECTED WORK - 2024-2025</span>
          </div>
        </div>

        {/* Categories */}
        <div className="portfolio-categories">
          <h2 className="categories-title">CONTENTS</h2>
          <div className="categories-grid">
            {categories.map((cat, index) => (
              <div key={index} className="category-card">
                <span className="category-number">{cat.number}</span>
                <div className="category-content">
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-desc">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Showcase Placeholder */}
        <div className="video-showcase">
          <div className="showcase-title-wrapper">
            <h3 className="showcase-category">
              <span className="category-line"></span>
              Presentation Videos
            </h3>
          </div>

          <div className="video-grid">
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="video-placeholder">
                  <span>Timeline</span>
                </div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="video-placeholder">
                  <span>Raw Footage</span>
                </div>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="video-placeholder">
                  <span>Final Render</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
