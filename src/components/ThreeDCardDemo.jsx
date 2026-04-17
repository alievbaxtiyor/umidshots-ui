import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { IoPlayCircle, IoMail, IoLogoInstagram } from "react-icons/io5";
import "./ProfileCard.css";
import heroImage from "../assets/images/hero.png";
import afterEffectIcon from "../assets/icons/after-effect.png";
import premierProIcon from "../assets/icons/premier-pro.png";
import capCutIcon from "../assets/icons/cap-cut.png";
import davinciIcon from "../assets/icons/davinchi.png";

export function ThreeDCardDemo() {
  const skills = [
    { name: "After Effects", icon: afterEffectIcon },
    { name: "Premiere Pro", icon: premierProIcon },
    { name: "CapCut", icon: capCutIcon },
    { name: "DaVinci Resolve", icon: davinciIcon }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="profile-card-glass relative group/card w-full max-w-[700px] h-auto">
        <div className="profile-card-content">
          <CardItem translateZ={50} className="profile-image-wrapper">
            <img
              src={heroImage}
              className="profile-image"
              alt="Umidshots - Professional Videographer"
            />
            <div className="profile-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Aktiv</span>
            </div>
          </CardItem>
          <div className="profile-text-content">
            <CardItem translateZ={60} className="w-full">
              <div className="hero-title-wrapper">
                <h1 className="hero-title">
                  Umidshots
                </h1>
                <p className="hero-name">Aliyev Umid</p>
              </div>
              <p className="hero-role">
                Mobilograf | Videograf | Video Muharrir
              </p>
            </CardItem>

            <CardItem translateZ={50} className="w-full mb-5">
              <p className="hero-description">
                Har bir lahzani professional video kontentga aylantirishga ixtisoslashgan.
                Mobil videografiya va zamonaviy montaj texnikalari orqali sizning g'oyalaringizni hayotga tatuqtiraman.
              </p>
            </CardItem>

            <CardItem translateZ={45} className="w-full mb-5">
              <div className="cta-buttons">
                <button
                  className="cta-primary"
                  onClick={() => scrollToSection('portfolio')}
                  aria-label="Portfolio ko'rish"
                >
                  <IoPlayCircle size={20} />
                  <span>Ishlarimni ko'ring</span>
                </button>
                <button
                  className="cta-secondary"
                  onClick={() => scrollToSection('links')}
                  aria-label="Bog'lanish"
                >
                  <IoMail size={20} />
                  <span>Bog'lanish</span>
                </button>
              </div>
            </CardItem>

            <CardItem translateZ={35} className="w-full">
              <div className="skills-section">
                <h3 className="skills-title">Texnologiyalar</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item" title={skill.name}>
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      <span className="skill-tooltip">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardItem>

            <CardItem translateZ={30} className="w-full mt-4">
              <a
                href="https://instagram.com/umidshots"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-inline"
                aria-label="Instagram profilini ko'rish"
              >
                <IoLogoInstagram size={18} />
                <span>@umidshots</span>
              </a>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
