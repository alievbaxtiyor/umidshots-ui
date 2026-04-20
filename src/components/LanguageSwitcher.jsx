import React, { useState } from 'react';
import './LanguageSwitcher.css';
import translateIcon from '../assets/icons/translate.png';
import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLang, changeLanguage } = useLanguage();

  const languages = [
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'UZ', label: 'O\'zbek', flag: '🇺🇿' },
    { code: 'RU', label: 'Русский', flag: '🇷🇺' }
  ];

  const handleLanguageChange = (lang) => {
    changeLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      {/* Floating Button */}
      <button
        className="lang-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <img src={translateIcon} alt="Translate" className="lang-icon" />
        <span className="lang-code">{currentLang}</span>
      </button>

      {/* Language Options Popup */}
      {isOpen && (
        <div className="lang-popup">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${currentLang === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang)}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-label">{lang.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close popup when clicking outside */}
      {isOpen && (
        <div
          className="lang-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
