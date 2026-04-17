import React from 'react';
import { CardBody, CardContainer, CardItem } from './3d-card';
import { IoLogoInstagram, IoLogoYoutube, IoLogoTiktok, IoMail, IoCall } from 'react-icons/io5';
import './ProfileCard.css';

export function LinksSection() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: IoLogoInstagram,
      url: "https://instagram.com/umidshots",
      handle: "@umidshots",
      color: "#E4405F"
    },
    {
      name: "YouTube",
      icon: IoLogoYoutube,
      url: "https://youtube.com/@umidshots",
      handle: "@umidshots",
      color: "#FF0000"
    },
    {
      name: "TikTok",
      icon: IoLogoTiktok,
      url: "https://tiktok.com/@umidshots",
      handle: "@umidshots",
      color: "#000000"
    },
    {
      name: "Email",
      icon: IoMail,
      url: "mailto:umidshots@gmail.com",
      handle: "umidshots@gmail.com",
      color: "#EA4335"
    },
    {
      name: "Telefon",
      icon: IoCall,
      url: "tel:+998901234567",
      handle: "+998 90 123 45 67",
      color: "#34A853"
    }
  ];

  return (
    <CardContainer className="inter-var">
      <CardBody className="profile-card-glass relative group/card w-full max-w-[700px] h-auto">
        <div className="links-content">
          <CardItem translateZ={60} className="w-full mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-3">
              Bog'lanish
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-base">
              Men bilan bog'laning
            </p>
          </CardItem>

          <CardItem translateZ={40} className="w-full">
            <div className="links-grid">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-item"
                  style={{ '--hover-color': link.color }}
                >
                  <div className="link-icon">
                    <link.icon size={32} />
                  </div>
                  <div className="link-info">
                    <div className="link-name">{link.name}</div>
                    <div className="link-handle">{link.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
