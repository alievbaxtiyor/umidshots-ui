import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ExpertiseSection.css';

// Import local icons
import davinciIcon from '../assets/icons/davinchi.png';
import afterEffectsIcon from '../assets/icons/after-effect.png';
import premiereProIcon from '../assets/icons/premier-pro.png';
import capCutIcon from '../assets/icons/cap-cut.png';
import photoshopIcon from '../assets/icons/photoshop.png';
import illustratorIcon from '../assets/icons/AdobeIllustrator.png';
import lightroomIcon from '../assets/icons/lightroom.png';
import figmaIcon from '../assets/icons/figma.png';

// Software icons mapping
const softwareIcons = {
  'Davinci Resolve': davinciIcon,
  'After Effects': afterEffectsIcon,
  'Premiere Pro': premiereProIcon,
  'Adobe Photoshop': photoshopIcon,
  'Adobe Illustrator': illustratorIcon,
  'Adobe Lightroom': lightroomIcon,
  'Figma': figmaIcon,
  'Capcut': capCutIcon
};

export function ExpertiseSection() {
  const { t } = useLanguage();

  return (
    <section className="expertise-section">
      <div className="expertise-container">
        {/* Expertise */}
        <div className="expertise-block">
          <div className="section-title-with-arrow">
            <span className="arrow-icon">↗</span>
            <h2>{t('expertise.title')}</h2>
          </div>

          <div className="expertise-grid">
            {t('expertise.skills').map((skill, index) => (
              <div key={index} className="expertise-item">
                <span className="bullet">•</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Software Proficiency */}
        <div className="software-block">
          <div className="section-title-with-arrow">
            <span className="arrow-icon">↗</span>
            <h2>{t('software.title')}</h2>
          </div>

          <div className="software-grid">
            {t('software.tools').map((tool, index) => (
              <div key={index} className="software-item">
                <div className="software-header">
                  <div className="software-icon">
                    {softwareIcons[tool.name] && typeof softwareIcons[tool.name] === 'string' && !softwareIcons[tool.name].startsWith('data:') ? (
                      <img
                        src={softwareIcons[tool.name]}
                        alt={tool.name}
                      />
                    ) : softwareIcons[tool.name] ? (
                      <span className="software-icon-text">{softwareIcons[tool.name]}</span>
                    ) : (
                      <span className="software-icon-text">⚡</span>
                    )}
                  </div>
                  <span className="software-name">{tool.name}</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${tool.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
