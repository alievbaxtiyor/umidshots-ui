import React from 'react';
import { CardBody, CardContainer, CardItem } from './3d-card';
import './ProfileCard.css';

export function PortfolioSection() {
  const projects = [
    {
      title: "Mahsulot tanishtiruvi",
      category: "Commercial",
      description: "Premium mahsulotlar uchun professional tanishuv videosi"
    },
    {
      title: "To'y videografiyasi",
      category: "Event",
      description: "Unutilmas lahzalarni qayd etish"
    },
    {
      title: "Reklama video",
      category: "Marketing",
      description: "Biznesingiz uchun samarali video marketing"
    },
    {
      title: "Social Media Content",
      category: "Social",
      description: "Instagram, TikTok va YouTube uchun maxsus kontentlar"
    }
  ];

  return (
    <CardContainer className="inter-var">
      <CardBody className="profile-card-glass relative group/card w-full max-w-[900px] h-auto">
        <div className="portfolio-content">
          <CardItem translateZ={60} className="w-full mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-3">
              Portfolio
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-base">
              Mening eng yaxshi ishlarim
            </p>
          </CardItem>

          <CardItem translateZ={40} className="w-full">
            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <div key={index} className="portfolio-item">
                  <div className="portfolio-item-content">
                    <span className="portfolio-category">{project.category}</span>
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-description">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
