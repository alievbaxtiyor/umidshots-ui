import React, { createContext, useState, useContext, useEffect } from 'react';
import en from '../locales/en.json';
import uz from '../locales/uz.json';
import ru from '../locales/ru.json';

const LanguageContext = createContext();

const translations = {
  EN: en,
  UZ: uz,
  RU: ru
};

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(() => {
    // Get language from localStorage or default to EN
    return localStorage.getItem('language') || 'EN';
  });

  useEffect(() => {
    // Save language to localStorage when it changes
    localStorage.setItem('language', currentLang);
  }, [currentLang]);

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
