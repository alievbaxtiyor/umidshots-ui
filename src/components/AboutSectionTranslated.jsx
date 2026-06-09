import React from 'react';
import './AboutSection.css';
import aboutImage from '../assets/images/hero-removebg-preview_cleanup.png';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AboutSection() {
  const { t } = useLanguage();
  const imageRef = useScrollAnimation();
  const introRef = useScrollAnimation({ threshold: 0.2 });
  const statsRef = useScrollAnimation({ threshold: 0.3 });
  const educationRef = useScrollAnimation({ threshold: 0.2 });
  const experienceRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Top Section - Profile and Intro */}
        <div className="about-top">
          {/* Profile Image */}
          <div ref={imageRef} className="about-image-wrapper animate-fade-left">
            <img
              src={aboutImage}
              alt="Umidshots - Video Editor"
              className="about-image"
            />
          </div>

          {/* Intro Text */}
          <div ref={introRef} className="about-intro animate-fade-right">
            <h1 className="about-name">
              <span className="about-greeting">{t('about.greeting')}</span>{' '}
              <span className="name-with-line">{t('about.name')}</span><br />
              <span className="highlight">{t('about.surname')}</span>
            </h1>

            <p className="about-description">
              {t('about.description')}
            </p>

            {/* Stats */}
            <div ref={statsRef} className="about-stats animate-fade-up">
              <div className="stat-item">
                <h3 className="stat-number">{t('about.stats.experience.number')}</h3>
                <p className="stat-label">{t('about.stats.experience.label')}</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">{t('about.stats.videos.number')}</h3>
                <p className="stat-label">{t('about.stats.videos.label')}</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">{t('about.stats.brands.number')}</h3>
                <p className="stat-label">{t('about.stats.brands.label')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Education & Experience */}
        <div className="about-bottom">
          {/* Education */}
          <div ref={educationRef} className="about-column animate-fade-left">
            <h2>{t('about.education.title')}</h2>

            {t('about.education.items').map((item, index) => (
              <div key={index} className="timeline-item">
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-subtitle">
                  <span>{item.institution}</span>
                  <span className="timeline-year">{item.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div ref={experienceRef} className="about-column animate-fade-right">
            <h2>{t('about.experience.title')}</h2>

            {t('about.experience.items').map((item, index) => (
              <div key={index} className="timeline-item">
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-subtitle">
                  <span>{item.company}</span>
                  <span className="timeline-year">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
