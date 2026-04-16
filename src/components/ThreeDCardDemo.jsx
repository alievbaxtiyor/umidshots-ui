import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
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

  return (
    <CardContainer className="inter-var">
      <CardBody className="profile-card-glass relative group/card w-full max-w-[600px] h-auto">
        <div className="profile-card-content">
          <CardItem translateZ={50} className="profile-image-wrapper">
            <img
              src={heroImage}
              className="profile-image"
              alt="profile"
            />
          </CardItem>
          <div className="profile-text-content">
            <CardItem translateZ={60} className="w-full">
              <h2 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-white mb-2">
                Umidshots | Aliyev Umid
              </h2>
              <p className="text-neutral-500 dark:text-neutral-300 text-sm mb-4">
                Mobilographer, Videographer, Editor
              </p>
            </CardItem>
            <CardItem translateZ={40} className="w-full mb-4">
              <p className="text-neutral-600 dark:text-neutral-200 text-sm leading-relaxed">
                Passionate about creating beautiful and functional web experiences.
              </p>
            </CardItem>
            <CardItem translateZ={30} className="w-full">
              <div className="skills-section">
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    </div>
                  ))}
                </div>
              </div>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
