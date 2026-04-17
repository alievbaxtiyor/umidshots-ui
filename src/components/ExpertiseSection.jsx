import React from 'react';
import './DarkPortfolio.css';

export function ExpertiseSection() {
  const expertise = [
    'Skilled in Video Editing',
    'Professional Videography',
    'Creative Graphic Designing',
    'Product Shoots',
    'Motion Graphics',
    'Photography',
    'Social Media Handling',
    'Brand Focused Content Creation'
  ];

  const software = [
    { name: 'DaVinci Resolve', level: 90, icon: '🎬' },
    { name: 'After Effects', level: 85, icon: 'Ae' },
    { name: 'Premiere Pro', level: 95, icon: 'Pr' },
    { name: 'Adobe Photoshop', level: 80, icon: 'Ps' },
    { name: 'Adobe Illustrator', level: 70, icon: 'Ai' },
    { name: 'Lightroom', level: 75, icon: 'Lr' },
    { name: 'Figma', level: 65, icon: 'F' },
    { name: 'CapCut', level: 90, icon: '✂️' }
  ];

  return (
    <section className="expertise-section">
      <div className="section-container">
        {/* Expertise */}
        <div className="expertise-block">
          <div className="section-title-with-arrow">
            <span className="arrow-icon">↗</span>
            <h2>EXPERTISE</h2>
          </div>

          <div className="expertise-grid">
            {expertise.map((skill, index) => (
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
            <h2>SOFTWARE PROFICIENCY</h2>
          </div>

          <div className="software-grid">
            {software.map((tool, index) => (
              <div key={index} className="software-item">
                <div className="software-header">
                  <span className="software-icon">{tool.icon}</span>
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
