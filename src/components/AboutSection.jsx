import React from 'react';
import { CardBody, CardContainer, CardItem } from './3d-card';
import './ProfileCard.css';

export function AboutSection() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="profile-card-glass relative group/card w-full max-w-[800px] h-auto">
        <div className="about-content">
          <CardItem translateZ={60} className="w-full mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-3">
              Men haqimda
            </h2>
          </CardItem>

          <CardItem translateZ={50} className="w-full mb-6">
            <p className="text-neutral-700 dark:text-neutral-200 text-base md:text-lg leading-relaxed mb-4">
              Salom! Men Umid, professional mobilograf va videograf.
              Mobil telefonlar orqali professional video kontentlar yaratishga ixtisoslashganman.
            </p>
            <p className="text-neutral-700 dark:text-neutral-200 text-base md:text-lg leading-relaxed mb-4">
              Ko'p yillik tajribam davomida After Effects, Premiere Pro, DaVinci Resolve va
              CapCut kabi professional dasturlar bilan ishlashni o'rgandim. Har bir loyihaga
              ijodiy va professional yondashuvni qo'llashga intilamani.
            </p>
          </CardItem>

          <CardItem translateZ={40} className="w-full">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Yillik tajriba</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Yaratilgan videolar</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Mijozlar</div>
              </div>
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
